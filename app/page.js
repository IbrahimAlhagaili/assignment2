import RegistrationForm from "./componets/RegistrationForm";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div>
      <Navbar/>
      <main className="flex min-h-screen flex-col items-center justify-between p-24">
        
        <RegistrationForm/>

      </main>
      <Footer/>
    </div>
  );
}
