import { css } from '@emotion/react'
import Link from 'next/link'
import ReactTyped from 'react-typed'
import { mixins } from '../../lib/mixins'

type IntroduceType = {
  name_EN: string
  subTitle: string[]
}

function Introduce({ name_EN, subTitle }: IntroduceType) {
  return (
    <article css={ariticleWrapper}>
      <div css={introduceWrapper}>
        <h2>
          Hello, <br />
          I&apos;m <span style={{ color: '#246591' }}>{name_EN}</span>.
        </h2>
        <h3>
          <ReactTyped strings={subTitle} typeSpeed={40} backSpeed={50} loop />
        </h3>
        <div css={linkBtnWrapper}>
          <Link href="https://github.com/ckstn0777">
            <a
              href="https://github.com/ckstn0777"
              css={linkBtn('image/github.svg', 'black', 'white')}
            >
              Github
            </a>
          </Link>
          <Link href="https://velog.io/@ckstn0777">
            <a
              href="https://velog.io/@ckstn0777"
              css={linkBtn('image/velog.svg', '#12B886', 'white')}
            >
              Velog
            </a>
          </Link>
          <Link href="https://ckstn0777.notion.site/Home-4bf10a0a0e2c4b0994adfec7ccb38053">
            <a
              href="https://ckstn0777.notion.site/Home-4bf10a0a0e2c4b0994adfec7ccb38053"
              css={linkBtn('image/notion.svg', 'white', 'black')}
            >
              Notion
            </a>
          </Link>
        </div>
      </div>
      <img src="image/developer.svg" alt="developer image" css={introduceImg} />
    </article>
  )
}

const ariticleWrapper = css`
  display: flex;
  justify-content: center;

  & > * {
    flex-basis: 50%;
  }

  ${mixins.mediaQuery.small} {
    & > * {
      flex-basis: 100%;
    }
  }
`

const introduceWrapper = css`
  display: flex;
  flex-direction: column;
  justify-content: space-around;

  font-size: 1.25em;
  line-height: 4rem;

  & > * {
    flex-basis: 33.3%;
  }

  ${mixins.mediaQuery.small} {
    height: 32rem;
  }
`

const introduceImg = css`
  max-height: 32rem;
  height: auto;
  width: auto;

  ${mixins.mediaQuery.small} {
    display: none;
  }
`

const linkBtnWrapper = css`
  display: flex;
  align-items: center;
  gap: 10px;
`

const linkBtn = (
  backgroundImage: string,
  backgroundColor: string,
  color: string
) => css`
  &::before {
    display: block;
    content: '';
    width: 2.4rem;
    height: 2.4rem;
    background-repeat: no-repeat;
    background-image: url(${backgroundImage});
  }

  display: inline-flex;
  justify-content: center;
  align-items: center;
  gap: 10px;

  height: 5rem;
  padding: 1rem;
  font-size: 0.8em;

  background-color: ${backgroundColor};
  color: ${color};
  border-radius: 10px;
  border: 1px solid darkgray;

  cursor: pointer;
`

export default Introduce
