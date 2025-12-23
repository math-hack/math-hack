"use client";

import { useState, useEffect } from "react";
import {
  CreditCard,
  Sparkles,
  Brain,
  Lightbulb,
  BookOpen,
  Atom,
  Zap,
  FlaskConical,
} from "lucide-react";

const dataCardExamples = [
  {
    id: 1,
    front: "Teorema de Pitágoras",
    back: "a² + b² = c²\nEn todo triángulo rectángulo, el cuadrado de la hipotenusa es igual a la suma de los cuadrados de los catetos",
    subject: "Matemática",
    icon: Brain,
    color: "from-primary/20 via-gold/10 to-accent/20",
    image: "/card-01.jpg",
  },
  {
    id: 2,
    front: "Sinónimo de 'EFÍMERO'",
    back: "PASAJERO, TEMPORAL, FUGAZ\n\nEjemplo: La felicidad puede ser efímera si no la cultivamos.",
    subject: "Razonamiento Verbal",
    icon: BookOpen,
    color: "from-accent/20 via-gold/10 to-primary/20",
    image: "/card-02.jpg",
  },
  {
    id: 3,
    front: "Primera Ley de Newton",
    back: "LEY DE INERCIA\nUn cuerpo permanece en reposo o en movimiento rectilíneo uniforme si no actúa ninguna fuerza sobre él",
    subject: "Física",
    icon: Zap,
    color: "from-primary/20 via-gold/10 to-accent/20",
    image: "/card-03.jpg",
  },
  {
    id: 4,
    front: "Nomenclatura: H₂SO₄",
    back: "ÁCIDO SULFÚRICO\n\nAplicación: Usado en baterías de automóviles y producción de fertilizantes",
    subject: "Química",
    icon: FlaskConical,
    color: "from-accent/20 via-gold/10 to-primary/20",
    image: "/card-04.jpg",
  },
  {
    id: 5,
    front: "Cultura Chavín",
    back: "HORIZONTE TEMPRANO (1200-400 a.C.)\n\nCentro ceremonial: Chavín de Huántar\n\nDios principal: Lanzón Monolítico",
    subject: "Historia del Perú",
    icon: BookOpen,
    color: "from-primary/20 via-gold/10 to-accent/20",
    image: "/card-05.jpg",
  },
  {
    id: 6,
    front: "Mitosis",
    back: "División celular que produce dos células hijas idénticas\n\nFases: Profase → Metafase → Anafase → Telofase",
    subject: "Biología",
    icon: Atom,
    color: "from-accent/20 via-gold/10 to-primary/20",
    image: "/card-06.jpg",
  },
];

