import dotenv from 'dotenv';
import express from 'express';
import BodyParser from 'body-parser'

dotenv.config({
	path: '.env'
});

/**
 * Express server application class.
 * @description This class is responsible for initializing the express server.
 */
const app = express();

app.use(BodyParser.json());



// start server app
app.listen(process.env.APP_PORT, () => {
	console.log('Listening on port 4000!!!!!!!!');
});

export default app;
