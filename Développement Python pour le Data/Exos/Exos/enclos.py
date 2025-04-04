
class Enclos:

    nom = None
    capacite_max = 2
    taille = 25 


    def __init__(self):
        self.liste_animaux = [] 


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