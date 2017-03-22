var hbs = require('hbs');                               // 加载hbs模块
var express = require('express');
var app = module.exports.app = exports.app = express(); // 将 express 开发出去
var port = 6000;                         // 设定port变量，意为访问端口
var router = require('./controller/router');
var blocks = {};

app.set('view engine', 'hbs');                          // 指定模板文件的后缀名为hbs
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.methodOverride());
app.use(app.router);
app.use(express.static('client'));                      // 设定本地开发静态文件目录
app.engine('html', hbs.__express);                      // 运行hbs模块
app.listen(port);                                       // 设置端口
app.use(router);

hbs.registerHelper('extend', function (name, context) { // 设置模版引擎引用 js 和 css
	var block = blocks[name];
	if (!block) {
		block = blocks[name] = [];
	}
	block.push(context.fn(this));
});

hbs.registerHelper('block', function (name) {
	var val = (blocks[name] || []).join('\n');
	blocks[name] = [];
	return val;
});
