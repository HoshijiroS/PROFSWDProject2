function play(){
			location.href = "play.html";
		}
		
function logOut(){
			location.href = "loginPage.html";
		}

function checkFields(){
			var check = true;
			
			//Server authentication goes here
			
			if(check){
				location.href = "register.html";
			}
		}

		function signUp(){
			location.href = "register.html"
		}



String.prototype.trim = function(){
			return this.replace(/^\s+|\s+$/g,"");
		}

		function checkFields(){
			var check = true;
			
			if(document.getElementById('firstname').value.trim() == ''){
				document.getElementById('firstname').className = 'incorrect';
				check = false;
				localStorage.setItem('name', document.getElementById('firstname').value);
			  }else	
				document.getElementById('firstname').className  = 'default';
				localStorage.setItem('name', document.getElementById('firstname').value);

			 if(document.getElementById('lastname').value.trim() == ''){
				document.getElementById('lastname').className  = 'incorrect';
				check = false;
			  }else
				document.getElementById('lastname').className = 'default';

			if(document.getElementById('confpassword').value.trim() == '' && document.getElementById('password').value.trim() == ''){
				document.getElementById('confpassword').className = 'incorrect';
				document.getElementById('password').className = 'incorrect';
				check = false;
			  }else{
				document.getElementById('password').className = 'default';
				document.getElementById('confpassword').className = 'default';
				if(document.getElementById('password').value != document.getElementById('confpassword').value){
					document.getElementById('password').className = "incorrect";
					document.getElementById('confpassword').className = "incorrect";
					check = false;
					alert("Please check if the passwords match.");
				}
				}
			if(document.getElementById('email').value.trim() == ''){
				document.getElementById('email').className = 'incorrect';
				check = false;
			  }else{
				document.getElementById('email').className = 'default';
				if(!(document.getElementById('email').value.indexOf("@") > -1 && document.getElementById('email').value.indexOf(".com") > -1)){
					check = false;
					alert("Please enter a valid E-mail address.");
					}
				}
			//Write to database;
				
			if(check){
				location.href = "welcomePage.html";
			}
		}

		
		function addPlaylist(){
			$("#scroll").append("<div class = 'musicPane'><div class = 'musicBox'><div class = 'dragButton'></div><div class = 'deleteButton'></div><div class = 'editButton'></div><div class = 'playlistName' onclick = 'play()'>Name</div></div></div>");
		}

		function play(){
			location.href = 'play.html'
		}

		var songPaths=[];
		var currentSongIndex=0;

		var getMusicFiles=function(evt){
			// console.log(evt.files);
			// var files=evt.target.files;
			// console.log(files.length);


			for(i=0;i<evt.files.length;i++){
				songPaths[songPaths.length]=URL.createObjectURL(evt.files[i]);
			}
			// console.log(songPaths);

			document.getElementById("mySongPlayer").src=songPaths[currentSongIndex];
		}

		function songs(){
			location.href = 'loginPage.html';
		}

		// var songPaths=[];
		// var songFiles=[];
		// var currentSongIndex=0;
		var i = 0;
		var playlistNames=[];

		var addPlaylist=function(evt){
			$("#scroll").append
			("<div class = 'musicPane' id='musicPaneName"+i+"'>"+
				"<div class = 'musicBox'>"+
				"<div class = 'dragButton'></div>"+
				"<div class = 'deleteButton' onclick= 'deleteSong("+i+",this)' > </div>"+
				"<div class = 'editButton' 	 id='editName"+i+"' onclick= 'editSong("+i+")' > </div>"+
				"<div class = 'playlistName' id='songName"+i+"' onclick = 'songs()'>New Playlist</div>"+
			"</div>"+
			"</div>");

			playlistNames[playlistNames.length]=document.getElementById("songName"+i);

			i++

			$(".musicPane").draggable ({ 
			<!-- distance: 50, -->
				axis: 'y'
			});
					
		}
		var resetMusicIndexCount=function(){
			// <!-- songPaths=[]; -->
			// <!-- songFiles=[]; -->
			// <!-- currentSongIndex=0; -->
			// $("#scroll").children().remove();
			for(j=0;i<playlistNames.length;j++){ 
				$("#scroll").append
				("<div class = 'musicPane' id='musicPaneName"+j+"'>"+
					"<div class = 'musicBox'>"+
					"<div class = 'dragButton'></div>"+
					"<div class = 'deleteButton' onclick= 'deletePlaylist("+j+",this)' > </div>"+
					"<div class = 'editButton' 	 id='editName"+j+"' onclick= 'editPlaylist("+j+")' > </div>"+
					"<div class = 'playlistName' id='songName"+j+"' onclick = 'songs()'>New Playlist</div>"+
				"</div>"+
				"</div>");
			}
		}



		var editPlaylist=function(index){
			var name = prompt("Please enter a new name: ");
				if(name != null){
					document.getElementById("songName"+index).innerHTML = name;
				}
		}

		var deletePlaylist=function(index, item){
			$(item).parent().parent().remove();
			// $("scroll").children()[index].remove();	
				// playlistNames[index].splice(index, 1);
				// resetMusicIndexCount();
				// i--;
				// $("#scroll").append
				// ("<div class = 'musicPane' id='musicPaneName"+i+"'>"+
				// 	"<div class = 'musicBox'>"+
				// 	"<div class = 'dragButton'></div>"+
				// 	"<div class = 'deleteButton' onclick= 'deleteSong("+i+",this)' > </div>"+
				// 	"<div class = 'editButton' 	 id='editName"+i+"' onclick= 'editSong("+i+")' > </div>"+
				// 	"<div class = 'playlistName' id='songName"+i+"' onclick = 'songs()'>New Playlist</div>"+
				// "</div>"+
				// "</div>");
			}
			

			// document.getElementById('files').addEventListener('change', getMusicFiles, false);

		// });

		var home=function(){
			location.href = "welcomePage.html";
		}

		var play=function(){
			// console.log("play");
			if(document.getElementById('mySongPlayer').paused) {
				document.getElementById('mySongPlayer').play();
				document.getElementById('playPause').style.backgroundImage = "url('blankSpace.png')";
				document.getElementById('playPause').style.backgroundImage = "url('pause.png')";
			}
			else{
				document.getElementById('mySongPlayer').pause();
				document.getElementById('playPause').style.backgroundImage = "url('blankSpace.png')";
				document.getElementById('playPause').style.backgroundImage = "url('play.png')";
			}
			// document.getElementById("mySongPlayer").play();	
			document.getElementById('songName').innerHTML = songFiles[currentSongIndex].name;
		}
		var prev=function(){
			// console.log("prev");
			console.log(currentSongIndex+" before minus");
			if(songPaths.length>0){
				currentSongIndex--;	
				currentSongIndex%=songPaths.length;
				if(currentSongIndex<0){
					currentSongIndex+=songPaths.length
				}
				// console.log(currentSongIndex+" after minus");
				
				document.getElementById("mySongPlayer").src=songPaths[currentSongIndex];
				play();
			}
		}
		var next=function (){
			// console.log("next");
			if(songPaths.length>0){
				currentSongIndex++;
				currentSongIndex%=songPaths.length;

				document.getElementById("mySongPlayer").src=songPaths[currentSongIndex];
				play();
			}
		}
		// $( document ).ready(function() {
			var songPaths=[];
			var currentSongIndex=0;

			var getMusicFiles=function(evt){
				// console.log(evt.files);
				// var files=evt.target.files;
				// console.log(files.length);


				for(i=0;i<evt.files.length;i++){
					songPaths[songPaths.length]=URL.createObjectURL(evt.files[i]);
				}
				// console.log(songPaths);

				document.getElementById("mySongPlayer").src=songPaths[currentSongIndex];
			}

			function songs(){
				location.href = 'loginPage.html';
			}

			var songPaths2=[];
			var songFiles2=[];
			var currentSongIndex2=0;
			

			var addSongs=function(evt){
				console.log(evt.files);
				<!-- songFiles2 = evt.files; -->
		  
				for(i=0;i<evt.files.length;i++){
					songFiles2[songFiles2.length]=evt.files[i];
					songPaths2[songPaths2.length]=URL.createObjectURL(evt.files[i]);
				}
				console.log(evt.files);

				document.getElementById("mySongPlayer").src=songPaths[currentSongIndex2];
				<!-- generateMusicPlaylist(); -->
				
				for(i=0;i<evt.files.length;i++){ 
					$("#scroll").append
					("<div class = 'musicPane'>"+
						"<div class = 'dragButton'></div>"+
						"<div class = 'deleteButton' onclick='deleteSong("+i+",this)'></div>"+
						"<div class = 'editButton' 	 onclick='editSong("+i+")'></div>"+
						"<div class = 'playlistName' id='songName"+i+"' onclick = 'songs()'>"+
							evt.files[i].name +
						"</div>"+
					"</div>");
				}

				$(".musicPane").draggable ({ 
				<!-- distance: 50, -->
					axis: 'y'
				});
					
			}
	
			var deleteSong=function(index, item){
				console.log("index is "+index);
				if(currentSongIndex!=index){
					songPaths.splice(index, 1);
					songFiles.splice(index, 1);
					$(item).parent().remove();
					resetMusicIndexCount();
				}
				else{
					alert("The file is currently in use");
				}
			}
			var resetMusicIndexCount=function(){
				// <!-- songPaths=[]; -->
				// <!-- songFiles=[]; -->
				// <!-- currentSongIndex=0; -->
				$("#scroll").children().remove();
				for(i=0;i<songFiles.length;i++){ 
					$("#scroll").append
					("<div class = 'musicPane'>"+
						"<div class = 'dragButton'></div>"+
						"<div class = 'deleteButton' onclick='deleteSong("+i+",this)'></div>"+
						"<div class = 'editButton' 	 onclick='editSong("+i+")'></div>"+
						"<div class = 'playlistName' onclick = 'songs()'>"+
							songFiles[i].name +
						"</div>"+
					"</div>");
				}
			}

			var editSong=function(index){
			var name = prompt("Please enter a new name: ");
				if(name != null){
					document.getElementById("songName"+index).innerHTML = name
				}
		}
			
			// document.getElementById('files').addEventListener('change', getMusicFiles, false);

		// });
