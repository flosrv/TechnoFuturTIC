import pandas as pd 
import numpy as np

class MinMaxScalerHM :

    """Class qui a pour vocation a strandardiser nos données entre 0 et 1"""

    def __init__(self):
        
        self.mini = None
        self.maxi = None
        self.numeric_column = None

    def fit(self,X : pd.DataFrame | np.ndarray):

        if not isinstance(X,(pd.DataFrame , np.ndarray)):
            raise ValueError('X Doit etre un dataframe Pandas')
        

        self.numeric_column = X.select_dtypes(np.number).columns

        self.mini = X[self.numeric_column].min(axis=0)
        self.maxi = X[self.numeric_column].max(axis=0)

    def transform(self,X :pd.DataFrame):

        if self.mini is None or self.maxi is None:
            raise ValueError("Model not fitted")

        X_scaled = X.copy()        

        X_scaled[self.numeric_column] = (X_scaled[self.numeric_column] - self.mini) / (self.maxi - self.mini)

        return X_scaled
    
    def fit_transform(self,X : pd.DataFrame):
        self.fit(X)
        return self.transform(X)
    
    