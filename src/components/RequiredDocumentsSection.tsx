import { FileText, CreditCard, GraduationCap, MapPin, CheckCircle } from "lucide-react";

const RequiredDocumentsSection = () => {
  const documents = [
    {
      icon: FileText,
      title: "Passport",
      required: true,
      description: "Valid passport with minimum 6 months validity"
    },
    {
      icon: CreditCard,
      title: "Aadhar Card",
      required: true,
      description: "Government issued identity proof"
    },
    {
      icon: CreditCard,
      title: "PAN Card",
      required: true,
      description: "Permanent Account Number card"
    },
    {
      icon: GraduationCap,
      title: "Educational Certificates",
      required: true,
      description: "School/college certificates and marksheets"
    },
    {
      icon: FileText,
      title: "Work Experience Certificates",
      required: false,
      description: "Previous employment certificates (if available)"
    },
    {
      icon: MapPin,
      title: "Address Proof",
      required: true,
      description: "Utility bill, rent agreement, or bank statement"
    }
  ];

  return (
    <section className="section-padding bg-secondary/20">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary mb-4">
            Required Documents
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Please ensure you have the following documents ready before submitting your application.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {documents.map((doc, index) => {
              const IconComponent = doc.icon;
              return (
                <div 
                  key={index} 
                  className="bg-card rounded-xl p-6 border border-border hover:shadow-md transition-shadow"
                >
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                        <IconComponent className="w-6 h-6 text-primary" />
                      </div>
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <h3 className="font-semibold text-foreground">{doc.title}</h3>
                        {doc.required ? (
                          <span className="text-xs bg-destructive/10 text-destructive px-2 py-1 rounded-full font-medium">
                            Required
                          </span>
                        ) : (
                          <span className="text-xs bg-muted text-muted-foreground px-2 py-1 rounded-full font-medium">
                            Optional
                          </span>
                        )}
                      </div>
                      <p className="text-sm text-muted-foreground">{doc.description}</p>
                    </div>
                    <div className="flex-shrink-0">
                      <CheckCircle className="w-5 h-5 text-success" />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="mt-8 p-6 bg-primary/5 border border-primary/20 rounded-xl">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center">
                <CheckCircle className="w-5 h-5 text-primary" />
              </div>
              <h3 className="font-semibold text-primary">Important Note</h3>
            </div>
            <p className="text-sm text-muted-foreground">
              All documents should be clear, readable copies. Original documents will be verified during the interview process. 
              For work experience certificates, please provide as many as available to strengthen your application.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RequiredDocumentsSection;