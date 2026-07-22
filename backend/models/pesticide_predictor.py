# models/pesticide_predictor.py

def predict_pesticide(crop, pest, weather, soil):
    pesticide_mapping = {
        ("wheat", "aphid"): {"pesticide": "Imidacloprid", "dosage": "20 ml/acre"},
        ("cotton", "bollworm"): {"pesticide": "Spinosad", "dosage": "75 ml/acre"},
        ("rice", "stem borer"): {"pesticide": "Chlorantraniliprole", "dosage": "30 ml/acre"},
        ("maize", "armyworm"): {"pesticide": "Lambda-cyhalothrin", "dosage": "25 ml/acre"},
        ("sugarcane", "whitefly"): {"pesticide": "Acephate", "dosage": "100 g/acre"},
        ("soybean", "cutworm"): {"pesticide": "Cypermethrin", "dosage": "60 ml/acre"},
        ("tomato", "fruit borer"): {"pesticide": "Indoxacarb", "dosage": "50 ml/acre"},
        ("brinjal", "shoot borer"): {"pesticide": "Flubendiamide", "dosage": "40 ml/acre"},
        ("potato", "aphid"): {"pesticide": "Dimethoate", "dosage": "400 ml/acre"},
        ("onion", "thrips"): {"pesticide": "Spinetoram", "dosage": "50 ml/acre"},
        ("chili", "mites"): {"pesticide": "Propargite", "dosage": "300 ml/acre"},
        ("banana", "weevil"): {"pesticide": "Chlorpyrifos", "dosage": "1 L/acre"},
        ("apple", "leafhopper"): {"pesticide": "Malathion", "dosage": "200 ml/acre"}
    }

    crop = crop.lower()
    soil = soil.lower()
    pest_list = [p.lower() for p in pest] if isinstance(pest, list) else [pest.lower()]
    key = (crop, pest_list[0])

    result = pesticide_mapping.get(key, {"pesticide": "Generic Pesticide", "dosage": "10 ml/acre"})

    # Adjust dosage note (don't overwrite original values)
    dosage_note = ""

    if soil == "clay":
        dosage_note += " (increase dosage slightly for clay soil)"
    elif soil == "sandy":
        dosage_note += " (reduce dosage slightly for sandy soil)"

    if weather and weather.get('temperature') and weather['temperature'] > 35:
        dosage_note += " (reduce dosage in high temperatures)"

    if len(pest_list) > 1:
        result["pesticide"] = "Mixture of Imidacloprid and Malathion"
        result["dosage"] = "35 ml/acre" + dosage_note
    else:
        result["dosage"] += dosage_note

    return result
