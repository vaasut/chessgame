class Bishop extends Piece {
	constructor(rank,file,color,type,state){
		super(rank,file,color,type,state);
	}
	updatestate(game){
	}
	getmoves(game){
		let moves =[];

		for (let d = 1; d < 8; d++){
			if (this.rank+d < 8 && this.file+d < 8){
				moves.push([7-(this.rank+d),this.file+d]);
				if (game[this.rank+d][this.file+d] !== ""){
					//console.log("test: " + game[this.rank+d][this.file+d].rank);
					break;
				}
				
			}
		}

		for (let e = -1; e > -8; e--){
			if (this.rank+e > -1 && this.file+e > -1){
				moves.push([7-(this.rank+e),this.file+e]);
				if (game[this.rank+e][this.file+e] !== ""){
					//console.log("test: " + game[this.rank+e][this.file+e].rank);
					break;
				}	
			}
		}

		for (let f = 1; f < 8; f++){
			if (this.rank+f < 8 && this.file-f > -1){
				moves.push([7-(this.rank+f),this.file-f]);
				if (game[this.rank+f][this.file-f] !== ""){
					//console.log("test: " + game[this.rank+f][this.file-f].rank);
					break;
				}	
			}
		}
		for (let g = 1; g < 8; g++){
			if (this.rank-g > -1 && this.file+g < 8){
				moves.push([7-(this.rank-g),this.file+g]);
				if (game[this.rank-g][this.file+g] !== ""){
					//console.log("test: " + game[this.rank+f][this.file-f].rank);
					break;
				}	
			}
		}


		let corrected_moves = [];

		for (let i in moves){
			let move = moves[i];
			//console.log("x: "+ move[0]);
			if (move[0] > -1 && move[0] < 8 && move[1] > -1 && move[1] < 8){
				if (game[7-move[0]][move[1]] === undefined){
					corrected_moves.push(moves[i]);
				}
				else if (game[7-move[0]][move[1]].color != this.color){
					corrected_moves.push(moves[i]);
				}
			}
		}

		return corrected_moves;
	}
}