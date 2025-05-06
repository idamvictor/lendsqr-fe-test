"use client";
import Users from "@/components/users";
import { useUsers } from "@/hooks/useUsers";
import userData from "@/data/userdata.json";

export default function UsersPage() {
  useUsers();
  console.log("User Data:", userData);
  console.log("User Data Length:", userData.length);

  return <Users />;
}
