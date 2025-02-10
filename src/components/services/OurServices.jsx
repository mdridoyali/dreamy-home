import Image from "next/image";
import SectionTitle from "../SectionTitle";
import { Button } from "../ui/button";
import Link from "next/link";
import services from "@/app/service/serviceJson";


const OurServices = () => {
  return (
    <div className="w-11/12 mx-auto my-20">
      <SectionTitle title={'Our Services'} titleDescription={'Explore our range of professional interior design services.'} />

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
        {services.map((data) => (
          <div
            key={data?.id}
            className="group cursor-pointer rounded-lg shadow-md shadow-blue-500 hover:shadow-lg hover:shadow-blue-500 transition-all overflow-hidden bg-white"
          >
            {/* Image Section */}
            <div className=" overflow-hidden">
              <Image
                src={data?.image}
                alt={data?.title}
                width={400}
                height={250}
                className="w-full h-56 object-cover transition-transform duration-300 group-hover:scale-105"
              />
            </div>
            <div className="p-5">
              <h3 className="text-xl font-semibold text-blue-500">{data?.title}</h3>
              <p className="text-gray-600 mt-2">{data?.description}</p>
              <Link href={`/service/${data.id}`}><Button className='bg-blue-500 '>See Details</Button></Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OurServices;
