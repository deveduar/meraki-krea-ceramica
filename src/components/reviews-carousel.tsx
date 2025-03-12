"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight, Star } from "lucide-react"

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
  const [currentIndex, setCurrentIndex] = useState(0)
  const [visibleReviews, setVisibleReviews] = useState<typeof mockReviews>([])

  const itemsPerPage = {
    mobile: 1,
    tablet: 2,
    desktop: 3,
  }

  useEffect(() => {
    // Determine how many reviews to show based on screen size
    const handleResize = () => {
      const width = window.innerWidth
      let itemsToShow = itemsPerPage.mobile

      if (width >= 768) {
        itemsToShow = itemsPerPage.tablet
      }

      if (width >= 1024) {
        itemsToShow = itemsPerPage.desktop
      }

      const startIndex = currentIndex % mockReviews.length
      const endIndex = startIndex + itemsToShow

      // Handle wrapping around the array
      let reviews = []
      if (endIndex <= mockReviews.length) {
        reviews = mockReviews.slice(startIndex, endIndex)
      } else {
        const firstPart = mockReviews.slice(startIndex)
        const secondPart = mockReviews.slice(0, endIndex - mockReviews.length)
        reviews = [...firstPart, ...secondPart]
      }

      setVisibleReviews(reviews)
    }

    handleResize()
    window.addEventListener("resize", handleResize)

    return () => {
      window.removeEventListener("resize", handleResize)
    }
  }, [currentIndex])

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? mockReviews.length - 1 : prevIndex - 1))
  }

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % mockReviews.length)
  }

  return (
    <div className="relative min-h-[450px]">
      <div className="flex overflow-hidden gap-4 ">
        {visibleReviews.map((review) => (
          <Card key={review.id} className="min-w-[300px] flex-1">
            <CardContent className="">
              <div className="flex items-center mb-2">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    className={`h-5 w-5 ${i < review.rating ? "text-yellow-500 fill-yellow-500" : "text-gray-300"}`}
                  />
                ))}
              </div>
              <p className="text-sm text-muted-foreground mb-4">{review.date}</p>
              <p className="mb-4">{review.text}</p>
              <CardFooter className="p-0 ">
              <p className="font-medium">{review.name}</p>

              </CardFooter>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="absolute bottom-0 left-0 right-0 flex justify-center gap-2">
        <Button variant="outline" size="icon" onClick={goToPrevious} aria-label="Anterior reseña">
          <ChevronLeft className="h-4 w-4" />
        </Button>
        <Button variant="outline" size="icon" onClick={goToNext} aria-label="Siguiente reseña">
          <ChevronRight className="h-4 w-4" />
        </Button>
      </div>
    </div>
  )
}

export default ReviewsCarousel

