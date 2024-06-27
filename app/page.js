import RegistrationForm from "./componets/RegistrationForm";
import Navbar from "./componets/RegistrationForm";
import Footer from "./componets/RegistrationForm";

export default function Home() {
  return (
    <div>
      <Navbar/>
      <main className="flex min-h-screen flex-col items-center justify-between p-24">
        
        <RegisterationForm/>

      </main>
      <Footer/>
    </div>
  );
}
