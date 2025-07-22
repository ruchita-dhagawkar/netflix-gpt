import { signOut } from "firebase/auth";
import { auth } from "../firebase";
import { useUserStore } from "../store/useUserStore";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  const handleLogout = async () => {
    try {
      await signOut(auth);
      useUserStore.getState().clearUser();
      console.log("User signed out successfully.");
      navigate("/");
    } catch (error) {
      console.error("Error signing out:", error);
    }
  };

  return (
    <div className="h-[70px] w-full px-4 flex items-center absolute bg-gradient-to-b from-black to-transparent z-10">
      <img
        src="https://help.nflxext.com/helpcenter/OneTrust/oneTrust_production_2025-07-14/consent/87b6a5c0-0104-4e96-a291-092c11350111/01938dc4-59b3-7f67-86aa-d06aa27c6cc0/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
        alt="logo"
        className="h-full"
      />
      <button
        className="flex-grow"
        onClick={() => {
          handleLogout(); // Assuming handleSignOut is defined to handle user sign out
        }}
      >
        Sign Out
      </button>
    </div>
  );
};

export default Header;
