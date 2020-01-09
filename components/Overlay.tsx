import * as React from 'react'
import { Flipper, Flipped } from 'react-flip-toolkit'

const CloseButton = ({ toggle }) => (
  <button onClick={toggle}>
    Close
    <style jsx>
      {`
        & {
          background: transparent;
          color: var(--white);
          position: absolute;
          z-index: 1;
          top: 2rem;
          right: 2rem;
          border: none;
          font-size: 1.33rem;
          cursor: pointer;
          transition: all 0.2s;
        }

        &:hover {
          transform: scale(0.9);
        }
      `}
    </style>
  </button>
)

const Square = () => (
  <Flipped flipId="square">
    <div>
      <style jsx global>{`
        & {
          width: 100%;
          height: 0rem;
          background: var(--tertiary);
        }
      `}</style>
    </div>
  </Flipped>
)

const FullScreenSquare = ({ toggle, shortURL }) => (
  <Flipped flipId="square">
    <div>
      <CloseButton toggle={toggle} />
      <h2>Share with all:</h2>
      <h3>
        <a href={shortURL} target="_blank" rel="noopener noreferrer">
          {shortURL}
        </a>
      </h3>

      <style jsx global>{`
        & {
          display: flex;
          justify-content: center;
          align-items: center;
          flex-direction: column;
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background-image: linear-gradient(
            45deg,
            var(--tertiary),
            var(--primary)
          );
        }

        h2,
        h3 {
          font-size: 6rem;
          margin-top: 0;
          color: var(--white);
        }

        h3 {
          font-size: 7rem;
        }

        a {
          color: var(--dark);
        }

        @media only screen and (max-width: 1000px) {
          h2,
          h3 {
            font-size: 2.5rem;
          }
        }

        @media only screen and (max-width: 500px) {
          h2,
          h3 {
            font-size: 1.2rem;
          }
        }
      `}</style>
    </div>
  </Flipped>
)

export default ({ fullScreen, shortURL, toggle }) => (
  <Flipper flipKey={fullScreen}>
    {fullScreen ? (
      <FullScreenSquare shortURL={shortURL} toggle={toggle} />
    ) : (
      <Square />
    )}
  </Flipper>
)
