import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export default function FAQ() {
  return (
    <section id="faq" className="py-16 px-4 sm:px-6 lg:px-8 bg-muted/50">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">Preguntas Frecuentes</h2>
        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="item-1" >
            <AccordionTrigger className="cursor-pointer">¿Necesito experiencia previa?</AccordionTrigger>
            <AccordionContent>
              No, nuestros cursos están adaptados a todos los niveles, desde principiantes absolutos hasta personas con
              experiencia que quieren perfeccionar técnicas.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger className="cursor-pointer">¿Qué incluyen los cursos?</AccordionTrigger>
            <AccordionContent>
              Todos nuestros cursos incluyen los materiales necesarios, acceso a herramientas y hornos, así como la guía
              personalizada de nuestros profesores.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger className="cursor-pointer">¿Hay límite de edad?</AccordionTrigger>
            <AccordionContent>
              Ofrecemos cursos para todas las edades, con grupos específicos para niños, adolescentes y adultos.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-4">
            <AccordionTrigger>¿Necesito reservar con antelación?</AccordionTrigger>
            <AccordionContent>
              Recomendamos reservar plaza para los cursos con antelación, ya que los grupos son reducidos para
              garantizar una atención personalizada.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-5">
            <AccordionTrigger>¿Puedo comprar piezas sin asistir a cursos?</AccordionTrigger>
            <AccordionContent>
              Sí, también funcionamos como tienda de cerámica donde puedes adquirir piezas únicas hechas por nuestros
              artistas o encargar diseños personalizados.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </section>
  )
}

