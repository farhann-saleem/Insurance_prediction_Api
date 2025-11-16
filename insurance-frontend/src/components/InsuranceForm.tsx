import { useState } from "react";
import type { InsuranceRequest, Occupation } from "../types/Insurance";
import { predictPremium } from "../api/predict";
import "./InsuranceForm.css";

const occupations: Occupation[] = [
  "retired",
  "freelancer",
  "student",
  "government_job",
  "business_owner",
  "unemployed",
  "private_job",
];

// --- City lists from your backend ---
const tier1Cities = ["Mumbai", "Delhi", "Bangalore", "Chennai", "Kolkata", "Hyderabad", "Pune"];

const tier2Cities = [
  "Jaipur",
  "Chandigarh",
  "Indore",
  "Lucknow",
  "Patna",
  "Ranchi",
  "Visakhapatnam",
  "Coimbatore",
  "Bhopal",
  "Nagpur",
  "Vadodara",
  "Surat",
  "Rajkot",
  "Jodhpur",
  "Raipur",
  "Amritsar",
  "Varanasi",
  "Agra",
  "Dehradun",
  "Mysore",
  "Jabalpur",
  "Guwahati",
  "Thiruvananthapuram",
  "Ludhiana",
  "Nashik",
  "Allahabad",
  "Udaipur",
  "Aurangabad",
  "Hubli",
  "Belgaum",
  "Salem",
  "Vijayawada",
  "Tiruchirappalli",
  "Bhavnagar",
  "Gwalior",
  "Dhanbad",
  "Bareilly",
  "Aligarh",
  "Gaya",
  "Kozhikode",
  "Warangal",
  "Kolhapur",
  "Bilaspur",
  "Jalandhar",
  "Noida",
  "Guntur",
  "Asansol",
  "Siliguri",
];

export default function InsuranceForm() {
  const [result, setResult] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState<InsuranceRequest>({
    age: 25,
    weight: 70,
    height: 1.75,
    income_lpa: 8,
    smoker: false,
    city: "Mumbai", // default city from the list
    occupation: "private_job",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value, type } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "number" ? Number(value) : value,
    }));
  };

  const handleCheckbox = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData((prev) => ({
      ...prev,
      smoker: e.target.checked,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await predictPremium(formData);
      setResult(res.predicted_category);
    } catch {
      setResult("Error fetching prediction");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="form-card">
      <form onSubmit={handleSubmit} className="form-grid">
        {/* Age */}
        <div>
          <label>Age</label>
          <input
            type="number"
            name="age"
            className="form-input"
            value={formData.age}
            onChange={handleChange}
            required
          />
        </div>

        {/* Weight */}
        <div>
          <label>Weight (kg)</label>
          <input
            type="number"
            name="weight"
            className="form-input"
            value={formData.weight}
            onChange={handleChange}
            required
          />
        </div>

        {/* Height */}
        <div>
          <label>Height (m)</label>
          <input
            type="number"
            step="0.01"
            name="height"
            className="form-input"
            value={formData.height}
            onChange={handleChange}
            required
          />
        </div>

        {/* Income */}
        <div>
          <label>Income (LPA)</label>
          <input
            type="number"
            name="income_lpa"
            className="form-input"
            value={formData.income_lpa}
            onChange={handleChange}
            required
          />
        </div>

        {/* City (dropdown from Tier list) */}
        <div className="md-full">
          <label>City</label>
          <select
            name="city"
            className="form-select"
            value={formData.city}
            onChange={handleChange}
            required
          >
            <option value="" disabled>
              Select your city
            </option>
            <optgroup label="Tier 1 Cities">
              {tier1Cities.map((c) => (
                <option key={c} value={c}>
                  {c}
                </option>
              ))}
            </optgroup>
            <optgroup label="Tier 2 Cities">
              {tier2Cities.map((c) => (
                <option key={c} value={c}>
                  {c}
                </option>
              ))}
            </optgroup>
          </select>
        </div>

        {/* Smoker */}
        <div style={{ marginTop: "28px" }}>
          <label>Smoker</label>
          <input
            type="checkbox"
            checked={formData.smoker}
            onChange={handleCheckbox}
            style={{ transform: "scale(1.3)", marginLeft: "10px" }}
          />
        </div>

        {/* Occupation */}
        <div className="md-full">
          <label>Occupation</label>
          <select
            name="occupation"
            className="form-select"
            value={formData.occupation}
            onChange={handleChange}
          >
            {occupations.map((occ) => (
              <option key={occ} value={occ}>
                {occ}
              </option>
            ))}
          </select>
        </div>

        {/* Submit */}
        <button type="submit" className="submit-btn">
          {loading ? "Predicting..." : "Predict Premium"}
        </button>
      </form>

      {result && <div className="result-box">Prediction: {result}</div>}
    </div>
  );
}
