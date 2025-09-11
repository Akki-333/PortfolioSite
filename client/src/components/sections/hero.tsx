import { useState, useEffect } from "react";
import { useSmoothScroll } from "@/hooks/use-smooth-scroll";

export default function Hero() {
  const scrollToSection = useSmoothScroll();
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
      const { clientX, clientY } = e;
      const centerX = window.innerWidth / 2;
      const centerY = window.innerHeight / 2;
      setMousePos({
        x: (clientX - centerX) / centerX * 10, // Limit to 10px movement
        y: (clientY - centerY) / centerY * 10
      });
    };
    
    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section id="home" className="min-h-screen hero-aurora flex items-center justify-center pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="fade-in">
          {/* Profile image with glow effect */}
          <div className="mb-8 flex justify-center">
            <div 
              className="parallax-container"
              style={{
                transform: `translate(${mousePos.x}px, ${mousePos.y}px)`
              }}
            >
              <div className="w-48 h-48 avatar-glow border-4 border-white/30 shadow-2xl">
                <img 
                  src="/profile.png" 
                  alt="Akshay S - Profile Picture"
                  className="w-full h-full object-cover rounded-full"
                  data-testid="img-profile"
                />
              </div>
            </div>
          </div>
          
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-primary-foreground mb-4 text-glow" data-testid="text-hero-name">
            Akshay S
          </h1>
          <p className="text-xl sm:text-2xl text-primary-foreground/90 mb-8 text-glow" data-testid="text-hero-title">
            Tech Enthusiast
          </p>
          <p className="text-lg text-primary-foreground/80 max-w-3xl mx-auto mb-12 leading-relaxed" data-testid="text-hero-description">
            Calm and detail-oriented professional who excels under pressure and communicates with clarity and confidence. Brings strong skills in problem-solving, system design, and machine learning to create innovative solutions and efficient operations.
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
