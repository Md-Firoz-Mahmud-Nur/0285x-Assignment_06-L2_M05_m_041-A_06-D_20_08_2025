"use client";

import Loader from "@/components/Loader";
import { useMemo, useState } from "react";
import { Cell, Pie, PieChart, ResponsiveContainer, Tooltip } from "recharts";

const statusColor: { [key: string]: string } = {
  Requested: "#E0F2FE",
  Approved: "#C7D2FE",
  Dispatched: "#E0F7FA",
  Picked: "#DDD6FE",
  "In Transit": "#BAE6FD",
  "Out for Delivery": "#7DD3FC",
  Delivered: "#A7F3D0",
  Returned: "#FCA5A5",
  Cancelled: "#E5E7EB",
};

export interface Parcel {
  _id: string;
  trackingId: string;
  type: string;
  weight: number;
  fee: number;
  pickupAddress: string;
  deliveryAddress: string;
  deliveryDate: string;
  status: string;
  statusLogs: { status: string; createdAt: string }[];
}

interface ParcelTrackingProps {
  parcels: Parcel[] | undefined;
  isLoading: boolean;
}

export function ParcelTracking({ parcels, isLoading }: ParcelTrackingProps) {
  const [searchId, setSearchId] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 2;

  const filteredParcels = useMemo(() => {
    if (!parcels) return [];
    if (!searchId.trim()) return parcels;
    return parcels.filter((p) =>
      p.trackingId.toLowerCase().includes(searchId.toLowerCase()),
    );
  }, [parcels, searchId]);

  const stats = useMemo(() => {
    const total = parcels?.length ?? 0;
    const delivered =
      parcels?.filter((p) => p.status === "Delivered").length ?? 0;
    const inTransit =
      parcels?.filter((p) => p.status === "In Transit").length ?? 0;
    const cancelled =
      parcels?.filter((p) => p.status === "Cancelled").length ?? 0;

    return { total, delivered, inTransit, cancelled };
  }, [parcels]);

  const totalParcels = filteredParcels.length;
  const totalPages = Math.max(1, Math.ceil(totalParcels / itemsPerPage));

  const paginatedParcels = useMemo(() => {
    const start = (currentPage - 1) * itemsPerPage;
    const end = start + itemsPerPage;
    return filteredParcels.slice(start, end);
  }, [filteredParcels, currentPage, itemsPerPage]);

  const chartData = useMemo(
    () => [
      { name: "Delivered", value: stats.delivered, fill: "#A7F3D0" },
      { name: "In Transit", value: stats.inTransit, fill: "#BAE6FD" },
      { name: "Cancelled", value: stats.cancelled, fill: "#E5E7EB" },
    ],
    [stats],
  );

  if (isLoading) return <Loader />;

  return (
    <>
      <style>{`
        .tracking-container {
          background: rgba(255,255,255,0.85);
          backdrop-filter: blur(14px);
          border-radius: 24px;
          box-shadow: 0 10px 40px rgba(59,130,246,0.2);
          border: 1px solid rgba(147,197,253,0.3);
          overflow: hidden;
        }

        .tracking-header {
          background: linear-gradient(90deg,#0ea5e9,#38bdf8);
        }

        .stats-card {
          background: linear-gradient(135deg,#e0f2fe,#bae6fd);
          border: 2px solid #7dd3fc;
          border-radius: 18px;
          padding: 20px 24px;
          display: flex;
          gap: 16px;
          align-items: center;
          box-shadow: 0 6px 18px rgba(59,130,246,0.2);
          transition: all 0.3s ease;
        }

        .stats-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 12px 24px rgba(59,130,246,0.3);
        }

        .stats-icon {
          width: 56px;
          height: 56px;
          background: linear-gradient(135deg,#0ea5e9,#0284c7);
          color: white;
          border-radius: 14px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 28px;
        }

        .stats-content {
          display: flex;
          flex-direction: column;
          gap: 4px;
        }

        .stats-number {
          font-size: 32px;
          font-weight: 800;
          color: #0c4a6e;
        }

        .stats-label {
          font-size: 13px;
          font-weight: 600;
          color: #0369a1;
          text-transform: uppercase;
          letter-spacing: 0.5px;
        }

        .search-box {
          background: linear-gradient(135deg,#e0f2fe,#f0f9ff);
          border: 2px solid #7dd3fc;
          border-radius: 16px;
          padding: 16px 20px;
          font-size: 16px;
          color: #1e293b;
          transition: all 0.3s ease;
        }

        .search-box:focus {
          outline: none;
          border-color: #0ea5e9;
          box-shadow: 0 0 0 3px rgba(14,165,233,0.1);
        }

        .timeline-container {
          background: linear-gradient(135deg,#f0f9ff,#e0f2fe);
          border: 1px solid #dbeafe;
          border-radius: 16px;
          padding: 24px;
          margin-top: 20px;
        }

        .timeline-item {
          display: flex;
          gap: 16px;
          margin-bottom: 20px;
          position: relative;
        }

        .timeline-item:not(:last-child)::after {
          content: '';
          position: absolute;
          left: 27px;
          top: 56px;
          width: 2px;
          height: 40px;
          background: linear-gradient(180deg,#7dd3fc,#bae6fd);
        }

        .timeline-dot {
          width: 56px;
          height: 56px;
          border-radius: 50%;
          background: linear-gradient(135deg,#0ea5e9,#38bdf8);
          border: 3px solid white;
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
          font-weight: bold;
          flex-shrink: 0;
          box-shadow: 0 4px 12px rgba(14,165,233,0.3);
        }

        .timeline-content {
          flex: 1;
          padding-top: 8px;
        }

        .timeline-status {
          font-weight: 700;
          color: #0c4a6e;
          font-size: 16px;
          margin-bottom: 4px;
        }

        .timeline-time {
          font-size: 13px;
          color: #64748b;
        }

        .parcel-card {
          background: white;
          border: 1px solid #dbeafe;
          border-radius: 16px;
          padding: 20px;
          margin-bottom: 16px;
          transition: all 0.3s ease;
        }

        .parcel-card:hover {
          border-color: #7dd3fc;
          box-shadow: 0 8px 20px rgba(59,130,246,0.15);
        }

        .parcel-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 16px;
          flex-wrap: wrap;
          gap: 12px;
        }

        .parcel-tracking-id {
          background: linear-gradient(135deg,#bae6fd,#7dd3fc);
          border: 1px solid #38bdf8;
          border-radius: 10px;
          padding: 8px 16px;
          font-weight: 700;
          color: #0c4a6e;
          font-size: 14px;
        }

        .parcel-status {
          border-radius: 20px;
          padding: 8px 16px;
          font-weight: 700;
          font-size: 13px;
          text-transform: capitalize;
          border: 1px solid rgba(0,0,0,0.1);
        }

        .parcel-details {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
          gap: 16px;
          margin-bottom: 16px;
        }

        .detail-item {
          background: linear-gradient(135deg,#f0f9ff,#e0f2fe);
          border: 1px solid #dbeafe;
          border-radius: 12px;
          padding: 12px;
        }

        .detail-label {
          font-size: 12px;
          font-weight: 600;
          color: #0369a1;
          text-transform: uppercase;
          margin-bottom: 4px;
        }

        .detail-value {
          font-size: 14px;
          font-weight: 600;
          color: #1e293b;
        }

        .chart-container {
          border: 1px solid #dbeafe;
          border-radius: 16px;
          padding: 24px;
        }

        .chart-title {
          font-size: 18px;
          font-weight: 700;
          color: #0c4a6e;
          margin-bottom: 20px;
        }

        .float {
          animation: float 4s ease-in-out infinite;
        }

        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }

        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }

        .fade-in-up {
          animation: fadeInUp 0.6s ease-out;
        }

        @media (max-width: 768px) {
          .stats-card {
            padding: 16px 20px;
          }

          .stats-icon {
            width: 48px;
            height: 48px;
            font-size: 24px;
          }

          .stats-number {
            font-size: 24px;
          }

          .stats-label {
            font-size: 11px;
          }

          .parcel-details {
            grid-template-columns: 1fr;
          }

          .timeline-item {
            gap: 12px;
          }

          .timeline-dot {
            width: 48px;
            height: 48px;
            font-size: 12px;
          }

          .timeline-item:not(:last-child)::after {
            left: 23px;
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
                    d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                  />
                </svg>
              </div>
              <h1 className="bg-linear-to-r from-sky-600 via-cyan-500 to-blue-700 bg-clip-text text-4xl font-black text-transparent md:text-6xl">
                Parcel Tracking
              </h1>
            </div>
            <p className="mx-auto mb-8 max-w-2xl text-lg text-gray-600 md:text-xl">
              Track your parcels in real-time with detailed status updates
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            <div className="col-span-1">
              <div className="grid grow grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-1 md:gap-6 lg:grid-cols-2">
                <div className="stats-card">
                  <div className="stats-icon">📦</div>
                  <div className="stats-content">
                    <div className="stats-number">{stats.total}</div>
                    <div className="stats-label">Total Parcels</div>
                  </div>
                </div>
                <div className="stats-card">
                  <div className="stats-icon">✅</div>
                  <div className="stats-content">
                    <div className="stats-number">{stats.delivered}</div>
                    <div className="stats-label">Delivered</div>
                  </div>
                </div>
                <div className="stats-card">
                  <div className="stats-icon">🚚</div>
                  <div className="stats-content">
                    <div className="stats-number">{stats.inTransit}</div>
                    <div className="stats-label">In Transit</div>
                  </div>
                </div>
                <div className="stats-card">
                  <div className="stats-icon">❌</div>
                  <div className="stats-content">
                    <div className="stats-number">{stats.cancelled}</div>
                    <div className="stats-label">Cancelled</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-span-1">
              <div className="mb-12 grid grid-cols-1 gap-6">
                <div className="chart-container bg-gray-100">
                  <div className="chart-title">
                    Delivery Status Distribution
                  </div>
                  <ResponsiveContainer width="100%" height={300}>
                    <PieChart>
                      <Pie
                        data={chartData}
                        cx="50%"
                        cy="50%"
                        labelLine={false}
                        label={({ name, value }) => `${name}: ${value}`}
                        outerRadius={100}
                        fill="#8884d8"
                        dataKey="value"
                      >
                        {chartData.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={entry.fill} />
                        ))}
                      </Pie>
                      <Tooltip />
                    </PieChart>
                  </ResponsiveContainer>
                </div>
              </div>
            </div>
          </div>

          <div className="tracking-container mb-8">
            <div className="tracking-header p-6">
              <h2 className="mb-4 text-2xl font-bold text-white">
                Search by Tracking ID
              </h2>
              <input
                type="text"
                placeholder="Enter tracking ID (e.g., TRK-20250820-000001)"
                value={searchId}
                onChange={(e) => {
                  setSearchId(e.target.value);
                  setCurrentPage(1);
                }}
                className="search-box w-full"
              />
            </div>
          </div>

          <div>
            <h2 className="mb-6 text-3xl font-bold text-sky-900">
              {searchId ? "Search Results" : "All Parcels"}
            </h2>

            {filteredParcels.length === 0 ? (
              <div className="tracking-container p-8 text-center">
                <p className="text-lg text-gray-500">
                  No parcels found matching your search.
                </p>
              </div>
            ) : (
              <>
                {paginatedParcels.map((parcel) => (
                  <div key={parcel._id} className="parcel-card">
                    <div className="parcel-header">
                      <span className="parcel-tracking-id">
                        {parcel.trackingId}
                      </span>
                      <span
                        className="parcel-status"
                        style={{
                          backgroundColor:
                            statusColor[parcel.status] || "#E5E7EB",
                          color: "black",
                        }}
                      >
                        {parcel.status}
                      </span>
                    </div>

                    <div className="parcel-details">
                      <div className="detail-item">
                        <div className="detail-label">Type</div>
                        <div className="detail-value">{parcel.type}</div>
                      </div>
                      <div className="detail-item">
                        <div className="detail-label">Weight</div>
                        <div className="detail-value">{parcel.weight} kg</div>
                      </div>
                      <div className="detail-item">
                        <div className="detail-label">Fee</div>
                        <div className="detail-value">${parcel.fee}</div>
                      </div>
                      <div className="detail-item">
                        <div className="detail-label">From</div>
                        <div className="detail-value">
                          {parcel.pickupAddress}
                        </div>
                      </div>
                      <div className="detail-item">
                        <div className="detail-label">To</div>
                        <div className="detail-value">
                          {parcel.deliveryAddress}
                        </div>
                      </div>
                      <div className="detail-item">
                        <div className="detail-label">Expected Delivery</div>
                        <div className="detail-value">
                          {new Date(parcel.deliveryDate).toLocaleDateString()}
                        </div>
                      </div>
                    </div>

                    <div className="timeline-container">
                      <h3 className="mb-6 text-lg font-bold text-sky-900">
                        Status Timeline
                      </h3>
                      {parcel.statusLogs.map((log, logIdx) => (
                        <div key={logIdx} className="timeline-item">
                          <div className="timeline-dot">{logIdx + 1}</div>
                          <div className="timeline-content">
                            <div className="timeline-status">{log.status}</div>
                            <div className="timeline-time">
                              {new Date(log.createdAt).toLocaleString()}
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}

                {totalPages > 0 && (
                  <div className="mt-6 flex items-center justify-center gap-2">
                    <button
                      disabled={currentPage === 1}
                      onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
                      className="rounded-full border border-sky-200 px-3 py-1 text-sm text-sky-700 disabled:cursor-not-allowed disabled:opacity-40"
                    >
                      Prev
                    </button>
                    <span className="text-sm text-slate-700">
                      Page {currentPage} of {totalPages}
                    </span>
                    <button
                      disabled={currentPage === totalPages}
                      onClick={() =>
                        setCurrentPage((p) => Math.min(totalPages, p + 1))
                      }
                      className="rounded-full border border-sky-200 px-3 py-1 text-sm text-sky-700 disabled:cursor-not-allowed disabled:opacity-40"
                    >
                      Next
                    </button>
                  </div>
                )}
              </>
            )}
          </div>
        </div>
      </section>
    </>
  );
}
