import { ArrowUp } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="py-12 px-4 bg-card relative border-t border-border mt-12 pt-8 flex flex-wrap justify-between items-center">
      <p className="text-sm font-medium tracking-wide text-muted-foreground font-sans">
        {" "}
        &copy; {new Date().getFullYear()} Moses Dagi. All rights reserved.
      </p>
      <a
        href="#hero"
        className="p-2 rounded-full bg-primary/10 hover:bg-primary/20 text-foreground transition animate-bounce"
      >
        <ArrowUp size={16} className="" />
      </a>
    </footer>
  );
};
