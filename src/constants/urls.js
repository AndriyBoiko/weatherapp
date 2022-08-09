const baseURL = process.env.REACT_APP_API
let city = "London"
const urls = {
  weather: 'https://api.openweathermap.org/data/2.5/weather?q=' + city + '&appid=168e8b0239a5d8dc80b28a7c6706762e'
}

export {urls}
export default baseURL