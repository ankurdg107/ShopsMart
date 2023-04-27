// import React, { useState } from 'react';
// import "./homepage.css"


// const Homepage = ({setLoginUser}) => {
//   const [textInput, setTextInput] = useState('');
//   const [photoInput, setPhotoInput] = useState(null);

//   const handleTextInputChange = (event) => {
//     setTextInput(event.target.value);
//   };

//   const handlePhotoInputChange = (event) => {
//     setPhotoInput(event.target.files[0]);
//   };

//   const handleSubmit = (event) => {
//     event.preventDefault();
//     // do something with the text input and photo input
//     console.log(textInput, photoInput);
//   };

//   return (
//     <>
//       <div>Welcome to Homepage</div>
//       <button className="button" onClick={() => setLoginUser({})}>Logout</button>
//       <br></br>
//       <br></br>
//       <form onSubmit={handleSubmit}>
//         <label htmlFor="text-input">Text Input:</label>
//         <input type="text" id="text-input" value={textInput} onChange={handleTextInputChange} />
//         <br></br>
//         <label htmlFor="photo-input">Photo Upload:</label>
//         <input type="file" id="photo-input" onChange={handlePhotoInputChange} />
//         <br></br> 
//         <button type="submit">Submit</button>
//       </form>
//     </>
//   );
// };

// export default Homepage;





// import necessary modules
import React, { useState } from "react";
import axios from "axios";

function HomePage() {
  // define state variables for the text and image inputs
  const [text, setText] = useState("");
  // const [image, setImage] = useState(null);

  // handle changes to the text input
  const handleTextChange = (event) => {
    setText(event.target.value);
  };

  // // handle changes to the image input
  // const handleImageChange = (event) => {
  //   setImage(event.target.files[0]);
  // };

  // handle submission of the form
  const handleSubmit = async (event) => {
    event.preventDefault();
    // create a new form data object to store the text and image data
    const formData = new FormData();
    formData.append("text", text);
    formData.append("text1", text);
    // formData.append("image", image);

    try {
      // send the form data to the server using axios
      const response = await axios.post("http://localhost:9000/homePage", formData);
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  // render the text and image input form
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Longitude:</label>
          <input type="text" value={text} onChange={handleTextChange} />
        </div>
        <div>
          <label>Latitude:</label>
          <input type="text" value={text} onChange={handleTextChange} />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default HomePage;
