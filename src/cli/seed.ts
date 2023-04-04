import { createNeo4JDriver, createNeo4jOGM } from '../app/neo4j';
import { loadOGMTypeDefs } from '../app/schema';

(async function () {
  const typeDefs = loadOGMTypeDefs();
  const driver = createNeo4JDriver();
  const ogm = createNeo4jOGM(typeDefs, driver);

  await driver.verifyConnectivity();
  await ogm.init();

  await ogm.model('Movie').create({
    input: [
      {
        title: 'Avengers',
      },
      {
        title: 'Avengers 2: Age of Ultron',
      },
      {
        title: 'Avengers 3: Infinity War',
      },
    ],
  });

  await ogm.model('Actor').create({
    input: [
      {
        name: 'Robert Downey Jr.',
        movies: { connect: [{ where: { node: { title_CONTAINS: 'Avengers' } } }] },
      },
      {
        name: 'Chris Evans',
        movies: { connect: [{ where: { node: { title_CONTAINS: 'Avengers' } } }] },
      },
    ],
  });

  await driver.close();
}());
