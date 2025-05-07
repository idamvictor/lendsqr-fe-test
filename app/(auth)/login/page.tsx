"use client";

import { useRouter } from "next/navigation";
import { useAuth } from "@/context/AuthContext";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { loginSchema } from "./schema";
import type { z } from "zod";
import { toast } from "react-hot-toast";
import Image from "next/image";
import "@/styles/components/login.scss";
import { useState } from "react";

type LoginInputs = z.infer<typeof loginSchema>;

export default function LoginPage() {
  const { login } = useAuth();
  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<LoginInputs>({
    resolver: zodResolver(loginSchema),
  });

  const onSubmit = async (data: LoginInputs) => {
    try {
      await login(data.email, data.password);
      toast.success("Successfully logged in!", {
        duration: 3000,
        style: {
          background: "#39CDCC",
          color: "#FFFFFF",
        },
      });
      router.push("/dashboard");
    } catch (error) {
      console.error("Login error:", error);
      toast.error("Invalid email or password", {
        duration: 4000,
        style: {
          background: "#FF0000",
          color: "#FFFFFF",
        },
      });
    }
  };

  return (
    <div className="login-page">
      <div className="left-side">
        <div className="logo-container">
          <Image
            src="https://res.cloudinary.com/dyp8gtllq/image/upload/v1746315981/logo_lr24it.svg"
            alt="Lendsqr Logo"
            width={174}
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
          />
        </div>
      </div>

      <div className="right-side">
        <div className="mobile-logo">
          <Image
            src="https://res.cloudinary.com/dyp8gtllq/image/upload/v1746315981/logo_lr24it.svg"
            alt="Lendsqr Logo"
            width={174}
            height={36}
            priority
          />
        </div>

        <div className="login-form-container">
          <h1>Welcome!</h1>
          <p>Enter details to login.</p>

          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="form-group">
              <div className="input-wrapper">
                <input
                  type="email"
                  placeholder="Email"
                  {...register("email")}
                  aria-invalid={!!errors.email}
                />
                {errors.email && (
                  <span className="error-message">{errors.email.message}</span>
                )}
              </div>
            </div>

            <div className="form-group">
              <div className="input-wrapper">
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="Password"
                  {...register("password")}
                  aria-invalid={!!errors.password}
                />
                <button
                  type="button"
                  className="password-toggle"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? "HIDE" : "SHOW"}
                </button>
                {errors.password && (
                  <span className="error-message">
                    {errors.password.message}
                  </span>
                )}
              </div>
            </div>

            <a href="#" className="forgot-password">
              FORGOT PASSWORD?
            </a>

            <button
              type="submit"
              className="login-button"
              disabled={isSubmitting}
            >
              {isSubmitting ? (
                <span className="loading-spinner">
                  <span className="spinner-dot"></span>
                  <span className="spinner-dot"></span>
                  <span className="spinner-dot"></span>
                </span>
              ) : (
                "LOG IN"
              )}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
