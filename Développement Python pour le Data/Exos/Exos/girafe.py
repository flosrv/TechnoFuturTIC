from animal import Animal
import random as rnd

class Girafe(Animal):
    """
    Cette classe a pour but de créer un objet girafe
    
    """

    _longueur_cou = "2m"

    @property
    def longueur_cou(self):
        return self._longueur_cou

    @longueur_cou.setter
    def longueur_cou(self,nouveau_longueur_cou):
        if not isinstance(nouveau_longueur_cou,str):
            raise ValueError(f"{nouveau_longueur_cou} doit etre une chaine de caractere")
        self._longueur_cou = nouveau_longueur_cou

    def __init__(self, nom):
        super().__init__()
        self.nom = nom

    def manger(self):
        super().manger()
        print("La girafe mange")

    # Comportement propre à la girafe
    def manger_feuilles(self):
        print("La girafe mange des feuilles")

    def boire_eau(self):
        print("La girafe boit de l'eau")

    # Redefinition de la methode du parent
    def observer_environnements(self):
        print("La girafe observe son environnement")

    # Du parent, à redefinir
    def comportement_hasard(self):
        randomNumber = rnd.randrange(0,3)

        if(randomNumber==0):
            self.manger_feuilles()
        elif(randomNumber==1):
            self.boire_eau()
        else:
            self.vivre()

    

    # Methode abstraite du parent, obligatoire de l'implémenter
    def ramasser_objet(self):
        print("La girafe essaie de ramasser l'objet, mais telle le tyranosaure voulant faire des pompes, échoue lamentablement")