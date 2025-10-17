import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import JobCategoriesSection from "@/components/JobCategoriesSection";
import ProcessSection from "@/components/ProcessSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import RequiredDocumentsSection from "@/components/RequiredDocumentsSection";
import ApplicationSection from "@/components/ApplicationSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <HeroSection />
        <AboutSection />
        <JobCategoriesSection />
        <ProcessSection />
        <TestimonialsSection />
        <RequiredDocumentsSection />
        <ApplicationSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
