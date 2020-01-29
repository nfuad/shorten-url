# URL Shortener

This project aims to demonstrate how a URL shortener works. Built with Next.js, GraphQL and FaunaDB. Visit the live site here: https://trim.now.sh

![URL shortener](/shorten.png)

### How it works

When you paste your long url in the input box and hit enter, you get a nice short url. But what happens behind the scenes? Well, as soon as you hit enter, a string of length 5 is randomly generated which acts as the alias. This alias is stored in the database along with the actual url, see the [simple schema](./graphql/schema.gql). So, when you want to use the shortened URL, the database get queried for the alias, and the actual URL is returned and you get redirected to the desired page.

### Developing Locally

Install the dependencies...

```bash
# Clone the repo
git clone https://github.com/nfuad/shorten-url.git
# Move into the cloned repo
cd shorten-url
# Install the dependencies
npm install
# Start the dev server
npm run dev
```

Navigate to [localhost:3000](http://localhost:3000). You should see the app running.

### License

MIT
