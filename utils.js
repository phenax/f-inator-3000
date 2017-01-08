
const url= require('url');
const fs= require('fs');

module.exports= (req, res) => {


	req.path= url.parse(req.url);
	req.path.queryobj= {}; 
	const query= (req.path.query || '').split('&');

	query.forEach(val => {
		const key_val= val.split('=');
		req.path.queryobj[key_val[0]]= key_val[1];
	});


	res.json= (json, status) => {

		res.writeHead(status || 200, {
			'Content-Type': 'application/json'
		});

		res.end(JSON.stringify(json));
	};

	res.sendFile= (filename) => {

		const file$= fs.createReadStream(filename);

		file$.pipe(res);
	};

	return res;
};
