"use client";

import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  Target,
  Sparkles,
  Smartphone,
  CreditCard,
  GraduationCap,
} from "lucide-react";
import { useEffect, useState } from "react";

export function Hero() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <section
      id="inicio"
      className="relative pt-24 md:pt-32 pb-16 md:pb-24 overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-accent/5" />

      {/* Neuronal Network Background */}
      <NeuralNetwork />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div
            className={`space-y-8 ${
              mounted ? "animate-slide-in-left" : "opacity-0"
            }`}
          >
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium hover-lift hover:bg-primary/20 transition-all duration-300">
              <Target className="w-4 h-4 animate-pulse-glow" />
              <span>Academia Pre-Universitaria de Excelencia</span>
              <Sparkles className="w-4 h-4 animate-pulse-glow" />
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight text-balance">
              Hackea tu camino a la{" "}
              <span className="text-primary bg-linear-to-r from-primary to-accent bg-clip-text text-transparent animate-shimmer">
                universidad
              </span>
            </h1>

            {/* Updated Content */}
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed text-pretty max-w-2xl">
              Preparamos cachimbos con metodología innovadora: DATA CARDS
              digitales, APPS con IA para reforzar Matemática, Física y Química.
              Ingresa a las mejores universidades del Perú.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                className="bg-primary text-primary-foreground hover:bg-primary/90 text-base hover-lift group overflow-hidden relative"
              >
                <span className="relative z-10 flex items-center">
                  Comienza tu preparación
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                </span>
                <div className="absolute inset-0 bg-linear-to-r from-accent to-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="text-base bg-transparent hover-lift hover:bg-primary/5 transition-all duration-300"
                onClick={() => {
                  console.log("click");
                  window.location.href = "https://wa.link/6zgji0";
                }}
              >
                Ver ciclos disponibles
              </Button>
            </div>

            {/* Updated Features */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-8">
              {[
                {
                  icon: CreditCard,
                  title: "DATA CARDS",
                  desc: "Tarjetas virtuales precisas",
                  delay: "delay-100",
                },
                {
                  icon: Smartphone,
                  title: "APPS con IA",
                  desc: "Aprende y refuerza temas",
                  delay: "delay-200",
                },
                {
                  icon: GraduationCap,
                  title: "Cachimbos 2025-2026",
                  desc: "Por modalidades",
                  delay: "delay-300",
                },
              ].map((feature, idx) => (
                <div
                  key={idx}
                  className={`flex items-start gap-3 ${
                    mounted
                      ? `animate-slide-in-up animation-${feature.delay}`
                      : "opacity-0"
                  }`}
                  style={{ animationDelay: `${idx * 150}ms` }}
                >
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0 hover-lift hover:bg-primary/20 transition-all duration-300">
                    <feature.icon className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">
                      {feature.title}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {feature.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Existing code */}
          <div
            className={`relative lg:h-[600px] h-[400px] ${
              mounted ? "animate-slide-in-right" : "opacity-0"
            }`}
          >
            <div className="absolute inset-0 bg-linear-to-br from-primary via-accent to-primary/70 rounded-3xl overflow-hidden hover:scale-[1.02] transition-transform duration-500">
              <img
                src="/banner.jpg"
                alt="Estudiantes preparándose para la universidad"
                className="w-full h-full object-cover opacity-90 mix-blend-overlay"
              />

              <div className="absolute top-8 right-8 bg-card/90 backdrop-blur-md p-4 rounded-xl shadow-2xl hover-lift animate-float border border-primary/20">
                <div className="flex items-center gap-3">
                  {/* <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center animate-pulse-glow">
                    <span className="text-2xl font-bold text-primary">95%</span>
                  </div> */}
                  <div>
                    <p className="text-sm font-semibold text-card-foreground">
                      Materiales
                    </p>
                    <p className="text-xs text-muted-foreground">
                      Material de clases + Apps
                    </p>
                  </div>
                </div>
              </div>

              <div
                className="absolute bottom-8 left-8 bg-card/90 backdrop-blur-md p-4 rounded-xl shadow-2xl hover-lift animate-float border border-accent/20"
                style={{ animationDelay: "1s" }}
              >
                <div className="flex items-center gap-3">
                  {/* <div className="w-12 h-12 bg-accent/20 rounded-lg flex items-center justify-center animate-pulse-glow">
                    <span className="text-2xl font-bold text-primary">
                      500+
                    </span>
                  </div> */}
                  <div>
                    <p className="text-sm font-semibold text-card-foreground">
                      Docentes
                    </p>
                    <p className="text-xs text-muted-foreground">
                      Docentes especializados
                    </p>
                  </div>
                </div>
              </div>

              {/* Partículas flotantes adicionales */}
              <div
                className="absolute top-1/4 left-1/4 w-3 h-3 bg-primary/60 rounded-full animate-float blur-sm"
                style={{ animationDelay: "0.5s" }}
              />
              <div
                className="absolute top-1/2 right-1/4 w-2 h-2 bg-accent/60 rounded-full animate-float blur-sm"
                style={{ animationDelay: "1.5s" }}
              />
              <div
                className="absolute bottom-1/3 left-1/3 w-4 h-4 bg-primary/40 rounded-full animate-float blur-sm"
                style={{ animationDelay: "2s" }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function NeuralNetwork() {
  const neurons = [
    { x: 10, y: 20, delay: 0 },
    { x: 30, y: 40, delay: 0.5 },
    { x: 50, y: 15, delay: 1 },
    { x: 70, y: 35, delay: 1.5 },
    { x: 90, y: 25, delay: 2 },
    { x: 15, y: 60, delay: 0.8 },
    { x: 45, y: 70, delay: 1.3 },
    { x: 75, y: 65, delay: 1.8 },
    { x: 25, y: 85, delay: 0.3 },
    { x: 65, y: 90, delay: 1.1 },
  ];

  return (
    <div className="absolute inset-0 overflow-hidden opacity-20">
      <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient
            id="neuronGradient"
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
              offset="100%"
              stopColor="oklch(0.82 0.14 18)"
              stopOpacity="0.3"
            />
          </linearGradient>
        </defs>

        {/* Conexiones entre neuronas */}
        {neurons.map((neuron, i) =>
          neurons.slice(i + 1).map((target, j) => {
            const distance = Math.sqrt(
              Math.pow(target.x - neuron.x, 2) +
                Math.pow(target.y - neuron.y, 2)
            );
            if (distance < 40) {
              return (
                <line
                  key={`${i}-${j}`}
                  x1={`${neuron.x}%`}
                  y1={`${neuron.y}%`}
                  x2={`${target.x}%`}
                  y2={`${target.y}%`}
                  stroke="url(#neuronGradient)"
                  strokeWidth="1"
                  className="animate-neuron-pulse"
                  style={{ animationDelay: `${neuron.delay}s` }}
                />
              );
            }
            return null;
          })
        )}

        {/* Neuronas */}
        {neurons.map((neuron, i) => (
          <circle
            key={i}
            cx={`${neuron.x}%`}
            cy={`${neuron.y}%`}
            r="4"
            fill="url(#neuronGradient)"
            className="animate-pulse-glow"
            style={{ animationDelay: `${neuron.delay}s` }}
          />
        ))}
      </svg>
    </div>
  );
}
