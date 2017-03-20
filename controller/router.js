/*
* 处理返回动态页面的写法是： render
* 返回静态页面的写法是： sendfile
*/

var express = require('express');
var router = express();

router.get('/', function (req, res) {
	res.render(
		'index',
		{
			title: "Apple Index",
			head: "Apple Index"
		}
	)
});

router.get('/index', function (req, res) {
	res.render(
		'index',
		{
			title: "Apple Index",
			head: "Apple Index"
		}
	)
});

router.get('/news', function (req, res) {
	res.render(
		'news',
		{
			title: "Apple News",
			head: "苹果咨询"
		}
	)
});

router.get('/newsDetails', function (req, res) {
	res.render(
		'newsDetails',
		{
			title: "Apple News Details",
			head: "苹果咨询详情"
		}
	)
});

router.get('/price', function (req, res) {
	res.render(
		'price',
		{
			title: "Apple Price",
			head: "苹果报价"
		}
	)
});

module.exports = router;
