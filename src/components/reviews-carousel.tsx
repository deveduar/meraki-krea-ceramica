
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Star } from "lucide-react"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
// Mock reviews data
const mockReviews = [
  {
    id: "1",
    name: "María José Macías Álvez",
    rating: 5,
    date: "Hace 7 días",
    text: "Ambiente muy bueno y relajante. Asisto dos dias a la semana por dos horas, aunque también se puede asistir un día 4 horas. Las dos profes, Paqui y Yolanda, te dan muchas ideas para hacer tus proyectos y te orientan para que salgan estupendos. Yo estoy muy contenta y lo recomiendo para relajarte y pasar unas horas estupendas.",
  },
  {
    id: "2",
    name: "Ana Hernandez Martin",
    rating: 5,
    date: "Hace 7 días",
    text: "Asisto a sus clases 2 veces a la semana, he aprendido muchas técnicas de cerámica, estoy muy contenta, me relaja mucho. El ambiente es estupendo. Recomiendo mucho sus clases. Las profes ( Paqui y Yolanda) están pendientes de nuestros trabajos, para que nos salgan perfectos",
  },
  {
    id: "3",
    name: "Dedalo Publicidad Publicidad",
    rating: 5,
    date: "Hace una semana",
    text: "Compré una pieza de cerámica... una maravilla",
  },
  {
    id: "4",
    name: "Ester GV",
    rating: 5,
    date: "Hace 16 horas",
    text: "Un espacio estupendo para aprender y realizar piezas de cerámica. Especial mención a las profes.",
  },
  {
    id: "5",
    name: "Jorge Fernández Avila",
    rating: 5,
    date: "Hace 17 horas",
    text: "Las sesiones de cerámica son muy divertidas. Muchas herramientas, arcillas y consejos para sacar las ideas. Paqui y Yolanda son unas profes increíbles.",
  },
]

const ReviewsCarousel = () => {

  return (
    <div className="relative ">
    <Carousel className="w-full ">
    <CarouselContent className="-ml-4">
      {mockReviews.map((review) => (
        <CarouselItem key={review.id} className="pl-4 md:basis-1/2 lg:basis-1/3">
          <div className="p-1">
            <Card>
              <CardContent className="">
                <div className="flex items-center mb-2">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star
                      key={i}
                      className={`h-5 w-5 ${
                        i < review.rating ? "text-yellow-500 fill-yellow-500" : "text-gray-300"
                      }`}
                    />
                  ))}
                </div>
                <p className="text-sm text-muted-foreground mb-4">{review.date}</p>
                <p className="mb-4">{review.text}</p>
                <CardFooter className="p-0">
                  <p className="font-medium">{review.name}</p>
                </CardFooter>
              </CardContent>
            </Card>
          </div>
        </CarouselItem>
      ))}
    </CarouselContent>
    <CarouselPrevious className="hidden md:flex" />
    <CarouselNext className="hidden md:flex" />
  </Carousel>
  </div>
  )
}


export default ReviewsCarousel

