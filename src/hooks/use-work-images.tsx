import { graphql, useStaticQuery } from 'gatsby'

const useWorkImages = (): any => {
  const data = useStaticQuery(graphql`
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
  return data.allFile.edges
}
export default useWorkImages
