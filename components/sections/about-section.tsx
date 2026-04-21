"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "@/components/ui/section-heading";
import { Badge } from "@/components/ui/badge";
import { Code2, Lightbulb, Rocket, Users } from "lucide-react";

const skills = [
  "HTML", "CSS", "JavaScript", "TypeScript", "React", "Next.js", 
  "Node.js", "SQL", "Git", "Tailwind CSS", "Python"
];

const highlights = [
  {
    icon: Code2,
    title: "Codigo Limpo",
    description: "Escrevo codigo legivel, mantivel e escalavel",
  },
  {
    icon: Lightbulb,
    title: "Solucoes Criativas",
    description: "Transformo problemas complexos em solucoes simples",
  },
  {
    icon: Rocket,
    title: "Entrega Agil",
    description: "Projetos entregues no prazo com qualidade",
  },
  {
    icon: Users,
    title: "Comunicacao Clara",
    description: "Mantenho voce atualizado em cada etapa",
  },
];

export function AboutSection() {
  return (
    <section id="sobre" className="py-20 md:py-32 px-4">
      <div className="max-w-6xl mx-auto">
        <SectionHeading
          badge="Sobre mim"
          title="Prazer em conhecer voce!"
          subtitle="Sou um desenvolvedor apaixonado por tecnologia e design, sempre buscando criar experiencias digitais que conectam pessoas e resolvem problemas reais."
        />

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* About text */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="space-y-6"
          >
            <p className="text-muted leading-relaxed">
              Minha jornada na programacao comecou com a curiosidade de entender como as coisas funcionam. 
              Hoje, apos anos de estudo e projetos, essa curiosidade se transformou em paixao por criar 
              solucoes que realmente fazem a diferenca.
            </p>
            <p className="text-muted leading-relaxed">
              Acredito que um bom desenvolvedor nao e apenas alguem que escreve codigo, mas alguem que 
              entende as necessidades do cliente e traduz isso em uma experiencia digital excepcional. 
              E assim que trabalho: ouvindo, entendendo e entregando.
            </p>
            <p className="text-foreground font-medium">
              Quer saber como posso ajudar seu projeto? Me chama para conversar!
            </p>

            {/* Skills */}
            <div className="pt-4">
              <h3 className="text-sm font-medium text-primary-light mb-4 uppercase tracking-wider">
                Tecnologias que domino
              </h3>
              <div className="flex flex-wrap gap-2">
                {skills.map((skill, index) => (
                  <motion.div
                    key={skill}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: index * 0.05 }}
                  >
                    <Badge variant="outline">{skill}</Badge>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Highlights grid */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="grid sm:grid-cols-2 gap-4"
          >
            {highlights.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                className="p-6 bg-card rounded-xl border border-border hover:border-primary/30 transition-colors duration-300"
              >
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <item.icon className="w-6 h-6 text-primary-light" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">{item.title}</h3>
                <p className="text-sm text-muted">{item.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
