export type CertificationProps = {
    id: number;
    name: string;
    image: string;
    link: string;
};

export const certifications: CertificationProps[] = [
    {
        id: 0,
        name: "Infosys Springboard - basics of Python Certified",
        image: "/certifications/infosyscertification.JPG",
        link: "https://drive.google.com/file/d/1fvj50nsAzAPbRanJC46stfEVYodhMpxd/view?usp=sharing"
    },
    {
        id: 1,
        name: "GDSC - Google Cloud Computing Foundations & Generative AI Certified",
        image: "/certifications/gdsc.JPG",
        link: "https://drive.google.com/file/d/1Lceb46y-5VxUsnfeuO6vToZBW9pquQ75/view?usp=sharing"
    },
    {
        id: 2,
        name: "Swecha - Web development using Wordpress  certified",
        image: "/certifications/swechawordpress.JPG",
        link: "https://drive.google.com/file/d/1sdUeC-7rPRyz5vXDltfoq3QojQyguamV/view?usp=sharing"
    },
];