import { CustomLink } from "./link";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";

const MainMenu = () => {
  return (
    <div className="container mx-auto py-4">
      <NavigationMenu>
        <NavigationMenuList>
          <NavigationMenuItem>
            <CustomLink className={navigationMenuTriggerStyle()} to="/">
              Home
            </CustomLink>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <CustomLink className={navigationMenuTriggerStyle()} to="/docs">
              Documentation
            </CustomLink>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    </div>
  );
};
export default MainMenu;
