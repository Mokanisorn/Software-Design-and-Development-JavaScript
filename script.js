// ข้อมูลที่ไม่ควรเปลี่ยน ใช้ const
const studentId = "66012345";
const studentName = "นายคณิศร เนตรสุวรรณ";

// คะแนนสามารถแก้ไขได้ ใช้ let
let midtermScore = 38;
let finalScore = 42;

// แสดงผลใน console
console.log("รหัสนักศึกษา:", studentId);
console.log("ชื่อ:", studentName);
console.log("คะแนนกลางภาค:", midtermScore);
console.log("คะแนนปลายภาค:", finalScore);

const student = {
    studentId: "66012345",
    name: "นายคณิศร เนตรสุวรรณ",
    major: "เทคโนโลยีคอมพิวเตอร์",
    gpa: 3.50
};

// แสดงผลข้อมูลจาก object
console.log("รหัสนักศึกษา:", student.studentId);
console.log("ชื่อ:", student.name);
console.log("สาขาวิชา:", student.major);
console.log("เกรดเฉลี่ย:", student.gpa);