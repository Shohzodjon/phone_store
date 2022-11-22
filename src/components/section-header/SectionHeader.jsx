import { Link } from "react-router-dom";
import ArrowIcon from "../../assets/icons/ArrowIcon";
const SectionHeader = (props) => {
  return (
    <div className="section__header flex items-center justify-between">
      <h2 className="text-lightBlue font-medium text-[32px] leading-16">
        {props.title}
      </h2>
      <Link to={props.header_url} className="flex items-center gap-4 group">
        <span className="text-lightBlue text-xl heading-5 font-medium">
          {" "}
          {props.header_link}
        </span>
        <span
          className={
            props.arrow_show
              ? "block transition-all duration-300 group-hover:translate-x-1"
              : "hidden"
          }
        >
          <ArrowIcon />
        </span>
      </Link>
    </div>
  );
};
export default SectionHeader;
