import { css } from '@emotion/react'
import Link from 'next/link'
import Title from '../components/Title'

function Playground() {
  return (
    <div css={playgroundWrapper}>
      <Title title="Playground" />
      <div css={playgroundCardWrapper}>
        <Link href="/playground/1">
          <div>
            <h3>플레이그라운드 1번</h3>
            <p>three.js 기초 및 마우스 컨트롤</p>
          </div>
        </Link>

        <Link href="/playground/2">
          <div>
            <h3>플레이그라운드 2번</h3>
            <p>three.js 물리엔진 적용하기</p>
          </div>
        </Link>

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
  gap: 15px;

  & > * {
    padding: 2rem 0;
    cursor: pointer;
  }
`

export default Playground
