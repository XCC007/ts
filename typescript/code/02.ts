

function say () :void {
	console.log("success",1111)
}

say();

function add(num1: number, num2?: number, num3?:number) :number {
	if(num2) {
		return num1 + num2;
	}else {
		return num1 + 10;
	}
}

let result :number = add(1,2);

console.log(result)