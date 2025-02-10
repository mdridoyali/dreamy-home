import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";

import img1 from '@/app/assets/faq/1.jpg';
import img2 from '@/app/assets/faq/2.jpg';
import img3 from '@/app/assets/faq/3.jpg';
import img4 from '@/app/assets/faq/4.jpg';
import Image from "next/image";
import SectionTitle from "../SectionTitle";

const Faq = () => {
    return (
        <div className="my-20 w-11/12 mx-auto">
            <div className="md:hidden"><SectionTitle title={'Your Questions, Answered'} titleDescription={'Everything you need to know about our interior design services, process, and pricing.'} /></div>
            <div className="md:flex justify-between gap-10 items-center">
                {/* Image Section */}
                <div className="w-full md:w-1/2  grid grid-cols-2 md:grid-cols-2 gap-5">
                    <Image className="w-52 rounded-xl object-cover shadow-md shadow-blue-500" src={img1} alt="FAQ Image 1" />
                    <Image className="w-52 rounded-xl object-cover shadow-md shadow-blue-500" src={img2} alt="FAQ Image 2" />
                    <Image className="w-52 rounded-xl object-cover shadow-md shadow-blue-500" src={img3} alt="FAQ Image 3" />
                    <Image className="w-52 rounded-xl object-cover shadow-md shadow-blue-500" src={img4} alt="FAQ Image 4" />
                </div>

                {/* Accordion Section */}
                <div className="w-full md:w-1/2 mt-5 md:mt-0">
                    <div className="hidden md:block"> <SectionTitle title={'Your Questions, Answered'} titleDescription={'Everything you need to know about our interior design services, process, and pricing.'} /></div>
                    <Accordion type="single" collapsible>
                        <AccordionItem value="item-1">
                            <AccordionTrigger>What is interior design?</AccordionTrigger>
                            <AccordionContent>
                                Interior design is the art and science of enhancing the interior of a building to create a healthier and more aesthetically pleasing environment for the people using the space. It involves everything from choosing color schemes and furniture to maximizing space efficiency and creating a cohesive design.
                            </AccordionContent>
                        </AccordionItem>

                        <AccordionItem value="item-2">
                            <AccordionTrigger>How long does an interior design project take?</AccordionTrigger>
                            <AccordionContent>
                                The timeline for an interior design project varies depending on the complexity and size of the space. Smaller projects may take a few weeks, while larger ones could take a few months.
                            </AccordionContent>
                        </AccordionItem>

                        <AccordionItem value="item-3">
                            <AccordionTrigger>What is the cost of hiring an interior designer?</AccordionTrigger>
                            <AccordionContent>
                                The cost depends on the size of the space, design complexity, and materials. We provide custom quotes based on your needs and budget.
                            </AccordionContent>
                        </AccordionItem>

                        <AccordionItem value="item-4">
                            <AccordionTrigger>Can you work with my existing furniture?</AccordionTrigger>
                            <AccordionContent>
                                Yes! We can integrate your existing furniture into the design to create a cohesive look while keeping sentimental pieces.
                            </AccordionContent>
                        </AccordionItem>

                        <AccordionItem value="item-5">
                            <AccordionTrigger>What happens if I don’t like the design?</AccordionTrigger>
                            <AccordionContent>
                                We work closely with clients, making revisions and adjustments to ensure the final design meets your expectations.
                            </AccordionContent>
                        </AccordionItem>
                    </Accordion>
                </div>
            </div>
        </div>
    );
};

export default Faq;
