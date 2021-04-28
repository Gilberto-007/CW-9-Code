function generate(){
var phone_num = {
"start": "Here is your phone number.",
"area_code" : ["787", "939"],
"num" : ["1","2","3","4","5","6","7","8","9","10"],
"first_name" : ["Gilberto","Diego","Miguel","Dylan"],
"last_name" : ["Cancel","Pérez","Hernandez","Cedrés"],
"phone" : "#first_name# #last_name#: (#area_code#)#num##num##num##num##num##num##num#"
}

var grammar;

function setup(){
noCanvas();

grammer = tracery.createGrammar(phone_num);

var result = grammar.flatten(##phone##);
console.log(result);
}
}

