function Section4() {

  return (
    <>
    <section className="bg-Just_White w-full h-auto mx-auto mb-8 flex flex-col justify-center relative overflow-visible" >
      <div className="mt-12 text-center" >
        <h2 className="text-xl font-bold" >Escoge el plan que mejor se ajuste a ti.</h2>
        <p className="text-xs text-Grey pt-4 px-2 " >Cualquier plan te da acceso completo a nuestra plataforma.</p>
      </div>
      <div className="text-center mt-6 ml-10 mr-10 py-10 flex flex-shrink-0 overflow-x-auto space-x-4 md:justify-center" >
        <article className="relative">
          <p className="bg-Bitcoin_Orange text-xs font-bold text-Just_White h-6 w-24 p-1 justify-self-center rounded-lg absolute -top-4 left-1/2 -translate-x-1/2 z-10 shadow-md" >Recomendado</p>
          <div className="bg-white shadow-md w-44 h-52 mx-auto rounded-lg " >
            <h3 className="pt-8 text-xs font-bold pb-2">Pago Anual</h3>
            <p className="font-bold text-5xl" ><sub className="text-sm align-top" >$</sub>99</p>
            <p className="text-Grey text-xs pt-2" >*Ahorras $129 comparado al plan mensual.</p>
            <button className="border-Bitcoin_Orange border-2 mt-2 px-8 py-2 text-xs font-bold" >Escoge este</button>
          </div>
        </article>
        <article>
          <div className="bg-white shadow-md w-44 h-52 mx-auto rounded-lg " >
            <h3 className="pt-8 text-xs font-bold pb-2">Pago Anual</h3>
            <p className="font-bold text-5xl" ><sub className="text-sm align-top" >$</sub>99</p>
            <p className="text-Grey text-xs pt-2" >*Ahorras $129 comparado al plan mensual.</p>
            <button className="border-Bitcoin_Orange border-2 mt-2 px-8 py-2 text-xs font-bold" >Escoge este</button>
          </div>
        </article>
        <article>
          <div className="bg-white shadow-md w-44 h-52 mx-auto rounded-lg " >
            <h3 className="pt-8 text-xs font-bold pb-2">Pago Anual</h3>
            <p className="font-bold text-5xl" ><sub className="text-sm align-top" >$</sub>99</p>
            <p className="text-Grey text-xs pt-2" >*Ahorras $129 comparado al plan mensual.</p>
            <button className="border-Bitcoin_Orange border-2 mt-2 px-8 py-2 text-xs font-bold" >Escoge este</button>
          </div>
        </article>
      </div>
    </section>
    </>
  )
}

export default Section4