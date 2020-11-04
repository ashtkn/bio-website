/** @jsx jsx */
import React from 'react'
import { jsx } from 'theme-ui'
import Projects from './projects'
import ProjectCard from './project-card'
import projects from '../../contents/projects'
import useWorkImages from '../../hooks/use-work-images'

const ProjectList: React.FC<{ offset: number; factor: number }> = ({ offset, factor }) => {
  const images = useWorkImages()

  return (
    <div>
      <Projects offset={offset} factor={factor}>
        {projects.map(({ key, filename, title, bg, href }) => {
          const image = images.find((i) => i.filename === filename)?.fluid
          if (!image) {
            return null
          }
          const { base64, aspectRatio, src, srcSet, sizes } = image
          return (
            <ProjectCard
              key={key}
              image={{ base64: base64 || undefined, aspectRatio, src, srcSet, sizes }}
              title={title}
              href={href}
              bg={bg}
            />
          )
        })}
      </Projects>
    </div>
  )
}

export default ProjectList
