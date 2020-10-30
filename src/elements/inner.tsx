/** @jsx jsx */
import React from 'react'
import { jsx } from 'theme-ui'

type InnerProps = {
  className?: string
  children: React.ReactNode
}

const Inner: React.FC<InnerProps> = ({ className = ``, children }) => (
  <div sx={{ width: [`full`, `full`, `full`, `full`, `full`, `2/3`], textAlign: `left` }} className={className}>
    {children}
  </div>
)

export default Inner
