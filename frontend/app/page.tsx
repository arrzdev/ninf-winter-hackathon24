import React from 'react'
import FolhetosCard from "@/lib/components/folhetos-card"

const Home = () => {
  const folhetos = [
    {
      name: 'aldi',
      url: 'https://folhetos.aldi.pt/2024/s07/semana-especial-mediterraneo-14-2-a-terca-20-2/?HideStandardUI=true&HideNavigationBars=true'
    },
    {
      name: 'pingo-doce',
      url: 'https://folhetos.pingodoce.pt/2024/poupe-esta-semana/continental-lojas-grandes/S07/'
    },
    {
      name: "lidl",
      url: 'https://www.lidl.pt/l/pt/folhetos/promocoes-a-partir-de-15-02/view/flyer/page/1?lf=HHZ'
    },  
    {
      name: 'continente',
      url: 'https://folhetos.continente.pt/2024/02/semanal-7-tr09/'
    },
    {
      name: "minipreco",
      url: "https://online.fliphtml5.com/kixbw/xeab/#p=1"
    },
    {
      name: "auchan",
      url: 'https://folhetos.auchan.pt/Catalogos/lisboa/16052?origin=auchan&integration=auchan'
    },
    {
      name: "el-corte-ingles",
      url: "https://catalogos.elcorteingles.pt/ElCorteIngles/supermercado/2024/02/9-folheto-supermercado/"
    }
  ]

  return (
    <div className='relative p-6'>
      <h1 className="text-5xl font-bold leading-tight md:text-6xl lg:text-8xl 9xl:text-5xl 9xl:leading-none mt-5 text-center">Bem-Vindo, <span className='text-[#AFBE8F]'>João</span>!</h1>
      <div className="pb-24 pt-8 space-y-8  ">
        <div className="pt-4">
          <h1 className="text-3xl font-bold leading-tight md:text-4xl lg:text-6xl 9xl:text-5xl 9xl:leading-none">
            Folhetos da semana
          </h1>
          <div className="pt-2">
            <FolhetosCard folhetos={folhetos}/>
          </div>
        </div>
        <div className="pt-4">
          <h1 className="text-3xl font-bold leading-tight md:text-4xl lg:text-6xl 9xl:text-5xl 9xl:leading-none">
            As tuas estatísticas
          </h1>
          <div className='pt-2'>
            <div className="bg-white rounded-t-md p-4 items-center border-solid border-2 border-[#AFBE8F] border-b-0">
              <div className="flex text-left">
                <div className="flex grow flex-row justify-between items-center">
                  <p className="text-xl font-bold tracking-tight leading-tight">Este mês gastou</p>
                  <p className="text-2xl font-bold tracking-tight leading-tight">302,50€</p>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-b-md p-4 items-center border-solid border-2 border-[#AFBE8F] ">
              <div className="flex text-left">
                <div className="flex grow flex-row justify-between items-center">
                  <p className="text-xl font-bold tracking-tight leading-tight">Este mês poupou</p>
                  <p className="text-2xl font-bold tracking-tight leading-tight">47,91€</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <div className="bg-[#AFBE8F]">
        <h2 className="text-3xl font-bold tracking-tight leading-tight md:text-4xl lg:text-3xl 9xl:text-5xl 9xl:leading-none mt-5">O que deseja fazer hoje?</h2>
      </div> */}
    </div>
  )
}

export default Home