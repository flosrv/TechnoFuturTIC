from animal import Animal
from config import MyConfig

class Chat(Animal):


    _caractere = ""
    _griffeCoupe = False
    _poilLong = False

    
    def __init__(self, nom, poids, taille, sexe, dateDeNaissance,dateArrive, caractere = "Neutre", griffeCoupe = False, poilLong = False):
        super().__init__(nom, poids, taille, sexe, dateDeNaissance,dateArrive, 0.5)
        self._caractere = caractere
        self._griffeCoupe = griffeCoupe
        self._poilLong = poilLong

    def crier(self):
        print("Le chat miaul")

    @property
    def ageHumain(self):
        return self.age * MyConfig.RATIO_ANNEEE_CHAT
    

    @property
    def caractere(self):
        return self._caractere
    
    @property
    def poilLong(self):
        return self._poilLong
    
    @property
    def griffeCoupe(self):
        return self._griffeCoupe
    
    @griffeCoupe.setter
    def griffeCoupe(self,nouveau_griffeCoupe):
        self._griffeCoupe = nouveau_griffeCoupe