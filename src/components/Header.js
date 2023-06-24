import { Link } from "react-router-dom";
import multicampus from "../img/multiFlix.png"

function Header() {
  return (
    <div className="header-container">
      <div className="header-wrap">
        <div className="header-left-wrap">
          <Link style={{display: 'flex'}} to ='/'>
            <img
              src={multicampus}
              style={{width:"150px", height: "50px"}}
              alt="멀티캠퍼스로고"
            />
          </Link>
          <ul>
            <li>
              <Link className="header-nav-item" to="/movie">
                영화
              </Link>
            </li>
            <li>
              <Link className="header-nav-item" to="/tv">
                TV프로그램
              </Link>
            </li>
            <li>
              <Link className="header-nav-item" to="/person">
                인물
              </Link>
            </li>
            <li>
              <Link className="header-nav-item" to="/login">
                login
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Header;