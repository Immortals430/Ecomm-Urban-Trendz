import { FaGoogle } from "react-icons/fa";
import { useGoogleLogin } from "@react-oauth/google";
import { useDispatch } from "react-redux";
import { useContext, useState } from "react";
import MoonLoader from "react-spinners/MoonLoader";
import { googleLogin } from "../../redux/reducers/auth_reducer";
import { AppContext } from "../../AppContext";

export function GoogleLoginButton() {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState();
  const { setAuthPage } = useContext(AppContext);

  const login = useGoogleLogin({
    onError: () => setLoading(false),
    onSuccess: async ({ access_token }) => {
      setLoading(true);
      await dispatch(googleLogin(access_token));
      setLoading(false);
      setAuthPage(false);
    },
  });

  return loading ? (
      <div className="login-loading-btn">
        <MoonLoader size={20} color="white" />
      </div>
  ) : (
    <button onClick={login} className="login-loading-btn" type="button">
      <FaGoogle size={20} /> Login with Google
    </button>
  );
  
}