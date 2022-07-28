import type { NextPage } from 'next'
import Link from 'next/link'
import ReactTyped from 'react-typed'
import Button from '../components/Button'
import data from '../data.json'

const { name, name_EN, home } = data

const Home: NextPage = () => {
  return (
    <section className="pt-32 2xl:max-w-7xl xl:max-w-5xl lg:max-w-4xl md:max-w-2xl sm:max-w-md max-w-sm mx-auto">
      <Button text="가나다" />
      <div className="flex justify-center max-h-96 py-16">
        <div className="flex-auto py-4 flex flex-col justify-between">
          <h2 className="text-4xl font-bold	tracking-wider leading-10">
            Hello, <br />
            I&apos;m <span style={{ color: '#007acc' }}>{name_EN}</span>.
          </h2>
          <h3 className="text-2xl">
            <ReactTyped
              strings={home.subtitles}
              typeSpeed={40}
              backSpeed={50}
              loop
            />
          </h3>
          <div className="flex">
            <Link href={'https://github.com/ckstn0777'}>
              <a
                className="before:contents-[''] before:w-6 before:h-6 before:bg-[url('/image/github.svg')] before:block 
                basis-1/4 text-white bg-black w-28 py-3 px-4 mr-3 inline-flex items-center justify-around rounded-md"
              >
                Github
              </a>
            </Link>
            <Link href={'https://velog.io/@ckstn0777'}>
              <a
                className="before:contents-[''] before:w-6 before:h-6 before:bg-[url('/image/velog.svg')] before:block 
                basis-1/4 text-white bg-velog w-28 py-3 px-4 mr-3 inline-flex items-center justify-around rounded-md"
              >
                Velog
              </a>
            </Link>
            <Link
              href={
                'https://ckstn0777.notion.site/Home-4bf10a0a0e2c4b0994adfec7ccb38053'
              }
            >
              <a
                className="before:contents-[''] before:w-6 before:h-6 before:bg-[url('/image/notion.svg')] before:block 
                basis-1/4 text-black bg-white w-28 border-2 border-black py-3 px-4 inline-flex items-center justify-around rounded-md"
              >
                Notion
              </a>
            </Link>
          </div>
        </div>
        <img
          src="developer.svg"
          alt="developer image"
          className="hidden md:inline flex-auto w-80"
        />
      </div>

      <div className="py-16">About Me</div>
      <div className="py-16">My recent works</div>
      <div className="py-16">What I have & Interests</div>
      <div className="py-16">Made this website as following</div>
    </section>
  )
}

export default Home
