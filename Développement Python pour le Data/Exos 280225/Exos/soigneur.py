from datetime import datetime
from dateutil import relativedelta

class Soigneur:

    _nom = None
    date_naissance = "15/05/1985"
    experience = None
    nbre_animaux_supervise = 0

    def __init__(self, age, nom = "Nom par Defaut"):     
        self.nom = nom

    @property
    def nom(self):
        return self._nom
    
    @nom.setter
    def nom(self,nouveau_nom):
        if not isinstance(nouveau_nom,str):
            raise ValueError(f"{nouveau_nom} doit etre une chaine de caractere")
        self._nom = nouveau_nom

    def nourir(self,animal):

        if animal.soigneur == self:
            print(f"{self.nom} donne a manger a {animal.nom}")
            animal.manger()

        else:
            print(f"{self.nom} n'est pas le soigneur de {animal.nom}")

    def entretenir(self,animal):
        
        if animal.soigneur == self:
            print(f"{self.nom} s'occuper de {animal.nom}")
            animal.satisfaction += 20

        else:
            print(f"{self.nom} n'est pas le soigneur de {animal.nom}")     

    @property
    def age(self):
        # today = datetime.today()
        # return today.year - self.date_naissance[-4:]
        return relativedelta.relativedelta(datetime.now(),datetime.strptime(self.date_naissance, "%d/%m/%Y")).years

      