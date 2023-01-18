export const BASE_API = 'http://localhost:3000/api/v1';

export const postLib = async (endpoint: string, body: any) => {
  let response;

  try {
    response = await fetch(endpoint, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    });
  } catch (error) {
    console.log('There was an error', error);
  }

  if (response?.ok) {
    return response;
  } else {
    console.log(`HTTP Response Code: ${response?.status}`);
  }
};
