
/**
* 类 ：通过class关键字定义一个类
*
*	static 写在 属性或方法前面，表示静态化这个属性或方法，
	静态化的属性或方法，只能通过Book类来访问
*
**/
//定义Book类
class Book {
	title: string = "设计模式";
	//静态属性，方法只能通过Book类来访问
	static size: number = 100;
	color: string;
	price: number;
	//定义类的 构造函数
	constructor(price: number) {
		this.price = price;
		this.color = "red";
	}
	getTitle() :string {
		return this.title;
	}
	//静态属性，方法只能通过Book类来访问
	static getSize () :void {
		console.log('hello,我是静态方法，只能用Book类调用')
	}
}

// 创建一个book的实例化对象
var book:Book =new Book(60);

console.log(book,1111);

console.log(Book.size,"hello,我是静态属性，只能用Book类调用");

// console.log(book.size,"访问不到，会报一个错误");

Book.getSize();

console.log(book.getTitle(),"book调用的方法");