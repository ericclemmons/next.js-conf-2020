import { useEffect, useState } from "react";

export function useUser() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    // TODO Fetch `Auth.currentAuthenticatedUser`
    Promise.resolve(require("fixtures").user).then(setUser).catch(console.warn);

    // TODO Listen to `Hub` for `auth`'s { payload } for:
    // - `signIn` `event` (with `data`)
    // - `signOut` `event`
  }, []);

  return user;
}
