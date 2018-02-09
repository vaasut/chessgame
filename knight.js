class Knight extends Piece {
	constructor(rank,file,color,type,state){
		super(rank,file,color,type,state);
	}
	updatestate(game){
	}
	getmoves(game){
		let moves =[];
		moves.push([7-this.rank-2,this.file+1]);
		moves.push([7-this.rank-2,this.file-1]);

		moves.push([7-this.rank+2,this.file+1]);
		moves.push([7-this.rank+2,this.file-1]);

		moves.push([7-this.rank+1,this.file+2]);
		moves.push([7-this.rank-1,this.file+2]);

		moves.push([7-this.rank+1,this.file-2]);
		moves.push([7-this.rank-1,this.file-2]);

		let corrected_moves = [];

		for (let i in moves){
			let move = moves[i];
			console.log("x: "+ move[0]);
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