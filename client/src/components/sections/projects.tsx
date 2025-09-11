import { useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Check, ExternalLink, Github, X, Calendar, Users, Target } from "lucide-react";

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<number | null>(null);

  const projects = [
    {
      title: "Deep Learning for Image-Based Bibliographic Data Extraction",
      type: "Team Project",
      category: "Deep Learning",
      duration: "4 months",
      teamSize: "4 members",
      image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=300",
      description: "Developed and integrated backend systems to extract and process bibliographic data from scanned academic documents using deep learning models for image and text recognition.",
      fullDescription: "This project involved creating a comprehensive system that uses cutting-edge deep learning techniques to automatically extract bibliographic information from scanned academic documents. The system combines computer vision and natural language processing to identify and parse citations, author names, publication dates, and other metadata with high accuracy.",
      features: [
        "Interactive Streamlit-based frontend",
        "Real-time file upload and processing",
        "Enhanced user accessibility and interface"
      ],
      technologies: ["Python", "Deep Learning", "Streamlit"],
      challenges: [
        "Handling various document formats and quality",
        "Achieving high accuracy in text recognition",
        "Optimizing processing speed for real-time use"
      ],
      outcomes: [
        "95% accuracy in bibliographic data extraction",
        "Reduced manual processing time by 80%",
        "Successfully processed over 1000 documents"
      ]
    },
    {
      title: "Restaurant Reservation and Seating Management System",
      type: "Team Project",
      category: "Web Development",
      duration: "3 months",
      teamSize: "5 members",
      image: "https://images.unsplash.com/photo-1514933651103-005eec06c04b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=300",
      description: "Designed and implemented a web-based system to manage table reservations, real-time seating availability, and customer flow, optimizing restaurant operations and reducing wait times.",
      fullDescription: "A comprehensive restaurant management solution that streamlines the entire dining experience from reservation to seating. The system features intelligent table allocation algorithms, real-time availability tracking, and an intuitive interface for both customers and restaurant staff.",
      features: [
        "Dynamic table assignment algorithms",
        "Intuitive customer user interface",
        "Peak-time efficiency optimization"
      ],
      technologies: ["Web Development", "Database", "UI/UX"],
      challenges: [
        "Managing concurrent reservations",
        "Optimizing table utilization",
        "Creating seamless user experience"
      ],
      outcomes: [
        "40% reduction in customer wait times",
        "Improved table utilization by 25%",
        "Enhanced customer satisfaction scores"
      ]
    }
  ];

  return (
    <section id="projects" className="py-20 bg-background section-bg-pattern">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4" data-testid="text-projects-title">
            Featured Projects
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto"></div>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div key={project.title} className="premium-card p-6" data-testid={`project-card-${index}`}>
              <div className="h-48 overflow-hidden rounded-xl mb-6">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                  data-testid={`project-image-${index}`}
                />
              </div>
              
              <div className="space-y-4">
                <div className="flex items-center gap-2 mb-3">
                  <Badge variant="secondary" className="bg-primary/10 text-primary" data-testid={`project-type-${index}`}>
                    {project.type}
                  </Badge>
                  <Badge variant="outline" className="border-primary/20" data-testid={`project-category-${index}`}>
                    {project.category}
                  </Badge>
                </div>
                
                <h3 className="text-xl font-semibold text-foreground mb-3" data-testid={`project-title-${index}`}>
                  {project.title}
                </h3>
                
                <p className="text-muted-foreground mb-4 leading-relaxed" data-testid={`project-description-${index}`}>
                  {project.description}
                </p>
                
                <div className="mb-4">
                  <p className="text-sm text-muted-foreground mb-2">Key Features:</p>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    {project.features.map((feature, featureIndex) => (
                      <li key={feature} className="flex items-center gap-2" data-testid={`project-feature-${index}-${featureIndex}`}>
                        <Check className="w-3 h-3 text-primary" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="flex gap-2 mb-6">
                  {project.technologies.map((tech, techIndex) => (
                    <Badge 
                      key={tech} 
                      variant="secondary" 
                      className="text-xs bg-primary/5 text-primary border-primary/20"
                      data-testid={`project-tech-${index}-${techIndex}`}
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>
                
                <div className="flex gap-3">
                  <Button 
                    className="flex-1 bg-primary hover:bg-primary/90"
                    onClick={() => setSelectedProject(index)}
                    data-testid={`project-details-${index}`}
                  >
                    <ExternalLink className="w-4 h-4 mr-2" />
                    View Details
                  </Button>
                  <Button variant="outline" size="icon" className="border-primary/20 hover:bg-primary/10" data-testid={`project-github-${index}`}>
                    <Github className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Project Popup */}
        {selectedProject !== null && (
          <div className="project-popup-overlay" onClick={() => setSelectedProject(null)}>
            <div className="project-popup p-8 m-4" onClick={(e) => e.stopPropagation()}>
              <div className="flex justify-between items-start mb-6">
                <h2 className="text-2xl font-bold text-foreground">{projects[selectedProject].title}</h2>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => setSelectedProject(null)}
                  className="hover:bg-primary/10"
                >
                  <X className="w-6 h-6" />
                </Button>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <img
                    src={projects[selectedProject].image}
                    alt={projects[selectedProject].title}
                    className="w-full h-64 object-cover rounded-xl mb-6"
                  />
                  
                  <div className="grid grid-cols-3 gap-4 mb-6">
                    <div className="text-center p-4 glass-morphism rounded-lg">
                      <Calendar className="w-6 h-6 text-primary mx-auto mb-2" />
                      <p className="text-sm text-muted-foreground">Duration</p>
                      <p className="font-semibold text-foreground">{projects[selectedProject].duration}</p>
                    </div>
                    <div className="text-center p-4 glass-morphism rounded-lg">
                      <Users className="w-6 h-6 text-primary mx-auto mb-2" />
                      <p className="text-sm text-muted-foreground">Team</p>
                      <p className="font-semibold text-foreground">{projects[selectedProject].teamSize}</p>
                    </div>
                    <div className="text-center p-4 glass-morphism rounded-lg">
                      <Target className="w-6 h-6 text-primary mx-auto mb-2" />
                      <p className="text-sm text-muted-foreground">Type</p>
                      <p className="font-semibold text-foreground">{projects[selectedProject].type}</p>
                    </div>
                  </div>
                </div>

                <div className="space-y-6">
                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-3">Overview</h3>
                    <p className="text-muted-foreground leading-relaxed">{projects[selectedProject].fullDescription}</p>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-3">Key Challenges</h3>
                    <ul className="space-y-2">
                      {projects[selectedProject].challenges.map((challenge, index) => (
                        <li key={index} className="flex items-start gap-2">
                          <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                          <span className="text-muted-foreground">{challenge}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-3">Outcomes & Impact</h3>
                    <ul className="space-y-2">
                      {projects[selectedProject].outcomes.map((outcome, index) => (
                        <li key={index} className="flex items-start gap-2">
                          <Check className="w-4 h-4 text-primary mt-1 flex-shrink-0" />
                          <span className="text-muted-foreground">{outcome}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex gap-3 pt-4">
                    <Button className="flex-1 bg-primary hover:bg-primary/90">
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Live Demo
                    </Button>
                    <Button variant="outline" className="border-primary/20 hover:bg-primary/10">
                      <Github className="w-4 h-4 mr-2" />
                      Source Code
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
