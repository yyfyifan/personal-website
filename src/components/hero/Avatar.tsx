import AvatarImage from "../../assets/avatar.png";
import classNames from "classnames";
import Image from "next/image";

const Avatar = () => {
  return (
    <Image
      src={AvatarImage}
      alt="hero"
      className={classNames("bg-gray-300", "rounded-full h-40 w-40 mx-auto mb-5")}
      placeholder={"blur"}
    />
  );
};
Avatar.displayName = "Avatar";
export default Avatar;
