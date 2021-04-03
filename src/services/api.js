export const getCovid = async () => {
  let url = "https://covid-193.p.rapidapi.com/statistics";
  const response = await fetch(url, {
    method: "GET",
    withCredentials: true,
    headers: {
      "Content-Type": "application/json",
      "x-rapidapi-key": "b9b2c05cfamsh40e71d540d40b11p15e7d7jsnb566767fd57d",
      "x-rapidapi-host": "covid-193.p.rapidapi.com",
    },
  });
  const resData = await response.json();
  return resData.response
};
