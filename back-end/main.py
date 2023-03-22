from typing import Union
from fastapi import FastAPI
from DataModel import DataModel, DataModelList
from secop2 import get_vectorizer, predict_top_n
import pandas as pd
from pandas import json_normalize
from fastapi.middleware.cors import CORSMiddleware
from fastapi.encoders import jsonable_encoder
import json

app = FastAPI()

origins = ["http://localhost:3000"]

# Manejo de las cors para habilitar los endpoints
app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)
######
# Example
contratos = pd.read_csv(".\SECOPII_sample.csv", sep = ";")
nombre_entidad = contratos["Nombre.de.la.Entidad"]
data_series, features, vectorizer = get_vectorizer(nombre_entidad)
contratos['searchby'] = data_series
######

# Endpoint inicial de la API
@app.get("/")
def read_root():
   return {"DataJam": "LosBasados"}

@app.post("/find")
def find_info(data: DataModelList):
    print(data)
    dict = jsonable_encoder(data)
    df = json_normalize(dict['texts'])
    df.columns = DataModel.columns()
    print(df)
    print(df.get(0))
    search_list = predict_top_n(df.get("info")[0], features, vectorizer)
    result_list = contratos[contratos['searchby'].isin(search_list)]
    resp = result_list.to_json(orient = 'records')
    return resp
