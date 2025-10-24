import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Award, Shield, Star, GraduationCap } from "lucide-react";

const Commitments = () => {
  const commitments = [
    {
      icon: Award,
      title: "Delivering Quality",
      description: "Over 25 years of excellence in the GCC region, consistently delivering projects that exceed expectations and industry standards.",
      highlight: "25+ Years in GCC"
    },
    {
      icon: Shield,
      title: "Health & Safety",
      description: "Zero-compromise approach to safety with comprehensive protocols, regular training, and continuous monitoring to protect our people and partners.",
      highlight: "Zero Incidents Goal"
    },
    {
      icon: Star,
      title: "High Quality Standards",
      description: "Rigorous quality management systems and continuous improvement processes ensure every project meets the highest international standards.",
      highlight: "ISO Certified"
    },
    {
      icon: GraduationCap,
      title: "Professional Trainings",
      description: "Continuous development of our workforce through specialized training programs, certifications, and knowledge sharing initiatives.",
      highlight: "Continuous Learning Culture"
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
              Our Commitments
            </h2>
            <div className="w-24 h-1 bg-accent mx-auto mb-8"></div>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Built on a foundation of trust, excellence, and unwavering dedication to our core values
            </p>
          </div>

          {/* Commitments Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {commitments.map((commitment, index) => (
              <Card key={index} className="shadow-card hover:shadow-corporate transition-all duration-500 group border-0 bg-background hover:bg-gradient-to-br hover:from-primary/5 hover:to-accent/5">
                <CardHeader className="text-center pb-4">
                  <div className="w-20 h-20 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    <commitment.icon className="w-10 h-10 text-white" />
                  </div>
                  <CardTitle className="text-xl text-primary group-hover:text-accent transition-colors duration-300">
                    {commitment.title}
                  </CardTitle>
                  <div className="text-sm font-semibold text-accent bg-accent/10 px-3 py-1 rounded-full inline-block">
                    {commitment.highlight}
                  </div>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-muted-foreground leading-relaxed">
                    {commitment.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Bottom Stats */}
          <div className="mt-16 bg-gradient-to-r from-primary to-accent rounded-2xl p-8 md:p-12 text-white">
            <div className="grid md:grid-cols-3 gap-8 text-center">
              <div>
                <div className="text-4xl md:text-5xl font-bold mb-2">100%</div>
                <div className="text-white/90">Client Satisfaction</div>
              </div>
              <div>
                <div className="text-4xl md:text-5xl font-bold mb-2">Zero</div>
                <div className="text-white/90">Safety Incidents Target</div>
              </div>
              <div>
                <div className="text-4xl md:text-5xl font-bold mb-2">24/7</div>
                <div className="text-white/90">Support Availability</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Commitments;