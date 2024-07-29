import footerimg from "../../assets/img/footer-img.png"
import { LuFacebook } from "react-icons/lu"
import { FaInstagram } from "react-icons/fa"
import { FaLinkedin } from "react-icons/fa"
const Footer = () => {
  return (
  <>
  <div className="footer text-[#fff] mt-14 h-[548] bg-[#3b3638]">
    <div className="footer-top justify-between flex pt-10 pb-10 pl-[100px] pr-[100px]">
      <div className="footer-image">
<img src={footerimg} alt="" />
      </div>
      <div className="footer-links items-left flex flex-col gap-[20px]">
        <h1 className="font-bold">Terms & policities</h1>
        <a className="font-light">Terms of Service</a>
        <a className="font-light">Privacy Policy</a>
      </div>
      <div className="footer-links items-left flex flex-col gap-[20px]">
        <h1 className="font-bold">Company</h1>
        <a href="hero" className="font-light">Home</a>
        <a href="about" className="font-light">About us</a>
        <a href="contacts" className="font-light">Contact Us</a>
      </div>
      <div className="footer-links items-left flex flex-col gap-[20px]">
        <h1 className="font-bold">Contact</h1>
        <a href="https://github.com/mazegit1" className="font-light">My GitHub Profile</a>
        <p className="font-light">editor.azer@gmail.com</p>
      </div>
      <div className="footer-links items-left flex flex-col gap-[20px]">
        <h1 className="font-bold">Location</h1>
        <p className="font-light">PT Osiris Real Estate Internasional</p>
        <p className="font-light">Jl. KH. Wahid Hasyim Kel No.10De</p>
        <p className="font-light">Azerbaijan,Baku</p>
        <p className="font-light">editor.azer@gmail.com</p>
      </div>
    </div>
    <div className="footer-bottom items-center justify-center flex flex-col">
      <div className="bottom-top flex items-center gap-[25px]">
      <LuFacebook className="w-10 h-10"/>
      <FaInstagram className="w-10 h-10" />
      <FaLinkedin className="w-10 h-10"/>
      </div>
      <hr className="w-[450px] h-1 mt-3 mb-3"/>
      <div className="bottom-bottom">
        <p className="font-normal text-[#fff] text-[18px]">Copyright @ 2022 Agency Creative. All Right Reserved</p>
      </div>
    </div>
  </div>

  
  </>
  )
}

export default Footer
