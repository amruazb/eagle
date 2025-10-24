import { Card, CardContent } from "@/components/ui/card";
import { Shield, Award, Users, Target } from "lucide-react";

const About = () => {
  const stats = [
    { icon: Award, label: "Years in Business", value: "Since 2000", color: "text-primary" },
    { icon: Shield, label: "Authorized Partners", value: "50+", color: "text-accent" },
  ];

  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
              About EAGLESTAR OILFIELD SUPPLIES - L.L.C
            </h2>
            <div className="w-24 h-1 bg-accent mx-auto mb-8"></div>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Your trusted partner for excellence in engineering and contracting solutions
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-start">
            {/* Content */}
            <div className="space-y-8">
              <h3 className="text-3xl md:text-4xl font-semibold text-primary mb-8">
                Your Trusted Partner for Excellence
              </h3>
              
              <div className="space-y-6">
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Elite is your trusted partner for top-notch engineering and contracting solutions. 
                  With over 25 years of field-experienced professionals and a strong foundation, 
                  we provide a range of services, from engineering and procurement to contracting and project management.
                </p>
                
                <p className="text-lg text-muted-foreground leading-relaxed">
                  We're committed to your success, and we invite you to join us on this journey to excellence. 
                  Our integrated approach ensures that every project is delivered with the highest standards 
                  of quality, safety, and innovation.
                </p>
              </div>

              <div className="pt-4">
                <div className="space-y-4">
                  <div className="flex items-start space-x-4">
                    <div className="w-3 h-3 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-foreground font-medium">25+ years of proven expertise</span>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="w-3 h-3 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-foreground font-medium">Comprehensive service portfolio</span>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="w-3 h-3 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-foreground font-medium">Commitment to safety and quality</span>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="w-3 h-3 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-foreground font-medium">Regional expertise across GCC</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-1 gap-8 lg:pt-8">
              {stats.map((stat, index) => (
                <Card key={index} className="shadow-card hover:shadow-corporate transition-all duration-300 group">
                  <CardContent className="p-8 text-center">
                    <div className={`inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-br from-primary/10 to-accent/10 mb-6 group-hover:scale-110 transition-transform duration-300`}>
                      <stat.icon className={`w-10 h-10 ${stat.color}`} />
                    </div>
                    <div className="text-3xl md:text-4xl font-bold text-primary mb-3">
                      {stat.value}
                    </div>
                    <div className="text-muted-foreground font-medium text-lg">
                      {stat.label}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;