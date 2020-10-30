/** @jsx jsx */
import { jsx, Styled } from 'theme-ui'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faTwitter, faFacebook, faInstagram, faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-regular-svg-icons'

const ContactIcons: React.FC = () => {
  // Load necessary icons
  library.add(faTwitter)
  library.add(faFacebook)
  library.add(faInstagram)
  library.add(faGithub)
  library.add(faLinkedin)
  library.add(faEnvelope)

  return (
    <div
      sx={{
        a: { color: `text`, fontSize: 4, mr: 2 },
      }}
    >
      <Styled.a href={`https://twitter.com/ashtkn`}>
        <FontAwesomeIcon icon={[`fab`, `twitter`]} />
      </Styled.a>
      <Styled.a href={`https://www.facebook.com/asahi.taken`}>
        <FontAwesomeIcon icon={[`fab`, `facebook`]} />
      </Styled.a>
      <Styled.a href={`https://www.instagram.com/ash.take`}>
        <FontAwesomeIcon icon={[`fab`, `instagram`]} />
      </Styled.a>
      <Styled.a href={`https://github.com/ashtkn`}>
        <FontAwesomeIcon icon={[`fab`, `github`]} />
      </Styled.a>
      <Styled.a href={`https://www.linkedin.com/in/ashtkn`}>
        <FontAwesomeIcon icon={[`fab`, `linkedin`]} />
      </Styled.a>
      <Styled.a href={`mailto:asahi.taken@gmail.com`}>
        <FontAwesomeIcon icon={[`far`, `envelope`]} />
      </Styled.a>
    </div>
  )
}

export default ContactIcons
