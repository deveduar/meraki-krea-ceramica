import Image from "next/image"
import { Badge } from "@/components/ui/badge"

export default function AboutUs() {
  return (
    <section id="nosotros" className="py-16 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">Sobre Nosotros</h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <Image
              src="/about.jpg"
              alt="Taller de cerámica"
              width={800}
              height={600}
              className="rounded-lg shadow-lg"
            />
          </div>
          <div>
            <p className="text-lg mb-6">
              Somos docentes profesionales con más de veinte años de experiencia y pasión por lo que hacemos. Ofrecemos
              cursos semanales, intensivos y monográficos en un espacio único en Aljaraque.
            </p>
            <p className="text-lg mb-6">
              Creatividad y diversión van de la mano en nuestras clases personalizadas, con horarios flexibles y
              materiales incluidos. Nos adaptamos a todos los niveles y a todas las edades.
            </p>
            <p className="text-lg mb-8">
              También diseñamos piezas únicas a precios asequibles para quienes buscan cerámica artesanal de calidad.
            </p>
            <div className="flex flex-wrap gap-3">
              <Badge className="text-sm py-1">Clases personalizadas</Badge>
              <Badge className="text-sm py-1">Horarios flexibles</Badge>
              <Badge className="text-sm py-1">Materiales incluidos</Badge>
              <Badge className="text-sm py-1">Todos los niveles</Badge>
              <Badge className="text-sm py-1">Todas las edades</Badge>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

