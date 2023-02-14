import Navbar from './Navbar';
import Searchbar from './Searchbar';

export default function Header(props) {
  return (
    <header>
      <Navbar handleClick={props.handleClick} />
      <Searchbar theme={props.theme} />
    </header>
  );
}
