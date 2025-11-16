// import type { InsuranceRequest, InsuranceResponse } from "../types/Insurance";

export async function predictPremium(data: any) {
  const response = await fetch("http://127.0.0.1:8000/predict", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  if (!response.ok) {
    throw new Error("Failed to fetch prediction");
  }

  return response.json();
}

