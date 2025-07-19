import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Star, MapPin, Phone, Mail, Calendar, Award, Search } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Lawyers = () => {
  const { toast } = useToast();
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedSpecialty, setSelectedSpecialty] = useState("all");

  const lawyers = [
    {
      id: 1,
      name: "Alexandra Rodriguez",
      specialty: "Criminal Defense",
      experience: "12 years",
      rating: 4.9,
      reviews: 156,
      location: "New York, NY",
      phone: "(555) 123-4567",
      email: "alexandra@lawfirm.com",
      education: "Harvard Law School",
      description: "Experienced criminal defense attorney specializing in white-collar crimes and federal cases.",
      price: "$450/hour",
      languages: ["English", "Spanish"],
      verified: true
    },
    {
      id: 2,
      name: "David Kim",
      specialty: "Family Law",
      experience: "8 years",
      rating: 4.8,
      reviews: 89,
      location: "Los Angeles, CA",
      phone: "(555) 234-5678",
      email: "david@familylaw.com",
      education: "Stanford Law School",
      description: "Compassionate family law attorney helping families navigate divorce, custody, and adoption.",
      price: "$350/hour",
      languages: ["English", "Korean"],
      verified: true
    },
    {
      id: 3,
      name: "Sarah Williams",
      specialty: "Corporate Law",
      experience: "15 years",
      rating: 4.9,
      reviews: 203,
      location: "Chicago, IL",
      phone: "(555) 345-6789",
      email: "sarah@corplaw.com",
      education: "Yale Law School",
      description: "Corporate attorney specializing in mergers, acquisitions, and business litigation.",
      price: "$550/hour",
      languages: ["English", "French"],
      verified: true
    },
    {
      id: 4,
      name: "Michael Johnson",
      specialty: "Personal Injury",
      experience: "10 years",
      rating: 4.7,
      reviews: 124,
      location: "Miami, FL",
      phone: "(555) 456-7890",
      email: "michael@injurylaw.com",
      education: "University of Miami Law",
      description: "Dedicated personal injury lawyer fighting for accident victims and their families.",
      price: "$400/hour",
      languages: ["English"],
      verified: true
    },
    {
      id: 5,
      name: "Emily Chen",
      specialty: "Immigration Law",
      experience: "7 years",
      rating: 4.8,
      reviews: 167,
      location: "San Francisco, CA",
      phone: "(555) 567-8901",
      email: "emily@immigrationlaw.com",
      education: "UC Berkeley Law",
      description: "Immigration attorney helping individuals and families achieve their American dreams.",
      price: "$300/hour",
      languages: ["English", "Mandarin", "Cantonese"],
      verified: true
    },
    {
      id: 6,
      name: "Robert Brown",
      specialty: "Real Estate Law",
      experience: "20 years",
      rating: 4.9,
      reviews: 298,
      location: "Boston, MA",
      phone: "(555) 678-9012",
      email: "robert@realestatelaw.com",
      education: "Boston University Law",
      description: "Real estate attorney with extensive experience in commercial and residential transactions.",
      price: "$425/hour",
      languages: ["English"],
      verified: true
    }
  ];

  const specialties = [
    "all",
    "Criminal Defense",
    "Family Law",
    "Corporate Law",
    "Personal Injury",
    "Immigration Law",
    "Real Estate Law"
  ];

  const filteredLawyers = lawyers.filter(lawyer => {
    const matchesSearch = lawyer.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         lawyer.specialty.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         lawyer.location.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesSpecialty = selectedSpecialty === "all" || lawyer.specialty === selectedSpecialty;
    return matchesSearch && matchesSpecialty;
  });

  const handleRegisterWithLawyer = (lawyer: any) => {
    toast({
      title: "Registration Request Sent",
      description: `Your request to connect with ${lawyer.name} has been sent. They will contact you within 24 hours.`,
    });
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="hero-gradient text-primary-foreground py-16">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Find Your Legal Expert</h1>
            <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
              Connect with verified, experienced lawyers who specialize in your legal needs
            </p>
          </div>
        </section>

        {/* Search and Filter */}
        <section className="py-8 bg-background border-b">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
              <div className="relative flex-1 max-w-md">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input
                  placeholder="Search by name, specialty, or location..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10"
                />
              </div>
              <div className="flex flex-wrap gap-2">
                {specialties.map((specialty) => (
                  <Button
                    key={specialty}
                    variant={selectedSpecialty === specialty ? "default" : "outline"}
                    size="sm"
                    onClick={() => setSelectedSpecialty(specialty)}
                    className={selectedSpecialty === specialty ? "btn-legal" : ""}
                  >
                    {specialty === "all" ? "All Specialties" : specialty}
                  </Button>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Lawyers Grid */}
        <section className="py-12 bg-muted">
          <div className="container mx-auto px-4">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-gradient mb-4">Available Lawyers</h2>
              <p className="text-muted-foreground">
                {filteredLawyers.length} lawyer{filteredLawyers.length !== 1 ? 's' : ''} found
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredLawyers.map((lawyer) => (
                <Card key={lawyer.id} className="card-legal h-full flex flex-col">
                  <CardHeader className="pb-4">
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-2">
                          <CardTitle className="text-lg">{lawyer.name}</CardTitle>
                          {lawyer.verified && (
                            <Award className="h-4 w-4 text-secondary" />
                          )}
                        </div>
                        <Badge variant="secondary" className="mb-2">
                          {lawyer.specialty}
                        </Badge>
                        <div className="flex items-center gap-2 text-sm text-muted-foreground">
                          <Star className="h-4 w-4 fill-current text-secondary" />
                          <span>{lawyer.rating}</span>
                          <span>({lawyer.reviews} reviews)</span>
                        </div>
                      </div>
                      <div className="text-right text-sm">
                        <div className="font-semibold text-primary">{lawyer.price}</div>
                        <div className="text-muted-foreground">{lawyer.experience}</div>
                      </div>
                    </div>
                  </CardHeader>

                  <CardContent className="flex-1 flex flex-col">
                    <p className="text-sm text-muted-foreground mb-4 flex-1">
                      {lawyer.description}
                    </p>

                    <div className="space-y-2 mb-4">
                      <div className="flex items-center gap-2 text-sm">
                        <MapPin className="h-3 w-3 text-muted-foreground" />
                        <span>{lawyer.location}</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm">
                        <Phone className="h-3 w-3 text-muted-foreground" />
                        <span>{lawyer.phone}</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm">
                        <Mail className="h-3 w-3 text-muted-foreground" />
                        <span>{lawyer.email}</span>
                      </div>
                    </div>

                    <div className="mb-4">
                      <div className="text-xs text-muted-foreground mb-1">Education:</div>
                      <div className="text-sm font-medium">{lawyer.education}</div>
                    </div>

                    <div className="mb-4">
                      <div className="text-xs text-muted-foreground mb-1">Languages:</div>
                      <div className="flex flex-wrap gap-1">
                        {lawyer.languages.map((lang) => (
                          <Badge key={lang} variant="outline" className="text-xs">
                            {lang}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    <div className="space-y-2 mt-auto">
                      <Button 
                        className="w-full btn-legal"
                        onClick={() => handleRegisterWithLawyer(lawyer)}
                      >
                        <Calendar className="h-4 w-4 mr-2" />
                        Register with {lawyer.name.split(' ')[0]}
                      </Button>
                      <Button variant="outline" className="w-full" size="sm">
                        View Profile
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {filteredLawyers.length === 0 && (
              <div className="text-center py-12">
                <p className="text-muted-foreground text-lg">
                  No lawyers found matching your criteria. Try adjusting your search or filters.
                </p>
              </div>
            )}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Lawyers;