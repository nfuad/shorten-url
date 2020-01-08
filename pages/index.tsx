import * as React from 'react'
import shortid from 'shortid'
import { FormContext, useForm } from 'react-hook-form'
import { findLinkByAlias, createLinkAlias } from '../graphql/api'

// custom imports
import Nav from '../components/Nav'

// custom imports
import ShortenLinkForm from '../components/ShortenLinkForm'
export default () => {
  const methods = useForm()
  const onSubmit = data => {
    console.log(data)

    const alias = shortid.generate().substring(0, 5)
    createLinkAlias(data.longURL, alias)
      .then(data => {
        console.log(data)
      })
      .catch(error => {
        console.log(`boo :( ${error}`)

        // setSubmitting(false)
      })
  }

  return (
    <>
      <Nav />
      <main>
        <div className="jumbo">
          <h1>Shorten your long URL.</h1>
          <span className="breaker" />
          <p>
            It's free, fast, reliable and easy to use. Just drop your long URL:
          </p>
        </div>

        <FormContext {...methods}>
          <ShortenLinkForm onSubmit={onSubmit} />
        </FormContext>

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

            body {
              padding: 0;
              margin: 0;
              font: 16px var(--font-family);
              background: var(--background);
              color: var(--foreground);
              overflow: hidden;
            }

            ::selection {
              color: var(--white);
              background: var(--primary);
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

            .jumbo {
              width: 50%;
            }

            .breaker {
              display: block;
              margin-right: auto;
              width: 50%;
              height: 3em;
              background: var(--primary);
            }
          `}
        </style>
      </main>
    </>
  )
}
