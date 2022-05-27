import { ReactChild } from "react";
import MainNavigation from "./MainNavigation";

interface LayoutProps {
  children: ReactChild;
}

const Layout: React.FC<LayoutProps> = ({ children }) => (
  <div>
    <MainNavigation />
    <main>{children}</main>
  </div>
);

export default Layout;
