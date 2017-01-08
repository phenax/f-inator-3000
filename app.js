
const routes= require('./routes');

module.exports= (req, res) => {

	res.json= (json, status) => {

		res.writeHead(status || 200, {
			'Content-Type': 'application/json'
		});

		res.end(JSON.stringify(json));
	};

	let route;

	if(routes.has(req.url)) {
		route= routes.get(req.url);
	} else {
		route= routes.get('#ERROR_404');
	}

	if(typeof route === 'function') {
		route(req, res);
		return;
	}
};
