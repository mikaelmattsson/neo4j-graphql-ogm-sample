import { createServer } from './app/server';

(async function () {
  const server = await createServer();

  // The `listen` method launches a web server.
  server.listen({
    port: 4001,
  }).then(({ url }) => {
    console.log(`🚀  Server ready at ${url}`);
  });
}());
