export default function iterateThroughObject(reportWithIterator) {
	let name = '';
	for (let i in reportWithIterator) {
		if (i < reportWithIterator.length - 1) {
			name += reportWithIterator[i]  + ' | ';
		} else {
			name += reportWithIterator[i];
		}
	}
	return name;
}
