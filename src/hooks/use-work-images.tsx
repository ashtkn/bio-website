import { graphql, useStaticQuery } from 'gatsby'
import { GetWorkImagesQuery } from '../../graphql-types'

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
const useWorkImages = () => {
  const data = useStaticQuery<GetWorkImagesQuery>(graphql`
    query getWorkImages {
      allFile(filter: { relativeDirectory: { eq: "works" } }) {
        edges {
          node {
            name
            extension
            childImageSharp {
              fluid {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
  `)
  return data.allFile.edges.map(({ node }) => {
    const { name, extension, childImageSharp } = node
    return {
      filename: `${name}.${extension}`,
      fluid: childImageSharp?.fluid,
    }
  })
}
export default useWorkImages
