"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Send, Github, Linkedin, Mail, ChevronDown } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

const projects = [
  {
    title: "Clima App",
    description: "Aplicacao de previsao do tempo",
    image: "/assets/clima-app.png",
    tags: ["React", "API"],
    link: "#",
  },
  {
    title: "Sistema de Vendas",
    description: "Gerenciamento completo de vendas",
    image: "/assets/gerenciamento-de-vendas.png",
    tags: ["Node.js", "SQL"],
    link: "#",
  },
  {
    title: "Emprestimo Chromebooks",
    description: "Sistema de controle de emprestimos",
    image: "/assets/emprestimo-de-chromebooks-satelite.png",
    tags: ["Full Stack"],
    link: "#",
  },
];

const skills = ["JavaScript", "TypeScript", "React", "Next.js", "Node.js", "SQL", "Git"];

export default function Home() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const mailtoLink = `mailto:fabricio.pereira.leal@gmail.com?subject=Contato de ${formData.name}&body=${formData.message}%0A%0AEmail para contato: ${formData.email}`;
    window.location.href = mailtoLink;
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-sm border-b border-border">
        <nav className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
          <span className="text-lg font-semibold gradient-text">leal.dev</span>
          <div className="flex items-center gap-6">
            <a href="#projetos" className="text-sm text-muted hover:text-foreground transition-colors">Projetos</a>
            <a href="#sobre" className="text-sm text-muted hover:text-foreground transition-colors">Sobre</a>
            <a href="#contato" className="text-sm text-muted hover:text-foreground transition-colors">Contato</a>
          </div>
        </nav>
      </header>

      {/* Hero */}
      <section className="min-h-screen flex flex-col justify-center px-6 pt-16">
        <div className="max-w-5xl mx-auto w-full">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-muted mb-4">Ola, eu sou</p>
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              <span className="gradient-text">Fabricio Leal</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted max-w-xl mb-8 leading-relaxed">
              Desenvolvedor Full Stack criando experiencias digitais modernas e funcionais.
            </p>
            <div className="flex gap-4">
              <a
                href="#contato"
                className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-foreground rounded-lg font-medium hover:bg-primary/90 transition-colors"
              >
                Entrar em contato
                <ArrowUpRight className="w-4 h-4" />
              </a>
              <a
                href="#projetos"
                className="inline-flex items-center gap-2 px-6 py-3 border border-border text-foreground rounded-lg font-medium hover:bg-card transition-colors"
              >
                Ver projetos
              </a>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 0.5 }}
            className="absolute bottom-8 left-1/2 -translate-x-1/2"
          >
            <ChevronDown className="w-6 h-6 text-muted animate-bounce" />
          </motion.div>
        </div>
      </section>

      {/* Projects */}
      <section id="projetos" className="py-24 px-6">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl font-bold mb-12">Projetos</h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <motion.a
                key={project.title}
                href={project.link}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group block bg-card rounded-xl overflow-hidden border border-border hover:border-primary/50 transition-all"
              >
                <div className="aspect-video relative overflow-hidden bg-background">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-5">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="font-semibold">{project.title}</h3>
                    <ArrowUpRight className="w-4 h-4 text-muted group-hover:text-primary transition-colors" />
                  </div>
                  <p className="text-sm text-muted mb-3">{project.description}</p>
                  <div className="flex gap-2">
                    {project.tags.map((tag) => (
                      <span key={tag} className="text-xs px-2 py-1 bg-background rounded-md text-muted">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      {/* About */}
      <section id="sobre" className="py-24 px-6 bg-card/50">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="grid md:grid-cols-2 gap-12 items-center"
          >
            <div>
              <h2 className="text-3xl font-bold mb-6">Sobre mim</h2>
              <p className="text-muted leading-relaxed mb-6">
                Sou um desenvolvedor apaixonado por criar solucoes web que combinam 
                design elegante com codigo limpo. Busco sempre entregar projetos 
                que superem expectativas.
              </p>
              <div className="flex flex-wrap gap-2">
                {skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1.5 text-sm bg-background border border-border rounded-lg"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square max-w-xs mx-auto rounded-2xl overflow-hidden border border-border">
                <Image
                  src="/assets/having-fun.png"
                  alt="Fabricio Leal"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact */}
      <section id="contato" className="py-24 px-6">
        <div className="max-w-2xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold mb-4">Vamos conversar?</h2>
            <p className="text-muted">
              Tem um projeto em mente? Adoraria ouvir sobre ele.
            </p>
          </motion.div>

          <motion.form
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            onSubmit={handleSubmit}
            className="space-y-4"
          >
            <div className="grid md:grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="Seu nome"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                required
                className="w-full px-4 py-3 bg-card border border-border rounded-lg focus:outline-none focus:border-primary transition-colors"
              />
              <input
                type="email"
                placeholder="Seu email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                required
                className="w-full px-4 py-3 bg-card border border-border rounded-lg focus:outline-none focus:border-primary transition-colors"
              />
            </div>
            <textarea
              placeholder="Sua mensagem"
              rows={5}
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              required
              className="w-full px-4 py-3 bg-card border border-border rounded-lg focus:outline-none focus:border-primary transition-colors resize-none"
            />
            <button
              type="submit"
              className="w-full inline-flex items-center justify-center gap-2 px-6 py-3 bg-primary text-foreground rounded-lg font-medium hover:bg-primary/90 transition-colors"
            >
              Enviar mensagem
              <Send className="w-4 h-4" />
            </button>
          </motion.form>

          <div className="mt-8 pt-8 border-t border-border">
            <p className="text-center text-muted text-sm mb-4">Ou me encontre em</p>
            <div className="flex justify-center gap-4">
              <a
                href="https://wa.me/5511948765742"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-card border border-border rounded-lg hover:border-primary/50 transition-colors"
                aria-label="WhatsApp"
              >
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
              </a>
              <a
                href="https://github.com/LealDevhub"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-card border border-border rounded-lg hover:border-primary/50 transition-colors"
                aria-label="GitHub"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href="https://linkedin.com/in/fabricio-leal"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-card border border-border rounded-lg hover:border-primary/50 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="mailto:fabricio.pereira.leal@gmail.com"
                className="p-3 bg-card border border-border rounded-lg hover:border-primary/50 transition-colors"
                aria-label="Email"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 border-t border-border">
        <div className="max-w-5xl mx-auto text-center">
          <p className="text-sm text-muted">
            {new Date().getFullYear()} Fabricio Leal. Feito com Next.js
          </p>
        </div>
      </footer>
    </div>
  );
}
