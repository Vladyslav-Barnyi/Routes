import {Link} from "react-router-dom";
import '../header.css'

export default function Header(){
  return(
    <header  className={"header"}>
      <nav>
        <ul>
          <li><Link to={'/home'}>Home</Link> </li>
          <li><Link to={'/about'}>About</Link> </li>
          <li><Link to={'/contacts'}>Contacts</Link> </li>
        </ul>
      </nav>
    </header>
  )
}