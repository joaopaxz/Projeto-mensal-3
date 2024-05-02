const http = require('http');
const fs = require('fs');
const { nomes } = require('./nomes.ts');

const server = http.createServer((req, res) => {
    // Lê o arquivo HTML
    fs.readFile('template.html', 'utf8', (err, html) => {
        if (err) {
            res.writeHead(500);
            res.end(err.message);
            return;
        }

        // Substitui a marcação {{ nomes }} no HTML pelos nomes da lista
        const renderedHtml = html.replace('{{ nomes }}', nomes.map(nome => `<li>${nome}</li>`).join(''));

        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.end(renderedHtml);
    });
});

const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
