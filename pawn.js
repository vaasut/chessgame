class Pawn extends Piece {
	constructor(rank,file,color,type,state){
		super(rank,file,color,type,state);
	}
	updatestate(game){
		if (this.state == 0){
			if (this.rank != 1 || this.rank != 6){
				this.state = 1;
			}
		}
	}
	getmoves(game){
		moves = []
		if (this.color == -1){
			if (this.state == 0){ //unmoved
				if (game[this.rank+1][this.file] === "" && game[this.rank+2][this.file] === ""){
					moves.push([7-this.rank-2,this.file]);
				}
			}

			if (game[this.rank+1][this.file] === ""){
				moves.push([7-this.rank-1,this.file]);
			}
			
			if (game[this.rank+1][this.file+1]){
				if (game[this.rank+1][this.file+1].color == 1){
					moves.push([7-this.rank-1,this.file+1]);
				}
			}

			if (game[this.rank+1][this.file-1]){
				if (game[this.rank+1][this.file-1].color == 1){
					moves.push([7-this.rank-1,this.file-1]);
				}
			}
			return moves
		}
		else{
			if (this.state == 0){ //unmoved
				//console.log(this);
				if (game[this.rank-1][this.file] === "" && game[this.rank-2][this.file] === ""){
					moves.push([7-this.rank+2,this.file]);
				}
			}

			if (game[this.rank-1][this.file] === ""){
				moves.push([7-this.rank+1,this.file]);
			}
			
			if (game[this.rank-1][this.file+1]){
				if (game[this.rank-1][this.file+1].color == -1){
					moves.push([7-this.rank+1,this.file+1]);
				}
			}

			if (game[this.rank-1][this.file-1]){
				if (game[this.rank-1][this.file-1].color == -1){
					moves.push([7-this.rank+1,this.file-1]);
				}
			}
			return moves
		}
	}
}