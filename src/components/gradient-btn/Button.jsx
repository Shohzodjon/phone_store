import "../../styles/button.css";
const Button = (props) => {
  return (
    <button onClick={props.clickBtn} className="base__btn py-5 px-[35px]">
      <span className="relative z-30 text-[17px] leading-[17px] text-black font-medium">
        {props.context}
      </span>
    </button>
  );
};
export default Button;
