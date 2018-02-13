class Rook extends Piece {
	constructor(rank,file,color,type,state){
		super(rank,file,color,type,state);
	}
	updatestate(game){
	}
	getmoves(game){
		let moves =[];

		for (let d = 1; d < 8; d++){
			if (this.rank+d < 8){
				moves.push([7-(this.rank+d),this.file]);
				if (game[this.rank+d][this.file] !== ""){
					//console.log("test: " + game[this.rank+d][this.file+d].rank);
					break;
				}
				
			}
		}

		for (let e = -1; e > -8; e--){
			if (this.rank+e > -1){
				moves.push([7-(this.rank+e),this.file]);
				if (game[this.rank+e][this.file] !== ""){
					//console.log("test: " + game[this.rank+e][this.file+e].rank);
					break;
				}	
			}
		}

		for (let f = 1; f < 8; f++){
			if (this.file+f < 8){
				moves.push([7-this.rank,this.file+f]);
				if (game[this.rank][this.file+f] !== ""){
					//console.log("test: " + game[this.rank+f][this.file-f].rank);
					break;
				}	
			}
		}
		for (let g = 1; g < 8; g++){
			if (this.file-g > -1){
				moves.push([7-this.rank,this.file-g]);
				if (game[this.rank][this.file-g] !== ""){
					//console.log("test: " + game[this.rank+f][this.file-f].rank);
					break;
				}	
			}
		}


		let corrected_moves = [];

		for (let i in moves){
			let move = moves[i];
			if (game[7-move[0]][move[1]] === undefined){
				corrected_moves.push(moves[i]);
			}
			else if (game[7-move[0]][move[1]].color != this.color){
				corrected_moves.push(moves[i]);
			}
			
		}

		return corrected_moves;
	}
}