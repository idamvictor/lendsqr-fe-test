"use client";
import { Star } from "lucide-react";
import { useState } from "react";

interface UserDetailsProps {
  userId: string;
}

export default function UserDetails({ userId }: UserDetailsProps) {
  const [activeTab, setActiveTab] = useState("General Details");

  const tabs = [
    "General Details",
    "Documents",
    "Bank Details",
    "Loans",
    "Savings",
    "App and System",
  ];

  // Mock user data
  const userData = {
    name: "Grace Effiom",
    userId: "LSQF587g80",
    tier: 1,
    accountBalance: "₦200,000.00",
    bankDetails: "9912345678/Previous Bank",
    personalInfo: {
      fullName: "Grace Effiom",
      phoneNumber: "07060780922",
      email: "grace@gmail.com",
      bvn: "07060780922",
      gender: "Female",
      maritalStatus: "Single",
      children: "None",
      residence: "Parent's Apartment",
    },
    education: {
      level: "B.Sc",
      employmentStatus: "Employed",
      sector: "Fintech",
      duration: "2 years",
      officeEmail: "grace@lendsqr.com",
      monthlyIncome: "₦200,000.00- ₦400,000.00",
      loanRepayment: "40,000",
    },
    socials: {
      twitter: "@grace_effiom",
      facebook: "Grace Effiom",
      instagram: "@grace_effiom",
    },
    guarantors: [
      {
        fullName: "Debby Ogana",
        phoneNumber: "07060780922",
        email: "debby@gmail.com",
        relationship: "Sister",
      },
      {
        fullName: "Debby Ogana",
        phoneNumber: "07060780922",
        email: "debby@gmail.com",
        relationship: "Sister",
      },
    ],
  };

  return (
    <div className="details-card">
      <div className="user-summary">
        <div className="summary-content">
          <div className="avatar-section">
            <div className="avatar">
              <svg
                width="40"
                height="40"
                viewBox="0 0 40 40"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M13.3333 26.6667C13.3333 24.8267 14.8267 23.3333 16.6667 23.3333H23.3333C25.1733 23.3333 26.6667 24.8267 26.6667 26.6667V33.3333H30V26.6667C30 22.9867 27.0133 20 23.3333 20H16.6667C12.9867 20 10 22.9867 10 26.6667V33.3333H13.3333V26.6667Z"
                  fill="#213F7D"
                />
                <path
                  d="M20.0001 18.3333C23.6801 18.3333 26.6667 15.3467 26.6667 11.6667C26.6667 7.98667 23.6801 5 20.0001 5C16.3201 5 13.3334 7.98667 13.3334 11.6667C13.3334 15.3467 16.3201 18.3333 20.0001 18.3333ZM20.0001 8.33333C21.8401 8.33333 23.3334 9.82667 23.3334 11.6667C23.3334 13.5067 21.8401 15 20.0001 15C18.1601 15 16.6667 13.5067 16.6667 11.6667C16.6667 9.82667 18.1601 8.33333 20.0001 8.33333Z"
                  fill="#213F7D"
                />
              </svg>
            </div>
            <div className="user-name">
              <h2>{userData.name}</h2>
              <p>{userData.userId}</p>
            </div>
          </div>

          <div className="divider" />

          <div className="tier-section">
            <p>User&apos;s Tier</p>
            <div className="stars">
              <Star className="fill-[#E9B200]" size={16} />
              <Star className="text-[#E9B200]" size={16} />
              <Star className="text-[#E9B200]" size={16} />
            </div>
          </div>

          <div className="divider" />

          <div className="balance-section">
            <h3>{userData.accountBalance}</h3>
            <p>{userData.bankDetails}</p>
          </div>
        </div>
      </div>

      <div className="tabs">
        <div className="tabs-list">
          {tabs.map((tab) => (
            <button
              key={tab}
              className={activeTab === tab ? "active" : ""}
              onClick={() => setActiveTab(tab)}
            >
              {tab}
            </button>
          ))}
        </div>
      </div>

      <div className="tab-content">
        {activeTab === "General Details" ? (
          <div>
            <div className="section">
              <h3>Personal Information</h3>
              <div className="grid-section">
                {Object.entries(userData.personalInfo).map(([key, value]) => (
                  <div key={key} className="field">
                    <p>{key.replace(/([A-Z])/g, " $1").toUpperCase()}</p>
                    <p>{value}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="section">
              <h3>Education and Employment</h3>
              <div className="grid-section">
                {Object.entries(userData.education).map(([key, value]) => (
                  <div key={key} className="field">
                    <p>{key.replace(/([A-Z])/g, " $1").toUpperCase()}</p>
                    <p>{value}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="section socials">
              <h3>Socials</h3>
              <div className="grid-section">
                {Object.entries(userData.socials).map(([key, value]) => (
                  <div key={key} className="field">
                    <p>{key.toUpperCase()}</p>
                    <p>{value}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="section">
              <h3>Guarantor</h3>
              {userData.guarantors.map((guarantor, index) => (
                <div
                  key={index}
                  className={
                    index > 0
                      ? "grid-section mt-8 pt-8 border-t"
                      : "grid-section"
                  }
                >
                  {Object.entries(guarantor).map(([key, value]) => (
                    <div key={key} className="field">
                      <p>{key.replace(/([A-Z])/g, " $1").toUpperCase()}</p>
                      <p>{value}</p>
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>
        ) : (
          <div className="empty-tab">
            <p>This tab is not implemented in this demo.</p>
          </div>
        )}
      </div>
    </div>
  );
}
