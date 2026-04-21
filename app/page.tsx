"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowUpRight, Send, Mail, ChevronDown, MousePointer2 } from "lucide-react";
import Image from "next/image";
import { useState, useRef } from "react";

const projects = [
  {
    title: "Marchiori Elegance",
    description: "Loja virtual elegante de gravatas e acessorios masculinos, com foco em conversao via WhatsApp. Design sofisticado que transmite luxo e exclusividade para momentos especiais.",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/marchiori-elegance-FUnxKp4qnbbBgbcVUEiMvbF0qMFovR.png",
    tags: ["Next.js", "E-commerce", "WhatsApp API"],
    link: "https://marchiorielegance.com/",
  },
  {
    title: "Price Hawk",
    description: "Sistema inteligente de monitoramento de precos no eBay. Receba alertas por email quando produtos atingirem o valor desejado. Ideal para encontrar as melhores ofertas.",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/price-hawk-YI9MDYIZ3hJrzpCX93izQXvOjRIiIK.png",
    tags: ["Next.js", "API Integration", "Email Alerts"],
    link: "https://v0-alerta-de-preco-e-bay.vercel.app/",
  },
  {
    title: "Controle de Emprestimos",
    description: "Sistema completo de gestao para emprestimo de chromebooks em ambiente educacional. Controle de inventario, historico e relatorios.",
    image: "/assets/emprestimo-de-chromebooks-satelite.png",
    tags: ["Full Stack", "CRUD", "Dashboard"],
    link: "#",
  },
];

const skills = [
  { name: "JavaScript", level: 90 },
  { name: "TypeScript", level: 85 },
  { name: "React", level: 88 },
  { name: "Next.js", level: 82 },
  { name: "Node.js", level: 80 },
  { name: "SQL", level: 75 },
];

