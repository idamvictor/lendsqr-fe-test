import { Bell, Search } from "lucide-react";
import Image from "next/image";

export default function Navbar() {
  return (
    <header className="h-20 border-b border-[#213F7D]/10 bg-white flex items-center justify-between px-8">
      <div className="relative w-[400px]">
        <input
          type="text"
          placeholder="Search for anything"
          className="w-full h-10 pl-4 pr-12 border border-[#213F7D]/20 rounded-lg text-sm focus:outline-none focus:ring-1 focus:ring-[#39CDCC]"
        />
        <button className="absolute right-0 top-0 h-10 w-12 bg-[#39CDCC] rounded-r-lg flex items-center justify-center">
          <Search size={16} color="white" />
        </button>
      </div>

      <div className="flex items-center">
        <a href="#" className="text-[#213F7D] underline mr-8 text-sm">
          Docs
        </a>
        <div className="relative mr-8">
          <Bell size={20} className="text-[#213F7D]" />
          <span className="absolute -top-1 -right-1 w-4 h-4 bg-[#F7685B] rounded-full flex items-center justify-center text-white text-[8px]">
            8
          </span>
        </div>
        <div className="flex items-center">
          <div className="w-10 h-10 rounded-full overflow-hidden mr-2">
            <Image
              src="/placeholder.svg?height=40&width=40"
              alt="Profile"
              width={40}
              height={40}
              className="object-cover"
            />
          </div>
          <div className="flex items-center">
            <span className="text-[#213F7D] font-medium mr-1">Adedeji</span>
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
