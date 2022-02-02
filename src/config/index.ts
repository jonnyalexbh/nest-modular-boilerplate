export default () => ({
  api: {
    env: process.env.NODE_ENV,
    port: parseInt(process.env.PORT, 10) || 3000,
  },
  mongo: {
    uri: process.env.MONGO_URI,
    dbName: process.env.MONGO_DB,
  },
});
