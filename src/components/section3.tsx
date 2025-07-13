import { animate, createScope,Scope } from 'animejs';
import { useEffect, useRef } from 'react';

function Section3() {
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


  return (
    <>
    <section ref={root} className="opacity-0 bg-[url('/bitcoinbaby.png')] bg-no-repeat bg-cover bg-center  w-auto h-[387px] mx-auto " >
      <h2 className="text-Just_White text-xl font-bold flex flex-col justify-self-center pt-12 " >Conócelo hoy.</h2>
    </section>
    </>
  )
}

export default Section3