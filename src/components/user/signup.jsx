import React, { useState } from "react";
import { InputText } from "primereact/inputtext";
import { Password } from "primereact/password";
import { Button } from "primereact/button";
import { Card } from "primereact/card";
import { Checkbox } from "primereact/checkbox";

export default function SignupForm() {
    const [user, setUser] = useState({
        name: "",
        email: "",
        password: "",
        acceptTerms: false
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setUser({ ...user, [name]: value });
    };

    const handleCheckboxChange = (e) => {
        setUser({ ...user, acceptTerms: e.checked });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("User Data:", user);
        alert("Signup Successful!");
    };

    return (
        <div className="flex justify-center items-center min-h-screen bg-gray-100">
            <Card className="w-full sm:w-96 p-5 shadow-lg rounded-2xl">
                <h2 className="text-2xl font-bold text-center mb-4 text-gray-700">Sign Up</h2>

                <form onSubmit={handleSubmit} className="space-y-4">
                    {/* Name Field */}
                    <div className="p-float-label">
                        <InputText id="name" name="name" value={user.name} onChange={handleChange} className="w-full p-inputtext-sm" required />
                        <label htmlFor="name">Full Name</label>
                    </div>

                    {/* Email Field */}
                    <div className="p-float-label">
                        <InputText id="email" name="email" type="email" value={user.email} onChange={handleChange} className="w-full p-inputtext-sm" required />
                        <label htmlFor="email">Email</label>
                    </div>

                    {/* Password Field */}
                    <div className="p-float-label">
                        <Password id="password" name="password" value={user.password} onChange={handleChange} toggleMask className="w-full p-inputtext-sm" required />
                        <label htmlFor="password">Password</label>
                    </div>

                    {/* Accept Terms Checkbox */}
                    <div className="flex items-center gap-2">
                        <Checkbox id="acceptTerms" checked={user.acceptTerms} onChange={handleCheckboxChange} />
                        <label htmlFor="acceptTerms" className="text-sm text-gray-600">I accept the terms and conditions</label>
                    </div>

                    {/* Signup Button */}
                    <Button label="Sign Up" type="submit" className="w-full p-button-rounded p-button-primary" />
                </form>
            </Card>
        </div>
    );
}
