var step=0;
var gameWon=false;
var mode="player";
var next="";
var win=0;
playerSymbol="X";
computerSymbol="O";
var arr=["s","s","s","s","s","s","s","s","s"];
var combs=[[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]];
function chooseSymbol(e) {
	playerSymbol=this.textContent;
	if(computerSymbol==playerSymbol) computerSymbol="X";
	menu.style.display="none";
  fields.forEach(field => field.addEventListener('click', checkField));
}
function restartGame() {
  end.style.display="flex";
  setTimeout(function() { end.style.display="none";},1000);
  setTimeout(function() {
	gameWon=false;
	step=0;
	fields.forEach(field => field.textContent="");
	arr=["s","s","s","s","s","s","s","s","s"];
  end.style.display="none";},2000);

	if(win==10) {
		var plus=parseInt(playerscore.textContent)+1;
		playerscore.textContent= plus+":";
	} else if(win==-10) {
		var plus=parseInt(computerscore.textContent)+1;
		computerscore.textContent= plus;
	}
	win=0;
}
function checkWin(brr) {
	for(i=0; i<combs.length; i++) {
		if(brr[combs[i][0]]==undefined) return;
		if(brr[combs[i][0]]!="s" && brr[combs[i][0]]==brr[combs[i][1]] && brr[combs[i][1]]==brr[combs[i][2]]) {
				gameWon=true;

				console.log('"' + brr[combs[i][0]] + '"' + ' Wins!');
				if(brr[combs[i][0]]==playerSymbol) {
				 	return 10;
				} else return -10;
		}
	}
	if(brr.indexOf("s")==-1) gameWon=true;
	return 0;
}
function checkField(e) {
	if(mode=="player") {
		step++;
		if(this.textContent!="") return;
		this.textContent=playerSymbol;
		this.style.color="green";
		arr[this["id"]]=playerSymbol;
		console.log("Player: "+arr);
		win=checkWin(arr);
		if(gameWon) {
			restartGame();
			return;
		}
		mode="computer";
		}
		if(mode=="computer") {
				step++;
				if(step==1) {
					if(fields[id=4].innerText=="") {
					var box = document.querySelector('.four');
					} else var box = document.querySelector('.two');
				}
				if(step==2) {
					if(fields[id=4].innerText=="") {
					var box = document.querySelector('.four');
				} else var box = document.querySelector('.two');
				}
				if(step>2 && step<9) {
					for(i=0; i<combs.length; i++) {
						var crr=[arr[combs[i][0]],arr[combs[i][1]],arr[combs[i][2]]];
						if(arr[combs[i][0]]=="s" && arr[combs[i][1]]=="O" && arr[combs[i][1]]==arr[combs[i][2]] || arr[combs[i][1]]=="s" && arr[combs[i][0]]=="O" && arr[combs[i][0]]==arr[combs[i][2]] || arr[combs[i][2]]=="s" && arr[combs[i][1]]=="O" && arr[combs[i][1]]==arr[combs[i][0]])  {
							next = combs[i][crr.indexOf("s")];
						}
					}
					if(next=="") {
						for(i=0; i<combs.length; i++) {
							var crr=[arr[combs[i][0]],arr[combs[i][1]],arr[combs[i][2]]];
							if(arr[combs[i][0]]=="s" && arr[combs[i][1]]=="X" && arr[combs[i][1]]==arr[combs[i][2]] || arr[combs[i][1]]=="s" && arr[combs[i][0]]=="X" && arr[combs[i][0]]==arr[combs[i][2]] || arr[combs[i][2]]=="s" && arr[combs[i][1]]=="X" && arr[combs[i][1]]==arr[combs[i][0]])  {
							next = combs[i][crr.indexOf("s")];
							}
						}
					}
					if(step==4) {
						if(arr[0]==playerSymbol && arr[8]==playerSymbol || arr[2]==playerSymbol && arr[6]==playerSymbol) {
							next=3;
						}
					}
					if(next=="") {
						next=arr.indexOf("s");
					}

				console.log(next);
	 			switch(next) {
					case 0:
						var box = document.querySelector('.zero');
						break;
					case 1:
						var box = document.querySelector('.one');
						break;
					case 2:
						var box = document.querySelector('.two');
						break;
					case 3:
						var box = document.querySelector('.three');
						break;
					case 4:
						var box = document.querySelector('.four');
						break;
					case 5:
						var box = document.querySelector('.five');
						break;
					case 6:
						var box = document.querySelector('.six');
						break;
					case 7:
						var box = document.querySelector('.seven');
						break;
					case 8:
						var box = document.querySelector('.eight');
						break;
					default:
						break;
					}
				arr[next]=computerSymbol;
				}
		box.textContent=computerSymbol;
		box.style.color="red";
		arr[box['id']]=computerSymbol;
		console.log("ARR: "+ arr);
		mode="player";
		next="";
		win=checkWin(arr);
      if(win==-10)
    end.textContent="You lose!";
    if(win==0) end.textContent="It's a tie!";
		if(gameWon) restartGame();
	}
}
const playerscore= document.querySelector('#playerscore');
const computerscore= document.querySelector('#computerscore');
const choices= document.querySelectorAll('.choice');
const fields = document.querySelectorAll('.field');

const menu = document.querySelector('#menu');
const end = document.querySelector('#end');
choices.forEach(choice => choice.addEventListener('click', chooseSymbol));
