import { createLink } from "@tanstack/react-router";
import React from "react";
import { NavigationMenuLink } from "./ui/navigation-menu";
import type { LinkComponent } from "@tanstack/react-router";

const BasicLinkComponent = React.forwardRef<
  React.ElementRef<typeof NavigationMenuLink>,
  React.ComponentPropsWithoutRef<typeof NavigationMenuLink>
>(({ children, ...props }, ref) => {
  return (
    <NavigationMenuLink {...props} ref={ref}>
      {children}
    </NavigationMenuLink>
  );
});

BasicLinkComponent.displayName = NavigationMenuLink.displayName;

const CreatedLinkComponent = createLink(BasicLinkComponent);

export const CustomLink: LinkComponent<typeof BasicLinkComponent> = (props) => {
  return <CreatedLinkComponent {...props} />;
};
