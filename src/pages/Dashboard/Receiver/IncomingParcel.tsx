/* eslint-disable @typescript-eslint/no-explicit-any */

import Loader from "@/components/Loader";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  useGetIncomingParcelQuery,
  useUserDetailsQuery,
} from "@/redux/Parcel/parcel.api";

import { useEffect, useState } from "react";
import { ParcelConfirmModal } from "./ParcelConfirmModal";
export const SenderName = ({ userId }: { userId: string }) => {
  const { data, isLoading } = useUserDetailsQuery(userId);

  if (isLoading)
    return <span className="incoming-sender-badge">⏳ Loading...</span>;

  const userName = data?.data?.name || "Unknown";

  return <span className="incoming-sender-badge">👤 {userName}</span>;
};
const IncomingParcel = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const [limit] = useState(5);

  useEffect(() => {
    const handleHashChange = () => {
      const pageFromHash = Number(window.location.hash.split("/")[2]) || 0;
      setCurrentPage(pageFromHash);
    };

    handleHashChange();

    window.addEventListener("hashchange", handleHashChange);

    return () => {
      window.removeEventListener("hashchange", handleHashChange);
    };
  }, []);

  const { data, isLoading } = useGetIncomingParcelQuery({
    page: currentPage,
    limit,
  });

  const parcel = data?.data?.data;

  const getStatusColor = (status: string) => {
    const statusLower = status?.toLowerCase();
    if (statusLower?.includes("delivered"))
      return "bg-gradient-to-r from-green-100 to-emerald-100 text-white";
    if (statusLower?.includes("transit") || statusLower?.includes("shipping"))
      return "bg-gradient-to-r from-blue-500 to-cyan-600 text-white";
    if (statusLower?.includes("pending"))
      return "bg-gradient-to-r from-yellow-500 to-orange-600 text-white";
    if (statusLower?.includes("cancelled"))
      return "bg-gradient-to-r from-red-500 to-pink-600 text-white";
    return "bg-gradient-to-r from-blue-200 to-cyan-200 text-white";
  };

  if (isLoading) {
    return <Loader></Loader>;
  }

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
          50% { transform: translateY(-10px); }
        }
        @keyframes shimmer {
          0% { background-position: -1000px 0; }
          100% { background-position: 1000px 0; }
        }
        /* Updated glow animation from emerald to blue */
        @keyframes glow {
          0%, 100% { box-shadow: 0 0 20px rgba(59, 130, 246, 0.3); }
          50% { box-shadow: 0 0 30px rgba(59, 130, 246, 0.5); }
        }
        .fade-in-up { animation: fadeInUp 0.6s ease-out; }
        .slide-in-right { animation: slideInRight 0.5s ease-out; }
        .scale-in { animation: scaleIn 0.4s ease-out; }
        .float { animation: float 4s ease-in-out infinite; }
        .glow { animation: glow 3s ease-in-out infinite; }

        .incoming-table-container {
          background: rgba(255, 255, 255, 0.95);
          backdrop-filter: blur(16px);
          border-radius: 24px;
          /* Updated shadow from emerald to blue */
          box-shadow: 0 20px 60px rgba(59, 130, 246, 0.15);
          overflow: hidden;
          border: 1px solid rgba(59, 130, 246, 0.1);
        }

        /* Updated table header gradient from emerald to blue-cyan */
        .incoming-table-header {
          background: linear-gradient(135deg, #3b82f6, #0ea5e9, #06b6d4);
          position: relative;
          overflow: hidden;
        }

        .incoming-table-header::before {
          content: '';
          position: absolute;
          top: 0;
          left: -1000px;
          width: 200%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent);
          animation: shimmer 3s infinite;
        }

        .incoming-table-header th {
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

        .incoming-table-row {
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          border-bottom: 1px solid rgba(14, 165, 233, 0.1);
          background: white;
        }

        .incoming-table-row:hover {
          background: linear-gradient(135deg, #e0f2fe, #e0f2fe);
          transform: scale(1.01);
          box-shadow: 0 4px 20px rgba(14, 165, 233, 0.15);
        }

        .incoming-table-cell {
          padding: 18px 24px !important;
          font-weight: 500 !important;
          color: #374151 !important;
          vertical-align: middle !important;
        }

        .incoming-tracking-badge {
          font-family: 'Monaco', 'Courier New', monospace;
          background: linear-gradient(135deg, #dbeafe, #bfdbfe);
          padding: 8px 14px;
          border-radius: 10px;
          font-weight: 700;
          color: #1e3a8a;
          border: 2px solid #93c5fd;
          display: inline-block;
          font-size: 13px;
          letter-spacing: 0.5px;
        }

        /* Updated type badge from emerald to cyan */
        .incoming-type-badge {
          background: linear-gradient(135deg, #cffafe, #a5f3fc);
          color: #164e63;
          padding: 6px 14px;
          border-radius: 20px;
          font-weight: 600;
          font-size: 13px;
          display: inline-block;
          border: 1px solid #67e8f9;
        }

        .incoming-weight-badge {
          background: linear-gradient(135deg, #fef3c7, #fde68a);
          color: #78350f;
          padding: 6px 14px;
          border-radius: 20px;
          font-weight: 700;
          font-size: 13px;
          display: inline-flex;
          align-items: center;
          gap: 4px;
          border: 1px solid #fcd34d;
        }

        .incoming-fee-badge {
          background: linear-gradient(135deg, #e0f2fe, #bae6fd);
          color: #0c4a6e;
          padding: 8px 16px;
          border-radius: 10px;
          font-weight: 800;
          font-size: 15px;
          display: inline-block;
          border: 2px solid #7dd3fc;
        }

        .incoming-date-badge {
          background: linear-gradient(135deg, #fce7f3, #fbcfe8);
          color: #831843;
          padding: 6px 14px;
          border-radius: 20px;
          font-weight: 600;
          font-size: 13px;
          display: inline-block;
          border: 1px solid #f9a8d4;
        }

        .incoming-address-cell {
          max-width: 200px;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
          color: #6b7280;
          font-size: 14px;
          padding: 8px 12px;
          background: linear-gradient(135deg, #f9fafb, #f3f4f6);
          border-radius: 8px;
          border: 1px solid #e5e7eb;
        }

        .incoming-address-cell:hover {
          white-space: normal;
          overflow: visible;
          background: white;
          box-shadow: 0 4px 16px rgba(0, 0, 0, 0.15);
          z-index: 10;
          position: relative;
        }

        .incoming-sender-badge {
          background: linear-gradient(135deg, #e9d5ff, #d8b4fe);
          color: #581c87;
          padding: 8px 14px;
          border-radius: 20px;
          font-weight: 600;
          font-size: 13px;
          display: inline-flex;
          align-items: center;
          gap: 6px;
          border: 1px solid #c084fc;
        }

        .incoming-status-badge {
          color: black;
          padding: 8px 18px;
          border-radius: 20px;
          font-size: 13px;
          font-weight: 700;
          text-transform: capitalize;
          display: inline-block;
          min-width: 100px;
          text-align: center;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
        }

        .incoming-table-caption {
          padding: 16px 24px !important;
          color: #6b7280 !important;
          font-style: italic !important;
          font-size: 14px !important;
          background: linear-gradient(135deg, #f8fafc, #f1f5f9) !important;
          text-align: center !important;
        }

        .incoming-table-footer {
          background: linear-gradient(135deg, #e0f2fe, #dbeafe);
          padding: 20px;
        }

        /* Updated stats badge from emerald to blue-cyan */
        .stats-badge {
          display: inline-block;
          padding: 10px 20px;
          background: linear-gradient(135deg, #3b82f6, #0ea5e9);
          color: white;
          border-radius: 16px;
          font-weight: 700;
          font-size: 15px;
          box-shadow: 0 6px 16px rgba(59, 130, 246, 0.3);
          border: 2px solid rgba(255, 255, 255, 0.3);
        }
      `}</style>

      <section className="relative min-h-screen overflow-hidden bg-linear-to-br from-sky-50 via-blue-50 to-cyan-100 p-6">
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <div className="float absolute top-20 left-10 h-40 w-40 rounded-full bg-linear-to-r from-blue-300 to-cyan-300 opacity-20"></div>
          <div
            className="float absolute top-60 right-20 h-32 w-32 rounded-full bg-linear-to-r from-sky-300 to-blue-300 opacity-20"
            style={{ animationDelay: "2s" }}
          ></div>
          <div
            className="float absolute bottom-32 left-1/4 h-48 w-48 rounded-full bg-linear-to-r from-cyan-200 to-blue-200 opacity-15"
            style={{ animationDelay: "4s" }}
          ></div>
          <div
            className="float absolute top-1/3 right-1/3 h-36 w-36 rounded-full bg-linear-to-r from-blue-300 to-sky-300 opacity-20"
            style={{ animationDelay: "1s" }}
          ></div>
        </div>

        <div className="relative z-10 container mx-auto">
          <div className="fade-in-up mb-12 text-center">
            <div className="mb-6 flex items-center justify-center gap-4">
              <div className="glow rounded-3xl bg-linear-to-r from-blue-500 to-cyan-600 p-4 shadow-xl">
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
                    d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4"
                  />
                </svg>
              </div>
              <h1 className="bg-linear-to-r from-blue-600 via-cyan-600 to-blue-800 bg-clip-text text-2xl font-black text-transparent lg:text-6xl">
                Incoming Parcels
              </h1>
            </div>
            <p className="mx-auto mb-6 max-w-2xl text-xl text-gray-600">
              View and confirm all parcels being sent to you
            </p>
            <div className="stats-badge bounce">
              📦 {parcel?.length || 0} Parcels Awaiting Confirmation
            </div>
          </div>

          <div className="incoming-table-container scale-in">
            {parcel && parcel.length > 0 ? (
              <Table className="overflow-hidden">
                <TableHeader className="incoming-table-header">
                  <TableRow>
                    <TableHead>Tracking ID</TableHead>
                    <TableHead>Weight</TableHead>
                    <TableHead>Fee</TableHead>
                    <TableHead>Delivery Date</TableHead>
                    <TableHead>Sender</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Action</TableHead>
                  </TableRow>
                </TableHeader>

                <TableBody>
                  {parcel.map((singleParcel: any, index: number) => (
                    <TableRow
                      key={singleParcel?._id}
                      className="incoming-table-row slide-in-right"
                      style={{ animationDelay: `${index * 0.05}s` }}
                    >
                      <TableCell>
                        <span className="incoming-tracking-badge">
                          {singleParcel?.trackingId}
                        </span>
                      </TableCell>

                      <TableCell>
                        <span className="incoming-weight-badge">
                          ⚖️ {singleParcel.weight} kg
                        </span>
                      </TableCell>

                      <TableCell>
                        <span className="incoming-fee-badge">
                          $ {singleParcel.fee}
                        </span>
                      </TableCell>

                      <TableCell>
                        <span className="incoming-date-badge">
                          📅{" "}
                          {singleParcel.deliveryDate
                            ? new Date(
                                singleParcel.deliveryDate,
                              ).toLocaleDateString("en-US", {
                                year: "numeric",
                                month: "short",
                                day: "numeric",
                              })
                            : "TBD"}
                        </span>
                      </TableCell>

                      <TableCell>
                        {singleParcel.sender ? (
                          <SenderName userId={singleParcel.sender} />
                        ) : (
                          <span className="incoming-sender-badge">
                            👤 Unknown
                          </span>
                        )}
                      </TableCell>

                      <TableCell>
                        <span
                          className={`incoming-status-badge ${getStatusColor(
                            singleParcel.currentStatus,
                          )}`}
                        >
                          {singleParcel.status}
                        </span>
                      </TableCell>

                      <TableCell className="flex gap-2">
                        <ParcelConfirmModal singleParcel={singleParcel} />
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            ) : (
              <div className="fade-in py-12 text-center text-3xl font-medium text-gray-500">
                🚫 No incoming parcels found
              </div>
            )}
          </div>
        </div>
      </section>
    </>
  );
};

export default IncomingParcel;