export default function Home() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);
  const heroRef = useRef(null);
  
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  });
  
  const heroOpacity = useTransform(scrollYProgress, [0, 1], [1, 0]);
  const heroY = useTransform(scrollYProgress, [0, 1], [0, 100]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const mailtoLink = `mailto:fabricio.pereira.leal@gmail.com?subject=Contato de ${formData.name}&body=${formData.message}%0A%0AEmail para contato: ${formData.email}`;
    window.location.href = mailtoLink;
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <div className="min-h-screen bg-background relative">
      {/* Floating Background Elements */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-accent/10 rounded-full blur-3xl animate-pulse-slow" />
        <div className="absolute top-1/2 right-10 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-20 left-1/3 w-64 h-64 bg-accent/5 rounded-full blur-3xl animate-float-delayed" />
      </div>

      {/* Header */}
      <motion.header 
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="fixed top-0 w-full z-50"
      >
        <nav className="max-w-6xl mx-auto px-6 py-4">
          <div className="glass rounded-2xl px-6 py-3 flex items-center justify-between">
            <motion.span 
              whileHover={{ scale: 1.05 }}
              className="text-xl font-bold gradient-text cursor-pointer"
            >
              leal.dev
            </motion.span>
            <div className="flex items-center gap-8">
              {["Projetos", "Sobre", "Contato"].map((item) => (
                <motion.a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  whileHover={{ y: -2 }}
                  className="text-sm font-medium text-muted hover:text-primary transition-colors relative group"
                >
                  {item}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-accent group-hover:w-full transition-all duration-300" />
                </motion.a>
              ))}
            </div>
          </div>
        </nav>
      </motion.header>

      {/* Hero */}
      <section ref={heroRef} className="min-h-screen flex items-center px-6 pt-24 relative">
        <motion.div 
          style={{ opacity: heroOpacity, y: heroY }}
          className="max-w-6xl mx-auto w-full"
        >
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Text Content */}
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              <motion.div variants={itemVariants} className="inline-flex items-center gap-2 px-4 py-2 glass rounded-full mb-6">
                <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                <span className="text-sm text-muted">Disponivel para projetos</span>
              </motion.div>
              
              <motion.h1 variants={itemVariants} className="text-5xl lg:text-7xl font-bold leading-tight mb-6">
                Ola, sou{" "}
                <span className="gradient-text">Fabricio</span>
                <br />
                <span className="text-primary">Leal</span>
              </motion.h1>
              
              <motion.p variants={itemVariants} className="text-lg text-muted max-w-md mb-8 leading-relaxed">
                Desenvolvedor Full Stack focado em criar experiencias digitais 
                elegantes e funcionais que impressionam.
              </motion.p>
              
              <motion.div variants={itemVariants} className="flex flex-wrap gap-4">
                <motion.a
                  href="#contato"
                  whileHover={{ scale: 1.02, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-white rounded-xl font-medium shadow-lg shadow-primary/20 hover:shadow-xl hover:shadow-primary/30 transition-all"
                >
                  Fale comigo
                  <ArrowUpRight className="w-4 h-4" />
                </motion.a>
                <motion.a
                  href="#projetos"
                  whileHover={{ scale: 1.02, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  className="inline-flex items-center gap-2 px-8 py-4 glass text-primary rounded-xl font-medium hover:shadow-lg transition-all"
                >
                  Ver trabalhos
                </motion.a>
              </motion.div>
            </motion.div>

            {/* Photo */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="relative hidden lg:block"
            >
              <div className="relative w-[400px] h-[500px] mx-auto">
                {/* Decorative elements */}
                <div className="absolute -top-4 -right-4 w-full h-full border-2 border-accent/30 rounded-3xl" />
                <div className="absolute -bottom-4 -left-4 w-full h-full bg-accent/10 rounded-3xl" />
                
                {/* Main photo */}
                <div className="relative w-full h-full rounded-3xl overflow-hidden shadow-2xl">
                  <Image
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_3055%20%282%29-Cz1fKjmiN2fLwM9cViSd1Vb6Kc6pqA.jpg"
                    alt="Fabricio Leal"
                    fill
                    className="object-cover object-top"
                    priority
                  />
                </div>
                
                {/* Floating badge */}
                <motion.div 
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 3, repeat: Infinity }}
                  className="absolute -right-6 top-1/4 glass px-4 py-3 rounded-xl shadow-lg"
                >
                  <p className="text-sm font-medium text-primary">Full Stack</p>
                  <p className="text-xs text-muted">Developer</p>
                </motion.div>
                
                {/* Experience badge */}
                <motion.div 
                  animate={{ y: [0, 10, 0] }}
                  transition={{ duration: 4, repeat: Infinity }}
                  className="absolute -left-6 bottom-1/4 glass px-4 py-3 rounded-xl shadow-lg"
                >
                  <p className="text-2xl font-bold text-accent">3+</p>
                  <p className="text-xs text-muted">Anos de Exp.</p>
                </motion.div>
              </div>
            </motion.div>
          </div>
          
          {/* Scroll indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5 }}
            className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
          >
            <MousePointer2 className="w-5 h-5 text-muted animate-bounce" />
            <span className="text-xs text-muted">Role para explorar</span>
          </motion.div>
        </motion.div>
      </section>

      {/* Projects */}
      <section id="projetos" className="py-32 px-6 relative">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <span className="text-accent font-medium mb-2 block">Portfolio</span>
            <h2 className="text-4xl lg:text-5xl font-bold text-primary">Projetos em destaque</h2>
          </motion.div>

          <div className="space-y-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                onMouseEnter={() => setHoveredProject(index)}
                onMouseLeave={() => setHoveredProject(null)}
                className="group"
              >
                <div className={`glass rounded-3xl p-6 transition-all duration-500 ${hoveredProject === index ? 'shadow-2xl scale-[1.02]' : ''}`}>
                  <div className="grid md:grid-cols-2 gap-8 items-center">
                    <div className={`order-2 ${index % 2 === 0 ? 'md:order-1' : 'md:order-2'}`}>
                      <div className="flex gap-2 mb-4">
                        {project.tags.map((tag) => (
                          <span key={tag} className="text-xs px-3 py-1 bg-primary/10 text-primary rounded-full font-medium">
                            {tag}
                          </span>
                        ))}
                      </div>
                      <h3 className="text-2xl font-bold mb-3 text-primary">{project.title}</h3>
                      <p className="text-muted mb-6">{project.description}</p>
                      <motion.a
                        href={project.link}
                        target={project.link !== "#" ? "_blank" : undefined}
                        rel={project.link !== "#" ? "noopener noreferrer" : undefined}
                        whileHover={{ x: 5 }}
                        className="inline-flex items-center gap-2 text-accent font-medium group/btn"
                      >
                        Ver projeto
                        <ArrowUpRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1" />
                      </motion.a>
                    </div>
                    <div className={`order-1 ${index % 2 === 0 ? 'md:order-2' : 'md:order-1'}`}>
                      <div className="relative aspect-video rounded-2xl overflow-hidden shadow-lg">
                        <Image
                          src={project.image}
                          alt={project.title}
                          fill
                          className="object-cover transition-transform duration-700 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* About */}
      <section id="sobre" className="py-32 px-6 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent" />
        <div className="max-w-6xl mx-auto relative">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="text-accent font-medium mb-2 block">Sobre</span>
            <h2 className="text-4xl lg:text-5xl font-bold text-primary">Um pouco sobre mim</h2>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <p className="text-lg text-muted leading-relaxed mb-6">
                Sou um desenvolvedor que acredita que o codigo bem escrito e uma forma de arte. 
                Combino habilidades tecnicas com um olhar atento ao design para criar 
                solucoes que nao apenas funcionam, mas encantam.
              </p>
              <p className="text-lg text-muted leading-relaxed mb-8">
                Minha missao e transformar ideias em realidade digital, 
                sempre focando na experiencia do usuario e na qualidade do codigo.
              </p>
              
              {/* Education */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="glass rounded-2xl p-6 mb-8"
              >
                <div className="flex items-start gap-4">
                  <div className="w-16 h-16 bg-white rounded-xl flex items-center justify-center shadow-sm flex-shrink-0">
                    <Image
                      src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-HiW9Ae58YLKMJKR6PPrjtcxT1esyIO.png"
                      alt="UNIVESP Logo"
                      width={48}
                      height={48}
                      className="object-contain"
                    />
                  </div>
                  <div>
                    <div className="flex items-center gap-3 mb-1">
                      <h4 className="font-bold text-primary">Bacharelado em Tecnologia da Informacao</h4>
                      <span className="px-2 py-0.5 bg-accent/10 text-accent text-xs font-medium rounded-full">2025</span>
                    </div>
                    <p className="text-accent font-medium text-sm mb-2">Universidade Virtual do Estado de Sao Paulo (UNIVESP)</p>
                    <p className="text-sm text-muted leading-relaxed">
                      Formacao completa em TI com enfase em desenvolvimento de software, 
                      banco de dados, redes de computadores, seguranca da informacao e 
                      gestao de projetos de tecnologia.
                    </p>
                  </div>
                </div>
              </motion.div>
              
              {/* Skills with animated bars */}
              <div className="space-y-4">
                {skills.map((skill, index) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <div className="flex justify-between mb-1">
                      <span className="text-sm font-medium text-primary">{skill.name}</span>
                      <span className="text-sm text-muted">{skill.level}%</span>
                    </div>
                    <div className="h-2 bg-primary/10 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: index * 0.1 }}
                        className="h-full bg-gradient-to-r from-primary to-accent rounded-full"
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              {/* Stats Grid */}
              <div className="grid grid-cols-2 gap-6">
                {[
                  { number: "20+", label: "Projetos Entregues" },
                  { number: "3+", label: "Anos de Experiencia" },
                  { number: "100%", label: "Dedicacao" },
                  { number: "24/7", label: "Suporte" },
                ].map((stat, index) => (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ scale: 1.05, y: -5 }}
                    className="glass rounded-2xl p-6 text-center cursor-default"
                  >
                    <p className="text-3xl font-bold gradient-text mb-1">{stat.number}</p>
                    <p className="text-sm text-muted">{stat.label}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contato" className="py-32 px-6 relative">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="text-accent font-medium mb-2 block">Contato</span>
            <h2 className="text-4xl lg:text-5xl font-bold text-primary mb-4">Vamos trabalhar juntos?</h2>
            <p className="text-lg text-muted max-w-md mx-auto">
              Estou sempre aberto a novos projetos e oportunidades interessantes.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass rounded-3xl p-8 lg:p-12"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <motion.div whileFocus={{ scale: 1.02 }}>
                  <label className="block text-sm font-medium text-primary mb-2">Nome</label>
                  <input
                    type="text"
                    placeholder="Seu nome"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                    className="w-full px-5 py-4 bg-white/50 border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent transition-all"
                  />
                </motion.div>
                <motion.div whileFocus={{ scale: 1.02 }}>
                  <label className="block text-sm font-medium text-primary mb-2">Email</label>
                  <input
                    type="email"
                    placeholder="seu@email.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    required
                    className="w-full px-5 py-4 bg-white/50 border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent transition-all"
                  />
                </motion.div>
              </div>
              <div>
                <label className="block text-sm font-medium text-primary mb-2">Mensagem</label>
                <textarea
                  placeholder="Conte-me sobre seu projeto..."
                  rows={5}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  required
                  className="w-full px-5 py-4 bg-white/50 border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent transition-all resize-none"
                />
              </div>
              <motion.button
                type="submit"
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
                className="w-full inline-flex items-center justify-center gap-3 px-8 py-4 bg-primary text-white rounded-xl font-medium shadow-lg shadow-primary/20 hover:shadow-xl hover:shadow-primary/30 transition-all"
              >
                Enviar mensagem
                <Send className="w-4 h-4" />
              </motion.button>
            </form>

            {/* Social Links */}
            <div className="mt-10 pt-10 border-t border-border">
              <p className="text-center text-muted text-sm mb-6">Ou entre em contato diretamente</p>
              <div className="flex justify-center gap-4">
                {[
                  { href: "https://wa.me/5511948765742", label: "WhatsApp", icon: (
                    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                    </svg>
                  )},
                  { href: "https://github.com/LealDevhub", label: "GitHub", icon: (
                    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                    </svg>
                  )},
                  { href: "https://linkedin.com/in/fabricio-leal", label: "LinkedIn", icon: (
                    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                    </svg>
                  )},
                  { href: "mailto:fabricio.pereira.leal@gmail.com", label: "Email", icon: <Mail className="w-5 h-5" /> },
                ].map((social) => (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    target={social.href.startsWith("http") ? "_blank" : undefined}
                    rel={social.href.startsWith("http") ? "noopener noreferrer" : undefined}
                    whileHover={{ scale: 1.1, y: -3 }}
                    whileTap={{ scale: 0.95 }}
                    className="p-4 glass rounded-xl text-primary hover:text-accent transition-colors"
                    aria-label={social.label}
                  >
                    {social.icon}
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 border-t border-border">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted">
            {new Date().getFullYear()} Fabricio Leal. Todos os direitos reservados.
          </p>
          <p className="text-sm text-muted">
            Feito com <span className="text-accent">Next.js</span> e muito cafe
          </p>
        </div>
      </footer>
    </div>
  );
}
