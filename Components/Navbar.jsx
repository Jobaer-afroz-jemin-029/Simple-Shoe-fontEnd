
const Navbar = () => {
  return (
    <div className="container">
      <nav>
        <div>
          <img src="images/brand_logo.png" />
        </div>
        <div>
            <ul>
                <li href="#"> Menu</li>
                <li href="#">Location </li>
                <li href="#"> About</li>
                <li href="#"> Contact</li>
            </ul>
        </div>
        <button >Login</button>
      </nav>
    </div>
  );
};
export default Navbar;
