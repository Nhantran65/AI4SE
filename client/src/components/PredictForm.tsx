import React, { useState } from "react";
import { predictCO2 } from "../api/api";

const PredictForm: React.FC = () => {
    const [formData, setFormData] = useState({
        make: "",
        model: "",
        vehicle_class: "",
        engine_size: 0,
        cylinders: 0,
        transmission: "",
        fuel_type: "",
        fuel_consumption: 0,
    });

    const [result, setResult] = useState<number | null>(null);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        const prediction = await predictCO2(formData);
        setResult(prediction.prediction);
    };

    return (
        <div style={containerStyle}>
            <h2 style={headerStyle}>Predict CO2 Emission</h2>
            <form onSubmit={handleSubmit} style={formStyle}>
                <input type="text" name="make" placeholder="Make" onChange={handleChange} style={inputStyle} />
                <input type="text" name="model" placeholder="Model" onChange={handleChange} style={inputStyle} />
                <input type="text" name="vehicle_class" placeholder="Vehicle Class" onChange={handleChange} style={inputStyle} />
                <input type="number" name="engine_size" placeholder="Engine Size" onChange={handleChange}  step="any" style={inputStyle} />
                <input type="number" name="cylinders" placeholder="Cylinders" onChange={handleChange}  step="any" style={inputStyle} />
                <input type="text" name="transmission" placeholder="Transmission" onChange={handleChange} style={inputStyle} />
                <input type="text" name="fuel_type" placeholder="Fuel Type" onChange={handleChange} style={inputStyle} />
                <input type="number" name="fuel_consumption" placeholder="Fuel Consumption" onChange={handleChange}  step="any" style={inputStyle} />
                <button type="submit" style={buttonStyle}>Predict</button>
            </form>
            {result !== null && <p style={resultStyle}>Predicted CO2 Emission: {result}</p>}
        </div>
    );
};

const containerStyle: React.CSSProperties = {
    padding: "20px",
    backgroundColor: "#E3F2FD",
    borderRadius: "10px",
};

const headerStyle: React.CSSProperties = {
    color: "#1976D2",
};

const formStyle: React.CSSProperties = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
};

const inputStyle: React.CSSProperties = {
    margin: "10px 0",
    padding: "10px",
    width: "80%",
    borderRadius: "5px",
    border: "1px solid #ccc",
};

const buttonStyle: React.CSSProperties = {
    marginTop: "10px",
    padding: "10px 20px",
    backgroundColor: "#1976D2",
    color: "white",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
};

const resultStyle: React.CSSProperties = {
    marginTop: "20px",
    color: "#004d40",
    fontWeight: "bold",
};

export default PredictForm;
