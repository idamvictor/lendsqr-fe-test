"use client";

import { createContext, useContext, useState, useEffect } from "react";
import { useRouter } from "next/navigation";

interface User {
  email: string;
  name: string;
}

interface AuthContextType {
  user: User | null;
  login: (email: string, password: string) => Promise<void>;
  logout: () => void;
  isLoading: boolean;
  isAuthenticated: boolean;
}

const AuthContext = createContext<AuthContextType | null>(null);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    // Check if user is logged in on mount
    const token = localStorage.getItem("authToken");
    if (token) {
      // In a real app, validate token and fetch user data
      setUser({
        email: "admin@lendsqr.com",
        name: "Admin User"
      });
    }
    setIsLoading(false);
  }, []);

  const login = async (email: string, password: string) => {
    try {
      // Mock login - replace with actual API call in production
      if (email === "admin@lendsqr.com" && password === "password123") {
        const token = "mock-token";
        localStorage.setItem("authToken", token);
        setUser({
          email,
          name: "Admin User"
        });
        router.push("/dashboard");
      } else {
        throw new Error("Invalid credentials");
      }
    } catch (error) {
      throw error;
    }
  };

  const logout = () => {
    localStorage.removeItem("authToken");
    setUser(null);
    router.push("/login");
  };

  return (
    <AuthContext.Provider 
      value={{ 
        user, 
        login, 
        logout, 
        isLoading,
        isAuthenticated: !!user 
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
}