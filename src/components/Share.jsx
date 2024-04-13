import { WhatsappShareButton } from "react-share";
import { IoShareSocialOutline } from "react-icons/io5"

const WhatsAppButton = ({ url, message }) => {
  return (
    <WhatsappShareButton url={url} title={message}>
      <IoShareSocialOutline className="h-6 w-6"/>
    </WhatsappShareButton>
  );
};

export default WhatsAppButton;
