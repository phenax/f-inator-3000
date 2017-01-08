
const fuckinate= require('./src/fuckinate');


const routes= new Map();

// Static files
routes.set('/', (_, res) => res.sendFile('./index.html'));
routes.set('/dist/script.js', (_, res) => res.sendFile('./dist/script.js'));

// Error handler
routes.set('#ERROR_404', (req, res) => {
	res.json({
		status: 0,
		message: 'The fuck you trying to do mate?'
	}, 404);
});


// API routes
routes.set('/fuckinate', (req, res) => {

	const query= decodeURI(req.path.queryobj.query || '');

	res.json({
		status: 1,
		response: fuckinate.transform(query)
	});
});


module.exports= routes;
