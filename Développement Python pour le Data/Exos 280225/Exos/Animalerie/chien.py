from animal import Animal
from config import MyConfig

class Chien(Animal):
    
    _race = ""
    _couleurCollier = ""
    _estDresse = False

    def __init__(self, nom, poids, taille, sexe, dateDeNaissance,dateArrive, race, couleurCollier, estDresse):
        super().__init__(nom, poids, taille, sexe, dateDeNaissance,dateArrive, 1)
        self._race = race
        self._couleurCollier = couleurCollier
        self._estDresse = estDresse

    def crier(self):
        print("Le chien aboie")

    @property
    def ageHumain(self):
        return self.age * MyConfig.RATIO_ANNEEE_CHIEN
    

    
    @property
    def race(self):
        return self._race
      
    @property
    def couleurCollier(self):
        return self._couleurCollier
    
    @couleurCollier.setter
    def couleurCollier(self,nouveau_couleurCollier):
        self._couleurCollier = nouveau_couleurCollier
        
    @property
    def estDresse(self):
        return self._estDresse
    
    @estDresse.setter
    def estDresse(self,nouveau_estDresse):
        self._estDresse = nouveau_estDresse