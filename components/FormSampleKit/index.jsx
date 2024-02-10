import { useState, useEffect } from "react";
import { useRouter } from "next/router";
// components
import { Text, Heading } from "../UILib";
import RequestThankyou, { RequestThankyouFrench } from "../RequestThankyou";
// utils
import { handleSubmit } from "./formValidation";
// data
import { statesUs, statesCanada } from "./data/states";
import { countries } from "./data/countries";
import { industries, industriesFrench } from "./data/industries";

export default function FormSampleKit() {
  // use the router to determine which content to show
  const router = useRouter();
  const [useFrench, setUseFrench] = useState(false);

  // form input setter / getter
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [business, setBusiness] = useState("");
  const [industry, setIndustry] = useState("");
  const [address, setAddress] = useState("");
  const [address2, setAddress2] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [zipcode, setZipcode] = useState("");
  const [country, setCountry] = useState("");

  const handleChange = (event) => {
    // set state for each form input on change

    // <input>
    if (event.target.name === "firstname") {
      setFirstName(event.target.value);
    }
    if (event.target.name === "lastname") {
      setLastName(event.target.value);
    }
    if (event.target.name === "email") {
      setEmail(event.target.value);
    }
    if (event.target.name === "phone") {
      setPhone(event.target.value);
    }
    if (event.target.name === "business") {
      setBusiness(event.target.value);
    }
    if (event.target.name === "address") {
      setAddress(event.target.value);
    }
    if (event.target.name === "address2") {
      setAddress2(event.target.value);
    }
    if (event.target.name === "city") {
      setCity(event.target.value);
    }
    if (event.target.name === "zipcode") {
      setZipcode(event.target.value);
    }

    // <select>
    if (event.target.name === "state") {
      setState(event.target.value);
    }
    if (event.target.name === "country") {
      setCountry(event.target.value);
    }
    if (event.target.name === "industry") {
      setIndustry(event.target.value);
    }
  };

  useEffect(() => {
    // Check which version of the page we're on
    // then toggle content throughout the page
    if (router.pathname === "/fr/request-sample-kit") {
      setUseFrench(true);
      return;
    }

    setUseFrench(false);
  }, [router.pathname]);
  return (
    <>
      <section id="form" className="sample__formsec">
        <div className="container">
          <form
            className="sample__form"
            onSubmit={(event) =>
              handleSubmit(
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
              )
            }
          >
            <Heading className="sample__h2" type="h2">
              <strong>
                {useFrench
                  ? "Demandez une trousse d’échantillons"
                  : "Request a Sample Kit"}
              </strong>
            </Heading>

            <Text type="p2" className="sample__p2">
              {useFrench
                ? "Nous offrons une gamme complète de flacons ambrés et clairs. Veuillez remplir le formulaire ci-dessous et nous communiquerons avec vous dès que possible."
                : "We offer a full range of amber and clear vials. Please fill out the form below, and we will get in touch with you as soon as possible."}
            </Text>

            <div className="sample__field check_firstname">
              <label className="sample__label" htmlFor="">
                {useFrench ? "PRÉNOM*" : "First name*"}
              </label>

              <input
                id="firstname"
                name="firstname"
                className="sample__input"
                type="text"
                maxLength="100"
                value={firstName}
                onChange={handleChange}
                aria-label="first name"
                placeholder={useFrench ? "Jean" : "John"}
                data-input
              />

              <span
                id="firstname__error"
                className="form__error d-none"
                data-error
              >
                {useFrench
                  ? "Veuillez entrer un prénom"
                  : "Please enter a first name"}
              </span>
            </div>

            <div className="sample__field check_lastname">
              <label className="sample__label" htmlFor="">
                {useFrench ? "NOM DE FAMILLE*" : "Last name*"}
              </label>

              <input
                id="lastname"
                name="lastname"
                className="sample__input"
                type="text"
                maxLength="100"
                placeholder={useFrench ? "Untel" : "Smith"}
                data-input
                value={lastName}
                onChange={handleChange}
                aria-label="last name"
              />

              <span
                id="lastname__error"
                className="form__error d-none"
                data-error
              >
                {useFrench
                  ? "Veuillez entrer un nom de famille"
                  : "Please enter a last name"}
              </span>
            </div>

            <div className="sample__field check_email">
              <label className="sample__label" htmlFor="email">
                {useFrench ? "COURRIEL*" : "Email*"}
              </label>

              <input
                id="email"
                name="email"
                className="sample__input"
                type="email"
                maxLength="100"
                data-input
                placeholder={
                  useFrench ? "jeanuntel@courriel.com" : "johnsmith@gmail.com"
                }
                value={email}
                onChange={handleChange}
                aria-label="email"
              />

              <span id="email__error" className="form__error d-none" data-error>
                {useFrench
                  ? "Veuillez entrer une adresse électronique valide"
                  : "Please enter a valid email address"}
              </span>
            </div>

            <div className="sample__field check_tell">
              <label className="sample__label" htmlFor="tell">
                {useFrench
                  ? "NUMÉRO DE TÉLÉPHONE (OPTIONNEL)"
                  : "Phone number (optional)"}
              </label>

              <input
                id="phone"
                name="phone"
                className="sample__input"
                pattern="[0-9]*"
                type="number"
                data-input
                placeholder="(999)-555-1234"
                value={phone}
                onChange={handleChange}
                aria-label="Phone"
              />

              <span id="phone__error" className="form__error d-none" data-error>
                {useFrench
                  ? "Veuillez entrer un numéro de téléphone valide"
                  : "Please enter a valid phone number"}
              </span>
            </div>

            <div className="sample__field check_business">
              <label className="sample__label" htmlFor="business">
                {useFrench ? "NOM DE L’ENTREPRISE*" : "Business name*"}
              </label>

              <input
                id="business"
                name="business"
                className="sample__input"
                type="text"
                maxLength="100"
                data-input
                placeholder="ACME Pharmaceuticals"
                value={business}
                onChange={handleChange}
                aria-label="Business"
              />

              <span
                id="business__error"
                className="form__error d-none"
                data-error
              >
                {useFrench
                  ? "Veuillez entrer un nom d’entreprise"
                  : "Please enter a business name"}
              </span>
            </div>

            <div className="sample__field check_industry">
              <label className="sample__label" htmlFor="industry">
                {useFrench ? "INDUSTRIE*" : "Industry*"}
              </label>

              <div className="form_fild">
                <select
                  id="industry"
                  name="industry"
                  className="sample__select"
                  data-input
                  onChange={handleChange}
                  defaultValue=""
                >
                  <option value="">
                    {useFrench
                      ? "Veuillez sélectionner un choix"
                      : "Please select one"}
                  </option>

                  {useFrench
                    ? industriesFrench.map((item) => (
                        <option key={item} value={item}>
                          {item}
                        </option>
                      ))
                    : industries.map((item) => (
                        <option key={item} value={item}>
                          {item}
                        </option>
                      ))}
                </select>
              </div>

              <span
                id="industry__error"
                className="form__error d-none"
                data-error
              >
                {useFrench
                  ? "Veuillez sélectionner une industrie"
                  : "Please select an industry"}
              </span>
            </div>

            <div className="sample__field check_country">
              <label className="sample__label" htmlFor="country">
                {useFrench ? "PAYS*" : "Country*"}
              </label>

              <div className="form_fild">
                <select
                  id="country"
                  name="country"
                  className="sample__select"
                  onChange={handleChange}
                  defaultValue=""
                  data-input
                >
                  <option value="">
                    {useFrench
                      ? "Veuillez sélectionner un choix"
                      : "Please select one"}
                  </option>

                  {countries.map((item) => (
                    <option key={item} value={item}>
                      {item}
                    </option>
                  ))}
                </select>
              </div>

              <span
                id="country__error"
                className="form__error d-none"
                data-error
              >
                {useFrench
                  ? "Veuillez sélectionner un pays"
                  : "Please select a country"}
              </span>
            </div>

            <div className="sample__field check_address">
              <label className="sample__label" htmlFor="address">
                {useFrench ? "ADRESSE POSTALE*" : "Street address*"}
              </label>

              <input
                id="address"
                name="address"
                className="sample__input"
                type=""
                maxLength="250"
                data-input
                value={address}
                onChange={handleChange}
                aria-label="Address"
              />

              <span
                id="address__error"
                className="form__error d-none"
                data-error
              >
                {useFrench
                  ? "Veuillez entrer une adresse"
                  : "Please enter a street address"}
              </span>
            </div>

            <div className="sample__field check_address2">
              <label className="sample__label" htmlFor="address2">
                {useFrench
                  ? "LIGNE D’ADRESSE 2 (OPTIONNEL)"
                  : "Address line 2 (optional)"}
              </label>

              <input
                id="address2"
                name="address2"
                className="sample__input"
                type=""
                maxLength="100"
                data-input
                value={address2}
                onChange={handleChange}
                aria-label="Address2"
              />

              <span
                id="address2__error"
                className="form__error d-none"
                data-error
              >
                {useFrench
                  ? "Veuillez entrer une adresse"
                  : "Please enter a valid address"}
              </span>
            </div>

            <div className="sample__field check_city">
              <label className="sample__label" htmlFor="city">
                {useFrench ? "VILLE*" : "City*"}
              </label>

              <input
                id="city"
                name="city"
                className="sample__input"
                type=""
                maxLength="100"
                data-input
                value={city}
                onChange={handleChange}
                aria-label="City"
              />

              <span id="city__error" className="form__error d-none" data-error>
                {useFrench
                  ? "Veuillez entrer une ville"
                  : "Please enter a city"}
              </span>
            </div>

            <div className="sample__field check_state">
              <label
                className="sample__label"
                htmlFor="state"
                style={country === "" ? { opacity: 0.5 } : { opacity: 1 }}
              >
                {useFrench
                  ? "ÉTAT/PROVINCE/TERRITOIRE*"
                  : "State/Province/Territory*"}
              </label>

              <div className="form_fild">
                <select
                  id="state"
                  name="state"
                  className="sample__select"
                  style={country === "" ? { opacity: 0.5 } : { opacity: 1 }}
                  onChange={handleChange}
                  defaultValue=""
                  data-input
                  disabled={country === ""}
                >
                  <option value="">
                    {useFrench
                      ? "Veuillez sélectionner un choix"
                      : "Please select one"}
                  </option>

                  {country === "US" &&
                    statesUs.map((item) => (
                      <option key={item} value={item}>
                        {item}
                      </option>
                    ))}

                  {country === "Canada" &&
                    statesCanada.map((item) => (
                      <option key={item} value={item}>
                        {item}
                      </option>
                    ))}
                </select>
              </div>

              <span id="state__error" className="form__error d-none" data-error>
                {useFrench
                  ? "Veuillez sélectionner un état/une province/un territoire"
                  : "Please select a state/province/territory"}
              </span>
            </div>

            <div className="sample__field check_zip">
              <label
                className="sample__label"
                htmlFor=""
                style={country === "" ? { opacity: 0.5 } : { opacity: 1 }}
              >
                {useFrench ? "CODE ZIP/CODE POSTAL*" : "Zip/Postal code*"}
              </label>

              <input
                id="zipcode"
                name="zipcode"
                className="sample__input"
                style={country === "" ? { opacity: 0.5 } : { opacity: 1 }}
                type="text"
                data-input
                value={zipcode}
                onChange={handleChange}
                aria-label="Postal code"
                disabled={country === ""}
              />

              <span
                id="zipcode__error"
                className="form__error d-none"
                data-error
              >
                {country === "Canada"
                  ? "Enter correct postal code format XNX NXN, where X is a letter and N is a number"
                  : "Please enter a zip/postal code"}
              </span>
            </div>

            <div className="sample__field">
              <Text type="p2" className="sample__p2">
                {useFrench
                  ? "En cliquant sur ENVOYER, vous acceptez de recevoir plus d’information de la part d’ALK. Votre confidentialité est importante pour nous. Pour savoir comment nous utiliserons et protégerons vos renseignements personnels, veuillez consulter notre politique de confidentialité."
                  : "By clicking SUBMIT, you are agreeing to receive more information from ALK. Your privacy is important to us. To learn how we will use and protect your personal information, please see our Privacy Policy."}
              </Text>

              <button
                className="sample__btn"
                id="submit"
                type="submit"
                value="Submit"
              >
                {useFrench ? "Envoyer" : "Submit"}
              </button>
            </div>
          </form>
        </div>
      </section>

      {useFrench ? <RequestThankyouFrench /> : <RequestThankyou />}
    </>
  );
}
