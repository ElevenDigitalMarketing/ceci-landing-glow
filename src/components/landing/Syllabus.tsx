import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Clock, FileText } from "lucide-react";

const modules = [
  {
    number: "01",
    title: "Bases de la Cocina Antiinflamatoria",
    duration: "90 min",
    description: "Entenderás qué es la inflamación, cómo afecta tu cuerpo y cuáles son los pilares de una alimentación que la reduce.",
    topics: ["Qué es la inflamación crónica", "Alimentos inflamatorios vs antiinflamatorios", "Tu despensa antiinflamatoria básica", "Planificación semanal"],
  },
  {
    number: "02",
    title: "Desayunos Nutritivos y Energizantes",
    duration: "75 min",
    description: "Recetas para empezar el día con energía sostenida, sin picos de azúcar ni pesadez.",
    topics: ["Porridge antiinflamatorio", "Smoothies verdes", "Tostadas nutritivas", "Preparaciones make-ahead"],
  },
  {
    number: "03",
    title: "Snacks Saludables Sin Culpa",
    duration: "60 min",
    description: "Opciones rápidas y deliciosas para entre comidas que nutren en lugar de inflamar.",
    topics: ["Hummus y dips caseros", "Barritas energéticas", "Snacks salados", "Opciones dulces sin azúcar"],
  },
  {
    number: "04",
    title: "Sopas y Caldos Reconstituyentes",
    duration: "90 min",
    description: "Preparaciones que sanan desde adentro, perfectas para el sistema digestivo.",
    topics: ["Caldo de huesos medicinal", "Sopas cremosas sin lácteos", "Consomés depurativos", "Gazpachos y sopas frías"],
  },
  {
    number: "05",
    title: "Ensaladas Creativas y Saciantes",
    duration: "75 min",
    description: "Más allá de la lechuga: ensaladas que son platos completos y deliciosos.",
    topics: ["Bases de hojas verdes", "Proteínas para ensaladas", "Toppings antiinflamatorios", "Aderezos caseros"],
  },
  {
    number: "06",
    title: "Bowls Equilibrados",
    duration: "90 min",
    description: "La fórmula perfecta para crear bowls nutritivos, coloridos y satisfactorios.",
    topics: ["Buddha bowls", "Poke bowls saludables", "Grain bowls", "Bases de vegetales asados"],
  },
  {
    number: "07",
    title: "Proteínas Vegetales y Animales",
    duration: "90 min",
    description: "Técnicas de cocción que preservan nutrientes y maximizan sabor.",
    topics: ["Legumbres bien preparadas", "Pescados y mariscos", "Carnes magras", "Tofu y tempeh"],
  },
  {
    number: "08",
    title: "Salsas y Aderezos Caseros",
    duration: "60 min",
    description: "Transforma cualquier plato con salsas que suman nutrientes sin inflamar.",
    topics: ["Vinagretas saludables", "Salsas cremosas sin lácteos", "Pestos variados", "Aliños asiáticos"],
  },
  {
    number: "09",
    title: "Postres Sin Azúcar Refinada",
    duration: "90 min",
    description: "Dulces que satisfacen sin los efectos negativos del azúcar procesada.",
    topics: ["Endulzantes naturales", "Postres de frutas", "Chocolates saludables", "Helados sin lácteos"],
  },
  {
    number: "10",
    title: "Menú Semanal Antiinflamatorio",
    duration: "75 min",
    description: "Cómo organizar tu semana para comer bien sin estrés ni complicaciones.",
    topics: ["Batch cooking", "Organización de la despensa", "Menús tipo", "Adaptaciones para toda la familia"],
  },
  {
    number: "11",
    title: "Fermentados Caseros Básicos",
    duration: "90 min",
    description: "Introducción a los alimentos fermentados para nutrir tu microbiota.",
    topics: ["Chucrut y vegetales fermentados", "Kéfir de agua", "Kombucha básica", "Seguridad en fermentación"],
  },
  {
    number: "12",
    title: "Integración y Estilo de Vida",
    duration: "60 min",
    description: "Cómo mantener estos hábitos a largo plazo y adaptarlos a tu vida real.",
    topics: ["Comer fuera de casa", "Viajes y eventos", "Manejo del estrés", "Plan de mantenimiento"],
  },
];

const Syllabus = () => {
  return (
    <section id="temario" className="py-16 sm:py-24 bg-background">
      <div className="section-container">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="badge-pink mb-4">Temario Completo</span>
          <h2 className="heading-lg mb-4">
            Todo lo que vas a aprender
          </h2>
          <p className="body-text">
            12 módulos diseñados para llevarte de principiante a experta en cocina antiinflamatoria.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {modules.map((module, index) => (
              <AccordionItem
                key={index}
                value={`module-${index}`}
                className="bg-card border border-border rounded-xl px-6 data-[state=open]:shadow-lg transition-shadow"
              >
                <AccordionTrigger className="hover:no-underline py-5">
                  <div className="flex items-center gap-4 text-left">
                    <span className="font-playfair font-bold text-2xl text-secondary w-10">
                      {module.number}
                    </span>
                    <div>
                      <h3 className="font-poppins font-semibold text-lg text-foreground">
                        {module.title}
                      </h3>
                      <div className="flex items-center gap-4 mt-1">
                        <span className="flex items-center gap-1 text-sm text-muted-foreground">
                          <Clock className="w-4 h-4" />
                          {module.duration}
                        </span>
                      </div>
                    </div>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="pb-5">
                  <div className="pl-14">
                    <p className="text-muted-foreground mb-4">{module.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {module.topics.map((topic, i) => (
                        <span
                          key={i}
                          className="inline-flex items-center gap-1 px-3 py-1 bg-muted rounded-full text-sm text-foreground"
                        >
                          <FileText className="w-3 h-3 text-primary" />
                          {topic}
                        </span>
                      ))}
                    </div>
                  </div>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default Syllabus;
