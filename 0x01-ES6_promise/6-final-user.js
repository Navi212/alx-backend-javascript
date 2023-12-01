import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default function handleProfileSignup(firstName, lastName, fileName) {
  const signUp = signUpUser(firstName, lastName);
  const photo = uploadPhoto(fileName);

  return Promise.allSettled([signUp, photo])
    .then((result) => {
      const list = [];
      result.forEach((items) => {
        if (items.status === 'fulfilled') {
          list.push({ status: items.status, value: items.value });
        } else {
          list.push({ status: items.status, value: `${items.reason}` });
        }
      });
      return list;
    });
}
