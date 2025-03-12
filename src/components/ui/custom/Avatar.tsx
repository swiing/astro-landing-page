// https://github.com/shadcn-ui/ui/issues/987#issuecomment-1913143431

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

// Doesn't work well with Astro unless we use all the components together in React.
export const AvatarComponent: React.FC<{
  src: string;
  alt: string;
  fallbackText: string;
  className?: string;
}> = ({ src, alt, fallbackText, className }) => {
  return (
    <Avatar className={className}>
      <AvatarImage src={src} alt={alt} />
      <AvatarFallback>{fallbackText}</AvatarFallback>
    </Avatar>
  );
};