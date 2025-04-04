

from girafe import Girafe
from elephant import Elephant
from soigneur import Soigneur
from enclos import Enclos   

from outils import Outils

MyEnclos = Enclos()
Dumbo = Elephant("Fifi")
MyEnclos.ajouter_animal(Dumbo)
LongCou = Girafe("Long cou")
MyEnclos.ajouter_animal(LongCou)

print(LongCou.get_info())


LongCou.comportement_hasard()
Outils.pause(5)
LongCou.comportement_hasard()
Outils.pause(2)
Outils.clear_console()
Outils.pause(2)
LongCou.comportement_hasard()
LongCou.comportement_hasard()
LongCou.comportement_hasard()


