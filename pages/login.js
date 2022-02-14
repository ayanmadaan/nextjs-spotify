import { getProviders, signIn } from "next-auth/react";

function Login({ providers }) {
  return (
    <div className="flex flex-col items-center bg-black min-h-screen w-full justify-center">
      <h1>Login Page</h1>

      {Object.values(providers).map((provider) => (
        <div key={provider.name}>
          <button
            className="bg-black text-slate-200 h-200 w-150 p-4 rounded-full"
            onClick={() => {
              signIn(provider.id, { callbackUrl: "/" });
            }}
          >
            LOGIN KARO {provider.name}
          </button>
        </div>
      ))}
    </div>
  );
}

export default Login;

export async function getServerSideProps() {
  const providers = await getProviders();
  return {
    props: {
      providers,
    },
  };
}
