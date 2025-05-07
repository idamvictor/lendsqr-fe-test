import userData from "../data/userdata.json";
import { User } from "../types/user";

const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

const defaultUser = {
  profile: {
    currency: "NGN",
    bvn: "12345678901",
    gender: "Not specified",
    address: "Not specified",
  },
  education: {
    level: "Not specified",
    employmentStatus: "Not specified",
    sector: "Not specified",
    duration: "Not specified",
  },
  socials: {
    twitter: "Not specified",
    facebook: "Not specified",
    instagram: "Not specified",
  },
  guarantor: {
    firstName: "Not specified",
    lastName: "Not specified",
    phoneNumber: "Not specified",
    address: "Not specified",
    gender: "Not specified",
  },
};

export class MockApiService {
  static async getUsers(): Promise<User[]> {
    // Simulate network delay
    await delay(500);

    return userData.map((user) => ({
      id: user.id || "",
      orgName: user.orgName || "",
      userName: user.userName || "",
      email: user.email || "",
      phoneNumber: user.phoneNumber || "",
      createdAt: user.createdAt || "",
      accountBalance: user.accountBalance?.toString() || "0",
      accountNumber: user.accountNumber?.toString() || "0000000000",
      status: (user.status as User["status"]) || "pending",
      profile: {
        ...defaultUser.profile,
        ...(user.profile || {}),
        bvn: user.profile?.bvn?.toString() || defaultUser.profile.bvn,
      },
      education: { ...defaultUser.education, ...(user.education || {}) },
      socials: { ...defaultUser.socials, ...(user.socials || {}) },
      guarantor: { ...defaultUser.guarantor, ...(user.guarantor || {}) },
    }));
  }

  static async getUser(userId: string): Promise<User | undefined> {
    await delay(500);
    const user = userData.find((user) => user.id === userId);
    if (!user) return undefined;

    return {
      id: user.id || "",
      orgName: user.orgName || "",
      userName: user.userName || "",
      email: user.email || "",
      phoneNumber: user.phoneNumber || "",
      createdAt: user.createdAt || "",
      accountBalance: user.accountBalance?.toString() || "0",
      accountNumber: user.accountNumber?.toString() || "0000000000",
      status: (user.status as User["status"]) || "pending",
      profile: {
        ...defaultUser.profile,
        ...(user.profile || {}),
        bvn: user.profile?.bvn?.toString() || defaultUser.profile.bvn,
      },
      education: { ...defaultUser.education, ...(user.education || {}) },
      socials: { ...defaultUser.socials, ...(user.socials || {}) },
      guarantor: { ...defaultUser.guarantor, ...(user.guarantor || {}) },
    };
  }
}
