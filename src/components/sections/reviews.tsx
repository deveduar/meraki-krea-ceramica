import ReviewsCarousel from "@/components/reviews-carousel"

export default function Reviews() {
  return (
    <section id="opiniones" className="py-16 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">Lo que dicen nuestros clientes</h2>
        <ReviewsCarousel />
      </div>
    </section>
  )
}

