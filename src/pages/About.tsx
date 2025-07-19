import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Scale, Users, BookOpen, Award, Target, Heart } from "lucide-react";

const About = () => {
  const values = [
    {
      icon: Scale,
      title: "Justice for All",
      description: "We believe everyone deserves equal access to legal knowledge and representation."
    },
    {
      icon: BookOpen,
      title: "Education First",
      description: "Empowering citizens through comprehensive legal education and resources."
    },
    {
      icon: Users,
      title: "Community Driven",
      description: "Building a strong community of legal professionals and informed citizens."
    },
    {
      icon: Heart,
      title: "Compassionate Service",
      description: "Providing support with empathy and understanding for those in need."
    }
  ];

  const team = [
    {
      name: "Sarah Johnson",
      role: "Founder & Chief Legal Officer",
      description: "Former Supreme Court clerk with 15+ years in constitutional law."
    },
    {
      name: "Michael Chen",
      role: "Technology Director",
      description: "Expert in legal tech solutions and platform development."
    },
    {
      name: "Dr. Aisha Patel",
      role: "Legal Education Director",
      description: "PhD in Law with focus on public legal education and access to justice."
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="hero-gradient text-primary-foreground py-20">
          <div className="container mx-auto px-4 text-center">
            <div className="max-w-3xl mx-auto">
              <Scale className="h-16 w-16 mx-auto mb-6 text-secondary" />
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                About Know Your Rights
              </h1>
              <p className="text-xl md:text-2xl opacity-90 leading-relaxed">
                Democratizing legal knowledge and connecting citizens with trusted legal professionals 
                to ensure justice and equality for all.
              </p>
            </div>
          </div>
        </section>

        {/* Mission Section */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl font-bold text-gradient mb-8">Our Mission</h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                At Know Your Rights, we're committed to breaking down the barriers that prevent people 
                from understanding and exercising their legal rights. Our platform serves as a bridge 
                between complex legal systems and everyday citizens, providing accessible information, 
                expert guidance, and direct connections to qualified legal professionals.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
                <div className="text-center">
                  <div className="bg-primary/10 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                    <Target className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="font-semibold mb-2">Accessible</h3>
                  <p className="text-sm text-muted-foreground">Legal information simplified for everyone</p>
                </div>
                <div className="text-center">
                  <div className="bg-primary/10 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                    <Award className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="font-semibold mb-2">Trusted</h3>
                  <p className="text-sm text-muted-foreground">Verified legal professionals and accurate content</p>
                </div>
                <div className="text-center">
                  <div className="bg-primary/10 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                    <Users className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="font-semibold mb-2">Connected</h3>
                  <p className="text-sm text-muted-foreground">Direct access to legal help when you need it</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-16 bg-muted">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gradient mb-4">Our Values</h2>
              <p className="text-lg text-muted-foreground">The principles that guide everything we do</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {values.map((value, index) => (
                <Card key={index} className="card-legal text-center">
                  <CardContent className="pt-6">
                    <value.icon className="h-12 w-12 text-primary mx-auto mb-4" />
                    <h3 className="font-semibold mb-2">{value.title}</h3>
                    <p className="text-sm text-muted-foreground">{value.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gradient mb-4">Our Team</h2>
              <p className="text-lg text-muted-foreground">Dedicated professionals working for justice</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {team.map((member, index) => (
                <Card key={index} className="card-legal text-center">
                  <CardContent className="pt-6">
                    <div className="w-20 h-20 bg-gradient-to-br from-primary to-secondary rounded-full mx-auto mb-4 flex items-center justify-center text-white font-bold text-xl">
                      {member.name.split(' ').map(n => n[0]).join('')}
                    </div>
                    <h3 className="font-semibold text-lg mb-1">{member.name}</h3>
                    <p className="text-primary font-medium mb-3">{member.role}</p>
                    <p className="text-sm text-muted-foreground">{member.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-16 hero-gradient text-primary-foreground">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to Know Your Rights?</h2>
            <p className="text-xl mb-8 opacity-90">
              Join thousands of citizens who have empowered themselves with legal knowledge
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/register" className="btn-secondary inline-block px-8 py-3 rounded-lg font-semibold">
                Get Started Today
              </a>
              <a href="/lawyers" className="border border-primary-foreground text-primary-foreground px-8 py-3 rounded-lg font-semibold hover:bg-primary-foreground hover:text-primary transition-colors">
                Find a Lawyer
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default About;