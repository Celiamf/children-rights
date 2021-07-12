const getDataFromAPI = () => {
  return fetch(
    "https://raw.githubusercontent.com/Celiamf/children-rights/main/src/data/country-info.json"
  )
    .then((response) => response.json())
    .then((data) => {
      return data.map((country) => {
        return {
          name: country.country,
          id: country.id,
          img: country.flag,
          address: country.address_street,
          addressLink: country.address_link,
          phone: country.phone,
          email: country.email,
          website: country.website,
          passportDocuments: country.passport_documents,
          passportPrice: country.passyport_price,
          passportForm: country.passport_onlineForm,
          passportPayment: country.passport_onlinePayment,
          passportAppointment: country.passport_onlineAppointment,
          passportInstructions: country.passport_instructions,
        };
      });
    });
};

export default getDataFromAPI;
