var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

var articles={
 'article-one':{
 title: 'article one:Sabarinath',
 heading: 'Article One',
 date:'23 feb 2018',
 content:`this is my first article`,
},
'article-two':{
             title: 'article two:Sabarinath',
             heading: 'Article two',
             date:'23-2-18',
             content:`this is article two`
            },
'article-three':{
    title: 'article three:Sabarinath',
 heading: 'Article three',
 date:'23-2-18',
 content:`this is my third article`
}
};

function createtemplate(data) {
    var title = data.title;
    var heading = data.heading;
    var date = data.date;
    var content = data.content;
    var htmltemplates=
        `<html>
            <head>
            <title>
                ${title} 
            </title > 
             <link href="/ui/style.css" rel="stylesheet" />
            </head>
                
                <body>
                    <div class="container">
                        <div>
                        <a href="/">home</a>
                       </div>
                       <div>
                        <h3>
                           ${heading}
                        </h3>
                    </div>
                    <div>
                        ${date}
                    </div>
                    <div>
                       ${content}
                    </div>
                    </div>
                </body>
        </html>

  `;
  return htmltemplates;
}
app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});
app.get('/articlename', function (req, res) {
    var articlename=req.params.articlename;
res.send(createtemplate(articles[articlename]));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});


// Do not change port, otherwise your app won't run on IMAD servers
// Use 8080 only for local development if you already have apache running on 80

var port = 80;
app.listen(port, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
