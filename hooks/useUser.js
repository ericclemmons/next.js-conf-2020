import { useEffect, useState } from "react";

export function useUser() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    // TODO Fetch `Auth.currentAuthenticatedUser`
    // TODO `Hub.listen` to `auth`'s { payload } for:
    // - `signIn` `event` (with `data`)
    // - `signOut` `event`
  }, []);

  return user;
}
