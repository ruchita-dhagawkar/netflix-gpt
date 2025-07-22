import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { useRef, useState } from "react";
import { auth } from "../firebase";
import { useUserStore } from "../store/useUserStore";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [signedIn, setSignedIn] = useState(true);
  const email = useRef<HTMLInputElement>(null);
  const password = useRef<HTMLInputElement>(null);
  const [error, setError] = useState("");
  const setUser = useUserStore((state) => state.setUser);
  const navigate = useNavigate();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!email.current || !password.current) {
      setError("Email or password is missing.");
      return;
    }

    try {
      console.log("Attempting to sign in or sign up...", signedIn);
      if (signedIn) {
        // Sign In
        const userCredential = await signInWithEmailAndPassword(
          auth,
          email.current.value,
          password.current.value
        );
        setUser(userCredential.user);
        navigate("/browse"); // Redirect to home after login
      } else {
        // Sign Up
        const userCredential = await createUserWithEmailAndPassword(
          auth,
          email.current.value,
          password.current.value
        );
        setUser(userCredential.user);
      }
    } catch (err: any) {
      console.error("Firebase Error:", err.code, err.message);
      setError(err.message);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-full bg-opacity-0">
      <div className="w-11/12 max-w-md bg-zinc-900 p-8 rounded-md text-white">
        <h2 className="text-3xl font-bold mb-6">Sign In</h2>
        <form className="flex flex-col gap-4" onSubmit={handleLogin}>
          {!signedIn && (
            <input
              type="text"
              placeholder="Name"
              className="p-3 rounded bg-zinc-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-500"
            />
          )}
          <input
            type="email"
            placeholder="Email"
            className="p-3 rounded bg-zinc-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-500"
            ref={email}
          />
          <input
            type="password"
            placeholder="Password"
            className="p-3 rounded bg-zinc-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-500"
            ref={password}
          />
          <button
            type="submit"
            className="bg-red-600 hover:bg-red-700 py-3 rounded font-semibold"
          >
            {signedIn ? "Sign In" : "Sign Up"}
          </button>
          {error && <p className="text-red-500">{error}</p>}
          <div className="flex justify-between text-sm text-gray-400">
            <label>
              <input type="checkbox" className="mr-1" />
              Remember me
            </label>
            <a href="#" className="hover:underline">
              Need help?
            </a>
          </div>
        </form>
        <p className="mt-6 text-sm text-gray-400">
          {signedIn ? "Already have account?" : "New to Netflix?"}{" "}
          <span
            className="text-white hover:underline cursor-pointer"
            onClick={() => {
              setSignedIn(!signedIn);
            }}
          >
            {signedIn ? "Sign in now" : "Sign up now"}
          </span>
        </p>
      </div>
    </div>
  );
};

export default Login;
