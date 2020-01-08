import * as React from 'react'
import shortid from 'shortid'
import { FormContext, useForm } from 'react-hook-form'
import { findLinkByAlias, createLinkAlias } from '../graphql/api'

// custom imports
import Layout from '../components/Layout'
import Header from '../components/Header'
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
    <Layout title="URL Shortener">
      <Header />

      <FormContext {...methods}>
        <ShortenLinkForm onSubmit={onSubmit} />
      </FormContext>
    </Layout>
  )
}
