import * as React from 'react'
import Link from 'next/link'
import GithubCorner from 'react-github-corner'

export default () => (
  <nav>
    <GithubCorner
      href="https://github.com/nfuad/shorten-url"
      octoColor="var(--background)"
      bannerColor="var(--tertiary)"
    />
    <ul>
      <li>
        <Link href="/">
          <a>Home</a>
        </Link>
      </li>
      <li>
        <Link href="/manage">
          <a>Manage</a>
        </Link>
      </li>
      <li>
        <Link href="/about">
          <a>About</a>
        </Link>
      </li>
    </ul>

    <style jsx>{`
      ul {
        display: flex;
        justify-content: flex-end;
        margin: 0 auto;
        width: 50%;
        margin-top: 0;
        padding: 4px 16px;
      }

      li {
        display: flex;
        padding: 6px 8px;
      }

      a {
        color: var(--foreground);
        text-decoration: none;
        border-bottom: 5px solid var(--primary);
        font-size: 1.35em;
        transition: border-bottom 0.2s;
      }

      a:hover {
        border-bottom: 5px solid var(--tertiary);
      }

      @media only screen and (max-width: 1000px) {
        ul {
          justify-content: center;
        }

        a {
          font-size: 1em;
        }
      }
    `}</style>
  </nav>
)
