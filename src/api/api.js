import { LOGIN_URL, USER_PROFILE_URL } from '../helpers/globals';

export const login = async credentials => {
  try {
    const response = await fetch(LOGIN_URL, {
      method: 'POST',
      mode: 'cors',
      headers: {
        'Content-Type': 'application/json',
        accept: 'application/json',
      },
      body: JSON.stringify(credentials),
    });

    const data = await response.json();

    if (data.status === 400) {
      return {
        invalid: true,
        type: 'credentials',
        message: 'Identifiants incorrects !',
      };
    }
    if (data.status === 500) {
      return {
        invalid: true,
        type: 'server',
        message:
          "Une erreur s'est produite sur le serveur. Réessayez plus tard.",
      };
    }

    const {
      body: { token },
    } = data;

    return { invalid: false, token };
  } catch (err) {
    return {
      invalid: true,
      type: 'other',
      message: "Une erreur inconnue s'est produite. Réessayez plus tard.",
    };
  }
};

export const getUser = async token => {
  if (!token) return { invalid: true };
  try {
    const response = await fetch(USER_PROFILE_URL, {
      method: 'POST',
      mode: 'cors',
      headers: {
        'Content-Type': 'application/json',
        accept: 'application/json',
        Authorization: `Bearer ${token}`,
      },
    });

    const data = await response.json();
    if (data.status !== 200) return { invalid: true };

    const { body: user } = data;

    return { invalid: false, user };
  } catch (err) {
    return { invalid: true };
  }
};

export const modifyUser = async (token, user) => {
  if (!token)
    return {
      invalid: true,
      type: 'connection',
      message: "Vous n'êtes pas connectés !",
    };

  try {
    const response = await fetch(USER_PROFILE_URL, {
      method: 'PUT',
      mode: 'cors',
      headers: {
        'Content-Type': 'application/json',
        accept: 'application/json',
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(user),
    });

    const data = response.json();

    if (data.status === 400)
      return {
        invalid: true,
        type: 'fields',
        message:
          'Veuillez renseigner un nouveau prénom et un nouveau nom de famille !',
      };

    if (data.status === 500)
      return {
        invalid: true,
        type: 'server',
        message:
          "Une erreur s'est produite sur le serveur. Réessayez plus tard.",
      };

    return { invalid: false };
  } catch (err) {
    return {
      invalid: true,
      type: 'server',
      message: "Une erreur s'est produite sur le serveur. Réessayez plus tard.",
    };
  }
};
