
function Header() {

  const header_styles = "w-full h-64 bg-gradient-to-tr from-Bitcoin_Orange to-Warm_Black flex flex-col text-center justify-center"

  return (
    <>
    <header className={header_styles} >
      <img src="/Group 19.svg" alt="logo" className="mx-auto pb-6"/>
      <div className="relative text-Just_White self-center " >
        <h1 className="mx-auto text-xl font-bold w-56 " >La próxima revolución en el intercambio de criptomonedas.</h1>
        <p className="mx-auto pt-4 w-56 text-sm" >Batatabit te ayuda a navegar entre los diferentes precios y tendencias.</p>
        <a href="" className="text-sm absolute inset-x-0 top-40 shadow-lg font-bold bg-Off_White text-Warm_Black p-2" >Conoce nuestros planes <span className="ml-1 bg-[url(/mdi_keyboard_arrow_down.svg)] pl-4" ></span></a>
      </div>
    </header>
    </>
  )
}

export default Header