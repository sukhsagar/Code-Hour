var bodyParser = require('body-parser');
let seniorTeams = ["hello","bb"];
let juniorTeams = ["jj","yy"];
var urlEncodedParser = bodyParser.urlencoded({extended:false});
module.exports = function(app){

  app.get('/',function(req,res){
    res.render('index');
  });

  app.post('/',urlEncodedParser,function(req,res){
    let teamID = req.body.id;
    if(seniorTeams.includes(teamID)){
        return res.redirect('/code-hour');
    }
    else if(juniorTeams.includes(teamID)){
        return res.redirect('/code_hour');
    }
    else {
      res.status(300).send("Team with ID '"+teamID+"' does not exist");
    }
  });

  app.get('/code-hour',function(req,res){
    res.render(__dirname + '/public/seniors.html');
  });

  app.get('/code_hour',function(req,res){
    res.sendFile(__dirname + '/public/juniors.html');
  });

  app.delete('/todo',function(req,res){

  });
};
