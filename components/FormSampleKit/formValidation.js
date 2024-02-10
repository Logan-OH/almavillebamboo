import axios from "axios";
import qs from "qs";
// util
import { headers, apiEndpoint } from "../../integration/awsConfig";
import {
  validName,
  validPhone,
  validEmail,
  validCity,
  validZipcodeAmerican,
  validZipcodeCanadian,
  validMessage,
} from "../../util/regex";

const validateZipcode = (zipcode, country) => {
  if (country === "Canada" && validZipcodeCanadian(zipcode)) {
    document.querySelector("#zipcode__error").classList.add("d-none");
    return true;
  }

  if (country === "US" && validZipcodeAmerican(zipcode)) {
    document.querySelector("#zipcode__error").classList.add("d-none");
    return true;
  }

  document.querySelector("#zipcode__error").classList.remove("d-none");
  return false;
};

const validateFirstName = (firstName) => {
  if (validName(firstName)) {
    document.querySelector("#firstname__error").classList.add("d-none");
    return true;
  }
  document.querySelector("#firstname__error").classList.remove("d-none");
  return false;
};

const validateLastName = (lastName) => {
  if (validName(lastName)) {
    document.querySelector("#lastname__error").classList.add("d-none");
    return true;
  }
  document.querySelector("#lastname__error").classList.remove("d-none");
  return false;
};

const validateEmail = (email) => {
  if (validEmail(email)) {
    document.querySelector("#email__error").classList.add("d-none");
    return true;
  }
  document.querySelector("#email__error").classList.remove("d-none");
  return false;
};

const validatePhone = (phone) => {
  // allow empty
  if (phone === "") {
    document.querySelector("#phone__error").classList.add("d-none");
    return true;
  }
  if (validPhone(phone)) {
    document.querySelector("#phone__error").classList.add("d-none");
    return true;
  }
  document.querySelector("#phone__error").classList.remove("d-none");
  return false;
};

const validateCity = (city) => {
  if (validCity(city)) {
    document.querySelector("#city__error").classList.add("d-none");
    return true;
  }
  document.querySelector("#city__error").classList.remove("d-none");
  return false;
};

const validateAddress = (address) => {
  if (validMessage(address)) {
    document.querySelector("#address__error").classList.add("d-none");
    return true;
  }
  document.querySelector("#address__error").classList.remove("d-none");
  return false;
};

const validateAddress2 = (address2) => {
  if (address2 === "") {
    document.querySelector("#address2__error").classList.add("d-none");
    return true;
  }

  if (validMessage(address2)) {
    document.querySelector("#address2__error").classList.add("d-none");
    return true;
  }

  document.querySelector("#address2__error").classList.remove("d-none");
  return false;
};

const validateBusiness = (business) => {
  if (validMessage(business)) {
    document.querySelector("#business__error").classList.add("d-none");
    return true;
  }
  document.querySelector("#business__error").classList.remove("d-none");
  return false;
};

export const validateForm = (
  firstName,
  lastName,
  email,
  phone,
  business,
  industry,
  address,
  address2,
  city,
  state,
  zipcode,
  country
) => {
  // validate each input before submission

  let formIsValid = true;

  if (!validateFirstName(firstName)) {
    formIsValid = false;
  }
  if (!validateLastName(lastName)) {
    formIsValid = false;
  }
  if (!validatePhone(phone)) {
    formIsValid = false;
  }
  if (!validateEmail(email)) {
    formIsValid = false;
  }
  if (!validateCity(city)) {
    formIsValid = false;
  }
  if (!validateBusiness(business)) {
    formIsValid = false;
  }
  if (!validateAddress(address)) {
    formIsValid = false;
  }
  if (!validateAddress2(address2)) {
    formIsValid = false;
  }
  if (!validateZipcode(zipcode, country)) {
    formIsValid = false;
  }

  // Make sure and <option> is selected in <select>
  if (industry === "") {
    formIsValid = false;
    document.querySelector("#industry__error").classList.remove("d-none");
  } else {
    document.querySelector("#industry__error").classList.add("d-none");
  }

  if (state === "") {
    formIsValid = false;
    document.querySelector("#state__error").classList.remove("d-none");
  } else {
    document.querySelector("#state__error").classList.add("d-none");
  }

  if (country === "") {
    document.querySelector("#country__error").classList.remove("d-none");
    formIsValid = false;
  } else {
    document.querySelector("#country__error").classList.add("d-none");
  }

  return formIsValid;
};

// if the zip code is Canadian, add a space in the middle of the string
// ex: "HS3 8BC"
function formatZipCode(zipcode) {
  if (zipcode.length === 6) {
    return `${zipcode.slice(0, 3)} ${zipcode.slice(3)}`;
  }
  return zipcode;
}

export const handleSubmit = (
  event,
  firstName,
  lastName,
  email,
  phone,
  business,
  industry,
  address,
  address2,
  city,
  state,
  zipcode,
  country
) => {
  event.preventDefault();

  // validate form fields before trying to POST
  if (
    !validateForm(
      firstName,
      lastName,
      email,
      phone,
      business,
      industry,
      address,
      address2,
      city,
      state,
      zipcode,
      country
    )
  ) {
    return;
  }

  // POST
  // const endpoint = process.env.NEXT_PUBLIC_api_endpoint;
  const endpoint = apiEndpoint();

  const formattedZipCode = formatZipCode(zipcode);
  // need to stringify the inputs in order
  //  to format the POST 'MessageBody' correctly
  /* eslint-disable */
  const inputs = JSON.stringify({
    firstName: firstName,
    lastName: lastName,
    email: email,
    business: business,
    address: address,
    address2: address2,
    city: city,
    state: state,
    country: country,
    industry: industry,
    phoneNumber: phone,
    zipcode: formattedZipCode,
    sendingHost: window.location.host,
  });
  /* eslint-enable */

  // endpoint params
  const params = qs.stringify({
    Action: "SendMessage",
    MessageBody: inputs,
  });

  // POST
  axios
    .post(endpoint, params, headers)
    // eslint-disable-next-line
    .then((response) => {
      // reset the button to default
      document.querySelector("#thanks").classList.toggle("d-none");
      document.querySelector("#form").classList.toggle("d-none");
    })
    .catch(() => {
      window.open(`${window.location.origin}/500`);
    });
};
