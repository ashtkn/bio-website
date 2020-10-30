/** @jsx jsx */
import { graphql, useStaticQuery } from 'gatsby'
import { jsx } from 'theme-ui'
import Img from 'gatsby-image'

const Avatar: React.FC = () => {
  const data = useStaticQuery(graphql`
    query getAvatarImage {
      avatarImage: file(relativePath: { eq: "avatar.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 384) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
  return (
    <Img
      fluid={data.avatarImage?.childImageSharp.fluid}
      sx={{
        width: `24rem`,
        maxWidth: `90%`,
        borderRadius: `50%`,
      }}
    />
  )
}

export default Avatar
