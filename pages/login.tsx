import { AmplifyAuthenticator, AmplifySignOut } from "@aws-amplify/ui-react";
import { Hero } from "components/Hero";
import { useUser } from "hooks/useUser";
import { useEffect } from "react";

export default function Login() {
  const user = useUser();

  useEffect(() => {
    if (user) window.location.href = "/";
  }, [user]);

  return (
    <Hero>
      <AmplifyAuthenticator>
        <AmplifySignOut />
      </AmplifyAuthenticator>
    </Hero>
  );
}
