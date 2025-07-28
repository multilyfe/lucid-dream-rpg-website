import { Link } from 'react-router-dom';
export default function Navbar() {
  return (
    <nav>
      <Link to='/'>Home</Link> | <Link to='/dream'>Dream View</Link> | <Link to='/login'>Login</Link>
    </nav>
  );
}