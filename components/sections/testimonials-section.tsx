"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "@/components/ui/section-heading";
import { Card, CardContent } from "@/components/ui/card";
import { Quote } from "lucide-react";

const testimonials = [
  {
    name: "Cliente Exemplo",
    role: "CEO, Empresa X",
    content: "Excelente profissional! Entregou o projeto no prazo e com qualidade superior ao esperado. Comunicacao clara e sempre disponivel para ajustes.",
    avatar: null,
  },
  {
    name: "Parceiro de Projeto",
    role: "Product Manager",
    content: "Trabalhar com o Fabricio foi uma experiencia incrivel. Ele entende as necessidades do negocio e traduz em solucoes tecnicas elegantes.",
    avatar: null,
  },
  {
    name: "Em breve",
    role: "Seu depoimento aqui",
    content: "Este espaco esta reservado para o proximo cliente satisfeito. Pode ser voce! Entre em contato e vamos criar algo incrivel juntos.",
    avatar: null,
    placeholder: true,
  },
];

export function TestimonialsSection() {
  return (
    <section id="depoimentos" className="py-20 md:py-32 px-4 bg-card/30">
      <div className="max-w-6xl mx-auto">
        <SectionHeading
          badge="Depoimentos"
          title="O que dizem sobre meu trabalho"
          subtitle="A satisfacao dos clientes e o melhor indicador de um trabalho bem feito."
        />

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className={`h-full ${testimonial.placeholder ? "border-dashed border-primary/30" : ""}`}>
                <CardContent className="pt-6">
                  <Quote className="w-8 h-8 text-primary/30 mb-4" />
                  <p className={`text-sm leading-relaxed mb-6 ${testimonial.placeholder ? "text-muted italic" : "text-muted"}`}>
                    {testimonial.content}
                  </p>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-primary-light flex items-center justify-center text-white font-semibold">
                      {testimonial.name.charAt(0)}
                    </div>
                    <div>
                      <p className="font-medium text-foreground text-sm">{testimonial.name}</p>
                      <p className="text-xs text-muted">{testimonial.role}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
