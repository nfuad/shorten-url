import * as React from 'react'
import { FormContext, useForm } from 'react-hook-form'
import { findLinkByAlias, deleteLinkAlias } from '../graphql/api'

// custom imports
import Layout from '../components/Layout'
import Header from '../components/Header'
import Form from '../components/Form'
import Error from '../components/Error'

export default () => {
  const [errorMessage, setErrorMessage] = React.useState('')
  const methods = useForm()

  const onSubmit = async data => {
    setErrorMessage('')
    const alias = data.inputURL.slice(data.inputURL.length - 5)

    try {
      const res = await findLinkByAlias(alias)
      if (!res.errors) {
        const deleteRes = await deleteLinkAlias(res.data.findLinkByAlias._id)
        if (!deleteRes.errors) setErrorMessage('Successfully Deleted...')
        return
      }

      setErrorMessage('The URL was not found in our Database')
    } catch (error) {
      setErrorMessage(
        'There was an error while deleting the alias. Please try again later'
      )
    }
  }

  return (
    <Layout title="Delete Alias">
      <Header
        heading="Want to Delete Alias?"
        text="Put the shortened URL in the box:"
      />
      <FormContext {...methods}>
        <Form onSubmit={onSubmit} action="delete!" />
      </FormContext>
      <Error>{errorMessage}</Error>
    </Layout>
  )
}
