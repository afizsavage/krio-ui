import * as React from 'react';
import useSwr from 'swr';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';

import { BASE_API, fetcher } from '../../utils/api';
import { getFirstCharOf, getFirstTwoCharOf } from '../../utils/methods';
import retreiveCharIfExist from '../../utils/methods/char-checker';

const AddWordForm = () => {
  const { data, error } = useSwr(`${BASE_API}/letters`, fetcher);
  const [letterID, setLetterID] = React.useState<string | null>(null);

  const handleTitleChange = (val: string) => {
    if (val.length > 1) {
      const firstChar = getFirstCharOf(val);
      const firstTwoChar = getFirstTwoCharOf(val);

      setLetterID(retreiveCharIfExist([firstChar, firstTwoChar], data));
    }
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const title = formData.get('title');

    // fetch(`${BASE_API}users/sign_in`, {
    //   method: 'POST',
    //   headers: {
    //     'Content-Type': 'application/json',
    //   },
    //   body: JSON.stringify({
    //     user: {
    //       email: data.get('email'),
    //       password: data.get('password'),
    //     },
    //   }),
    // });
    console.log(title, letterID);
  };

  if (error) {
    console.log('error fetch letters');
  }

  return (
    <Box>
      <Typography variant="h6" gutterBottom>
        Add Word
      </Typography>
      <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <TextField
              required
              id="title"
              name="title"
              label="Title"
              fullWidth
              autoComplete="title"
              variant="standard"
              onChange={(e) => handleTitleChange(e.target.value)}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              required
              id="define"
              name="define"
              label="Definition"
              fullWidth
              autoComplete="define"
              variant="standard"
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              id="exampleStatement"
              label="Example Statement"
              multiline
              rows={4}
              fullWidth
              autoComplete="exampleStatement"
            />
          </Grid>
        </Grid>
        <Button type="submit" sx={{ mt: 3, ml: 1 }}>
          Add
        </Button>
      </Box>
    </Box>
  );
};

export default AddWordForm;
