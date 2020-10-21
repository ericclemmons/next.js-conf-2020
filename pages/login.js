import { AmplifyAuthenticator, AmplifySignOut } from "@aws-amplify/ui-react";
import { Amplify } from "aws-amplify";
import { Hero } from "components/Hero";
import { useUser } from "hooks/useUser";
import { useEffect } from "react";
import awsExports from "src/aws-exports";

Amplify.configure({ ...awsExports, ssr: true });

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
