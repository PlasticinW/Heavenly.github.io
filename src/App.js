import React from 'react'
import HeaderTop from "./components/HeaderTop"
import Header from "./components/Header"
import AboutMe from "./components/AboutMeSection"
import SkillsSection from './components/SkillsSection.js'
import InterestsSection from './components/InterestsSection.js'
import ContactMeSection from './components/ContactMeSection.js'
import Footer from './components/Footer.js'


class App extends React.Component {
  render() {
    return (
      <div className="App">
        <HeaderTop/>
        <Header/>
        <AboutMe/>
        <SkillsSection/>
        <InterestsSection/>
        <ContactMeSection/>
        <Footer/>
      </div>
    );
  }
}

export default App;
