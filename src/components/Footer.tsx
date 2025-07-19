import { Link } from "react-router-dom";
import { Scale, Facebook, Twitter, Linkedin, Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Scale className="h-8 w-8 text-secondary" />
              <span className="text-xl font-bold">Know Your Rights</span>
            </div>
            <p className="text-primary-foreground/80">
              Empowering citizens with legal knowledge and connecting them with trusted legal professionals.
            </p>
            <div className="flex space-x-4">
              <Facebook className="h-5 w-5 hover:text-secondary cursor-pointer transition-colors" />
              <Twitter className="h-5 w-5 hover:text-secondary cursor-pointer transition-colors" />
              <Linkedin className="h-5 w-5 hover:text-secondary cursor-pointer transition-colors" />
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-secondary">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/rights" className="hover:text-secondary transition-colors">Your Rights</Link></li>
              <li><Link to="/cases" className="hover:text-secondary transition-colors">Hot Cases</Link></li>
              <li><Link to="/lawyers" className="hover:text-secondary transition-colors">Find Lawyers</Link></li>
              <li><Link to="/nation" className="hover:text-secondary transition-colors">National Laws</Link></li>
            </ul>
          </div>

          {/* Legal */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-secondary">Legal</h3>
            <ul className="space-y-2">
              <li><Link to="/privacy" className="hover:text-secondary transition-colors">Privacy Policy</Link></li>
              <li><Link to="/terms" className="hover:text-secondary transition-colors">Terms of Service</Link></li>
              <li><Link to="/disclaimer" className="hover:text-secondary transition-colors">Legal Disclaimer</Link></li>
              <li><Link to="/about" className="hover:text-secondary transition-colors">About Us</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-secondary">Contact Us</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4 text-secondary" />
                <span className="text-sm">info@knowyourrights.com</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4 text-secondary" />
                <span className="text-sm">+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="h-4 w-4 text-secondary" />
                <span className="text-sm">123 Justice Ave, Legal District</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center">
          <p className="text-primary-foreground/80">
            © {new Date().getFullYear()} Know Your Rights. All rights reserved. | 
            <span className="text-secondary"> Justice for All</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;