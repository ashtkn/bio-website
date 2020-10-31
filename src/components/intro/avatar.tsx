/** @jsx jsx */
import { jsx } from 'theme-ui'
import Img from 'gatsby-image'
import useAvatarImage from '../../hooks/use-avatar-image'

const Avatar: React.FC = () => {
  const image = useAvatarImage()?.fluid
  if (!image) {
    return null
  }

  const { base64, aspectRatio, src, srcSet, sizes } = image
  return (
    <Img
      fluid={{ base64: base64 || undefined, aspectRatio, src, srcSet, sizes }}
      sx={{
        width: `24rem`,
        maxWidth: `90%`,
        borderRadius: `50%`,
      }}
    />
  )
}

export default Avatar
