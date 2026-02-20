/*Mission2*/
const str  = document.getElementById("id-mot-saisi")/*cela me permettra de pourvoir recuperer stocker les inforamtion qui se trouve dans la balise qui a pour identifiant id-mot-saisi */
function invers(mot){/* je met le mot que je veux inversé en paramétre */
    let n=mot.length  /*je stock la longeur de mot */
    let chaine_inverse="" /*je crée une variable dans laquel je vais stocker l'inverse de mon mot */
    for(let i=0;i<n;i++){ /*je fait une bloucle afin de parcourir chaque lettre de mon mot donc chaque itération de mon mot */
        chaine_inverse=mot[i]+chaine_inverse/*Je stock les lettres de mon mot et je les rajoute ave les précédentes   */
    }return chaine_inverse
}

function palindrome(){
    let valeur = str.value;/*je récupere la valeur de mon id */
    valeur = valeur.toLowerCase()/*Je mets mes lettre en minuscle afin que même si j'ai une majuscle à la fin de mon mot ma fonction fonctionne  toujour si le mot est un palindrome */
    const inverse = invers(valeur)/* j'utilise ma fonction inverse afin d'inverse mon mot */
    if(valeur===inverse){/*je fais une condition qui verifie si mon mot et son inverse son exactement pareil et si oui alors j'alerte que le mot est un palindrome sinon j'alerte que mon mot n'est pas un palindrome */
        alert("Ce mot est un Palindrome")
    }else{
        alert("Ce mot n'est pas un Palindrome")
    }
}
