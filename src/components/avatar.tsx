/** @jsx jsx */
import { graphql, useStaticQuery } from 'gatsby'
import { jsx } from 'theme-ui'
import Img from 'gatsby-image'

const Avatar: React.FC = () => {
  const data = useStaticQuery(graphql`
    query getAvatarImage {
      avatarImage: file(relativePath: { eq: "avatar.jpg" }) {
        childImageSharp {
          fixed(width: 384, height: 384) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `)
  return (
    <Img
      fixed={data.avatarImage?.childImageSharp.fixed}
      sx={{
        maxWidth: `100%`,
        borderRadius: `50%`,
      }}
    />
  )
}

export default Avatar
