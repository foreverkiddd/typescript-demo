// 일반적인 직원 정보
// let empName : string;
// let age : number;
// let empJob : string;
// function printEmp(empName : string, age : number, empJob : string) : void {
//     console.log(`${empName}의 나이는 ${age}이고, 직업은 ${empJob}입니다.`);
// }
// printEmp('kim', 20, 'developer');
// 클래스와 객체, 생성자
// 멤버 변수 == 속성 == 프로퍼티
// 멤버 함수 == 메소드
var Employee = /** @class */ (function () {
    // 생성자 constructor
    // this => 자기 자신의 객체를 나타냄
    function Employee(_empName, _age, _empJob) {
        var _this = this;
        this._empName = _empName;
        this._age = _age;
        this._empJob = _empJob;
        this.printEmp = function () {
            console.log("".concat(_this._empName, "\uC758 \uB098\uC774\uB294 ").concat(_this._age, "\uC774\uACE0, \uC9C1\uC5C5\uC740 ").concat(_this._empJob, "\uC785\uB2C8\uB2E4."));
        };
    }
    Object.defineProperty(Employee.prototype, "empName", {
        // get/set
        get: function () {
            return this._empName;
        },
        set: function (val) {
            this._empName = val;
        },
        enumerable: false,
        configurable: true
    });
    return Employee;
}());
// public private protected => 접근 지정자
var employee1 = new Employee('Kim', 30, '소프트웨어 개발자');
employee1.empName = 'lee';
employee1.printEmp();
