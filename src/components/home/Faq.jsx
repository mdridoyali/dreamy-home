import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"


const Faq = () => {
    return (
        <div className="my-20 w-11/12 flex md:flex-col mx-auto">
            <div className="w-1/2">

            </div>
            <Accordion type="single" collapsible className="w-1/2">
                <AccordionItem value="item-1">
                    <AccordionTrigger>What is interior design?</AccordionTrigger>
                    <AccordionContent>
                        Interior design is the art and science of enhancing the interior of a building to create a healthier and more aesthetically pleasing environment for the people using the space. It involves everything from choosing color schemes and furniture to maximizing space efficiency and creating a cohesive design.
                    </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-2">
                    <AccordionTrigger>How long does an interior design project take?</AccordionTrigger>
                    <AccordionContent>
                        The timeline for an interior design project varies depending on the complexity and size of the space. Generally, smaller projects can take anywhere from a few weeks to a month, while larger projects, like entire home makeovers, could take a few months. We always provide a clear project timeline to ensure expectations are met.
                    </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-3">
                    <AccordionTrigger>What is the cost of hiring an interior designer?</AccordionTrigger>
                    <AccordionContent>
                        The cost of an interior design project can vary greatly depending on factors such as the size of the space, the complexity of the design, and the materials used. We offer customized quotes based on your specific needs and budget, ensuring you get the best value for your investment.
                    </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-4">
                    <AccordionTrigger>Can you work with my existing furniture?</AccordionTrigger>
                    <AccordionContent>
                        Absolutely! We believe in blending new design elements with your existing furniture if you wish to retain sentimental or functional pieces. We’ll help you determine how to integrate them into the new design to make the most of your space.
                    </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-5">
                    <AccordionTrigger>What happens if I don’t like the design?</AccordionTrigger>
                    <AccordionContent>
                        We work collaboratively with our clients throughout the design process, providing feedback and revisions to ensure the final result meets your expectations. Your satisfaction is our priority, and we make necessary changes until you're happy with the outcome.
                    </AccordionContent>
                </AccordionItem>

            </Accordion>
        </div>
    );
};

export default Faq;