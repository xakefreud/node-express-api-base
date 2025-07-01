import http from 'http'
import app from './app';
import { SERVER_HOSTNAME, SERVER_PORT } from './config/config';
// import logging from './config/logging';

export let httpServer: ReturnType<typeof http.createServer>;

httpServer = http.createServer(app);

httpServer.listen(SERVER_PORT, () => {
    logging.log('----------------------------------------');
    logging.log(`Server started on ${SERVER_HOSTNAME}:${SERVER_PORT}`);
    logging.log('----------------------------------------');
});



export const Shutdown = (callback: any) => httpServer && httpServer.close(callback);
