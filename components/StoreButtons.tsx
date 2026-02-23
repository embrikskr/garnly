type StoreButtonsProps = {
  appStoreHref: string;
  googlePlayHref: string;
  size?: "sm" | "md";
  stackedOnMobile?: boolean;
};

const buttonSizes = {
  sm: "h-10 px-4 text-sm",
  md: "h-12 px-5 text-sm sm:text-base",
} as const;

function StoreLink({
  href,
  label,
  variant,
  size,
}: {
  href: string;
  label: string;
  variant: "primary" | "secondary";
  size: "sm" | "md";
}) {
  const shared =
    "inline-flex items-center justify-center rounded-full border font-medium transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#a34162] focus-visible:ring-offset-2";
  const styles =
    variant === "primary"
      ? "border-[#a34162] bg-[#a34162] text-white hover:bg-[#8f3454]"
      : "border-neutral-300 bg-white text-neutral-900 hover:border-[#ddb2bf] hover:bg-[#fdf9fb] hover:text-[#a34162]";

  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className={`${shared} ${styles} ${buttonSizes[size]}`}
    >
      {label}
    </a>
  );
}

export default function StoreButtons({
  appStoreHref,
  googlePlayHref,
  size = "md",
  stackedOnMobile = true,
}: StoreButtonsProps) {
  return (
    <div
      className={
        stackedOnMobile
          ? "flex w-full flex-col gap-3 sm:w-auto sm:flex-row"
          : "flex flex-wrap gap-2"
      }
    >
      <StoreLink
        href={appStoreHref}
        label="Last ned i App Store"
        variant="primary"
        size={size}
      />
      <StoreLink
        href={googlePlayHref}
        label="Få det på Google Play"
        variant="secondary"
        size={size}
      />
    </div>
  );
}
