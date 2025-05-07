import { useQuery } from "@tanstack/react-query";
import { MockApiService } from "../services/mockApi";
import { User } from "../types/user";

const fetchDashboardData = async (): Promise<User[]> => {
  return MockApiService.getUsers();
};

export const useDashboard = () => {
  return useQuery({
    queryKey: ["dashboard"],
    queryFn: fetchDashboardData,
    staleTime: 5 * 60 * 1000, // Consider data fresh for 5 minutes
    gcTime: 30 * 60 * 1000, // Garbage collection after 30 minutes
  });
};
