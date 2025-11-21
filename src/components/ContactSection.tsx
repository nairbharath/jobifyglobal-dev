import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { MessageCircle, Phone, Mail, MapPin, Send, CheckCircle } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    phoneNumber: '',
    countryCode: 'IN',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [validationErrors, setValidationErrors] = useState<{[key: string]: string}>({});
  const { toast } = useToast();

  const countries = [
    { code: 'IN', name: 'India', flag: '🇮🇳' },
    { code: 'NP', name: 'Nepal', flag: '🇳🇵' }
  ];

  const validateForm = () => {
    const errors: {[key: string]: string} = {};
    
    // Name validation
    if (!formData.name.trim()) {
      errors.name = 'Name is required';
    } else if (formData.name.length > 100) {
      errors.name = 'Name must be less than 100 characters';
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
    
    // Email validation (required)
    if (!formData.email.trim()) {
      errors.email = 'Email is required';
    } else if (formData.email.length > 150) {
      errors.email = 'Email must be less than 150 characters';
    } else {
      const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
      if (!emailRegex.test(formData.email)) {
        errors.email = 'Please enter a valid email address';
      }
    }
    
    // Message validation
    if (!formData.message.trim()) {
      errors.message = 'Message is required';
    } else if (formData.message.length > 2000) {
      errors.message = 'Message must be less than 2000 characters';
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

    setIsSubmitting(true);
    
    try {
      // Save contact data to database
      const { error } = await supabase
        .from('contact_us')
        .insert({
          name: formData.name,
          country_code: formData.countryCode,
          phone_number: formData.phoneNumber,
          full_phone: `+${formData.countryCode === 'IN' ? '91' : '977'}${formData.phoneNumber}`,
          email: formData.email,
          message: formData.message
        });

      if (error) {
        throw new Error(`Failed to save message: ${error.message}`);
      }

      // Reset form and show success
      setFormData({ name: '', phoneNumber: '', countryCode: 'IN', email: '', message: '' });
      setValidationErrors({});
      toast({
        title: "Message Sent Successfully!",
        description: "We will contact you soon.",
      });
      
    } catch (error) {
      console.error('Contact form submission error:', error);
      toast({
        title: "Submission Failed",
        description: error instanceof Error ? error.message : "Failed to send message. Please try again.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
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

  const handleCountryChange = (value: string) => {
    setFormData({
      ...formData,
      countryCode: value
    });
  };

  const openWhatsApp = () => {
    window.open('https://wa.me/918123456789?text=Hi%20Jobify,%20I%20want%20to%20know%20about%20Saudi%20Arabia%20job%20opportunities', '_blank');
  };

  return (
    <section id="contact" className="section-padding bg-card mt-16">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-heading font-bold text-primary mb-6">
            Contact Us
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Have questions or need assistance? Get in touch with us for general inquiries and support.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-secondary/30 rounded-2xl p-8">
            <h3 className="text-2xl font-heading font-semibold text-primary mb-6">
              Send Us a Message
            </h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                  Name *
                </label>
                <Input
                  id="name"
                  name="name"
                  type="text"
                  required
                  value={formData.name}
                  onChange={handleInputChange}
                  className={`h-12 ${validationErrors.name ? 'border-destructive' : ''}`}
                  placeholder="Enter your name"
                  maxLength={100}
                />
                {validationErrors.name && (
                  <p className="text-destructive text-sm mt-1">{validationErrors.name}</p>
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
                 <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                   Email Address *
                 </label>
                 <Input
                   id="email"
                   name="email"
                   type="email"
                   required
                   value={formData.email}
                   onChange={handleInputChange}
                   className={`h-12 ${validationErrors.email ? 'border-destructive' : ''}`}
                   placeholder="your.email@example.com"
                   maxLength={150}
                 />
                 {validationErrors.email && (
                   <p className="text-destructive text-sm mt-1">{validationErrors.email}</p>
                 )}
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                  Message *
                </label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  className={`min-h-[120px] ${validationErrors.message ? 'border-destructive' : ''}`}
                  placeholder="Tell us about your inquiry or questions..."
                  required
                  maxLength={2000}
                />
                {validationErrors.message && (
                  <p className="text-destructive text-sm mt-1">{validationErrors.message}</p>
                )}
                <p className="text-xs text-muted-foreground mt-1">
                  {formData.message.length}/2000 characters
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
                    Submitting...
                  </div>
                ) : (
                  <>
                    Send Message
                    <Send className="w-4 h-4 ml-2" />
                  </>
                )}
              </Button>
            </form>

            {/* WhatsApp CTA */}
            <div className="mt-8 pt-8 border-t border-border">
              <div className="text-center">
                <p className="text-muted-foreground mb-4">Prefer to chat directly?</p>
                <Button 
                  variant="whatsapp" 
                  size="lg" 
                  onClick={openWhatsApp}
                  className="w-full"
                >
                  <MessageCircle className="w-5 h-5 mr-2" />
                  Chat on WhatsApp
                </Button>
              </div>
            </div>
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            {/* Contact Details */}
            <div className="bg-primary/5 rounded-2xl p-8">
              <h3 className="text-2xl font-heading font-semibold text-primary mb-6">
                Get In Touch
              </h3>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-primary mb-1">Phone</h4>
                    <a 
                      href="tel:+918123456789" 
                      className="text-muted-foreground hover:text-accent transition-colors md:pointer-events-none md:cursor-default block"
                    >
                      +91 99672 62012
                    </a>
                    <a 
                      href="tel:+919876543210" 
                      className="text-muted-foreground hover:text-accent transition-colors md:pointer-events-none md:cursor-default block"
                    >
                      +91 99672 62012
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-primary mb-1">Email</h4>
                    <a 
                      href="mailto:apply@jobifyglobal.in?subject=Job%20Inquiry%20from%20JobifyGlobal%20Website" 
                      className="text-muted-foreground hover:text-accent transition-colors block"
                    >
                      apply@jobifyglobal.in
                    </a>
                    <a 
                      href="mailto:support@jobifyglobal.in?subject=Job%20Inquiry%20from%20JobifyGlobal%20Website" 
                      className="text-muted-foreground hover:text-accent transition-colors block"
                    >
                      support@jobifyglobal.in
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-primary mb-1">Office</h4>
                    <a 
                      // href="https://www.google.com/maps/search/?api=1&query=123+Business+Center+Mumbai+Maharashtra+400001+India"
                       href="https://www.google.com/maps/search/?api=1&query=4+Mastermind+Rd,+Royal+Palms,+Aarey+Milk+Colony,+Goregaon,+Mumbai,+Maharashtra+400065"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-accent transition-colors block"
                    >
                      A321, Master Mind 4, Royal Palms,<br />
                      Goregaon (E),<br />
                      Mumbai, Maharashtra 400065<br />
                      India
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Why Choose Us */}
            <div className="bg-accent/5 rounded-2xl p-8">
              <h3 className="text-2xl font-heading font-semibold text-primary mb-6">
                Why Choose Jobify?
              </h3>
              
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-success flex-shrink-0" />
                  <span className="text-muted-foreground">No upfront payment required</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-success flex-shrink-0" />
                  <span className="text-muted-foreground">Direct contact with Saudi employers</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-success flex-shrink-0" />
                  <span className="text-muted-foreground">Complete visa and travel support</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-success flex-shrink-0" />
                  <span className="text-muted-foreground">24/7 customer support</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-success flex-shrink-0" />
                  <span className="text-muted-foreground">Verified and trusted companies</span>
                </div>
              </div>
            </div>

            {/* Office Hours */}
            <div className="bg-card border border-border rounded-2xl p-6">
              <h4 className="font-heading font-semibold text-primary mb-4">Office Hours</h4>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Monday - Friday:</span>
                  <span className="text-foreground">9:00 AM - 7:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Saturday:</span>
                  <span className="text-foreground">9:00 AM - 5:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Sunday:</span>
                  <span className="text-foreground">Closed</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;