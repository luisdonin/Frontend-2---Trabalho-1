import { useState } from 'react'

import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import {Navbar} from './components/Navbar';
import { Subtitle } from './components/Subtitle'
import { Product } from './components/Product'
import { ProductSmall } from './components/ProductSmall'
import heroImg from './assets/YoungJerks1970.webp';
import fruitBoss from './assets/FruitBoss_Web_8_hero.webp';
import handTile from './assets/HandTile_Retail_jpg.webp';
import { Logo } from './components/Logo';
import  oasis  from './assets/Oasis_Press_2.webp';
import moreStack from './assets/more_stack.webp';
function App() {
  return (
    <>
      <Navbar title={'Weast Coast'}/>
      <Logo></Logo>
      <div className="product-grid-container">
        <Subtitle highlighted={'Weast Coast'} paragraph={'makes beautiful games with a focus on immersive art, high-end components, and approachable gameplay.'}></Subtitle>
        <Product productSubtitle={'Card Combos and Chaos!'} productTitle={'LONERS'} bgImage={heroImg} ></Product>
        <Product productSubtitle={'Get The Fruit'} productTitle={'FRUIT BOSS'} bgImage={fruitBoss} ></Product>
        <Product productSubtitle={'Play A Friend, Make An Enemy'} productTitle={'SNAKE OF WRATH'} bgImage={handTile} ></Product>
        <Product productSubtitle={"Do You Have What It Takes? I don't."} productTitle={'DESPERATE OASIS'} bgImage={oasis} ></Product>  
    </div>
    <Subtitle highlighted={'SHOP ALL PRODUCTS'} paragraph={' '}></Subtitle>
    <div className="product-container">
      
      <ProductSmall productSubtitle={'Tactical Tile-Laying Game'} productTitle={'SNAKE OF WRATH'} bgImage={handTile} ></ProductSmall>
      <ProductSmall productSubtitle={"Desert Dueling Card Game"} productTitle={'DESPERATE OASIS'} bgImage={oasis} ></ProductSmall>  
      <ProductSmall productSubtitle={'Stackable Set Collection.'} productTitle={'FRUIT BOSS'} bgImage={fruitBoss} ></ProductSmall>
      <ProductSmall productSubtitle={"All Three Card Games!"} productTitle={'CARDS PACK'} bgImage={moreStack} ></ProductSmall>  

    </div>
    </>

  )
}

export default App
