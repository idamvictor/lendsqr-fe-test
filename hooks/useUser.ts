import { useQuery } from "@tanstack/react-query";
import api from "../lib/axios";
import { User } from "../types/user";

const USERS_ENDPOINT = "/b40dd9f9-f775-4875-b9f1-c225040e598c";

const fetchUser = async (userId: string): Promise<User | undefined> => {
  const { data } = await api.get<User[]>(USERS_ENDPOINT);
  return data.find((user) => user.id === userId);
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
