var A = {a:1, b:2, c:3};

// in연산자는 객체의 키값을 반복
for (var item in A) {
  console.log("key" + item + "value" + A[item]);
}

var B = [{a:1}, {b:2}, {c:3}];

for (var item in B) {
  console.log("배열은 인덱스를 찍음" + item);
}

for (let item of B) {
  console.log(item);
}
