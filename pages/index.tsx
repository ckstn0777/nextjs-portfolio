import type { NextPage } from 'next'
import Link from 'next/link'
import data from '../data.json'

const { name, name_EN } = data

const Home: NextPage = () => {
  return (
    <section className="pt-32 2xl:max-w-7xl xl:max-w-5xl lg:max-w-4xl md:max-w-2xl sm:max-w-md max-w-sm mx-auto">
      <div className="flex justify-center max-h-96 py-16">
        <div className="flex-auto p-4 flex flex-col justify-between">
          <h2 className="text-4xl font-bold	tracking-wider leading-10">
            Hi, <br />
            I&apos;m <span style={{ color: '#007acc' }}>{name_EN}</span>.
          </h2>
          <h3 className="text-2xl">Front-end developer.</h3>
          <div className="flex">
            <Link href={'https://github.com/ckstn0777'}>
              <a className="before:contents-[''] before:w-6 before:h-6 before:bg-[url('/image/github.svg')] before:block text-white bg-black w-28 py-3 px-4 inline-flex rounded-md">
                Github
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

      <div className="py-16">My recent works</div>
      <div className="py-16">What I have & Interests</div>
      <div className="py-16">Made this website as following</div>
    </section>
  )
}

export default Home
