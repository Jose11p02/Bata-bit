import './App.css'
import Footer from './components/footer'
import Header from './components/header'
import Main from './components/main'
//import { animate, createScope, createSpring, createDraggable } from 'animejs';
//import { useEffect, useRef, useState } from 'react';



function App() {

    /*const root = useRef(null);
    const scope = useRef<any>(null);

     useEffect(() => {
  
    scope.current = createScope({ root }).add( self => {
    
      // Every anime.js instances declared here are now scopped to <div ref={root}>

      // Created a bounce animation loop
      animate('.logo', {
        scale: [
          { to: 1.25, ease: 'inOut(3)', duration: 200 },
          { to: 1, ease: createSpring({ stiffness: 300 }) }
        ],
        loop: true,
        loopDelay: 250,
      });
          
       // Properly cleanup all anime.js instances declared inside the scope
    return () => scope.current.revert()*/


  return (
    <>
    <Header/>
    <Main/>
    <Footer/>
    </>
  )
}

export default App
