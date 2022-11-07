import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import "./bread-crumb.css";
function BreadCrumb(props) {
  const location = useLocation();
  return (
    <ul className="flex items-center gap-1 bread">
      <li className="bread-link">
        <Link to="/list">Заявки</Link>
      </li>
      <li>
        <span>
          <svg
            width="12"
            height="12"
            viewBox="0 0 12 12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M3.98483 9.76517C3.8517 9.63203 3.8396 9.4237 3.94853 9.27689L3.98483 9.23483L7.2195 6L3.98483 2.76516C3.8517 2.63203 3.8396 2.4237 3.94853 2.27689L3.98483 2.23484C4.11797 2.1017 4.3263 2.0896 4.47311 2.19853L4.51517 2.23484L8.01516 5.73484C8.1483 5.86797 8.1604 6.0763 8.05147 6.22311L8.01516 6.26517L4.51517 9.76517C4.36872 9.91161 4.13128 9.91161 3.98483 9.76517Z"
              fill="#BBC2D0"
            />
          </svg>
        </span>
      </li>
      <li
        className={
          location.pathname === "/store" ? "bread-active" : "bread-link"
        }
      >
        <Link to={`/store`}>Оформить заказ</Link>
      </li>
      <li>
        <span>
          <svg
            width="12"
            height="12"
            viewBox="0 0 12 12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M3.98483 9.76517C3.8517 9.63203 3.8396 9.4237 3.94853 9.27689L3.98483 9.23483L7.2195 6L3.98483 2.76516C3.8517 2.63203 3.8396 2.4237 3.94853 2.27689L3.98483 2.23484C4.11797 2.1017 4.3263 2.0896 4.47311 2.19853L4.51517 2.23484L8.01516 5.73484C8.1483 5.86797 8.1604 6.0763 8.05147 6.22311L8.01516 6.26517L4.51517 9.76517C4.36872 9.91161 4.13128 9.91161 3.98483 9.76517Z"
              fill="#BBC2D0"
            />
          </svg>
        </span>
      </li>
      <li className="bread-active">
        <Link to="">{props.last_page}</Link>
      </li>
    </ul>
  );
}
export default BreadCrumb;
