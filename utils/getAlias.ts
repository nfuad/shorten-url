import shortid from 'shortid'

// use $ and @ instead of - and _
shortid.characters(
  '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ$@'
)

const getAlias = () => {
  // only five characters will suffice
  shortid.generate().substring(0, 5)
}

export default getAlias
