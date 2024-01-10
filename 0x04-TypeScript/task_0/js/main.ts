interface student {
	firstName: string;
        lastName: string;
        age: number;
        location: string;
}
const student1: student = {
        firstName: 'alx',
        lastName: '13',
        age: 24,
        location: 'NBO',
}
const student2: student = {
        firstName: 'cohort',
        lastName: '13',
        age: 24,
        location: 'NBO',
}
const studentsList: student[] = [student1, student2];
for (let i of studentsList) {
	console.log(i.firstName, i.location);
}
