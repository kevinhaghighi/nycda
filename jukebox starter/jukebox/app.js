$(document).ready(function(){
	function Jukebox(){
		let currentSong = "";
		let tracks = [];
		let trackName = [];
		let trackNum = 0;
		const audio = $("#myAudio")[0];

		//Adds a song to the Jukebox object
		this.addSongToTrack = function(song){
			tracks.push(song);
			return tracks;
		};
		this.displaySongs = function(){
			$('#list_songs').html('')
			for (i in tracks) {
				$("#list_songs").append("<div class='song-display'><a href='#' class='songName' data-id='" + i + "' >" + tracks[i].songName + "</a></div>")
			}
		};

		this.play = function() {
	       audio.play();
	    };

	    this.stop = function() {
	      audio.pause();
	    };

	    this.loadInSong = function(selectedSong){
	    	let player = $('#myAudio');
	    	player.html("");
	    	trackNum = selectedSong;
	  		let songSrc = tracks[selectedSong].location;
	    	player.append('<source src="' + songSrc + '" type="audio/mp4">"');
	    	player[0].load();
	    	player[0].play();
	    	return trackNum;
	    };
	    this.loadNext = function(){
	    	audio.pause();
	    	if (trackNum === tracks.length - 1){
	    		trackNum = 0;
	    	} else {
	    		trackNum = trackNum + 1;
	    	}
	    	
	    	this.loadInSong(trackNum);
	    	return trackNum;
	    }

	     this.loadPrev = function(){
	    	audio.pause();
	    	if (trackNum === 0){
	    		trackNum = tracks.length -1;
	    	} else {
	    		trackNum = trackNum - 1;
	    	}	 
	    	this.loadInSong(trackNum);
	    	return trackNum;
	    }

	    this.addSong = function() {
	       let location = $("#addSong").val();
	       let songName =  $("#addName").val();
	       let songTitle =  $("#addTitle").val();
	       let newSong = new Song(songName, songTitle, location)
	       tracks.push(newSong);
	       this.displaySongs();
     	}

	};
	function Song(songName, title, location){
		this.songName = songName
		this.title = title;
		this.location = location;
	};

	let pressure = new Song("Under Pressure", "Under Pressure.mp3", "audio/Under Pressure.mp3");

	jukeBox = new Jukebox();
		jukeBox.addSongToTrack(pressure);	
	//display the songs
	jukeBox.displaySongs();

	//play the first song on load
	let songList = $('#list_songs');
	jukeBox.loadInSong(0);

	//load in selected song & play it on click
	$(songList).on('click', '.songName',function(){
		let selectedSong = this.dataset.id;
		console.log(selectedSong);
		jukeBox.loadInSong(selectedSong);
	});

});