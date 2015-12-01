var a = ['','one','two','three','four', 'five','six','seven','eight','nine', 'ten','eleven','twelve','thirteen', 'fourteen','fifteen','sixteen', 'seventeen','eighteen','nineteen'];
var b= ['', '', 'twenty','thirty','forty','fifty', 'sixty','seventy','eighty','ninety'];


function int_to_word (num) {
	if ((num = num.toString()).lenght > 9) return 'overflow';
	n=('000000000' + num).substr(-9).match(/^(\d{3})(\d{3})(\d{3})$/);
	if (!n) return; 
	var str = '';
	var at
	var bt
	var ct
	if (n[1][1] != 1) {
		at = (b[n[1][1]] + ' ' + a[n[1][2]])
	} 
	else {
	at = (a[Number(n[1][1] + n[1][2])])	
	};

	if (n[2][1] != 1) {
		bt = (b[n[2][1]] + ' ' + a[n[2][2]])
	} 
	else {
		bt = (a[Number(n[2][1] + n[2][2])])	
	};

	if (n[3][1] != 1) {
		ct = (b[n[3][1]] + ' ' + a[n[3][2]])
	} 
	else {
		ct = (a[Number(n[3][1] + n[3][2])])	
	};

		str += (n[1] !=0) ? (a[Number(n[1])] || a[n[1][0]] + ' ' + ' hundred ' + at) + " million " : '';
		str += (n[2] !=0) ? (a[Number(n[2])] || a[n[2][0]] + ' ' + ' hundred ' + bt) + " thousand " : '';
		str += (n[3] !=0) ? (a[Number(n[3])] || a[n[3][0]] + ' ' + ' hundred ' + ct) : '';
		
		return str;
	
	};

console.log(int_to_word(724000))
