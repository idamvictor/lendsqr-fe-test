import { useQuery } from "@tanstack/react-query";
import api from "../lib/axios";
import { User } from "../types/user";

const USERS_ENDPOINT = "/b40dd9f9-f775-4875-b9f1-c225040e598c";

const fetchDashboardData = async () => {
  const { data } = await api.get<User[]>(USERS_ENDPOINT);
  return data;
};

export const useDashboard = () => {
  return useQuery({
    queryKey: ["dashboard"],
    queryFn: fetchDashboardData,
    staleTime: 5 * 60 * 1000, // Consider data fresh for 5 minutes
    gcTime: 30 * 60 * 1000, // Garbage collection after 30 minutes
  });
};
