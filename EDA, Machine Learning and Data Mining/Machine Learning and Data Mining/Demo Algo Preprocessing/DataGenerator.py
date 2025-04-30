import pandas as pd
import numpy as np


class Generate_Data():

    """ Class pour générer des données a des fins de test.
    nan : Bool to activate nan value in the dataset Default = False
    pctnan : Float between 0. and 1. % of nan values Default = 0
    size : Int number of sample Default = 10
    targetclf : Bool Add a target column with class value for classification, values [0,1,2] Default = False
    targetreg : Bool Add a target column with continuous values for regression Default = False
    """

    def __init__(self):

        self.education_levels = ["Primaire", "Secondaire", "Licence", "Master"]

    def get_data(self,nan=False,pctnan=0.0,size=10,targetclf=False,targetreg=False):

        df = pd.DataFrame({
        "Age": np.random.randint(20, 60, size=size).astype(float),
        "Salaire": np.random.randint(25000, 80000, size=size).astype(float),
        "Heures_travail": np.random.randint(20, 60, size=size).astype(float),
        "Ville": np.random.choice(["Paris", "Lyon", "Marseille", "Bordeaux", "Nantes"], size=size),
        "Education": np.random.choice(self.education_levels, size=size)
        })
        if targetclf:
            df = pd.concat((df,pd.Series(data=np.random.randint(0,3,size),name='Target')),axis=1)
        if targetreg:
            # Encodage des variables catégoriques
            education_mapping = {"Primaire": 1, "Secondaire": 2, "Licence": 3, "Master": 4}
            df["Education_encoded"] = df["Education"].map(education_mapping)

# Génération de la target avec une relation linéaire et du bruit
            coeffs = {"Age": 0.5, "Salaire": 0.0003, "Heures_travail": 2, "Education_encoded": 3}
            noise = np.random.normal(0, 5, size)

            df["Target"] = (
                df["Age"] * coeffs["Age"] +
                df["Salaire"] * coeffs["Salaire"] +
                df["Heures_travail"] * coeffs["Heures_travail"] +
                df["Education_encoded"] * coeffs["Education_encoded"] +
                noise
            )
            del df["Education_encoded"]

        if nan :
            for col in ["Age", "Salaire", "Heures_travail", "Ville", "Éducation"]:
                df.loc[df.sample(frac=pctnan).index, col] = np.nan
        return df