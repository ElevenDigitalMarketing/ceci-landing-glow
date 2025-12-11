import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "¿Necesito experiencia previa en cocina?",
    answer: "No, la clase está diseñada para todos los niveles. Cada receta está explicada paso a paso con video detallado. Si sabés encender una hornalla, podés hacer estas recetas.",
  },
  {
    question: "¿Cuánto tiempo tengo para ver la clase?",
    answer: "¡El acceso es de por vida! Podés verla a tu ritmo, repetirla las veces que quieras y volver cuando lo necesites. No hay presión ni fechas límite.",
  },
  {
    question: "¿Los ingredientes son fáciles de conseguir?",
    answer: "Sí, todas las recetas usan ingredientes que encontrás en cualquier supermercado o dietética. No necesitás productos importados ni difíciles de conseguir.",
  },
  {
    question: "¿Son aptas para personas con intolerancias?",
    answer: "¡Sí! Las recetas son sin azúcar, sin gluten y sin lácteos. Son ideales para celíacos, intolerantes a la lactosa y personas que evitan el azúcar refinada.",
  },
  {
    question: "¿Puedo hacer las recetas para vender?",
    answer: "¡Absolutamente! Muchas alumnas usan estas recetas para sus emprendimientos de pastelería saludable. Son recetas probadas que quedan perfectas.",
  },
  {
    question: "¿Cómo accedo al contenido después de pagar?",
    answer: "Inmediatamente después del pago recibís un email con el acceso a la plataforma donde está la clase grabada y el PDF descargable.",
  },
];

const FAQ = () => {
  return (
    <section className="py-16 sm:py-24 bg-background">
      <div className="section-container">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <span className="badge-pink mb-4">FAQ</span>
            <h2 className="heading-lg mb-4">
              Preguntas Frecuentes
            </h2>
            <p className="body-text">
              Resolvemos tus dudas más comunes
            </p>
          </div>

          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`faq-${index}`}
                className="bg-card border border-border rounded-xl px-6 data-[state=open]:shadow-md transition-shadow"
              >
                <AccordionTrigger className="hover:no-underline py-5 text-left">
                  <span className="font-poppins font-semibold text-foreground pr-4">
                    {faq.question}
                  </span>
                </AccordionTrigger>
                <AccordionContent className="pb-5">
                  <p className="text-muted-foreground pr-8">{faq.answer}</p>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>

          <div className="text-center mt-12">
            <p className="text-muted-foreground mb-4">¿Tenés otra pregunta?</p>
            <a
              href="https://wa.me/5491112345678"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary inline-flex items-center gap-2"
            >
              Escribinos por WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
