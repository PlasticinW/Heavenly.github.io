import React from 'react'
import isMobile from 'react-device-detect'
import HeaderTop from "./components/HeaderTop"
import HeaderCenter from "./components/HeaderCenter"
import AboutMe from "./components/AboutMeSection"
import SkillsSection from './components/SkillsSection.js'
import MobileSkillsSection from './components/MobileSkillsSection.js'
import InterestsSection from './components/InterestsSection.js'
import ContactMeSection from './components/ContactMeSection.js'
import Footer from './components/Footer.js'


class App extends React.Component {
  render() {
    return (
      <div className="App">
        <HeaderTop/>
        <HeaderCenter/>
        <AboutMe/>
        {/iPhone|iPad|iPod|Android/i.test(navigator.userAgent) ? <SkillsSection/> : <MobileSkillsSection/>}
        <InterestsSection/>
        <ContactMeSection/>
        <Footer/>
      </div>
    );
  }
}

export default App;
