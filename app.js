
const routes= require('./routes');
const extend= require('./utils');

module.exports= (req, res) => {

	extend(req, res);

	let route;

	console.log(req.path);
	console.log(req.path.pathname);

	if(routes.has(req.path.pathname))
		route= routes.get(req.path.pathname);
	else
		route= routes.get('#ERROR_404');

	if(typeof route === 'function')
		route(req, res);
};
