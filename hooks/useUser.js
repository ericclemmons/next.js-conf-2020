import { Auth, Hub } from "aws-amplify";
import { useEffect, useState } from "react";

export function useUser() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    Auth.currentAuthenticatedUser().then(setUser).catch(console.warn);

    return Hub.listen("auth", ({ payload }) => {
      switch (payload.event) {
        case "signIn":
          return setUser(payload.data);
        case "signOut":
          return setUser(null);
      }
    });
  }, []);

  return user;
}