// import { departmentData } from "@/db/dummydata";
import DepartmentCard from "../molecules/departmentcard";
import { DepartmentData } from "@/types/index";
import { getDepartments } from "@/lib/actions/settings.actions";
// import { Divide } from "lucide-react";

//this is types for our manual data
// interface DepartmentData {
//   id: string;
//   name: string;
//   iconName: string;
// }

export default async function DepartmentsSection() {
  //this also getting data from dummydata, but we will replace it with the data from database
  // const departments: DepartmentData[] = departmentData;

  let departments: DepartmentData[] = [];
  let fetchError: string | null = null;
  try {
    const result = await getDepartments();
    if (result.success && result.data) {
      departments = result.data.departments;
      // departments = [];
    } else {
      fetchError = result.message || "Failed to fetch departments.";
    }
  } catch (error) {
    const message =
      error instanceof Error
        ? error.message
        : "Unknown error fetching departments.";
    fetchError = message;
    console.error("Error fetching departments:", error);
  }

  return (
    <section className="w-full">
      <h2 className="text-center text-text-title mb-8">Our Departments</h2>
      {fetchError && (
        <div className="text-red-500 py-4 text-center">{fetchError}</div>
      )}
      {fetchError ? (
        <div className="text-center text-red-500 py-4">{fetchError}</div>
      ) : departments.length === 0 ? (
        <div className="text-grey-500 py-4 text-center">
          No deparments found
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-[repeat(auto-fit,minmax(176px,1fr))] gap-8">
          {departments.map((department) => (
            <DepartmentCard
              key={department.id}
              id={department.id}
              name={department.name}
              iconName={department.iconName}
            />
          ))}
        </div>
      )}
    </section>
  );
}
