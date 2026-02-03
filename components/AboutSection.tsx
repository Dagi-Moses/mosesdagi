"use client"

import { Layers, Smartphone, Server } from "lucide-react";

export const AboutSection = () => {
  return (
    <section id="about" className="py-24 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          About <span className="text-primary"> Me</span>
        </h2>

        {/* Left section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center ">
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold">
              Full-stack Mobile & Web Developer
            </h3>
            <p className="text-muted-foreground">
              With over 4 years of experience in full-stack development, I
              specialize in building responsive, scalable, and high-performance
              mobile and web applications with reliable backend systems to
              deliver a complete and seamless experience.
            </p>

            <p className="text-muted-foreground">
              I&apos;m passionate about crafting elegant solutions to complex
              challenges and continually exploring new technologies and
              techniques to stay at the forefront of mobile and web development.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
              <a

                href="https://drive.google.com/file/d/1j41cfjaf9SZ6I1_YkcdDCTCw-a4sW9Sh/view?usp=drive_link"
                target="_blank"
                rel="noopener noreferrer"
                className="cosmic-button justify-center text-center">
                View CV
              </a>
              <a
                href="https://drive.google.com/uc?export=download&id=1j41cfjaf9SZ6I1_YkcdDCTCw-a4sW9Sh"

                rel="noopener noreferrer"
                className="text-center justify-center px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300"
              >
                Download CV
              </a>
            </div>
          </div>

          {/* Right section */}
          <div className="grid grid-cols-1 gap-6">
            {/* 1 */}
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4 ">
                <div className="p-3 rounded-full bg-primary/10">
                  <Layers className=" h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">
                    Full-Stack Development
                  </h4>
                  <p className="text-muted-foreground">
                    Building scalable mobile and web apps with clean, reliable
                    systems.
                  </p>
                </div>
              </div>
            </div>

            {/* 2 */}
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4 ">
                <div className="p-3 rounded-full bg-primary/10">
                  <Smartphone className=" h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">
                    Cross-Platform Engineering
                  </h4>
                  <p className="text-muted-foreground">
                    Creating smooth cross-platform apps with maintainable
                    architectures and shared code.
                  </p>
                </div>
              </div>
            </div>

            {/* 3 */}

            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4 ">
                <div className="p-3 rounded-full bg-primary/10">
                  <Server className=" h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">
                    Backend & API Development
                  </h4>
                  <p className="text-muted-foreground">
                    Developing secure, robust APIs, databases, and server logic
                    for real-world scale.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
