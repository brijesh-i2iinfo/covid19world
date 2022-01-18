import axios from "axios";

// const API_URL = "https://covid19.mathdro.id/api/";
const API_URL = "https://data.covid19india.org/v4/min/";
const config = {};
const instance = axios.create({
  baseURL: API_URL,
  timeout: 1000,
  headers: config,
});

// const API_URL = "https://data.covid19india.org/v4/min/"

export default instance;
  