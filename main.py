from fastapi import FastAPI
from pydantic import BaseModel
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()
app.add_middleware(CORSMiddleware, allow_origins=['*'], allow_methods=['*'], allow_headers=['*'])

# ----- Health Scoring -----
class NutritionInput(BaseModel):
    fiber: float
    sugar: float
    protein: float

@app.post("/health_score")
def health_score(data: NutritionInput):
    score = (data.fiber * 2) - (data.sugar * 1.5) + (data.protein * 1.2)
    score = round(score, 2)
    if score >= 8:
        level = "High"
        suggestion = "Great nutrition balance."
    elif score >= 5:
        level = "Medium"
        suggestion = "Moderate health value. Consider reducing sugar."
    else:
        level = "Low"
        suggestion = "Try higher fiber and lower sugar products."
    return {"health_score": score, "level": level, "suggestion": suggestion}


# ----- Pricing Optimizer -----
class PriceItem(BaseModel):
    name: str
    price: float
    quantity: float

class PricingInput(BaseModel):
    current: PriceItem
    alternatives: list[PriceItem]

@app.post("/pricing_optimizer")
def pricing_optimizer(data: PricingInput):
    best_option = min(data.alternatives, key=lambda x: x.price / x.quantity)
    saving = (data.current.price / data.current.quantity - best_option.price / best_option.quantity) * best_option.quantity
    is_cheaper = saving > 0
    return {
        "recommended": best_option,
        "saving": round(saving, 2),
        "is_cheaper": is_cheaper
    }


# ----- Recommender -----
class RecommendInput(BaseModel):
    user_history: list[str]

@app.post("/recommend")
def recommend(data: RecommendInput):
    history = [item.lower() for item in data.user_history]
    recommendations = []

    if "white bread" in history:
        recommendations.append({"name": "Whole Wheat Bread", "reason": "More fiber, less sugar"})
    if "milk" in history:
        recommendations.append({"name": "Oat Milk", "reason": "Lactose-free and rich in fiber"})
    if not recommendations:
        recommendations.append({"name": "Brown Rice", "reason": "Low glycemic index alternative"})

    return { "recommendations": recommendations }
