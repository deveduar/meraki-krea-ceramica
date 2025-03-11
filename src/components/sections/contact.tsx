import { Phone, MessageCircle, Clock, MapPin, Instagram, Facebook, Globe } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
import { Separator } from "@/components/ui/separator"
import Link from "next/link"

export default function Contact() {
  return (
    <section id="contacto" className="py-16 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="max-w-6xl mx-auto">
        
        <h2 className="text-3xl font-bold text-center mb-12">Contacto</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <Card>
            <CardHeader className="">
              <CardTitle>Información de Contacto</CardTitle>
              <CardDescription>Estamos encantados de atenderte</CardDescription>
            </CardHeader>
            <CardContent className="space-y-8 flex flex-col  w-full">

              <div className=" space-y-3 items-start">
              <ContactInfo icon={Phone} title="Teléfono" content="665 81 78 56" />
              <ContactInfo icon={MessageCircle} title="WhatsApp" content="665 81 78 56" />
              <Separator className="mt-4" />
              </div>
              <div className="max-w-md items-center justify-center">
              <ContactInfo
                icon={Clock}
                title="Horario"
                content={
                  <div className="mt-1 ">
                    <div className="flex grid-cols-2 gap-8">
                      <div className="flex flex-row gap-8">
                      <div className="space-y-4 text-sm">
                        <div className="h-12">
                          <p>Lunes a jueves</p>
                        </div>
                        <div>
                          <p>Viernes y sábado</p>
                        </div>
                        <div>
                          <p>Domingo</p>
                        </div>
                      </div>
                    <Separator className="" orientation="vertical" />
                      
                      <div className="space-y-4 text-sm">
                        <div className=" space-y-1">
                          <p>9:30–13:30</p>
                          <p>16:30–20:30</p>

                        </div>
                        <div>
                          <p>10:00–14:00</p>
                        </div>
                        <div>
                          <p className="text-muted-foreground">Cerrado</p>
                        </div>
                      </div>
                      </div>
                    </div>
                    {/* <Separator className="mt-4" /> */}
                  </div>
                }
              />

              </div>
              <Separator className="" />

              <ContactInfo
                icon={MapPin}
                title="Dirección"
                content={
                  <Link 
                    href="https://maps.app.goo.gl/TGVkspfT8CYTirZh8"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-primary transition-colors"
                  >
                    <p>C. Antonio Ponce, 5</p>
                    <p>21110 Aljaraque, Huelva, España</p>
                  </Link>
                }
              />
              <Separator className="" />

            </CardContent>
            <CardFooter>
            <div className=" flex  gap-3 items-center ">
            <Globe className="h-5 w-5" />
                <h3 className="font-medium ">Redes Sociales</h3>
                <div className="flex gap-4">
                  <SocialButton href="https://instagram.com" icon={Instagram} label="Instagram" />
                  <SocialButton href="https://facebook.com" icon={Facebook} label="Facebook" />
                </div>
              </div>
            </CardFooter>
          </Card>

          <div className="flex flex-col justify-center">
            <h3 className="text-2xl font-bold mb-6">¿Quieres saber más?</h3>
            <p className="mb-8 text-lg">
              Envíanos un mensaje y te responderemos lo antes posible. También puedes visitarnos en nuestro taller o
              llamarnos por teléfono.
            </p>
            <div className="space-y-4 space-x-4">
              <Button size="lg" className="w-full sm:w-auto gap-2 bg-[#25D366] hover:bg-[#128C7E] text-white dark:text-white" asChild>
                <Link href="https://wa.me/34665817856" target="_blank" rel="noopener noreferrer">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                  Contáctanos por WhatsApp
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="w-full sm:w-auto gap-2" asChild>
                <Link href="tel:+34665817856">
                  <Phone className="h-5 w-5" />
                  Llamar ahora
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}



function ContactInfo({ icon: Icon, title, content }: { icon: React.ElementType; title: string; content: React.ReactNode }) {
  return (
    <div className="flex items-start gap-3">
      <Icon className="h-5 w-5 mt-1 text-primary" />
      <div>
        <h3 className="font-medium">{title}</h3>
        {typeof content === "string" ? <p className="text-lg">{content}</p> : content}
      </div>
    </div>
  )
}

function SocialButton({ href, icon: Icon, label }: { href: string; icon: React.ElementType; label: string }) {
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <Button variant="outline" size="icon" asChild>
            <Link href={href} target="_blank" rel="noopener noreferrer" aria-label={label}>
              <Icon className="h-5 w-5" />
            </Link>
          </Button>
        </TooltipTrigger>
        <TooltipContent>
          <p>{label}</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  )
}

