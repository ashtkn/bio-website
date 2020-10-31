import { graphql, useStaticQuery } from 'gatsby'
import { GetAvatarImageQuery } from '../../graphql-types'

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
const useAvatarImage = () => {
  const data = useStaticQuery<GetAvatarImageQuery>(graphql`
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
  return data.avatarImage?.childImageSharp
}

export default useAvatarImage
