import { Link } from "react-router-dom";

import { RiLinkedinLine, RiGithubLine } from 'react-icons/ri'

const Socials = () => {
  return (
    <div className="flex items-center gap-x-5 text-lg font-bold">
      <Link to='' className="hover:text-accent transition-all duration-300 text-white">
        <RiLinkedinLine />
      </Link>
      <Link to='https://github.com/cedricbb' className="hover:text-accent transition-all duration-300 text-white" target="_blank" rel="noreferrer">
        <RiGithubLine />
      </Link>
    </div>
  )
};

export default Socials
