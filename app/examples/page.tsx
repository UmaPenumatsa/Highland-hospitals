import DepartmentCard from "@/components/molecules/departmentcard";
import DoctorCard from "@/components/molecules/doctorcard";
import Review from "@/components/molecules/review";

export default function Examples() {
  const sampleDepartment = {
    id: "1",
    name: "Dermatologys",
    iconName: "Syringe",
  };

  return (
    <div className="flex flex-col items-center justify-center mt-10 gap-4">
      <div className="max-w-44">
        <DepartmentCard
          id={sampleDepartment.id}
          name={sampleDepartment.name}
          iconName={sampleDepartment.iconName}
        />
      </div>
      <br />
      <br />
      <DoctorCard
        id="1"
        name="Dr. Jane Doe"
        specialty="Cardiology"
        rating={4.5}
        reviewCount={120}
        imageUrl="https://images.unsplash.com/photo-1622253692010-333f2da6031d?q=80&w=764&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        // imageUrl="https://assets.example.com/account123/doctor1.jpg"
      />

      <br />
      <br />
      <Review
        id="1"
        name="John Smith"
        date="2024-06-01"
        rating={5}
        testimonial="Dr. Jane Doe provided exceptional care during my visit. Highly recommend!"
        imageSrc="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=764&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      />
    </div>
  );
}
