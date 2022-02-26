const loadData = () =>{
    fetch('https://restcountries.com/v3.1/all')
    .then(res=>res.json())
    .then(data => displayCountry(data))
}
loadData();
// https://restcountries.com/v3.1/name/{name}

const displayCountry = (countries) =>{
    const countryDiv = document.getElementById('country');
  countries.forEach(country => {
    //console.log(country);
    const div = document.createElement('div');
    div.classList.add('country');
    div.innerHTML = `<h3>${country.name.common}</h3>
                    <p>${country.capital}</p>
                    <button onclick = "loadCountryDetails('${country.name.common}')" >Show Details</button>

    `
    countryDiv.appendChild(div);
  });

}
const loadCountryDetails = name => {
  const url = ` https://restcountries.com/v3.1/name/${name}`
 
  fetch(url)
  .then(res =>res.json())
  .then(data => displayCountryDetails(data[0]));

}
const displayCountryDetails = country =>{
  const countryDiv = document.getElementById('country-detail');
  countryDiv.innerHTML =`<h3>${country.name.common}</h3>
        <p>Population : ${country.population} </p>
        <img src="${country.flags.png}">
  `
}