export function DataCardsSection() {
  const [mounted, setMounted] = useState(false);
  const [flippedCards, setFlippedCards] = useState<Set<number>>(new Set());

  useEffect(() => {
    setMounted(true);
  }, []);

  const toggleFlip = (id: number) => {
    setFlippedCards((prev) => {
      const newSet = new Set(prev);
      if (newSet.has(id)) {
        newSet.delete(id);
      } else {
        newSet.add(id);
      }
      return newSet;
    });
  };

  return (
    <section className="py-16 md:py-24 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-primary rounded-full blur-3xl animate-pulse-glow" />
        <div
          className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-gold rounded-full blur-3xl animate-pulse-glow"
          style={{ animationDelay: "2s" }}
        />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16 animate-slide-in-up">
          <div className="inline-flex items-center gap-2 bg-linear-to-r from-primary/10 via-gold/10 to-accent/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6 hover-lift hover:from-primary/20 hover:via-gold/20 hover:to-accent/20 transition-all duration-300 border border-gold/20">
            <Sparkles className="w-4 h-4 text-gold animate-pulse-glow" />
            <span className="text-transparent bg-clip-text bg-linear-to-r from-primary via-gold to-accent font-semibold">
              Metodología Innovadora
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4 text-balance">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-gold to-accent">
              DATA CARDS
            </span>{" "}
            - Ejemplos Reales
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto text-pretty leading-relaxed">
            Tarjetas de estudio virtuales con información precisa. Haz clic en
            cada tarjeta para ver su contenido.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-12">
          {dataCardExamples.map((card, index) => {
            const isFlipped = flippedCards.has(card.id);
            return (
              <div
                key={card.id}
                className={`group relative h-80 cursor-pointer ${
                  mounted ? "animate-slide-in-up" : "opacity-0"
                }`}
                style={{
                  animationDelay: `${index * 100}ms`,
                  perspective: "1000px",
                }}
                // onClick={() => toggleFlip(card.id)}
              >
                <div
                  className="relative w-full h-full transition-transform duration-700 hover-lift-3d"
                  style={{
                    transformStyle: "preserve-3d",
                    transform: isFlipped ? "rotateY(180deg)" : "rotateY(0deg)",
                  }}
                >
                  {/* Front of card */}
                  <div
                    className="absolute inset-0 bg-card rounded-2xl overflow-hidden border-2 border-gold/20 hover:border-gold/50 transition-all duration-500 shadow-xl"
                    style={{
                      backfaceVisibility: "hidden",
                    }}
                  >
                    {/* Background gradient */}
                    <div
                      className={`absolute inset-0 bg-linear-to-br ${card.color} opacity-70`}
                    />

                    {/* Image */}
                    <div className="relative h-full overflow-hidden">
                      <img
                        src={card.image || "/placeholder.svg"}
                        alt={card.front}
                        className="w-full h-full object-cover opacity-30"
                      />
                      <div className="absolute inset-0 bg-linear-to-br from-card via-card/80 to-transparent" />
                    </div>

                    {/* Content */}
                    <div className="absolute inset-0 flex flex-col items-center justify-center p-6 z-10">
                      <div className="w-16 h-16 bg-linear-to-br from-primary via-gold to-accent rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-12 transition-all duration-500 shadow-lg">
                        <card.icon className="w-8 h-8 text-white animate-pulse-glow" />
                      </div>
                      <h3 className="text-2xl font-bold text-foreground text-center mb-4 text-balance">
                        {card.front}
                      </h3>
                      <div className="bg-linear-to-br from-primary/20 via-gold/20 to-accent/20 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-semibold text-gold border border-gold/30">
                        {card.subject}
                      </div>
                      {/* <div className="mt-6 text-xs text-muted-foreground flex items-center gap-2">
                        <Sparkles className="w-3 h-3 text-gold" />
                        Haz clic para voltear
                      </div> */}
                    </div>

                    {/* 3D border effect */}
                    <div className="absolute inset-0 border-2 border-transparent group-hover:border-gold/40 rounded-2xl transition-all duration-500 pointer-events-none" />
                  </div>

                  {/* Back of card */}
                  <div
                    className="absolute inset-0 bg-linear-to-br from-card via-gold/5 to-card rounded-2xl overflow-hidden border-2 border-gold/40 shadow-2xl"
                    style={{
                      backfaceVisibility: "hidden",
                      transform: "rotateY(180deg)",
                    }}
                  >
                    {/* Content */}
                    <div className="relative h-full flex flex-col items-center justify-center p-8 z-10">
                      <div className="text-center flex flex-col items-center gap-4">
                        <div className="relative w-[320px] h-[180px] rounded-lg overflow-hidden shadow-lg border border-gold/40 mx-auto">
                          <img
                            src={card.image}
                            alt={card.front}
                            className="w-full h-full object-cover"
                            style={{ aspectRatio: "16 / 9" }}
                          />
                          <a
                            href={card.image}
                            download
                            onClick={(e) => alert("Descarga completada!")}
                            className=" absolute top-2 right-2 bg-white/80 hover:bg-gold/80 text-gold hover:text-white rounded-full p-2 shadow transition-colors"
                            title="Descargar imagen"
                            tabIndex={0}
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="18"
                              height="18"
                              fill="none"
                              viewBox="0 0 20 20"
                            >
                              <path
                                fill="currentColor"
                                d="M10 2a1 1 0 0 1 1 1v8.59l2.295-2.295a1 1 0 1 1 1.41 1.415l-4 4a1 1 0 0 1-1.41 0l-4-4a1 1 0 1 1 1.41-1.415L9 11.586V3a1 1 0 0 1 1-1zm8 13a1 1 0 1 1 0 2H2a1 1 0 1 1 0-2h16z"
                              />
                            </svg>
                          </a>
                        </div>
                        {/* Si necesitas mostrar texto, descomentar la siguiente línea */}
                        {/* <p className="text-foreground text-lg leading-relaxed whitespace-pre-line">{card.back}</p> */}
                      </div>
                      <div className="mt-6 bg-linear-to-r from-primary/20 via-gold/20 to-accent/20 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-semibold text-gold border border-gold/30">
                        {card.subject}
                      </div>
                    </div>

                    {/* Decorative elements */}
                    <div className="absolute top-4 right-4 w-16 h-16 bg-gold/10 rounded-full blur-2xl" />
                    <div className="absolute bottom-4 left-4 w-16 h-16 bg-primary/10 rounded-full blur-2xl" />
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Feature highlights */}
        {/* <div
          className={`grid sm:grid-cols-3 gap-6 max-w-4xl mx-auto ${
            mounted ? "animate-slide-in-up" : "opacity-0"
          }`}
          style={{ animationDelay: "600ms" }}
        >
          {[
            {
              icon: Sparkles,
              title: "Acceso 24/7",
              desc: "Estudia cuando quieras",
            },
            {
              icon: CreditCard,
              title: "Optimizadas",
              desc: "Información precisa y directa",
            },
            {
              icon: Lightbulb,
              title: "Interactivas",
              desc: "Voltea las tarjetas para aprender",
            },
          ].map((feature, idx) => (
            <div
              key={idx}
              className="flex items-center gap-4 bg-linear-to-br from-card via-gold/5 to-card backdrop-blur-sm rounded-xl p-4 border border-gold/20 hover:border-gold/40 transition-all hover-lift shadow-lg"
            >
              <div className="w-12 h-12 bg-linear-to-br from-primary/20 via-gold/20 to-accent/20 rounded-lg flex items-center justify-center shrink-0">
                <feature.icon className="w-6 h-6 text-gold" />
              </div>
              <div>
                <h4 className="font-semibold text-foreground">
                  {feature.title}
                </h4>
                <p className="text-sm text-muted-foreground">{feature.desc}</p>
              </div>
            </div>
          ))}
        </div> */}
      </div>
    </section>
  );
}
