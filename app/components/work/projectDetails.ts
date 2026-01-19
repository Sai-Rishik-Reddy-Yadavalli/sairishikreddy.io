import {
    SiAndroidstudio,
    SiDart,
    SiFirebase,
    SiFlutter,
} from "react-icons/si";
import { IconType } from "react-icons";

export type ProjectProps = {
    id: number;
    name: string;
    description: string;
    technologies: IconType[];
    techNames: string[];
    techLinks: string[];
    github: string;
    demo: string;
    images: string[];
    available: boolean;
};

export const projects = [
    {
        id: 0,
        name: "TraceHub",
        description:
            "Developed a Doctor-Patient Appointment System with secure authentication, enabling patients to book, manage, and track appointments. Utilized HTML, CSS, and JavaScript, for efficient scheduling, notifications, and data management. Enhanced functionality with appointment reminders and admin controls for improved efficiency and security.",
        technologies: [SiFlutter, SiDart, SiFirebase, SiAndroidstudio],
        techNames: ["Flutter", "Dart", "Firebase", "Androidstudio"],
        techLinks: ["https://flutter.dev/", "https://dart.dev/", "https://firebase.google.com/", "https://developer.android.com/"],
        github: "https://github.com/Shiva7ganesh/TraceHub",
        demo: " ",
        images: ["/projects/tracehub-Signup Page.png", "/projects/tracehub-Login Page.png", "/projects/tracehub-Important Notice.png", "/projects/tracehub-Lost Items.png", "/projects/tracehub-Lost Item Details.png", "/projects/tracehub-Add Lost Item.png", "/projects/tracehub-Found Items.png", "/projects/tracehub-Found Item Details.png", "/projects/tracehub-Add Found Item.png", "/projects/tracehub-Profile.png", "/projects/tracehub-Maintenance.png", "/projects/tracehub-Update.png"],
        available: true,
    },
    // {
    //     id: 1,
    //     name: "",
    //     description: "",
    //     technologies: [SiFlutter, SiDart, SiFirebase, SiAndroidstudio],
    //     techNames: ["Flutter", "Dart", "Firebase", "Androidstudio"],
    //     techLinks: ["https://flutter.dev/", "https://dart.dev/", "https://firebase.google.com/", "https://developer.android.com/"],
    //     github: "",
    //     demo: "",
    //     images: ["./projects/tracehub.png", "./projects/tracehub_dashboard.png", "./projects/tracehub_booking.png"],
    //     available: true,
    // }
];
