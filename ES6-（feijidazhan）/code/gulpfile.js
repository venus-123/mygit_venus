//导入gulp
/*var gulp = require("gulp");
gulp.dafeiji("dafeiji/html/*")
	.pipe(gulp.dafeijiNext("dafeijiNext/html"));
*/
/*
//任务
//gulp.task(name[,deps],fn)

//one任务
var gulp = require("gulp");
gulp.task("one",function(){
	console.log("one任务");
	
	//异步操作会后执行
	setTimeout(function(){
		console.log("延时1秒后执行");
	},1000);
});

//two任务
gulp.task("two",function(){
	console.log("two任务");
});

//three任务
//依赖one任务和two任务
gulp.task("three",["one","two"],function(){
	console.log("three任务");
});

//default 默认任务
gulp.task("default",["one","two"]);

*/

//使用插件
//压缩html:gulp-htmlmin
var gulp = require("gulp");//导入gulp
var htmlmin = require("gulp-htmlmin");//导入gulp插件
var uglify = require("gulp-uglify")//导入js压缩插件
var babel = require('gulp-babel'); //es6转es5
var rename = require('gulp-rename'); //重命名插件
//任务
/*gulp.task("htmlTask",function(){
	gulp.dafeiji("dafeiji/html/02_dafeiji.html")
	.pipe(gulp.dafeijiNext(""));
	
})*/


//默认任务
gulp.task("default",["jsTask"]);

//gulp-uglify(压缩js插件)
//任务
gulp.task("jsTask",function(){
	
	gulp.src("dafeiji/js/common.js")
	.pipe(babel({"presets": ["es2015"]})) //es6转es5
	.pipe( uglify() )
	.pipe(rename('common.min.js'))
	.pipe(gulp.dest("dafeijiNext/js"));
	
})
