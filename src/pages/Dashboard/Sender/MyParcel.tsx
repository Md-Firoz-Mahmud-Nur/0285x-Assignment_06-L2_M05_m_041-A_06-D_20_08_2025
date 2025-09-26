"use client";

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

import { useGetMyParcelQuery } from "@/redux/Parcel/parcel.api";
import { ParcelDeleteModal } from "./ParcelDeleteModal";

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

const MyParcel = () => {
  const { data, isLoading } = useGetMyParcelQuery({});
  const parcels = data?.data || [];

  if (isLoading) return <Loader />;

  return (
    <>
      <style>{`
        .fade-in-up { animation: fadeInUp 0.6s ease-out; }
        @keyframes fadeInUp { from{opacity:0;transform:translateY(30px);} to{opacity:1;transform:translateY(0);} }
        .float { animation: float 4s ease-in-out infinite; }
        @keyframes float { 0%,100%{transform:translateY(0);} 50%{transform:translateY(-10px);} }

        .my-parcels-container {
          background: rgba(255,255,255,0.85);
          backdrop-filter: blur(14px);
          border-radius: 24px;
          box-shadow: 0 10px 40px rgba(59,130,246,0.2);
          border: 1px solid rgba(147,197,253,0.3);
          overflow: hidden;
        }

        /* Updated header to blue gradient */
        .my-parcels-header {
          background: linear-gradient(90deg,#0ea5e9,#38bdf8);
        }
        .my-parcels-header th {
          color:white !important;
          font-weight:700;
          letter-spacing:0.5px;
          padding:16px 8px !important;
          text-transform:uppercase;
        }

        .my-parcels-row {
          transition: all .3s ease;
        }
        /* Updated hover state to blue gradient */
        .my-parcels-row:hover {
          background: linear-gradient(135deg,#c6f6d5,#bae6fd);
        }

        .disabled-row {
          background: linear-gradient(135deg,#fecaca,#fde68a);
          cursor: not-allowed;
          opacity: 0.8;
        }

        .my-parcels-cell {
          vertical-align: middle !important;
          color:#1e293b;
          font-weight:500;
        }

        /* Updated tracking badge to blue */
        .my-tracking-badge {
          background: linear-gradient(135deg,#bae6fd,#7dd3fc);
          border:1px solid #38bdf8;
          border-radius:10px;
          padding:6px 12px;
          font-weight:700;
          color:#0c4a6e;
        }

        /* Updated type badge to blue */
        .my-type-badge {
          background: linear-gradient(135deg,#e0f2fe,#dbeafe);
          border:1px solid #93c5fd;
          color:#1e3a8a;
          border-radius:20px;
          padding:6px 12px;
          font-weight:600;
        }

        .my-weight-badge {
          background: linear-gradient(135deg,#ccfbf1,#99f6e4);
          border:1px solid #5eead4;
          border-radius:20px;
          padding:6px 12px;
          color:#065f46;
          font-weight:700;
        }

        /* Updated fee badge to blue */
        .my-fee-badge {
          background: linear-gradient(135deg,#e0f2fe,#bae6fd);
          border:1px solid #7dd3fc;
          border-radius:10px;
          padding:6px 14px;
          font-weight:700;
          color:#075985;
        }

        .my-date-badge {
          background: linear-gradient(135deg,#f0f9ff,#e0f2fe);
          border:1px solid #93c5fd;
          border-radius:20px;
          padding:6px 12px;
          font-weight:600;
          color:#1e3a8a;
        }

        /* Updated address cell to blue */
        .my-address-cell {
          max-width:250px;
          overflow: auto;
          white-space:nowrap;
          text-overflow:ellipsis;
          background:linear-gradient(135deg,#f0f9ff,#e0f2fe);
          border:1px solid #dbeafe;
          border-radius:8px;
          padding:6px 10px;
          font-size:14px;
          color:#475569;
        }
        .my-address-cell:hover {
          white-space:normal;
          box-shadow:0 4px 12px rgba(59,130,246,0.15);
          background:white;
        }

        .my-status-badge {
          border-radius:20px;
          padding:8px 16px;
          font-weight:700;
          font-size:13px;
          text-transform:capitalize;
          border:1px solid rgba(0,0,0,0.1);
        }

        /* Updated table caption to blue */
        .my-table-caption {
          background: linear-gradient(135deg,#eff6ff,#dbeafe);
          text-align:center;
          padding:16px;
          font-style:italic;
          color:#64748b;
        }

        /* Updated stats card to blue */
        .my-stats-card {
          background: linear-gradient(135deg,#e0f2fe,#bae6fd);
          border:2px solid #7dd3fc;
          border-radius:18px;
          padding:14px 24px;
          display:inline-flex;
          gap:10px;
          align-items:center;
          box-shadow:0 6px 18px rgba(59,130,246,0.2);
        }
        /* Updated stats icon to blue */
        .my-stats-icon {
          width:48px;height:48px;
          background:linear-gradient(135deg,#0ea5e9,#0284c7);
          color:white;
          border-radius:12px;
          display:flex;align-items:center;justify-content:center;
        }
        /* Updated stats number to blue */
        .my-stats-number { font-size:28px;font-weight:800;color:#0c4a6e; }
        /* Updated stats label to blue */
        .my-stats-label { font-size:14px;font-weight:600;color:#0369a1;text-transform:uppercase; }

        /* Responsive design for mobile */
        @media (max-width: 768px) {
          .my-parcels-cell {
            font-size: 13px;
          }
          .my-parcels-header th {
            padding: 12px 8px;
            font-size: 12px;
          }
          .my-address-cell {
            max-width: 150px;
            font-size: 12px;
          }
          .my-tracking-badge,
          .my-type-badge,
          .my-weight-badge,
          .my-fee-badge,
          .my-date-badge {
            padding: 4px 8px;
            font-size: 11px;
          }
        }
      `}</style>

      <section className="relative min-h-screen overflow-hidden bg-linear-to-br from-sky-50 via-white to-cyan-50 p-4 md:p-6">
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
          <div className="fade-in-up mb-8 px-4 text-center md:mb-12">
            <div className="mb-6 flex flex-wrap items-center justify-center gap-4">
              <div className="rounded-3xl bg-linear-to-r from-cyan-500 to-sky-500 p-4 shadow-xl">
                <svg
                  className="h-8 w-8 text-white md:h-10 md:w-10"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 3h18v4H3zM3 7h18v14H3zM7 11h10v6H7z"
                  />
                </svg>
              </div>
              <h1 className="bg-linear-to-r from-sky-600 via-cyan-500 to-blue-700 bg-clip-text text-4xl font-black text-transparent md:text-6xl">
                My Parcels
              </h1>
            </div>
            <p className="mx-auto mb-8 max-w-2xl text-base text-gray-600 md:text-xl">
              Track and manage all your shipments
            </p>
            <div className="flex justify-center">
              <div className="my-stats-card">
                <div className="my-stats-icon">📦</div>
                <div>
                  <div className="my-stats-number">
                    {parcels?.data?.length || 0}
                  </div>
                  <div className="my-stats-label">Total Parcels</div>
                </div>
              </div>
            </div>
          </div>

          <div className="my-parcels-container w-full overflow-x-auto overflow-y-hidden">
            <div className="min-w-[1100px]">
              <Table className="w-full table-auto">
                <TableCaption className="my-table-caption">
                  A list of all your parcels.
                </TableCaption>
                <TableHeader className="my-parcels-header">
                  <TableRow>
                    <TableHead>Tracking ID</TableHead>
                    <TableHead>Type</TableHead>
                    <TableHead>Weight</TableHead>
                    <TableHead>Fee</TableHead>
                    <TableHead>Delivery Date</TableHead>
                    <TableHead>Delivery Address</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Action</TableHead>
                  </TableRow>
                </TableHeader>

                <TableBody>
                  {parcels.data.map((p: any, i: number) => (
                    <TableRow
                      key={p._id}
                      className={`${["Cancelled", "Delivered"].includes(p.status) ? "disabled-row" : "my-parcels-row"}`}
                      style={{ animationDelay: `${i * 0.05}s` }}
                    >
                      <TableCell className="my-parcels-cell">
                        <span className="my-tracking-badge">
                          {p.trackingId}
                        </span>
                      </TableCell>
                      <TableCell className="my-parcels-cell">
                        <span className="my-type-badge">{p.type}</span>
                      </TableCell>
                      <TableCell className="my-parcels-cell">
                        <span className="my-weight-badge">{p.weight} kg</span>
                      </TableCell>
                      <TableCell className="my-parcels-cell">
                        <span className="my-fee-badge">${p.fee}</span>
                      </TableCell>
                      <TableCell className="my-parcels-cell">
                        <span className="my-date-badge">
                          {p.deliveryDate
                            ? new Date(p.deliveryDate).toLocaleDateString(
                                "en-US",
                                {
                                  year: "numeric",
                                  month: "short",
                                  day: "numeric",
                                },
                              )
                            : "TBD"}
                        </span>
                      </TableCell>
                      <TableCell className="my-parcels-cell">
                        <div
                          className="my-address-cell"
                          title={p.deliveryAddress}
                        >
                          📍 {p.deliveryAddress}
                        </div>
                      </TableCell>
                      <TableCell className="my-parcels-cell">
                        <span
                          className="my-status-badge"
                          style={{
                            backgroundColor: statusColor[p.status] || "#E5E7EB",
                            color: "#111827",
                          }}
                        >
                          {p.status}
                        </span>
                      </TableCell>
                      <TableCell className="my-parcels-cell flex gap-2">
                        <ParcelDeleteModal singleParcel={p} />
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default MyParcel;
