import { useQuery } from "@tanstack/react-query";
import { MockApiService } from "../services/mockApi";
import { User } from "../types/user";

const fetchUser = async (userId: string): Promise<User | undefined> => {
  return MockApiService.getUser(userId);
};

export const useUser = (userId: string) => {
  return useQuery({
    queryKey: ["user", userId],
    queryFn: () => fetchUser(userId),
    staleTime: 5 * 60 * 1000,
    gcTime: 30 * 60 * 1000,
    enabled: !!userId,
  });
};
