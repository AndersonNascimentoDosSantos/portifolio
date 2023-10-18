import { socialMediaLinks } from "@/config/social-media";
import clsx from "clsx";

export const SocialMedia: React.FC<{
  className?: string;
}> = ({ className }) => {
  return (
    <div className={clsx("flex justify-between", className)}>
      {Object.keys(socialMediaLinks).map((link) => {
        return (
          <a
            key={String(socialMediaLinks[link].id)}
            href={String(socialMediaLinks[link].link)}
            title={String(socialMediaLinks[link].title)}
            target="_blank"
            rel="noopener noreferrer"
            className="border border-spacing-1  p-[0.2rem] rounded"
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
