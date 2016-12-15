/**
*类的接口：
*
*类的接口是用来约束类的，所以我们要通过implements来实现类接口
*	implements 表示
*
*
**/
// 定义Star类
interface Star {
	// 定义类的属性
	names: string;
	// 定义类的方法接口，返回names属性
	getNames () : string;
}

// 类的接口是用来约束类的
class MovieStar implements Star {
	names: string;
	age: number;
	constructor(names: string,age: number) {
		this.names = names;
		this.age =age;
	}
	getNames() :string {
		return this.names;
	}
	getAge() :void {}
}
// 实现一个类

var demo: MovieStar = new MovieStar("alijun",18);

console.log(demo);

console.log(demo.getNames());
