const Footer = () => {
  return (
    <footer className="footer mt-8 p-20 bg-base-200   text-base-content">
      <div className="mx-auto">
        <img
          src="https://tabula.bold-themes.com/sunny/wp-content/uploads/sites/2/2019/03/crest.png"
          alt=""
        />
        <p>ACME Industries Ltd.<br/>Providing reliable tech since 1992</p>
      </div>
      <div className="mx-auto">
        <span className="footer-title">Services</span>
        <a className="link link-hover">Branding</a>
        <a className="link link-hover">Design</a>
        <a className="link link-hover">Marketing</a>
        <a className="link link-hover">Advertisement</a>
      </div>
      <div className="mx-auto">
        <span className="footer-title">Company</span>
        <a className="link link-hover">About us</a>
        <a className="link link-hover">Contact</a>
        <a className="link link-hover">Jobs</a>
        <a className="link link-hover">Press kit</a>
      </div>
      <div className="mx-auto ">
        <span className="footer-title">Legal</span>
        <a className="link link-hover">Terms of use</a>
        <a className="link link-hover">Privacy policy</a>
        <a className="link link-hover">Cookie policy</a>
      </div>
      <div className="mx-auto flex flex-col gap-3 text-center">
        <span className="footer-title ml-6">ArtnCraft</span>
        <p>123 Toy Street<br/>TestCity, TestCountry</p>
        <p>Phone: 123-456-7890<br/>Email: info@artNcraft.com</p>
      </div>
    </footer>
  );
};

export default Footer;
