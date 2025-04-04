from animal import Animal
import random as rnd

class Elephant(Animal):
    """
    Cette classe a pour but de créer un objet elephant
    
    """

    _satisfaction = 100
    _longueur_defense = "1,8m"

    @property
    def longueur_defense(self):
        return self._longueur_defense

    @longueur_defense.setter
    def longueur_defense(self,nouveau_longueur_defense):
        if not isinstance(nouveau_longueur_defense,str):
            raise ValueError(f"{nouveau_longueur_defense} doit etre une chaine de caractere")
        self._longueur_defense = nouveau_longueur_defense


    def __init__(self, nom = "Dumbo"):
        super().__init__(nom)
        # self._nom = nom


    def manger(self):
        super().manger()
        print("L'éléphant mange")


    def observer_environnements(self):
        print("L'éléphant observe son environnement")

    # Comportememnt propre à l'éléphant
    def prendre_bain_de_boue(self):
        print("L'éléphant prend un bain de boue")

    def aspirer_eau(self):
        print("L'éléphant aspire de l'eau")

    # Du parent, à redefinir
    def comportement_hasard(self):
        randomNumber = rnd.randrange(0,3)

        if(randomNumber==0):
            self.prendre_bain_de_boue()
        elif(randomNumber==1):
            self.aspirer_eau()
        else:
            self.vivre()

    # Methode abstraite du parent, obligatoire de l'implémenter
    def ramasser_objet(self):
        print("L'éléphant ramasse un objet avec sa trompe")