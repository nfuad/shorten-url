import React from 'react'
import { useForm, ErrorMessage } from 'react-hook-form'

export default props => {
  const { register, handleSubmit, errors } = useForm()

  return (
    <>
      <form onSubmit={handleSubmit(props.onSubmit)}>
        <input
          placeholder="example.domain"
          name="longURL"
          ref={register({
            required: 'Please give me a valid link',
            pattern: {
              value: /[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)/,
              message: 'Invalid Link / URL',
            },
          })}
        />
        <button type="submit">Shorten link!</button>
      </form>
      <span className="error">
        <ErrorMessage errors={errors} name="longURL" />
      </span>

      <style jsx>{`
        input,
        button {
          min-height: 4em;
          padding: 0 1em;
          margin: 0;
          border: none;
          font-size: 1.3em;
          width: 65%;
          text-align: center;
          color: var(--primary);
          font-family: var(--font-family);
          box-sizing: border-box;
        }

        ::placeholder {
          color: var(--secondary);
        }

        button {
          background: var(--button-background);
          color: var(--white);
          width: 35%;
          transition: color 0.2s;
          cursor: pointer;
        }

        button:hover {
          color: var(--button-foreground);
        }

        form {
          width: 50%;
          box-shadow: -20px 20px 0px 0px var(--tertiary);
        }

        span.error {
          margin-top: 1em;
          min-height: 2.2em;
          font-size: 1.2em;
          color: var(--primary);
        }
      `}</style>
    </>
  )
}
