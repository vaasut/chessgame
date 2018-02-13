class King extends Piece {
	constructor(rank,file,color,type,state){
		super(rank,file,color,type,state);
	}
	updatestate(game){
	}
	getmoves(game){
		let moves =[];

		moves.push([7-this.rank-1,this.file]);
		moves.push([7-this.rank+1,this.file]);

		moves.push([7-this.rank-1,this.file-1]);
		moves.push([7-this.rank,this.file-1]);
		moves.push([7-this.rank+1,this.file-1]);

		moves.push([7-this.rank-1,this.file+1]);
		moves.push([7-this.rank,this.file+1]);
		moves.push([7-this.rank+1,this.file+1]);

		let opponent_attacks = []
		for (let a = 0; a < 8; a++){
			for (let b = 0; b < 8; b++){
				if (game[a][b] !== ""){
					if (game[a][b].color != this.color){
						if (game[a][b].type != "K"){
							let piece = game[a][b];
							if (piece.type === "P"){
								//special rules for pawns
								if (piece.color === -1){
									opponent_attacks.push([7-piece.rank-1,piece.file+1]);
									opponent_attacks.push([7-piece.rank-1,piece.file-1]);
									}
								else{
									opponent_attacks.push([7-piece.rank+1,piece.file+1]);
									opponent_attacks.push([7-piece.rank+1,piece.file-1]);
								}
							}
							else{
								opponent_attacks =  opponent_attacks.concat(piece.getmoves(game))
							}
						}
					}
				}
			}
		}
		//console.log("Opponent Attacks: " + opponent_attacks);

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

		let allowed_moves = [];
		let check = 0;
		for (let q in corrected_moves){
			let c = 1;
			for (let z in opponent_attacks){
				if (opponent_attacks[z][0] === corrected_moves[q][0] && opponent_attacks[z][1] === corrected_moves[q][1]){
					c = 0;
				}
				// if (opponent_attacks[z][0] === 7-this.rank && opponent_attacks[z][1] === this.file){
				// 	console.log("King in check");
				// }
			}
			if (c === 1){
				allowed_moves.push(corrected_moves[q]);
			}
		}

		return allowed_moves;
	}
}









