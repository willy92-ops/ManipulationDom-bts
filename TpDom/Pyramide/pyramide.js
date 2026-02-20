/*Mission3*/

const ligne = document.getElementById("ligne-pyramide")/* cela me permettera de pourvoir recuperer et stocker les inforamtion qui se trouve dans la balise qui a pour identifiant ligne-pyramide */
const pyramide = document.getElementById("pyramide" )/*Ca va me permettre de mettre ma pyramide dans la balise qui a pour id pyramide */
function construirePyramide(){
    let Ligne_str = ligne.value /*je recupre la valeur qui est dans ma balise  */
    let nbr_ligne = Ligne_str
    nbr_ligne = Number(nbr_ligne)/*je transforma ma valeur en chiffre car de base un input est une chaine de caractère */
    let result = "" /*je crée une variable ou je vais stocker ma pyramide */
    for(let i = 0;i<nbr_ligne;i++){
        for(let j = 0;j<i;j++){/*je fais une boucle imbriquée afin de faire une pyramide  */
            result+="*" 
        }
       result+="<br>"/*ca me permet de separé ma pyramide en repartant a la ligne   */   
    }pyramide.innerHTML=result /* je mets ma pyramide dans mon html */
}


