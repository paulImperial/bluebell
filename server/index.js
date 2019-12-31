import { resolve } from 'path';
const express = require('express');
const next = require('next');
const dev = process.env.NODE_ENV !== 'production';
const __DEVELOP__ = true;
const app = next({ dev: __DEVELOP__, dir: resolve(__dirname, '../next') });
const handler = app.getRequestHandler();
const router = express.Router();
import routes from './routes';

app.prepare()
	.then(() => {

		const server = express();

		server.set('next', app);
		server.get('/_next/*', (req, res) => handler(req, res));
		server.use('/', routes);
		server.disable('x-powered-by');

		// fallback route
		server.get('*', (req, res) => {
			return handler(req, res)
		});
		
		server.listen(3000, (err) => {
		if (err) throw err
			console.log('> Listening ...')
		})
	}
)
