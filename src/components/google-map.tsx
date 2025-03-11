"use client"

import { useEffect, useRef } from "react"

interface GoogleMapProps {
  address: string
}

const GoogleMap = ({ address }: GoogleMapProps) => {
  const mapRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    // This is a simplified version that would normally use the Google Maps API
    // In a real implementation, you would load the Google Maps API and create a map

    if (mapRef.current) {
      const iframe = document.createElement("iframe")

      // Create a Google Maps embed URL with the address
      const encodedAddress = encodeURIComponent(address)
      iframe.src = `https://maps.google.com/maps?q=${encodedAddress}&t=&z=15&ie=UTF8&iwloc=&output=embed`

      iframe.width = "100%"
      iframe.height = "100%"
      iframe.style.border = "0"
      iframe.allowFullscreen = true
      iframe.loading = "lazy"
      iframe.referrerPolicy = "no-referrer-when-downgrade"

      // Clear any existing content and append the iframe
      mapRef.current.innerHTML = ""
      mapRef.current.appendChild(iframe)
    }
  }, [address])

  return <div ref={mapRef} className="w-full h-full"></div>
}

export default GoogleMap

