import * as React from 'react'

export default () => (
  <div className="loading">
    <style jsx>{`
      .loading {
        width: 10vw;
        height: 10vw;
        background: var(--primary);
        border-radius: 5%;
        animation: rotate infinite 0.2s;
      }

      @keyframes rotate {
        from {
          transform-origin: center;
          transform: scale(0.7);
        }

        to {
          transform-origin: center;
          transform: rotate3d(0, 0, 1, 90deg);
        }
      }
    `}</style>
  </div>
)
