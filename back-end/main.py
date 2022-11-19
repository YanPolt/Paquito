from typing import Union
from fastapi import FastAPI

from secop2 import get_vectorizer, predict_top_n
import pandas as pd

app = FastAPI()

######
# Example
contratos = pd.read_csv("SECOPII_sample.csv", sep = ";")
nombre_entidad = contratos["Nombre.de.la.Entidad"]
features, vectorizer = get_vectorizer(nombre_entidad)
######

@app.get("/")
def read_root(q: Union[str, None] = None):
    if q is not None:
        return predict_top_n(q, features, vectorizer)
