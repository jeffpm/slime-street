// import Image from 'next/image'

const Header = () => (
  <div className="Header">
      {/* <Image src="/images/slime-street.svg" alt="slime-street-logo" height="300px" width="300px" /> */}
      <img src={require("../public/images/slime-street.svg")} alt="slime-street-logo" height="300px" width="300px" />
      {/* <a href = "https://www.instagram.com/slime-street"><Image src="/images/social/instagram.png" alt="instagram-logo" height="29px" width="29px" /></a> */}
      {/* <a href = "https://www.facebook.com/slime-street"><Image src="/images/social/facebook.png" alt="facebook-logo" height="29px" width="29px" /></a> */}
      <style jsx>{`
        background-color: blue;
        color: white;
        width: 100%;
        // height: 50px;
      `}</style>
  </div>
);
  
  export default Header;