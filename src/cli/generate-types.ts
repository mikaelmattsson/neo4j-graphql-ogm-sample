import { generate } from '@neo4j/graphql-ogm';
import path from 'path';
import { createNeo4JDriver, createNeo4jOGM } from '../app/neo4j';
import { loadOGMTypeDefs } from '../app/schema';

(async function () {
  // Only generate types when you make a schema change
  const outFile = path.join(__dirname, '../generated/ogm-types.ts');

  const typeDefs = loadOGMTypeDefs();
  const ogm = createNeo4jOGM(typeDefs);

  await generate({
    ogm,
    outFile,
  });

  console.log('Types Generated');
}());
