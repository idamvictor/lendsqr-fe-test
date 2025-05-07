"use client";

import { Star } from "lucide-react";
import { useMemo } from "react";
import userData from "@/data/userdata.json";

interface UserDetailsProps {
  userId: string;
}

const getInitials = (name: string) => {
  const nameArray = name.split(" ");
  const firstInitial = nameArray[0] ? nameArray[0][0] : "";
  const secondInitial = nameArray[1] ? nameArray[1][0] : "";
  return (firstInitial + secondInitial).toUpperCase();
};

export default function UserDetails({ userId }: UserDetailsProps) {
  const user = useMemo(() => {
    return userData.find((user) => user.id === userId);
  }, [userId]);

  const tabs = [
    "General Details",
    "Documents",
    "Bank Details",
    "Loans",
    "Savings",
    "App and System",
  ];

  if (!user) {
    return <div>User not found</div>;
  }

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat("en-NG", {
      style: "currency",
      currency: "NGN",
    }).format(amount);
  };

  return (
    <div className="details-card">
      <div className="user-summary">
        <div className="summary-content">
          <div className="avatar-section">
            <div className="avatar">
              <div>{getInitials(user.userName)}</div>
            </div>
            <div className="user-name">
              <h2>{user.userName}</h2>
              <p>{user.accountNumber}</p>
            </div>
          </div>

          <div className="divider" />

          <div className="tier-section">
            <p>User&apos;s Tier</p>
            <div className="stars">
              {[...Array(user.starRating || 0)].map((_, index) => (
                <Star key={index} className="star-icon" size={16} />
              ))}
            </div>
          </div>

          <div className="divider" />

          <div className="balance-section">
            <h3>{formatCurrency(user.accountBalance)}</h3>
            <p>{user.accountNumber}/Previous Bank</p>
          </div>
        </div>
      </div>

      <div className="tabs">
        <div className="tabs-list">
          {tabs.map((tab) => (
            <button
              key={tab}
              className={tab === "General Details" ? "active" : ""}
            >
              {tab}
            </button>
          ))}
        </div>
      </div>

      <div className="tab-content">
        <div className="section">
          <h3>Personal Information</h3>
          <div className="grid-section">
            <div className="field">
              <p>FULL NAME</p>
              <p>{user.userName}</p>
            </div>
            <div className="field">
              <p>PHONE NUMBER</p>
              <p>{user.phoneNumber}</p>
            </div>
            <div className="field">
              <p>EMAIL ADDRESS</p>
              <p>{user.email}</p>
            </div>
            <div className="field">
              <p>BVN</p>
              <p>{user.profile?.bvn || "N/A"}</p>
            </div>
            <div className="field">
              <p>GENDER</p>
              <p>{user.profile?.gender || "N/A"}</p>
            </div>
            <div className="field">
              <p>ADDRESS</p>
              <p>{user.profile?.address || "N/A"}</p>
            </div>
          </div>
        </div>

        <div className="section">
          <h3>Education and Employment</h3>
          <div className="grid-section">
            <div className="field">
              <p>LEVEL OF EDUCATION</p>
              <p>{user.education?.level || "N/A"}</p>
            </div>
            <div className="field">
              <p>EMPLOYMENT STATUS</p>
              <p>{user.education?.employmentStatus || "N/A"}</p>
            </div>
            <div className="field">
              <p>SECTOR OF EMPLOYMENT</p>
              <p>{user.education?.sector || "N/A"}</p>
            </div>
            <div className="field">
              <p>DURATION OF EMPLOYMENT</p>
              <p>{user.education?.duration || "N/A"}</p>
            </div>
          </div>
        </div>

        <div className="section">
          <h3>Socials</h3>
          <div className="grid-section">
            <div className="field">
              <p>TWITTER</p>
              <p>{user.socials?.twitter || "N/A"}</p>
            </div>
            <div className="field">
              <p>FACEBOOK</p>
              <p>{user.socials?.facebook || "N/A"}</p>
            </div>
            <div className="field">
              <p>INSTAGRAM</p>
              <p>{user.socials?.instagram || "N/A"}</p>
            </div>
          </div>
        </div>

        <div className="section">
          <h3>Guarantor</h3>
          <div className="grid-section">
            <div className="field">
              <p>FULL NAME</p>
              <p>
                {user.guarantor
                  ? `${user.guarantor.firstName} ${user.guarantor.lastName}`
                  : "N/A"}
              </p>
            </div>
            <div className="field">
              <p>PHONE NUMBER</p>
              <p>{user.guarantor?.phoneNumber || "N/A"}</p>
            </div>
            <div className="field">
              <p>ADDRESS</p>
              <p>{user.guarantor?.address || "N/A"}</p>
            </div>
            <div className="field">
              <p>RELATIONSHIP</p>
              <p>{user.guarantor?.relationship || "N/A"}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
