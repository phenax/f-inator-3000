
const routes= new Map();

routes.set('/', (req, res) => {
	res.end('Fuckinator 3000 JSON API');
});

routes.set('#ERROR_404', (req, res) => {
	res.json({
		status: 404,
		message: 'The fuck you trying to do mate?'
	}, 404);
});

module.exports= routes;
