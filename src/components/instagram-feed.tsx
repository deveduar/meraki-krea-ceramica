"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import Link from "next/link"

// Mock Instagram data
const mockInstagramPosts = [
  {
    id: "1",
    imageUrl: "/1.jpg",
    caption: "Taller de cerámica para principiantes",
    likes: 45,
    url: "https://instagram.com/merakikrea",
  },
  {
    id: "2",
    imageUrl: "/2.png",
    caption: "Nuevas piezas disponibles en nuestra tienda",
    likes: 32,
    url: "https://instagram.com/merakikrea",
  },
  {
    id: "3",
    imageUrl: "/3.png",
    caption: "Curso intensivo de fin de semana",
    likes: 67,
    url: "https://instagram.com/merakikrea",
  },
  {
    id: "4",
    imageUrl: "/4.png",
    caption: "Proceso creativo en el taller",
    likes: 28,
    url: "https://instagram.com/merakikrea",
  },
  {
    id: "5",
    imageUrl: "/5.jpg",
    caption: "Exposición de trabajos de nuestros alumnos",
    likes: 53,
    url: "https://instagram.com/merakikrea",
  },
  {
    id: "6",
    imageUrl: "/6.jpg",
    caption: "Técnicas avanzadas de esmaltado",
    likes: 41,
    url: "https://instagram.com/merakikrea",
  },
]

const InstagramFeed = () => {
  const [posts, setPosts] = useState(mockInstagramPosts)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Simulate loading Instagram data
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 1000)

    return () => clearTimeout(timer)
  }, [])

  if (isLoading) {
    return (
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4">
        {Array.from({ length: 6 }).map((_, index) => (
          <div key={index} className="aspect-square bg-muted animate-pulse rounded-md" />
        ))}
      </div>
    )
  }

  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4">
      {posts.map((post) => (
        <Link
          key={post.id}
          href={post.url}
          target="_blank"
          rel="noopener noreferrer"
          className="block overflow-hidden rounded-md transition-all duration-300 hover:opacity-90 hover:scale-[1.02]"
        >
          <div className="relative aspect-square">
            <Image src={post.imageUrl || "/placeholder.svg"} alt={post.caption} fill className="object-cover" />
          </div>
        </Link>
      ))}
    </div>
  )
}

export default InstagramFeed

