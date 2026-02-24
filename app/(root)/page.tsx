import DepartmentsSection from "@/components/organisms/our-departments";
import OurDoctors from "@/components/organisms/our-doctors";
import PatientTestimonials from "@/components/organisms/patient-testimonial";
import DynamicBanner from "@/components/organisms/home-banner";

export default function Home() {
  return (
    <div>
      <DynamicBanner />
      <div className="flex flex-col p-8 max-w-7xl mx-auto w-full gap-16">
        <div>
          <p className="mt-4 mb-12 body-regular text-text-body-subtle max-w-3xl mx-auto text-center">
            Welcome to Highland Medical Center,your premier destination for
            specialized healthcare services.Our facility brings together
            exceptional phusicians across all major departments,offering experts
            diagnosis and treatment planning in one convinient location.{" "}
          </p>
          <div>
            <DepartmentsSection />
          </div>
        </div>

        <div id="our-doctors">
          <OurDoctors />
        </div>

        <div>
          <PatientTestimonials />
        </div>
      </div>
    </div>
  );
}
