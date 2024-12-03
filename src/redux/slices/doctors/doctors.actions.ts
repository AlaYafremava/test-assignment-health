import { reducers } from "./doctors.slice";
import api from "../../../api";
import { AppDispatch } from "../../store";

const { setDoctorList, setDoctor, setIsProcessing } = reducers;

export const getUserById = (id: string) => async (dispatch: AppDispatch) => {
  dispatch(setIsProcessing(true));
  try {
    const data = await api.doctors.getDoctorById(id);
    dispatch(setDoctor(data));
  } catch (error) {
    console.error("Error fetching user by ID:", error);
  } finally {
    dispatch(setIsProcessing(false));
  }
};

export const getDoctors = () => async (dispatch: AppDispatch) => {
  try {
    const data = await api.doctors.getDoctors();
    dispatch(setDoctorList(data));
  } catch (error) {
    console.error("Error fetching doctors:", error);
  }
};
