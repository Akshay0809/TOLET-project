import React from 'react';
import Appartment from './Appartment';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Stage } from '@react-three/drei';
import { styled } from 'styled-components';


const Desc = styled.div`
width:200px;
height:70px;
padding:20px;
background-color:white;
border-radius:10px;
position:absolute;
top:200px;
right:100px;

@media only screen and (max-width:768px){
  top:0;
  bottom:0;
  left:0;
  right:0;
  margin: auto;
}



`;

const Flate = () => {
  return (
    <>
<Canvas>

  <Stage environment="city" intensity={0.6}>
  <Appartment/>
 </Stage>
 
  <OrbitControls enableZoom={false}/>


</Canvas>

<Desc>
      we offer you flates for rents and we can make you happy
    </Desc>

    </>
  )
}

export default Flate