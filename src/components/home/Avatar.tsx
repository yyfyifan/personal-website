import AvatarImage from "../../assets/yifan.jpg";

const Avatar = () => {
  return (
    <img
      src={AvatarImage}
      alt="portrait"
      className="bg-gradient-to-b from-teal-500
  rounded-full h-40 w-40 mx-auto mb-5"
    />
  );
};
Avatar.displayName = "Avatar";
export default Avatar;
