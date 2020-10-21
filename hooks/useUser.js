import { useEffect, useState } from "react";
import { Auth, Hub } from "aws-amplify";

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
