import { graphql, useStaticQuery } from 'gatsby'

const useAvatarImage = (): any => {
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
  return data.avatarImage
}

export default useAvatarImage
