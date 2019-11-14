let answer = 1;
let input = "";

// Un prompt s'affiche avec la question suivante
input = prompt("De quel nombre veux-tu calculer la factorielle ?");
input = Number(input);

// Utilisateur rentre un nombre (par ex 4)
// Dans la console le résultat suivant est affiché
for(let count=1; count<=input ; count ++){
    answer = answer * count;
}

//"Le résultat est : 24"
console.log(answer);