// Menangkap pilihan player

// Menangkap pilihan computer
var bot = Math.random();

if(bot < 0.34){
	bot = 'Batu';
}
else if(bot >= 0.34 && bot < 0.67){
	bot = 'Gunting';
}
else{
	bot = 'Kertas';
}
// m