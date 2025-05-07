export interface Guarantor {
  firstName: string;
  lastName: string;
  phoneNumber: string;
  address: string;
  gender: string;
}

export interface Profile {
  currency: string;
  bvn: string;
  gender: string;
  address: string;
}

export interface Education {
  level: string;
  employmentStatus: string;
  sector: string;
  duration: string;
}

export interface Socials {
  twitter: string;
  facebook: string;
  instagram: string;
}

export interface User {
  id: string;
  orgName: string;
  userName: string;
  email: string;
  phoneNumber: string;
  createdAt: string;
  status: "active" | "inactive" | "pending" | "blacklisted";
  accountBalance: string;
  accountNumber: string;
  profile: Profile;
  education: Education;
  socials: Socials;
  guarantor: Guarantor;
}
