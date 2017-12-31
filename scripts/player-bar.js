
	setInterval( () => {
     if (player.playState !== 'playing') { return; } 
     const currentTime = player.getTime();
     const duration = player.getDuration();
     const percent = (currentTime / duration) * 100;
     $('#time-control input').val(percent);   
	}, 1000);
}



