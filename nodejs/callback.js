var v={}

v.hell=function(data,callback)
{
	console.log("helloworld :"+data);
	return callback("Im callback");
}
v.he=function(){
	v.hell("im function",function(d){
		console.log("callback is : "+d);
	});
}
v.he();