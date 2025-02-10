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
      bannerImage:img1,
      longDescription: "Our residential interior design services focus on creating beautiful, comfortable, and functional spaces tailored to your needs. We specialize in modern, traditional, and luxury home designs.",
      keyFeatures: [
        "Custom space planning",
        "Color palette selection",
        "Furniture arrangement",
        "Lighting design",
        "Personalized decor solutions"
      ],
      relatedServices: [2, 3, 5],
      faq: [
        {
          question: "How long does a typical residential project take?",
          answer: "The timeline varies based on project size, but typically ranges from 4 to 8 weeks."
        },
        {
          question: "Do you offer budget-friendly designs?",
          answer: "Yes, we customize designs to fit various budget levels while maintaining quality."
        }
      ]
    },
    {
      id: 2,
      title: "Commercial Interior Design",
      description: "Create functional and stylish workspaces that enhance productivity and brand identity.",
      image: img2,
      bannerImage:img2,
      longDescription:
        "Our commercial interior design services ensure a professional and inspiring workplace. From corporate offices to retail spaces, we optimize layouts, lighting, and branding elements.",
      keyFeatures: [
        "Office space planning",
        "Brand-oriented design",
        "Ergonomic furniture selection",
        "Smart lighting solutions",
        "Enhanced workspace aesthetics"
      ],
      relatedServices: [1, 4, 6],
      faq: [
        {
          question: "Can you design for different industries?",
          answer: "Yes, we provide designs for corporate offices, restaurants, retail stores, and more."
        },
        {
          question: "How can interior design improve productivity?",
          answer: "A well-planned workspace boosts employee morale and efficiency by improving comfort and functionality."
        }
      ]
    },
    {
      id: 3,
      title: "Luxury Interior Design",
      description: "Experience elegance with our high-end luxury designs, featuring premium materials and unique aesthetics.",
      image: img3,
      bannerImage:img3,
      longDescription:
        "Our luxury interior designs bring sophistication and exclusivity to your space. We use high-end materials, custom-made furniture, and exquisite decor to achieve perfection.",
      keyFeatures: [
        "Premium material selection",
        "Exclusive furniture designs",
        "Sophisticated lighting solutions",
        "High-end decor elements",
        "Unique and timeless aesthetics"
      ],
      relatedServices: [1, 5],
      faq: [
        {
          question: "What is the cost of luxury interior design?",
          answer: "Luxury designs vary in cost depending on materials and customization, but we offer tailored solutions to match different budgets."
        },
        {
          question: "Do you offer custom furniture design?",
          answer: "Yes, we provide bespoke furniture tailored to your space and aesthetic preferences."
        }
      ]
    },
    {
      id: 4,
      title: "Modular Kitchen Design",
      description: "Upgrade your kitchen with modern modular layouts that optimize space and functionality.",
      image: img4,
      bannerImage:img4,
      longDescription:
        "Our modular kitchen designs focus on maximizing storage, efficiency, and style. We create seamless kitchen layouts with top-quality materials and smart technology.",
      keyFeatures: [
        "Space-efficient modular layouts",
        "Ergonomic cabinet designs",
        "Modern and durable materials",
        "Smart storage solutions",
        "Energy-efficient lighting"
      ],
      relatedServices: [2, 6],
      faq: [
        {
          question: "What are the benefits of a modular kitchen?",
          answer: "Modular kitchens provide optimized space usage, easy maintenance, and a modern aesthetic."
        },
        {
          question: "Can I customize my modular kitchen?",
          answer: "Yes, we offer fully customizable designs based on your preferences and kitchen size."
        }
      ]
    },
    {
      id: 5,
      title: "Furniture & Decor",
      description: "Get custom furniture and decorative elements that enhance the beauty of your space.",
      image: img5,
      bannerImage:img5,
      longDescription:
        "Our furniture and decor services include sourcing, designing, and arranging furniture pieces that complement your interior theme.",
      keyFeatures: [
        "Custom furniture design",
        "Personalized decor styling",
        "Eco-friendly material options",
        "Space-saving furniture solutions",
        "Matching theme-based decor"
      ],
      relatedServices: [1, 3],
      faq: [
        {
          question: "Do you provide ready-made furniture?",
          answer: "Yes, we have both ready-made and custom-designed furniture options available."
        },
        {
          question: "What styles of decor do you offer?",
          answer: "We provide modern, vintage, minimalist, and luxury decor styles."
        }
      ]
    },
    {
      id: 6,
      title: "Lighting & Space Planning",
      description: "Enhance ambiance with expert lighting solutions and optimized space utilization.",
      image: img6,
      bannerImage:img6,
      longDescription:
        "Our lighting and space planning services help create visually appealing and energy-efficient interiors, enhancing both aesthetics and functionality.",
      keyFeatures: [
        "Ambient and task lighting",
        "Energy-efficient LED solutions",
        "Smart home lighting integration",
        "Strategic space planning",
        "Mood-enhancing light designs"
      ],
      relatedServices: [2, 4],
      faq: [
        {
          question: "What types of lighting do you use?",
          answer: "We use ambient, accent, task, and decorative lighting based on your requirements."
        },
        {
          question: "Can lighting affect the mood of a space?",
          answer: "Absolutely! The right lighting enhances ambiance and creates a comfortable environment."
        }
      ]
    }
  ];
  
  export default services;
  