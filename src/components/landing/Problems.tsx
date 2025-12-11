import { Cake, Heart, Sparkles, Users } from "lucide-react";

const benefits = [
  {
    icon: Cake,
    title: "Mesa dulce sin complicarte",
    description: "Armá una mesa dulce rica y saludable con recetas simples que cualquiera puede hacer.",
  },
  {
    icon: Heart,
    title: "Sin resignar sabor",
    description: "Evitá azúcar y harinas refinadas sin perder el sabor que a todos les encanta.",
  },
  {
    icon: Users,
    title: "Para todas las ocasiones",
    description: "Recetas prácticas para fiestas, encuentros, cumpleaños y cualquier celebración.",
  },
  {
    icon: Sparkles,
    title: "Técnicas repetibles",
    description: "Aprendé un método simple que podés usar todo el año, no solo en fiestas.",
  },
];

const Problems = () => {
  return (
    <section className="py-16 sm:py-24 bg-background">
      <div className="section-container">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="badge-pink mb-4">Ideal para vos si querés</span>
          <h2 className="heading-lg mb-4">
            ¿Querés disfrutar sin culpa estas fiestas?
          </h2>
          <p className="body-text">
            Como Health Coach y creadora de cocina saludable, diseñé esta clase para que 
            puedas replicar cada preparación con confianza, aunque no tengas experiencia previa.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map((item, index) => (
            <div
              key={index}
              className="bg-card border border-border rounded-xl p-6 card-hover"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="w-12 h-12 bg-secondary rounded-full flex items-center justify-center mb-4">
                <item.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-poppins font-semibold text-lg text-foreground mb-2">
                {item.title}
              </h3>
              <p className="text-sm text-muted-foreground">
                {item.description}
              </p>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a href="#inscripcion" className="btn-primary">
            Quiero Aprender
          </a>
        </div>
      </div>
    </section>
  );
};

export default Problems;
