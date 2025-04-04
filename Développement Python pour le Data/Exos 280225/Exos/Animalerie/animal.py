from abc import ABC, abstractmethod
from datetime import datetime
from dateutil import relativedelta
from config import MyConfig

#region Classe parent principale

class Animal(ABC):

    _nom = ""
    _poids = 0
    _taille = 0
    _sexe = ""
    _dateDeNaissance = ""
    _dateArrive = ""
    _probabiliteDeces = 0
    

    #region Setter/Getter

    @property
    def sexe(self):
        return self._sexe
    
    @property
    def nom(self):
        return self._nom.strip()
    
    @nom.setter
    def nom(self,nouveau_nom):
        if not isinstance(nouveau_nom,str):
            raise ValueError(f"{nouveau_nom} doit etre une chaine de caractere")
        self._nom = nouveau_nom
        
    @property
    def poids(self):
        return str(self._poids) + " " + MyConfig.UNITE_POIDS
    
    @poids.setter
    def poids(self,nouveau_poids):
        if not isinstance(nouveau_poids,float):
            raise ValueError(f"Le poids doit etre un nombre")
        self._poids = nouveau_poids
                
    @property
    def taille(self):
        return str(self._taille) + " " + MyConfig.UNITE_TAILLE
    
    @taille.setter
    def taille(self,nouveau_taille):
        if not isinstance(nouveau_taille,float):
            raise ValueError(f"Le taille doit etre un nombre")
        self._taille = nouveau_taille
    
    @property
    def age(self):
        return relativedelta.relativedelta(datetime.now(),datetime.strptime(self.date_naissance, "%d/%m/%Y")).years
    
    @property
    @abstractmethod
    def ageHumain(self):
        pass

    @property
    def dateArrive(self):
        return self._dateArrive
    
    @property
    def probabiliteDeces(self):
        return self._probabiliteDeces

    #endregion

    def __init__(self, nom, poids, taille, sexe, dateDeNaissance,dateArrive, probabiliteDeces):
        self._nom = nom
        self._poids = poids
        self._taille = taille
        self._sexe = sexe
        self._dateDeNaissance = dateDeNaissance
        self._dateArrive = dateArrive
        self._probabiliteDeces = probabiliteDeces

    @abstractmethod
    def crier():
        pass

#endregion

#region Interfaces

class IVolant(ABC):
    @abstractmethod
    def voler(self):
        pass

#endregion