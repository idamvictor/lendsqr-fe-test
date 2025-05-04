import { Bell, Search } from "lucide-react";
import Image from "next/image";

export default function Navbar() {
  return (
    <header className="navbar">
      <div className="navbar__left">
        <div className="navbar__logo">
          <Image
                      src="https://res.cloudinary.com/dyp8gtllq/image/upload/v1746315981/logo_lr24it.svg"
                      alt="Lendsqr Logo"
                      width={130}
                      height={30}
                      priority
                    />
        </div>

        <div className="navbar__search">
          <input type="text" placeholder="Search for anything" />
          <button>
            <Search size={16} color="white" />
          </button>
        </div>
      </div>

      <div className="navbar__right">
        <a href="#" className="docs-link">
          Docs
        </a>
        <div className="notifications">
          <Bell size={20} className="bell-icon" />
          <span className="notification-badge">8</span>
        </div>
        <div className="profile">
          <div className="profile__image">
            <Image
              src="/placeholder.svg?height=40&width=40"
              alt="Profile"
              width={40}
              height={40}
              className="rounded-full"
            />
          </div>
          <div className="profile__info">
            <span>Adedeji</span>
            <svg
              width="12"
              height="8"
              viewBox="0 0 12 8"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1.41 0.590088L6 5.17009L10.59 0.590088L12 2.00009L6 8.00009L0 2.00009L1.41 0.590088Z"
                fill="#213F7D"
              />
            </svg>
          </div>
        </div>
      </div>
    </header>
  );
}
