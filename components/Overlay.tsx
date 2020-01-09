import * as React from 'react'
import { Flipper, Flipped } from 'react-flip-toolkit'

const Square = () => (
  <Flipped flipId="square">
    <div className="square">
      <style jsx global>{`
        .square {
          width: 100%;
          height: 0rem;
          cursor: pointer;
          background: var(--tertiary);
        }
      `}</style>
    </div>
  </Flipped>
)

const FullScreenSquare = ({ toggle, shortURL }) => (
  <Flipped flipId="square">
    <div className="full-screen-square">
      <button className="close" onClick={toggle}>
        Close
      </button>
      <h2>Share with all:</h2>
      <h3>
        <a href={shortURL} target="_blank" rel="noopener noreferrer">
          {shortURL}
        </a>
      </h3>

      <style jsx global>{`
        .full-screen-square {
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

        .close {
          background: transparent;
          color: var(--white);
          position: absolute;
          z-index: 1;
          top: 2rem;
          right: 2rem;
          border: none;
          font-size: 3rem;
          cursor: pointer;
          transition: all 0.2s;
        }

        .close:hover {
          transform: scale(0.9);
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
          h3,
          .close {
            font-size: 2.5rem;
          }
        }

        @media only screen and (max-width: 500px) {
          h2,
          h3,
          .close {
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
