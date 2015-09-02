var gulp=require("gulp"),
	browserSync=require("browser-sync");

gulp.task("browser-sync",function(){
	var files="**/**";
	browserSync.init(files,{
		server:{
			baseDir:"./"
		}
	})
})

gulp.task("dev",["browser-sync"],function(){
	console.log("开发模式已启动!")
});