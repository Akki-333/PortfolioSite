import { useEffect, useRef } from "react";
import { Search, Users, TrendingUp, Database } from "lucide-react";

interface SkillBarProps {
  skill: string;
  level: string;
  percentage: number;
}

function SkillBar({ skill, level, percentage }: SkillBarProps) {
  const barRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && barRef.current) {
            setTimeout(() => {
              if (barRef.current) {
                barRef.current.style.width = `${percentage}%`;
              }
            }, 200);
          }
        });
      },
      { threshold: 0.5 }
    );

    if (barRef.current) {
      observer.observe(barRef.current);
    }

    return () => observer.disconnect();
  }, [percentage]);

  return (
    <div>
      <div className="flex justify-between items-center mb-2">
        <span className="font-medium text-foreground">{skill}</span>
        <span className="text-primary font-semibold">{level}</span>
      </div>
      <div className="w-full bg-muted rounded-full h-3">
        <div 
          ref={barRef}
          className="skill-bar bg-primary h-3 rounded-full"
          style={{ width: "0%" }}
        />
      </div>
    </div>
  );
}

export default function Skills() {
  const technicalSkills = [
    { skill: "Troubleshooting & Debugging", level: "Strong", percentage: 90 },
    { skill: "Power BI", level: "Intermediate", percentage: 70 },
    { skill: "SQL", level: "Intermediate", percentage: 65 },
    { skill: "Jupyter Notebook", level: "Intermediate", percentage: 60 },
    { skill: "Python", level: "Beginner", percentage: 40 },
    { skill: "C Programming", level: "Beginner", percentage: 35 },
  ];

  const competencies = [
    {
      icon: Search,
      title: "Problem Solving",
      description: "Analytical thinking and systematic approach to complex challenges"
    },
    {
      icon: Users,
      title: "System Design",
      description: "Architectural planning and scalable software solution design"
    },
    {
      icon: TrendingUp,
      title: "Machine Learning",
      description: "Deep learning models and AI implementation for real-world applications"
    },
    {
      icon: Database,
      title: "Data Analytics",
      description: "Data extraction, analysis, and visualization expertise"
    }
  ];

  return (
    <section id="skills" className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4" data-testid="text-skills-title">
            Skills & Expertise
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto"></div>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Technical Skills */}
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold text-foreground mb-6" data-testid="text-technical-skills">
              Technical Skills
            </h3>
            
            <div className="space-y-4">
              {technicalSkills.map((skill, index) => (
                <div key={skill.skill} data-testid={`skill-bar-${index}`}>
                  <SkillBar {...skill} />
                </div>
              ))}
            </div>
          </div>
          
          {/* Core Competencies */}
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold text-foreground mb-6" data-testid="text-core-competencies">
              Core Competencies
            </h3>
            
            <div className="grid gap-4">
              {competencies.map((competency, index) => (
                <div 
                  key={competency.title}
                  className="bg-card p-6 rounded-lg border border-border card-hover"
                  data-testid={`competency-card-${index}`}
                >
                  <competency.icon className="w-8 h-8 text-primary mb-4" />
                  <h4 className="font-semibold text-foreground mb-2">{competency.title}</h4>
                  <p className="text-sm text-muted-foreground">{competency.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
