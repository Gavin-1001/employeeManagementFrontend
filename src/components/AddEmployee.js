import React, { useState } from 'react'

export const AddEmployee = () => {

    const [employee, setemployee] = useState({
        id:"",
        firstName:"",
        lastName: "",
        email: "",
    });

  return (
    <div className='flex max-w-2xl shadow border-b mx-auto'>
        <div className="px-8 py-8">
            <div className="font-thin text-2xl tracking-wider">
                <h1>Add New Employee</h1>
            </div>
            <div className="items-center justify-center h-14 w-full my-4">
                <label className="block text-gray-600 text-sm font-normal">First Name</label>
                <input type="text" name="firstName" value={employee.firstName} className="h-10 w-96 border mt-2 px-2 py-2"></input>
            </div>

            <div className="items-center justify-center h-14 w-full my-4">
                <label className="block text-gray-600 text-sm font-normal">Last Name</label>
                <input type="text" name="lastName" value={employee.lastName} className="h-10 w-96 border mt-2 px-2 py-2"></input>
            </div>

            <div className="items-center justify-center h-14 w-full my-4">
                <label className="block text-gray-600 text-sm font-normal">Email</label>
                <input type="email" name="email" value={employee.email} className="h-10 w-96 border mt-2 px-2 py-2"></input>
            </div>

            <div className="items-center justify-center h-14 w-full my-4 space-x-4 pt-4">
                <button className="rounded text-white font-semibold bg-green-400 hover:bg-green-700 py-2 px-2 ">Save Employee</button>

                <button className="rounded text-white font-semibold bg-red-400 hover:bg-red-700 py-2 px-2">Clear</button>
            </div>

        </div>
    </div>
  )
}
