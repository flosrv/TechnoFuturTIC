class Elephant:

    """
    Cette classe a pour but de créer un objet elephant
    
    
    """

    _nom = "Dumbo"
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

    def manger(self):
        
        print("L'éléphant mange")
        self._appetit -= 10
        self._satisfaction += 10

    def get_info(self):

        print(f"le nom de l'éléphant est {self._nom}")
        print(f"l'appetit de l'éléphant est {self._appetit}")
        print(f"la satisfaction de l'éléphant est {self._satisfaction}")
        print(f"l'état de l'éléphant est {self._en_vie}")
        print(f"le soigneur de l'éléphant est {self._soigneur}")




class Soigneur:

    nom = None
    date_naissance = "15/05/1985"
    experience = None
    nbre_animaux_supervise = 0

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




class Enclos:

    nom = None
    capacite_max = 2
    taille = 25
    liste_animaux = [] 

    def ajouter_animal(self,animal):

        if (len(self.liste_animaux) < self.capacite_max) and (animal.nom not in self.liste_animaux):
            self.liste_animaux.append(animal.nom)

        else :
            print(f"Il n'y a plus de place dans l'enclos ou {animal.nom} est déja dedans")

    def enlever_animal(self,animal):

        if animal.nom in self.liste_animaux :
            self.liste_animaux.remove(animal.nom)
    
        else :
            print(f"{animal.nom} n'est pas dans l'enclos")