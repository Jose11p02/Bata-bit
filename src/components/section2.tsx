import { animate, createScope,Scope } from 'animejs';
import { useEffect, useRef } from 'react';

function Section2() {

    const root = useRef<HTMLElement|null>(null);
    const scope = useRef<Scope|null>(null);

    useEffect( () => {
      if (!root.current) return;
      if (!scope) return;

      const el = root.current;

      scope.current = createScope({root:el});

      const observe = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            
            animate(el,{
            opacity: [
              {to:1,duration:500,ease:'easeOut'}
            ]
          })
          }
        },
        {
          threshold:0.3
        }
      );

      observe.observe(root.current);
      return () => observe.disconnect()

    /*animate(root.current,{
      opacity: [
        {to:1,duration:500,ease:'easeOut'}
      ]
    })*/

    },[]);


  const div_cards_styles = "mx-auto bg-Warm_Black_plus w-56 p-4 h-auto mt-4 lg:mr-2"
  const p_cards_styles = "text-xs w-52 text-Grey pr-2 "

  return (
    <>
    <section ref={root} className="opacity-0 w-full h-auto relative text-Just_White bg-Warm_Black flex flex-col justify-center mx-auto " >
      <img src="/batata.png" alt="batata" className="w-8 mx-auto absolute inset-x-0 top-[-12px] " />
      <div className="mx-auto text-center mt-12 " >
        <h2 className="font-bold text-xl w-56 " >Creamos un producto sin comparación.</h2>
        <p className="text-sm font-serif text-Grey pt-4 " >Confiable y diseñado para su uso diario.</p>
      </div>
      <div className="mb-8 md:mx-auto md:flex-wrap md:flex md:justify-between" >
        <div className={div_cards_styles} >
        <img src="/public/clock.svg" alt="wacht" className="pb-1" />
          <p className="pb-1" >Tiempo real</p>
          <p className={p_cards_styles} >Nuestro API toma información minuto a minuto sobre las tasas que más determinan el comportamiento.</p>
        </div>
        <div className={div_cards_styles} >
        <img src="/public/eye.svg" alt="eye" className="pb-1" />
          <p className="pb-1" >No hay tasas escondidas</p>
          <p className={p_cards_styles} >Nuestro API toma información minuto a minuto sobre las tasas que más determinan el comportamiento.</p>
        </div>
        <div className={div_cards_styles} >
        <img src="/public/dollar-sign 1.svg" alt="dollar" className="pb-1" />
          <p className="pb-1" >Compra monedas</p>
          <p className={p_cards_styles} >Nuestro API toma información minuto a minuto sobre las tasas que más determinan el comportamiento.</p>
        </div>
        <div className={div_cards_styles} >
        <img src="/public/check-circle.svg" alt="check" className="pb-1" />
          <p className="pb-1" >Información confiable</p>
          <p className={p_cards_styles} >Nuestro API toma información minuto a minuto sobre las tasas que más determinan el comportamiento.</p>
        </div>
      </div>
    </section>
    </>
  )
}

export default Section2