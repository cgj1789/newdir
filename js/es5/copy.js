// shallow copy
var obj = { a: 1 };
var copy = obj;
obj.a = 2;
console.log(obj);
console.log(copy);

// deep copy
var obj = { a: 1 };
// es5 방식으로 새로운 메모리 주소에 값을 할당함
var copy = Object.assign({}, obj);
// es6 스프레드 연산자로 deep copy 가능
var copy2 = {...obj};
obj.a = 2;
console.log(obj);
console.log(copy);
console.log(copy2);
