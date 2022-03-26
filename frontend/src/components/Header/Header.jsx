import { Link } from 'react-router-dom';

import './Header.scss';

const Header = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">
            <span href="#">List</span>
          </Link>
        </li>
        <li>
          <Link to="/addbook">
            <span href="#">Add book</span>
          </Link>
        </li>
        {/* <li>
          <Link to="/updatebook">
            <span href="#">Update book</span>
          </Link>
        </li> */}
      </ul>
    </nav>
  );
};
export default Header;
