import { MapPin, PersonStanding } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import GoogleMap from "@/components/google-map"
import Link from "next/link"
import Image from "next/image"

export default function Location() {
  return (
    <section id="ubicacion" className="py-16 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">Nuestra Ubicación</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">

          <div>
            <Card className="p-2">
            <div className="relative w-full h-[300px]  rounded-lg overflow-hidden  ">
              <Image
                src="/hero-2.jpg"
                alt="Merakikrea Cerámica taller"
                fill
                className="object-cover"
                priority
              />
            </div>
              <CardHeader className="">

                <CardTitle className="flex items-center gap-2">
                  <MapPin className="h-5 w-5" /> Dirección


                </CardTitle>
                <div className="pl-7 max-w-4xl">
                  <p>
                    <Link 
                      href="https://maps.app.goo.gl/TGVkspfT8CYTirZh8"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:bg-muted transition-colors"
                    >
                      C. Antonio Ponce, 5
                    </Link>
                  </p>
                  <p>
                    <Link 
                      href="https://maps.app.goo.gl/TGVkspfT8CYTirZh8"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:bg-muted transition-colors"
                    >
                      21110 Aljaraque, Huelva, España
                    </Link>
                  </p>
                </div>
              </CardHeader>
              <CardContent>

                <div className="flex flex-col gap-3 mt-2 pb-5">
                  <div className="flex flex-row gap-2 items-center">
                  <PersonStanding className="h-5 w-5" /> 
                  <h3 className="font-medium text-lg">Accesibilidad:</h3>

                  </div>
                  <div className="flex flex-wrap gap-2 pl-7">
                    <Badge variant="outline" className="flex items-center gap-1">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="lucide lucide-wheelchair"
                      >
                        <circle cx="14" cy="6" r="2" />
                        <circle cx="8" cy="18" r="4" />
                        <path d="M12 18h4a2 2 0 0 0 2-2v-5" />
                        <path d="m4.56 9.5 2.44-.5c.71-.14 1.4.32 1.54 1.03l1.5 7.5" />
                      </svg>
                      Aseo accesible
                    </Badge>
                    <Badge variant="outline">Asientos accesibles</Badge>
                    <Badge variant="outline">Parking gratuito</Badge>
                    <Badge variant="outline">Adecuado para niños</Badge>
                    <Badge variant="outline" className="flex items-center gap-1">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M4 12c0-2.76 2.24-5 5-5s5 2.24 5 5-2.24 5-5 5-5-2.24-5-5z" />
                        <path d="M15 12c0-2.76 2.24-5 5-5s5 2.24 5 5-2.24 5-5 5-5-2.24-5-5z" />
                      </svg>
                      Amigable LGTBI+
                    </Badge>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
          <div className="h-[400px] rounded-lg overflow-hidden shadow-lg">
            <GoogleMap address="C. Antonio Ponce, 5, 21110 Aljaraque, Huelva, España" />
          </div>
        </div>
      </div>
    </section>
  )
}

