"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const techs = [
  { name: "HTML", icon: "/assets/icons/html-logo.svg", alt: "Icone da linguagem de marcacao HTML" },
  { name: "CSS", icon: "/assets/icons/css-logo.svg", alt: "Icone do Cascating Style Sheet CSS" },
  { name: "JAVASCRIPT", icon: "/assets/icons/javascript-logo.svg", alt: "Logo da linguagem de programacao Javascript" },
  { name: "NODE.JS", icon: "/assets/icons/node-logo.svg", alt: "Logo do Node.js" },
  { name: "SQL", icon: "/assets/icons/sql-logo.svg", alt: "Logo do MySQL" },
  { name: "GITHUB", icon: "/assets/icons/github-logo.svg", alt: "Logo do Github" },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.65 },
  },
};

export function IntroSection() {
  return (
    <section className="min-h-screen flex items-center px-4 md:px-16">
      <motion.div
        className="w-full grid grid-cols-1 md:grid-cols-2 items-center gap-5"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div className="text-center md:text-left" variants={itemVariants}>
          <h3 className="text-sm md:text-base">Hello World! Meu nome e Fabricio Leal</h3>
          <h1 className="text-2xl md:text-5xl lg:text-7xl font-bold">
            Desenvolvedor <span className="gradient-text font-bold">Full-Stack</span>
          </h1>
        </motion.div>

        <motion.div className="flex justify-center md:justify-end" variants={itemVariants}>
          <Image
            src="https://avatars.githubusercontent.com/u/101584569?v=4"
            alt="Foto do Fabricio Leal"
            width={296}
            height={296}
            className="w-60 md:w-72 rounded-full"
            priority
          />
        </motion.div>

        <motion.div className="md:col-span-2 py-3" variants={itemVariants}>
          <p className="text-muted text-sm md:text-base max-w-full md:max-w-[50%]">
            Apaixonado por Tecnologia e Desenvolvimento Web!
            <br />
            Atualmente, no ultimo semestre de Bacharelado em TI pela UNIVESP, e tenho me
            especializado em desenvolver sistemas que promovam solucoes inovadoras e eficientes,
            alem de transformar meus conhecimentos academicos e objetivos profissionais.
          </p>
        </motion.div>

        <motion.div
          className="md:col-span-2 flex flex-col md:flex-row items-center justify-between gap-4 py-4"
          variants={itemVariants}
        >
          {techs.map((tech) => (
            <div key={tech.name} className="flex items-center gap-2">
              <Image src={tech.icon} alt={tech.alt} width={24} height={24} />
              <span className="gradient-text font-extrabold text-sm md:text-base">{tech.name}</span>
            </div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}
