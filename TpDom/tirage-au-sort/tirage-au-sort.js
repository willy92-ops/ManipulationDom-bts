const aleatoire = document.getElementById("aleatoire")/* cela va me permettre de returner mon mot dans le html dans la balise qui a pour id aleatoire */
let mangas = ["Naruto", "One Piece", "DBZ", "Bleach",
     "HxH", "JJK", "Spy x Family", "Sakamoto Days", "JJBA", "HnK","Boruto"]
function tirage(){
    let n = mangas.length/*je stock le nombre d'élémet dans ma liste  */
    let hasard = Math.floor(Math.random()*n)/*J'utilise la fonction Math.floor qui me permet de arrondir au nombre inférieur et le  fait que je prenne un nombre au hasard est du a la fonction math.radom qui prend un nom au hasard entre 0 et le nombre d'element dans ma liste -1  et ce nombre je le stock dans la variable*/
    aleatoire.innerHTML = mangas[hasard] /*grace au nombre que j'aurais au hasard je pourrais retourner un element au hasard de ma liste dans le html */
}
