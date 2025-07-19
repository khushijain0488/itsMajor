import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Flag, Building, Scale, BookOpen, Users, Globe, MapPin, FileText } from "lucide-react";

const Nation = () => {
  const lawCategories = [
    {
      icon: Building,
      title: "Federal Laws",
      description: "Laws that apply to all states and territories",
      examples: [
        "Civil Rights Act",
        "Americans with Disabilities Act",
        "Fair Labor Standards Act",
        "Immigration and Nationality Act",
        "Clean Air Act",
        "Federal Trade Commission Act"
      ]
    },
    {
      icon: MapPin,
      title: "State Laws",
      description: "Laws that vary by state and local jurisdiction",
      examples: [
        "Marriage and Divorce Laws",
        "Property Laws",
        "Criminal Codes",
        "Business Licensing",
        "Education Standards",
        "Vehicle Registration"
      ]
    },
    {
      icon: Scale,
      title: "Constitutional Law",
      description: "Fundamental rights and government structure",
      examples: [
        "Bill of Rights",
        "Separation of Powers",
        "Due Process",
        "Equal Protection",
        "Commerce Clause",
        "Supremacy Clause"
      ]
    }
  ];

  const branches = [
    {
      name: "Legislative Branch",
      icon: Users,
      description: "Makes the laws",
      components: ["House of Representatives", "Senate"],
      powers: [
        "Pass federal laws",
        "Control government spending",
        "Regulate interstate commerce",
        "Declare war",
        "Impeach officials"
      ]
    },
    {
      name: "Executive Branch",
      icon: Building,
      description: "Enforces the laws",
      components: ["President", "Vice President", "Cabinet"],
      powers: [
        "Enforce federal laws",
        "Command military",
        "Conduct foreign policy",
        "Appoint federal judges",
        "Grant pardons"
      ]
    },
    {
      name: "Judicial Branch",
      icon: Scale,
      description: "Interprets the laws",
      components: ["Supreme Court", "Federal Courts", "Appeals Courts"],
      powers: [
        "Interpret Constitution",
        "Review laws",
        "Settle disputes",
        "Protect individual rights",
        "Judicial review"
      ]
    }
  ];

  const amendments = [
    { number: "1st", title: "Freedom of Speech, Religion, Press", year: "1791" },
    { number: "2nd", title: "Right to Bear Arms", year: "1791" },
    { number: "4th", title: "Protection from Unreasonable Search", year: "1791" },
    { number: "5th", title: "Due Process, Self-Incrimination", year: "1791" },
    { number: "6th", title: "Right to Fair Trial", year: "1791" },
    { number: "8th", title: "No Cruel and Unusual Punishment", year: "1791" },
    { number: "13th", title: "Abolition of Slavery", year: "1865" },
    { number: "14th", title: "Equal Protection", year: "1868" },
    { number: "15th", title: "Voting Rights (Race)", year: "1870" },
    { number: "19th", title: "Women's Voting Rights", year: "1920" }
  ];

  const resources = [
    {
      title: "Constitution & Amendments",
      description: "Complete text with modern explanations",
      icon: FileText,
      link: "/constitution"
    },
    {
      title: "Federal Laws Database",
      description: "Searchable database of all federal statutes",
      icon: BookOpen,
      link: "/federal-laws"
    },
    {
      title: "State Law Comparisons",
      description: "How laws differ across states",
      icon: MapPin,
      link: "/state-laws"
    },
    {
      title: "Legal System Guide",
      description: "How courts and government work",
      icon: Building,
      link: "/legal-system"
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="hero-gradient text-primary-foreground py-16">
          <div className="container mx-auto px-4 text-center">
            <Flag className="h-16 w-16 mx-auto mb-6 text-secondary" />
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Know Your Nation</h1>
            <p className="text-xl opacity-90 mb-8 max-w-3xl mx-auto">
              Understanding the legal foundation of our nation - from the Constitution to federal and state laws 
              that govern our democracy and protect our rights.
            </p>
          </div>
        </section>

        {/* Government Branches */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gradient mb-4">Three Branches of Government</h2>
              <p className="text-lg text-muted-foreground">
                How our government is structured with checks and balances
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {branches.map((branch, index) => (
                <Card key={index} className="card-legal h-full">
                  <CardHeader className="text-center">
                    <div className="bg-gradient-to-br from-primary to-secondary rounded-full p-4 w-16 h-16 mx-auto mb-4">
                      <branch.icon className="h-8 w-8 text-white" />
                    </div>
                    <CardTitle className="text-xl">{branch.name}</CardTitle>
                    <p className="text-muted-foreground">{branch.description}</p>
                  </CardHeader>
                  
                  <CardContent>
                    <div className="space-y-4">
                      <div>
                        <h4 className="font-semibold mb-2">Components:</h4>
                        <div className="space-y-1">
                          {branch.components.map((component, i) => (
                            <Badge key={i} variant="outline" className="mr-2 mb-1">
                              {component}
                            </Badge>
                          ))}
                        </div>
                      </div>
                      
                      <div>
                        <h4 className="font-semibold mb-2">Key Powers:</h4>
                        <ul className="text-sm text-muted-foreground space-y-1">
                          {branch.powers.slice(0, 3).map((power, i) => (
                            <li key={i} className="flex items-center gap-2">
                              <Scale className="h-3 w-3 text-primary flex-shrink-0" />
                              {power}
                            </li>
                          ))}
                        </ul>
                        <Button variant="link" className="p-0 text-primary text-sm mt-2">
                          View all powers →
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Law Categories */}
        <section className="py-16 bg-muted">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gradient mb-4">Types of Laws</h2>
              <p className="text-lg text-muted-foreground">
                Understanding the different levels and types of laws that govern us
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {lawCategories.map((category, index) => (
                <Card key={index} className="card-legal h-full">
                  <CardHeader className="text-center">
                    <div className="bg-primary/10 rounded-full p-4 w-16 h-16 mx-auto mb-4">
                      <category.icon className="h-8 w-8 text-primary" />
                    </div>
                    <CardTitle className="text-xl">{category.title}</CardTitle>
                    <p className="text-muted-foreground">{category.description}</p>
                  </CardHeader>
                  
                  <CardContent>
                    <div className="space-y-2">
                      <h4 className="font-semibold mb-3">Key Examples:</h4>
                      <div className="space-y-2">
                        {category.examples.map((example, i) => (
                          <div key={i} className="text-sm text-muted-foreground">
                            • {example}
                          </div>
                        ))}
                      </div>
                    </div>
                    <Button variant="outline" className="w-full mt-4">
                      Explore {category.title}
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Constitutional Amendments */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gradient mb-4">Key Constitutional Amendments</h2>
              <p className="text-lg text-muted-foreground">
                The amendments that define and protect your fundamental rights
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
              {amendments.map((amendment, index) => (
                <Card key={index} className="card-legal text-center">
                  <CardContent className="pt-6">
                    <div className="text-2xl font-bold text-primary mb-2">
                      {amendment.number}
                    </div>
                    <div className="text-sm font-medium mb-2 leading-tight">
                      {amendment.title}
                    </div>
                    <div className="text-xs text-muted-foreground">
                      {amendment.year}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="text-center mt-8">
              <Button className="btn-legal">
                Read Full Constitution
              </Button>
            </div>
          </div>
        </section>

        {/* Legal Resources */}
        <section className="py-16 bg-muted">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gradient mb-4">National Legal Resources</h2>
              <p className="text-lg text-muted-foreground">
                Comprehensive resources to understand our nation's legal framework
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {resources.map((resource, index) => (
                <Card key={index} className="card-legal text-center group cursor-pointer">
                  <CardContent className="pt-8">
                    <div className="bg-gradient-to-br from-primary to-secondary rounded-full p-4 w-16 h-16 mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                      <resource.icon className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="text-lg font-semibold mb-3 group-hover:text-primary transition-colors">
                      {resource.title}
                    </h3>
                    <p className="text-sm text-muted-foreground mb-6">
                      {resource.description}
                    </p>
                    <Button variant="outline" className="w-full">
                      Access Resource
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Civic Engagement */}
        <section className="py-16 hero-gradient text-primary-foreground">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <Globe className="h-16 w-16 mx-auto mb-6 text-secondary" />
              <h2 className="text-3xl font-bold mb-4">Be an Informed Citizen</h2>
              <p className="text-xl opacity-90 mb-8 max-w-3xl mx-auto">
                Understanding your nation's laws and government is essential for active citizenship. 
                Knowledge empowers you to participate effectively in democracy.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              <div>
                <Users className="h-12 w-12 mx-auto mb-4 text-secondary" />
                <h3 className="text-xl font-bold mb-2">Participate</h3>
                <p className="opacity-90">
                  Vote, contact representatives, and engage in civic processes
                </p>
              </div>
              <div>
                <BookOpen className="h-12 w-12 mx-auto mb-4 text-secondary" />
                <h3 className="text-xl font-bold mb-2">Stay Informed</h3>
                <p className="opacity-90">
                  Keep up with legal changes and government decisions
                </p>
              </div>
              <div>
                <Scale className="h-12 w-12 mx-auto mb-4 text-secondary" />
                <h3 className="text-xl font-bold mb-2">Know Your Rights</h3>
                <p className="opacity-90">
                  Understand your rights and how to protect them
                </p>
              </div>
            </div>

            <div className="text-center mt-8">
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button className="btn-secondary">
                  Voter Registration Guide
                </Button>
                <Button variant="outline" className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
                  Contact Your Representatives
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Nation;