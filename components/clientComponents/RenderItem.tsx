// ClientComponent.jsx
import { CardProject } from "@/components/Commoms/ProjectCard";
import { SlidesCard } from "@/utils/constants";

const ClientComponent = ({ ...item }: SlidesCard) => {
  return (
    <div className="flex flex-col gap-2 p-5">
      <CardProject
        className="min-h-[385px]"
        src="https://via.placeholder.com/300x300"
        data={item}
      />
      {/* <ProjectCard index={item.id} className="w-full h-full" /> */}
    </div>
  );
};

export default ClientComponent;
