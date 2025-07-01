import express, { Request, Response, NextFunction } from 'express';

import helmet from 'helmet';
import rateLimit from 'express-rate-limit';

import { corsHandler } from './middlewares/corsHandler';
import { loggingHandler } from './middlewares/loggingHandler';
import { routeNotFound } from './middlewares/routeNotFound';
import { errorHandler } from './middlewares/errorHandlers';
import sampleRoutes from './routes/sampleRoutes';
import { API_REQUEST_COUNT_LIMIT, API_TIME_LIMIT } from './config/config';

const app = express();

logging.log('----------------------------------------');
logging.log('Initializing API');
logging.log('----------------------------------------');
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

logging.log('----------------------------------------');
logging.log('Logging, Security & Configuration');
logging.log('----------------------------------------');
app.use(loggingHandler);
app.use(corsHandler);
app.use(helmet());

// Rate limiting 100 requests per 10 mins
const limiter = rateLimit({
    windowMs: API_TIME_LIMIT,
    max: API_REQUEST_COUNT_LIMIT
});
app.use(limiter);

logging.log('----------------------------------------');
logging.log('Define Controller Routing');
logging.log('----------------------------------------');
app.get('/api/v1/healthcheck', (req: Request, res: Response, next: NextFunction) => {
    res.status(200).json({ Status: 'I am  alive!' });
});
app.use('/api/v1/sample', sampleRoutes)

logging.log('----------------------------------------');
logging.log('Define Routing Errors');
logging.log('----------------------------------------');
app.use(routeNotFound);
app.use(errorHandler); //other error catcher

export default app;


