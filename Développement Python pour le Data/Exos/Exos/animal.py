from abc import ABC, abstractmethod

class Animal(ABC):

    """
    Cette classe est la parente
    
    """   

    _nom = ""
    _appetit = 100
    _satisfaction = 0 
    _en_vie = True
    _soigneur = None

    @property
    def nom(self):
        return self._nom
    
    @nom.setter
    def nom(self,nouveau_nom):
        if not isinstance(nouveau_nom,str):
            raise ValueError(f"{nouveau_nom} doit etre une chaine de caractere")
        self._nom = nouveau_nom

    def __init__(self):
        self.nom = "Nom par Defaut"

    def manger(self):
        self._appetit -= 10
        self._satisfaction += 10

    def get_info(self):
        print(f"le nom de l'animal est {self._nom}")
        print(f"l'appetit de l'animal est {self._appetit}")
        print(f"la satisfaction de l'animal est {self._satisfaction}")
        print(f"l'état de l'animal est {self._en_vie}")
        print(f"le soigneur de l'animal est {self._soigneur}")

    def vivre(self):
        print("L'animal existe")

    def probabilite_deces():
        print("Mes animaux sont immortels")

    @abstractmethod
    def observer_environnements(self):
        pass
    
    @abstractmethod
    def comportement_hasard(self):
        pass

    @abstractmethod
    def ramasser_objet(self):
        pass