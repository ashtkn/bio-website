/** @jsx jsx */
import { jsx, Styled } from 'theme-ui'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faTwitter, faFacebook, faInstagram, faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-regular-svg-icons'

const ContactIcons: React.FC = () => (
  <div
    sx={{
      a: { color: `text`, fontSize: 4, mr: 2 },
    }}
  >
    <Styled.a href={`https://twitter.com/ashtkn`}>
      <FontAwesomeIcon icon={faTwitter} />
    </Styled.a>
    <Styled.a href={`https://www.facebook.com/asahi.taken`}>
      <FontAwesomeIcon icon={faFacebook} />
    </Styled.a>
    <Styled.a href={`https://www.instagram.com/ash.take`}>
      <FontAwesomeIcon icon={faInstagram} />
    </Styled.a>
    <Styled.a href={`https://github.com/ashtkn`}>
      <FontAwesomeIcon icon={faGithub} />
    </Styled.a>
    <Styled.a href={`https://www.linkedin.com/in/ashtkn`}>
      <FontAwesomeIcon icon={faLinkedin} />
    </Styled.a>
    <Styled.a href={`mailto:asahi.taken@gmail.com`}>
      <FontAwesomeIcon icon={faEnvelope} />
    </Styled.a>
  </div>
)

export default ContactIcons
