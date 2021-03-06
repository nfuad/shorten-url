import shortid from 'shortid'

// use $ and @ instead of - and _
shortid.characters(
  '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ$@'
)

const getAlias = (): String => {
  // only five characters will suffice
  return shortid.generate().substring(0, 5)
}

export default getAlias
