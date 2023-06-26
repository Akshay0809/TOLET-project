
import styled from "styled-components"
import Hero from "./components/hero"
import Who from "./components/who"
import Work from "./components/work"
import Contact from "./components/contact"
import Test from "./components/Test"


const Container = styled.div`
   height:100vh;
   scroll-snap-type: y mandatory;
   scroll-behavior: smooth;
   overflow-y:auto;
   scrollbar-width:none;
   color:white;
  
   &::-webkit-scrollbar{
    display:none;
   }
`;




function App() {

  return (
    <Container>
      <Hero/>
      <Who/> 
      <Work/> 
      <Contact/> 
     
  

    </Container>
  )
}

export default App
