import { useQuery } from "@tanstack/react-query";
import api from "../lib/axios";
import { User } from "../types/user";

const USERS_ENDPOINT = "/6fbe1311-4da0-44e2-ad0f-cce9710a48f4";

const fetchUsers = async (): Promise<User[]> => {
  const { data } = await api.get<User[]>(USERS_ENDPOINT);
  console.log("Users data:", data);
  console.log("Number of users:", data.length);
  return data;
};

export const useUsers = () => {
  return useQuery({
    queryKey: ["users"],
    queryFn: fetchUsers,
  });
};
