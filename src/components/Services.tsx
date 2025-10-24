import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Package, Wrench, ArrowRight } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Package,
      title: "Material Supply & Representation",
      description: "Comprehensive material supply solutions with trusted vendor representations across the energy sector. We ensure quality materials delivered on time and within specification.",
      features: [
        "Global supplier network",
        "Quality assurance protocols",
        "Timely delivery management",
        "Technical documentation support"
      ]
    },
    {
      icon: Wrench,
      title: "Maintenance & Services",
      description: "Professional maintenance and technical services to keep your operations running smoothly. Our experienced team provides proactive and reactive maintenance solutions.",
      features: [
        "Preventive maintenance programs",
        "Emergency response services",
        "Technical support & consultation",
        "Equipment lifecycle management"
      ]
    }
  ];

  return (
    <section id="services" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
              Our Services
            </h2>
            <div className="w-24 h-1 bg-accent mx-auto mb-8"></div>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              We integrated over time key services based on our clients' needs and expertise. 
              Always with the same idea: <span className="text-primary font-semibold">Integrity, reliability, commitment…</span>
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {services.map((service, index) => (
              <Card key={index} className="shadow-card hover:shadow-corporate transition-all duration-500 group border-0 bg-background">
                <CardHeader className="pb-4">
                  <div className="flex items-center space-x-4 mb-4">
                    <div className="w-16 h-16 bg-gradient-primary rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <service.icon className="w-8 h-8 text-white" />
                    </div>
                    <CardTitle className="text-2xl text-primary group-hover:text-accent transition-colors duration-300">
                      {service.title}
                    </CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="space-y-6">
                  <p className="text-muted-foreground leading-relaxed">
                    {service.description}
                  </p>
                  
                  <div className="space-y-3">
                    {service.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center space-x-3">
                        <div className="w-2 h-2 bg-accent rounded-full"></div>
                        <span className="text-foreground">{feature}</span>
                      </div>
                    ))}
                  </div>
                  
                  <Button variant="outline" className="group mt-6">
                    Learn More
                    <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Call to Action */}
          <div className="text-center bg-gradient-to-r from-primary to-accent rounded-2xl p-8 md:p-12 text-white">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              Ready to Partner with Excellence?
            </h3>
            <p className="text-lg mb-6 text-white/90">
              Let's discuss how our integrated services can drive your project success
            </p>
            <Button variant="hero" size="xl" className="bg-white text-primary hover:bg-white/90">
              Get Started Today
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;