/** @jsx jsx */
import React from 'react'
import { jsx, Styled } from 'theme-ui'
import Carousel, { Modal, ModalGateway } from 'react-images'
import { graphql, useStaticQuery } from 'gatsby'
import Projects from '../projects'
import ProjectCard from '../project-card'

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

  const projects = [
    {
      key: `exhibition-app`,
      imageFilename: `exhibition-app.jpg`,
      title: `Exhibition App`,
      link: `https://www.youtube.com/watch?v=fe0_cMPLUwc`,
      bg: `linear-gradient(to right, #D4145A 0%, #FBB03B 100%)`,
    },
    {
      key: `heisei-hackathon`,
      imageFilename: `heisei-hackathon.png`,
      title: `HEISEI NO ASHIATO`,
      link: `https://www.youtube.com/watch?v=nDs3hQ6yt30`,
      bg: `linear-gradient(to right, #662D8C 0%, #ED1E79 100%)`,
    },
    {
      key: `mayfes-2018`,
      imageFilename: `mayfes-2018.png`,
      title: `Meteor Crash VR`,
      link: `https://www.youtube.com/watch?v=1tiTpA__cyk`,
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

  const data = useStaticQuery(graphql`
    query getWorkImages {
      allFile(filter: { relativeDirectory: { eq: "works" } }) {
        edges {
          node {
            name
            extension
            childImageSharp {
              fluid {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
  `)

  return (
    <div>
      <Projects offset={offset} factor={factor}>
        {projects.map(({ key, imageFilename, title, bg }, index) => {
          const image = data.allFile.edges.find(({ node }: { node: { name: string; extension: string } }) => {
            console.log(imageFilename)
            return `${node.name}.${node.extension}` === imageFilename
          }).node.childImageSharp.fluid
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
              views={projects.map(({ title, imageFilename, link }) => ({
                source: data.allFile.edges.find(
                  ({ node }: { node: { name: string; extension: string } }) =>
                    `${node.name}.${node.extension}` === imageFilename
                ).node.childImageSharp.fluid.src,
                caption: (
                  <div>
                    <Styled.p className="text-lg">{title}</Styled.p>
                    <Styled.a href={link}>YouTube</Styled.a>
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
