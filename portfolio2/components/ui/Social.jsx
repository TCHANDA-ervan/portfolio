import Link from "next/link";
import { FaGithub, FaLinkedinIn, FaYoutube, FaTwitter } from "react-icons/fa";

const socials = [
  { icon: <FaGithub />, path: "https://github.com/TCHANDA-ervan?tab=repositories" },
  { icon: <FaLinkedinIn />, path: "https://www.linkedin.com/in/junior-ervan-tchanda-shanda-7a3abb24b" },
  //{ icon: <FaYoutube />, path: "" }, 
 // { icon: <FaTwitter />, path: "" } 
];

const Social = ({ containerStyles, iconStyles }) => {
  return (
    <div className={containerStyles}>
      {socials.map((item, index) => (
        <Link 
          key={index} 
          href={item.path} 
          target="_blank" 
          rel="noopener noreferrer"
        >
          <div className={iconStyles}>
            {item.icon}
          </div>
        </Link>
      ))}
    </div>
  );
};

export default Social;
