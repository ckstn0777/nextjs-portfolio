import { css } from '@emotion/react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import { mixins } from '../../lib/mixins'

function Header() {
  const router = useRouter()
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <nav css={wrapper}>
      <div css={headerWrapper}>
        <div css={logoWrapper}>
          <Link href={'/'}>
            <a>
              <img src="/Logo.png" alt="logo" />
            </a>
          </Link>
        </div>

        <button
          id="menu-btn"
          css={menuBtnWrapper}
          data-collapse-toggle="navbar-default"
          type="button"
          aria-controls="navbar-default"
          aria-expanded="false"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span className="sr-only"></span>
          <svg
            fill="none"
            height="24"
            viewBox="0 0 24 24"
            width="24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clipPath="url(#clip0_105_1724)">
              <path
                d="M3 6.00098H21M3 12.001H21M3 18.001H21"
                stroke="#292929"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
              />
            </g>
            <defs>
              <clipPath id="clip0_105_1724">
                <rect
                  fill="white"
                  height="24"
                  transform="translate(0 0.000976562)"
                  width="24"
                />
              </clipPath>
            </defs>
          </svg>
        </button>

        <div id="navbar-default" css={linkWrapper(menuOpen)}>
          <Link href={'/'}>
            <a
              className="px-4 py-2"
              style={{ color: router.pathname == '/' ? '#007acc' : 'black' }}
            >
              Home
            </a>
          </Link>
          <Link href={'/projects'}>
            <a
              className="px-4 py-2"
              style={{
                color: router.pathname == '/projects' ? '#007acc' : 'black',
              }}
            >
              My Works
            </a>
          </Link>
          <Link href={'/career'}>
            <a
              className="px-4 py-2"
              style={{
                color: router.pathname == '/career' ? '#007acc' : 'black',
              }}
            >
              Career
            </a>
          </Link>
          <Link href={'/playground'}>
            <a
              className="px-4 py-2"
              style={{
                color: router.pathname == '/playground' ? '#007acc' : 'black',
              }}
            >
              Playground
            </a>
          </Link>
        </div>
      </div>
    </nav>
  )
}

const wrapper = css`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 50;

  width: 100%;
  padding: 2rem 2.8rem;
  box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1);
  background-color: white;

  display: flex;
  justify-content: center;
  align-items: center;
`

const headerWrapper = css`
  width: 80%;

  display: flex;
  justify-content: space-between;
  align-items: center;

  ${mixins.mediaQuery.small} {
    width: 90%;
    font-size: 2rem;
    flex-wrap: wrap;
  }
`

const logoWrapper = css`
  width: 24rem;

  img {
    width: 100%;
  }
`

const linkWrapper = (menuOpen: boolean) => css`
  display: flex;
  gap: 4rem;
  font-size: 1.125em;
  font-weight: 500;

  ${mixins.mediaQuery.small} {
    display: none;

    ${menuOpen &&
    css`
      width: 100vw;

      display: flex;
      flex-wrap: wrap;

      & > * {
        width: 100%;
        text-align: center;
        padding: 4px 0;
      }
    `}
  }
`

const menuBtnWrapper = css`
  display: none;
  cursor: pointer;

  ${mixins.mediaQuery.small} {
    display: block;
    background: none;
    outline: none;
    border: none;
  }
`

export default Header
