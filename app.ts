// 변수의 데이터 타입 명시

let stdId : number = 1111;
let stdName : string = 'lee';
let age : number = 20;
let gender : string = 'male';
let course : string = 'TypeScript';
let complete : boolean = false;

// 열거형 : 사용자 정의 타입
enum GenderType {
    Male = 'male',
    Female = 'female',
    GenderNeutral = 'neutral'
}

interface Student {
    stdId : number;
    stdName? : string;
    age? : number;
    gender? : GenderType;
    course? : string;
    complete? : boolean;
    // setName(name : string) : void;
    setName : (name : string) => void;
    // getName : () => string;
}

class MyStudent implements Student {
    stdId = 91011;
    stdName = 'park';
    age = 30;
    gender = GenderType.Male;
    course = 'node.js';
    complete = true;

    setName(name : string) : void {
        this.stdName = name;
        console.log('이름 설정 : ' + this.stdName);
    }
}

const myInstance = new MyStudent();
myInstance.setName('엘리스');

// function getInfo(id : number) : Student
// {
//     return {
//         stdId : id,
//         stdName : 'lee',
//         age : 20,
//         gender : GenderType.Female,
//         course : 'javascript',
//         complete : true
//     };
// }

let std = {
    stdId : 91011,
    stdName : 'park',
    age : 30,
    gender : GenderType.Male,
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