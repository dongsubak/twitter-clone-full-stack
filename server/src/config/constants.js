export default {
    PORT: process.env.PORT || 3000,
    DB_URL: 'mongodb://localhost/tweet-development',
    GRAPHQL_PATH: '/graphql',
    JWT_SECRET: 'thistisasecret123',
    SUBSCRIPTIONS_PATH: '/subscriptions'
  }