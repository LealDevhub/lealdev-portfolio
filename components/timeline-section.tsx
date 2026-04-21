"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const timelineData = [
  {
    title: "Curso: Conectar",
    institution: "Rocketseat",
    date: "Jun 2022",
    description: "Programacao, computadores, internet",
  },
  {
    title: "JavaScript [40 HORAS]",
    institution: "Curso em video",
    date: "Ago 2022",
    description: "JavaScript, ECMAScript",
  },
  {
    title: "Curso: Fundamentar",
    institution: "Rocketseat",
    date: "Ago 2022",
    description:
      "HTML, CSS, JavaScript, DOM, Terminal, NodeJS, EJS, SQL, Estrutura de Dados, POO, Programacao Funcional, Git, GitHub, HTTP.",
  },
  {
    title: "Formacao: Aprenda a programar em Java com Orientacao a Objetos",
    institution: "Alura",
    date: "Dez 2023 ate Jan 2024",
    description:
      "POO em Java, classes, atributos, metodos, heranca, polimorfismo, interfaces.",
  },
  {
    title: "Flask: crie uma webapp com Python",
    institution: "Alura",
    date: "Maio 2024",
    description:
      "Aplicacao web, Flask, HTML, Bootstrap, login, autorizacao, rotas, redirecionamentos, templates, URL dinamicas",
  },
];

function TimelinePoint({
  item,
  index,
  isEven,
}: {
  item: (typeof timelineData)[0];
  index: number;
  isEven: boolean;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.div
      ref={ref}
      className={`w-full md:w-1/2 relative px-3 md:px-5 py-2 ${
        isEven ? "md:ml-auto" : ""
      }`}
      initial={{ opacity: 0, y: -30 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -30 }}
      transition={{ duration: 0.5, delay: index * 0.3 }}
    >
      {/* Point marker */}
      <div
        className={`absolute w-5 h-5 gradient-divider rounded-full z-10 top-0 ${
          isEven ? "left-0 md:-left-3" : "left-0 md:-right-2"
        }`}
      />

      {/* Content card */}
      <div className="p-5 md:p-7 rounded-xl shadow-lg shadow-card ml-8 md:ml-0">
        <h2 className="text-lg md:text-2xl font-bold">{item.title}</h2>
        <p className="text-sm mt-2 text-muted">Instituicao: {item.institution}</p>
        <p className="text-sm mt-2 text-muted">{item.date}</p>
        <p className="text-sm mt-2 text-muted">{item.description}</p>
      </div>
    </motion.div>
  );
}

export function TimelineSection() {
  const lineRef = useRef(null);
  const isLineInView = useInView(lineRef, { once: true });

  return (
    <section className="bg-black py-16 px-4 md:px-16">
      <div className="text-center mb-16">
        <p className="text-primary-light">Linha do tempo</p>
        <h1 className="text-2xl md:text-4xl font-bold">Meus aprendizados e trajetoria</h1>
      </div>

      <div
        ref={lineRef}
        className="relative max-w-4xl mx-auto"
      >
        {/* Vertical line */}
        <motion.div
          className="absolute left-[10px] md:left-1/2 top-0 w-1 gradient-divider rounded-full"
          initial={{ height: 0 }}
          animate={isLineInView ? { height: "100%" } : { height: 0 }}
          transition={{ duration: 3, ease: "linear" }}
        />

        {/* Timeline points */}
        <div className="flex flex-col gap-6">
          {timelineData.map((item, index) => (
            <TimelinePoint
              key={index}
              item={item}
              index={index}
              isEven={index % 2 !== 0}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
