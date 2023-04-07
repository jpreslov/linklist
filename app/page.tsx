import Image from 'next/image'
import { Inter } from 'next/font/google'
// import styles from './page.module.css'
import LinkBtn from './(components)/LinkBtn'

import { Noto_Sans } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

const notoSans = Noto_Sans({
  subsets: ['latin'],
  weight: '900'
})

export default function Home() {
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
    <main className='w-screen h-screen flex flex-col bg-indigo-950 justify-center align-middle content-center'>
      {/* <div className='flex flex-col'>
        <h1 className={notoSans.className}>anosmia</h1>
      </div> */}
      {
        links.map((link, id) => {
          return (
            <div key={id} className='flex m-3'>
              <LinkBtn name={link.name} url={link.url} />
            </div>
          )
        })
      }
    </main>
  )
}
