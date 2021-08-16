const http = require('http');
const fs = require('fs');
const path = require('path');
const { extname } = require('path');

http.createServer( (req, res) => {

  const file = req.url === '/' ? 'index.html' : req.url;
  const filePath = path.join(__dirname, 'public', file);
  
  //tradando o erro do favicon
  const allowedFileTypes = ['.html', '.css', '.js'];
  const allowed = allowedFileTypes.find(item => item == extname);
  if (!allowed) return 

  
  fs.readFile(
    filePath,
    (err, content) => {
      if(err) throw err

      res.end(content)
    }
  )
}).listen(5000, () => console.log("Servidor rodando na porta 5000..."));

