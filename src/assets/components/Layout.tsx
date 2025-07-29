import type { ReactNode } from "react";
import NavigationBar from "./ui/NavigationBar";

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="min-h-screen flex flex-col w-full">
      {/* NavigationBar */}
      <NavigationBar />

      {/* main content body here!! */}
      <main className="flex-grow w-full">{children}</main>
    </div>
  );
};

export default Layout;
