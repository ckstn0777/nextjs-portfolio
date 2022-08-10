import { css } from '@emotion/react'
import type { NextPage } from 'next'
import Link from 'next/link'
import Introduce from '../components/Introduce'
import { mixins } from '../lib/mixins'

import data from '../data.json'
import Title from '../components/Title'
import ProjectCard from '../components/ProjectCard'

const { name_EN, home, projects } = data

const Home: NextPage = () => {
  return (
    <section css={sectionWrapper}>
      <Introduce name_EN={name_EN} subTitle={home.subtitles} />

      <article>
        <Title title="About Me" />
        <div style={{ paddingBottom: '30rem' }}>
          <p>나는 현재 어디서 일하고 있습니다. 무엇에 관심있고 주저리주저리</p>
        </div>
      </article>

      <article>
        <Title title="My recent works" />
        <div css={projectCardWrapper}>
          <ProjectCard projects={projects.recentProject} />
        </div>
        <button>Show More</button>
      </article>

      <div className="py-16">What I have & Interests</div>
      <div className="py-16">Made this website as following</div>
    </section>
  )
}

const sectionWrapper = css`
  position: relative;
  z-index: 2;

  width: 60vw;
  padding-top: 12rem;
  margin: 0 auto;
  background: white;

  & > * {
    padding: 6rem 0;
  }

  ${mixins.mediaQuery.large} {
    width: 70vw;
  }
  ${mixins.mediaQuery.medium} {
    width: 80vw;
  }
`

const projectCardWrapper = css`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 40px;

  & > * {
    flex-basis: 33.3%;
  }
`

export default Home
