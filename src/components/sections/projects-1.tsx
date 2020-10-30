/** @jsx jsx */
import { jsx } from 'theme-ui'
import Projects from '../projects'
import ProjectCard from '../project-card'

const Projects1: React.FC<{ offset: number; factor: number }> = ({ offset, factor }) => (
  <Projects offset={offset} factor={factor}>
    <ProjectCard
      image="exhibition-app.jpg"
      title="Exhibition App"
      link="https://www.youtube.com/watch?v=fe0_cMPLUwc"
      bg="linear-gradient(to right, #D4145A 0%, #FBB03B 100%)"
    >
      {` `}
    </ProjectCard>
    <ProjectCard
      image="heisei-hackathon.png"
      title="HEISEI NO ASHIATO"
      link="https://www.youtube.com/watch?v=nDs3hQ6yt30"
      bg="linear-gradient(to right, #662D8C 0%, #ED1E79 100%)"
    >
      {` `}
    </ProjectCard>
  </Projects>
)

export default Projects1
