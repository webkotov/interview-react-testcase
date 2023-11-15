import "./styles.scss";
import NavigationItem from "./NavigationItem";
import { CartIcon, CatalogIcon } from "@/components/Icons";

// TODO: Реализовать Navigation чтобы можно было прокидывать NavigationItem
function Navigation() {
  return (
    <nav className="navigation">
      <ul>
        <li className="navigation__item">
          <NavigationItem icon={<CatalogIcon/>} to="/">Каталог</NavigationItem>
        </li>
        <li className="navigation__item">
          <NavigationItem icon={<CartIcon/>} to="/cart">Корзина</NavigationItem>
        </li>
      </ul>
    </nav>
  );
}

export default Navigation;