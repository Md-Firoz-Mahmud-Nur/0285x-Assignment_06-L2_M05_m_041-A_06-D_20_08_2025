# 📦 NextParcel - Parcel Delivery Frontend

## A full-featured, responsive frontend web application for managing parcel deliveries, integrated with the Parcel Delivery API.

 Built using **React**, **TypeScript**, **Redux Toolkit Query**, and **Tailwind CSS**, with **role-based** dashboards for Admin, Sender, and Receiver.

## 🚀 Live Demo

> [NextParcel](https://0285x-assignment-06-l2-m05-m-041-a.vercel.app/)

> Frontend: [Parcel Delivery Client](https://github.com/Md-Firoz-Mahmud-Nur/0285x-Assignment_06-L2_M05_m_041-A_06-D_20_08_2025)

> Backend: [Parcel Delivery API](https://github.com/Md-Firoz-Mahmud-Nur/0284-Assignment_05-L2_M05_m_034-A_05-D_28_07_2025)



## 🧩 Tech Stack

* React 19 + TypeScript

* Redux Toolkit Query (RTK Query)

* React Router v7

* Tailwind CSS + Radix UI + ShadCN Components

* Framer Motion for animations

* Axios for API calls

* Zod for validation

* Vite for development and build tooling

## 🎯 Project Overview

This frontend connects with the Parcel Delivery API to provide a seamless delivery management experience.
Users can **register**, log in, and perform actions based on their assigned roles — with a **clean**, dashboard-style UI.

## 👥 User Roles & Access

### Role	Access

Admin	Manage all users, parcels, and system activity
Sender	Create parcels, view and cancel requests, track delivery progress
Receiver	View incoming parcels, confirm receipt after delivery
🧱 Core Features
🔐 Authentication & Authorization

Secure login/register system (JWT-based)

Role-based route protection using withAuth

Persistent user session via cookies

## 📦 Parcel Management

Create, view, update, and track parcels

Lifecycle stages: Requested → Approved → Dispatched → In Transit → Delivered

Senders can cancel before approval

Receivers can confirm delivery

## 🧭 Dashboard System

Separate dashboards for:

* Admin: Manage all users & parcels

* Sender: Manage their created parcels

* Receiver: View incoming deliveries

## 🧰 UI & UX

* Responsive, mobile-first design

* Animated transitions with Framer Motion

* Prebuilt UI components (button, dialog, table, tooltip, etc.)

* Toast notifications using Sonner

## 🗂️ Folder Structure (Simplified)
```
src/
├── components/        # Reusable UI components (Navbar, Footer, Loader, etc.)
├── layout/            # Layout components for Dashboard and Main site
├── pages/             # All pages grouped by role or feature
│   ├── Auth/          # Login / Register
│   ├── Dashboard/     # Admin, Sender, Receiver pages
│   ├── HomePage/      # Landing & marketing sections
│   ├── About/Contact/ # Static pages
├── redux/             # RTK store, slices, API endpoints
│   ├── Auth/          # Authentication APIs
│   ├── Parcel/        # Parcel management APIs
│   ├── User/          # User-related APIs
│   ├── baseApi.ts     # Base RTK API setup with Axios
│   └── store.ts       # Redux store configuration
├── routes/            # Role-based routes and sidebar items
├── utils/             # Helper functions like withAuth, route generators
├── hooks/             # Custom hooks
├── types/             # Global TypeScript types
└── main.tsx           # Application entry point
```

## 🔗 API Integration

* All API calls are handled using RTK Query through the baseApi.ts setup:

* auth.api.ts → Authentication endpoints

* user.api.ts → User management

* parcel.api.ts → Parcel CRUD operations

* Each query/mutation auto-manages caching, loading, and invalidation.

## ⚙️ Local Setup

### 1️⃣ Clone & Install

```
git clone https://github.com/Md-Firoz-Mahmud-Nur/0285x-Assignment_06-L2_M05_m_041-A_06-D_20_08_2025.git
cd 0285x-Assignment_06-L2_M05_m_041-A_06-D_20_08_2025
npm install
```

### 2️⃣ Run Locally

```
npm run dev
```

## 🧭 Routing Overview

Path	Role	Description
```
/Public	    Home page
/login	    Public	User login
/register	Public	User registration
/admin/*	Admin	Dashboard (users, parcels, tracking)
/sender/*	Sender	Dashboard (create, manage, track parcels)
/receiver/*	Receiver	Dashboard (incoming, confirm delivery)
```

## 📊 State Management

The app uses:

* Redux Toolkit Query (RTK Query) for API data fetching

* React Hook Form + Zod for input validation

* React Context (minimal) for shared UI states

## 🧑‍💻 Developer Notes

* Responsive design with Tailwind CSS

* Uses ShadCN UI components

* Clean folder structure for scalability

* Animations handled by Framer Motion

* Deployed on Vercel

## 🧠 Future Enhancements

* Dark mode support

* Real-time parcel tracking updates via WebSockets

* Admin analytics dashboard

## 👨‍💻 Developed by

### Md. Firoz Mahmud Nur

Full-Stack Web Developer

> 📧 firoznur5@gmail.com

> 🔗 [LinkedIn](https://www.linkedin.com/in/md-firoz-mahmud-nur)
