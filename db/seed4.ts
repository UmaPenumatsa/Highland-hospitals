// import "dotenv/config";
// import { PrismaClient, LeaveType } from "@prisma/client";

// import { Pool, neonConfig } from "@neondatabase/serverless";
// import { PrismaNeon } from "@prisma/adapter-neon";
// import ws from "ws";
// // Import from your generated folder, not @prisma/client

// // Required for Neon WebSockets in Node.js
// neonConfig.webSocketConstructor = ws;

// const connectionString = process.env.DATABASE_URL;
// const pool = new Pool({ connectionString });

// const adapter = new PrismaNeon(pool);

// // Use the adapter in the constructor
// const prisma = new PrismaClient({ adapter });

// async function main() {
//   // --- Placeholder for Doctor IDs ---
//   const doctorIds = [
//     "dc3b9938-1c0c-42c8-bd62-f01c573f6906", // Replace with actual doctor ID
//     "57ab48cb-fad0-49ad-be1b-234be5bd48f3", // Replace with actual doctor ID
//     "26cdc59b-4f2f-4e22-9b00-437915d256b1", // Replace with actual doctor ID
//   ];

//   // --- Leave Dates ---
//   // Note: The script will create overlapping leave requests for the same day
//   // for each doctor for demonstration purposes. In a real-world scenario,
//   // you would likely only create one leave type per doctor per day.
//   const leaveDate = new Date("2026-03-10T00:00:00Z");

//   console.log("Setting leave for doctors...");

//   // --- Set FULL_DAY Leave ---
//   await prisma.doctorLeave.create({
//     data: {
//       doctorId: doctorIds[0],
//       leaveDate: leaveDate,
//       leaveType: LeaveType.FULL_DAY,
//       reason: "Personal leave",
//     },
//   });
//   console.log(
//     `Set FULL_DAY leave for doctor ${
//       doctorIds[0]
//     } on ${leaveDate.toDateString()}`,
//   );

//   // --- Set MORNING Leave ---
//   await prisma.doctorLeave.create({
//     data: {
//       doctorId: doctorIds[1],
//       leaveDate: leaveDate,
//       leaveType: LeaveType.MORNING,
//       reason: "Personal leave",
//     },
//   });
//   console.log(
//     `Set MORNING leave for doctor ${
//       doctorIds[1]
//     } on ${leaveDate.toDateString()}`,
//   );

//   // --- Set AFTERNOON Leave ---
//   await prisma.doctorLeave.create({
//     data: {
//       doctorId: doctorIds[2],
//       leaveDate: leaveDate,
//       leaveType: LeaveType.AFTERNOON,
//       reason: "Personal leave",
//     },
//   });
//   console.log(
//     `Set AFTERNOON leave for doctor ${
//       doctorIds[2]
//     } on ${leaveDate.toDateString()}`,
//   );

//   console.log("Leave setting finished.");
// }

// main()
//   .catch((e) => {
//     console.error(e);
//     process.exit(1);
//   })
//   .finally(async () => {
//     await prisma.$disconnect();
//   });
