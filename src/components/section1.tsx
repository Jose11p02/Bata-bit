function Section1() {

  return (
    <>
    <section className="w-full h-[830px] bg-Off_White flex flex-col text-center justify-center" >
    <div>
      <img src="/bitcoin.png" alt="bitcoin" className="w-40 h-40 mb-10 mx-auto self-center" />
      <h2 className="mx-auto text-xl font-bold w-56 " >Visibilizamos todas las tazas de cambio.</h2>
      <p className="mx-auto pt-4 w-60 text-sm text-Grey font-serif "  >Traemos información en tiempo real de las casas de cambio y las monedas más importantes del mundo.</p>
    </div>
    <div className="justify-center mt-8 text-left flex snap-center overflow-x-auto space-x-14 md:mx-auto md:space-x-0" >
      <div className="w-full ml-[340px] mx-auto flex-shrink-0 item-center md:flex-shrink md:w-52 md:ml-0 " >
        <p className="text-Bitcoin_Orange text-left font-bold justify-self-center mr-20 mb-2" >Monedas</p>
        <table className="border-separate mx-auto w-40 h-36 text-Grey ">
        <tbody>
            <tr>
            <td className="border-spacing-2 bg-white rounded-tl-lg" >Bitcoin</td>
            <td className="border-spacing-2 bg-white rounded-tr-lg" >$1.96<span className="pr-[12px] ml-2 bg-no-repeat bg-center bg-[url(/trending-down1.svg)]" ></span></td>
          </tr>
          <tr>
            <td className="border-spacing-2 bg-white " >Ethereum</td>
            <td className="border-spacing-2 bg-white " >$0.07<span className="pr-[12px] ml-2 bg-no-repeat bg-center bg-[url(/trending-up1.svg)]" ></span></td>
          </tr>
          <tr>
            <td className="border-spacing-2 bg-white ">Ripple</td>
            <td className="border-spacing-2 bg-white " >$2.15<span className="pr-[12px] ml-2 bg-no-repeat bg-center bg-[url(/trending-down1.svg)]" ></span></td>
          </tr>
          <tr>
            <td className="border-spacing-2 bg-white rounded-bl-lg" >Stellar</td>
            <td className="border-spacing-2 bg-white rounded-br-lg" >$4.96<span className="pr-[12px] ml-2 bg-no-repeat bg-center bg-[url(/trending-down1.svg)]" ></span></td>
          </tr>
        </tbody>
        </table>
        <p className="bg-Soft_Orange rounded-md w-36 text-left text-[14px] mt-2 mx-auto font-serif" ><b>Actualizado:</b> 19 de julio 23:45</p>
      </div>
      <div className="w-full mx-auto item-center pr-10 md:w-52 md:pr-0 md:mx-0" >
        <p className="text-blue-500 font-bold justify-self-center mr-16 mb-2 " >Comiciones</p>
        <table className="border-separate mx-auto w-40 h-36 text-Grey ">
        <tbody>
            <tr>
            <td className="border-spacing-2 bg-white rounded-tl-lg" >Bitcoin</td>
            <td className="border-spacing-2 bg-white rounded-tr-lg" >$1.96<span></span></td>
          </tr>
          <tr>
            <td className="border-spacing-2 bg-white " >Ethereum</td>
            <td className="border-spacing-2 bg-white " >$0.07<span></span></td>
          </tr>
          <tr>
            <td className="border-spacing-2 bg-white ">Ripple</td>
            <td className="border-spacing-2 bg-white " >$2.15<span></span></td>
          </tr>
          <tr>
            <td className="border-spacing-2 bg-white rounded-bl-lg" >Stellar</td>
            <td className="border-spacing-2 bg-white rounded-br-lg" >$4.96<span></span></td>
          </tr>
        </tbody>
        </table>
        <p className="bg-blue-100 rounded-md w-36 text-left text-[14px] mt-2 mx-auto font-serif" ><b>Actualizado:</b> 19 de julio 23:45</p>
      </div>
    </div>
    </section>
    </>
  )
}

export default Section1