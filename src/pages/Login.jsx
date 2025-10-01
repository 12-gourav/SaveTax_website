import { useState } from "react";
import img from "../assets/img/logo_blue.svg";
import { toast } from "react-hot-toast";
import { LoadingOutlined } from "@ant-design/icons";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async () => {
    try {
      if (email === "") return toast.error("Email is required");
      if (password === "") return toast.error("Password is required");
      setLoading(true);
      toast.success("Login Successfull");
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  return (
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
