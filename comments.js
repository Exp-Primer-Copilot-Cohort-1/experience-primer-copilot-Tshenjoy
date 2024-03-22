// create web server
// create a web server
import { createServer } from 'http';
import { parse } from 'url';
import { readFile } from 'fs';
import { parse as _parse } from 'querystring';
// create a web server
createServer(function (req, res) {
  var query = parse(req.url, true).query;
  var pathname = parse(req.url).pathname;
  var filename = "." + pathname;
  if (pathname === '/comments') {
    if (req.method === 'POST') {
      var body = '';
      req.on('data', function (data) {
        body += data;
      });
      req.on('end', function () {
        var POST = _parse(body);
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.write('You sent the comment: ' + POST.comment);
        res.end();
      });
    } else {
      res.writeHead(200, { 'Content-Type': 'text/html' });
      res.write('<form action="/comments" method="post">');
      res.write('<input type="text" name="comment">');
      res.write('<input type="submit">');
      res.write('</form>');
      return res.end();
    }
  } else {
    readFile(filename, function (err, data) {
      if (err) {
        res.writeHead(404, { 'Content-Type': 'text/html' });
        return res.end("404 Not Found");
      }
      res.writeHead(200, { 'Content-Type': 'text/html' });
      res.write(data);
      return res.end();
    });
  }
}).listen(8080);
console.log('Server running at http://');
