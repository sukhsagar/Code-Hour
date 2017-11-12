var bodyParser = require('body-parser');
let seniorTeams = ["hello","bb"];
let juniorTeams = ["jj","yy"];
var urlEncodedParser = bodyParser.urlencoded({extended:false});
module.exports = function(app){

  app.get('/',function(req,res){
    res.render('index');
  });

  app.post('/',urlEncodedParser,function(req,res,next){
    let teamID = req.body.id;
    if(seniorTeams.includes(teamID)){
      console.log("seniors");
      // res.render('senior');
      // res.location('/code-hour');
        res.redirect('/code-hour');
        next();
    }
    else if(juniorTeams.includes(teamID)){
      console.log("juniors");
      res.redirect('/code_hour');
      next();
    }
    else {
      res.status(300).send("Team with ID '"+teamID+"' does not exist");
    }
  });

  app.get('/code-hour',function(req,res,next){
    res.render('senior');
    next();
    // res.sendFile(__dirname + '/public/code-hour.html');
  });

  app.get('/code_hour',function(req,res){
    res.sendFile(__dirname + '/public/code_hour.html');
  });
};
