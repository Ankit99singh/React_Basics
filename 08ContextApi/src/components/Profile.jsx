import UserContext from "../context/UserContext";
import { useContext } from "react";

function Profile() {
  const { user } = useContext(UserContext);

  if (!user)
    return (
      <div>
        <h1>please login</h1>
      </div>
    );
  return (
    <div>
      <h1>welcome {user.userName}</h1>
    </div>
  );
}

export default Profile;
