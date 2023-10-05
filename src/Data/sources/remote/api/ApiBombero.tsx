import axios from "axios";
import { LocalStorage } from "../../local/LocalStorage";
import { User } from "../../../../Domain/entities/User";

const ApiBombero = axios.create({
  //URL LOCAL : http://192.168.1.88:3000/api
  //URL WEB : http://api.digitalizaactivaturismo.cl/api
  baseURL: "http://api.digitalizaactivaturismo.cl/api",
  headers: {
    "Content-type": "application/json",
  },
});

const ApiBomberoWithImage = axios.create({
  baseURL: "http://api.digitalizaactivaturismo.cl/api",
  headers: {
    "Content-type": "multipart/form-data",
    accept: "application/json",
  },
});

// INTERCEPTORS
ApiBombero.interceptors.request.use(async (config) => {
  const data = await LocalStorage().getItem("user");
  if (data) {
    const user: User = JSON.parse(data);
    config.headers["Authorization"] = user?.session_token;
  }
  return config;
});

ApiBomberoWithImage.interceptors.request.use(async (config) => {
  const data = await LocalStorage().getItem("user");
  if (data) {
    const user: User = JSON.parse(data);
    config.headers["Authorization"] = user?.session_token;
  }
  return config;
});

export { ApiBombero, ApiBomberoWithImage };
