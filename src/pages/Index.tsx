import Header from "@/components/common/Header";
import HeroSection from "@/components/home/HeroSection";
import Footer from "@/components/Footer";
import SuccessStories from "@/components/home/SuccessStories";
import JobCategories from "@/components/home/JobCategories";
import SubmitCVSection from "@/components/home/SubmitCVSection";
import HowItWorks from "@/components/home/HowItWorks";
import DocumentsRequired from "@/components/home/DocumentsRequired";
import ContactSectionNew from "@/components/home/ContactSectionNew";

const Index = () => {
  return (
    <div className="min-h-screen">
    <Header/>
      <main>
        <HeroSection />
        <SuccessStories/>
        <JobCategories/>
        <SubmitCVSection/>
        <HowItWorks/>
        <DocumentsRequired/>
        <ContactSectionNew/>
      </main>
      <Footer />
    </div>
  );
};

export default Index;
