import taqaLogo from "@/assets/taqa_mainLogo.svg";
import siemensLogo from "@/assets/siemens-logo.png";
import adnocLogo from "@/assets/adnoc-logo-updated.svg";
import petrojetLogo from "@/assets/petrojet-logo.png";
import schneiderLogo from "@/assets/Schneider_E_logo-LIO-white_header.svg";
import tecnimontLogo from "@/assets/tecnimont-logo.png";
import nmdcLogo from "@/assets/nmdc-logo.png";
import emersonLogo from "@/assets/emerson-logo.png";

const ClientLogos = () => {
  const clients = [
    { name: "ADNOC", logo: adnocLogo },
    { name: "TAQA", logo: taqaLogo },
    { name: "Tecnimont", logo: tecnimontLogo },
    { name: "NMDC Energy", logo: "https://www.nmdc-energy.com/assets/images/logo/NMDC%20Energy%20white.svg" },
    { name: "Petrojet", logo: petrojetLogo },
    { name: "Siemens", logo: siemensLogo },
    { name: "Schneider", logo: schneiderLogo },
    { name: "Emerson", logo: emersonLogo },
  ];

  return (
    <section id="clients" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
              Trusted by Industry Leaders
            </h2>
            <div className="w-24 h-1 bg-accent mx-auto mb-8"></div>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              We're proud to serve some of the most respected names in the energy industry
            </p>
          </div>

          {/* Client Logos Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-8 items-center">
            {clients.map((client, index) => (
              <div 
                key={index} 
                className="group flex items-center justify-center p-6 bg-background rounded-xl shadow-card hover:shadow-corporate transition-all duration-500 hover:scale-105"
              >
                <img 
                  src={client.logo} 
                  alt={`${client.name} logo`}
                  className={`max-h-16 w-auto object-contain filter grayscale group-hover:grayscale-0 transition-all duration-300 ${
                    client.name === 'NMDC Energy' || client.name === 'Siemens'
                      ? 'bg-[#222] rounded-lg p-2'
                      : client.name === 'Schneider'
                      ? 'bg-[#00A651] rounded-lg p-2'
                      : ''
                  }`}
                />
              </div>
            ))}
          </div>

          {/* Stats */}
          <div className="mt-16 bg-gradient-to-r from-primary/5 to-accent/5 rounded-2xl p-8 md:p-12">
            <div className="grid md:grid-cols-3 gap-8 text-center">
              <div>
                <div className="text-3xl md:text-4xl font-bold text-accent mb-2">100%</div>
                <div className="text-muted-foreground">Client Retention</div>
              </div>
              <div>
                <div className="text-3xl md:text-4xl font-bold text-primary mb-2">5+</div>
                <div className="text-muted-foreground">Countries Served</div>
              </div>
              <div>
                <div className="text-3xl md:text-4xl font-bold text-accent mb-2">24/7</div>
                <div className="text-muted-foreground">Global Support</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClientLogos;