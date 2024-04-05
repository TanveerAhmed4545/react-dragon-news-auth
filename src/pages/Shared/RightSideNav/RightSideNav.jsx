import { FaGoogle } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import qzone1 from '../../../assets/qZone1.png';
import qzone2 from '../../../assets/qZone2.png';
import qzone3 from '../../../assets/qZone3.png';

const RightSideNav = () => {
  return (
    <div>
      <div className="p-4 space-y-3 mb-6">
        <h2 className="text-3xl mb-2">Login With</h2>
        <button className="btn btn-outline w-full">
        <FaGoogle></FaGoogle>
          Google
        </button>
        <button className="btn btn-outline w-full">
        <FaGithub></FaGithub>
          github
        </button>
      </div>
      <div className="p-4  mb-6">
        <h2 className="text-3xl">Find Us on</h2>
       <a className="p-4 flex items-center text-lg border rounded-t-lg" href="">
        <FaFacebookF className="mr-3"></FaFacebookF>
        Facebook
       </a>
       <a className="p-4 flex items-center text-lg border-x " href="">
        <FaTwitter className="mr-3"></FaTwitter>
        Twitter
       </a>
       <a className="p-4 flex items-center text-lg border rounded-b-lg" href="">
        <FaInstagram className="mr-3"></FaInstagram>
        Instagram
       </a>
      </div>

      {/* q zone */}
      <div className="p-4 space-y-3 mb-6">
        <h2 className="text-3xl mb-2">Q Zone</h2>
        <img src={qzone1}  />
        <img src={qzone2}  />
        <img src={qzone3}  />
        


      </div>
      
    </div>
  );
};

export default RightSideNav;
