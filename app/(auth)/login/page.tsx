"use client";

import { useRouter } from "next/navigation";
import { useAuth } from "@/context/AuthContext";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { loginSchema } from "./schema";
import type { z } from "zod";
import { toast } from "react-hot-toast";
import Image from "next/image";
import styles from "@/styles/components/Login.module.scss";

type LoginInputs = z.infer<typeof loginSchema>;

export default function LoginPage() {
  const { login } = useAuth();
  const router = useRouter();
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
      toast.success("Successfully logged in!");
      router.push("/dashboard");
    } catch {
      toast.error("Invalid email or password");
    }
  };

  return (
    <div className={styles.loginContainer}>
      {/* Left side with logo and illustration */}
      <div className={styles.loginIllustration}>
        <Image
          src="/lendsqr-logo.svg"
          alt="Lendsqr Logo"
          width={170}
          height={36}
        />
        <Image
          src="/login-illustration.svg"
          alt="Login Illustration"
          width={600}
          height={400}
        />
      </div>

      {/* Right side with login form */}
      <div className={styles.loginForm}>
        <h1>Welcome!</h1>
        <p>Enter details to login.</p>

        <form onSubmit={handleSubmit(onSubmit)}>
          <div className={styles.formGroup}>
            <input
              type="email"
              placeholder="Email"
              {...register("email")}
              aria-invalid={!!errors.email}
            />
            {errors.email && (
              <p className={styles.errorMessage}>{errors.email.message}</p>
            )}
          </div>

          <div className={styles.formGroup}>
            <input
              type="password"
              placeholder="Password"
              {...register("password")}
              aria-invalid={!!errors.password}
            />
            {errors.password && (
              <p className={styles.errorMessage}>{errors.password.message}</p>
            )}
          </div>

          <a href="#" className={styles.forgotPassword}>
            FORGOT PASSWORD?
          </a>

          <button
            type="submit"
            className={styles.loginButton}
            disabled={isSubmitting}
          >
            {isSubmitting ? "Loading..." : "LOG IN"}
          </button>
        </form>
      </div>
    </div>
  );
}
