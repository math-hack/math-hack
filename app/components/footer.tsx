import {
  Facebook,
  Instagram,
  Youtube,
  Mail,
  Phone,
  MapPin,
} from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <img
                src="/math-hack.jpg"
                alt="Math Hack"
                className="size-20 object-contain "
              />
              <span className="font-bold text-xl text-foreground">
                Math Hack
              </span>
            </div>
            <p className="text-sm text-muted-foreground mb-6 leading-relaxed">
              Academia pre-universitaria con metodología innovadora. Preparamos
              cachimbos con DATA CARDS y APPS con IA.
            </p>
            <div className="flex gap-3">
              <a
                href="https://www.facebook.com/people/MATH-HACK/61570487675805/"
                className="w-10 h-10 rounded-lg bg-muted hover:bg-primary hover:text-primary-foreground transition-colors flex items-center justify-center"
                aria-label="Facebook"
                target="_blank"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="https://www.instagram.com/math.hack8"
                target="_blank"
                className="w-10 h-10 rounded-lg bg-muted hover:bg-primary hover:text-primary-foreground transition-colors flex items-center justify-center"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-lg bg-muted hover:bg-primary hover:text-primary-foreground transition-colors flex items-center justify-center"
                aria-label="YouTube"
              >
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Navegación</h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="#inicio"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  Inicio
                </a>
              </li>
              <li>
                <a
                  href="#programas"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  Nuestros Programas
                </a>
              </li>
              {/* <li>
                <a
                  href="#noticias"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  Noticias
                </a>
              </li> */}
              <li>
                <a
                  href="#contacto"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  Contacto
                </a>
              </li>
            </ul>
          </div>

          {/* Programs */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Programas</h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="#"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  Cachimbos por Modalidades
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  DATA CARDS
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  APPS con IA
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  Ciclos de Verano
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div id="contacto">
            <h3 className="font-semibold text-foreground mb-4">Contacto</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <span className="text-sm text-muted-foreground">
                  Av. Principal 123, Lima, Perú
                </span>
              </li>
              <li className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <span className="text-sm text-muted-foreground">
                  +51 929 341 433
                </span>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <span className="text-sm text-muted-foreground">
                  math.hack73@gmail.com
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-8 border-t border-border">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-muted-foreground">
              © 2025 Math Hack. Todos los derechos reservados.
            </p>
            <div className="flex flex-col md:flex-row items-center gap-4 md:gap-6">
              <p className="text-sm text-muted-foreground">
                Desarrollado por{" "}
                <a
                  className="text-primary font-semibold"
                  href="https://hans-dev.vercel.app"
                  target="_blank"
                >
                  Hans Melchor
                </a>
              </p>
              {/* <div className="flex gap-6">
                <a
                  href="#"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  Política de Privacidad
                </a>
                <a
                  href="#"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  Términos de Servicio
                </a>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
