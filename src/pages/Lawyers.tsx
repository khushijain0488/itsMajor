import React from "react";
import { ArrowLeft, Star, MapPin, Phone, Mail, Calendar, Award, Globe, BookOpen, Users, Clock, CheckCircle } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";

interface LawyerProfileProps {
  lawyer?: {
    id: number;
    name: string;
    specialty: string;
    experience: string;
    rating: number;
    reviews: number;
    location: string;
    phone: string;
    email: string;
    education: string;
    description: string;
    price: string;
    languages: string[];
    verified: boolean;
  };
  onBack?: () => void;
}

const LawyerProfile: React.FC<LawyerProfileProps> = ({ lawyer, onBack }) => {
  // Default lawyer data if none provided
  const defaultLawyer = {
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
  };

  const currentLawyer = lawyer || defaultLawyer;

  const achievements = [
    "Super Lawyers Rising Star 2020-2023",
    "Best Lawyers in America 2022-2024",
    "Top 40 Under 40 Criminal Defense Attorneys",
    "ABA Criminal Justice Section Member"
  ];

  const practiceAreas = [
    "White Collar Criminal Defense",
    "Federal Criminal Defense",
    "Drug Crimes",
    "DUI/DWI Defense",
    "Domestic Violence",
    "Theft & Property Crimes"
  ];

  const clientReviews = [
    {
      id: 1,
      name: "John D.",
      rating: 5,
      date: "2 weeks ago",
      review: "Alexandra was exceptional in handling my case. Professional, knowledgeable, and got great results."
    },
    {
      id: 2,
      name: "Sarah M.",
      rating: 5,
      date: "1 month ago",
      review: "Outstanding lawyer! She explained everything clearly and fought hard for my rights."
    },
    {
      id: 3,
      name: "Michael R.",
      rating: 4,
      date: "2 months ago",
      review: "Very satisfied with the service. Professional and responsive throughout the entire process."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* Header */}
      <div className="bg-white shadow-sm border-b">
        <div className="container mx-auto px-4 py-4">
          <Button
            variant="ghost"
            onClick={onBack}
            className="mb-4"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Lawyers
          </Button>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Profile Section */}
          <div className="lg:col-span-2 space-y-6">
            {/* Profile Header */}
            <Card className="shadow-lg">
              <CardHeader className="pb-4">
                <div className="flex flex-col md:flex-row items-start gap-6">
                  <div className="w-32 h-32 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-full flex items-center justify-center text-white text-4xl font-bold">
                    {currentLawyer.name.split(' ').map(n => n[0]).join('')}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <h1 className="text-3xl font-bold">{currentLawyer.name}</h1>
                      {currentLawyer.verified && (
                        <Award className="h-6 w-6 text-blue-600" />
                      )}
                    </div>
                    <Badge variant="secondary" className="mb-3 text-sm">
                      {currentLawyer.specialty}
                    </Badge>
                    <div className="flex items-center gap-4 mb-3">
                      <div className="flex items-center gap-1">
                        <Star className="h-5 w-5 fill-current text-yellow-500" />
                        <span className="font-semibold">{currentLawyer.rating}</span>
                        <span className="text-gray-600">({currentLawyer.reviews} reviews)</span>
                      </div>
                      <div className="flex items-center gap-1 text-gray-600">
                        <Clock className="h-4 w-4" />
                        <span>{currentLawyer.experience} experience</span>
                      </div>
                    </div>
                    <p className="text-gray-700 leading-relaxed">{currentLawyer.description}</p>
                  </div>
                </div>
              </CardHeader>
            </Card>

            {/* Practice Areas */}
            <Card className="shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <BookOpen className="h-5 w-5 text-blue-600" />
                  Practice Areas
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {practiceAreas.map((area, index) => (
                    <div key={index} className="flex items-center gap-2 p-2 bg-blue-50 rounded-lg">
                      <CheckCircle className="h-4 w-4 text-blue-600 flex-shrink-0" />
                      <span className="text-sm">{area}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Achievements & Awards */}
            <Card className="shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Award className="h-5 w-5 text-blue-600" />
                  Awards & Recognition
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  {achievements.map((achievement, index) => (
                    <div key={index} className="flex items-center gap-2 p-2">
                      <div className="w-2 h-2 bg-blue-600 rounded-full flex-shrink-0"></div>
                      <span className="text-sm">{achievement}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Client Reviews */}
            <Card className="shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Users className="h-5 w-5 text-blue-600" />
                  Client Reviews
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {clientReviews.map((review) => (
                    <div key={review.id} className="border-l-4 border-blue-600 pl-4 py-2">
                      <div className="flex items-center gap-2 mb-2">
                        <div className="flex">
                          {[...Array(review.rating)].map((_, i) => (
                            <Star key={i} className="h-4 w-4 fill-current text-yellow-500" />
                          ))}
                        </div>
                        <span className="font-semibold text-sm">{review.name}</span>
                        <span className="text-gray-500 text-xs">{review.date}</span>
                      </div>
                      <p className="text-sm text-gray-700">{review.review}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Contact Information */}
            <Card className="shadow-lg">
              <CardHeader>
                <CardTitle>Contact Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center gap-3">
                  <MapPin className="h-4 w-4 text-gray-500" />
                  <span className="text-sm">{currentLawyer.location}</span>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="h-4 w-4 text-gray-500" />
                  <span className="text-sm">{currentLawyer.phone}</span>
                </div>
                <div className="flex items-center gap-3">
                  <Mail className="h-4 w-4 text-gray-500" />
                  <span className="text-sm">{currentLawyer.email}</span>
                </div>
                <div className="flex items-center gap-3">
                  <Globe className="h-4 w-4 text-gray-500" />
                  <div className="flex flex-wrap gap-1">
                    {currentLawyer.languages.map((lang) => (
                      <Badge key={lang} variant="outline" className="text-xs">
                        {lang}
                      </Badge>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Pricing & Availability */}
            <Card className="shadow-lg">
              <CardHeader>
                <CardTitle>Pricing & Availability</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600">{currentLawyer.price}</div>
                  <div className="text-sm text-gray-600">Consultation Fee</div>
                </div>
                <Separator />
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>Response Time:</span>
                    <span className="font-semibold">Within 4 hours</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span>Availability:</span>
                    <span className="font-semibold text-green-600">Available</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Education */}
            <Card className="shadow-lg">
              <CardHeader>
                <CardTitle>Education</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-center">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3">
                    <BookOpen className="h-8 w-8 text-blue-600" />
                  </div>
                  <h3 className="font-semibold">{currentLawyer.education}</h3>
                  <p className="text-sm text-gray-600">Juris Doctor (J.D.)</p>
                </div>
              </CardContent>
            </Card>

            {/* Action Buttons */}
            <div className="space-y-3">
              <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white">
                <Calendar className="h-4 w-4 mr-2" />
                Schedule Consultation
              </Button>
              <Button variant="outline" className="w-full">
                <Mail className="h-4 w-4 mr-2" />
                Send Message
              </Button>
              <Button variant="outline" className="w-full">
                <Phone className="h-4 w-4 mr-2" />
                Call Now
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LawyerProfile;