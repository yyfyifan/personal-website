import React from "react";
interface ContactIconProps {
  icon: React.ReactNode;
  href: string;
}

const ContactIcon: React.FC<ContactIconProps> = ({ icon, href }) => {
  return (
    <a
      href={href}
      target="_blank"
      className="text-gray-600 dark:text-gray-200 dark:hover:-translate-y-1 transition-transform duration-100">
      {icon}
    </a>
  );
};
ContactIcon.displayName = "ContactIcon";
export default ContactIcon;
