import { faTwitter, faFacebook, faInstagram, faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-regular-svg-icons'

export const introTexts = {
  h1: `Hello, I'm Asahi.`,
  p: `Welcome to Asahi Takenouchi's website!!`,
}

export const contactTexts = {
  h2: `Get in touch`,
  p: `You can find me on other platforms!!`,
}

export const snsAccounts = [
  {
    key: `twitter`,
    href: `https://twitter.com/ashtkn`,
    icon: faTwitter,
  },
  {
    key: `facebook`,
    href: `https://www.facebook.com/asahi.taken`,
    icon: faFacebook,
  },
  {
    key: `instagram`,
    href: `https://www.instagram.com/ash.take`,
    icon: faInstagram,
  },
  {
    key: `github`,
    href: `https://github.com/ashtkn`,
    icon: faGithub,
  },
  {
    key: `linkedin`,
    href: `https://www.linkedin.com/in/ashtkn`,
    icon: faLinkedin,
  },
  {
    key: `email`,
    href: `mailto:asahi.taken@gmail.com`,
    icon: faEnvelope,
  },
]

export const projects = [
  {
    key: `exhibition-app`,
    imageFilename: `exhibition-app.jpg`,
    title: `Exhibition App`,
    youtube: `https://www.youtube.com/watch?v=fe0_cMPLUwc`,
    bg: `linear-gradient(to right, #D4145A 0%, #FBB03B 100%)`,
  },
  {
    key: `heisei-hackathon`,
    imageFilename: `heisei-hackathon.png`,
    title: `HEISEI NO ASHIATO`,
    youtube: `https://www.youtube.com/watch?v=nDs3hQ6yt30`,
    bg: `linear-gradient(to right, #662D8C 0%, #ED1E79 100%)`,
  },
  {
    key: `mayfes-2018`,
    imageFilename: `mayfes-2018.png`,
    title: `Meteor Crash VR`,
    youtube: `https://www.youtube.com/watch?v=1tiTpA__cyk`,
    bg: `linear-gradient(to right, #D585FF 0%, #00FFEE 100%)`,
  },
  {
    key: `lanthanum`,
    imageFilename: `lanthanum.jpg`,
    title: `IoT Lanthanum`,
    bg: `linear-gradient(to right, #009245 0%, #FCEE21 100%)`,
  },
  {
    key: `ut-virtual`,
    imageFilename: `ut-virtual.png`,
    title: `Wonder Sphere VR`,
    bg: `linear-gradient(to right, #D4145A 0%, #FBB03B 100%)`,
  },
  {
    key: `ivrc-2017`,
    imageFilename: `ivrc-2017.jpg`,
    title: `Mosquitoon`,
    bg: `linear-gradient(to right, #662D8C 0%, #ED1E79 100%)`,
  },
  {
    key: `mayfes-2017`,
    imageFilename: `mayfes-2017.jpg`,
    title: `MAY FES 2017 VR GAME`,
    bg: `linear-gradient(to right, #D585FF 0%, #00FFEE 100%)`,
  },
]
