import { socialMediaLinks } from "@/config/social-media";

export const SocialMedia: React.FC = () => {
  return (
    <div className="flex justify-between">
      {Object.keys(socialMediaLinks).map((link) => {
        return (
          <a
            key={String(socialMediaLinks[link].id)}
            href={String(socialMediaLinks[link].link)}
            title={String(socialMediaLinks[link].title)}
            target="_blank"
            rel="noopener noreferrer"
          >
            {socialMediaLinks[link].icon}
          </a>
        );
      })}

      {/* <a href="/principal-rss">
        <a title="RSS">
          <FaRss size={20} />
        </a>
      </a> */}
    </div>
  );
};
