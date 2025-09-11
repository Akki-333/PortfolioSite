import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Check, ExternalLink, Github } from "lucide-react";

export default function Projects() {
  const projects = [
    {
      title: "Deep Learning for Image-Based Bibliographic Data Extraction",
      type: "Team Project",
      category: "Deep Learning",
      image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=300",
      description: "Developed and integrated backend systems to extract and process bibliographic data from scanned academic documents using deep learning models for image and text recognition.",
      features: [
        "Interactive Streamlit-based frontend",
        "Real-time file upload and processing",
        "Enhanced user accessibility and interface"
      ],
      technologies: ["Python", "Deep Learning", "Streamlit"]
    },
    {
      title: "Restaurant Reservation and Seating Management System",
      type: "Team Project",
      category: "Web Development",
      image: "https://images.unsplash.com/photo-1514933651103-005eec06c04b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=300",
      description: "Designed and implemented a web-based system to manage table reservations, real-time seating availability, and customer flow, optimizing restaurant operations and reducing wait times.",
      features: [
        "Dynamic table assignment algorithms",
        "Intuitive customer user interface",
        "Peak-time efficiency optimization"
      ],
      technologies: ["Web Development", "Database", "UI/UX"]
    }
  ];

  return (
    <section id="projects" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4" data-testid="text-projects-title">
            Featured Projects
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto"></div>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card key={project.title} className="overflow-hidden card-hover" data-testid={`project-card-${index}`}>
              <div className="h-48 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover"
                  data-testid={`project-image-${index}`}
                />
              </div>
              
              <CardHeader className="pb-4">
                <div className="flex items-center gap-2 mb-3">
                  <Badge variant="secondary" data-testid={`project-type-${index}`}>
                    {project.type}
                  </Badge>
                  <Badge variant="outline" data-testid={`project-category-${index}`}>
                    {project.category}
                  </Badge>
                </div>
                
                <h3 className="text-xl font-semibold text-foreground mb-3" data-testid={`project-title-${index}`}>
                  {project.title}
                </h3>
              </CardHeader>
              
              <CardContent className="pt-0">
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
                
                <div className="flex gap-2 mb-4">
                  {project.technologies.map((tech, techIndex) => (
                    <Badge 
                      key={tech} 
                      variant="secondary" 
                      className="text-xs"
                      data-testid={`project-tech-${index}-${techIndex}`}
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>
                
                <div className="flex gap-3">
                  <Button className="flex-1" data-testid={`project-details-${index}`}>
                    <ExternalLink className="w-4 h-4 mr-2" />
                    View Details
                  </Button>
                  <Button variant="outline" size="icon" data-testid={`project-github-${index}`}>
                    <Github className="w-4 h-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
