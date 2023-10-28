import "./Navbar.css"
import links from "../data"
import logo from "../images/netflix.png"
import { GiHamburgerMenu } from "react-icons/gi";

const Navbar = () => {
  return <nav>
    <div className="navigation">
      <div className="nav-header">
        <img src={logo} alt="" />
        <button>
          <GiHamburgerMenu />
        </button>
      </div>
      <div className="nav-list">
          <ul>
            {
              links.map((onelink)=>{ 
                const {id,text,url}=onelink
                return <li key={id}>
                  <a href={url}>{text}</a>
                </li>
              })
            }
          </ul>
      </div>
    </div>
  </nav>
}

export default Navbar