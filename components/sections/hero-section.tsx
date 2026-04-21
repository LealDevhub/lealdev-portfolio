"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowDown, MessageCircle } from "lucide-react";

export function HeroSection() {
  return (
    <section id="inicio" className="relative min-h-screen flex items-center justify-center px-4 pt-20">
      <div className="max-w-4xl mx-auto text-center">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <span className="inline-block px-4 py-2 text-sm font-medium text-primary-light bg-primary/10 border border-primary/20 rounded-full mb-6">
            Disponivel para novos projetos
          </span>
        </motion.div>

        {/* Greeting */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-lg md:text-xl text-muted mb-4"
        >
          Ola, eu sou
        </motion.p>

        {/* Name */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-4xl sm:text-5xl md:text-7xl font-bold mb-6"
        >
          <span className="gradient-text">Fabricio Leal</span>
        </motion.h1>

        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-xl sm:text-2xl md:text-3xl font-medium text-foreground mb-6"
        >
          Desenvolvedor Full Stack
        </motion.h2>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-base md:text-lg text-muted max-w-2xl mx-auto mb-10 leading-relaxed text-pretty"
        >
          Transformo ideias em experiencias digitais incriveis. 
          Apaixonado por criar solucoes que fazem a diferenca, 
          com codigo limpo e interfaces que encantam.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <Button 
            variant="primary" 
            size="lg"
            onClick={() => document.getElementById("projetos")?.scrollIntoView({ behavior: "smooth" })}
          >
            Ver projetos
            <ArrowDown className="ml-2 w-5 h-5" />
          </Button>
          <Button 
            variant="secondary" 
            size="lg"
            onClick={() => document.getElementById("contato")?.scrollIntoView({ behavior: "smooth" })}
          >
            <MessageCircle className="mr-2 w-5 h-5" />
            Vamos conversar
          </Button>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="w-6 h-10 border-2 border-muted rounded-full flex justify-center p-2"
        >
          <motion.div className="w-1.5 h-1.5 bg-primary-light rounded-full" />
        </motion.div>
      </motion.div>
    </section>
  );
}
