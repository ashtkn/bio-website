import React from 'react'
import { Parallax } from 'react-spring/renderprops-addons'
import Layout from '../components/layout'
import Intro from '../components/sections/intro'
import About from '../components/sections/about'
// import Projects from '../components/sections/projects'
import Projects1 from '../components/sections/projects-1'
import Projects2 from '../components/sections/projects-2'
import Projects3 from '../components/sections/projects-3'
import Projects4 from '../components/sections/projects-4'
// import Gallery from '../components/sections/gallery'
import Contact from '../components/sections/contact'

const Cara: React.FC<{}> = () => (
  <Layout>
    <Parallax pages={7}>
      <Intro offset={0} factor={1} />
      <About offset={1} factor={1} />
      {/* <Projects offset={3} factor={4} /> */}
      <Projects1 offset={2} factor={1} />
      <Projects2 offset={3} factor={1} />
      <Projects3 offset={4} factor={1} />
      <Projects4 offset={5} factor={1} />
      <Contact offset={6} factor={1} />
    </Parallax>
  </Layout>
)

export default Cara
