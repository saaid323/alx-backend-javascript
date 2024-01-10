var student1 = {
    firstName: 'alx',
    lastName: '13',
    age: 24,
    location: 'NBO'
};
var student2 = {
    firstName: 'cohort',
    lastName: '13',
    age: 24,
    location: 'NBO'
};
var studentsList = [student1, student2];
for (var _i = 0, studentsList_1 = studentsList; _i < studentsList_1.length; _i++) {
    var i = studentsList_1[_i];
    console.log(i.firstName, i.location);
}
