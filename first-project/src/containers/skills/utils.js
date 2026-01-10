import { FaLayerGroup, FaCode, FaPaintBrush, FaObjectGroup, FaTools, FaBug } from "react-icons/fa";
export const skillsDetails = [
    {
        label: "Frameworks",
        icon: <FaLayerGroup />,
        data: [
            {
                SkillName: 'Angular',
                percentage: '70'
            },
            {
                SkillName: 'React JS',
                percentage: '30'
            }
        ]
    },
    {
        label: "Languages",
        icon: <FaCode />,
        data: [
            {
                SkillName: 'TypeScript',
                percentage: '60'
            },
            {
                SkillName: 'JAVAScript',
                percentage: '50'
            },
            {
                SkillName: 'JQuery',
                percentage: '45'
            },
            {
                SkillName: 'Core JAVA',
                percentage: '40'
            }
        ]
    },
    {
        label: "Styling",
        icon: <FaPaintBrush />,
        data: [
            {
                SkillName: 'HTML',
                percentage: '80'
            },
            {
                SkillName: 'CSS',
                percentage: '70'
            },
            {
                SkillName: 'SCSS',
                percentage: '65'
            }
        ]
    },
    {
        label: "UI Libraries",
        icon: <FaObjectGroup />,
        data: [
            {
                SkillName: 'Prime-ng',
                percentage: '50'
            },
            {
                SkillName: 'BootStrap',
                percentage: '50'
            }
        ]
    },
    {
        label: "Tools",
        icon: <FaTools />,
        data: [
            {
                SkillName: 'Git Hub',
                percentage: '40'
            },
            {
                SkillName: 'VS Code',
                percentage: '60'
            },
            {
                SkillName: 'Postman',
                percentage: '20'
            }
        ]
    },
    {
        label: "Debugging",
        icon: <FaBug />,
        data: [
            {
                SkillName: 'Chrome DevTools',
                percentage: '50'
            }
        ]
    }

]
