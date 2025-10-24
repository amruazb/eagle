import { Card, CardContent } from "@/components/ui/card";
import { Quote } from "lucide-react";

const FounderMessage = () => {
  return (
    <section className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
              A Message from Our Founder
            </h2>
            <div className="w-24 h-1 bg-accent mx-auto mb-8"></div>
          </div>

          {/* Quote Cards */}
          <div className="space-y-8">
            <Card className="shadow-card border-0 bg-background">
              <CardContent className="p-8 md:p-12">
                <div className="flex items-start space-x-4">
                  <Quote className="w-12 h-12 text-accent flex-shrink-0 mt-2" />
                  <div>
                    <blockquote className="text-xl md:text-2xl text-foreground leading-relaxed mb-6 italic">
                      "You don't need to be a genius or a visionary, or even a college graduate for that matter, to be successful. 
                      You just need a good team and a dream."
                    </blockquote>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-card border-0 bg-background">
              <CardContent className="p-8 md:p-12">
                <div className="flex items-start space-x-4">
                  <Quote className="w-12 h-12 text-primary flex-shrink-0 mt-2" />
                  <div>
                    <blockquote className="text-lg md:text-xl text-foreground leading-relaxed mb-6">
                      "As I look at the growth over the years since our inception in 2000, I am extremely proud of what we have achieved, 
                      and even more excited about our outlook for an equally promising future. We have successfully transitioned from a 
                      local start-up to a respected firm, earning client trust across the region."
                    </blockquote>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Founder Info */}
          <div className="text-center mt-12">
            <div className="w-32 h-32 bg-gradient-to-br from-primary to-accent rounded-full mx-auto mb-6 flex items-center justify-center">
              <span className="text-4xl font-bold text-white">CEO</span>
            </div>
            <h3 className="text-2xl font-bold text-primary mb-2">Leadership Excellence</h3>
            <p className="text-muted-foreground">Founder & Chief Executive Officer</p>
            <div className="mt-6 flex justify-center">
              <div className="w-16 h-1 bg-accent"></div>
            </div>
          </div>

          {/* Values Grid */}
          <div className="grid md:grid-cols-3 gap-8 mt-16">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-primary rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-white font-bold text-xl">V</span>
              </div>
              <h4 className="text-xl font-semibold text-primary mb-2">Vision</h4>
              <p className="text-muted-foreground">Leading the energy sector transformation</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-accent rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-white font-bold text-xl">I</span>
              </div>
              <h4 className="text-xl font-semibold text-primary mb-2">Innovation</h4>
              <p className="text-muted-foreground">Embracing cutting-edge solutions</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-primary rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-white font-bold text-xl">E</span>
              </div>
              <h4 className="text-xl font-semibold text-primary mb-2">Excellence</h4>
              <p className="text-muted-foreground">Delivering beyond expectations</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FounderMessage;