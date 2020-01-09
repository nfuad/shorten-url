export const findLinkByAlias = async alias => {
  const query = `query findLinkByAlias($alias: String!) {
    findLinkByAlias(alias: $alias) {
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
      variables: { alias },
    }),
  })
  const data = await res.json()

  return data
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

export const deleteLinkAlias = async id => {
  const query = `mutation deleteLink($id: ID!) {
    deleteLink(id: $id) {
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
      variables: { id },
    }),
  })
  const data = await res.json()

  return data
}
