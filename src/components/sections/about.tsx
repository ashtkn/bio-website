/** @jsx jsx */
import { jsx, Styled } from 'theme-ui'
import Divider from '../../elements/divider'
import Inner from '../../elements/inner'
import Content from '../../elements/content'
import SVG from '../svg'
import { UpDown, UpDownWide } from '../../styles/animations'
// @ts-ignore
// import AboutMDX from '../../contents/about'

const About: React.FC<{ offset: number; factor: number }> = ({ offset, factor }) => (
  <div>
    <Divider
      bg="divider"
      clipPath="polygon(0 16%, 100% 4%, 100% 82%, 0 94%)"
      speed={0.2}
      offset={offset}
      factor={factor}
    />
    <Divider speed={0.1} offset={offset} factor={factor}>
      <UpDown>
        <SVG icon="box" hiddenMobile width={6} color="icon_blue" left="50%" top="75%" />
        <SVG icon="upDown" hiddenMobile width={8} color="icon_darkest" left="70%" top="20%" />
        <SVG icon="triangle" width={8} stroke color="icon_darkest" left="25%" top="5%" />
        <SVG icon="upDown" hiddenMobile width={24} color="icon_orange" left="80%" top="80%" />
      </UpDown>
      <UpDownWide>
        <SVG icon="arrowUp" hiddenMobile width={16} color="icon_purple" left="5%" top="80%" />
        <SVG icon="triangle" width={12} stroke color="icon_brightest" left="95%" top="50%" />
        <SVG icon="circle" hiddenMobile width={6} color="icon_brightest" left="85%" top="15%" />
        <SVG icon="upDown" hiddenMobile width={8} color="icon_darkest" left="45%" top="10%" />
      </UpDownWide>
      <SVG icon="circle" hiddenMobile width={6} color="icon_brightest" left="4%" top="20%" />
      <SVG icon="circle" width={12} color="icon_darkest" left="70%" top="60%" />
      <SVG icon="box" width={6} color="icon_orange" left="10%" top="10%" />
      <SVG icon="box" width={12} color="icon_darkest" left="20%" top="30%" />
      <SVG icon="hexa" width={8} stroke color="icon_darkest" left="80%" top="70%" />
    </Divider>
    <Content speed={0.4} offset={offset} factor={factor}>
      <Inner>
        {/* <AboutMDX /> */}
        <Styled.h2>About</Styled.h2>
        <Styled.p>
          Hello, I'm Asahi Takenouchi. I'm a member of <Styled.a href="https://iis-lab.org">IIS-Lab</Styled.a> at the
          University of Tokyo. My research interests lie in Human-Computer-Interaction (HCI). Also I'm a master student
          at the Graduate School of Interdisciplinary Information Studies (
          <Styled.a href="http://www.iii.u-tokyo.ac.jp/">GSII</Styled.a>).
        </Styled.p>
        <Styled.p>
          I'm a Software Developer experienced in a lot of technologies such as web (e.g., JavaScript (ES6+),
          TypeScript, Node.js, Gatsby, React, and Vue), mobile apps (e.g., Swift), games (e.g., C# and Unity),
          microcomputers (e.g., Arduino, Raspberry Pi) and other technologies (e.g., Git, Shell, Python). I have created
          many awesome works; You will see them next!!
        </Styled.p>
        <Styled.p>
          I like walking, cycling, driving, travelling and taking photos. I like vehicles such as cars, trains, and
          airplanes. Also I love going to concerts and watching Japanese animation works!!
        </Styled.p>
      </Inner>
    </Content>
  </div>
)

export default About
