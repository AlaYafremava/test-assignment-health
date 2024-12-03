import axios, { AxiosError, AxiosResponse } from "axios";
import { MedicalStaff, Doctor } from "./types";

// Установка базового URL для всех запросов
axios.defaults.baseURL = "https://jsonplaceholder.typicode.com";

// Функция для обработки ошибок
const handleAxiosError = (error: AxiosError) => {
  const { data, status } = error.response || {};
  switch (status) {
    case 400:
      console.error("Bad Request:", data);
      break;
    case 401:
      console.error("Unauthorized:", data || "Authentication required.");
      break;
    case 404:
      console.error("Not Found:", data || "Resource not found.");
      break;
    case 500:
      console.error(
        "Server Error:",
        data || "An internal server error occurred."
      );
      break;
    default:
      console.error("An unexpected error occurred:", data || error.message);
  }
  return Promise.reject(error);
};

// Установка интерсепторов для обработки ошибок
axios.interceptors.response.use(
  (response) => response,
  (error) => handleAxiosError(error)
);

// Функция для извлечения тела ответа
const responseBody = <T>(response: AxiosResponse<T>): T => response.data;

// Асинхронные функции для запросов
const request = {
  get: <T>(url: string): Promise<T> => axios.get<T>(url).then(responseBody),
  post: <T>(url: string, body: object): Promise<T> =>
    axios.post<T>(url, body).then(responseBody),
};

// Методы для работы с докторами
const doctors = {
  getDoctors: async (): Promise<Doctor[]> => {
    return await request.get<Doctor[]>("/users");
  },
  getDoctorById: async (id: string): Promise<Doctor> => {
    return await request.get<Doctor>(`/users/${id}`);
  },
};

// Методы для работы с мед.сестрами
const nurses = {
  getNurses: async (): Promise<MedicalStaff[]> => {
    return await request.get<MedicalStaff[]>("/users");
  },
  getNurseById: async (id: string): Promise<MedicalStaff> => {
    return await request.get<MedicalStaff>(`/users/${id}`);
  },
};

// Общий объект API для экспорта
const api = {
  doctors,
  nurses,
};

export default api;
