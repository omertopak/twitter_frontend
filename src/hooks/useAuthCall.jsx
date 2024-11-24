import {
  fetchFail,
  fetchStart,
  getAuthSuccess,
  logoutSuccess,
} from "../features/authSlice";
import { useDispatch } from "react-redux";
import useAxios from "./useAxios";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const useAuthCall = () => {
  const dispatch = useDispatch();
  const { axiosPublic } = useAxios();
  const navigate = useNavigate();

  const { userId } = useSelector((state) => state.auth);

  const login = async (userdata) => {
    dispatch(fetchStart());
    try {
      const { data } = await axiosPublic.post(`/auth/login/`, userdata);
      navigate("/home");
      dispatch(getAuthSuccess(data));
      // console.log(data);
    } catch (error) {
      dispatch(fetchFail());
    }
  };

  const register = async (formData) => {
    dispatch(fetchStart());
    // console.log('İstek başlatılıyor');
    try {
      // console.log("try a girdik");
      const response = await axiosPublic.post("/user/register", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      // console.log("Server response:", response.data);

      const loginData = {
        email: formData.get('email'),
        password: formData.get('password')
      };
      
      await login(loginData); // Giriş işlemini burada çağırın

      // console.log('İstek tamamlandı, response:', loginData);
    } catch (error) {
      console.error("Error:", error);
    }
};

  

  const logout = async () => {
    dispatch(fetchStart());
    try {
      await axiosPublic.post(`/auth/logout/`);
      dispatch(logoutSuccess());
      navigate("/");
    } catch (error) {
      dispatch(fetchFail());
    }
  };

  return { login, register, logout };
};

export default useAuthCall;
