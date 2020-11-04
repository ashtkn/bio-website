const projects: {
  key: string
  filename: string
  title: string
  technology: string
  bg: string
  href?: string
  youtube?: string
  github?: string
}[] = [
  {
    key: `photo-gallery`,
    filename: `photo-gallery.jpg`,
    title: `Photo Gallery`,
    technology: `Next.js, TypeScript`,
    href: `https://photos.takenouchi.work`,
    bg: `linear-gradient(to right, #D4145A 0%, #FBB03B 100%)`,
  },
  {
    key: `exhibition-app`,
    filename: `exhibition-app.jpg`,
    title: `Exhibition App`,
    technology: `iOS, Swift`,
    href: `https://youtu.be/fe0_cMPLUwc`,
    bg: `linear-gradient(to right, #662D8C 0%, #ED1E79 100%)`,
  },
  {
    key: `heisei-hackathon`,
    filename: `heisei-hackathon.png`,
    title: `HEISEI NO ASHIATO`,
    technology: `Vue.js`,
    href: `https://www.youtube.com/watch?v=nDs3hQ6yt30`,
    bg: `linear-gradient(to right, #D585FF 0%, #00FFEE 100%)`,
  },
  {
    key: `mayfes-2018`,
    filename: `mayfes-2018.png`,
    title: `Meteor Crash VR`,
    technology: `Unity, C#`,
    href: `https://youtu.be/1tiTpA__cyk`,
    bg: `linear-gradient(to right, #009245 0%, #FCEE21 100%)`,
  },
  {
    key: `ut-virtual`,
    filename: `ut-virtual.png`,
    title: `Wonder Sphere VR`,
    technology: `Unity, C#`,
    bg: `linear-gradient(to right, #D4145A 0%, #FBB03B 100%)`,
    href: `https://youtu.be/vEg8CRxvXug`,
  },
  {
    key: `ivrc-2017`,
    filename: `ivrc-2017.jpg`,
    title: `Mosquitoon`,
    technology: `Unity, C#`,
    bg: `linear-gradient(to right, #662D8C 0%, #ED1E79 100%)`,
    href: `https://youtu.be/cVLZQhnIlhY`,
  },
]

export default projects
