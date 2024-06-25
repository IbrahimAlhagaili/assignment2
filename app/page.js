
'use client'
import { useEffect, useState } from 'react';
import RegisterationForm from "./componets/RegisterationForm";
import { StudentsList } from "./componets/StudentsList";

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
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <StudentsList students={students}/>
      <RegisterationForm/>
    </main>
  );
};

export default Home;
