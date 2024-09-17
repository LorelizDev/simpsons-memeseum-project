import React, { useEffect, useRef } from 'react';

const UploadWidget = ({ onUpload }) => {
  const cloudinaryRef = useRef();
  const widgetRef = useRef();

  useEffect(() => {
    cloudinaryRef.current = window.cloudinary;
    widgetRef.current = cloudinaryRef.current.createUploadWidget({
      cloudName: 'dhbzr2e4h',
      uploadPreset: 'ymxg7t6z'
    }, function(error, result) {
      if (result.event === 'success') {
        onUpload(result.info.secure_url);
      }
    });
  }, [onUpload]);

  return (
    <button className="block text-blue-simp underline text-xl font-semibold mb-2" onClick={(e) => {e.preventDefault(); widgetRef.current.open()}}>
      Seleccionar Archivo
    </button>
  );
}

export default UploadWidget;
