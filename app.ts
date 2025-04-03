// // 변수의 데이터 타입 명시

// let stdId : number = 1111;
// let stdName : string = 'lee';
// let age : number = 20;
// let gender : string = 'male';
// let course : string = 'TypeScript';
// let complete : boolean = false;

// 열거형 : 사용자 정의 타입
enum GenderType {
    Male = 'male',
    Female = 'female',
    GenderNeutral = 'neu'
}

interface Student {
    stdId : number;
    stdName? : string;
    age? : number;
    gender? : 'male' | 'female';
    course? : string;
    complete? : boolean;
    // setName(name : string) : void;
    setName? : (name : string) => void;
    getName? : () => string;
}

class MyStudent implements Student {
    stdId = 91011;
    stdName = 'park';
    age = 30;
    gender : 'male' | 'female' = 'male';
    course = 'node.js';
    complete = true;

    setName(name : string) : void {
        this.stdName = name;
        console.log('이름 설정 : ' + this.stdName);
    }
}

const myInstance = new MyStudent();
myInstance.setName('엘리스');

function getInfo(id : number) : Student
{
    return {
        stdId : id,
        stdName : 'lee',
        //age : 20,
        gender : 'female',
        course : 'javascript',
        complete : true
    };
}

let std = {
    stdId : 91011,
    stdName : 'park',
    age : 30,
    gender : 'male',
    course : 'node.js',
    complete : true
};

function setInfo(student : Student) : void {
    console.log(student);
}

// setInfo(std);

// console.log(getInfo(5678));


// 함수의 데이터 타입 명시(매개변수, 리턴타입)
// function Plus(a : number, b? : number) : number {
//     return a + b;
// }

let anyVal : any = 100;
anyVal = true;

type strOrNum = number | string;

let numStr : strOrNum = '100';
let item : number;

function convertToString(val : strOrNum) : string {
    if(typeof val === 'string') {
        item = 0;
    } else {
        item = val;
    }

    return String(val);
}

function convertToNumber(val : strOrNum) : number {
    return Number(val);
}

console.log(convertToString(numStr));
console.log(convertToNumber(numStr));

let numbers : number[] = [1, 2, 3, 4, 5];

let fruits : string[] = ['apple', 'banana', 'orange'];

for(let i = 0; i < numbers.length; i++) {
    console.log(numbers[i]);
}

for (let i = 0; i < fruits.length; i++) {
    console.log(fruits[i]);
}

// 배열의 유니온 타입
let mixedArray : (number | string)[] = [1, 'two', 3, 'four'];

for(let i = 0; i < mixedArray.length; i++) {
    console.log(mixedArray[i]);
}


let infer = [1, 2, 3];  // 타입 추론

for(let i = 0; i < infer.length; i++) {
    console.log(infer[i]);
}


let readOnlyArray : ReadonlyArray<number> = [1, 2, 3];


// tuple 타입 : 타입의 순서가 정해져있음
let greeting : [number, string, boolean] = [1, 'hello', true];

for(let i = 0; i < greeting.length; i++) {
    console.log(greeting[i]);
}


// spread 연산자
let firstArray = [1, 2, 3];
let secondArray = [4, 5, 6];

let combineArray = [...firstArray, ...secondArray];

for(let i = 0; i < combineArray.length; i++) {
    console.log(combineArray[i]);
}