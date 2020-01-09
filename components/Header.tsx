import * as React from 'react'

export default ({ heading, text }) => (
  <header className="jumbo">
    <h1>{heading}</h1>
    <span className="breaker" />
    <p>{text}</p>
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
