import * as React from 'react'
import Head from 'next/head'

// custom imports
import Nav from './Nav'

export default ({ title, children }) => (
  <>
    <Head>
      <title>
        {title || 'Trim your URL short - A free tool to shorten URLs'}
      </title>
    </Head>
    <Nav />
    <main>{children}</main>
    <style jsx global>
      {`
        :root {
          --background: #faeee7;
          --foreground: #594a4e;
          --heading: var(--dark);
          --button-background: #ff8ba7;
          --button-foreground: var(--dark);
          --primary: #ff8ba7;
          --secondary: #ffc6c7;
          --tertiary: #8bd3dd;
          --white: #fffffe;
          --dark: #33272a;
          --font-family: Candara, Arial, sans-serif;
        }

        ::selection {
          background: var(--tertiary);
          color: var(--white);
        }

        body {
          padding: 0;
          margin: 0;
          font: 16px var(--font-family);
          background: var(--background);
          color: var(--foreground);
          overflow: hidden;
        }

        main {
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          min-height: 90vh;
        }

        h1 {
          font-size: 8em;
          margin: 0;
          padding: 0;
          line-height: 0.8;
          letter-spacing: -3px;
          text-transform: uppercase;
          color: var(--heading);
        }

        p {
          font-size: 3em;
          line-height: 0.9;
          margin: 0.6em 0;
        }

        @media only screen and (max-width: 1000px) {
          h1 {
            font-size: 6em;
          }

          p {
            font-size: 2em;
          }
        }

        @media only screen and (max-width: 850px) {
          h1 {
            font-size: 5em;
          }

          p {
            font-size: 1.5em;
          }
        }

        @media only screen and (max-width: 700px) {
          h1 {
            font-size: 4em;
          }

          p {
            font-size: 1em;
          }
        }

        @media only screen and (max-width: 500px) {
          h1 {
            font-size: 3.5em;
          }
        }
      `}
    </style>
  </>
)
