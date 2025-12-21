import { Button } from "@/components/ui/button";
import { Calendar, ArrowRight, TrendingUp } from "lucide-react";

const newsItems = [
  {
    date: "15 Dic 2024",
    category: "Resultados",
    title:
      "¡Record histórico! 98% de nuestros estudiantes ingresaron a su primera opción",
    description:
      "Este ciclo 2024 logramos nuestro mejor resultado con 345 estudiantes ingresando a las universidades más prestigiosas del país.",
    image: "/estudiantes-celebrando-exito-graduacion.jpg",
    featured: true,
  },
  {
    date: "10 Dic 2024",
    category: "Nuevo Programa",
    title: "Lanzamos programa intensivo de verano 2025",
    description:
      "Preparación acelerada de 8 semanas para el examen de admisión. Inscripciones abiertas hasta el 20 de diciembre.",
    image: "/salon-clases-moderno-estudiantes.jpg",
  },
  {
    date: "5 Dic 2024",
    category: "Eventos",
    title: 'Charla gratuita: "Cómo vencer el estrés del examen de admisión"',
    description:
      "Únete a nuestra charla con psicólogos expertos este sábado 18 de diciembre a las 10:00 AM.",
    image: "/conferencia-educativa-auditorio.jpg",
  },
  {
    date: "1 Dic 2024",
    category: "Testimonios",
    title: "Historia de éxito: De 250 puntos a 850 en el examen",
    description:
      "Conoce la inspiradora historia de María, quien logró un puntaje excepcional después de 6 meses de preparación.",
    image: "/estudiante-feliz-con-certificado.jpg",
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

              <div className="p-6 md:p-8 flex flex-col flex-grow">
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
              <div className="relative h-48 sm:w-1/3 lg:w-full sm:h-full lg:h-48 overflow-hidden flex-shrink-0">
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

              <div className="p-6 flex flex-col flex-grow">
                <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                  <Calendar className="w-4 h-4" />
                  {item.date}
                </div>

                <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors text-balance line-clamp-2">
                  {item.title}
                </h3>

                <p className="text-sm text-muted-foreground leading-relaxed mb-4 flex-grow text-pretty line-clamp-2">
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
