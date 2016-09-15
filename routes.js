var express = require('express');
var url = require('url');
module.exports = function(app) {
  app.use('/static', express.static( './images'));
  app.get('/listCards', function(req, res){
    app.set('json spaces', 4);
    var names = ['童年的热血', '美食的诱惑', '酷炫的能力', '奇幻的世界', '萌萌哒', '大脑洞'];
    var imageUrls = ['http://192.168.1.102:8080/static/one_piece.jpg',
                    'http://192.168.1.102:8080/static/shiling.jpg',
                    'http://192.168.1.102:8080/static/fate.jpg',
                    'http://192.168.1.102:8080/static/slove.jpg',
                    'http://192.168.1.102:8080/static/zero.jpg',
                    'http://192.168.1.102:8080/static/kongbai.jpg'];
    var descriptions = ['血液沸腾的感觉还记得吗?', '肚子饿了吗?', '画面太美我不敢看', '不一样的世界，不一样的体验', '萌即是正义', '我表示思考不能'];
    var types = ['hot', 'feed', 'ability', 'world', 'meng', 'big'];
    var array = [];

    for (var i = 0; i < imageUrls.length; i++) {
      var item = {
        name:names[i],
        imageUrl:imageUrls[i],
        description:descriptions[i],
        type:types[i]
      };

      array[i] = item;
    }

    res.json(200, {
      status:0,
      cardList:array,
      description:'成功'
    });
  });

  app.get('/getCardDetail', function(req, res){
    app.set('json spaces', 4);

    var imageUrls = [];
    var contents = [];
    var infoIds = ['1','1','1','1','1','1','1','1','1','1'];
    var descriptions = ['20话','20话','20话','20话','20话','20话','20话','20话','20话','20话'];
    var dates = ['2016-09-15 00:00:00','2016-09-15 00:00:00','2016-09-15 00:00:00','2016-09-15 00:00:00','2016-09-15 00:00:00','2016-09-15 00:00:00','2016-09-15 00:00:00','2016-09-15 00:00:00','2016-09-15 00:00:00','2016-09-15 00:00:00'];

    var query = url.parse(req.url,true).query;
    switch (query.type) {
      case 'hot':
        imageUrls = ['http://192.168.1.102:8080/static/one_piece.jpg',
                    'http://192.168.1.102:8080/static/bleach.jpg',
                    'http://192.168.1.102:8080/static/jiajiao.jpg',
                    'http://192.168.1.102:8080/static/meishi.jpg',
                    'http://192.168.1.102:8080/static/qumo.jpg',
                    'http://192.168.1.102:8080/static/natura.jpg',
                    'http://192.168.1.102:8080/static/fate.jpg',
                    'http://192.168.1.102:8080/static/ling100.jpg',
                    'http://192.168.1.102:8080/static/kongbai.jpg',
                    'http://192.168.1.102:8080/static/slove.jpg'];
        contents = ['海贼王', '死神', '家庭教师', '美食的俘虏', '驱魔少年', '火隐忍者', '命运之夜', '灵能百分百', '空白兄妹', '刀剑神域'];
        break;
      case 'feed':
        imageUrls = ['http://192.168.1.102:8080/static/shiling.jpg',
                    'http://192.168.1.102:8080/static/meishi.jpg',
                    'http://192.168.1.102:8080/static/one_piece.jpg'];
        contents = ['食戟之灵', '美食的俘虏', '海贼王'];
        break;
      case 'ability':
        imageUrls = ['http://192.168.1.102:8080/static/ling100.jpg',
                    'http://192.168.1.102:8080/static/zero.jpg',
                    'http://192.168.1.102:8080/static/jiajiao.jpg',
                    'http://192.168.1.102:8080/static/qumo.jpg',
                    'http://192.168.1.102:8080/static/slove.jpg'];
        contents = ['灵能百分百', '从零开始', '家庭教师', '驱魔少年', '刀剑神域'];
        break;
      case 'world':
        imageUrls = ['http://192.168.1.102:8080/static/slove.jpg',
                    'http://192.168.1.102:8080/static/kongbai.jpg',
                    'http://192.168.1.102:8080/static/jiajiao.jpg',
                    'http://192.168.1.102:8080/static/qumo.jpg',
                    'http://192.168.1.102:8080/static/zero.jpg'];
        contents = ['刀剑神域', '空白兄妹', '家庭教师', '驱魔少年', '从零开始'];
        break;
      case 'meng':
        imageUrls = ['http://192.168.1.102:8080/static/zero.jpg',
                    'http://192.168.1.102:8080/static/kongbai.jpg',
                    'http://192.168.1.102:8080/static/qingyin.jpg',
                    'http://192.168.1.102:8080/static/huyao.jpg',
                    'http://192.168.1.102:8080/static/shiling.jpg'];
        contents = ['从零开始', '空白兄妹', '轻音', '狐妖小红娘', '食戟之灵'];
        break;
      case 'big':
        imageUrls = ['http://192.168.1.102:8080/static/kongbai.jpg',
                    'http://192.168.1.102:8080/static/qingyin.jpg',
                    'http://192.168.1.102:8080/static/shiling.jpg',
                    'http://192.168.1.102:8080/static/zero.jpg',
                    'http://192.168.1.102:8080/static/huyao.jpg'];
        contents = ['空白兄妹', '轻音', '食戟之灵', '从零开始', '狐妖小红娘'];
        break;
      default:
        imageUrls = ['http://192.168.1.102:8080/static/one_piece.jpg',
                    'http://192.168.1.102:8080/static/bleach.jpg',
                    'http://192.168.1.102:8080/static/jiajiao.jpg',
                    'http://192.168.1.102:8080/static/meishi.jpg',
                    'http://192.168.1.102:8080/static/qumo.jpg',
                    'http://192.168.1.102:8080/static/natura.jpg',
                    'http://192.168.1.102:8080/static/fate.jpg',
                    'http://192.168.1.102:8080/static/ling100.jpg',
                    'http://192.168.1.102:8080/static/kongbai.jpg',
                    'http://192.168.1.102:8080/static/slove.jpg'];
        contents = ['海贼王', '死神', '家庭教师', '美食的俘虏', '驱魔少年', '火隐忍者', '命运之夜', '灵能百分百', '空白兄妹', '刀剑神域'];
        break;
    }

    var array = [];

    for (var i = 0; i < imageUrls.length; i++) {
      var item = {
        imageUrl:imageUrls[i],
        content:contents[i],
        description:descriptions[i],
        date:dates[i],
        infoId:infoIds[i]
      };

      array[i] = item;
    }

    res.json(200, {
      status:0,
      cardRecommends:array,
      description:'成功'
    });
  });
}
