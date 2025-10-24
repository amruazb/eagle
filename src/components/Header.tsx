import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import eagleLogo from "/eagle-logo.png";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { name: "About", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Clients", href: "#clients" },
    { name: "Careers", href: "#careers" },
    { name: "Contact", href: "#contact" },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    element?.scrollIntoView({ behavior: "smooth" });
    setIsMenuOpen(false);
  };

  return (
    <header className="bg-background/95 backdrop-blur-sm border-b border-border sticky top-0 z-50 shadow-card">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <img
              src={eagleLogo}
              alt="EAGLESTAR OILFIELD SUPPLIES - L.L.C"
              className="h-12 w-auto"
            />
            <div>
              <h1 className="text-xl font-bold text-primary">EAGLESTAR OILFIELD SUPPLIES - L.L.C</h1>
              <p className="text-xs text-muted-foreground">Energy Services</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={() => scrollToSection(item.href)}
                className="text-foreground hover:text-primary transition-colors duration-300 font-medium relative group"
              >
                {item.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-accent transition-all duration-300 group-hover:w-full"></span>
              </button>
            ))}
            <Button variant="corporate" size="lg" onClick={() => scrollToSection("#contact")}>
              Contact Us
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden mt-4 pb-4 border-t border-border pt-4 animate-fade-in">
            <div className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <button
                  key={item.name}
                  onClick={() => scrollToSection(item.href)}
                  className="text-left text-foreground hover:text-primary transition-colors py-2 px-4 rounded-md hover:bg-secondary"
                >
                  {item.name}
                </button>
              ))}
              <Button variant="corporate" className="mt-4" onClick={() => scrollToSection("#contact")}>
                Contact Us
              </Button>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;