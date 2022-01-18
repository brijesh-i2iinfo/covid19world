import api from "../index";

const getDaily = () => {
    api.defaults.baseURL = "https://data.covid19india.org/v4/min/";
    return api.get("/data.min.json")
};
const getCasesChart = () => {

    api.defaults.baseURL = "https://covid19.mathdro.id/api/";
    return api.get("/daily")
};
export { getDaily, getCasesChart };


