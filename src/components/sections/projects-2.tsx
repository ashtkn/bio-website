/** @jsx jsx */
import { jsx } from 'theme-ui'
import Projects from '../projects'
import ProjectCard from '../project-card'

const Projects2: React.FC<{ offset: number; factor: number }> = ({ offset, factor }) => (
  <Projects offset={offset} factor={factor}>
    <ProjectCard
      image="mayfes-2018.png"
      title="Meteor Crash VR"
      link="https://www.youtube.com/watch?v=1tiTpA__cyk"
      bg="linear-gradient(to right, #D585FF 0%, #00FFEE 100%)"
    >
      {` `}
    </ProjectCard>
    <ProjectCard image="lanthanum.jpg" title="IoT Lanthanum" bg="linear-gradient(to right, #009245 0%, #FCEE21 100%)">
      {` `}
    </ProjectCard>
  </Projects>
)

export default Projects2
