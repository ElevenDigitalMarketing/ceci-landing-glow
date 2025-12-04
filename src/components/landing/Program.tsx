import { Check, PlayCircle } from "lucide-react";

const workshops = [
  "Bases de la cocina antiinflamatoria",
  "Desayunos nutritivos y energizantes",
  "Snacks saludables sin culpa",
  "Sopas y caldos reconstituyentes",
  "Ensaladas creativas y saciantes",
  "Bowls equilibrados",
  "Proteínas vegetales y animales",
  "Salsas y aderezos caseros",
  "Postres sin azúcar refinada",
  "Menú semanal antiinflamatorio",
  "Fermentados caseros básicos",
  "Integración y estilo de vida",
];

const Program = () => {
  return (
    <section id="programa" className="py-16 sm:py-24 bg-muted/50">
      <div className="section-container">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div>
            <span className="badge-pink mb-4">El Programa</span>
            <h2 className="heading-lg mb-4">
              12 talleres prácticos para transformar tu cocina
            </h2>
            <p className="body-text mb-8">
              Cada taller es una experiencia completa donde aprenderás teoría, técnicas 
              y recetas que podrás aplicar inmediatamente. Todo explicado paso a paso, 
              sin términos complicados.
            </p>

            <div className="space-y-3 mb-8">
              {workshops.map((workshop, index) => (
                <div key={index} className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-secondary flex items-center justify-center flex-shrink-0">
                    <span className="font-poppins font-semibold text-sm text-primary">
                      {index + 1}
                    </span>
                  </div>
                  <span className="font-montserrat text-foreground">{workshop}</span>
                </div>
              ))}
            </div>

            <a href="#temario" className="btn-secondary inline-flex items-center gap-2">
              <PlayCircle className="w-5 h-5" />
              Ver Temario Completo
            </a>
          </div>

          {/* Features Card */}
          <div className="bg-card rounded-2xl p-8 shadow-xl border border-border">
            <h3 className="font-poppins font-semibold text-xl text-foreground mb-6">
              Lo que incluye cada taller:
            </h3>
            <div className="space-y-4">
              {[
                "Clase en video de alta calidad (grabada)",
                "Recetas descargables en PDF",
                "Lista de compras del módulo",
                "Tips y variaciones para cada receta",
                "Acceso de por vida al contenido",
                "Soporte en comunidad privada",
              ].map((feature, index) => (
                <div key={index} className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-primary flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check className="w-4 h-4 text-primary-foreground" />
                  </div>
                  <span className="font-montserrat text-foreground">{feature}</span>
                </div>
              ))}
            </div>

            <div className="mt-8 pt-6 border-t border-border">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-14 h-14 rounded-lg bg-secondary flex items-center justify-center">
                  <span className="text-2xl">📚</span>
                </div>
                <div>
                  <p className="font-poppins font-semibold text-foreground">BONUS: Ebook Exclusivo</p>
                  <p className="text-sm text-muted-foreground">+60 recetas antiinflamatorias adicionales</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Program;
