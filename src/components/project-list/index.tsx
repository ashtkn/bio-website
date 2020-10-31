/** @jsx jsx */
import React from 'react'
import { jsx } from 'theme-ui'
import Carousel, { Modal, ModalGateway } from 'react-images'
import Projects from './projects'
import ProjectCard from './project-card'
import projects from '../../contents/projects'
import useWorkImages from '../../hooks/use-work-images'
import Caption from './caption'

const ProjectList: React.FC<{ offset: number; factor: number }> = ({ offset, factor }) => {
  const [currentProject, setCurrentProject] = React.useState(0)
  const [viewerIsOpen, setViewerIsOpen] = React.useState(false)

  const openLightBox = React.useCallback((event, { index }: { index: number }) => {
    setCurrentProject(index)
    setViewerIsOpen(true)
  }, [])

  const closeLightBox = () => {
    setCurrentProject(0)
    setViewerIsOpen(false)
  }

  const workImages = useWorkImages()

  return (
    <div>
      <Projects offset={offset} factor={factor}>
        {projects.map(({ key, imageFilename, title, bg }, index) => {
          const image = workImages.find((i) => i.filename === imageFilename)?.fluid
          return <ProjectCard key={key} image={image} index={index} title={title} onClick={openLightBox} bg={bg} />
        })}
      </Projects>
      <ModalGateway>
        {viewerIsOpen ? (
          <Modal onClose={closeLightBox}>
            <Carousel
              currentIndex={currentProject}
              views={projects.map(({ title, imageFilename, youtube }) => ({
                source: workImages.find((i) => i.filename === imageFilename)?.fluid?.src || ``,
                caption: <Caption title={title} youtube={youtube} />,
              }))}
            />
          </Modal>
        ) : null}
      </ModalGateway>
    </div>
  )
}

export default ProjectList
