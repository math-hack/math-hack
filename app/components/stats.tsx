"use client";

import { Award, Users, Trophy, GraduationCap } from "lucide-react";
import { useEffect, useRef, useState } from "react";

const stats = [
  {
    icon: Users,
    value: 1200,
    suffix: "+",
    label: "Estudiantes activos",
    description: "Preparándose este año",
  },
  {
    icon: Trophy,
    value: 95,
    suffix: "%",
    label: "Tasa de aprobación",
    description: "Ingresan a su universidad",
  },
  {
    icon: GraduationCap,
    value: 15,
    suffix: "+",
    label: "Años de experiencia",
    description: "Formando líderes",
  },
  {
    icon: Award,
    value: 50,
    suffix: "+",
    label: "Docentes expertos",
    description: "Profesionales destacados",
  },
];

export function Stats() {
  return (
    <section className="py-16 md:py-24 bg-muted/30 relative overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary rounded-full blur-3xl animate-float" />
        <div
          className="absolute bottom-20 right-10 w-96 h-96 bg-accent rounded-full blur-3xl animate-float"
          style={{ animationDelay: "1s" }}
        />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12 animate-slide-in-up">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 text-balance">
            Resultados que hablan por sí solos
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            Nuestra metodología comprobada y equipo dedicado garantizan tu éxito
            académico
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {stats.map((stat, index) => (
            <StatCard key={index} stat={stat} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

function StatCard({ stat, index }: { stat: (typeof stats)[0]; index: number }) {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    const duration = 2000;
    const steps = 60;
    const increment = stat.value / steps;
    let current = 0;

    const timer = setInterval(() => {
      current += increment;
      if (current >= stat.value) {
        setCount(stat.value);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, duration / steps);

    return () => clearInterval(timer);
  }, [isVisible, stat.value]);

  return (
    <div
      ref={ref}
      className={`bg-card rounded-2xl p-6 border border-border hover:border-primary/50 transition-all duration-500 hover-lift hover:shadow-xl group ${
        isVisible ? "animate-slide-in-up" : "opacity-0"
      }`}
      style={{ animationDelay: `${index * 150}ms` }}
    >
      <div className="flex flex-col items-center text-center space-y-4">
        <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center group-hover:bg-primary/20 transition-all duration-300 group-hover:scale-110 group-hover:rotate-6">
          <stat.icon className="w-7 h-7 text-primary animate-pulse-glow" />
        </div>
        <div>
          <div className="text-4xl font-bold text-primary mb-1 tabular-nums">
            {count}
            {stat.suffix}
          </div>
          <div className="text-base font-semibold text-foreground mb-1">
            {stat.label}
          </div>
          <div className="text-sm text-muted-foreground">
            {stat.description}
          </div>
        </div>
      </div>
    </div>
  );
}
