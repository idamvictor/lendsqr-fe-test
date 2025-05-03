export default function UserStats() {
  const stats = [
    {
      title: "USERS",
      count: "2,453",
      icon: (
        <div className="w-10 h-10 rounded-full bg-[#DF18FF]/10 flex items-center justify-center">
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M15.5 8C15.5 12.1421 12.1421 15.5 8 15.5C3.85786 15.5 0.5 12.1421 0.5 8C0.5 3.85786 3.85786 0.5 8 0.5C12.1421 0.5 15.5 3.85786 15.5 8Z"
              stroke="#DF18FF"
            />
            <path
              d="M8 10C9.10457 10 10 9.10457 10 8C10 6.89543 9.10457 6 8 6C6.89543 6 6 6.89543 6 8C6 9.10457 6.89543 10 8 10Z"
              fill="#DF18FF"
            />
            <path
              d="M12 13.5C10.8 12.3 9.5 11.5 8 11.5C6.5 11.5 5.2 12.3 4 13.5"
              stroke="#DF18FF"
              strokeLinecap="round"
            />
          </svg>
        </div>
      ),
    },
    {
      title: "ACTIVE USERS",
      count: "2,453",
      icon: (
        <div className="w-10 h-10 rounded-full bg-[#5718FF]/10 flex items-center justify-center">
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M8 16C3.58172 16 0 12.4183 0 8C0 3.58172 3.58172 0 8 0C12.4183 0 16 3.58172 16 8C16 12.4183 12.4183 16 8 16Z"
              fill="#5718FF"
              fillOpacity="0.1"
            />
            <path
              d="M8 10C9.10457 10 10 9.10457 10 8C10 6.89543 9.10457 6 8 6C6.89543 6 6 6.89543 6 8C6 9.10457 6.89543 10 8 10Z"
              fill="#5718FF"
            />
            <path
              d="M12 13.5C10.8 12.3 9.5 11.5 8 11.5C6.5 11.5 5.2 12.3 4 13.5"
              stroke="#5718FF"
              strokeLinecap="round"
            />
          </svg>
        </div>
      ),
    },
    {
      title: "USERS WITH LOANS",
      count: "12,453",
      icon: (
        <div className="w-10 h-10 rounded-full bg-[#F55F44]/10 flex items-center justify-center">
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0 8C0 3.58172 3.58172 0 8 0C12.4183 0 16 3.58172 16 8C16 12.4183 12.4183 16 8 16C3.58172 16 0 12.4183 0 8Z"
              fill="#F55F44"
              fillOpacity="0.1"
            />
            <path
              d="M8 4L8 12"
              stroke="#F55F44"
              strokeWidth="2"
              strokeLinecap="round"
            />
            <path
              d="M10.5 7L5.5 7"
              stroke="#F55F44"
              strokeWidth="2"
              strokeLinecap="round"
            />
          </svg>
        </div>
      ),
    },
    {
      title: "USERS WITH SAVINGS",
      count: "102,453",
      icon: (
        <div className="w-10 h-10 rounded-full bg-[#FF3366]/10 flex items-center justify-center">
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0 8C0 3.58172 3.58172 0 8 0C12.4183 0 16 3.58172 16 8C16 12.4183 12.4183 16 8 16C3.58172 16 0 12.4183 0 8Z"
              fill="#FF3366"
              fillOpacity="0.1"
            />
            <path
              d="M4 10L12 10"
              stroke="#FF3366"
              strokeWidth="2"
              strokeLinecap="round"
            />
            <path
              d="M8 6L8 14"
              stroke="#FF3366"
              strokeWidth="2"
              strokeLinecap="round"
            />
          </svg>
        </div>
      ),
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
      {stats.map((stat, index) => (
        <div key={index} className="bg-white rounded-lg p-6 shadow-sm">
          <div className="mb-4">{stat.icon}</div>
          <h3 className="text-sm text-[#545F7D] font-medium mb-2">
            {stat.title}
          </h3>
          <p className="text-2xl text-[#213F7D] font-semibold">{stat.count}</p>
        </div>
      ))}
    </div>
  );
}
