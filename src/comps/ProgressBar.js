import React from 'react';
import useStorage from '../hooks/useStorage';
import { useEffect } from 'react';

// btw we destructure props here!
const ProgressBar = ({ file, setFile }) => {
  const { url, progress } = useStorage(file);

  // If there is an url it means file uploaded so we want to reset progress bar and upload file!
  useEffect(() => {
    if (url) setFile(null);
  }, [url, setFile]);

  return (
    // We set width of progress bar according to progress we get from firebase!!
    <div className='progress-bar' style={{ width: progress + '%' }}></div>
  );
};

export default ProgressBar;
