export default function createReportObject(employeesList) {
	const obj = {
		allEmployees: {...employeesList},
		getNumberOfDepartments: (n) => Object.keys(n).length,
	};
	
	return obj;
}
