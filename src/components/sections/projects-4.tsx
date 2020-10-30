/** @jsx jsx */
import { jsx } from 'theme-ui'
import Projects from '../projects'
import ProjectCard from '../project-card'

const Projects4: React.FC<{ offset: number; factor: number }> = ({ offset, factor }) => (
  <Projects offset={offset} factor={factor}>
    <ProjectCard
      image="mayfes-2017.jpg"
      title="MAY FES 2017 VR GAME"
      bg="linear-gradient(to right, #D585FF 0%, #00FFEE 100%)"
    >
      {` `}
    </ProjectCard>
  </Projects>
)

export default Projects4
