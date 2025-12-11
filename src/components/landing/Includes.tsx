import { Check, Video, FileText, Clock, Lightbulb } from "lucide-react";

const benefits = [
  { icon: Video, text: "Clase grabada en video de alta calidad" },
  { icon: FileText, text: "PDF con recetas, reemplazos y paso a paso" },
  { icon: Lightbulb, text: "Tips de conservación y presentación" },
  { icon: Clock, text: "Acceso ilimitado de por vida" },
];

const Includes = () => {
  return (
    <section id="inscripcion" className="py-16 sm:py-24 bg-muted/50">
      <div className="section-container">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <span className="badge-pink mb-4">Inscripción</span>
            <h2 className="heading-lg mb-4">
              Accedé a la clase especial
            </h2>
          </div>

          <div className="bg-card rounded-2xl shadow-xl border border-border overflow-hidden">
            {/* Header */}
            <div className="bg-primary p-8 text-center">
              <h3 className="font-playfair text-3xl font-bold text-primary-foreground mb-2">
                Mesa Dulce Saludable para Fiestas
              </h3>
              <p className="text-primary-foreground/80 font-montserrat">
                Sin azúcar • Sin gluten • Sin lácteos
              </p>
            </div>

            {/* Pricing */}
            <div className="bg-secondary/30 py-8 px-6 text-center border-b border-border">
              <div className="inline-block bg-primary text-primary-foreground font-poppins font-bold text-lg px-6 py-2.5 rounded-full mb-4">
                Precio especial de lanzamiento
              </div>
              <div className="flex items-center justify-center gap-4 flex-wrap">
                <span className="font-playfair text-5xl font-bold text-primary">
                  $15.000
                </span>
                <span className="text-lg text-muted-foreground font-montserrat">ARS</span>
              </div>
              <p className="mt-3 text-sm text-muted-foreground">
                Pago único • Acceso de por vida
              </p>
            </div>

            {/* Benefits */}
            <div className="p-8">
              <div className="grid sm:grid-cols-2 gap-4 mb-8">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center flex-shrink-0">
                      <benefit.icon className="w-5 h-5 text-primary" />
                    </div>
                    <span className="font-montserrat text-foreground">{benefit.text}</span>
                  </div>
                ))}
              </div>

              {/* Modality */}
              <div className="bg-muted rounded-xl p-6 mb-8">
                <h4 className="font-poppins font-semibold text-lg text-foreground mb-3">
                  Modalidad
                </h4>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground">100% online y a tu ritmo</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground">Acceso inmediato al contenido</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground">Compatible con celular, tablet y computadora</span>
                  </li>
                </ul>
              </div>

              {/* CTA */}
              <div className="text-center">
                <a 
                  href="#" 
                  className="btn-primary inline-block w-full sm:w-auto text-lg py-5 px-12"
                >
                  Quiero Inscribirme Ahora
                </a>
                <p className="mt-4 text-sm text-muted-foreground">
                  Pago seguro • Acceso inmediato
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Includes;
