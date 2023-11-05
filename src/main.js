import { createServer } from 'node:http'
import { createSchema, createYoga } from 'graphql-yoga'
import { loadFiles } from '@graphql-tools/load-files'
import Query from './resolvers/Query'

const resolvers = {
  Query
}

const schema = async () => createSchema({
  typeDefs: await loadFiles('src/typeDefs/**/*.graphql'),
  resolvers
})

const yoga = createYoga({
  graphqlEndpoint: '/',
  schema
})

const server = createServer(yoga)

server.listen(4000, () => {
  console.info('Server is running on http://localhost:4000/')
})


