export interface User {
  id: string;
  createdAt: string;
  orgName: string;
  userName: string;
  email: string;
  phoneNumber: string;
  lastActiveDate: string;
  profile: UserProfile;
  guarantor: Guarantor;
  accountBalance: string;
  accountNumber: number;
  socials: Socials;
  education: Education;
  status: "inactive" | "active" | "blacklisted" | "pending";
}

interface UserProfile {
  firstName: string;
  lastName: string;
  phoneNumber: string;
  avatar: string;
  gender: string;
  bvn: number;
  address: string;
  currency: string;
}

interface Guarantor {
  firstName: string;
  lastName: string;
  phoneNumber: string;
  gender: string;
  address: string;
}

interface Socials {
  facebook: string;
  instagram: string;
  twitter: string;
}

interface Education {
  level: string;
  employmentStatus: string;
  sector: string;
  duration: string;
  officeEmail: string;
  monthlyIncome: string[];
  loanRepayment: string;
}
