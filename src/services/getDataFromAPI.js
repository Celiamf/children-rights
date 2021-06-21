const getDataFromAPI = () => {
  return fetch(
    "https://raw.githubusercontent.com/Celiamf/children-rights/main/src/data/country-info.json"
  )
    .then((response) => response.json())
    .then((data) => {
      return data.results.map((country) => {
        return {
          name: country.country,
          id: country.id,
          img: country.flag,
          street: country.address.street,
          addressNumber: country.address.number,
          addressLink: country.address.link,
          phone: country.phone,
          email: country.email,
          website: country.website,
          passport: country.passport.documents,
          passportPrice: country.passport.price,
          passportInstructions: country.passport.instructions,
        };
      });
    });
};

export default getDataFromAPI;
