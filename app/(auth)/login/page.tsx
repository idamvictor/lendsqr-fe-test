"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function LoginPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="login-page">
      {/* Left side with logo and illustration */}
      <div className="left-side">
        <div className="logo-container">
          <Image
            src="https://res.cloudinary.com/dyp8gtllq/image/upload/v1746315981/logo_lr24it.svg"
            alt="Lendsqr Logo"
            width={170}
            height={36}
            priority
          />
        </div>
        <div className="illustration-container">
          <Image
            src="https://res.cloudinary.com/dyp8gtllq/image/upload/v1746315981/pablo-sign-in_1_qvq2ua.svg"
            alt="Login Illustration"
            width={600}
            height={400}
            priority
            className="max-w-full"
          />
        </div>
      </div>

      {/* Right side with login form */}
      <div className="right-side">
        {/* Mobile logo */}
        <div className="mobile-logo">
          <Image
            src="https://res.cloudinary.com/dyp8gtllq/image/upload/v1746315981/logo_lr24it.svg"
            alt="Lendsqr Logo"
            width={130}
            height={30}
            priority
          />
        </div>

        <div className="login-form-container">
          <h1>Welcome!</h1>
          <p>Enter details to login.</p>

          <form>
            {/* Email input */}
            <div className="form-group">
              <div className="input-wrapper">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Email"
                />
              </div>
            </div>

            {/* Password input */}
            <div className="form-group">
              <div className="input-wrapper">
                <input
                  type={showPassword ? "text" : "password"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Password"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="password-toggle"
                >
                  {showPassword ? "Hide" : "Show"}
                </button>
              </div>
            </div>

            {/* Forgot password link */}
            <Link href="#" className="forgot-password">
              Forgot Password?
            </Link>

            {/* Login button */}
            <Link href="/">
              <button type="submit" className="login-button">
                Log In
              </button>
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
}
