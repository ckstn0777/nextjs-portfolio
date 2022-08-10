import { css } from '@emotion/react'
import Link from 'next/link'
import Title from '../components/Title'

function Playground() {
  return (
    <div css={playgroundWrapper}>
      <Title title="Playground" />
      <div css={playgroundCardWrapper}>
        <Link href="/playground/1">
          <div>플레이그라운드 1번 - three.js 기초</div>
        </Link>
        <div>플레이그라운드 2번 - canvas 다루기</div>
        <div>플레이그라운드 3번</div>
        <div>플레이그라운드 4번</div>
        <div>플레이그라운드 5번</div>
        <div>플레이그라운드 6번</div>
      </div>
    </div>
  )
}

const playgroundWrapper = css`
  position: relative;
  z-index: 2;

  width: 60vw;
  height: 80vh;
  padding-top: 14rem;
  margin: 0 auto;
`

const playgroundCardWrapper = css`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;

  & > * {
    padding: 2rem 0;
    cursor: pointer;
  }
`

export default Playground
