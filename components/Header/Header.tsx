import Link from 'next/link'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'

function Header() {
  const router = useRouter()
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <nav className="fixed top-0 left-0 z-50 w-full p-4 shadow-md flex justify-center content-center">
      <div className="w-full flex flex-wrap justify-between">
        <div className="w-64 ml-2">
          <Link href={'/'}>
            <a>
              <img src="Logo.png" alt="logo" />
            </a>
          </Link>
        </div>

        <button
          id="menu-btn"
          data-collapse-toggle="navbar-default"
          type="button"
          className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          aria-controls="navbar-default"
          aria-expanded="false"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="w-6 h-6"
            aria-hidden="true"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
              clipRule="evenodd"
            ></path>
          </svg>
        </button>

        <div
          className={`mr-4 md:flex md:flex-row justify-center items-center ${
            menuOpen ? 'w-full flex flex-col' : 'hidden'
          }`}
          id="navbar-default"
        >
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
          <Link href={'/review'}>
            <a
              className="px-4 py-2"
              style={{
                color: router.pathname == '/review' ? '#007acc' : 'black',
              }}
            >
              Review
            </a>
          </Link>
        </div>
      </div>
    </nav>
  )
}

export default Header
