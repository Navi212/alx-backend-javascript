export default function signUpUser(firstName, lastName) {
  return new Promise((resolve, reject) => {
    const obj = {
      firstName,
      lastName,
    };
    resolve(obj);
  });
}
