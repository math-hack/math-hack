"use client";

import { useState, useEffect } from "react";
import { Sparkles, Award, Users, Star, Trophy } from "lucide-react";

export function CreatorSection() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <section className="py-16 md:py-24 relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-gold/5 to-background" />
        <ParticleField />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left: Creator info with 3D effects */}
            <div
              className={`${mounted ? "animate-slide-in-left" : "opacity-0"}`}
            >
              <div className="inline-flex items-center gap-2 bg-gradient-to-r from-primary/10 via-gold/10 to-card px-4 py-2 rounded-full text-sm font-medium mb-6 hover-lift hover:from-primary/20 hover:via-gold/20 transition-all duration-300 border border-gold/20">
                <Trophy className="w-4 h-4 text-gold animate-pulse-glow" />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-gold to-accent font-semibold">
                  El creador de la metodología
                </span>
              </div>

              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6 text-balance leading-tight">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-gold to-accent">
                  Abner Chinga
                </span>
                <br />
                <span className="text-2xl md:text-3xl text-muted-foreground">
                  Innovador Educativo
                </span>
              </h2>

              <p className="text-lg text-muted-foreground mb-8 leading-relaxed text-pretty">
                Ideó y desarrolló la revolucionaria metodología de{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-gold to-accent font-bold">
                  DATA CARDS
                </span>
                , transformando la forma en que los estudiantes se preparan para
                los exámenes de admisión universitaria.
              </p>

              <div className="grid grid-cols-2 gap-6 mb-8">
                {[
                  {
                    number: "10+",
                    label: "Años de experiencia",
                    icon: Award,
                    color: "from-primary/80 to-gold/80",
                  },
                  {
                    number: "5000+",
                    label: "Estudiantes beneficiados",
                    icon: Users,
                    color: "from-gold/80 to-accent/80",
                  },
                ].map((stat, idx) => (
                  <div
                    key={idx}
                    className={`bg-gradient-to-br ${stat.color} backdrop-blur-sm rounded-xl p-6 border border-gold/30 hover:border-gold/50 transition-all hover-lift shadow-lg`}
                    style={{ animationDelay: `${idx * 150}ms` }}
                  >
                    <div className="flex items-center gap-3 mb-2">
                      <div className="w-10 h-10 bg-white/90 rounded-lg flex items-center justify-center shadow-md">
                        <stat.icon className="w-5 h-5 text-gold" />
                      </div>
                      <span className="text-3xl font-bold text-white drop-shadow-lg">
                        {stat.number}
                      </span>
                    </div>
                    <p className="text-sm text-white/90 font-medium">
                      {stat.label}
                    </p>
                  </div>
                ))}
              </div>

              {/* Quote */}
              <div className="bg-gradient-to-br from-card via-gold/10 to-card rounded-2xl p-6 border-2 border-gold/30 hover-lift shadow-xl">
                <div className="flex items-start gap-4">
                  <div className="text-5xl text-gold/60 leading-none">"</div>
                  <p className="text-foreground italic leading-relaxed text-pretty">
                    La educación debe evolucionar con la tecnología. Las DATA
                    CARDS representan el futuro del aprendizaje efectivo y
                    accesible.
                  </p>
                </div>
                <div className="flex items-center gap-2 mt-4 justify-end">
                  <Star className="w-4 h-4 text-gold fill-gold" />
                  <p className="text-sm font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary via-gold to-accent">
                    — Abner Chinga
                  </p>
                </div>
              </div>
            </div>

            <div
              className={`relative ${
                mounted ? "animate-slide-in-right" : "opacity-0"
              }`}
            >
              <div className="relative aspect-square max-w-lg mx-auto">
                {/* Main circle with 3D effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary via-gold to-accent rounded-full animate-float opacity-95 shadow-2xl">
                  <div className="absolute inset-4 bg-card rounded-full flex items-center justify-center shadow-inner">
                    <div className="text-center p-8">
                      <div className="w-24 h-24 bg-gradient-to-br from-primary/20 via-gold/30 to-accent/20 rounded-full flex items-center justify-center mx-auto mb-6 animate-pulse-glow border-2 border-gold/30">
                        <Sparkles className="w-12 h-12 text-gold drop-shadow-lg" />
                      </div>
                      <h3 className="text-2xl font-bold text-foreground mb-2">
                        Metodología
                      </h3>
                      <p className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary via-gold to-accent mb-2">
                        DATA CARDS
                      </p>
                      <p className="text-sm text-muted-foreground">
                        Por Abner Chinga
                      </p>
                    </div>
                  </div>
                </div>

                {[...Array(6)].map((_, idx) => (
                  <div
                    key={idx}
                    className="absolute w-16 h-16 bg-gradient-to-br from-gold/90 via-white to-primary/80 backdrop-blur-sm rounded-xl flex items-center justify-center animate-float shadow-xl border-2 border-white/50"
                    style={{
                      top: `${30 + 40 * Math.sin((idx * Math.PI) / 3)}%`,
                      left: `${30 + 40 * Math.cos((idx * Math.PI) / 3)}%`,
                      animationDelay: `${idx * 0.5}s`,
                      animationDuration: "4s",
                    }}
                  >
                    <span className="text-2xl font-bold text-white drop-shadow-lg">
                      {idx + 1}
                    </span>
                  </div>
                ))}

                {[...Array(12)].map((_, idx) => (
                  <div
                    key={`particle-${idx}`}
                    className="absolute w-3 h-3 bg-gold/60 rounded-full animate-float blur-sm shadow-lg"
                    style={{
                      top: `${10 + (idx * 80) / 12}%`,
                      left: `${10 + ((idx * 3) % 7) * 12}%`,
                      animationDelay: `${idx * 0.3}s`,
                      animationDuration: "5s",
                    }}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ParticleField() {
  return (
    <div className="absolute inset-0 overflow-hidden opacity-20">
      <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient
            id="particleGradient"
            x1="0%"
            y1="0%"
            x2="100%"
            y2="100%"
          >
            <stop
              offset="0%"
              stopColor="oklch(0.45 0.22 18)"
              stopOpacity="0.6"
            />
            <stop
              offset="50%"
              stopColor="oklch(0.75 0.15 75)"
              stopOpacity="0.5"
            />
            <stop
              offset="100%"
              stopColor="oklch(0.82 0.14 18)"
              stopOpacity="0.3"
            />
          </linearGradient>
        </defs>

        {[...Array(40)].map((_, i) => (
          <circle
            key={i}
            cx={`${(i * 7) % 100}%`}
            cy={`${(i * 13) % 100}%`}
            r={`${2 + (i % 4)}`}
            fill="url(#particleGradient)"
            className="animate-pulse-glow"
            style={{ animationDelay: `${i * 0.2}s` }}
          />
        ))}
      </svg>
    </div>
  );
}
