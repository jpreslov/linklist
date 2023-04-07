import Image from 'next/image'
import { Inter } from 'next/font/google'
// import styles from './page.module.css'
import LinkBtn from './(components)/LinkBtn'

import { Noto_Sans } from 'next/font/google'

import lightFx from '../public/lightleak.jpg'

const inter = Inter({ subsets: ['latin'] })

const notoSans = Noto_Sans({
  subsets: ['latin'],
  weight: '900',
})

export default function Home() {
  const bgImage = () => {

  }

  const links: { name: string, url: string }[] = [
    {
      name: 'Bandcamp',
      url: 'https://anosmia1.bandcamp.com'
    },
    {
      name: 'YouTube',
      url: 'https://youtube.com/@anosmia1'
    },
    {
      name: 'SoundCloud',
      url: 'https://soundcloud.com/an0smia2'
    }
  ]

  return (
    <main
      id='main'
      className='flex flex-col content-center justify-center w-screen h-screen align-middle'
    >
      <span id='shapes'>
        <span id='rhombus'>
          <p id='alien'>
            👾👾👾👾👾👾👾👾👾👾👾👾👾👾👾👾👾👾👾👾👾👾👾👾
          </p>
        </span>
      </span>
      <div className='w-screen inline top-0 fixed h-[6em] text-center'>
        <h1
          className={notoSans.className}
          style={{
            fontSize: '90px',
            letterSpacing: '-11px',
            color: 'white',
            backgroundBlendMode: 'screen'
          }}
        >
          anosmia
        </h1>
      </div>
      <div
        className='flex flex-row h-[70px] justify-center m-5 text-center'
      >
        {/* <p className='text-4xl' style={{ transform: '1s' }}>
          👾
        </p> */}
      </div>
      <div className='flex justify-center align-middle h-1/2'>
        <div className='flex flex-col p-3 justify-center w-3/4 max-w-[700px] rounded-lg backdrop-blur-xl backdrop-brightness-110 border-2 border-opacity-30'>
          {
            links.map((link, id) => {
              return (
                <div key={id} className='flex m-3'>
                  <LinkBtn name={link.name} url={link.url} />
                </div>
              )
            })
          }
        </div>
      </div>
    </main>
  )
}
