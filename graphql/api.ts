import useFetch from '../lib/useFetch'

const getData = data => {
  if (!data || data.errors) return null
  return data.data
}

const getErrorMessage = (error, data) => {
  if (error) return error.message
  if (data && data.errors) {
    return data.errors[0].message
  }
  return null
}

export const findLinkByAlias = alias => {
  const query = `query findLinkByAlias($alias: String) {
    findLinkByAlias(alias: $alias) {
      _id
      _ts
      actualURL
      alias
    }
  }`
  const { data, error } = useFetch(process.env.FAUNADB_GRAPHQL_ENDPOINT, {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${process.env.FAUNADB_SECRET_KEY}`,
      'Content-type': 'application/json',
      Accept: 'application/json',
    },
    body: JSON.stringify({
      query,
      variables: { alias },
    }),
  })

  return {
    data: getData(data),
    errorMessage: getErrorMessage(error, data),
    error,
  }
}

export const createLinkAlias = async (actualURL, alias) => {
  const query = `mutation createLink($actualURL: String!, $alias: String!) {
    createLink(data: {
      actualURL: $actualURL,
      alias: $alias
    }) {
      _id
      _ts
      alias
      actualURL
    }
  }`

  const res = await fetch(process.env.FAUNADB_GRAPHQL_ENDPOINT, {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${process.env.FAUNADB_SECRET_KEY}`,
      'Content-type': 'application/json',
      Accept: 'application/json',
    },
    body: JSON.stringify({
      query,
      variables: { actualURL, alias },
    }),
  })
  const data = await res.json()

  return data
}
