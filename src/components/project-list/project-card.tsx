/** @jsx jsx */
import React from 'react'
import { jsx } from 'theme-ui'
import Img, { FluidObject } from 'gatsby-image'

type ProjectCardProps = {
  image: FluidObject | FluidObject[]
  title: string
  href?: string
  children?: React.ReactNode
  bg: string
}

const ProjectCard: React.FC<ProjectCardProps> = ({ image, title, href, children, bg }) => (
  <a
    href={href}
    target="_blank"
    rel="noreferrer noopener"
    sx={{
      width: `100%`,
      boxShadow: `lg`,
      position: `relative`,
      textDecoration: `none`,
      borderRadius: `lg`,
      px: 4,
      py: [4, 5],
      color: `white`,
      background: bg || `none`,
      transition: `all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275) !important`,
      '&:hover': {
        color: `white !important`,
        transform: `translateY(-5px)`,
        boxShadow: `xl`,
      },
    }}
  >
    <Img
      fluid={image}
      sx={{
        maxWidth: `100%`,
      }}
    />
    <div sx={{ opacity: 0.85, textShadow: `0 2px 10px rgba(0, 0, 0, 0.3)` }}>{children}</div>
    <div
      sx={{
        textTransform: `uppercase`,
        letterSpacing: `wide`,
        pt: 4,
        fontSize: [4, 5],
        fontWeight: `medium`,
        lineHeight: 1,
      }}
    >
      {title}
    </div>
  </a>
)

export default ProjectCard
