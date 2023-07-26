import { ColorRing } from "react-loader-spinner";
import "./loader.css";

const Loader = () => {
  return (
    <div className="overlay">
      <ColorRing
        height="150"
        width="150"
        color="#8d2222e1"
        ariaLabel="blocks-loading"
        wrapperStyle={{}}
        wrapperClass="blocks-wrapper"
        visible={true}
        colors={["#e15b64", "#f47e60", "#f8b26a", "#abbd81", "#849b87"]}
        className="loader"
      />
    </div>
  );
};
export default Loader;
