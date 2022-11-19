import { Route, Routes } from "react-router-dom"
import { ThemeProvider } from "styled-components"
import BlogPage from "./components/BlogPage"
import Main from "./components/Main"
import MySkills from "./components/MySkills"
import Projects from "./components/Projects"
import { darkTheme, lightTheme } from "./components/Themes"
import GlobalStyle from "./GlobalStyles"
import "./App.css"
import SoundBar from "./subComponents/SoundBar"
import About from "./components/About"



function App() {



  return <>
     <GlobalStyle/>
   
     <ThemeProvider theme={lightTheme}>
      <SoundBar/>
 
     <Routes>

  <Route path="/" element={<Main/>}></Route>
  <Route path="/projects" element={<Projects/>}></Route>
  <Route path="/skills" element={<MySkills/>}></Route>
  <Route path="/blogs" element={<BlogPage/>}></Route>
  <Route path="/about" element={<About/>}></Route>
     </Routes>
     </ThemeProvider>
  </>
    
}

export default App

