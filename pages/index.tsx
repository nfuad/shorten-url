import * as React from 'react'
import shortid from 'shortid'
import { FormContext, useForm } from 'react-hook-form'
import { createLinkAlias } from '../graphql/api'

// custom imports
import Layout from '../components/Layout'
import Header from '../components/Header'
import Form from '../components/Form'
import Overlay from '../components/Overlay'
import Error from '../components/Error'

// use $ and @ instead of - and _
shortid.characters(
  '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ$@'
)

export default () => {
  const [fullScreen, setFullScreen] = React.useState(false)
  const [shortURL, setShortURL] = React.useState('')
  const [errorMessage, setErrorMessage] = React.useState(null)
  const toggleFullScreen = () => setFullScreen(!fullScreen)
  const methods = useForm()
  const onSubmit = data => {
    setErrorMessage(null)
    const alias = shortid.generate().substring(0, 5)

    createLinkAlias(data.inputURL, alias)
      .then(res => {
        if (res.errors) {
          setErrorMessage('Please try a valid & unique URL')
          return
        }

        setFullScreen(true)
        setShortURL(document.location.href + alias)
      })
      .catch(error => {
        setErrorMessage(
          'There was an error while saving the url.\nPlease try a valid & unique URL'
        )

        console.error('Error: ', error)
      })
  }

  return (
    <Layout title="URL Shortener">
      <Header
        heading="Shorten your long URL."
        text="It's free, fast, reliable and easy to use. Just drop your long URL:"
      />
      <Overlay
        shortURL={shortURL}
        fullScreen={fullScreen}
        toggle={toggleFullScreen}
      />
      <FormContext {...methods}>
        <Form onSubmit={onSubmit} action="shorten!" />
      </FormContext>
      <Error>{errorMessage}</Error>
    </Layout>
  )
}
