"use client";

import {
  Smartphone,
  CreditCard,
  GraduationCap,
  Sparkles,
  CalendarDays,
} from "lucide-react";
import { useState } from "react";

const programs = [
  {
    icon: GraduationCap,
    title: "Cachimbos por Modalidades",
    description:
      "Preparación especializada para ingreso a las mejores universidades del Perú",
    features: [
      "2025 II - Próximo ciclo",
      "2025 III - En planificación",
      "2026 I - Inscripciones pronto",
    ],
    color: "from-primary/20 to-accent/20",
  },
  {
    icon: CreditCard,
    title: "DATA CARDS",
    description:
      "Tarjetas virtuales con información precisa para el examen de admisión",
    features: [
      "Contenido de Ciencias",
      "Contenido de Letras",
      "Acceso 24/7 online",
    ],
    color: "from-accent/20 to-primary/20",
  },
  {
    icon: Smartphone,
    title: "APPS con IA",
    description:
      "Aplicaciones hechas con inteligencia artificial para aprender y reforzar",
    features: [
      "Matemática interactiva",
      "Física aplicada",
      "Química con simuladores",
    ],
    color: "from-primary/20 to-accent/20",
  },
  {
    icon: Sparkles,
    title: "Mi primera APP con IA",
    description:
      "Taller especial para crear tu primera aplicación con inteligencia artificial",
    features: [
      "Modalidad Virtual",
      "Modalidad Presencial",
      "Certificado incluido",
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
            <Sparkles className="w-4 h-4 animate-pulse-glow" />
            Nuestros Programas
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4 text-balance">
            Metodología <span className="text-primary">innovadora</span> para tu
            éxito
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
            Combinamos tecnología, inteligencia artificial y enseñanza
            personalizada para tu ingreso universitario
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

        <div className="bg-gradient-to-br from-primary/10 via-accent/5 to-primary/10 rounded-2xl p-8 md:p-10 animate-slide-in-up border border-primary/20">
          <div className="text-center mb-8">
            <div className="inline-flex items-center gap-2 bg-primary/20 text-primary px-4 py-2 rounded-full text-sm font-semibold mb-4">
              <CalendarDays className="w-4 h-4" />
              Verano 2026
            </div>
            <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-2">
              Nuestros Ciclos para este Verano
            </h3>
            <p className="text-muted-foreground">
              Inscripciones abiertas para todos los ciclos
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "Ciclo Vacacional",
                subtitle: "Secundaria 2026",
                desc: "Preparación intensiva de verano",
              },
              {
                title: "Ciclo Virtual Paralelo",
                subtitle: "CPU 2026 II",
                desc: "Flexibilidad total online",
              },
              {
                title: "Ordinario 2026 II",
                subtitle: "5to de Secundaria",
                desc: "Preparación regular presencial",
              },
            ].map((cycle, idx) => (
              <div
                key={idx}
                className="bg-card/80 backdrop-blur-sm rounded-xl p-6 border border-border hover:border-primary/50 transition-all hover-lift hover:shadow-lg"
              >
                <div className="w-10 h-10 bg-primary/20 rounded-lg flex items-center justify-center mb-4">
                  <GraduationCap className="w-5 h-5 text-primary" />
                </div>
                <h4 className="font-bold text-foreground mb-1">
                  {cycle.title}
                </h4>
                <p className="text-sm text-primary font-semibold mb-2">
                  {cycle.subtitle}
                </p>
                <p className="text-sm text-muted-foreground">{cycle.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
