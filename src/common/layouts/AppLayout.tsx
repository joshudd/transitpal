import { User } from "firebase/auth";
import type { NextPage } from "next";
import Header from "../components/Header";
interface AppLayoutProps {
  children: React.ReactNode;
  user: User;
  signOut: () => void;
}
const AppLayout: NextPage<AppLayoutProps> = ({ children, user, signOut }) => {
  return (
    <main className="flex min-h-screen flex-col justify-between">
      <Header user={user} signOut={signOut} />
      {children}
    </main>
  );
};
export default AppLayout;
