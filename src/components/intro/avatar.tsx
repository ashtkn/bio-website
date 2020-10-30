/** @jsx jsx */
import { jsx } from 'theme-ui'
import Img from 'gatsby-image'
import useAvatarImage from '../../hooks/use-avatar-image'

const Avatar: React.FC = () => {
  const avatarImage = useAvatarImage()
  return (
    <Img
      fluid={avatarImage?.childImageSharp.fluid}
      sx={{
        width: `24rem`,
        maxWidth: `90%`,
        borderRadius: `50%`,
      }}
    />
  )
}

export default Avatar
