import axios from "../../axios";
import { useEffect, useState } from "react";
import EditProfileForm from "../../components/forms/profile/editProfileForm";

export default function EditPage() {
  const [user, setUser] = useState(null);
  useEffect(() => {
    (async () => {
      const response = await axios.get("/auth/me");
      setUser(response.data.user);
    })();
  }, []);
  return user && <EditProfileForm user={user ? user : []} />;
}
