(function() {
	var names = [ 'Yaakov', 'ingu', 'Meenu', 'hanim', 'ayasi', 'paru', 'lindu', 'chippi', 'keeri', 'siso' ];
	for (var i = 0; i < names.length; i++) {
		var firstLetter = names[i].charAt(0).toLowerCase();
		if (firstLetter === 'j') {
			byeSpeaker.speak(names[i]);
		} else {
			helloSpeaker.speak(names[i]);
		}
	}
})();
