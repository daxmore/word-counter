import React from 'react'
import Header from './components/Header'
import InputBox from './InputBox'

const App = () => {
  const HeaderData = {
    link1: "Home",
    link2: "About",
    link3: "Contact",
  }

  const inpBox = {
    heading: "Enter the Text Here",
    toUpper: "Uppercase",
    toLower: "Lowercase",
    clearInput: "Clear"
  }
  return (
    <>
      <Header link1={HeaderData.link1} link2={HeaderData.link2} link3={HeaderData.link3} />
      <InputBox heading={inpBox.heading} btn1={inpBox.toUpper} btn2={inpBox.toLower} btn3={inpBox.clearInput}/>
    </>
  )
}

export default App