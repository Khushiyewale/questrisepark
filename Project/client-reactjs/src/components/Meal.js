import React, { useState } from 'react';

const Meal = () => {
  const [firstCount, setFirstCount] = useState(0);
  const [secondCount, setSecondCount] = useState(0);
  const [thirdCount, setThirdCount] = useState(0);
  const [fourthCount, setFourthCount] = useState(0);

  const calculatePrice = (count, pricePerPerson) => count * pricePerPerson;

  const handleProceed = (packageType) => {
    // You can implement actions or navigation logic here based on the packageType
    console.log(`Proceeding with ${packageType} ticket`);
  };
// Lunch and HiTea price 329 , 

  return (
    <div className="select-pack-container">
      <div className="pricing-card regular-card">
        <h2>Lunch and HiTea</h2>
        <br/>
        <input
          type="number"
          value={firstCount}
          onChange={(e) => setFirstCount(Math.max(0, parseInt(e.target.value)))}
          placeholder="Enter count of people"
        />
        <br/>
        <p><b>Total Price: Rs {calculatePrice(firstCount, 329)}</b></p>
    
      </div>
 {/* Breakfast Lunch and HiTea price 399, */}
      <div className="pricing-card second-card">
        <h2>Breakfast Lunch and HiTea price</h2>
        <br/>
        <input
          type="number"
          value={secondCount}
          onChange={(e) => setSecondCount(Math.max(0, parseInt(e.target.value)))}
          placeholder="Enter count of people (min 5)"
        />
        <br/>
        <p><b>Total Price: Rs {calculatePrice(secondCount, 399)}</b></p>
        
          
      </div>
  {/* Lunch HiTea and Dinner price 449, */}
      <div className="pricing-card third-card">
        <h2>Lunch HiTea and Dinner price</h2>
        <br/>
        <input
          type="number"
          value={thirdCount}
          onChange={(e) => setThirdCount(Math.max(0, parseInt(e.target.value)))}
          placeholder="Enter count of students"
        />
        <br/>
        <p><b>Total Price: Rs {calculatePrice(thirdCount, 449)}</b></p>
       
      </div>

    {/*  Breakfast Lunch HiTea and Dinner price 519 */}

      <div className="pricing-card fourth-card">
        <h2>Breakfast Lunch HiTea and Dinner</h2>
        <br/>
        <input
          type="number"
          value={fourthCount}
          onChange={(e) => setFourthCount(Math.max(0, parseInt(e.target.value)))}
          placeholder="Enter count of students"
        />
        <br/>
        <p><b>Total Price: Rs {calculatePrice(fourthCount, 519)}</b></p>
        <a href='/pay'>
        <button onClick={() => handleProceed('Fourth')}
        style={{
          width: '50%',
          padding: '5px',
          marginTop: '100px',
          border: 'solid',
          borderRadius: '3px',
          cursor: 'pointer',
          
        }}
        >Proceed</button></a>
      </div>
      <div class="menu-card">
     <h5>Breakfast (8:30 AM to 11:00 AM)</h5>
     <ul>
     <li>
      <h6>Idli Vada Set</h6> + Tea/Coffee
     </li>
     <li>
      <h6>Poha</h6> + Tea/Coffee
    </li>
    <li>
      <h6>Masala Dosa</h6> + Tea/Coffee (Any One Option)
    </li>
  </ul>

 
  <h5>Lunch (1:00 PM to 3:00 PM)</h5>
  <ul>
    <li>
      <h6>Chicken Biryani Combo</h6>
    </li>
    <li>
      <h6>Veg Biryani Combo</h6>
    </li>
    <li>
      <h6>Veg Fried Rice Combo</h6>
    </li>
    <li>
      <h6>Chicken Fried Rice Combo</h6> (Any One Option)
    </li>
  </ul>

 
  <h5>Hi-Tea (4:30 PM to 6:00 PM)</h5>
  <ul>
    <li>
      <h6>Samosa/Kachori 1 pc</h6> + Tea/Coffee
    </li>
   
  </ul>

 
  <h5>Dinner (6:00 PM to 7:00 PM)</h5>
  <ul>
    <li>
      <h6>Chapathi with Chicken Curry</h6>
    </li>
    <li>
      <h6>Veg Curry</h6>
    </li>
    <li>
      <h6>Egg Curry</h6> (Any One Option)
    </li>
  </ul>
</div>

    </div>
  );
};

// CSS styles (unchanged)

const styles = `
  .select-pack-container {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
  }

  .pricing-card {
    width: 250px;
    height: 300px;
    padding: 20px;
    margin: 5px;
    text-align: center;
    border-radius: 10px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    transition: box-shadow 0.3s ease-in-out;
  }

  .first-card {
    background-image: url('regular-background.jpg'); /* Replace with the actual image URL */
  }

  .Second-card {
    background-image: url('group-background.jpg'); /* Replace with the actual image URL */
  }

  .third-card {
    background-image: url('student-background.jpg'); /* Replace with the actual image URL */
  }

  .fourth-card {
    background-image: url('student-background.jpg'); /* Replace with the actual image URL */
  }

  .pricing-card:hover {
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
  }
  .body {
    font-family: Arial, sans-serif;
    margin: 0;
    padding: 0;
    background-color: #f5f5f5;
  }

  .menu-card {
    max-width: 600px;
    margin: 50px auto;
    background-color: #fff;
    padding: 20px;
    border-radius: 8px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  }

  .h2, h3 {
    color: #333;
  }

  .ul {
    list-style: none;
    padding: 0;
  }

  .li {
    margin-bottom: 10px;
  }
`;

//Menu Card 



// Create a style element and append it to the head
const styleElement = document.createElement('style');
styleElement.innerHTML = styles;
document.head.appendChild(styleElement);

export default Meal;
