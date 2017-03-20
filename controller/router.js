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
			title: "Index",
			head: "Apple Index"
		}
	)
});

router.get('/index', function (req, res) {
	res.render(
		'index',
		{
			title: "Index",
			head: "Apple Index"
		}
	)
});

router.get('/news', function (req, res) {
	res.render(
		'news',
		{
			title: "News",
			head: "苹果咨询"
		}
	)
});

router.get('/newsDetails', function (req, res) {
	res.render(
		'newsDetails',
		{
			title: "News Details",
			head: "苹果咨询详情"
		}
	)
});

router.get('/price', function (req, res) {
	res.render(
		'price',
		{
			title: "Price",
			head: "苹果报价"
		}
	)
});

router.get('/update', function (req, res) {
	res.render(
		'update',
		{
			title: "Update",
			head: "苹果更新周期"
		}
	)
});

module.exports = router;
