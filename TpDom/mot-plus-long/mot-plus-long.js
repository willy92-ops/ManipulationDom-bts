/*Mission1*/

const citation = document.getElementById("citation") /* cela me permet de pourvoir recuperer stocker les inforamtion qui se trouve dans la balise qui a pour identifiant citation */
const mot_le_plus_long = document.getElementById("motPlusLong")/*ca me permettra de pouvoir afficher le mot_max qui se trouve dans la balise qui a pour identifiant motPlusLong */
function mot_long(){
    let text = citation.textContent;/*je recupere le element qui se trouve dans mon input dans le Html */
    let liste_mot = text.split(" ")/*je crée une liste avec des chaine de caractère a chaque espace qui est dans ma phrase */
    let mot_max = liste_mot[0]/*Je crée cette variable afin de pourvoir la comparée au autre element de ma liste de mot et j'initialise le mot le plus a la position 0  */
    for(let i = 1; i < liste_mot.length;i++){/*Je réalise une boucle qui me permettra de parcourir (sauf le premier) tous les élément de ma liste  */
        if(mot_max.length<liste_mot[i].length){ /* je réalise une condition dans laquel si la longeur de mot_max est inférieur sa celle d'un mot de ma liste alors le mot de ma liste devient par la suite mon mot_max  */
            mot_max=liste_mot[i]
        }

    }
    mot_le_plus_long.innerHTML = mot_max /* je meet mon mot_max dans le html a la balise */
} 

mot_long();/*j'appel ma fonction */    



   