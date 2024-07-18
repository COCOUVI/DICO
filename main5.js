function search(){
    let word=document.getElementById("text").value;
    let resultat=document.getElementById("resultat");
    if(word.length!=0){
        let url="https://api.dictionaryapi.dev/api/v2/entries/en/" + word
        fetch(url)
        .then((response)=>response.json())
        .then((data)=>{
          try{
            const means=data[0].meanings[0].definitions[0].definition;
             resultat.innerHTML=`<p class='res'>Definition</br>${means}</p>`
          }catch(error){
             resultat.innerHTML="<p class='res'>Aucune definition du mot</p>"
          }
        }
         
        )

    } else{
        resultat.innerHTML="<p class='res'>veuillez remplir ce champ</p>"
    }

}