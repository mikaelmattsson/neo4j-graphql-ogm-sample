import { ApolloServer } from 'apollo-server';
import { loadOGMTypeDefs } from './schema';
import { createNeo4JDriver, createNeo4jGraphql, createNeo4jOGM } from './neo4j';

export async function createServer() {
  const driver = createNeo4JDriver();

  try {
    await driver.verifyConnectivity();
  } catch (err) {
    console.error('Could not connect to neo4j database.', err);
    throw err;
  }

  const typeDefs = loadOGMTypeDefs();
  const neo4jGraphQL = createNeo4jGraphql(typeDefs, driver);
  const schema = await neo4jGraphQL.getSchema();

  try {
    const ogm = createNeo4jOGM(typeDefs, driver);
    await ogm.init();
    await neo4jGraphQL.assertIndexesAndConstraints({
      options: { create: true },
    });
  } catch (e) {
    console.error(`Server preparation failed: ${e}`);
    throw e;
  }

  return new ApolloServer({
    schema,
    plugins: [],
    cache: 'bounded',
    introspection: true,
    context: () => {
      return {
        jwt: {
          roles: ['user'],
        },
      };
    },
  });
}
