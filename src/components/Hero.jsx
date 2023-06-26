import React, { Suspense } from "react";
import styled from "styled-components";
import Navbar from "./Navbar";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Sphere, MeshDistortMaterial } from "@react-three/drei";





const Section = styled.div`
height:100vh;
background-color:#38608E;
scroll-snap-align:center;
display:flex;
flex-direction:column;
align-items:center;
justify-content:space-between;

@media only screen and (max-width: 768px) {
  height: 200vh;
}

`;


const Container = styled.div`
height:100%;
scroll-snap-align:center;
width:1400px;
display:flex;
justify-content:space-between;

@media only screen and (max-width: 768px) {
  flex-direction:column;
  align-items:center;
  justify-content:center;
  width:100%;

   
}
`;


const Left = styled.div`
flex:2;
display:flex;
flex-direction:column;
justify-content:center;
gap:30px;


@media only screen and (max-width: 768px) {
  flex:1;
  align-items:center;
}

`;

const Title = styled.h1`
font-size:74px;

@media only screen and (max-width: 768px) {
  text-align: center;
}

`;


const WhatWeDo = styled.div`
display:flex;
align-items:center;
gap:20px;

`;


const Line = styled.img`
height:10px;
width:50px

`;


const Subtitle = styled.h2`
color:#252230;

`;


const Desc = styled.p`
font-size:24px;
color:lightgray;

@media only screen and (max-width: 768px) {
  padding:20px;
  text-align:center;
}

`;

const Button = styled.button`
background-color:#da4ea2;
color:white;
font-weight:500;
width:120px;
padding:10px;
border:none;
border-radius:10px;
corsor:pointer;

`;





const Right = styled.div`
flex:3;
position:relative;


@media only screen and (max-width: 768px) {
  flex: 1;
  width: 100%;
}

`;

const Img = styled.img`
width:600px;
height:600px;
object-fit:contain;
position:absolute;
top:0;
buttom:0;
left:0;
right:0;
margin:auto;
animation:animate 2s infinite ease alternate; 

@media only screen and (max-width: 768px) {
  width:400px;
  height:500px;
}


@keyframes animate{
  100%{
    transform:translateY(35px);
  }

}
`;














const Hero = () => {
  return (
    <Section>
      <Navbar/>
      <Container>
        <Left>
          <Title>GET RENTAL HOUSE</Title>
          <WhatWeDo>
            <Line  src="./img/red-line.png" />
            <Subtitle>What We Do</Subtitle>
          </WhatWeDo>
          <Desc>this tolet is never encough to involve bokerage</Desc>
          <Button>Learn More</Button>
        </Left>
        <Right>
         
          
          <Canvas>
            <Suspense fallback={null}>
              <OrbitControls enableZoom={false} />
              <ambientLight intensity={1} />
              <directionalLight position={[4, 3, 2]} />
              <Sphere args={[1, 500, 800]} scale={2.5}>
                <MeshDistortMaterial
                  color="#291C4B"
                  attach="material"
                  distort={0.5}
                  speed={2}
                />

              </Sphere>
              
            </Suspense>
          </Canvas>

         


         <Img src="./img/rentalhouse.webp"/> 

        </Right>
      </Container> 
    </Section>
  );
};

export default Hero