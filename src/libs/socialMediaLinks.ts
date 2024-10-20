import InstagramIcon from "@/assets/vector/social-media/instagram.svg";
import FacebookIcon from "@/assets/vector/social-media/facebook.svg";
import YoutubeIcon from "@/assets/vector/social-media/youtube.svg";
import SpotifyIcon from "@/assets/vector/social-media/spotify.svg";
import WhatsappIcon from "@/assets/vector/social-media/whatsapp.svg";

export const socialMediaLinks = [
  {
    platform: "Facebook",
    url: "#",
    icon: FacebookIcon,
    color: "blue",
  },
  {
    platform: "Instagram",
    url: "#",
    icon: InstagramIcon,
    color: "purple",
  },
  {
    platform: "WhatsApp",
    url: "#",
    icon: WhatsappIcon,
    color: "green",
  },
  {
    platform: "Spotify",
    url: "#",
    icon: SpotifyIcon,
    color: "parrot",
  },
  {
    platform: "YouTube",
    url: "#",
    icon: YoutubeIcon,
    color: "red",
  },
];

export const [facebook, instagram, whatsapp, spotify, youtube] =
  socialMediaLinks;
