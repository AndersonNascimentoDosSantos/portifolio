import "./FloatingDiv.css";

const FloatinDiv = ({ img, text1, text2 }: any) => {
  return (
    // darkMode
    <div className="floatingDiv">
      <img src={img} alt="" />
      <span>
        {text1}
        <br />
        {text2}
      </span>
    </div>
  );
};

export default FloatinDiv;
