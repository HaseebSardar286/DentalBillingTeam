import type { Metadata } from "next";
import AdminNavbar from "@/components/admin/AdminNavbar";

export const metadata: Metadata = {
  title: "Admin Dashboard - Dental Billing Team",
  description: "Admin panel for Dental Billing Team",
};

export default function AdminLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <AdminNavbar />
      <main className="flex-grow-1">{children}</main>
    </>
  );
}
