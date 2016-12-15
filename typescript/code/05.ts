/*** 
* 定义接口：interface name{}
*
*定义对象接口：
*
*
*  	sex?:string; 中的问号表示可能没有
*
*/
// 定义一个接口
interface Obj {
	name: string;
	age: number;
	sex?:string;
}

var aj: Obj = {
	name: "alijun",
	age:18
}
console.log(aj);

var demo = {
	name:"aaa",
	age:10
}

console.log(demo);

// 定义函数接口
interface Add {
	(num1:number, num2:number, num3?:number):number
}

// 定义add函数
var add: Add = function (n1: number, n2: number, n3:number):number {
	// 返回n1+n2
	return n1 + n2;
}

// 调用add
var result: number = add(10, 20, 30);

// 输出result
console.log(result)