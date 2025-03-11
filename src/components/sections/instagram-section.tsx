import { Instagram } from "lucide-react"
import { Button } from "@/components/ui/button"
import InstagramFeed from "@/components/instagram-feed"

export default function InstagramSection() {
  return (
    <section id="instagram" className="py-16 px-4 sm:px-6 lg:px-8 bg-muted/50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-4">Síguenos en Instagram</h2>
        <p className="text-center mb-12 max-w-2xl mx-auto">
          Descubre nuestras últimas creaciones y actividades en nuestro perfil de Instagram
        </p>
        <InstagramFeed />
        <div className="text-center mt-8">
        <Button 
            size="lg" 
            className="gap-2 bg-gradient-to-r from-[#D300C5] via-[#FF0069] to-[#FF7A00] hover:opacity-90 text-white" 
            asChild
          >
            <a href="https://www.instagram.com/merakikrea" target="_blank" rel="noopener noreferrer">
              <Instagram className="h-5 w-5" />
              <span>@merakikrea_ceramica</span>
            </a>
          </Button>
        </div>
      </div>
    </section>
  )
}

