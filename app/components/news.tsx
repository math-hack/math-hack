import { Button } from "@/components/ui/button";
import { Calendar, ArrowRight, TrendingUp } from "lucide-react";

const newsItems = [
  {
    date: "20 Ene 2025",
    category: "Nuevo",
    title: "Lanzamiento de APPS con IA para Matemática, Física y Química",
    description:
      "Revoluciona tu forma de estudiar con nuestras nuevas aplicaciones potenciadas con inteligencia artificial. Aprende de manera interactiva y personalizada.",
    image: "/estudiante-usando-tablet-con-app-educativa-moderna.jpg",
    featured: true,
  },
  {
    date: "15 Ene 2025",
    category: "Inscripciones",
    title: "Inscripciones abiertas para Ciclos de Verano 2026",
    description:
      "Ya están abiertas las inscripciones para el Ciclo Vacacional, Virtual Paralelo CPU y Ordinario 2026 II. ¡Asegura tu cupo!",
    image: "/estudiantes-en-aula-moderna-inscribiendose.jpg",
  },
  {
    date: "10 Ene 2025",
    category: "Tecnología",
    title: "DATA CARDS: Tu nueva forma de estudiar",
    description:
      "Tarjetas virtuales con información precisa para ciencias y letras. Accede desde cualquier dispositivo, en cualquier momento.",
    image: "/tarjetas-digitales-educativas-en-smartphone.jpg",
  },
  {
    date: "5 Ene 2025",
    category: "Talleres",
    title: "Taller: Mi primera APP con IA - Modalidad Virtual y Presencial",
    description:
      "Aprende a crear tu primera aplicación con inteligencia artificial. Modalidades virtual y presencial disponibles.",
    image: "/estudiantes-programando-computadora-workshop.jpg",
  },
];

export function News() {
  return (
    <section id="noticias" className="py-16 md:py-24 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
          <div>
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6">
              <TrendingUp className="w-4 h-4" />
              Últimas Noticias
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4 text-balance">
              Mantente informado
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl text-pretty">
              Conoce las últimas novedades, eventos y logros de nuestra
              comunidad académica
            </p>
          </div>
          <Button
            variant="outline"
            className="self-start md:self-end bg-transparent"
          >
            Ver todas las noticias
            <ArrowRight className="ml-2 w-4 h-4" />
          </Button>
        </div>

        <div className="grid lg:grid-cols-2 gap-6 lg:gap-8">
          {/* Featured News */}
          <div className="lg:row-span-2">
            <article className="group bg-card rounded-2xl overflow-hidden border border-border hover:border-primary/50 transition-all hover:shadow-xl h-full flex flex-col">
              <div className="relative h-64 md:h-80 overflow-hidden">
                <img
                  src={newsItems[0].image || "/placeholder.svg"}
                  alt={newsItems[0].title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4">
                  <span className="inline-block bg-primary text-primary-foreground px-3 py-1 rounded-full text-xs font-semibold">
                    {newsItems[0].category}
                  </span>
                </div>
              </div>

              <div className="p-6 md:p-8 flex flex-col grow">
                <div className="flex items-center gap-2 text-sm text-muted-foreground mb-3">
                  <Calendar className="w-4 h-4" />
                  {newsItems[0].date}
                </div>

                <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors text-balance">
                  {newsItems[0].title}
                </h3>

                <p className="text-muted-foreground leading-relaxed mb-6 flex-grow text-pretty">
                  {newsItems[0].description}
                </p>

                <Button
                  variant="link"
                  className="text-primary p-0 h-auto font-semibold group/btn"
                >
                  Leer más
                  <ArrowRight className="ml-2 w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                </Button>
              </div>
            </article>
          </div>

          {/* Regular News */}
          {newsItems.slice(1).map((item, index) => (
            <article
              key={index}
              className="group bg-card rounded-2xl overflow-hidden border border-border hover:border-primary/50 transition-all hover:shadow-xl flex flex-col sm:flex-row lg:flex-col"
            >
              <div className="relative h-48 sm:w-1/3 lg:w-full sm:h-full lg:h-48 overflow-hidden shrink-0">
                <img
                  src={item.image || "/placeholder.svg"}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4">
                  <span className="inline-block bg-primary text-primary-foreground px-3 py-1 rounded-full text-xs font-semibold">
                    {item.category}
                  </span>
                </div>
              </div>

              <div className="p-6 flex flex-col grow">
                <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                  <Calendar className="w-4 h-4" />
                  {item.date}
                </div>

                <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors text-balance line-clamp-2">
                  {item.title}
                </h3>

                <p className="text-sm text-muted-foreground leading-relaxed mb-4 grow text-pretty line-clamp-2">
                  {item.description}
                </p>

                <Button
                  variant="link"
                  className="text-primary p-0 h-auto font-semibold text-sm group/btn self-start"
                >
                  Leer más
                  <ArrowRight className="ml-2 w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                </Button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
