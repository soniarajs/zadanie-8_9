function DrawTree (rows) {
	var star

	for ( i = 1 ; i <= rows ; i++ ) {
	star = '';
		for ( var j = 0 ; j < i ; j++) {
			star += '*'
		}
		console.log(star);

	}
}
DrawTree (4);
