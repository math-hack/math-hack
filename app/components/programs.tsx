"use client";

import {
  BookOpen,
  Calculator,
  MessageSquare,
  Brain,
  Clock,
  Users,
} from "lucide-react";
import { useState } from "react";

const programs = [
  {
    icon: Calculator,
    title: "Matemáticas",
    description:
      "Álgebra, geometría, trigonometría y cálculo para dominar cualquier examen",
    features: [
      "Ejercicios progresivos",
      "Simulacros de examen",
      "Resolución de problemas",
    ],
    color: "from-primary/20 to-accent/20",
  },
  {
    icon: BookOpen,
    title: "Razonamiento Verbal",
    description:
      "Comprensión lectora, vocabulario y análisis de textos complejos",
    features: ["Lectura crítica", "Vocabulario técnico", "Redacción académica"],
    color: "from-accent/20 to-primary/20",
  },
  {
    icon: MessageSquare,
    title: "Ciencias y Letras",
    description:
      "Preparación integral en física, química, biología, historia y más",
    features: ["Ciencias naturales", "Ciencias sociales", "Cultura general"],
    color: "from-primary/20 to-accent/20",
  },
  {
    icon: Brain,
    title: "Apoyo Psicológico",
    description:
      "Manejo del estrés, técnicas de estudio y motivación constante",
    features: [
      "Control de ansiedad",
      "Técnicas de estudio",
      "Coaching personal",
    ],
    color: "from-accent/20 to-primary/20",
  },
];

export function Programs() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section id="programas" className="py-16 md:py-24 relative overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary rounded-full blur-3xl animate-pulse-glow" />
        <div
          className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-accent rounded-full blur-3xl animate-pulse-glow"
          style={{ animationDelay: "1.5s" }}
        />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12 md:mb-16 animate-slide-in-up">
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6 hover-lift hover:bg-primary/20 transition-all duration-300">
            <BookOpen className="w-4 h-4 animate-pulse-glow" />
            Nuestros Programas
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4 text-balance">
            Preparación <span className="text-primary">integral</span> para tu
            éxito
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
            Desarrollamos todas las habilidades que necesitas para destacar en
            los exámenes de admisión universitaria
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 lg:gap-8 mb-12">
          {programs.map((program, index) => (
            <div
              key={index}
              className="group bg-card rounded-2xl p-8 border border-border hover:border-primary/50 transition-all duration-500 hover-lift hover:shadow-xl animate-slide-in-up relative overflow-hidden"
              style={{ animationDelay: `${index * 100}ms` }}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <div
                className={`absolute inset-0 bg-gradient-to-br ${program.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
              />

              <div className="relative z-10">
                <div
                  className={`w-14 h-14 bg-gradient-to-br ${program.color} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500`}
                >
                  <program.icon
                    className={`w-7 h-7 text-primary ${
                      hoveredIndex === index ? "animate-pulse-glow" : ""
                    }`}
                  />
                </div>

                <h3 className="text-2xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors duration-300">
                  {program.title}
                </h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {program.description}
                </p>

                <ul className="space-y-3">
                  {program.features.map((feature, idx) => (
                    <li
                      key={idx}
                      className="flex items-center gap-2 text-sm text-foreground group-hover:translate-x-1 transition-transform duration-300"
                      style={{ transitionDelay: `${idx * 50}ms` }}
                    >
                      <div className="w-1.5 h-1.5 rounded-full bg-primary group-hover:scale-150 transition-transform duration-300" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Info con animaciones */}
        <div
          className="grid sm:grid-cols-3 gap-6 bg-primary/5 rounded-2xl p-8 animate-slide-in-up border border-primary/10"
          style={{ animationDelay: "400ms" }}
        >
          {[
            {
              icon: Clock,
              title: "Horarios Flexibles",
              desc: "Clases matutinas, vespertinas y sabatinas",
              delay: 0,
            },
            {
              icon: Users,
              title: "Grupos Reducidos",
              desc: "Máximo 15 estudiantes por aula",
              delay: 100,
            },
            {
              icon: BookOpen,
              title: "Material Incluido",
              desc: "Libros, simulacros y plataforma online",
              delay: 200,
            },
          ].map((info, idx) => (
            <div
              key={idx}
              className="flex items-start gap-4 hover-lift"
              style={{ animationDelay: `${info.delay}ms` }}
            >
              <div className="w-12 h-12 bg-primary/20 rounded-xl flex items-center justify-center flex-shrink-0 hover:bg-primary/30 hover:scale-110 hover:rotate-6 transition-all duration-300">
                <info.icon className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h4 className="font-semibold text-foreground mb-1">
                  {info.title}
                </h4>
                <p className="text-sm text-muted-foreground">{info.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
