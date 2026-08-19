import {
  Code2,
  Globe2,
  GraduationCap,
  LifeBuoy,
  Server,
  Smartphone,
} from "lucide-react";

export const services = [
  {
    id: 1,
    title: "Web & App Development",
    description:
      "Custom websites and web applications built with modern technologies and responsive design.",
    icon: Code2,
    accent: "green",
    image: "/images/services/web-development.jpg",
  },
  {
    id: 2,
    title: "Mobile App Development",
    description:
      "Modern mobile applications designed for reliable performance and a smooth user experience.",
    icon: Smartphone,
    accent: "navy",
    image: "/images/services/mobile-development.jpg",
  },
  {
    id: 3,
    title: "Web Hosting",
    description:
      "Reliable hosting solutions for websites, applications, and growing digital businesses.",
    icon: Server,
    accent: "blue",
    image: "/images/services/web-hosting.jpg",
  },
  {
    id: 4,
    title: "Domain Registration",
    description:
      "Domain registration and setup support to help businesses establish a professional online identity.",
    icon: Globe2,
    accent: "green",
    image: "/images/services/domain-registration.jpg",
  },
  {
    id: 5,
    title: "Maintenance & Support",
    description:
      "Ongoing technical maintenance and support to keep websites and digital systems running smoothly.",
    icon: LifeBuoy,
    accent: "navy",
    image: "/images/services/maintenance-support.jpg",
  },
  {
    id: 6,
    title: "Training & Education",
    description:
      "Practical technology training for students, professionals, and people building new digital skills.",
    icon: GraduationCap,
    accent: "blue",
    image: "/images/services/training-education.jpg",
  },
];
