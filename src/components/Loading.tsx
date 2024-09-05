import loaderLight from "../assets/icons/loader-light.svg";
import loaderDark from "../assets/icons/loader-dark.svg";

export default function Loading() {
  return (
    <div className="w-full">
      <img
        className="m-auto w-12 animate-spin"
        src={loaderLight}
        alt=""
      />
    </div>
  );
}
