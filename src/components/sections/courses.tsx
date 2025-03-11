import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"

export default function Courses() {
  return (
    <section id="cursos" className="py-16 px-4 sm:px-6 lg:px-8 bg-muted/50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">Nuestros Cursos</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <CourseCard
            title="Cursos Semanales"
            description="Aprende a tu ritmo"
            imageUrl="/c1.jpg"
            imageAlt="Curso semanal de cerámica"
            text="Clases regulares para aprender técnicas de cerámica de forma progresiva. Ideal para quienes buscan una actividad constante."
          />
          <CourseCard
            title="Cursos Intensivos"
            description="Inmersión completa"
            imageUrl="/c2.jpg"
            imageAlt="Curso intensivo de cerámica"
            text="Aprende en poco tiempo con nuestros cursos intensivos. Perfectos para quienes quieren resultados rápidos."
          />
          <CourseCard
            title="Monográficos"
            description="Especialización técnica"
            imageUrl="/c3.jpg"
            imageAlt="Curso monográfico de cerámica"
            text="Enfocados en técnicas específicas como modelado, torno, esmaltado o decoración. Para quienes buscan perfeccionar aspectos concretos."
          />
        </div>
      </div>
    </section>
  )
}

function CourseCard({ 
  title, 
  description, 
  imageUrl, 
  imageAlt, 
  text 
}: {
  title: string;
  description: string;
  imageUrl: string;
  imageAlt: string;
  text: string;
}) {
  return (
    <Card className="flex flex-col h-full">
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent className="flex-1 flex flex-col">
        <div className="relative aspect-[4/3] mb-4">
          <Image
            src={imageUrl || "/placeholder.svg"}
            alt={imageAlt}
            fill
            className="rounded-md object-cover"
          />
        </div>
        <p className="flex-1">{text}</p>
        <Button className="w-full mt-6" variant="outline" asChild>
          <Link href="#contacto">
            Más información
          </Link>
        </Button>
      </CardContent>
    </Card>
  )
}

