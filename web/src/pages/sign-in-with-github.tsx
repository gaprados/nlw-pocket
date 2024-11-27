import logo from "../assets/logo-in-orbit.svg";
import githubLogo from "../assets/github-logo.svg";
import { Button } from "../components/ui/button";

export function SignInWithGithub() {
  const githubUrl = new URL("/login/oauth/authorize", "https://github.com");

  githubUrl.searchParams.set("client_id", "Ov23liOpCwOwNySoObSW");

  return (
    <div className="h-screen flex flex-col items-center justify-center gap-8">
      <img src={logo} alt="in.orbit" />

      <p className="text-zinc-300 leading-relaxed max-w-80 text-center">
        Conclua suas metas semanais, ganhe experiência e suba de nível!
      </p>

      <Button
        asChild
        className="bg-white text-black hover:bg-white hover:opacity-80"
      >
        <a href={githubUrl.toString()}>
          <img src={githubLogo} alt="Github" />
          Entrar com GitHub
        </a>
      </Button>
    </div>
  );
}
