/** @jsx jsx */
import React from 'react'
import { jsx, Styled } from 'theme-ui'
import Carousel, { Modal, ModalGateway } from 'react-images'
import Projects from './projects'
import ProjectCard from './project-card'
import projects from '../../contents/projects'
import useWorkImages from '../../hooks/use-work-images'

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

  const edges = useWorkImages()

  return (
    <div>
      <Projects offset={offset} factor={factor}>
        {projects.map(({ key, imageFilename, title, bg }, index) => {
          const image = edges.find(
            ({ node }: { node: { name: string; extension: string } }) =>
              `${node.name}.${node.extension}` === imageFilename
          ).node.childImageSharp.fluid
          return (
            <ProjectCard key={key} image={image} index={index} title={title} onClick={openLightBox} bg={bg}>
              {` `}
            </ProjectCard>
          )
        })}
      </Projects>
      <ModalGateway>
        {viewerIsOpen ? (
          <Modal onClose={closeLightBox}>
            <Carousel
              currentIndex={currentProject}
              views={projects.map(({ title, imageFilename, youtube }) => ({
                source: edges.find(
                  ({ node }: { node: { name: string; extension: string } }) =>
                    `${node.name}.${node.extension}` === imageFilename
                ).node.childImageSharp.fluid.src,
                caption: (
                  <div>
                    <Styled.p className="text-lg">{title}</Styled.p>
                    {youtube ? <Styled.a href={youtube}>YouTube</Styled.a> : null}
                  </div>
                ),
              }))}
            />
          </Modal>
        ) : null}
      </ModalGateway>
    </div>
  )
}

export default ProjectList
