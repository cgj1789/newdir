let circleArea = function(pi, r) {
    let area = pi * r * r;
    return area;
};

// 위의 문장을 한줄로 작성하시오.
let circleArea = (pi, r) => pi * r * r;

let result = circleArea(3.14, 3);

console.log(result); //실행 결과 "28.26"
// 익명함수를 arrow 함수로 변경 가능
// function을 없애고 입력과 {} 사이에 => 삽입
// 출력 부분이 한줄이면 {} 생략 가능
// 출력 부분이 표현식이면 return 생략 가능
// 입력부분이 변수가 하나면 () 생략 가능
