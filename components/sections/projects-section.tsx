"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { SectionHeading } from "@/components/ui/section-heading";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    title: "Clima App",
    description: "Aplicacao de previsao do tempo com interface moderna e dados em tempo real de APIs meteorologicas.",
    image: "/assets/clima-app.png",
    tags: ["React", "API", "CSS"],
    demo: "#",
    github: "#",
  },
  {
    title: "Gerenciamento de Vendas",
    description: "Sistema completo para gestao de vendas com dashboard, relatorios e controle de estoque.",
    image: "/assets/gerenciamento-de-vendas.png",
    tags: ["JavaScript", "Node.js", "SQL"],
    demo: "#",
    github: "#",
  },
  {
    title: "Emprestimo de Chromebooks",
    description: "Sistema de controle de emprestimos de equipamentos com rastreamento e notificacoes automaticas.",
    image: "/assets/emprestimo-de-chromebooks-satelite.png",
    tags: ["React", "Node.js", "PostgreSQL"],
    demo: "#",
    github: "#",
  },
  {
    title: "Social Tree",
    description: "Agregador de links pessoais com design minimalista, perfeito para bio de redes sociais.",
    image: "/assets/social-tree.png",
    tags: ["HTML", "CSS", "JavaScript"],
    demo: "#",
    github: "#",
  },
];

export function ProjectsSection() {
  return (
    <section id="projetos" className="py-20 md:py-32 px-4">
      <div className="max-w-6xl mx-auto">
        <SectionHeading
          badge="Portfolio"
          title="Projetos em destaque"
          subtitle="Alguns dos projetos que desenvolvi. Cada um representa um desafio superado e uma nova habilidade adquirida."
        />

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="group h-full">
                {/* Image */}
                <div className="relative overflow-hidden aspect-video">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  {/* Links */}
                  <div className="absolute bottom-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-4 group-hover:translate-y-0">
                    <a
                      href={project.demo}
                      className="p-2 bg-primary rounded-lg text-white hover:bg-primary-light transition-colors"
                      aria-label="Ver demo"
                    >
                      <ExternalLink className="w-4 h-4" />
                    </a>
                    <a
                      href={project.github}
                      className="p-2 bg-card border border-border rounded-lg text-foreground hover:border-primary transition-colors"
                      aria-label="Ver codigo"
                    >
                      <Github className="w-4 h-4" />
                    </a>
                  </div>
                </div>

                <CardContent className="pt-6">
                  <h3 className="text-xl font-semibold text-foreground mb-2 group-hover:text-primary-light transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-muted text-sm mb-4 leading-relaxed">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <Badge key={tag} variant="primary">{tag}</Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* CTA sutil */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-center text-muted mt-12"
        >
          Gostou do que viu?{" "}
          <a href="#contato" className="text-primary-light hover:underline">
            Vamos criar algo incrivel juntos
          </a>
        </motion.p>
      </div>
    </section>
  );
}
