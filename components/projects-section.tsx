"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const projects = [
  {
    title: "Rocket.Q",
    image: "/assets/rocket.q.png",
    description:
      "Plataforma de perguntas em salas privadas com senha de acesso, o administrador da respectiva sala pode verificar as questoes como lidas ou excluidas.",
  },
  {
    title: "Clima App",
    image: "/assets/clima-app.png",
    description:
      "Simples aplicativo integrado a uma API, capaz de consultar o clima de diversos lugares em tempo real.",
  },
  {
    title: "Emprestimo de Chromebooks Satelite",
    image: "/assets/emprestimo-de-chromebooks-satelite.png",
    description:
      "Sistema para gestao e acompanhamento do emprestimo de Chromebooks entre professores e aulas, permitindo um controle eficiente do historico de movimentacao dos dispositivos.",
  },
  {
    title: "Gerenciamento de Vendas",
    image: "/assets/gerenciamento-de-vendas.png",
    description:
      "Sistema para gestao e acompanhamento de vendas comerciais entre supervisores e equipe de vendas, permitindo um controle eficiente do historico, visibilidade da meta mensal, exportar planilha de comissionamento, script de status de pedido para consultar os supervisores.",
  },
  {
    title: "Having Fun",
    image: "/assets/having-fun.png",
    description:
      "O sistema de acesso a cursos por assinatura para o ensino de ingles para criancas, desde o nivel iniciante ate o nivel avancado.",
  },
  {
    title: "Social Tree - EM MANUTENCAO",
    image: "/assets/social-tree.png",
    description:
      "Projeto de link das redes sociais compilados do usuario principal",
  },
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

export function ProjectsSection() {
  return (
    <section className="gradient-bg py-16 px-4 md:px-16">
      <motion.div
        className="text-center mb-14"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.65 }}
      >
        <p className="text-primary-light">Meus projetos</p>
        <h1 className="text-2xl md:text-4xl font-bold">
          Veja alguns dos meus trabalhos em destaque
        </h1>
      </motion.div>

      <motion.div
        className="flex flex-wrap justify-center gap-6 max-w-6xl mx-auto"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {projects.map((project) => (
          <motion.div
            key={project.title}
            className="w-full sm:w-80 text-center"
            variants={itemVariants}
          >
            <div className="relative w-full h-44 overflow-hidden rounded-2xl">
              <Image
                src={project.image}
                alt={`Imagem de ilustracao do projeto ${project.title}`}
                fill
                className="object-cover"
              />
            </div>
            <h3 className="text-lg font-bold mt-3">{project.title}</h3>
            <p className="text-sm text-muted truncate">{project.description}</p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
