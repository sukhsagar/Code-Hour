var bodyParser = require('body-parser');
let seniorTeams = ["ch_10072015_hs",
                  "ch_10202016_ka",
                  "ch_10482016_sa",
                  "ch_10812013_pk"];
let juniorTeams = ["ch_10112016_as",
                  "ch_10442017_st",
                  "ch_10512015_kn",
                  "ch_10582017_tn",
                  "ch_10292017_mk",
                  "ch_10192017_js"];
var urlEncodedParser = bodyParser.urlencoded({extended:false});
module.exports = function(app){

  app.get('/',function(req,res){
    res.render('index');
  });

  app.post('/',urlEncodedParser,function(req,res,next){
    let teamID = req.body.id;
    if(seniorTeams.includes(teamID)){ //for seniors
        res.send('/code-hour');
        next();
    }
    else if(juniorTeams.includes(teamID)){ // for juniors
      res.send('/code_hour');
      next();
    }
    else if(teamID.localeCompare("ch_do_level1")){ //senior challenges junior
      res.send('/level1');
      next();
    }
    else if(teamID.localeCompare("ch_do_level2")){ //junior challenges senior
      res.send('/level2');
      next();
    }
    else {
      res.status(300).send("Team with ID '"+teamID+"' does not exist");
    }
  });

  app.get('/code-hour',function(req,res,next){
    res.render('senior');
    next();
  });

  app.get('/code_hour',function(req,res){
    res.render('junior');
  });

  app.get('/level1',function(req,res){ //senior challenges junior
    res.render('junior');
  });

  app.get('/level2',function(req,res){ // junior challenges senior
    res.render('senior');
  });
};
