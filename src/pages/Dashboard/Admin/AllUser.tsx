"use client";

import Loader from "@/components/Loader";
/* eslint-disable @typescript-eslint/no-explicit-any */

import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  useGetAllUserQuery,
  useProfileUpdateMutation,
} from "@/redux/User/user.api";

import { useEffect, useState } from "react";
import { toast } from "sonner";

const AllUser = () => {
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    const handleHashChange = () => {
      const pageFromHash = Number(window.location.hash.split("/")[2]) || 1;
      setCurrentPage(pageFromHash);
    };

    handleHashChange();
    window.addEventListener("hashchange", handleHashChange);

    return () => {
      window.removeEventListener("hashchange", handleHashChange);
    };
  }, []);

  const { data, isLoading } = useGetAllUserQuery({
    page: currentPage,
    limit: 10,
  });

  const [profileUpdate] = useProfileUpdateMutation();

  const handleUpdateStatus = async (id: string, shouldBlock: boolean) => {
    const toastId = toast.loading("Updating profile...");

    try {
      await profileUpdate({ id, data: { isBlocked: shouldBlock } }).unwrap();
      toast.success(
        shouldBlock
          ? "User blocked successfully"
          : "User unblocked successfully",
        { id: toastId },
      );
    } catch (error) {
      console.log(error);
      toast.error("Profile update failed", { id: toastId });
    }
  };

  const users = data?.data || [];

  if (isLoading) return <Loader />;

  return (
    <>
      <style>{`
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes slideInRight {
          from { opacity: 0; transform: translateX(30px); }
          to { opacity: 1; transform: translateX(0); }
        }
        @keyframes scaleIn {
          from { opacity: 0; transform: scale(0.95); }
          to { opacity: 1; transform: scale(1); }
        }
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-12px); }
        }
        @keyframes shimmer {
          0% { background-position: -1000px 0; }
          100% { background-position: 1000px 0; }
        }
        @keyframes glow {
          0%, 100% { box-shadow: 0 0 25px rgba(59, 130, 246, 0.4); }
          50% { box-shadow: 0 0 40px rgba(59, 130, 246, 0.6); }
        }
        @keyframes pulse {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.05); }
        }
        .fade-in-up { animation: fadeInUp 0.6s ease-out; }
        .slide-in-right { animation: slideInRight 0.5s ease-out; }
        .scale-in { animation: scaleIn 0.4s ease-out; }
        .float { animation: float 4s ease-in-out infinite; }
        .glow { animation: glow 3s ease-in-out infinite; }
        .pulse { animation: pulse 2s ease-in-out infinite; }

        .user-table-container {
          background: rgba(255, 255, 255, 0.95);
          backdrop-filter: blur(16px);
          border-radius: 24px;
          box-shadow: 0 20px 60px rgba(59, 130, 246, 0.15);
          overflow: hidden;
          border: 1px solid rgba(59, 130, 246, 0.1);
        }

        .user-table-header {
          background: linear-gradient(135deg, #3b82f6, #06b6d4, #3b82f6);
          background-size: 200% 100%;
          position: relative;
          overflow: hidden;
        }

        .user-table-header::before {
          content: '';
          position: absolute;
          top: 0;
          left: -1000px;
          width: 200%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255,255,255,0.3), transparent);
          animation: shimmer 3s infinite;
        }

        .user-table-header th {
          padding: 20px 24px !important;
          font-weight: 700 !important;
          font-size: 14px !important;
          text-transform: uppercase !important;
          letter-spacing: 0.5px !important;
          color: white !important;
          text-align: left !important;
          position: relative;
          z-index: 1;
        }

        .user-table-row {
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          border-bottom: 1px solid rgba(59, 130, 246, 0.1);
          background: white;
        }

        .user-table-row:hover {
          background: linear-gradient(135deg, #dbeafe, #cffafe);
          transform: scale(1.01);
          box-shadow: 0 4px 20px rgba(59, 130, 246, 0.15);
        }

        .user-table-cell {
          padding: 18px 24px !important;
          font-weight: 500 !important;
          color: #374151 !important;
          vertical-align: middle !important;
        }

        .user-profile-image {
          width: 56px;
          height: 56px;
          border-radius: 16px;
          object-fit: cover;
          border: 3px solid transparent;
          background: linear-gradient(white, white) padding-box,
                      linear-gradient(135deg, #3b82f6, #06b6d4) border-box;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
          transition: all 0.3s ease;
        }

        .user-profile-image:hover {
          transform: scale(1.1) rotate(5deg);
          box-shadow: 0 8px 20px rgba(59, 130, 246, 0.3);
        }

        .user-name-badge {
          background: linear-gradient(135deg, #dbeafe, #bfdbfe);
          color: #1e3a8a;
          padding: 8px 16px;
          border-radius: 12px;
          font-weight: 700;
          font-size: 15px;
          display: inline-block;
          border: 1px solid #93c5fd;
        }

        .user-role-badge {
          background: linear-gradient(135deg, #e0e7ff, #c7d2fe);
          color: #3730a3;
          padding: 8px 16px;
          border-radius: 20px;
          font-weight: 700;
          font-size: 13px;
          display: inline-block;
          border: 1px solid #a5b4fc;
          text-transform: uppercase;
          letter-spacing: 0.5px;
        }

        .user-email-badge {
          background: linear-gradient(135deg, #f0f9ff, #e0f2fe);
          color: #0c4a6e;
          padding: 8px 14px;
          border-radius: 10px;
          font-weight: 600;
          font-size: 13px;
          display: inline-block;
          border: 1px solid #bae6fd;
          font-family: 'Monaco', 'Courier New', monospace;
        }

        .user-status-active {
          background: linear-gradient(135deg, #d1fae5, #a7f3d0);
          color: #065f46;
          padding: 8px 18px;
          border-radius: 20px;
          font-weight: 700;
          font-size: 13px;
          display: inline-block;
          border: 2px solid #6ee7b7;
          box-shadow: 0 4px 12px rgba(16, 185, 129, 0.2);
        }

        .user-status-blocked {
          background: linear-gradient(135deg, #fee2e2, #fecaca);
          color: #991b1b;
          padding: 8px 18px;
          border-radius: 20px;
          font-weight: 700;
          font-size: 13px;
          display: inline-block;
          border: 2px solid #fca5a5;
          box-shadow: 0 4px 12px rgba(239, 68, 68, 0.2);
        }

        .user-status-inactive {
          background: linear-gradient(135deg, #fef3c7, #fde68a);
          color: #78350f;
          padding: 8px 18px;
          border-radius: 20px;
          font-weight: 700;
          font-size: 13px;
          display: inline-block;
          border: 2px solid #fcd34d;
          box-shadow: 0 4px 12px rgba(245, 158, 11, 0.2);
        }

        .user-status-deleted {
          background: linear-gradient(135deg, #e5e7eb, #d1d5db);
          color: #374151;
          padding: 8px 18px;
          border-radius: 20px;
          font-weight: 700;
          font-size: 13px;
          display: inline-block;
          border: 2px solid #9ca3af;
          box-shadow: 0 4px 12px rgba(107, 114, 128, 0.2);
        }

        .user-table-caption {
          padding: 16px 24px !important;
          color: #6b7280 !important;
          font-style: italic !important;
          font-size: 14px !important;
          background: linear-gradient(135deg, #f0f9ff, #e0f2fe) !important;
          text-align: center !important;
        }

        .user-table-footer {
          background: linear-gradient(135deg, #dbeafe, #cffafe);
          padding: 20px;
        }

        .stats-container {
          display: flex;
          justify-content: center;
          gap: 24px;
          margin-bottom: 32px;
          flex-wrap: wrap;
        }

        .stats-card {
          background: linear-gradient(135deg, #dbeafe, #bfdbfe);
          border: 2px solid #60a5fa;
          border-radius: 20px;
          padding: 20px 32px;
          display: flex;
          align-items: center;
          gap: 16px;
          box-shadow: 0 8px 20px rgba(59, 130, 246, 0.2);
        }

        .stats-icon {
          width: 56px;
          height: 56px;
          background: linear-gradient(135deg, #3b82f6, #2563eb);
          border-radius: 14px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
          font-size: 28px;
        }

        .stats-content {
          text-align: left;
        }

        .stats-number {
          font-size: 32px;
          font-weight: 800;
          color: #1e3a8a;
          line-height: 1;
          margin-bottom: 6px;
        }

        .stats-label {
          font-size: 14px;
          font-weight: 600;
          color: #1e40af;
          text-transform: uppercase;
          letter-spacing: 0.5px;
        }
      `}</style>

      <section className="relative min-h-screen overflow-hidden bg-linear-to-br from-blue-50 via-cyan-50 to-blue-100 p-6">
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <div className="float absolute top-20 left-10 h-40 w-40 rounded-full bg-linear-to-r from-blue-300 to-cyan-300 opacity-20"></div>
          <div
            className="float absolute top-60 right-20 h-32 w-32 rounded-full bg-linear-to-r from-cyan-300 to-blue-300 opacity-20"
            style={{ animationDelay: "2s" }}
          ></div>
          <div
            className="float absolute bottom-32 left-1/4 h-48 w-48 rounded-full bg-linear-to-r from-blue-200 to-cyan-200 opacity-15"
            style={{ animationDelay: "4s" }}
          ></div>
          <div
            className="float absolute top-1/3 right-1/3 h-36 w-36 rounded-full bg-linear-to-r from-cyan-300 to-blue-300 opacity-20"
            style={{ animationDelay: "1s" }}
          ></div>
        </div>

        <div className="relative z-10 mx-auto max-w-7xl">
          <div className="fade-in-up mb-12 text-center">
            <div className="mb-6 flex items-center justify-center gap-4">
              <div className="glow rounded-3xl bg-linear-to-r from-blue-500 to-cyan-500 p-4 shadow-xl">
                <svg
                  className="h-10 w-10 text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
                  />
                </svg>
              </div>
              <h1 className="bg-linear-to-r from-blue-600 via-cyan-600 to-blue-800 bg-clip-text text-6xl font-black text-transparent">
                All Users
              </h1>
            </div>

            <p className="mx-auto mb-8 max-w-2xl text-xl text-gray-600">
              Manage and monitor all registered users in the system
            </p>

            <div className="stats-container fade-in-up">
              <div className="stats-card">
                <div className="stats-icon">👥</div>
                <div className="stats-content">
                  <div className="stats-number">{users.length}</div>
                  <div className="stats-label">Total Users</div>
                </div>
              </div>
            </div>
          </div>

          <div className="user-table-container scale-in">
            <Table className="overflow-hidden">
              <TableCaption className="user-table-caption">
                A list of all users.
              </TableCaption>

              <TableHeader className="user-table-header">
                <TableRow>
                  <TableHead>Name</TableHead>
                  <TableHead>Role</TableHead>
                  <TableHead>Email</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Action</TableHead>
                </TableRow>
              </TableHeader>

              <TableBody>
                {users.map((user: any, index: number) => (
                  <TableRow
                    key={user._id}
                    className="user-table-row slide-in-right"
                    style={{ animationDelay: `${index * 0.05}s` }}
                  >
                    <TableCell className="user-table-cell">
                      <span className="user-name-badge">{user.name}</span>
                    </TableCell>

                    <TableCell className="user-table-cell">
                      <span className="user-role-badge">
                        {user.role === "ADMIN" ? "👑" : "👤"} {user.role}
                      </span>
                    </TableCell>

                    <TableCell className="user-table-cell">
                      <span className="user-email-badge">{user.email}</span>
                    </TableCell>

                    <TableCell className="user-table-cell">
                      {user.isDeleted ? (
                        <span className="user-status-deleted">🗑️ Deleted</span>
                      ) : user.isBlocked ? (
                        <span className="user-status-blocked">🚫 Blocked</span>
                      ) : !user.isVerified ? (
                        <span className="user-status-inactive">
                          ⏸️ Inactive
                        </span>
                      ) : (
                        <span className="user-status-active">✅ Active</span>
                      )}
                    </TableCell>

                    <TableCell className="user-table-cell flex items-center gap-2">
                      {user.isBlocked ? (
                        <Button
                          onClick={() => handleUpdateStatus(user._id, false)}
                          variant="secondary"
                          disabled={user.isActive === "ACTIVE"}
                          className={`transform cursor-pointer rounded-2xl bg-linear-to-r from-blue-500 to-cyan-500 text-white shadow-lg transition-all duration-300 hover:scale-105 hover:from-blue-600 hover:to-cyan-600 hover:shadow-2xl ${
                            user.isActive === "ACTIVE"
                              ? "cursor-not-allowed opacity-50 hover:scale-100 hover:shadow-none"
                              : ""
                          }`}
                        >
                          Unblock
                        </Button>
                      ) : (
                        <Button
                          onClick={() => handleUpdateStatus(user._id, true)}
                          variant="secondary"
                          disabled={user.isActive === "BLOCKED"}
                          className={`transform cursor-pointer rounded-2xl bg-linear-to-r from-blue-500 to-cyan-500 text-white shadow-lg transition-all duration-300 hover:scale-105 hover:from-red-400 hover:to-pink-400 hover:shadow-2xl ${
                            user.isActive === "BLOCKED"
                              ? "cursor-not-allowed opacity-50 hover:scale-100 hover:shadow-none"
                              : ""
                          }`}
                        >
                          🚫 Block
                        </Button>
                      )}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </div>
      </section>
    </>
  );
};

export default AllUser;
