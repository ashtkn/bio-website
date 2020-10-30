/** @jsx jsx */
import { jsx, Styled } from 'theme-ui'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { snsAccounts } from '../../contents'

const ContactIcons: React.FC = () => (
  <div
    sx={{
      a: { color: `text`, fontSize: 4, mr: 2 },
    }}
  >
    {snsAccounts.map(({ key, href, icon }) => (
      <Styled.a key={key} href={href}>
        <FontAwesomeIcon icon={icon} />
      </Styled.a>
    ))}
  </div>
)

export default ContactIcons
