
let sentences =[]

function generate(){

let grammar = tracery.createGrammar(phone_num);

let expansion = grammar.flatten('#phone');
sentences.push(expansion);
  
printSentences(sentences);
}

function printSentences(sentences) {
    let textBox = document.getElementById("sentences");
    textBox.innerHTML = "";
    for(let i=sentences.length-1; i>=0; i--) {
        textBox.innerHTML += "<p>"+sentences[i]+"</p>"
    }
}
  



