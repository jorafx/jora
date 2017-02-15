import http from 'http';

http.createServer((req, res) => {
	res.writeHead(200, {'Content-Type' : 'text/plain'});
	res.end('hello world\n');
}).listen(3000);

console.log('Up and running!');