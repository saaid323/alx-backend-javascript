export default function cleanSet(set, str){
	let arr = [];
	let text = '';
	if (str === '') {
		return '';
	}
	for (let i of set) {
		if (i.startsWith(str)) {
			arr.push(i.slice(str.length));
		}
	}
	for (let i in arr) {
		if (i < arr.length -1) {
			text += arr[i] + '-';
		} else {
			text += arr[i];
		}
	}
	return text;
}
