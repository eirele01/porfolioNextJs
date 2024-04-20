import Link from "next/link";

import {
  RiYoutubeLine,
  RiInstagramLine,
  RiFacebookLine,
  RiDribbbleLine,
  RiGithubLine,
  RiLinkedinBoxFill,
  RiPinterestLine,
} from "react-icons/ri";

import { SiIndeed } from "react-icons/si";

export const socialData = [
  {
    name: "Facebook",
    link: "https://web.facebook.com/joven.allcantra",
    Icon: RiFacebookLine,
  },
  {
    name: "SiIndeed",
    link: "https://profile.indeed.com/p/eirelejovenb-nfs8mxs",
    Icon: SiIndeed,
  },
  {
    name: "Linkedin",
    link: "https://www.linkedin.com/in/eirele-joven-boter-423b762b4/",
    Icon: RiLinkedinBoxFill,
  },
];

const Socials = () => {
  return (
    <div className="flex items-center gap-x-5 text-lg">
      {socialData.map((social, i) => (
        <Link
          key={i}
          title={social.name}
          href={social.link}
          target="_blank"
          rel="noreferrer noopener"
          className={`${
            social.name === "Linkedin"
              ? "bg-accent rounded-full p-[5px] hover:text-white"
              : "hover:text-accent"
          } transition-all duration-300`}
        >
          <social.Icon aria-hidden />
          <span className="sr-only">{social.name}</span>
        </Link>
      ))}
    </div>
  );
};

export default Socials;
