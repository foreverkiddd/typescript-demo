// 변수의 데이터 타입 명시
var stdId = 1111;
var stdName = 'lee';
var age = 20;
var gender = 'male';
var course = 'TypeScript';
var complete = false;
// 열거형 : 사용자 정의 타입
var GenderType;
(function (GenderType) {
    GenderType["Male"] = "male";
    GenderType["Female"] = "female";
    GenderType["GenderNeutral"] = "neutral";
})(GenderType || (GenderType = {}));
var MyStudent = /** @class */ (function () {
    function MyStudent() {
        this.stdId = 91011;
        this.stdName = 'park';
        this.age = 30;
        this.gender = GenderType.Male;
        this.course = 'node.js';
        this.complete = true;
    }
    MyStudent.prototype.setName = function (name) {
        this.stdName = name;
        console.log('이름 설정 : ' + this.stdName);
    };
    return MyStudent;
}());
var myInstance = new MyStudent();
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
var std = {
    stdId: 91011,
    stdName: 'park',
    age: 30,
    gender: GenderType.Male,
    course: 'node.js',
    complete: true
};
function setInfo(student) {
    console.log(student);
}
// setInfo(std);
// console.log(getInfo(5678));
// 함수의 데이터 타입 명시(매개변수, 리턴타입)
// function Plus(a : number, b? : number) : number {
//     return a + b;
// }
