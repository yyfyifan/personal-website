import AvatarImage from "../../assets/yifan.jpg";

const Avatar = () => {
  return (
    <img
      src={AvatarImage}
      alt="portrait"
      className="bg-gradient-to-b from-teal-500
  rounded-full h-40 w-40 mx-auto"
    />
  );
};
Avatar.displayName = "Avatar";
export default Avatar;
