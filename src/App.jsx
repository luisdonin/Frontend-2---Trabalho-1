import { useState } from 'react'

import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import {Navbar} from './components/Navbar';
import { Subtitle } from './components/Subtitle'
import { Product } from './components/Product'
import heroImg from './assets/YoungJerks1970.webp';
import fruitBoss from './assets/FruitBoss_Web_8_hero.webp';
import handTile from './assets/HandTile_Retail_jpg.webp';
import { Logo } from './components/Logo';
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar title={'Weast Coast'}/>
      <Logo></Logo>
      <Subtitle highlighted={'Weast Coast'} paragraph={'makes beautiful games with a focus on immersive art, high-end components, and approachable gameplay.'}></Subtitle>
      <Product productSubtitle={'Card Combos and Chaos!'} productTitle={'LONERS'} bgImage={heroImg} ></Product>
      <Product productSubtitle={'Get The Fruit'} productTitle={'FRUIT BOSS'} bgImage={fruitBoss} ></Product>
      <Product productSubtitle={'Play A Friend, Make An Enemy'} productTitle={'SNAKE OF WRATH'} bgImage={handTile} ></Product>   
    </>

  )
}

export default App
