/**
*模块	module
*Ts内置了模块化开发功能，通过module实现的，它定义的内容就是模块内部的内容
*
*export 表示把模块内的变量,属性，方法，类等暴露出来，写在他们的前面
*
**/

//定义一个模块
module StartModule {
	// var data: string = '' + new Date();
// 我想查看日期。我们要将日期暴漏出来
	export var data: string = '' + new Date();

	export function add(num1:number, num2:number) :number {
		return num2 + num1;
	}
	// 定义类
	export class Star {
		name: string;
		constructor(name: string) {
			this.name = name;
		}
		getName() :string {
			return this.name;
		}
	}
}

console.log(StartModule)

console.log(StartModule.data)

// 使用方法
console.log(StartModule.add(20, 30))

// // 实例化一位名称
 var demo: StartModule.Star = new StartModule.Star('刘德华')
 console.log(demo)
