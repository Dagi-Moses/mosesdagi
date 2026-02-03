import { cn } from "@/lib/utils";
import { ArrowRight, ExternalLink, Github } from "lucide-react";
import Image from "next/image";
type ProjectType = "web" | "mobile";

export interface Project {
  id: number;
  title: string;
  description: string;
  image: string;       // path to image or URL
  tags: string[];      // tech stack
  demoUrl?: string;     // live demo link
  githubUrl?: string;
  alt?: string;
  type: ProjectType;  // repo link
}


const projects: Project[] = [
  {
    id: 1,
    title: "Punch Anniversary",
    description:
      "A web platform I built to manage and showcase Punch Nigeria’s annual anniversary events, including event registration, media galleries, and milestone highlights",
    image: "/projects/punch_demo.png",
    alt: "Punch Nigeria anniversary web platform showing event registration, media gallery, and milestone highlights",
    tags: ["Flutter", "Node.js", "MongoDB"],

    githubUrl: "https://github.com/Dagi-Moses/punch_demo",
    type: "web"
  },

  {
    id: 2,
    title: "Lextorah AI Tutor",
    description:
      "An AI-powered learning assistant designed to help students understand complex topics through interactive explanations, guided practice, and instant feedback. It adapts to each learner’s pace, simplifies difficult concepts, and supports continuous learning across subjects",
    image: "/projects/lextorah.png",
    tags: ["Flutter", "Dart", "Python"],
    type: "web"
  },

  {
    id: 3,
    title: "Node Canteen",
    description:
      "A platform that streamlines food ordering, menu management, and order tracking. It enables users to place orders digitally while administrators manage inventory, pricing, and daily operations",
    image: "/projects/canteen.png",
    tags: ["Flutter", "Firebase", "Dart"],
    demoUrl: 'https://appetize.io/embed/b_c6ca3zeolhcqkxxox3i2tu6foy',
    githubUrl: 'https://github.com/Dagi-Moses/canteen',
    type: "mobile"
  },


];


export const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24  relative ">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb text-center mb-10">
          Featured
          <span className="text-primary"> Projects</span>
        </h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Here are some of my recent projects, Each project was carefully
          crafted with attention to detail, performance, and user experience.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8  ">
          {projects.map((project, key) => (
            <div
              key={key}
              className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover"
            >

              <div
                className={cn(
                  "relative overflow-hidden rounded-lg",

                  "aspect-video"   // 16:9
                )}
              >
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className={cn(
                    " transition-transform duration-500 group-hover:scale-110",
                    project.id === 1
                      ? "object-left" :   // portrait
                      project.id === 3
                        ? "object-contain "   // portrait
                        : "")}
                />

              </div>


              {/* <div className="relative h-48 overflow-hidden">

                <Image
                  src={project.image}
                  alt={project.title}
                  loading="lazy"
                  decoding="async"
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div> */}

              <div className="p-4">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, key) => (
                    <span
                      key={key}
                      className="px-2 py-1 text-xs border font-medium rounded-full bg-secondary text-secondary-foreground "
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <h3 className="text-l font-semibold mb-1">{project.title}</h3>
                <p className="text-muted-foreground text-sm mb-4">
                  {project.description}
                </p>

                <div className="flex justify-between items-center ">
                  <div className="flex space-x-3 ">
                    {project.demoUrl && (<a
                      href={project.demoUrl}
                      target="_blank"
                      className=" text-foreground/80 hover:text-primary transition-colors duration-300"
                    >
                      <ExternalLink size={20} />
                    </a>)}
                    {project.githubUrl && (

                      <a
                        href={project.githubUrl}
                        target="_blank"
                        className=" text-foreground/80 hover:text-primary transition-colors duration-300"
                      >
                        <Github size={20} />
                      </a>)}


                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-12 ">
          <a
            className="cosmic-button w-fit flex items-center mx-auto"
            href="https://github.com/Dagi-Moses"
            target="_blank"
          >
            Checkout My GitHub <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};
