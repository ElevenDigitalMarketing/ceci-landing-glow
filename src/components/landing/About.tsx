import { Award, BookOpen, Heart, Users } from "lucide-react";
import ceciAbout from "@/assets/ceci-about.jpg";

const credentials = [
  { icon: Award, text: "Especialista en Nutrición Funcional" },
  { icon: BookOpen, text: "+10 años de experiencia en cocina saludable" },
  { icon: Users, text: "+500 alumnas transformadas" },
  { icon: Heart, text: "Apasionada por el bienestar integral" },
];

const About = () => {
  return (
    <section id="sobre-mi" className="py-16 sm:py-24 bg-muted/50">
      <div className="section-container">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="relative">
            <div className="absolute -inset-4 bg-primary/10 rounded-3xl rotate-3"></div>
            <img
              src={ceciAbout}
              alt="Ceci Duca - Instructora de Cocina Antiinflamatoria"
              className="relative rounded-2xl shadow-xl w-full aspect-square object-cover"
              loading="lazy"
            />
          </div>

          {/* Content */}
          <div>
            <span className="badge-pink mb-4">Sobre Mí</span>
            <h2 className="heading-lg mb-4">
              Hola, soy Ceci Duca
            </h2>
            <p className="body-text mb-6">
              Mi historia con la alimentación antiinflamatoria comenzó cuando enfrenté 
              mis propios problemas de salud. Después de años de investigación, formación 
              y práctica, descubrí el poder transformador de la comida real.
            </p>
            <p className="body-text mb-8">
              Hoy, mi misión es compartir todo lo que aprendí de manera simple y 
              accesible. No creo en dietas restrictivas ni en comidas aburridas. 
              Creo en el placer de comer bien, en recetas que toda la familia disfruta 
              y en resultados que se sienten desde la primera semana.
            </p>

            <div className="grid sm:grid-cols-2 gap-4">
              {credentials.map((item, index) => (
                <div key={index} className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center flex-shrink-0">
                    <item.icon className="w-5 h-5 text-primary" />
                  </div>
                  <span className="font-montserrat text-sm text-foreground">{item.text}</span>
                </div>
              ))}
            </div>

            <blockquote className="mt-8 p-6 bg-card rounded-xl border-l-4 border-primary">
              <p className="font-playfair text-lg italic text-foreground">
                "La cocina antiinflamatoria no es una dieta, es un estilo de vida que 
                te devuelve el control de tu salud."
              </p>
              <cite className="block mt-3 font-poppins font-semibold text-primary not-italic">
                — Ceci Duca
              </cite>
            </blockquote>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
