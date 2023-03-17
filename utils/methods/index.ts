import { getCookie } from 'cookies-next';
import { BASE_API } from '../api';

type User = {
  id: number;
  name: string;
  email: string;
};

type ApiResponse<T> = {
  success: boolean;
  data?: T;
  error?: string;
};

export const getFirstCharOf = (word: string | undefined) => {
  return Array.from(word)[0];
};

export const getFirstTwoCharOf = (word: string | undefined) => {
  return `${Array.from(word)[0]}${Array.from(word)[1]}`;
};

export const capitalizeFirstLetter = (streeng: string | undefined) => {
  if (streeng) {
    return streeng.charAt(0).toUpperCase() + streeng.slice(1);
  }
};

export const getCurrentUser = async () => {
  const request = await fetch(`${BASE_API}/me`, {
    headers: {
      'Content-Type': 'application/json',
      Authorization: `${getCookie('bearerToken')}`,
    },
  });

  const response = await request.json();

  if (response.ok) {
    return response.data;
  } else {
    console.log('failed to load');
  }
};

export const signOut = async () => {
  try {
    const request = await fetch(`${BASE_API}/users/sign_out`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `${getCookie('bearerToken')}`,
      },
    });
  } catch (error) {
    console.log('There was an error', error);
  }
};
