import { Github, Linkedin, Mail } from "lucide-react";

const socialLinks = [
  { href: "https://github.com/LealDevhub", icon: Github, label: "GitHub" },
  { href: "https://linkedin.com/in/fabricio-leal", icon: Linkedin, label: "LinkedIn" },
  { href: "mailto:fabricio.pereira.leal@gmail.com", icon: Mail, label: "Email" },
];

const quickLinks = [
  { href: "#inicio", label: "Inicio" },
  { href: "#sobre", label: "Sobre" },
  { href: "#projetos", label: "Projetos" },
  { href: "#contato", label: "Contato" },
];

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-card border-t border-border">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div className="flex flex-col gap-4">
            <span className="text-2xl font-bold gradient-text">LealDev</span>
            <p className="text-muted text-sm leading-relaxed">
              Transformando ideias em experiencias digitais incriveis. Vamos criar algo juntos?
            </p>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col gap-4">
            <h3 className="font-semibold text-foreground">Links Rapidos</h3>
            <div className="flex flex-col gap-2">
              {quickLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-sm text-muted hover:text-primary-light transition-colors duration-200"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          {/* Social */}
          <div className="flex flex-col gap-4">
            <h3 className="font-semibold text-foreground">Redes Sociais</h3>
            <div className="flex gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.href}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg bg-background text-muted hover:text-primary-light hover:bg-card-hover transition-all duration-200"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 pt-8 border-t border-border text-center">
          <p className="text-sm text-muted-foreground">
            {currentYear} LealDev. Feito com dedicacao e muito cafe.
          </p>
        </div>
      </div>
    </footer>
  );
}
