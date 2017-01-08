
const http= require('http');
const os= require('os');
const cluster= require('cluster');

const appServer= require('./app');

if(cluster.isMaster) {

	for(let i= 0; i< os.cpus().length; i++) {
		cluster.fork();
	}

	cluster.on('exit', () => {
		cluster.fork();
	});

} else {
	http
		.createServer(appServer)
		.listen(process.env.PORT || 8080);
}
