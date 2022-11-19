import re
import difflib
import numpy as np
import pandas as pd
from sklearn.feature_extraction.text import TfidfVectorizer

def procesar_texto_entrada(texto, feature_names=None):
    
    nuevo_texto = texto 
    nuevo_texto = nuevo_texto.upper()
    nuevo_texto = re.sub("[ÀÁÂÃÄ]", "A", nuevo_texto)
    nuevo_texto = re.sub("[ÈÉÊË]", "E", nuevo_texto)
    nuevo_texto = re.sub("[ÌÍÎÏ]", "I", nuevo_texto)
    nuevo_texto = re.sub("[ÒÓÔÕÖ]", "O", nuevo_texto)
    nuevo_texto = re.sub("[ÙÚÛÜ]", "U", nuevo_texto)
    nuevo_texto = re.sub("Ñ", "N", nuevo_texto)
    nuevo_texto = re.sub("[^A-Z ]", " ", nuevo_texto)
    nuevo_texto = re.sub(" +", " ", nuevo_texto)
    nuevo_texto = nuevo_texto.strip()
    nuevo_texto = nuevo_texto.lower()

    if feature_names is not None:
        # para cada una de las palabras reemplazarlas por su vector más cercano
        for word in set(nuevo_texto.split()):
            closest = difflib.get_close_matches(word, feature_names)
            if len(closest):
                nuevo_texto = nuevo_texto.replace(word, closest[0])
    
    return nuevo_texto


def get_vectorizer(data_series):

    data_series = data_series.apply(procesar_texto_entrada)
    unicos = data_series.unique()
    vectorizer = TfidfVectorizer()
    X = vectorizer.fit_transform(unicos)
    features = pd.DataFrame(X.toarray(), index=unicos)
    return features, vectorizer

def predict_top_n(texto, features, vectorizer, n = 10):
    texto = procesar_texto_entrada(texto, feature_names = vectorizer.get_feature_names_out())
    rta = vectorizer.transform([texto]).toarray()
    distance = np.sum((rta - features.to_numpy())**2, axis = 1)
    distance_df = pd.DataFrame(distance, index = features.index).sort_values(by=[0]).iloc[0: n, 0]
    search_list = distance_df.index.tolist()
    return search_list



# Example
contratos = pd.read_csv("SECOPII_sample.csv", sep = ";")
nombre_entidad = contratos["Nombre.de.la.Entidad"]

texto = "Acaldia bucarramanja"

features, vectorizer = get_vectorizer(nombre_entidad)
search_list = predict_top_n(texto, features, vectorizer)
print("Resultado de la búsqueda:", texto)
for i in search_list:
    print("\t*", i)
    