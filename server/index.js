import { resolve, join } from 'path';
const express = require('express');
const next = require('next');
const dev = process.env.NODE_ENV !== 'production';
const __DEVELOP__ = true;
const app = next({ dev: __DEVELOP__, dir: resolve(__dirname, '../next') });
const handler = app.getRequestHandler();
const router = express.Router();

app.prepare()
	.then(() => {

		const server = express();

		server.set('next', app);
		server.get('/_next/*', (req, res) => handler(req, res));
		server.use('/', router);

		router.get("/", function (req, res) {
			req.app.get('next').render(req, res, '/index', {});
		})

		router.get("/about", function (req, res) {
			req.app.get('next').render(req, res, '/about', {});
		})

		server.get('*', (req, res) => {
			return handler(req, res)
		});
		
		server.listen(3000, (err) => {
		if (err) throw err
			console.log('> Ready on http://localhost:3000')
		})
	}
)
