var prev = null
setInterval(function() {
	var lastSeen = $('.pane-header .chat-body .emojitext').last().text();
	if (lastSeen != prev){
		console.log(Date().toLocaleString()+ ", " + lastSeen);
	}
	prev = lastSeen
}, 1000);
