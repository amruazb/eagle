import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Users, Award, Globe, ArrowRight } from "lucide-react";
import { Dialog, DialogTrigger, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Link } from "react-router-dom";

const openPositions = [
  "Project Manager",
  "Electrical Site Engineer",
  "Sales Engineer",
  "Sales Coordinator",
  "Accountant"
];

const Careers = () => {
  const benefits = [
    {
      icon: Users,
      title: "Join Our Team",
      description: "Be part of a dynamic team of professionals driving innovation in the energy sector"
    },
    {
      icon: Award,
      title: "Career Growth",
      description: "Continuous learning opportunities, professional development, and clear career advancement paths"
    },
    {
      icon: Globe,
      title: "Global Impact",
      description: "Work on projects that shape the future of energy across the GCC region and beyond"
    }
  ];

  return (
    <section id="careers" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
              Build Your Career with Elite
            </h2>
            <div className="w-24 h-1 bg-accent mx-auto mb-8"></div>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Join a team where your expertise matters and your career flourishes
            </p>
          </div>

          {/* Benefits Grid */}
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {benefits.map((benefit, index) => (
              <Card key={index} className="shadow-card hover:shadow-corporate transition-all duration-500 group border-0 bg-background">
                <CardHeader className="text-center pb-4">
                  <div className="w-20 h-20 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    <benefit.icon className="w-10 h-10 text-white" />
                  </div>
                  <CardTitle className="text-xl text-primary group-hover:text-accent transition-colors duration-300">
                    {benefit.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-muted-foreground leading-relaxed">
                    {benefit.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Call to Action */}
          <div className="bg-gradient-to-r from-primary to-accent rounded-2xl p-8 md:p-12 text-white text-center">
            <h3 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Make an Impact?
            </h3>
            <p className="text-xl mb-8 text-white/90 max-w-2xl mx-auto">
              We're always looking for talented professionals to join our growing team. 
              Discover opportunities that match your skills and ambitions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Dialog>
                <DialogTrigger asChild>
                  <Button variant="hero" size="xl" className="bg-white text-primary hover:bg-white/90">
                    View Open Positions
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Button>
                </DialogTrigger>
                <DialogContent>
                  <DialogHeader>
                    <DialogTitle className="text-2xl mb-4">Open Positions</DialogTitle>
                  </DialogHeader>
                  <ul className="space-y-3 text-lg">
                    {openPositions.map((pos) => (
                      <li key={pos} className="p-3 rounded-lg bg-secondary/20 text-primary font-semibold shadow-sm">
                        {pos}
                      </li>
                    ))}
                  </ul>
                </DialogContent>
              </Dialog>
              <Link to="/resume">
                <Button variant="outline" size="xl" className="bg-white/10 border-white/20 text-white hover:bg-white/20">
                  Submit Your Resume
                </Button>
              </Link>
            </div>

            {/* Stats */}
            <div className="flex justify-center gap-16 mt-12 pt-8 border-t border-white/20">
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-bold mb-1">100%</div>
                <div className="text-white/80 text-sm">Employee Satisfaction</div>
              </div>
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-bold mb-1">25+</div>
                <div className="text-white/80 text-sm">Training Programs</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Careers;