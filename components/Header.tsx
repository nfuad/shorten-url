import * as React from 'react'

export default () => (
  <header className="jumbo">
    <h1>Shorten your long URL.</h1>
    <span className="breaker" />
    <p>It's free, fast, reliable and easy to use. Just drop your long URL:</p>
    <style jsx>
      {`
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

        @media only screen and (max-width: 850px) {
          .breaker {
            height: 2em;
            width: 40%;
          }
        }

        @media only screen and (max-width: 700px) {
          .jumbo {
            width: 70%;
          }

          .breaker {
            height: 1.2em;
          }
        }

        @media only screen and (max-width: 500px) {
          .jumbo {
            width: 75%;
          }

          .breaker {
            height: 1.1em;
          }
        }
      `}
    </style>
  </header>
)
