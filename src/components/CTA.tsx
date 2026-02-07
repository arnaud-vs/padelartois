import { Button } from "@/components/ui/button";
import { ArrowRight, MapPin, Phone, Mail } from "lucide-react";

const CTA = () => {
  return (
    <section id="contact" className="py-24 bg-hero-gradient relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-accent/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div>
            <h2 className="font-display text-3xl md:text-5xl font-bold text-primary-foreground mb-6">
              Ready to Start Your
              <br />
              <span className="text-gradient">Padel Journey?</span>
            </h2>
            <p className="text-primary-foreground/80 text-lg mb-8 max-w-md">
              Book your first session today and experience the fastest-growing sport 
              in the world at our premium facility.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="hero" size="xl">
                Book Now
                <ArrowRight className="w-5 h-5" />
              </Button>
              <Button
                variant="heroOutline"
                size="xl"
                className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary"
              >
                Contact Us
              </Button>
            </div>
          </div>

          {/* Right Content - Contact Info */}
          <div className="bg-card/10 backdrop-blur-sm rounded-2xl p-8 border border-primary-foreground/20">
            <h3 className="font-display text-2xl font-semibold text-primary-foreground mb-6">
              Visit Us
            </h3>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-accent/20 flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-5 h-5 text-accent" />
                </div>
                <div>
                  <p className="text-primary-foreground font-medium">Location</p>
                  <p className="text-primary-foreground/70">
                    Avenue des Sports 42<br />
                    1000 Brussels, Belgium
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-accent/20 flex items-center justify-center flex-shrink-0">
                  <Phone className="w-5 h-5 text-accent" />
                </div>
                <div>
                  <p className="text-primary-foreground font-medium">Phone</p>
                  <p className="text-primary-foreground/70">+32 2 123 45 67</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-accent/20 flex items-center justify-center flex-shrink-0">
                  <Mail className="w-5 h-5 text-accent" />
                </div>
                <div>
                  <p className="text-primary-foreground font-medium">Email</p>
                  <p className="text-primary-foreground/70">hello@padelartois.be</p>
                </div>
              </div>

              <div className="pt-4 border-t border-primary-foreground/20">
                <p className="text-primary-foreground font-medium mb-2">Opening Hours</p>
                <p className="text-primary-foreground/70">
                  Monday - Friday: 7:00 - 23:00<br />
                  Weekend: 8:00 - 22:00
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
