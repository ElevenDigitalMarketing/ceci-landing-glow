import { Check } from "lucide-react";

const recipes = [
  {
    emoji: "🍓",
    title: "Tartitas de frutos rojos",
    description: "Frescas, livianas y con base crocante saludable. Perfectas para eventos.",
  },
  {
    emoji: "🥥",
    title: "Bombones de coco",
    description: "Súper fáciles, naturales y con una textura que sorprende. Ideales para regalar o acompañar el café.",
  },
  {
    emoji: "🍫",
    title: "Brownie de algarroba",
    description: "Una versión más nutritiva, húmeda y llena de sabor. El clásico infalible para todos los paladares.",
  },
];

const includes = [
  "Clase grabada para ver cuando quieras (acceso ilimitado)",
  "PDF detallado con recetas, reemplazos y paso a paso",
  "Tips de conservación y presentación",
  "Trucos prácticos para una mesa equilibrada y vistosa",
  "Método simple que podés repetir todo el año",
];

const Program = () => {
  return (
    <section id="programa" className="py-16 sm:py-24 bg-muted/50">
      <div className="section-container">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="badge-pink mb-4">Vas a aprender a hacer</span>
          <h2 className="heading-lg mb-4">
            3 recetas irresistibles y 100% saludables
          </h2>
          <p className="body-text">
            Cada receta está explicada paso a paso para que puedas replicarla 
            con confianza, aunque no tengas experiencia previa.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {recipes.map((recipe, index) => (
            <div
              key={index}
              className="bg-card border border-border rounded-2xl p-8 text-center card-hover"
            >
              <span className="text-6xl mb-6 block">{recipe.emoji}</span>
              <h3 className="font-poppins font-semibold text-xl text-foreground mb-3">
                {recipe.title}
              </h3>
              <p className="text-muted-foreground">
                {recipe.description}
              </p>
            </div>
          ))}
        </div>

        {/* What's included */}
        <div className="max-w-2xl mx-auto">
          <div className="bg-card rounded-2xl p-8 shadow-xl border border-border">
            <h3 className="font-poppins font-semibold text-xl text-foreground mb-6 text-center">
              ¿Qué incluye la clase?
            </h3>
            <div className="space-y-4">
              {includes.map((item, index) => (
                <div key={index} className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-primary flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check className="w-4 h-4 text-primary-foreground" />
                  </div>
                  <span className="font-montserrat text-foreground">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Program;
