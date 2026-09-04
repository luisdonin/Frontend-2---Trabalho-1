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
import  oasisBig  from './assets/Oasis_Homepage_1.webp';
import moreStack from './assets/more_stack.webp';
import './components/Reviews';
import {Reviews} from './components/Reviews';
import { BigImage } from './components/BigImage';
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
    <Subtitle highlighted={'PRAISE FOR OUR GAMES...'} paragraph={' '}></Subtitle> 
    
    <div className="container py-5">
      <div className="row g-0 border-top border-bottom border-secondary py-4">
        <Reviews 
          review="Even those in my life who do not share my appreciation for board games enjoy playing this one." 
          costumerName="Joe Mcguire" 
          profileType="BGG User"/>
        <Reviews 
          review="Beautiful design and simple engaging gameplay. Just enough mischief and irreverence to make it fun again and again." 
          costumerName="Silent Charlie" 
          profileType="BGG User"/>
        <Reviews 
          review="Really great 2 player game. Lots of depth and strategies and multiple ways to win." 
          costumerName="Patrick Brown" 
          profileType="BGG User" 
          isLast={true}/>
      </div>
    </div>
    <BigImage url={oasisBig}></BigImage>
    
    </>

  )
}

export default App
