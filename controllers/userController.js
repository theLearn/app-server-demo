var crypto = require('crypto');
var mongoose = require('mongoose');
  UesrInfo = mongoose.model('UesrInfo');

function hashPW(pwd)
{
  return crypto.createHash('sha256').update(pwd).digest('base64').toString();
}

exports.signup = function(req, res){
  var userInfo = new UserInfo({username:req.body.username});
  userInfo.set('password', hashPW(req.body.password));
  userInfo.set('email', req.body.email);
  userInfo.save(function(err){
    if(err)
    {
      res.sessor.error = err;
      res.redirect('signup');
    }
    else
    {
      req.session.user = userInfo.id;
      req.session.username = userInfo.username;
      req.session.msg = 'Authenticated as' + user.username;
      res.redirect('/');
    }
  });
};

exports.login = function(req, res){
  UserInfo.findOne({username:req.body.username)
    .exec(function(err, userInfo){
      if(!userInfo)
      {
        err = 'UserInfo Not Found';
      }
      else if(userInfo.password === hashPW(req.body.password))
      {
        req.session.regenerate(function(){
          req.session.user = userInfo.id;
          req.session.username = userInfo.username;
          req.session.msg = 'Authenticated as' + user.username;
          res.redirect('/');
        });
      }
      else
      {
        err = 'Authenticated faield';
      }

      if(err)
      {
        req.session.regenerate(function(){
          req.session.msg = err;
          res.redirect('/login');
        });
      }

    });
};

exports.getUserProfile = function(req, res){
  UserInfo.findOne({_id:req.session.user})
    .exec(function(err, userInfo){
      if(!userInfo)
      {
        res.json(404, {err:'UserInfo Not Found'});
      }
      else
      {
        res.json(200, userInfo);
      }
    });
};

exports.updateUser = function(req, res){
  UserInfo.findOne({_id:req.session.user})
    .exec(function(err, userInfo){
      if(!userInfo)
      {
        res.json(404, {err:'UserInfo Not Found'});
      }
      else
      {
        userInfo.set('email', req.body.email);
        userInfo.save(function(err){
          if(err)
          {
            res.sessor.err = err;
          }
          else {
            req.session.msg = "Update Success";
          }
          res.redirect('/user');
        });
      }
    });
};

exports.deleteUser = function(req, res){
  UserInfo.findOne({_id:req.session.user})
    .exec(function(err, userInfo){
      if(!userInfo)
      {
        req.session.msg = 'UserInfo Not Found';
      }
      else
      {
        userInfo.remove(function(err){
          if(err)
          {
            req.session.msg = err;
          }
        });
      }

      req.session.destroy(function(){
        res.redirect('/login');
      });

    });
};
