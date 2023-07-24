
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
      <h2>Select your gender</h2>
      
      <input type="radio" value="Male" name="gender" /> 
      <label> Male</label>
      
        <input type="radio" value="Female" name="gender" /> 
              <label> Female</label>
      {gender === "Male" && (
        <div>
          <h2>Select your shirt Size:</h2>
            
            <select value={shirtSize} onChange={handleShirtSizeChange}>
              <option value="">Select size</option>
              <option value="Small">Small</option>
              <option value="Medium">Medium</option>
              <option value="Large">Large</option>
            </select>
          
        </div>
      )}

      {gender === "Female" && (
        <div>
           <h2>Select your dress Size:</h2>
            <select value={dressSize} onChange={handleDressSizeChange}>
              <option value="">Select size</option>
              <option value="1">2</option>
              <option value="2">4</option>
              <option value="3">6</option>
              
            </select>
        
        </div>
      )}

      {/* You can also add additional fields for other gender options */}
    </div>
  );
};

export default App;
