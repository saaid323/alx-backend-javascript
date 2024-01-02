export default function createIteratorObject(report) {
	let i = [];
	for (let departments in report.allEmployees) {
		i.push(...report.allEmployees[departments]);
	}
	return i;
}
