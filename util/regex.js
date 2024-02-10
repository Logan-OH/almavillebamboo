// form validation regex

export const validName = (name) => {
  if (name === "Name") {
    return false;
  }

  const re = /^[A-z'-\s]+$/g;
  const regexResult = name.search(re);
  if (regexResult === -1) {
    return false;
  }
  return true;
};

export const validPhone = (phone) => {
  const re = /^[0-9]{10}$/g;
  const regexResult = phone.search(re);
  if (regexResult === -1) {
    return false;
  }
  return true;
};

export const validZipcodeAmerican = (zipcode) => {
  if (zipcode === "") {
    return false;
  }

  const re = /^([0-9]{5})$/g;
  const regexResult = zipcode.search(re);
  if (regexResult === -1) {
    return false;
  }
  return true;
};

export const validZipcodeCanadian = (zipcode) => {
  if (zipcode === "") {
    return false;
  }

  const re = /^([A-Z0-9]{6})$/g;
  const regexResult = zipcode.search(re);
  if (regexResult === -1) {
    return false;
  }
  return true;
};

export const validEmail = (email) => {
  const re =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  const regexResult = email.search(re);
  if (regexResult === -1) {
    return false;
  }
  return true;
};

export const validCity = (message) => {
  const re = /^([A-z\s-.,+=])+/;
  const regexResult = message.search(re);
  if (regexResult === -1) {
    return false;
  }
  return true;
};

export const validMessage = (message) => {
  const re = /^([A-z0-9\s-.,;!@#$%&*+=])+/;
  const regexResult = message.search(re);
  if (regexResult === -1) {
    return false;
  }
  return true;
};
