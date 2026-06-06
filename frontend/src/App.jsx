import {
  SignInButton,
  SignOutButton,
  UserButton,
  useAuth,
} from "@clerk/react";

function App() {
  const { isSignedIn } = useAuth();

  return (
    <>
      <h1>Welcome to the app</h1>

      {!isSignedIn ? (
        <SignInButton mode="modal">
          <button> Signin</button>
        </SignInButton>
      ) : (
        <>
          <SignOutButton>
            <button> SignOut</button>
          </SignOutButton>

          <UserButton />
        </>
      )}
    </>
  );
}

export default App;