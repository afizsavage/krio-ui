import React from 'react';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import { NextPage } from 'next';
import Head from 'next/head';
import { BASE_API, postLib } from '../../utility/api';

const AddWord: NextPage = (): JSX.Element => {
  const [isLoading, setIsLoading] = React.useState<boolean>(false);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    setIsLoading(true);
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const postData = {
      word: {
        title: formData.get('title'),
        letter_id: 18,
        user_id: 3,
        defination_attributes: {
          define: formData.get('define'),
          example_statement: formData.get('exampleStatement'),
          approval_status: 0,
          user_id: 3,
        },
      },
    };
    const response = await postLib(`${BASE_API}/words`, postData);

    if (response) {
      setIsLoading(false);
    }

    setIsLoading(false);
  };

  return (
    <Container component="main" maxWidth="xs">
      <Head>
        <title>Krio Dictionary - Add Word</title>
      </Head>
      <Box
        component="form"
        noValidate
        onSubmit={handleSubmit}
        sx={{ mt: 3 }}
      ></Box>
    </Container>
  );
};

export default AddWord;
