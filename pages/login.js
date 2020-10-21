import { Hero } from "components/Hero";
import { useUser } from "hooks/useUser";
import { useEffect } from "react";

import { AmplifyAuthenticator, AmplifySignOut } from "@aws-amplify/ui-react";
import { Amplify } from "aws-amplify";
import config from "src/aws-exports";
Amplify.configure({ ...config, ssr: true });

export default function Login() {
  const user = useUser();

  useEffect(() => {
    if (user) window.location.href = "/api/preview";
  }, [user]);

  return (
    <Hero>
      <AmplifyAuthenticator>
        <AmplifySignOut />
      </AmplifyAuthenticator>
    </Hero>
  );
}
