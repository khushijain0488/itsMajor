import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Scale, Shield, Users, Home, Briefcase, Heart, BookOpen, AlertCircle } from "lucide-react";
import { useNavigate } from "react-router-dom";  // ✅ correct import

const Rights = () => {
  const navigate = useNavigate(); // ✅ navigation hook

  const rightsCategories = [
    {
      icon: Scale,
      title: "Constitutional Rights",
      description: "Your fundamental rights guaranteed by the Constitution",
      rights: [
        "Freedom of Speech",
        "Freedom of Religion",
        "Right to Privacy",
        "Due Process",
        "Equal Protection",
        "Right to Vote"
      ],
      color: "bg-blue-500"
    },
    {
      icon: Shield,
      title: "Criminal Justice Rights",
      description: "Rights when dealing with law enforcement and courts",
      rights: [
        "Right to Remain Silent",
        "Right to an Attorney",
        "Protection from Illegal Search",
        "Right to Fair Trial",
        "Protection from Double Jeopardy",
        "Right to Speedy Trial"
      ],
      color: "bg-red-500"
    },
    {
      icon: Briefcase,
      title: "Employment Rights",
      description: "Your rights in the workplace and with employers",
      rights: [
        "Equal Employment Opportunity",
        "Safe Working Conditions",
        "Fair Wages & Overtime",
        "Protection from Discrimination",
        "Family and Medical Leave",
        "Workers' Compensation"
      ],
      color: "bg-green-500"
    },
    {
      icon: Home,
      title: "Housing Rights",
      description: "Rights related to housing, renting, and property",
      rights: [
        "Fair Housing",
        "Tenant Rights",
        "Protection from Discrimination",
        "Right to Safe Housing",
        "Eviction Protections",
        "Property Rights"
      ],
      color: "bg-purple-500"
    },
    {
      icon: Heart,
      title: "Healthcare Rights",
      description: "Rights to medical care and health information",
      rights: [
        "Emergency Medical Treatment",
        "Medical Privacy (HIPAA)",
        "Informed Consent",
        "Access to Medical Records",
        "Non-Discrimination in Healthcare",
        "Mental Health Parity"
      ],
      color: "bg-pink-500"
    },
    {
      icon: Users,
      title: "Civil Rights",
      description: "Rights to equality and non-discrimination",
      rights: [
        "Protection from Discrimination",
        "Equal Access to Public Accommodations",
        "Educational Rights",
        "Voting Rights",
        "Disability Rights",
        "LGBTQ+ Rights"
      ],
      color: "bg-orange-500"
    }
  ];

  const emergencyRights = [
    "You have the right to remain silent",
    "You have the right to refuse searches without a warrant",
    "You have the right to an attorney",
    "You have the right to know what you're being arrested for",
    "You have the right to make a phone call"
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="hero-gradient text-primary-foreground py-16">
          <div className="container mx-auto px-4 text-center">
            <Scale className="h-16 w-16 mx-auto mb-6 text-secondary" />
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Know Your Rights</h1>
            <p className="text-xl opacity-90 mb-8 max-w-3xl mx-auto">
              Understanding your legal rights is the first step toward protecting yourself and seeking justice.
              Explore comprehensive information about your fundamental rights as a citizen.
            </p>
          </div>
        </section>

        {/* Emergency Rights */}
        <section className="py-12 bg-red-50 border-l-4 border-red-500">
          <div className="container mx-auto px-4">
            <div className="flex items-start gap-4">
              <AlertCircle className="h-8 w-8 text-red-500 flex-shrink-0 mt-1" />
              <div>
                <h2 className="text-2xl font-bold text-red-700 mb-4">Emergency: Know These Rights NOW</h2>
                <p className="text-red-600 mb-6">
                  If you're currently dealing with law enforcement or legal issues, remember these critical rights:
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {emergencyRights.map((right, index) => (
                    <div key={index} className="flex items-center gap-2 text-red-700 font-medium">
                      <Shield className="h-4 w-4 flex-shrink-0" />
                      <span>{right}</span>
                    </div>
                  ))}
                </div>
                <div className="mt-6">
                  <Button className="bg-red-600 hover:bg-red-700 text-white">
                    Contact Emergency Legal Help
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Rights Categories */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gradient mb-4">Your Rights by Category</h2>
              <p className="text-lg text-muted-foreground">
                Explore different areas of legal rights that protect you in various aspects of life
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {rightsCategories.map((category, index) => (
                <Card key={index} className="card-legal h-full">
                  <CardHeader>
                    <div className="flex items-center gap-3 mb-4">
                      <div className={`${category.color} rounded-full p-3`}>
                        <category.icon className="h-6 w-6 text-white" />
                      </div>
                      <div>
                        <CardTitle className="text-lg">{category.title}</CardTitle>
                      </div>
                    </div>
                    <p className="text-sm text-muted-foreground">{category.description}</p>
                  </CardHeader>

                  <CardContent>
                    <div className="space-y-2">
                      {category.rights.map((right, rightIndex) => (
                        <Badge key={rightIndex} variant="outline" className="mr-2 mb-2 text-xs">
                          {right}
                        </Badge>
                      ))}
                    </div>
                    <Button variant="outline" className="w-full mt-4">
                      Learn More
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Legal Resources */}
        <section className="py-16 bg-muted">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gradient mb-4">Legal Education Resources</h2>
              <p className="text-lg text-muted-foreground">
                Expand your legal knowledge with our comprehensive guides and resources
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card className="card-legal text-center">
                <CardContent className="pt-8">
                  <BookOpen className="h-12 w-12 text-primary mx-auto mb-4" />
                  <h3 className="text-xl font-semibold mb-3">Legal Guides</h3>
                  <p className="text-muted-foreground mb-6">
                    Step-by-step guides explaining complex legal concepts in simple terms
                  </p>
                  <Button className="btn-legal">Browse Guides</Button>
                </CardContent>
              </Card>

              <Card className="card-legal text-center">
                <CardContent className="pt-8">
                  <Scale className="h-12 w-12 text-primary mx-auto mb-4" />
                  <h3 className="text-xl font-semibold mb-3">Know Your Laws</h3>
                  <p className="text-muted-foreground mb-6">
                    Understand federal, state, and local laws that affect your daily life
                  </p>
                  <Button className="btn-legal">Explore Laws</Button>
                </CardContent>
              </Card>

              <Card className="card-legal text-center">
                <CardContent className="pt-8">
                  <Users className="h-12 w-12 text-primary mx-auto mb-4" />
                  <h3 className="text-xl font-semibold mb-3">Ask an Expert</h3>
                  <p className="text-muted-foreground mb-6">
                    Get answers to your legal questions from qualified attorneys
                  </p>
                  <Button className="btn-legal">Find a Lawyer</Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-16 hero-gradient text-primary-foreground">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-4">Protect Your Rights Today</h2>
            <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
              Knowledge is power. Understanding your rights is the first step toward protecting them.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                className="btn-secondary"
                onClick={() => navigate("/Crights")}  // ✅ fixed navigation
              >
                Download Rights Handbook
              </Button>
              <Button
                variant="outline"
                className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary"
               onClick={() => navigate("/")}
             >
                Find Legal Help
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Rights;
