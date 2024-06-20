'use client'
import React, {useState} from 'react'
 
const RegistrationForm = () => {
    const [formData, setFormData] = useState({
        fullName: '',
        dateOfBirth: '',
        password: ''
    })
    const [message, setMessage] = useState('')
 
    const handlInputChange = (e) => {
        console.log(e)
        const {name, value} = e.target
        console.log("Name:",name, "Value:",value)
        setFormData({
            ...formData,
            [name]: value
        })
    }
 
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch('http://localhost:5000/users', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            })
            if(response.ok){
                setMessage('User created successfully')
                setFormData({
                    firstName: '',
                    lastName: '',
                    password: ''
                })
            } else {
                setMessage('Failed to register a user')
            }
           
        } catch (error) {
            setMessage('Failed to register a user')
        }
    }
 
   
 
  return (
    <div className="max-w-md mx-auto mt-10 bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-2xl mb-4">Form</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label
            htmlFor="fullName"
            className="Block text-sm font-medium text-gray-600"
          >
            First Name & Last Name
          </label>
          <input
            type="text"
            id="fullName"
            name="fullName"
            className="mt-1 p-2 w-full border border-gray-300 rounded-md"
            value={formData.firstName}
            onChange={handlInputChange}
            required
          />
        </div>


        <div className="mb-4">
          <label
            htmlFor="dateOfBirth"
            className="Block text-sm font-medium text-gray-600"
          >
            Date Of Birth
          </label>
          <input
            type="date"
            id="dateOfBirth"
            name="dateOfBirth"
            className="mt-1 p-2 w-full border border-gray-300 rounded-md"
            value={formData.phoneNumber}
            onChange={handlInputChange}
            required
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="currentGrade"
            className="block text-sm font-medium text-gray-600"
          >
            Current Grade (%)
          </label>
          <input
            type="number"
            id="currentGrade"
            name="currentGrade"
            className="mt-1 p-2 w-full border border-gray-300 rounded-md"
            value={formData.currentGrade}
            min="0"
            max="100"
            step="0.1"
            required
          />
        </div>

        <div className="mb-4">
          <button
            type="submit"
            className="bg-blue-500 text-white p-2 rounded-md w-full hover:bg-blue-600"
          >
            Register
          </button>
        </div>
      </form>

      {message && (
        <div className="mt-4 text-center text-red-500">{message}</div>
      )}
    </div>
  );
}
 
export default RegistrationForm