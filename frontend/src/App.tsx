import HomePage from "./home/HomePage";
import StorePage from "./store/StorePage";
import MarketPage from "./market/MarketPage";
import WalletPage from "./wallet/WalletPage";
import SettingsPage from "./settings/SettingsPage";
import { ThemeProvider } from "./ThemeProvider";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import "./App.css";

function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <div id="App">
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/store" element={<StorePage />} />
            <Route path="/market" element={<MarketPage />} />
            <Route path="/wallet" element={<WalletPage />} />
            <Route path="/settings" element={<SettingsPage />} />
          </Routes>
        </Router>
      </div>
    </ThemeProvider>
  );
}

export default App;

const pageMap: { label: string; path: string }[] = [
  { label: "Home", path: "/" },
  { label: "Store", path: "/store" },
  { label: "Market", path: "/market" },
  { label: "Wallet", path: "/wallet" },
  { label: "Settings", path: "/settings" },
];

const Navbar = () => {
  return (
    <nav>
      {pageMap.map((e) => (
        <NavLink {...e} />
      ))}
    </nav>
  );
};

import { Button } from "@/components/ui/button";
import { Sidebar } from "lucide-react";

const NavLink = (props: { label: string; path: string }) => {
  return (
    <Link to={props.path}>
      <Button>{props.label}</Button>
    </Link>
  );
};

const SideBarItem = (props: {
  icon: React.ReactNode;
  text: string;
  active: boolean;
  alert: boolean;
}) => {
  return <div></div>;
};

const x = (
  <SideBarItem
    icon={<div></div>}
    text=""
    active={false}
    alert={true}
  ></SideBarItem>
);
