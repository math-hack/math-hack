"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle } from "lucide-react";

export function CTA() {
  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-3xl overflow-hidden">
          {/* Background */}
          <div className="absolute inset-0 bg-linear-to-br from-primary via-accent to-primary" />

          {/* Content */}
          <div className="relative px-6 py-12 md:px-12 md:py-16 lg:px-16 lg:py-20">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 text-balance">
                ¿Listo para alcanzar tu objetivo universitario?
              </h2>

              <p className="text-lg md:text-xl text-white/90 mb-8 text-pretty">
                Únete a cientos de estudiantes que ya están preparándose con
                nosotros. Tu éxito académico comienza con el primer paso.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-10">
                <Button
                  size="lg"
                  className="bg-white text-primary hover:bg-white/90 text-base font-semibold"
                >
                  Inscríbete ahora
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="text-base font-semibold bg-white/10 text-white border-white/30 hover:bg-white/20"
                  onClick={() => {
                    window.location.href = "https://wa.link/6zgji0";
                  }}
                >
                  Solicita información
                </Button>
              </div>

              {/* Benefits */}
              <div className="grid sm:grid-cols-3 gap-6 max-w-2xl mx-auto">
                <div className="flex items-center justify-center gap-2 text-white">
                  <CheckCircle className="w-5 h-5 shrink-0" />
                  <span className="text-sm font-medium">
                    Primera clase gratis
                  </span>
                </div>
                <div className="flex items-center justify-center gap-2 text-white">
                  <CheckCircle className="w-5 h-5 shrink-0" />
                  <span className="text-sm font-medium">Material incluido</span>
                </div>
                <div className="flex items-center justify-center gap-2 text-white">
                  <CheckCircle className="w-5 h-5 shrink-0" />
                  <span className="text-sm font-medium">Sin matrícula</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
