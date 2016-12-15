/**
*继承 ：extends
*如果子类定义了与父类相同的属性或者方法，会覆盖掉父类
	在子类构造函数中想继承父类参数，可以通过super实现，将参数传递给super
	注意super方法一定要先执行
*
*
*
*
*
*
***/
// 定义一个book类
class Book{
	title: string = "设计模式";
	price: number;
	color: string;
	date: string;
	constructor(price: number){
		// 将price保存起来
		this.price = 222222;
		this.color = 'red';
		this.date = '234';
	}
	// 返回title属性
	getTitle () : string {
		// body...
		// 返回title
		return this.title;
	}
	static getSize () :void {
		console.log('hello')
	}
}

// 定义一个jsBook类，继承Book
class JsBook extends Book {
	price: number;
	date: string;
	constructor (price: number,date:string) {
		super(price);
		// this.price = price;
		this.date = date;
	}
	getTitle(): string {
		return 'success';
	}
}

// 实例化jsBook
var jsBook = new JsBook(20, '9-2911');
console.log(jsBook.getTitle());
// 查看实例化对象
console.log(jsBook,111)
console.log(jsBook.color)


