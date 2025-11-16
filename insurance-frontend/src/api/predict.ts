// import type { InsuranceRequest, InsuranceResponse } from "../types/Insurance";

export async function predictPremium(data: any) {
  const response = await fetch("http://13.51.235.99:8000/predict", {
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

