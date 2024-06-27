
'use client'
import { useEffect, useState } from 'react';
import { StudentsList } from "./componets/StudentsList";
import RegisterationForm from "./componets/RegisterationForm";
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
      <RegisterationForm/>
    </main>
    <Footer/>
    </div>
  );
};

export default Home;
