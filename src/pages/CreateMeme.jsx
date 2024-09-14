import React from 'react';
import { createMeme } from '../services/services';
import Form from '../components/Form';

const CreateMeme = () => {
  const handleCreate = async (memeData) => {
    try {
      console.log('Meme data:', memeData);
      await createMeme(memeData);
    } catch (error) {
      console.error('Error creating meme:', error.message);
    }
  };

  return (
    <Form title={'Publicar Meme'} onSubmit={handleCreate} />
  );
};

export default CreateMeme;
