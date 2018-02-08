
var whiteRookA = new Rook(0,7,1,"R",0);
var whiteRookH = new Rook(7,7,1,"R",0);
var blackRookA = new Rook(0,0,0,"R",0);
var blackRookH = new Rook(7,0,0,"R",0);

var whiteKnightB = new Knight(1,7,1,"N",0);
var whiteKnightG = new Knight(6,7,1,"N",0);
var blackKnightB = new Knight(1,0,0,"N",0);
var blackKnightG = new Knight(6,0,0,"N",0);

var whiteBishopC = new Bishop(2,7,1,"B",0);
var whiteBishopF = new Bishop(5,7,1,"B",0);
var blackBishopC = new Bishop(2,0,0,"B",0);
var blackBishopF = new Bishop(5,0,0,"B",0);

var whiteKing = new King(4,7,1,"K",0);
var blackKing = new King(4,0,0,"K",0);
var whiteQueen = new Queen(3,7,1,"Q",0);
var blackQueen = new Queen(3,0,0,"Q",0);

var whitePawnA = new Pawn(0,6,1,"P",0);
var whitePawnB = new Pawn(1,6,1,"P",0);
var whitePawnC = new Pawn(2,6,1,"P",0);
var whitePawnD = new Pawn(3,6,1,"P",0);
var whitePawnE = new Pawn(4,6,1,"P",0);
var whitePawnF = new Pawn(5,6,1,"P",0);
var whitePawnG = new Pawn(6,6,1,"P",0);
var whitePawnH = new Pawn(7,6,1,"P",0);

var blackPawnA = new Pawn(0,1,0,"P",0);
var blackPawnB = new Pawn(1,1,0,"P",0);
var blackPawnC = new Pawn(2,1,0,"P",0);
var blackPawnD = new Pawn(3,1,0,"P",0);
var blackPawnE = new Pawn(4,1,0,"P",0);
var blackPawnF = new Pawn(5,1,0,"P",0);
var blackPawnG = new Pawn(6,1,0,"P",0);
var blackPawnH = new Pawn(7,1,0,"P",0);


var game =  [[blackRookA,blackKnightB,blackBishopC,blackQueen,blackKing,blackBishopF,blackKnightG,blackRookH],
			[blackPawnA,blackPawnB,blackPawnC, blackPawnD,blackPawnE,blackPawnF,blackPawnG, blackPawnH],
			["","","","","","","",""],
			["","","","","","","",""],
			["","","","","","","",""],
			["","","","","","","",""],
			[whitePawnA,whitePawnB,whitePawnC, whitePawnD,whitePawnE,whitePawnF,whitePawnG, whitePawnH],
			[whiteRookA,whiteKnightB,whiteBishopC,whiteQueen,whiteKing,whiteBishopF,whiteKnightG,whiteRookH]];



