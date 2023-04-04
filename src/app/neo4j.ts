import neo4j, { Driver } from 'neo4j-driver';
import { DocumentNode } from 'graphql/language';
import { Neo4jGraphQL } from '@neo4j/graphql';
import { OGM } from '@neo4j/graphql-ogm';
import { ModelMap } from '../generated/ogm-types';

export function createNeo4JDriver() {
  return neo4j.driver(
    'bolt://localhost:17687',
    neo4j.auth.basic('neo4j', 'password'), {
      disableLosslessIntegers: true,
      // logging: {
      //   level: 'debug',
      //   logger: (level, message) => {
      //     console.log('neo4j', level, message);
      //   },
      // },
    },
  );
}

export function createNeo4jGraphql(
  typeDefs: DocumentNode,
  driver?: Driver,
) {
  return new Neo4jGraphQL({
    typeDefs,
    driver,
    config: {
      // driverConfig: { database: 'example' },
    },
  });
}

export function createNeo4jOGM(
  typeDefs: DocumentNode,
  driver?: Driver,
) {
  return new OGM<ModelMap>({
    typeDefs,
    driver,
    config: {
      // driverConfig: { database: 'example' },
    },
  });
}
