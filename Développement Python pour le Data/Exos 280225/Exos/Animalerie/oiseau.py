from animal import Animal, IVolant
from config import MyConfig

class Oiseau(Animal, IVolant):

    
    _couleur = ""
    _enVoliere = False

    def __init__(self, nom, poids, taille, sexe, dateDeNaissance,dateArrive, couleur, enVoliere):
        super().__init__(nom, poids, taille, sexe, dateDeNaissance,dateArrive, 3)
        self._couleur = couleur
        self._enVoliere = enVoliere

    def crier(self):
        print("L'oiseau piaf")

    @property
    def ageHumain(self):
        return self.age * MyConfig.RATIO_ANNEEE_OISEAU
    
    def voler(self):
        print("L'oiseau vole")

    @property
    def couleur(self):
        return self._couleur
        
    @property
    def enVoliere(self):
        return self._enVoliere
    
    @enVoliere.setter
    def estDresse(self,nouveau_enVoliere):
        self._enVoliere = nouveau_enVoliere