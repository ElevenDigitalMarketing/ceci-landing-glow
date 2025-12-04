import { AlertCircle, Zap, Heart, Sparkles } from "lucide-react";

const problems = [
  {
    icon: AlertCircle,
    problem: "Hinchazón constante",
    solution: "Aprenderás qué alimentos evitar y cómo preparar comidas que deshinchen naturalmente.",
  },
  {
    icon: Zap,
    problem: "Falta de energía",
    solution: "Descubrirás recetas que nutren sin pesadez, dándote vitalidad durante todo el día.",
  },
  {
    icon: Heart,
    problem: "Problemas digestivos",
    solution: "Dominarás técnicas de cocción y combinaciones que favorecen tu microbiota.",
  },
  {
    icon: Sparkles,
    problem: "No sabés qué cocinar",
    solution: "Tendrás un plan claro con +60 recetas prácticas y deliciosas para cada día.",
  },
];

const Problems = () => {
  return (
    <section className="py-16 sm:py-24 bg-background">
      <div className="section-container">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="badge-pink mb-4">¿Te identificás?</span>
          <h2 className="heading-lg mb-4">
            ¿Sentís que tu cuerpo te pide un cambio?
          </h2>
          <p className="body-text">
            La inflamación crónica afecta tu calidad de vida. Pero con la alimentación correcta, 
            podés transformar cómo te sentís cada día.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {problems.map((item, index) => (
            <div
              key={index}
              className="bg-card border border-border rounded-xl p-6 card-hover"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="w-12 h-12 bg-secondary rounded-full flex items-center justify-center mb-4">
                <item.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-poppins font-semibold text-lg text-foreground mb-2">
                {item.problem}
              </h3>
              <p className="text-sm text-muted-foreground">
                {item.solution}
              </p>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a href="#inscripcion" className="btn-primary">
            Quiero Solucionar Esto
          </a>
        </div>
      </div>
    </section>
  );
};

export default Problems;
