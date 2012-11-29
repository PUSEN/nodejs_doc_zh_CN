var express = require("express"), jade = require("jade");

var app = express();

app.configure(function(){
  app.set('views', __dirname + '/views');
  app.set('view engine', 'jade');
  app.use(express.bodyParser());
  app.use(app.router);
  app.use(express.static(__dirname + '/public'));
});

app.get('/', function(req, rsp){
  rsp.render('index', {
    title : '首页'
  });
});

app.get('/express', function(req, rsp){
  rsp.render('express', {
    title : 'EXPRESS'
  });
});

app.get('/mongodb', function(req, rsp){
  rsp.render('mongodb', {
    title : '首页'
  });
});

app.get('/jade', function(req, rsp){
  rsp.render('jade', {
    title : 'jade'
  });
});

app.listen(4587);
console.log("nodejs_doc_zh_CN started at http://localhost:4587");