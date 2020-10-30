import React from 'react'
import { css } from 'theme-ui'
import { ParallaxLayer } from 'react-spring/renderprops-addons'

type ContentProps = {
  speed: number
  offset: number
  children?: React.ReactNode
  className?: string
  factor?: number
}

const Content: React.FC<ContentProps> = ({ speed, offset, children, className, factor }) => (
  <ParallaxLayer
    css={css({
      padding: [3, 4, 4, 5],
      display: `flex`,
      flexDirection: `column`,
      alignItems: `center`,
      justifyContent: `center`,
      zIndex: 50,
    })}
    speed={speed}
    offset={offset}
    factor={factor || 1}
    // @ts-ignore
    className={className}
  >
    {children}
  </ParallaxLayer>
)

export default Content
