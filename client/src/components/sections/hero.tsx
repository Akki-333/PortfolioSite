import { useSmoothScroll } from "@/hooks/use-smooth-scroll";
import { User } from "lucide-react";

export default function Hero() {
  const scrollToSection = useSmoothScroll();

  return (
    <section id="home" className="min-h-screen gradient-bg flex items-center justify-center pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="fade-in">
          {/* Profile image placeholder */}
          <div className="mb-8 flex justify-center">
            <div className="w-48 h-48 rounded-full bg-primary-foreground/10 border-4 border-primary-foreground/20 flex items-center justify-center">
              <User className="w-24 h-24 text-primary-foreground/60" data-testid="img-profile-placeholder" />
            </div>
          </div>
          
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-primary-foreground mb-4" data-testid="text-hero-name">
            Akshay S
          </h1>
          <p className="text-xl sm:text-2xl text-primary-foreground/90 mb-8" data-testid="text-hero-title">
            Tech Enthusiast
          </p>
          <p className="text-lg text-primary-foreground/80 max-w-3xl mx-auto mb-12 leading-relaxed" data-testid="text-hero-description">
            Calm and detail-oriented professional who excels under pressure and communicates with clarity and confidence. Brings strong skills in problem-solving, stakeholder coordination, and process improvement to ensure smooth and efficient operations.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={() => scrollToSection("projects")}
              className="bg-primary-foreground text-primary px-8 py-3 rounded-lg font-semibold hover:bg-primary-foreground/90 transition-colors"
              data-testid="button-view-work"
            >
              View My Work
            </button>
            <button 
              onClick={() => scrollToSection("contact")}
              className="border-2 border-primary-foreground text-primary-foreground px-8 py-3 rounded-lg font-semibold hover:bg-primary-foreground hover:text-primary transition-colors"
              data-testid="button-get-in-touch"
            >
              Get In Touch
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
