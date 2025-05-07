import { useQuery } from "@tanstack/react-query";
import { MockApiService } from "../services/mockApi";
import { User } from "../types/user";

const fetchUsers = async (): Promise<User[]> => {
  return MockApiService.getUsers();
};

export const useUsers = () => {
  return useQuery({
    queryKey: ["users"],
    queryFn: fetchUsers,
    staleTime: 5 * 60 * 1000,
    gcTime: 30 * 60 * 1000,
  });
};
