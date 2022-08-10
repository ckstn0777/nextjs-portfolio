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
          {projects.recentProject.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>
        <div css={showMoreBtnWrapper}>
          <button>Show More</button>
        </div>
      </article>

      <article style={{ paddingBottom: '30rem' }}>
        <Title title="What I have & Interests" />
      </article>
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
    padding: 6.5rem 0;
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

  margin-bottom: 8rem;

  & > * {
    flex-basis: 33.3%;
  }

  ${mixins.mediaQuery.small} {
    flex-wrap: wrap;
    gap: 40px;

    & > * {
      flex-basis: 42%;
    }
  }

  ${mixins.mediaQuery.xsmall} {
    justify-content: center;
    flex-wrap: wrap;
    gap: 50px;

    & > * {
      flex-basis: 80%;
    }
  }
`

const showMoreBtnWrapper = css`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 100%;

  & > button {
    padding: 1.45rem 1.75rem;
    font-size: 0.9em;
    font-weight: 600;
    outline: none;
    background-color: white;
    border: 3px solid #007acc;
    border-radius: 4px;
    color: #007acc;

    cursor: pointer;
  }
`

export default Home
