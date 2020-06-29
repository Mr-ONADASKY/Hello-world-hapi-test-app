import { Server } from '@hapi/hapi';

const init = async () => {
  const server = new Server({
    port: 3333,
    host: process.env.WEBSERVER_HOST || 'localhost',
  });

  server.route({
    method: 'GET',
    path: '/',
    handler: (request, h) => {
      console.log(request);

      return 'Hello World!';
    },
  });

  await server.start();
  console.log('Server running on %s', server.info.uri);
};

process.on('unhandledRejection', err => {
  console.log(err);
  process.exit(1);
});

// eslint-disable-next-line @typescript-eslint/no-floating-promises
init();
