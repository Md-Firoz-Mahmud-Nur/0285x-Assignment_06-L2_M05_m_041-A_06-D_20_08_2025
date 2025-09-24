/* eslint-disable @typescript-eslint/no-explicit-any */

import Loader from "@/components/Loader";

import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { useGetAllParcelQuery } from "@/redux/Parcel/parcel.api";
import { useEffect, useState } from "react";
import { EditParcelStatus } from "./EditParcelStatus";

const statusColor: { [key: string]: string } = {
  Requested: "#E0F2FE",
  Approved: "#C7D2FE",
  Dispatched: "#E0F7FA",
  Picked: "#DDD6FE",
  "In Transit": "#BAE6FD",
  Delivered: "#A7F3D0",
  Returned: "#FCA5A5",
  Cancelled: "#E5E7EB",
};

const AllParcels = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [limit] = useState(5);

  useEffect(() => {
    const handleHashChange = () => {
      const pageFromHash = Number(window.location.hash.split("/")[2]) || 1;
      setCurrentPage(pageFromHash);
    };

    handleHashChange();
    window.addEventListener("hashchange", handleHashChange);
    return () => window.removeEventListener("hashchange", handleHashChange);
  }, []);

  const { data, isLoading } = useGetAllParcelQuery({
    page: currentPage,
    limit,
  });

  const parcels = data?.data;

  if (isLoading) return <Loader />;

  return (
    <>
      <style>{`
        .fade-in-up { animation: fadeInUp 0.6s ease-out; }
        @keyframes fadeInUp { from{opacity:0;transform:translateY(30px);} to{opacity:1;transform:translateY(0);} }

        .float { animation: float 4s ease-in-out infinite; }
        @keyframes float { 0%,100%{transform:translateY(0);} 50%{transform:translateY(-10px);} }

        .all-parcels-container {
          background: rgba(255,255,255,0.85);
          backdrop-filter: blur(14px);
          border-radius: 24px;
          box-shadow: 0 10px 40px rgba(59,130,246,0.2);
          border: 1px solid rgba(147,197,253,0.3);
          overflow:hidden;
        }

        .all-parcels-header {
          background: linear-gradient(90deg,#0ea5e9,#38bdf8);
        }
        .all-parcels-header th {
          color:white !important;
          font-weight:700;
          letter-spacing:0.5px;
          padding:18px 20px;
          text-transform:uppercase;
        }

        .all-parcels-row {
          transition: all .3s ease;
        }
        .all-parcels-row:hover {
          background: linear-gradient(135deg,#c6f6d5,#bae6fd);
        }



        .disabled-row {
          background: linear-gradient(135deg,#fecaca,#c6f6d5);
          cursor: not-allowed;
          transform: none !important;
          opacity: 0.8;
        }

        .disabled-row:hover {
          background: linear-gradient(135deg,#fecaca,#FFECB3);  transform: none !important;
        }

        .all-parcels-cell {
          vertical-align: middle !important;
          color:#1e293b;
          font-weight:500;
        }

        .all-tracking-badge {
          background: linear-gradient(135deg,#bae6fd,#7dd3fc);
          border:1px solid #38bdf8;
          border-radius:10px;
          padding:6px 12px;
          font-weight:700;
          color:#0c4a6e;
        }

        .all-type-badge {
          background: linear-gradient(135deg,#e0f2fe,#dbeafe);
          border:1px solid #93c5fd;
          color:#1e3a8a;
          border-radius:20px;
          padding:6px 12px;
          font-weight:600;
        }

        .all-weight-badge {
          background: linear-gradient(135deg,#ccfbf1,#99f6e4);
          border:1px solid #5eead4;
          border-radius:20px;
          padding:6px 12px;
          color:#065f46;
          font-weight:700;
        }

        .all-fee-badge {
          background: linear-gradient(135deg,#e0f2fe,#bae6fd);
          border:1px solid #7dd3fc;
          border-radius:10px;
          padding:6px 14px;
          font-weight:700;
          color:#075985;
        }

        .all-address-cell {
          max-width:250px;
          overflow:hidden;
          white-space:nowrap;
          text-overflow:ellipsis;
          background:linear-gradient(135deg,#f0f9ff,#e0f2fe);
          border:1px solid #dbeafe;
          border-radius:8px;
          padding:6px 10px;
          font-size:14px;
          color:#475569;
        }
        .all-address-cell:hover {
          white-space:normal;
          box-shadow:0 4px 12px rgba(59,130,246,0.15);
          background:white;
        }

        .all-status-badge {
          border-radius:20px;
          padding:8px 16px;
          font-weight:700;
          font-size:13px;
          text-transform:capitalize;
          border:1px solid rgba(0,0,0,0.1);
        }

        .all-table-caption {
          background: linear-gradient(135deg,#eff6ff,#dbeafe);
          text-align:center;
          padding:16px;
          font-style:italic;
          color:#64748b;
        }

        .all-table-footer {
          background: linear-gradient(135deg,#e0f2fe,#bae6fd);
          padding:20px;
        }

        .stats-card {
          background: linear-gradient(135deg,#e0f2fe,#bae6fd);
          border:2px solid #7dd3fc;
          border-radius:18px;
          padding:14px 24px;
          display:inline-flex;
          gap:10px;
          align-items:center;
          box-shadow:0 6px 18px rgba(59,130,246,0.2);
        }
        .stats-icon {
          width:48px;height:48px;
          background:linear-gradient(135deg,#0ea5e9,#0284c7);
          color:white;
          border-radius:12px;
          display:flex;align-items:center;justify-content:center;
        }
        .stats-number { font-size:28px;font-weight:800;color:#0c4a6e; }
        .stats-label { font-size:14px;font-weight:600;color:#0369a1;text-transform:uppercase; }
      `}</style>

      <section className="relative min-h-screen overflow-hidden bg-linear-to-br from-sky-50 via-white to-cyan-50 p-6">
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <div className="float absolute top-20 left-10 h-40 w-40 rounded-full bg-cyan-300/20"></div>
          <div
            className="float absolute top-60 right-20 h-32 w-32 rounded-full bg-sky-300/20"
            style={{ animationDelay: "2s" }}
          ></div>
          <div
            className="float absolute bottom-32 left-1/4 h-48 w-48 rounded-full bg-cyan-200/15"
            style={{ animationDelay: "4s" }}
          ></div>
        </div>

        <div className="relative z-10 mx-auto max-w-7xl">
          <div className="fade-in-up mb-12 text-center">
            <div className="mb-6 flex items-center justify-center gap-4">
              <div className="rounded-3xl bg-linear-to-r from-cyan-500 to-sky-500 p-4 shadow-xl">
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
                    d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"
                  />
                </svg>
              </div>
              <h1 className="bg-linear-to-r from-sky-600 via-cyan-500 to-blue-700 bg-clip-text text-6xl font-black text-transparent">
                All Parcels
              </h1>
            </div>
            <p className="mx-auto mb-8 max-w-2xl text-xl text-gray-600">
              Complete overview of all parcels in the system
            </p>
            <div className="flex justify-center">
              <div className="stats-card">
                <div className="stats-icon">📦</div>
                <div>
                  <div className="stats-number">{parcels?.length || 0}</div>
                  <div className="stats-label">Total Parcels</div>
                </div>
              </div>
            </div>
          </div>

          <div className="all-parcels-container">
            <Table>
              <TableCaption className="all-table-caption">
                A list of all parcels.
              </TableCaption>

              <TableHeader className="all-parcels-header">
                <TableRow>
                  <TableHead>Tracking ID</TableHead>
                  <TableHead>Type</TableHead>
                  <TableHead>Weight</TableHead>
                  <TableHead>Fee</TableHead>
                  <TableHead>Delivery Address</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Action</TableHead>
                </TableRow>
              </TableHeader>

              <TableBody>
                {parcels?.map((p: any, i: number) => (
                  <TableRow
                    key={p._id}
                    className={` ${
                      ["Cancelled", "Delivered"].includes(p.currentStatus)
                        ? "disabled-row"
                        : "all-parcels-row"
                    }`}
                    style={{ animationDelay: `${i * 0.05}s` }}
                  >
                    <TableCell className="all-parcels-cell">
                      <span className="all-tracking-badge">{p.trackingId}</span>
                    </TableCell>
                    <TableCell className="all-parcels-cell">
                      <span className="all-type-badge"> {p.type}</span>
                    </TableCell>
                    <TableCell className="all-parcels-cell">
                      <span className="all-weight-badge"> {p.weight} kg</span>
                    </TableCell>
                    <TableCell className="all-parcels-cell">
                      <span className="all-fee-badge">${p.fee}</span>
                    </TableCell>
                    <TableCell className="all-parcels-cell">
                      <div
                        className="all-address-cell"
                        title={p.deliveryAddress}
                      >
                        📍 {p.deliveryAddress}
                      </div>
                    </TableCell>
                    <TableCell className="all-parcels-cell">
                      <span
                        className="all-status-badge"
                        style={{
                          color: "black",
                          backgroundColor:
                            statusColor[p.currentStatus] || "gray",
                          padding: "8px 16px",
                          borderRadius: "20px",
                          display: "inline-block",
                          textAlign: "center",
                        }}
                      >
                        {p.status}
                      </span>
                    </TableCell>

                    <TableCell className="all-parcels-cell flex gap-2">
                      <EditParcelStatus
                        singleParcel={p}
                        disabled={["Cancelled", "Delivered"].includes(
                          p.currentStatus,
                        )}
                      />
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
export default AllParcels;
