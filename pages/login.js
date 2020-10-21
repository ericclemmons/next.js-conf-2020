import { Hero } from "components/Hero";
import { useUser } from "hooks/useUser";
import { useEffect } from "react";

export default function Login() {
  const user = useUser();

  useEffect(() => {
    if (user) window.location.href = "/api/preview";
  }, [user]);

  return (
    <Hero>
      {/* TODO Replace with AmplifyAuthenticator */}
      <form>
        {/* TODO Replace with AmlifySignOut */}
        <button>TODO: Sign Out</button>
      </form>
    </Hero>
  );
}
