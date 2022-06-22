module.exports = function toReadable(number) {
	let arr10 = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten',];
	let arr20 = ['eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
	let arr100 = ['twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
	if (number < 11) {
		return arr10[number];
	}
	if (number < 20) {
		return arr20[number - 11]
	}
	if (number < 100) {
		if (number.toString()[1] == '0') {
			return arr100[Number(number.toString()[0]) - 2];
		}
		else {
			return arr100[Number(number.toString()[0]) - 2] + " " + arr10[Number(number.toString()[1])];
		}
	}
	if (number < 1000) {
		if (number.toString()[1] == '0' && number.toString()[2] == '0') {
			return arr10[Number(number.toString()[0])] + " " + "hundred";
		}
		if (number.toString()[1] + number.toString()[2] < '11') {
			return arr10[Number(number.toString()[0])] + " " + "hundred" + " " +
				arr10[Number(number.toString()[1] + number.toString()[2])];
		}
		if (number.toString()[1] + number.toString()[2] < '20') {
			return arr10[Number(number.toString()[0])] + " " + "hundred" + " " +
				arr20[Number(number.toString()[1] + number.toString()[2]) - 11];
		}
		if (number.toString()[2] == '0') {
			return arr10[Number(number.toString()[0])] + " " + "hundred" + " " +
				arr100[Number(number.toString()[1]) - 2];
		}
		return arr10[Number(number.toString()[0])] + " " + "hundred" + " " +
			arr100[Number(number.toString()[1]) - 2] + " " + arr10[Number(number.toString()[2])];
	}
}
