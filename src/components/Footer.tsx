import { Button } from "@/components/ui/button";
import { MapPin, Phone, Mail, Linkedin } from "lucide-react";
import eagleLogo from "/eagle-logo.png";

const Footer = () => {
  const footerLinks = [
    { name: "About", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Clients", href: "#clients" },
    { name: "Careers", href: "#careers" },
    { name: "Contact", href: "#contact" },
    { name: "Privacy Policy", href: "#privacy" }
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-primary text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <img
                src={eagleLogo}
                alt="EAGLESTAR OILFIELD SUPPLIES - L.L.C Logo"
                className="h-12 w-auto object-contain"
              />
              <div>
                <h3 className="text-2xl font-bold">EAGLESTAR OILFIELD SUPPLIES - L.L.C</h3>
                <p className="text-white/80">Energy Services</p>
              </div>
            </div>
            <p className="text-white/80 leading-relaxed mb-6 max-w-md">
              Your trusted partner for top-notch engineering and contracting solutions. 
              Empowering energy with innovation since 2000.
            </p>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <MapPin className="w-5 h-5 text-accent" />
                <span className="text-white/80">Al Dana East 4_1, Abu Dhabi, UAE</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-accent" />
                <span className="text-white/80">+971 54 403 6701</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-accent" />
                <span className="text-white/80">info@eliteues.com</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xl font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {footerLinks.map((link) => (
                <li key={link.name}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="text-white/80 hover:text-accent transition-colors duration-300 text-left"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h4 className="text-xl font-semibold mb-6">Connect With Us</h4>
            <div className="space-y-4">
              <Button
                variant="outline"
                className="bg-white/10 border-white/20 text-white hover:bg-accent hover:border-accent w-full justify-start"
              >
                <Linkedin className="w-5 h-5 mr-3" />
                Follow on LinkedIn
              </Button>
            </div>

            <div className="mt-8">
              <h5 className="font-semibold mb-3">Newsletter</h5>
              <p className="text-white/80 text-sm mb-4">
                Stay updated with our latest news and insights
              </p>
              <div className="flex space-x-2">
                <input
                  type="email"
                  placeholder="Your email"
                  className="flex-1 px-3 py-2 bg-white/10 border border-white/20 rounded-md text-white placeholder-white/60 focus:outline-none focus:border-accent"
                />
                <Button variant="accent" size="sm">
                  Subscribe
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/20 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-white/80 text-sm">
              © 2024 EAGLESTAR OILFIELD SUPPLIES - L.L.C. All rights reserved.
            </div>
            <div className="flex items-center space-x-6">
              <button
                onClick={scrollToTop}
                className="text-white/80 hover:text-accent transition-colors text-sm"
              >
                Back to Top
              </button>
              <span className="text-white/40">|</span>
              <span className="text-white/80 text-sm">
                Established 2000 • Serving GCC Region
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;