"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "@/components/ui/section-heading";
import { GraduationCap, Award, BookOpen } from "lucide-react";

const timelineItems = [
  {
    year: "2024",
    title: "Full Stack Development",
    institution: "Rocketseat",
    description: "Formacao completa em desenvolvimento web moderno com React, Node.js e tecnologias atuais do mercado.",
    icon: GraduationCap,
    type: "formation",
  },
  {
    year: "2023",
    title: "JavaScript Avancado",
    institution: "Udemy",
    description: "Aprofundamento em JavaScript, incluindo ES6+, programacao assincrona e padroes de projeto.",
    icon: BookOpen,
    type: "course",
  },
  {
    year: "2023",
    title: "React & Next.js",
    institution: "Rocketseat",
    description: "Especializacao em React e Next.js para criacao de aplicacoes web de alta performance.",
    icon: Award,
    type: "certification",
  },
  {
    year: "2022",
    title: "Fundamentos de Programacao",
    institution: "Inicio da Jornada",
    description: "Primeiros passos no mundo da programacao, aprendendo logica, algoritmos e HTML/CSS.",
    icon: BookOpen,
    type: "course",
  },
];

export function TimelineSection() {
  return (
    <section id="trajetoria" className="py-20 md:py-32 px-4 bg-card/30">
      <div className="max-w-4xl mx-auto">
        <SectionHeading
          badge="Trajetoria"
          title="Minha jornada de aprendizado"
          subtitle="Cada certificacao e curso representa um passo na minha evolucao como desenvolvedor. Nunca paro de aprender."
        />

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary via-primary-light to-primary" />

          {/* Timeline items */}
          <div className="space-y-12">
            {timelineItems.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`relative flex items-start gap-8 ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                {/* Dot */}
                <div className="absolute left-4 md:left-1/2 w-4 h-4 -translate-x-1/2 rounded-full bg-primary-light border-4 border-background z-10" />

                {/* Content */}
                <div className={`ml-12 md:ml-0 md:w-1/2 ${index % 2 === 0 ? "md:pr-12 md:text-right" : "md:pl-12"}`}>
                  <div className={`p-6 bg-card rounded-xl border border-border hover:border-primary/30 transition-all duration-300 hover:shadow-lg hover:shadow-primary/5 ${
                    index % 2 === 0 ? "md:ml-auto" : ""
                  } max-w-md`}>
                    <div className={`flex items-center gap-3 mb-3 ${index % 2 === 0 ? "md:flex-row-reverse" : ""}`}>
                      <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                        <item.icon className="w-5 h-5 text-primary-light" />
                      </div>
                      <span className="text-sm font-medium text-primary-light">{item.year}</span>
                    </div>
                    <h3 className="text-lg font-semibold text-foreground mb-1">{item.title}</h3>
                    <p className="text-sm text-primary-light/80 mb-3">{item.institution}</p>
                    <p className="text-sm text-muted">{item.description}</p>
                  </div>
                </div>

                {/* Spacer for alternating layout */}
                <div className="hidden md:block md:w-1/2" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
