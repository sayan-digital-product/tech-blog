
import { Inter } from 'next/font/google'

import { homeData, newsByte, latestByte } from '@santech/core/config/home.config';
import style from '@santech/styles/home.module.css'
import DisplayCard from '@santech/components/display-card/display-card';
import { Parallax, ParallaxProvider } from 'react-scroll-parallax';
import { DisplayCardModel } from '@santech/core/models/display-card.interface';

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <ParallaxProvider>
        <section>
          <Parallax
          scale={[.90, 1]}
          easing="easeInQuad">
              <section className={`grid grid-cols-12 gap-8 m-4 ${style.profileContainer} ${style.homeBackground}`}>
                <div className="col-span-8 grid grid-rows-1 gap-4">
                  <>
                    <DisplayCard data={homeData} />
                  </>
                  {/* <div className="grid-rows-1 border border-solid border-pegasus-200"></div> */}
                </div>
                <div className="col-span-4 grid gap-4">
                  { newsByte && newsByte.map((item: any, index: number) => {
                    return (<DisplayCard key={`news_ ${index}`} data={item} />)
                  })}
                </div>
              </section>
          </Parallax>
        </section>
        <section className='bg-turqDark-500'>
          <Parallax
          scale={[0.80, 1]}
          easing="easeInQuad"
          >
              <section className={`grid grid-cols-12 gap-8 p-8 ${style.profileContainer} ${style.homeBackground}`}>
                <div className="col-span-12 grid gap-4">
                  <section className='col-span-12 pl-4 grid justify-center'>
                    <span className='p-8 text-6xl contrast-plain-text'>Latest Stories</span>
                  </section>
                  <section className={`grid col-span-12 grid-cols-3 gap-4 ${style.containerSection}`}>
                      {latestByte && latestByte.map((item: DisplayCardModel, index: number) => {
                          return (<DisplayCard data={item} key={`latest_ ${index}`} />)
                      })}
                  </section >
                </div>
              </section>
          </Parallax>
        </section>
        <section className='bg-mauveDark-100'>
          <Parallax
          scale={[.80, 1]}
          easing="easeInQuad"
          >
              <section className={`grid grid-cols-12 gap-8 p-8 ${style.profileContainer} ${style.homeBackground}`}>
                <div className="col-span-12 grid gap-4">
                  <section className='col-span-12 pl-4 grid justify-center'>
                    <span className='p-8 text-6xl secondary'>Top stories</span>
                  </section>
                  <section className={`grid col-span-12 grid-cols-3 gap-4 ${style.containerSection}`}>
                      {latestByte && latestByte.map((item: DisplayCardModel, index: number) => {
                          return <DisplayCard data={item} key={`top_ ${index}`} />
                      })}
                  </section>
                </div>
              </section>
          </Parallax>
        </section>
        <section className='bg-mintDark-400'>
          <Parallax
          scale={[.80, 1]}
          easing="easeInQuad"
          >
              <section className={`grid grid-cols-12 gap-8 p-8 ${style.profileContainer} ${style.homeBackground}`}>
                <div className="col-span-12 grid gap-4">
                  <section className='col-span-12 pl-4 grid justify-center'>
                    <span className='p-8 text-6xl contrast-plain-text'>Top Gadgets</span>
                  </section>
                  <section className={`grid col-span-12 grid-cols-3 gap-4 ${style.containerSection}`}>
                      {latestByte && latestByte.map((item: DisplayCardModel, index: number) => {
                          return <DisplayCard data={item} key={`gadgets_ ${index}`} />
                      })}
                  </section>
                </div>
              </section>
          </Parallax>
        </section>
      </ParallaxProvider>
    </>
  )
}
