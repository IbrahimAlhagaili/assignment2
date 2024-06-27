
'use client'
import { useEffect, useState } from 'react';
import { StudentsList } from "./components/StudentsList";
import RegistrationForm from "./components/RegisterationForm";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const Home = () => {
  const [students, setStudents] = useState([]);

  async function fetchStudents() {
    const res = await fetch('http://localhost:5000/users');
    const data = await res.json();
    setStudents(data);
  }

  useEffect(() => {
    fetchStudents();
  }, []);

  return (
    <div>
      <Navbar/>
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <StudentsList students={students}/>
      <RegistrationForm/>
    </main>
    <Footer/>
    </div>
  );
};

export default Home;
