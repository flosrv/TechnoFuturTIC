let input = prompt("Entrez DING DING ou BOTTLE ")

const response_ding = "DING DING"
const response_bottle = "BOTTLE"

switch (input.toLowerCase()){

  case response_ding.toLowerCase():

      document.write("Ding ding, le train entre en gare!!");

      break;

  case response_bottle.toLowerCase():

      document.write("Bottle: Santé!");

      break;


  default:

      document.writeln("Wrong Input ! You missed your chance !");

}


