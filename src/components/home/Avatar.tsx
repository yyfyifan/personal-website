import AvatarImage from "../../assets/avatar.png";
import classNames from "classnames";
const Avatar = () => {
  return (
    <img
      src={AvatarImage}
      alt="portrait"
      className={classNames("bg-gray-300", "rounded-full h-40 w-40 mx-auto mb-5")}
    />
  );
};
Avatar.displayName = "Avatar";
export default Avatar;
