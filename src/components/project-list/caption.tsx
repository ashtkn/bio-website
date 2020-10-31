import { faYoutube } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { Styled } from 'theme-ui'

type CaptionProps = {
  title: string
  technology: string
  youtube?: string
}

const Caption: React.FC<CaptionProps> = ({ title, youtube }) => (
  <div>
    <Styled.p className="text-lg">{title}</Styled.p>
    {youtube ? (
      <Styled.a href={youtube}>
        <FontAwesomeIcon icon={faYoutube} />
        {` `}
        <span>YouTube</span>
      </Styled.a>
    ) : null}
  </div>
)

export default Caption
