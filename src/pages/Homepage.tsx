import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Scale, Users, Gavel, Flag, TrendingUp, BookOpen, Shield, ArrowRight } from "lucide-react";

const Homepage = () => {
  const revolutionFeatures = [
    {
      icon: Scale,
      title: "Know Your Rights",
      description: "Understanding your fundamental legal rights",
      link: "/rights"
    },
    {
      icon: TrendingUp,
      title: "Hot Cases",
      description: "Latest legal cases and precedents",
      link: "/cases"
    },
    {
      icon: Users,
      title: "Know Your Lawyer",
      description: "Connect with verified legal professionals",
      link: "/lawyers"
    },
    {
      icon: Flag,
      title: "Know Your Nation",
      description: "National laws and constitutional knowledge",
      link: "/nation"
    }
  ];

  const stats = [
    { number: "10,000+", label: "Citizens Helped" },
    { number: "500+", label: "Verified Lawyers" },
    { number: "1,000+", label: "Legal Resources" },
    { number: "50+", label: "Practice Areas" }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="hero-gradient text-primary-foreground py-20 relative overflow-hidden">
          <div className="container mx-auto px-4 text-center relative z-10">
            <div className="max-w-4xl mx-auto">
              <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
                Know Your <span className="text-secondary">Rights</span>
              </h1>
              <p className="text-xl md:text-2xl opacity-90 mb-8 leading-relaxed">
                Empowering citizens with legal knowledge and connecting them with trusted legal professionals for justice and equality.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
                <Link to="/register">
                  <Button className="btn-secondary text-lg px-8 py-4 h-auto">
                    Get Started Free
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
                <Link to="/lawyers">
                  <Button variant="outline" className="text-lg px-8 py-4 h-auto border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
                    Find a Lawyer
                  </Button>
                </Link>
              </div>
            </div>

            {/* Revolving Circles */}
            <div className="relative w-80 h-80 mx-auto mt-16">
              <div className="absolute inset-0 rounded-full border-2 border-primary-foreground/20"></div>
              
              {revolutionFeatures.map((feature, index) => (
                <Link
                  key={index}
                  to={feature.link}
                  className={`revolving-circle`}
                  style={{ animationDelay: `${-index * 5}s` }}
                  title={feature.title}
                >
                  <feature.icon className="h-8 w-8" />
                </Link>
              ))}

              {/* Center Content */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <Scale className="h-16 w-16 mx-auto mb-4 text-secondary float-animation" />
                  <h3 className="text-xl font-bold">Justice</h3>
                  <p className="text-sm opacity-80">For All</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Grid */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gradient mb-4">
                Explore Our Legal Universe
              </h2>
              <p className="text-xl text-muted-foreground">
                Four pillars of legal empowerment at your fingertips
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {revolutionFeatures.map((feature, index) => (
                <Link key={index} to={feature.link}>
                  <Card className="card-legal h-full text-center group cursor-pointer">
                    <CardContent className="pt-8 pb-6">
                      <div className="bg-gradient-to-br from-primary to-secondary rounded-full p-4 w-16 h-16 mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                        <feature.icon className="h-8 w-8 text-white" />
                      </div>
                      <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors">
                        {feature.title}
                      </h3>
                      <p className="text-muted-foreground">
                        {feature.description}
                      </p>
                      <ArrowRight className="h-4 w-4 mx-auto mt-4 text-primary opacity-0 group-hover:opacity-100 transition-opacity" />
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 bg-muted">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gradient mb-4">Our Impact</h2>
              <p className="text-lg text-muted-foreground">Making a difference in the legal community</p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-3xl md:text-4xl font-bold text-primary mb-2">
                    {stat.number}
                  </div>
                  <div className="text-muted-foreground font-medium">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold text-gradient mb-6">
                  Why Choose Know Your Rights?
                </h2>
                <div className="space-y-6">
                  <div className="flex gap-4">
                    <div className="bg-primary/10 rounded-full p-3 flex-shrink-0">
                      <BookOpen className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-2">Comprehensive Legal Education</h3>
                      <p className="text-muted-foreground">
                        Access to extensive legal resources, guides, and educational materials 
                        written in plain language for easy understanding.
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="bg-primary/10 rounded-full p-3 flex-shrink-0">
                      <Shield className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-2">Verified Legal Professionals</h3>
                      <p className="text-muted-foreground">
                        Connect with pre-screened, licensed attorneys who specialize in 
                        various areas of law and are committed to helping you.
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="bg-primary/10 rounded-full p-3 flex-shrink-0">
                      <Gavel className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-2">Current Legal Information</h3>
                      <p className="text-muted-foreground">
                        Stay updated with the latest legal developments, case law, 
                        and changes in legislation that might affect you.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="relative">
                <div className="bg-gradient-to-br from-primary/20 to-secondary/20 rounded-2xl p-8 text-center">
                  <Scale className="h-32 w-32 mx-auto mb-6 text-primary" />
                  <h3 className="text-2xl font-bold mb-4">Justice Is Not a Privilege</h3>
                  <p className="text-muted-foreground mb-6">
                    Everyone deserves access to legal knowledge and representation. 
                    We're here to level the playing field.
                  </p>
                  <Link to="/about">
                    <Button className="btn-legal">
                      Learn More About Us
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-16 hero-gradient text-primary-foreground">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Know Your Rights?
            </h2>
            <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
              Join thousands of empowered citizens who have taken control of their legal journey
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/register">
                <Button className="btn-secondary text-lg px-8 py-4 h-auto">
                  Start Your Journey
                </Button>
              </Link>
              <Link to="/lawyers">
                <Button variant="outline" className="text-lg px-8 py-4 h-auto border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
                  Browse Lawyers
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Homepage;