import React from 'react';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import { NextPage } from 'next';
import Head from 'next/head';
import Paper from '@mui/material/Paper';

import { BASE_API, postLib } from '../../utils/api';
import AddWordForm from '../../components/words/add-word-form';
import WithAuth from '../../components/hoc/with-auth';
import { getCurrentUser } from '../../utils/methods';
import { getCookie } from 'cookies-next';

const AddWord: NextPage = (): JSX.Element => {
  const [isLoading, setIsLoading] = React.useState<boolean>(false);
  const [currentUser, setCurrentUser] = React.useState<string | null>(null);

  const getCurrentUser = async () => {
    const request = await fetch(`${BASE_API}/me`, {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `${getCookie('bearerToken')}`,
      },
    });

    const response = await request.json();

    if (response) {
      setCurrentUser(response.id);
    } else {
      console.log('failed to load');
    }
  };

  // const getUser = async () => {
  //   const user = await getCurrentUser();
  //   console.log('user here', user);
  //   // if (user) {

  //   //   setCurrentUser(user.id);
  //   // }
  // };

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

  React.useEffect(() => {
    getCurrentUser();
  });

  return (
    <Container component="main" maxWidth="xs">
      <Head>
        <title>Krio Dictionary - Add Word</title>
      </Head>
      <Paper
        variant="outlined"
        sx={{ my: { xs: 3, md: 6 }, p: { xs: 2, md: 3 } }}
      >
        <Box sx={{ display: 'flex', flexDirection: 'column' }}>
          <AddWordForm currentUser={currentUser} />
        </Box>
      </Paper>
    </Container>
  );
};

export default WithAuth(AddWord);
