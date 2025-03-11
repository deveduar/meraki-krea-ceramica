import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function Hero() {
  return (
    <section className="relative h-[70vh] flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Image
          src="/hero-1.jpg"
          alt="Cerámica artesanal"
          fill
          className="object-cover brightness-30"
          priority
        />
      </div>
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6">Merakikrea Cerámica</h1>
        <p className="text-xl sm:text-2xl text-white/90 max-w-2xl mx-auto mb-8">
          Clases de cerámica y piezas únicas en Aljaraque, Huelva
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" asChild>
            <Link href="#contacto">Contáctanos</Link>
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="bg-background/20 backdrop-blur-sm border-white text-white hover:bg-background/30"
            asChild
          >
            <Link href="#cursos">Nuestros Cursos</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}

