"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { Mail, Lock, Eye, EyeOff, User, Camera } from "lucide-react";
import { toast } from "react-toastify";
import Image from "next/image";
import { FaGoogle } from "react-icons/fa";
import { registerUser } from "@/utils/authentication/registerUser";
import { googleSignIn } from "@/utils/authentication/googleLogin";

const RegisterPage = () => {
  const router = useRouter();
  
  // Form State
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    photoUrl: "",
    password: "",
    confirmPassword: "",
  });

  // Error State
  const [errors, setErrors] = useState({
    name: null,
    email: null,
    photoUrl: null,
    password: null,
    confirmPassword: null,
  });

  const [showPassword, setShowPassword] = useState(false);

  // --- Validation Functions (HeroUI Pattern) ---
  const validateName = (value) => {
    if (!value) return "Name is required";
    return null;
  };

  const validateEmail = (value) => {
    if (!value) return "Email is required";
    if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)) {
      return "Please enter a valid email address";
    }
    return null;
  };

  const validatePhotoUrl = (value) => {
    if (!value) return "Photo URL is required";
    return null;
  };

  const validatePassword = (value) => {
    if (!value) return "Password is required";
    if (value.length < 6) return "Password must be at least 6 characters";
    if (!/[A-Z]/.test(value)) return "Password must contain at least one uppercase letter";
    if (!/[a-z]/.test(value)) return "Password must contain at least one lowercase letter";
    return null;
  };

  const validateConfirmPassword = (value) => {
    if (!value) return "Please confirm your password";
    if (value !== formData.password) return "Passwords do not match";
    return null;
  };

  // --- Input Handlers ---
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    
    // Clear error when user starts typing
    setErrors((prev) => ({ ...prev, [name]: null }));
  };

  const handleBlur = (name, value) => {
    let error = null;
    if (name === "name") error = validateName(value);
    if (name === "email") error = validateEmail(value);
    if (name === "photoUrl") error = validatePhotoUrl(value);
    if (name === "password") error = validatePassword(value);
    if (name === "confirmPassword") error = validateConfirmPassword(value);
    
    setErrors((prev) => ({ ...prev, [name]: error }));
  };

  // --- Submit Handler ---
  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate all fields
    const nameError = validateName(formData.name);
    const emailError = validateEmail(formData.email);
    const photoError = validatePhotoUrl(formData.photoUrl);
    const passwordError = validatePassword(formData.password);
    const confirmError = validateConfirmPassword(formData.confirmPassword);

    setErrors({ 
      name: nameError, 
      email: emailError, 
      photoUrl: photoError,
      password: passwordError, 
      confirmPassword: confirmError 
    });

    if (!nameError && !emailError && !photoError && !passwordError && !confirmError) {
      registerUser(e)
      // console.log(formData)
    }
  };

  return (
    <div className="min-h-screen bg-[#d3e4f1] flex items-center justify-center px-4 relative overflow-hidden py-20">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="w-full h-full bg-[url('/images/banner-bg.png')] bg-cover bg-center"></div>
      </div>

      <div className="w-full max-w-md bg-white rounded-3xl shadow-2xl overflow-hidden relative z-10">
        
        {/* Header Section */}
        <div className="bg-[#193EAC] p-8 text-center">
          <Link href="/" className="inline-block mb-4">
             <div className="relative w-42 h-12 mx-auto">
                <Image src="/images/logo-white.png" alt="Logo" fill className="object-contain" />
             </div>
          </Link>
          <h1 className="text-3xl font-(family-name:--font-lilita) text-white">
            Join Paw Pals
          </h1>
          <p className="text-blue-100 text-sm mt-2 font-(family-name:--font-open-sans)">
            Create an account to start adopting
          </p>
        </div>

        {/* Form Section */}
        <div className="p-8">
          <form onSubmit={handleSubmit} className="space-y-5">
            
            {/* --- Name Input --- */}
            <div className="space-y-2">
              <label className="block text-sm font-bold text-gray-700 font-(family-name:--font-open-sans)">
                Full Name
              </label>
              <div className="relative">
                <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                <input
                  type="text"
                  name="name"
                  placeholder="John Doe"
                  value={formData.name}
                  onChange={handleChange}
                  onBlur={() => handleBlur("name", formData.name)}
                  className={`w-full pl-10 pr-4 py-3 rounded-xl border-2 text-gray-700 placeholder-gray-500 outline-none transition-all font-[family-name:var(--font-open-sans)] ${
                    errors.name
                      ? "border-[#F85C72] bg-red-50"
                      : "border-gray-200 focus:border-[#193EAC] bg-gray-50"
                  }`}
                />
              </div>
              {errors.name && (
                <p className="text-[#F85C72] text-xs font-bold flex items-center gap-1">
                  <span className="text-lg leading-none">•</span> {errors.name}
                </p>
              )}
            </div>

            {/* --- Email Input --- */}
            <div className="space-y-2">
              <label className="block text-sm font-bold text-gray-700 font-(family-name:--font-open-sans)">
                Email Address
              </label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                <input
                  type="email"
                  name="email"
                  placeholder="john@example.com"
                  value={formData.email}
                  onChange={handleChange}
                  onBlur={() => handleBlur("email", formData.email)}
                  className={`w-full pl-10 pr-4 py-3 rounded-xl border-2 text-gray-700 placeholder-gray-500 outline-none transition-all font-[family-name:var(--font-open-sans)] ${
                    errors.email
                      ? "border-[#F85C72] bg-red-50"
                      : "border-gray-200 focus:border-[#193EAC] bg-gray-50"
                  }`}
                />
              </div>
              {errors.email && (
                <p className="text-[#F85C72] text-xs font-bold flex items-center gap-1">
                  <span className="text-lg leading-none">•</span> {errors.email}
                </p>
              )}
            </div>

            {/* --- Photo URL Input --- */}
            <div className="space-y-2">
              <label className="block text-sm font-bold text-gray-700 font-(family-name:--font-open-sans)">
                Photo URL
              </label>
              <div className="relative">
                <Camera className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                <input
                  type="url"
                  name="photoUrl"
                  placeholder="https://example.com/photo.jpg"
                  value={formData.photoUrl}
                  onChange={handleChange}
                  onBlur={() => handleBlur("photoUrl", formData.photoUrl)}
                  className={`w-full pl-10 pr-4 py-3 rounded-xl border-2 text-gray-700 placeholder-gray-500 outline-none transition-all font-[family-name:var(--font-open-sans)] ${
                    errors.photoUrl
                      ? "border-[#F85C72] bg-red-50"
                      : "border-gray-200 focus:border-[#193EAC] bg-gray-50"
                  }`}
                />
              </div>
              {errors.photoUrl && (
                <p className="text-[#F85C72] text-xs font-bold flex items-center gap-1">
                  <span className="text-lg leading-none">•</span> {errors.photoUrl}
                </p>
              )}
            </div>

            {/* --- Password Input --- */}
            <div className="space-y-2">
              <label className="block text-sm font-bold text-gray-700 font-(family-name:--font-open-sans)">
                Password
              </label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  placeholder="Create a password"
                  value={formData.password}
                  onChange={handleChange}
                  onBlur={() => handleBlur("password", formData.password)}
                  className={`w-full pl-10 pr-10 py-3 rounded-xl border-2 text-gray-700 placeholder-gray-500 outline-none transition-all font-[family-name:var(--font-open-sans)] ${
                    errors.password
                      ? "border-[#F85C72] bg-red-50"
                      : "border-gray-200 focus:border-[#193EAC] bg-gray-50"
                  }`}
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-[#193EAC]"
                >
                  {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                </button>
              </div>
              {errors.password && (
                <p className="text-[#F85C72] text-xs font-bold flex items-center gap-1">
                  <span className="text-lg leading-none">•</span> {errors.password}
                </p>
              )}
            </div>

            {/* --- Confirm Password Input --- */}
            <div className="space-y-2">
              <label className="block text-sm font-bold text-gray-700 font-(family-name:--font-open-sans)">
                Confirm Password
              </label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                <input
                  type="password"
                  name="confirmPassword"
                  placeholder="Confirm your password"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  onBlur={() => handleBlur("confirmPassword", formData.confirmPassword)}
                  className={`w-full pl-10 pr-4 py-3 rounded-xl border-2 text-gray-700 placeholder-gray-500 outline-none transition-all font-[family-name:var(--font-open-sans)] ${
                    errors.confirmPassword
                      ? "border-[#F85C72] bg-red-50"
                      : "border-gray-200 focus:border-[#193EAC] bg-gray-50"
                  }`}
                />
              </div>
              {errors.confirmPassword && (
                <p className="text-[#F85C72] text-xs font-bold flex items-center gap-1">
                  <span className="text-lg leading-none">•</span> {errors.confirmPassword}
                </p>
              )}
            </div>

            {/* --- Submit Button --- */}
            <button
              type="submit"
              className="w-full bg-[#193EAC] hover:bg-[#2a52d6] text-white font-bold py-3 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl font-[family-name:var(--font-open-sans)] text-lg mt-4"
            >
              Register
            </button>

            {/* --- Divider --- */}
            <div className="relative flex py-2 items-center">
              <div className="grow border-t border-gray-300"></div>
              <span className="shrink-0 mx-4 text-gray-400 text-sm">Or continue with</span>
              <div className="grow border-t border-gray-300"></div>
            </div>

            {/* --- Google Register Button --- */}
            <button
              onClick={googleSignIn}
              className="w-full bg-white border-2 border-gray-200 hover:border-gray-300 text-gray-700 font-medium py-3 rounded-xl transition-all duration-300 flex items-center justify-center gap-3 font-[family-name:var(--font-open-sans)]"
            >
              <FaGoogle />
              Sign Up with Google
            </button>

            {/* --- Login Link --- */}
            <p className="text-center text-gray-600 font-(family-name:--font-open-sans) text-sm">
              Already have an account?{" "}
              <Link href="/login" className="text-[#193EAC] font-bold hover:underline">
                Login here
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;