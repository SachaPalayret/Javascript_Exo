//"Salut, bienvenue dans ma super pyramide ! Combien d'étages veux-tu ?"
// Utilisateur rentre un nombre (par ex 5)
/*    #
     ##
    ###
   ####
  ##### */

console.log("Salut, bienvenue dans ma super pyramide ! Combien d'étages veux-tu ?")
level = prompt("Saisissez le nombre d'étages que vous voulez afficher")

for (let count=1; count<=level; count++){
    let row;
    let sharp = "";
    let space = "";

    for (let count2 = 1; count2 <= level-count; count2++){
        space = space + " ";
    }

    for (let count3 = 1; count3 <= count; count3++){
        sharp = sharp + "#";
    }
    

    row = space + sharp;
    console.log(row);
}