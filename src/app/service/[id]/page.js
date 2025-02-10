
import Image from "next/image";
import services from "../serviceJson";

const ServiceDetails = ({ params }) => {
    const id = params.id
    const service = services.find((data) => data?.id === parseInt(id));

    if (!service) {
        return <div className="text-center text-red-500 text-xl mt-10">Service Not Found</div>;
    }

    return (
        <div className="w-11/12 mx-auto px-4 py-10">
            <Image
                src={service.bannerImage}
                alt={service.title}
                className="w-full h-[50vh] object-cover rounded-lg"
            />
            <h2 className="text-4xl font-bold text-gray-800 mt-6">{service.title}</h2>
            <p className="text-gray-600 text-lg mt-4">{service.longDescription}</p>

            {/* Key Features */}
            <div className="mt-6">
                <h3 className="text-2xl font-semibold text-blue-500">Key Features</h3>
                <ul className="list-disc list-inside mt-2 space-y-1">
                    {service.keyFeatures.map((feature, index) => (
                        <li key={index} className="text-gray-700">
                            {feature}
                        </li>
                    ))}
                </ul>
            </div>

            {/* Related Services */}
            <div className="mt-8">
                <h3 className="text-2xl font-semibold text-blue-500">Related Services</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-4">
                    {service.relatedServices.map((relatedId) => {
                        const relatedService = services.find((s) => s.id === relatedId);
                        return relatedService ? (
                            <div key={relatedService.id} className="bg-gray-100 p-4 rounded-md shadow-md">
                                <h4 className="font-semibold">{relatedService.title}</h4>
                                <p className="text-sm text-gray-600">{relatedService.description}</p>
                            </div>
                        ) : null;
                    })}
                </div>
            </div>

            {/* FAQ Section */}
            <div className="mt-8">
                <h3 className="text-2xl font-semibold text-blue-500">FAQs</h3>
                <div className="mt-4 space-y-3">
                    {service.faq.map((item, index) => (
                        <div key={index} className="border p-4 rounded-md shadow-sm">
                            <h4 className="font-semibold text-gray-800">{item.question}</h4>
                            <p className="text-gray-600 mt-1">{item.answer}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ServiceDetails;
