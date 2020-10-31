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

  const images = useWorkImages()

  return (
    <div>
      <Projects offset={offset} factor={factor}>
        {projects.map(({ key, filename, title, bg }, index) => {
          const image = images.find((i) => i.filename === filename)?.fluid
          if (!image) {
            return null
          }
          const { base64, aspectRatio, src, srcSet, sizes } = image
          return (
            <ProjectCard
              key={key}
              image={{ base64: base64 || undefined, aspectRatio, src, srcSet, sizes }}
              index={index}
              title={title}
              bg={bg}
              onClick={openLightBox}
            />
          )
        })}
      </Projects>
      <ModalGateway>
        {viewerIsOpen ? (
          <Modal onClose={closeLightBox}>
            <Carousel
              currentIndex={currentProject}
              views={projects.map(({ title, technology, filename, youtube }) => ({
                source: images.find((i) => i.filename === filename)?.fluid?.src || ``,
                caption: <Caption title={title} technology={technology} youtube={youtube} />,
              }))}
            />
          </Modal>
        ) : null}
      </ModalGateway>
    </div>
  )
}

export default ProjectList
