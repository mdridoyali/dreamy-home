import Image from "next/image";
import SectionTitle from "../SectionTitle";

import img1 from '@/app/assets/servicePage/residentialSpace.jpg'
import img2 from '@/app/assets/servicePage/commercial.jpg'
import img3 from '@/app/assets/servicePage/customDesign.jpg'
import img4 from '@/app/assets/servicePage/kitchen.jpg'
import img5 from '@/app/assets/servicePage/furniture.jpg'
import img6 from '@/app/assets/servicePage/light.jpg'

const services = [
  {
    id: 1,
    title: "Residential Interior Design",
    description: "Transform your home with personalized interior designs that match your style and comfort.",
    image: img1,
  },
  {
    id: 2,
    title: "Commercial Interior Design",
    description: "Create functional and stylish workspaces that enhance productivity and brand identity.",
    image: img2
  },
  {
    id: 3,
    title: "Luxury Interior Design",
    description: "Experience elegance with our high-end luxury designs, featuring premium materials and unique aesthetics.",
    image: img3
  },
  {
    id: 4,
    title: "Modular Kitchen Design",
    description: "Upgrade your kitchen with modern modular layouts that optimize space and functionality.",
    image: img4
  },
  {
    id: 5,
    title: "Furniture & Decor",
    description: "Get custom furniture and decorative elements that enhance the beauty of your space.",
    image: img5
  },
  {
    id: 6,
    title: "Lighting & Space Planning",
    description: "Enhance ambiance with expert lighting solutions and optimized space utilization.",
    image: img6
  },
];

const ServiceCard = () => {
  return (
    <div className="w-11/12 mx-auto my-20">
      <SectionTitle title={'Our Services'} titleDescription={'Explore our range of professional interior design services.'} />

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
        {services.map((service) => (
          <div
            key={service.id}
            className="group rounded-lg shadow-md shadow-blue-500 hover:shadow-lg hover:shadow-blue-500 transition-all overflow-hidden bg-white"
          >
            {/* Image Section */}
            <div className=" overflow-hidden">
              <Image
                src={service.image}
                alt={service.title}
                width={400}
                height={250}
                className="w-full h-56 object-cover transition-transform duration-300 group-hover:scale-105"
              />
            </div>
            <div className="p-5">
              <h3 className="text-xl font-semibold text-blue-500">{service.title}</h3>
              <p className="text-gray-600 mt-2">{service.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServiceCard;
