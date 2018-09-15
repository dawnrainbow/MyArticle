function calculate (y,m,d,h) {
    //获取初始时间
    //一句话结束 用分号
var now=new Date();
var startDate = new Date(y, m-1, d,h); 
var dt = now.getTime()-startDate.getTime();
var day = Math.floor(dt/1000/60/60/24%30);
// Math.floor 向下取整数  % 取余数
var hour = Math.floor(dt/1000/60/60%24); 

var minute = Math.floor(dt/1000/60%60);
var second = Math.floor(dt/1000%60);
var month = Math.floor(dt/1000/60/60/24/30);
document.getElementById('content').innerHTML = month +'月' + day + '天' + hour + '小时' + minute + '分' + second + '秒';
}
// 通过ID来获取元素 
calculate(2017,8,23,17);
setInterval(function () {
    calculate(2017,8,23,17);
},1000);
// 创建定时器，第一个参数传函数，第二个参数传毫秒数 setInterval（ ， ）

function add (a,b){
    return a+b;
}

var c=add(1,2);
console.log(c);