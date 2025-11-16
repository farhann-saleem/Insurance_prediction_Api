import InsuranceForm from "./components/InsuranceForm";
import "./App.css";

function App() {
  return (
    <div className="page-wrapper">
      <div className="left-panel">
        <img src="/logo.png" className="logo-img" />
        <h1 className="headline">Insurance Premium Predictor</h1>
        <p className="subtitle">
          Enter your details to estimate your insurance cost powered by AI.
        </p>
      </div>

      <div className="right-panel">
        <InsuranceForm />
      </div>
    </div>
  );
}

export default App;
