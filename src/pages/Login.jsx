import { useEffect, useState } from "react";
import img from "../assets/img/logo_blue.svg";
import { toast } from "react-hot-toast";
import { LoadingOutlined } from "@ant-design/icons";
import { loginAPI } from "../api/api";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";

const Login = ({authLoading}) => {
    const { isActive } = useSelector((state) => state.users);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  const Navigate = useNavigate();
  const location = useLocation()

  const handleSubmit = async () => {
    try {
      if (email === "") return toast.error("Email is required");
      if (password === "") return toast.error("Password is required");
      setLoading(true);

      const result = await loginAPI(email, password);
      if (result?.data?.data) {
        dispatch({ type: "login", payload: result?.data?.data });
        localStorage.setItem("token", result?.data?.token);
        toast.success("Login Successfull");
        Navigate("/dashboard");
        setEmail("");
        setPassword("")
      } else {
        toast.error("Login Fail");
      }
    } catch (error) {
      console.log(error);
      toast.error(error?.response?.data?.msg)
    } finally {
      setLoading(false);
    }
  };



    useEffect(() => {
    if (isActive) {
      if (location.state === null) {
        Navigate("/");
      } else {
        Navigate(location?.state?.from);
      }
    }
  }, [isActive]);




  return authLoading ? "":(
    <section className="login">
      <div className="login_form">
        <img src={img} />
        <h2>Save Tax India Consultancy Service</h2>
        <div className="form_group">
          <label>Email</label>
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            placeholder="Enter your email address"
          />
        </div>
        <div className="form_group">
          <label>Password</label>
          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            placeholder="Enter your password"
          />
        </div>
        <button disabled={loading} onClick={handleSubmit}>
          {loading ? <LoadingOutlined /> : "Login"}
        </button>
      </div>
    </section>
  );
};

export default Login;
