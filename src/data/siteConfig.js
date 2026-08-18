export const WHATSAPP_URL =
  "https://wa.me/1234567890?text=Hello%20D.Nova%2C%20I'd%20like%20to%20discuss%20a%20project!"

export const MY_PHOTO =
  'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=800'

export function scrollToSection(id) {
  const element = document.getElementById(id)
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' })
  }
}