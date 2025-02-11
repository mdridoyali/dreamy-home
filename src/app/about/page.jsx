import Image from "next/image";
import aboutImg from "@/app/assets/about.jpg";
import SectionTitle from "@/components/SectionTitle";
import MeetOurExperts from "@/components/home/MeetOurExperts";



const AboutUs = () => {
  return (
    <section className="mt-6">
      <div className="w-11/12 mx-auto mb-14">
        <div className=" flex flex-col md:flex-row items-center">
          {/* Left Section*/}
          <div className="md:w-1/2 mb-8 md:mb-0 " data-aos="fade-right">
            <Image
              src={aboutImg}
              alt="About Us"
              className="w-full h-[400px] object-cover rounded-lg shadow-xl"
            />
          </div>

          {/* Right Section (Text Content) */}
          <div className="md:w-1/2 md:pl-10 " data-aos="fade-left">
            <SectionTitle title={'About Us'} titleDescription={'Designing Spaces That Reflect Your Vision'} />
            <p className="text-gray-600 text-lg mb-6 "  >
              At Dreamy Hom, we bring visions to life with our expert interior design services. Our team of professional designers work to create spaces that reflect your personality and needs while keeping in mind functionality and aesthetics. Whether it's residential, commercial, or custom design, we approach every project with creativity and precision.
            </p>
            <p className="text-gray-600 text-lg mb-6">
              With years of experience, our passionate designers collaborate closely with you to understand your requirements and deliver exceptional results. We specialize in transforming spaces into personalized sanctuaries that align with your taste, lifestyle, and budget.
            </p>
            <p className="text-gray-600 text-lg">
              From concept to completion, we ensure a smooth and seamless design process. Our attention to detail and commitment to quality make us a trusted choice for all your interior design needs.
            </p>
          </div>
        </div>

        {/* Mission Statement Section */}
        <div className="text-center mt-20 border-2 p-5 rounded-xl" data-aos="fade-up">
          <SectionTitle
            title={'Our Mission'}
            titleDescription={'Transforming Interiors, Elevating Lifestyles'}
          />
          <p className="text-xl text-gray-500">
            Our mission is to design spaces that inspire creativity, enhance functionality, and promote well-being.
            We strive to make every design journey a collaborative and enriching experience for our clients.
          </p>
        </div>

      </div>
      <div data-aos="fade-up">
        <MeetOurExperts />
      </div>

    </section>
  );
};

export default AboutUs;
