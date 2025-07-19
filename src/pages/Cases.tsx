import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { TrendingUp, Clock, Eye, MessageCircle, Scale, Building, Users, Home } from "lucide-react";

const Cases = () => {
  const hotCases = [
    {
      id: 1,
      title: "Tech Privacy Rights vs Corporate Data Collection",
      category: "Privacy Law",
      court: "Supreme Court",
      status: "Pending Decision",
      views: 12840,
      comments: 245,
      lastUpdate: "2 hours ago",
      description: "Landmark case examining the boundaries between individual privacy rights and corporate data collection practices in the digital age.",
      significance: "High",
      parties: "Citizens United for Privacy v. MetaTech Corp",
      impact: "Could reshape how tech companies handle user data"
    },
    {
      id: 2,
      title: "Workplace Discrimination in Remote Work Era",
      category: "Employment Law",
      court: "Federal District Court",
      status: "Active Trial",
      views: 8920,
      comments: 167,
      lastUpdate: "5 hours ago",
      description: "Case addressing new forms of workplace discrimination emerging in remote and hybrid work environments.",
      significance: "Medium",
      parties: "Johnson v. Global Dynamics Inc.",
      impact: "Sets precedent for remote work policies"
    },
    {
      id: 3,
      title: "Housing Rights During Economic Crisis",
      category: "Housing Law",
      court: "State Supreme Court",
      status: "Under Review",
      views: 15200,
      comments: 312,
      lastUpdate: "1 day ago",
      description: "Critical case examining tenant protections and landlord rights during periods of economic hardship.",
      significance: "High",
      parties: "Tenants Coalition v. Real Estate Alliance",
      impact: "Could extend eviction moratorium protections"
    },
    {
      id: 4,
      title: "AI Algorithm Bias in Criminal Justice",
      category: "Criminal Law",
      court: "Appeals Court",
      status: "Appeal Filed",
      views: 22100,
      comments: 445,
      lastUpdate: "3 days ago",
      description: "Challenging the use of AI algorithms in criminal sentencing and risk assessment tools.",
      significance: "High",
      parties: "State v. Johnson (AI Bias Challenge)",
      impact: "May restrict AI use in criminal justice"
    },
    {
      id: 5,
      title: "Healthcare Access for Rural Communities",
      category: "Healthcare Law",
      court: "Federal Court",
      status: "Class Action",
      views: 9650,
      comments: 198,
      lastUpdate: "1 week ago",
      description: "Class action lawsuit challenging healthcare accessibility and quality standards in underserved rural areas.",
      significance: "Medium",
      parties: "Rural Health Alliance v. State Health Department",
      impact: "Could mandate rural healthcare improvements"
    },
    {
      id: 6,
      title: "Student Loan Forgiveness Constitutional Challenge",
      category: "Constitutional Law",
      court: "Supreme Court",
      status: "Oral Arguments Scheduled",
      views: 31500,
      comments: 789,
      lastUpdate: "2 days ago",
      description: "Constitutional challenge to federal student loan forgiveness programs and executive power limits.",
      significance: "High",
      parties: "State Coalition v. Department of Education",
      impact: "Determines scope of executive power"
    }
  ];

  const categories = [
    { name: "All Cases", count: hotCases.length, icon: Scale },
    { name: "Constitutional Law", count: 1, icon: Building },
    { name: "Privacy Law", count: 1, icon: Eye },
    { name: "Employment Law", count: 1, icon: Users },
    { name: "Housing Law", count: 1, icon: Home },
    { name: "Criminal Law", count: 1, icon: Scale },
    { name: "Healthcare Law", count: 1, icon: TrendingUp }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Pending Decision": return "bg-yellow-500";
      case "Active Trial": return "bg-blue-500";
      case "Under Review": return "bg-purple-500";
      case "Appeal Filed": return "bg-orange-500";
      case "Class Action": return "bg-green-500";
      case "Oral Arguments Scheduled": return "bg-red-500";
      default: return "bg-gray-500";
    }
  };

  const getSignificanceColor = (significance: string) => {
    switch (significance) {
      case "High": return "text-red-600 bg-red-100";
      case "Medium": return "text-orange-600 bg-orange-100";
      case "Low": return "text-green-600 bg-green-100";
      default: return "text-gray-600 bg-gray-100";
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="hero-gradient text-primary-foreground py-16">
          <div className="container mx-auto px-4 text-center">
            <TrendingUp className="h-16 w-16 mx-auto mb-6 text-secondary" />
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Hot Legal Cases</h1>
            <p className="text-xl opacity-90 mb-8 max-w-3xl mx-auto">
              Stay informed about the most significant legal cases shaping our society. 
              Track landmark decisions and their potential impact on your rights.
            </p>
          </div>
        </section>

        {/* Categories Filter */}
        <section className="py-8 bg-background border-b">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap gap-4 justify-center">
              {categories.map((category, index) => (
                <Button
                  key={index}
                  variant="outline"
                  className="flex items-center gap-2 hover:bg-primary hover:text-primary-foreground"
                >
                  <category.icon className="h-4 w-4" />
                  {category.name}
                  <Badge variant="secondary" className="ml-2">
                    {category.count}
                  </Badge>
                </Button>
              ))}
            </div>
          </div>
        </section>

        {/* Hot Cases Grid */}
        <section className="py-16 bg-muted">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gradient mb-4">Currently Trending Cases</h2>
              <p className="text-lg text-muted-foreground">
                Cases that are making headlines and could impact your rights
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {hotCases.map((case_item) => (
                <Card key={case_item.id} className="card-legal h-full">
                  <CardHeader>
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-2">
                          <Badge className={getStatusColor(case_item.status)} variant="secondary">
                            {case_item.status}
                          </Badge>
                          <Badge className={getSignificanceColor(case_item.significance)}>
                            {case_item.significance} Impact
                          </Badge>
                        </div>
                        <CardTitle className="text-lg leading-tight mb-2">
                          {case_item.title}
                        </CardTitle>
                        <div className="text-sm text-muted-foreground">
                          <div>{case_item.court}</div>
                          <div className="font-medium">{case_item.parties}</div>
                        </div>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-4 text-sm text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <Eye className="h-4 w-4" />
                        {case_item.views.toLocaleString()}
                      </div>
                      <div className="flex items-center gap-1">
                        <MessageCircle className="h-4 w-4" />
                        {case_item.comments}
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="h-4 w-4" />
                        {case_item.lastUpdate}
                      </div>
                    </div>
                  </CardHeader>
                  
                  <CardContent>
                    <p className="text-muted-foreground mb-4 leading-relaxed">
                      {case_item.description}
                    </p>
                    
                    <div className="space-y-3 mb-6">
                      <div>
                        <span className="text-sm font-medium">Category: </span>
                        <Badge variant="outline">{case_item.category}</Badge>
                      </div>
                      <div>
                        <span className="text-sm font-medium">Potential Impact: </span>
                        <span className="text-sm text-muted-foreground">{case_item.impact}</span>
                      </div>
                    </div>

                    <div className="flex gap-2">
                      <Button className="btn-legal flex-1">
                        Read Full Case
                      </Button>
                      <Button variant="outline" size="sm">
                        Follow Updates
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Legal Impact Section */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gradient mb-4">Why These Cases Matter</h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                Legal precedents set by these cases will influence future decisions and could directly 
                impact your rights, protections, and freedoms for years to come.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card className="card-legal text-center">
                <CardContent className="pt-8">
                  <Scale className="h-12 w-12 text-primary mx-auto mb-4" />
                  <h3 className="text-xl font-semibold mb-3">Set Legal Precedents</h3>
                  <p className="text-muted-foreground">
                    These cases establish rules that future courts must follow, creating lasting change in the legal system.
                  </p>
                </CardContent>
              </Card>

              <Card className="card-legal text-center">
                <CardContent className="pt-8">
                  <Users className="h-12 w-12 text-primary mx-auto mb-4" />
                  <h3 className="text-xl font-semibold mb-3">Protect Your Rights</h3>
                  <p className="text-muted-foreground">
                    Understanding these cases helps you know what rights you have and how they might change.
                  </p>
                </CardContent>
              </Card>

              <Card className="card-legal text-center">
                <CardContent className="pt-8">
                  <TrendingUp className="h-12 w-12 text-primary mx-auto mb-4" />
                  <h3 className="text-xl font-semibold mb-3">Shape the Future</h3>
                  <p className="text-muted-foreground">
                    These decisions influence legislation and policy, directly affecting your daily life.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Newsletter Signup */}
        <section className="py-16 hero-gradient text-primary-foreground">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-4">Stay Updated on Hot Cases</h2>
            <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
              Get notifications when important cases reach key milestones or when decisions are announced.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="btn-secondary">
                Subscribe to Case Updates
              </Button>
              <Button variant="outline" className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
                Browse All Cases
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Cases;