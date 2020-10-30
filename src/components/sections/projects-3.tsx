/** @jsx jsx */
import { jsx } from 'theme-ui'
import Projects from '../projects'
import ProjectCard from '../project-card'

const Projects3: React.FC<{ offset: number; factor: number }> = ({ offset, factor }) => (
  <Projects offset={offset} factor={factor}>
    <ProjectCard
      image="ut-virtual.png"
      title="Wonder Sphere VR"
      bg="linear-gradient(to right, #D4145A 0%, #FBB03B 100%)"
    >
      {` `}
    </ProjectCard>
    <ProjectCard image="ivrc-2017.jpg" title="Mosquitoon" bg="linear-gradient(to right, #662D8C 0%, #ED1E79 100%)">
      {` `}
    </ProjectCard>
  </Projects>
)

export default Projects3
