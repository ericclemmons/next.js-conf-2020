import { AmplifyAuthenticator, AmplifySignOut } from "@aws-amplify/ui-react";
import { AuthState, onAuthUIStateChange } from "@aws-amplify/ui-components";

import { Hero } from "components/Hero";
import { useEffect } from "react";

export default function Login() {
  useEffect(() => {
    return onAuthUIStateChange((state, user) => {
      if (state === AuthState.SignedIn) window.location.href = "/";
    });
  });

  return (
    <Hero>
      <AmplifyAuthenticator>
        <AmplifySignOut />
      </AmplifyAuthenticator>
    </Hero>
  );
}
