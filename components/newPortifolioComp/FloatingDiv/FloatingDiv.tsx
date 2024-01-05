import Image from "next/image";
import "./FloatingDiv.css";

const FloatinDiv = ({ img, text1, text2 }: any) => {
  return (
    // darkMode
    <div className="floatingDiv">
      <Image src={img} alt="" fill />
      <span>
        {text1}
        <br />
        {text2}
      </span>
    </div>
  );
};

export default FloatinDiv;
