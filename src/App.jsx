import React, { useState } from "react";

const TelemedicineApp = () => {
  const [patientName, setPatientName] = useState("");
  const [symptoms, setSymptoms] = useState("");
  const [prescription, setPrescription] = useState(null);
  const [animate, setAnimate] = useState(false);

  const handleConsultation = () => {
    setAnimate(true);
    setTimeout(() => setAnimate(false), 1000);
    setPrescription(`Prescription for ${patientName}: Paracetamol 500mg`);
  };

  return (
    <div className="container">
      <h1 className="title bounce">Rural Telemedicine Platform</h1>
      <div className="card slide-in">
        <div className="card-content fade-in">
          <input
            className="input"
            type="text"
            placeholder="Enter Patient Name"
            value={patientName}
            onChange={(e) => setPatientName(e.target.value)}
          />
          <textarea
            className="textarea"
            placeholder="Describe Symptoms"
            value={symptoms}
            onChange={(e) => setSymptoms(e.target.value)}
          />
          <button className={`button ${animate ? "clicked" : ""}`} onClick={handleConsultation}>Get Consultation</button>
          {prescription && <div className="prescription pop-in swing visible">{prescription}</div>}
        </div>
      </div>
    </div>
  );
};

export default TelemedicineApp;

// CSS (included in the same file as requested)
const styles = `
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600&display=swap');

* {
  box-sizing: border-box;
  font-family: 'Poppins', sans-serif;
}

body {
  margin: 0;
  padding: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background: #007bff;
}

.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding: 20px;
}

.title {
  font-size: 32px;
  font-weight: 700;
  color: white;
  text-shadow: 2px 2px 6px rgba(0, 0, 0, 0.4);
  margin-bottom: 20px;
  transition: transform 0.3s ease-in-out;
}

.title.bounce:hover {
  animation: bounce 0.5s ease-in-out;
}

@keyframes bounce {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-10px); }
}

.card {
  background: white;
  padding: 30px;
  border-radius: 15px;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.3);
  width: 100%;
  max-width: 450px;
  transition: transform 0.3s;
}

.card.slide-in {
  animation: slideIn 0.5s ease-in-out;
}

@keyframes slideIn {
  0% { transform: translateY(20px); opacity: 0; }
  100% { transform: translateY(0); opacity: 1; }
}

.card-content.fade-in {
  animation: fadeIn 1s ease-in-out;
}

@keyframes fadeIn {
  0% { opacity: 0; }
  100% { opacity: 1; }
}

.card:hover {
  transform: scale(1.05);
}

.input, .textarea {
  width: 100%;
  padding: 12px;
  border: 2px solid #ccc;
  border-radius: 8px;
  font-size: 16px;
  transition: all 0.3s;
}

.input:focus, .textarea:focus {
  border-color: #0056b3;
  outline: none;
  box-shadow: 0 0 10px rgba(0, 86, 179, 0.5);
  transform: scale(1.02);
}

.button {
  background: #0056b3;
  color: white;
  padding: 12px;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  font-size: 18px;
  font-weight: bold;
  transition: all 0.3s;
}

.button:hover {
  background: #003d80;
  transform: scale(1.1);
}

.button.clicked {
  animation: buttonClick 0.2s ease-in-out;
}

@keyframes buttonClick {
  0% { transform: scale(1); }
  50% { transform: scale(0.9); }
  100% { transform: scale(1); }
}

.prescription {
  margin-top: 15px;
  padding: 14px;
  background-color: #d4edda;
  border-radius: 10px;
  font-weight: bold;
  text-align: center;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
  font-size: 18px;
  color: #155724;
  border: 2px solid #155724;
}

.prescription.pop-in.swing.visible {
  animation: popIn 0.5s ease-in-out, swing 1s ease-in-out;
  display: block;
}

@keyframes popIn {
  0% { transform: scale(0.8); opacity: 0; }
  100% { transform: scale(1); opacity: 1; }
}

@keyframes swing {
  0%, 100% { transform: rotate(0deg); }
  25% { transform: rotate(5deg); }
  50% { transform: rotate(-5deg); }
  75% { transform: rotate(5deg); }
}
`;

const styleSheet = document.createElement("style");
styleSheet.type = "text/css";
styleSheet.innerText = styles;
document.head.appendChild(styleSheet);
