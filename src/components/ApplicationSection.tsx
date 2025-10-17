import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Upload, Send, CheckCircle, FileText } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";

const ApplicationSection = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    phoneNumber: '',
    countryCode: 'IN',
    emailAddress: '',
    jobCategory: ''
  });
  const [validationErrors, setValidationErrors] = useState<{[key: string]: string}>({});
  const [cvFile, setCvFile] = useState<File | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccessDialog, setShowSuccessDialog] = useState(false);
  const { toast } = useToast();

  const jobCategories = [
    "Construction Worker",
    "Electrician",
    "Plumber", 
    "Welder",
    "Fabricator",
    "Driver",
    "Hospitality Staff",
    "Cleaning Staff",
    "Other"
  ];

  const countries = [
    { code: 'IN', name: 'India', flag: '🇮🇳' },
    { code: 'NP', name: 'Nepal', flag: '🇳🇵' }
  ];

  const validateForm = () => {
    const errors: {[key: string]: string} = {};
    
    // Full Name validation
    if (!formData.fullName.trim()) {
      errors.fullName = 'Full name is required';
    } else if (formData.fullName.length > 100) {
      errors.fullName = 'Full name must be less than 100 characters';
    }
    
    // Phone validation
    if (!formData.phoneNumber.trim()) {
      errors.phoneNumber = 'Phone number is required';
    } else {
      const phoneDigits = formData.phoneNumber.replace(/\D/g, '');
      if (phoneDigits.length !== 10) {
        errors.phoneNumber = 'Phone number must be exactly 10 digits';
      }
    }
    
    // Email validation (optional but if provided, must be valid)
    if (formData.emailAddress.trim()) {
      if (formData.emailAddress.length > 150) {
        errors.emailAddress = 'Email must be less than 150 characters';
      } else {
        const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        if (!emailRegex.test(formData.emailAddress)) {
          errors.emailAddress = 'Please enter a valid email address';
        }
        
        // Check local part rules
        const localPart = formData.emailAddress.split('@')[0];
        const localPartRegex = /^[a-zA-Z0-9._-]+$/;
        if (!localPartRegex.test(localPart)) {
          errors.emailAddress = 'Email can only contain letters, numbers, dots, underscores, and hyphens before @';
        }
      }
    }
    
    // Job Category validation
    if (!formData.jobCategory) {
      errors.jobCategory = 'Job category is required';
    }
    
    setValidationErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      toast({
        title: "Validation Error",
        description: "Please correct the errors in the form.",
        variant: "destructive"
      });
      return;
    }

    if (!cvFile) {
      toast({
        title: "CV Required",
        description: "Please upload your CV to proceed.",
        variant: "destructive"
      });
      return;
    }

    setIsSubmitting(true);
    
    try {
      // Upload CV to Supabase storage
      const fileExt = cvFile.name.split('.').pop();
      const fileName = `${Date.now()}-${Math.random().toString(36).substring(2)}.${fileExt}`;
      
      const { data: uploadData, error: uploadError } = await supabase.storage
        .from('cvs')
        .upload(fileName, cvFile);

      if (uploadError) {
        throw new Error(`CV upload failed: ${uploadError.message}`);
      }

      // Get the public URL for the uploaded file
      const { data: urlData } = supabase.storage
        .from('cvs')
        .getPublicUrl(fileName);

      // Save application data to database
      const { error: dbError } = await supabase
        .from('applications')
        .insert({
          full_name: formData.fullName,
          country_code: formData.countryCode,
          phone_number: formData.phoneNumber,
          full_phone: `+${formData.countryCode === 'IN' ? '91' : '977'}${formData.phoneNumber}`,
          email: formData.emailAddress || null,
          job_category: formData.jobCategory,
          cv_url: urlData.publicUrl
        });

      if (dbError) {
        throw new Error(`Database save failed: ${dbError.message}`);
      }

      // Reset form and show success
      setFormData({ fullName: '', phoneNumber: '', countryCode: 'IN', emailAddress: '', jobCategory: '' });
      setCvFile(null);
      setValidationErrors({});
      setShowSuccessDialog(true);
      
    } catch (error) {
      console.error('Application submission error:', error);
      toast({
        title: "Submission Failed",
        description: error instanceof Error ? error.message : "Failed to submit application. Please try again.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    
    // Clear validation error when user starts typing
    if (validationErrors[name]) {
      setValidationErrors({
        ...validationErrors,
        [name]: ''
      });
    }
    
    // For phone number, only allow digits
    if (name === 'phoneNumber') {
      const digitsOnly = value.replace(/\D/g, '');
      setFormData({
        ...formData,
        [name]: digitsOnly
      });
    } else {
      setFormData({
        ...formData,
        [name]: value
      });
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      // Check file type
      const allowedTypes = ['application/pdf', 'application/msword', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'];
      if (!allowedTypes.includes(file.type)) {
        toast({
          title: "Invalid File Type",
          description: "Please upload a PDF or DOC file.",
          variant: "destructive"
        });
        return;
      }
      
      // Check file size (2MB limit)
      if (file.size > 2 * 1024 * 1024) {
        toast({
          title: "File Too Large",
          description: "Please upload a file smaller than 2MB.",
          variant: "destructive"
        });
        return;
      }
      
      setCvFile(file);
    }
  };

  const handleCategoryChange = (value: string) => {
    // Clear validation error when user selects category
    if (validationErrors.jobCategory) {
      setValidationErrors({
        ...validationErrors,
        jobCategory: ''
      });
    }
    
    setFormData({
      ...formData,
      jobCategory: value
    });
  };

  const handleCountryChange = (value: string) => {
    setFormData({
      ...formData,
      countryCode: value
    });
  };

  return (
    <>
      <section id="apply" className="section-padding bg-card">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-heading font-bold text-primary mb-6">
              Submit Your Application
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Ready to start your career in Saudi Arabia? Submit your application with your CV and we'll match you with the right opportunities.
            </p>
          </div>

          <div className="max-w-2xl mx-auto">
            <div className="bg-secondary/30 rounded-2xl p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="fullName" className="block text-sm font-medium text-foreground mb-2">
                    Full Name *
                  </label>
                  <Input
                    id="fullName"
                    name="fullName"
                    type="text"
                    required
                    value={formData.fullName}
                    onChange={handleInputChange}
                    className={`h-12 ${validationErrors.fullName ? 'border-destructive' : ''}`}
                    placeholder="Enter your full name"
                    maxLength={100}
                  />
                  {validationErrors.fullName && (
                    <p className="text-destructive text-sm mt-1">{validationErrors.fullName}</p>
                  )}
                </div>

                <div>
                  <label htmlFor="phoneNumber" className="block text-sm font-medium text-foreground mb-2">
                    Phone Number *
                  </label>
                  <div className="flex gap-2">
                    <Select value={formData.countryCode} onValueChange={handleCountryChange}>
                      <SelectTrigger className="h-12 w-32">
                        <SelectValue>
                          {countries.find(c => c.code === formData.countryCode)?.flag} {formData.countryCode}
                        </SelectValue>
                      </SelectTrigger>
                      <SelectContent>
                        {countries.map((country) => (
                          <SelectItem key={country.code} value={country.code}>
                            {country.flag} {country.name}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    <Input
                      id="phoneNumber"
                      name="phoneNumber"
                      type="tel"
                      required
                      value={formData.phoneNumber}
                      onChange={handleInputChange}
                      className={`h-12 flex-1 ${validationErrors.phoneNumber ? 'border-destructive' : ''}`}
                      placeholder="9876543210"
                      maxLength={10}
                    />
                  </div>
                  {validationErrors.phoneNumber && (
                    <p className="text-destructive text-sm mt-1">{validationErrors.phoneNumber}</p>
                  )}
                  <p className="text-xs text-muted-foreground mt-1">
                    Enter exactly 10 digits without spaces or special characters
                  </p>
                </div>

                <div>
                  <label htmlFor="emailAddress" className="block text-sm font-medium text-foreground mb-2">
                    Email Address (Optional)
                  </label>
                  <Input
                    id="emailAddress"
                    name="emailAddress"
                    type="email"
                    value={formData.emailAddress}
                    onChange={handleInputChange}
                    className={`h-12 ${validationErrors.emailAddress ? 'border-destructive' : ''}`}
                    placeholder="your.email@example.com"
                    maxLength={150}
                  />
                  {validationErrors.emailAddress && (
                    <p className="text-destructive text-sm mt-1">{validationErrors.emailAddress}</p>
                  )}
                </div>

                <div>
                  <label htmlFor="jobCategory" className="block text-sm font-medium text-foreground mb-2">
                    Job Category *
                  </label>
                  <Select value={formData.jobCategory} onValueChange={handleCategoryChange}>
                    <SelectTrigger className={`h-12 ${validationErrors.jobCategory ? 'border-destructive' : ''}`}>
                      <SelectValue placeholder="Select your job category" />
                    </SelectTrigger>
                    <SelectContent>
                      {jobCategories.map((category) => (
                        <SelectItem key={category} value={category}>
                          {category}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  {validationErrors.jobCategory && (
                    <p className="text-destructive text-sm mt-1">{validationErrors.jobCategory}</p>
                  )}
                </div>

                <div>
                  <label htmlFor="cv" className="block text-sm font-medium text-foreground mb-2">
                    Upload CV (PDF/DOC) *
                  </label>
                  <div className="relative">
                    <input
                      id="cv"
                      type="file"
                      accept=".pdf,.doc,.docx"
                      onChange={handleFileChange}
                      className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                    />
                    <div className="h-12 border-2 border-dashed border-border rounded-lg flex items-center justify-center gap-2 hover:border-accent transition-colors">
                      {cvFile ? (
                        <div className="flex items-center gap-2 text-success">
                          <FileText className="w-4 h-4" />
                          <span className="text-sm">{cvFile.name}</span>
                        </div>
                      ) : (
                        <div className="flex items-center gap-2 text-muted-foreground">
                          <Upload className="w-4 h-4" />
                          <span className="text-sm">Click to upload CV</span>
                        </div>
                      )}
                    </div>
                  </div>
                  <p className="text-xs text-muted-foreground mt-1">
                    Maximum file size: 2MB. Supported formats: PDF, DOC, DOCX
                  </p>
                </div>

                <Button 
                  type="submit" 
                  variant="cta" 
                  size="lg" 
                  disabled={isSubmitting}
                  className="w-full"
                >
                  {isSubmitting ? (
                    <div className="flex items-center gap-2">
                      <div className="w-4 h-4 border-2 border-accent-foreground/20 border-t-accent-foreground rounded-full animate-spin"></div>
                      Submitting Application...
                    </div>
                  ) : (
                    <>
                      Submit Application
                      <Send className="w-4 h-4 ml-2" />
                    </>
                  )}
                </Button>
              </form>

              <div className="mt-8 pt-8 border-t border-border">
                <div className="bg-success/10 border border-success/20 rounded-lg p-4">
                  <div className="flex items-center gap-2 text-success mb-2">
                    <CheckCircle className="w-5 h-5 flex-shrink-0" />
                    <span className="font-semibold">No Upfront Payment</span>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    We only charge after you secure your job and arrive in Saudi Arabia. Your success is our guarantee.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Success Dialog */}
      <Dialog open={showSuccessDialog} onOpenChange={setShowSuccessDialog}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <div className="flex items-center justify-center w-16 h-16 bg-success/10 rounded-full mx-auto mb-4">
              <CheckCircle className="w-8 h-8 text-success" />
            </div>
            <DialogTitle className="text-center text-xl">
              Application Submitted Successfully
            </DialogTitle>
            <DialogDescription className="text-center">
              Your application has been saved. We will get back to you soon.
            </DialogDescription>
          </DialogHeader>
          <div className="flex justify-center mt-6">
            <Button 
              onClick={() => setShowSuccessDialog(false)}
              variant="cta"
              className="px-8"
            >
              Close
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default ApplicationSection;