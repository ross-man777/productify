import { Show, SignInButton, SignOutButton } from "@clerk/react";
import Navbar from "./components/Navbar";
import { Route, Routes } from "react-router";
import HomePage from "./pages/HomePage";
import ProductPage from "./pages/ProductPage";
import ProfilePage from "./pages/ProfilePage";
import CreatePage from "./pages/CreatePage";
import EditProductPage from "./pages/EditProductPage";

function App() {
  return (
    <div className="min-h-screen bg-base-100">
      <Navbar />
      <main className="max-w-5xl mx-auto p-4 py-8">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/product/:id" element={<ProductPage />} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/create" element={<CreatePage />} />
          <Route path="/edit/:id" element={<EditProductPage />} />
        </Routes>
      </main>

      {/* <button className="btn btn-primary"> Click me</button> */}

      {/* old code due to clerk update*/}
      {/*<SignedOut>
        <SignInButton mode="modal" />
      </SignedOut>

      <SignedIn>
        <SignOutButton />
      </SignedIn>}*/}

      {/* Show this ONLY when the user is signed OUT */}
      {/*<Show when="signed-out">
        <SignInButton mode="modal" />
      </Show>*/}

      {/* Show this ONLY when the user is signed IN */}
      {/*<Show when="signed-in">
        <SignOutButton />
      </Show>*/}
    </div>
  );
}

export default App;
