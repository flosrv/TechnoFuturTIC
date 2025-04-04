import os
import time

class Outils:
    
    @staticmethod
    def clear_console():
        os.system('cls') 
    
    @staticmethod
    def pause(seconde):
        time.sleep(seconde)