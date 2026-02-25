let languagedata = {
    "fr": {
        "profession":"Photographe & Vidéaste",
        "a_propos":"A propos de Moi",
        "texte_a_propos_de_moi": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae minus autem culpa delectus suscipit eligendi architecto debitis distinctio earum sapiente magni ullam dolorem quas amet voluptate similique, natus odit facilis?"
    },
        "en": {
        "profession":"Photographer & Videographer",
        "a_propos":"About me",
        "texte_a_propos_de_moi": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae minus autem culpa delectus suscipit eligendi architecto debitis distinctio earum sapiente magni ullam dolorem quas amet voluptate similique, natus odit facilis?"
    },
    "kr": {
        "profession":"사진작가 & 영상작가",
        "a_propos":"소개",
        "texte_a_propos_de_moi": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae minus autem culpa delectus suscipit eligendi architecto debitis distinctio earum sapiente magni ullam dolorem quas amet voluptate similique, natus odit facilis?"
    },
};
// Fonction qui met à jour le texte selon la langue choisie
function changerLangue(code) {
    let langue = languagedata[code];
    Object.keys(langue).forEach(function(cle){
        document.querySelector("#" + cle).innerHTML = langue[cle];
    });
}

changerLangue("fr");

// Boutons
document.querySelector("#langue-fr").addEventListener("click", function(){
    changerLangue("fr");
});

document.querySelector("#langue-en").addEventListener("click", function(){
    changerLangue("en");
});

document.querySelector("#langue-kr").addEventListener("click", function(){
    changerLangue("kr");
});