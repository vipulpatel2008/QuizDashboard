import axios from "axios";

export const baseAxios = axios.create({
  baseURL: `https://opentdb.com/`,
});


