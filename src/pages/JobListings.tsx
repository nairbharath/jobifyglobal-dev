import { useState, useEffect } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ArrowLeft, MapPin, Building2, DollarSign, Search, Filter } from "lucide-react";

interface Job {
  id: string;
  title: string;
  company: string;
  location: string;
  salary: string;
  category: string;
  experience: string;
  description: string;
  requirements: string[];
}

const JobListings = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const category = searchParams.get('category');
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCompany, setSelectedCompany] = useState("all");
  const [selectedLocation, setSelectedLocation] = useState("all");

  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, []);

  // Placeholder job data - replace with real data from Supabase
  const allJobs: Job[] = [
    {
      id: "1",
      title: "Construction Worker",
      company: "Al Rajhi Construction",
      location: "Riyadh, Saudi Arabia",
      salary: "SAR 2,500 - 3,000",
      category: "Construction Workers",
      experience: "2+ years",
      description: "Seeking experienced construction workers for major infrastructure projects in Riyadh.",
      requirements: ["Physical fitness", "Experience in construction", "Safety certificate preferred"]
    },
    {
      id: "2",
      title: "Senior Electrician",
      company: "Saudi Electric Company",
      location: "Jeddah, Saudi Arabia",
      salary: "SAR 3,500 - 4,500",
      category: "Electricians & Plumbers",
      experience: "5+ years",
      description: "Looking for skilled electricians for residential and commercial electrical installations.",
      requirements: ["Electrical trade certification", "5+ years experience", "Knowledge of Saudi electrical codes"]
    },
    {
      id: "3",
      title: "Plumber",
      company: "Modern Facilities",
      location: "Dammam, Saudi Arabia",
      salary: "SAR 2,800 - 3,500",
      category: "Electricians & Plumbers",
      experience: "3+ years",
      description: "Experienced plumber needed for maintenance and installation work in commercial buildings.",
      requirements: ["Plumbing certification", "Experience with commercial systems", "Problem-solving skills"]
    },
    {
      id: "4",
      title: "Heavy Vehicle Driver",
      company: "Transport Solutions LLC",
      location: "Riyadh, Saudi Arabia",
      salary: "SAR 2,200 - 2,800",
      category: "Drivers",
      experience: "3+ years",
      description: "Heavy vehicle driver required for logistics and transportation services.",
      requirements: ["Valid heavy vehicle license", "Clean driving record", "Knowledge of Saudi roads"]
    },
    {
      id: "5",
      title: "Hotel Housekeeping Staff",
      company: "Luxury Hotels Group",
      location: "Mecca, Saudi Arabia",
      salary: "SAR 1,800 - 2,200",
      category: "Hospitality & Cleaning Staff",
      experience: "1+ years",
      description: "Join our housekeeping team at a 5-star hotel in the holy city of Mecca.",
      requirements: ["Hotel experience preferred", "Attention to detail", "Customer service skills"]
    },
    {
      id: "6",
      title: "Welder",
      company: "Saudi Steel Works",
      location: "Jubail, Saudi Arabia",
      salary: "SAR 3,000 - 4,000",
      category: "Welders",
      experience: "4+ years",
      description: "Skilled welder needed for steel fabrication and industrial projects.",
      requirements: ["Welding certification", "Experience with various welding techniques", "Safety training"]
    }
  ];

  // Filter jobs based on category and search criteria
  const filteredJobs = allJobs.filter(job => {
    const matchesCategory = !category || job.category.toLowerCase().replace(/\s+/g, '-') === category;
    const matchesSearch = !searchTerm || 
      job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      job.company.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCompany = selectedCompany === "all" || job.company === selectedCompany;
    const matchesLocation = selectedLocation === "all" || job.location.includes(selectedLocation);
    
    return matchesCategory && matchesSearch && matchesCompany && matchesLocation;
  });

  // Get unique companies and locations for filters
  const companies = [...new Set(allJobs.map(job => job.company))];
  const locations = [...new Set(allJobs.map(job => job.location.split(',')[0]))];

  const handleApplyNow = () => {
    navigate('/');
    setTimeout(() => {
      const applicationSection = document.getElementById('apply');
      if (applicationSection) {
        applicationSection.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
  };

  // inside JobListings.tsx
// const handleViewCategories = () => {
//   // no # in URL, we pass state
//   navigate('/', { state: { scrollTo: 'jobCategories' } });
// };

const handleViewCategories = () => {
    navigate('/');
    setTimeout(() => {
      const applicationSection = document.getElementById('jobCategories');
      if (applicationSection) {
        applicationSection.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
  };


  const getCategoryTitle = () => {
    if (!category) return "All Jobs";
    return category.split('-').map(word => 
      word.charAt(0).toUpperCase() + word.slice(1)
    ).join(' ');
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="section-padding">
        <div className="container-custom">
          {/* Header Section */}
          <div className="mb-8">
            <Button 
              variant="ghost" 
              onClick={() => navigate('/')}
              className="mb-6 hover:bg-accent"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Home
            </Button>
            
            <div className="text-center mb-8">
              <h1 className="text-3xl md:text-5xl font-heading font-bold text-primary mb-4">
                {getCategoryTitle()} Jobs
              </h1>
              <p className="text-lg text-muted-foreground">
                {filteredJobs.length} opportunities available in Saudi Arabia
              </p>
            </div>
          </div>

          {/* Filters Section */}
          <div className="bg-card rounded-xl p-6 mb-8 border border-border">
            <div className="flex items-center gap-2 mb-4">
              <Filter className="w-5 h-5 text-primary" />
              <h3 className="font-semibold text-foreground">Filter Jobs</h3>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                <Input
                  placeholder="Search jobs..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10"
                />
              </div>
              
              <Select value={selectedCompany} onValueChange={setSelectedCompany}>
                <SelectTrigger>
                  <SelectValue placeholder="All Companies" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Companies</SelectItem>
                  {companies.map(company => (
                    <SelectItem key={company} value={company}>{company}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
              
              <Select value={selectedLocation} onValueChange={setSelectedLocation}>
                <SelectTrigger>
                  <SelectValue placeholder="All Locations" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Locations</SelectItem>
                  {locations.map(location => (
                    <SelectItem key={location} value={location}>{location}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
              
              <Button 
                variant="outline" 
                onClick={() => {
                  setSearchTerm("");
                  setSelectedCompany("all");
                  setSelectedLocation("all");
                }}
              >
                Clear Filters
              </Button>
            </div>
          </div>

          {/* Jobs Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
            {filteredJobs.map((job) => (
              <Card key={job.id} className="hover:shadow-lg transition-shadow border border-border">
                <CardHeader>
                  <div className="flex justify-between items-start mb-2">
                    <CardTitle className="text-xl font-semibold text-foreground">
                      {job.title}
                    </CardTitle>
                    <Badge variant="secondary" className="ml-2">
                      {job.experience}
                    </Badge>
                  </div>
                  
                  <div className="space-y-2">
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <Building2 className="w-4 h-4" />
                      <span>{job.company}</span>
                    </div>
                    
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <MapPin className="w-4 h-4" />
                      <span>{job.location}</span>
                    </div>
                    
                    <div className="flex items-center gap-2 text-primary font-semibold">
                      <DollarSign className="w-4 h-4" />
                      <span>{job.salary}</span>
                    </div>
                  </div>
                </CardHeader>
                
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    {job.description}
                  </p>
                  
                  <div className="mb-4">
                    <h4 className="font-medium text-foreground mb-2">Requirements:</h4>
                    <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1">
                      {job.requirements.map((req, index) => (
                        <li key={index}>{req}</li>
                      ))}
                    </ul>
                  </div>
                  
                  <Button 
                    onClick={handleApplyNow}
                    variant="cta" 
                    className="w-full"
                  >
                    Apply Now
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* No Results */}
          {filteredJobs.length === 0 && (
            <div className="text-center py-12">
              <div className="w-16 h-16 bg-muted rounded-full flex items-center justify-center mx-auto mb-4">
                <Search className="w-8 h-8 text-muted-foreground" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2">No jobs found</h3>
              <p className="text-muted-foreground mb-4">
                Try adjusting your search criteria or browse all available positions.
              </p>
              <Button variant="outline" onClick={handleViewCategories}>
                View All Categories
              </Button>
            </div>
          )}
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default JobListings;