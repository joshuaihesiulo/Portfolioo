export const WHATSAPP_URL =
  'https://wa.me/2348142288083?text=Hello%20Joshua%2C%20I%27d%20like%20to%20discuss%20a%20project!'

export const MY_EMAIL = 'joshuaihesiulo@gmail.com'

export const GITHUB_URL = 'https://github.com/joshuaihesiulo'

export const LINKEDIN_URL = 'https://www.linkedin.com/in/ihesiulo-joshua-1835942a1/'

export const MY_PHOTO = '/profile.jpg'

export function scrollToSection(id) {
  const element = document.getElementById(id)
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' })
  }
}
