import { IoLogoGithub, IoLogoInstagram, IoLogoLinkedin, IoLogoTwitter } from "solid-icons/io";

export const section_links = [
    {id: 1, title: "Start"},
    {id: 2, title: "Skills"},
    {id: 3, title: "Projects"},
]

export const socials = [
    {
        id: 1,
        title: "",
        url: "https://www.github.com/anesdiaf",
        icon:   <IoLogoGithub class="w-12 h-12 p-3 flex justify-center items-center text-[1.4rem] bg-white hover:bg-violet-600 rounded-full transition"/>
    },
    {
        id: 2,
        title: "",
        url: "https://www.instagram.com/anesdiaf",
        icon: <IoLogoInstagram class="w-12 h-12 p-3 flex justify-center items-center text-[1.4rem] bg-white hover:bg-gradient-to-tr from-yellow-500 to-violet-400 rounded-full transition"/>
    },
    {
        id: 3,
        title: "",
        url: "https://www.twitter.com/anesdiaf",
        icon:  <IoLogoTwitter class="w-12 h-12 p-3 flex justify-center items-center text-[1.4rem] bg-white hover:bg-blue-400 rounded-full transition"/>
    },
    {
        id: 4,
        title: "",
        url: "https://www.linkedin.com/anesdiaf",
        icon:   (
                <button class="w-12 h-12 flex justify-center items-center text-[1.4rem] bg-white hover:bg-blue-600  rounded-full transition">
                    <IoLogoLinkedin/>
                </button>
                )
    }
]