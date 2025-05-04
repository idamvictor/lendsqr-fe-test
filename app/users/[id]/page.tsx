import UserDetails from "@/components/user-details";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";

export default function UserDetailsPage({
  params,
}: {
  params: { id: string };
}) {
  return (
    <div className="user-details-page">
      <Link href="/users" className="back-link">
        <ArrowLeft size={20} />
        <span>Back to Users</span>
      </Link>

      <div className="header">
        <h1>User Details</h1>
        <div className="actions">
          <button className="blacklist">BLACKLIST USER</button>
          <button className="activate">ACTIVATE USER</button>
        </div>
      </div>

      <UserDetails userId={params.id} />
    </div>
  );
}
