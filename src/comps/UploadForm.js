import React, { useState } from 'react';

const UploadForm = () => {
  const [file, setFile] = useState(null);
  const [error, setError] = useState(null);

  const types = ['image/png', 'image/jpeg', 'image.jpg'];

  const changeHandler = (e) => {
    let selected = e.target.files[0];
    // We check if there is file, (if there is its truthy)
    // and if uploaded file type is valid!
    if (selected && types.includes(selected.type)) {
      // And we set this file to state
      setFile(selected);
      setError(null);
    } else {
      // If its invalid reset it
      setFile(null);
      setError('Please select image of png or jpeg type');
    }
  };

  return (
    <form>
      <input type='file' onChange={changeHandler} />
      <div className='output'>
        {/* If there is an error output a div message cointaining error */}
        {error && <div className='error'>{error}</div>}
        {file && <div> {file.name} </div>}
      </div>
    </form>
  );
};

export default UploadForm;
