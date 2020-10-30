/** @jsx jsx */
import { jsx, Styled } from 'theme-ui'

const Avatar: React.FC = () => {
  // eslint-disable-next-line global-require
  const avatarImage = require(`../images/avatar.jpg`)
  return (
    <Styled.img
      src={avatarImage}
      sx={{
        maxWidth: `100%`,
        borderRadius: `50%`,
      }}
    />
  )
}

export default Avatar
