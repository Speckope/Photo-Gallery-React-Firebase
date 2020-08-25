import React, { useState } from 'react';
import ProgressBar from './ProgressBar';

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
      <label>
        <input type='file' onChange={changeHandler} />
        <span>+</span>
      </label>
      <div className='output'>
        {/* If there is an error output a div message cointaining error */}
        {error && <div className='error'>{error}</div>}
        {file && <div> {file.name} </div>}
        {/* // We pass file and setFile function so we can setFile to null when we it finished uploading! */}
        {file && <ProgressBar file={file} setFile={setFile} />}
      </div>
    </form>
  );
};

export default UploadForm;
