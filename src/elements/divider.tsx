/** @jsx jsx */
import React from 'react'
import { css, jsx } from 'theme-ui'
import { ParallaxLayer } from 'react-spring/renderprops-addons'

type DividerProps = {
  speed: number
  offset: number
  children?: React.ReactNode
  bg?: string
  fill?: string
  clipPath?: string
  className?: string
  factor?: number
}

const Divider: React.FC<DividerProps> = ({ speed, offset, factor, bg, fill, clipPath, children, className }) => (
  <ParallaxLayer
    css={css({
      position: `absolute`,
      width: `full`,
      height: `full`,
      background: bg,
      backgroundColor: bg,
      '#contact-wave': {
        color: fill,
        fill: `currentColor`,
      },
      clipPath,
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

export default Divider
