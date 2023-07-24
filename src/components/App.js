
// import React from "react";
// 

// const App = () => {
//   return (
//     <div>
//         {/* Do not remove the main div */}
//     </div>
//   )
// }

// export default App
import React, { useState } from "react";
import './../styles/App.css';

const App = () => {
  const [gender, setGender] = useState("");
  const [shirtSize, setShirtSize] = useState("");
  const [dressSize, setDressSize] = useState("");

  const handleGenderChange = (event) => {
    const selectedGender = event.target.value;
    setGender(selectedGender);
  };

  const handleShirtSizeChange = (event) => {
    const selectedShirtSize = event.target.value;
    setShirtSize(selectedShirtSize);
  };

  const handleDressSizeChange = (event) => {
    const selectedDressSize = event.target.value;
    setDressSize(selectedDressSize);
  };

  return (
    <div onChange={handleGenderChange}>
      <h1>Select your gender</h1>
      
      <input type="radio" value="Male" name="gender" /> 
      <label> Male</label>
      
        <input type="radio" value="Female" name="gender" /> 
              <label> Female</label>
      {gender === "Male" && (
        <div>
          <label>
            Select Shirt Size:
            <select value={shirtSize} onChange={handleShirtSizeChange}>
              <option value="">Select size</option>
              <option value="Small">Small</option>
              <option value="Medium">Medium</option>
              <option value="Large">Large</option>
            </select>
          </label>
        </div>
      )}

      {gender === "Female" && (
        <div>
          <label>
            Select Dress Size:
            <select value={dressSize} onChange={handleDressSizeChange}>
              <option value="">Select size</option>
              <option value="2">2</option>
              <option value="4">4</option>
              <option value="6">6</option>
              
            </select>
          </label>
        </div>
      )}

      {/* You can also add additional fields for other gender options */}
    </div>
  );
};

export default App;
