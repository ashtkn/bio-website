import React from 'react'
import { Styled } from 'theme-ui'

type CaptionProps = {
  title: string
  youtube?: string
}

const Caption: React.FC<CaptionProps> = ({ title, youtube }) => (
  <div>
    <Styled.p className="text-lg">{title}</Styled.p>
    {youtube ? <Styled.a href={youtube}>YouTube</Styled.a> : null}
  </div>
)

export default Caption
