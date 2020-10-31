import { faGithub, faYoutube } from '@fortawesome/free-brands-svg-icons'
import { faLink } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { Styled } from 'theme-ui'

type CaptionProps = {
  title: string
  technology: string
  website?: string
  youtube?: string
  github?: string
}

const Caption: React.FC<CaptionProps> = ({ title, website, youtube, github }) => (
  <div>
    <Styled.p className="text-lg">{title}</Styled.p>
    {website ? (
      <Styled.a href={website}>
        <FontAwesomeIcon icon={faLink} />
        {` `}
        <span>Website{`  `}</span>
      </Styled.a>
    ) : null}
    {youtube ? (
      <Styled.a href={youtube}>
        <FontAwesomeIcon icon={faYoutube} />
        {` `}
        <span>YouTube{`  `}</span>
      </Styled.a>
    ) : null}
    {github ? (
      <Styled.a href={github}>
        <FontAwesomeIcon icon={faGithub} />
        {` `}
        <span>GitHub{`  `}</span>
      </Styled.a>
    ) : null}
  </div>
)

export default Caption
