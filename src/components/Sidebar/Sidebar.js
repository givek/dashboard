import "./styles.css";

import { ReactComponent as Logo } from "../../B2Brain.svg";
import { ReactComponent as HomeIcon } from "../../icons/home.svg";
import { ReactComponent as StartIcon } from "../../icons/star.svg";
import { ReactComponent as UserIcon } from "../../icons/user.svg";
import { ReactComponent as BuildingIcon } from "../../icons/building.svg";
import { ReactComponent as CogIcon } from "../../icons/cog.svg";
import { ReactComponent as LinkIcon } from "../../icons/link.svg";
import { ReactComponent as TeamIcon } from "../../icons/users.svg";
import { ReactComponent as AltIcon } from "../../icons/comments-alt.svg";

import { NavItem } from "../NavItem";

const accountsSubMenu = ["Manage all", "Track new accounts", "Bluk imports"];
const preferencesSubMenu = [
  "Product Focus",
  "Intel Preferences",
  "Lead Persona",
];

export function Sidebar() {
  return (
    <div className="sidebar">
      <header className="logo-container">
        <Logo />
        <h1 className="brand-name">B2Brain</h1>
      </header>
      <nav className="navbar sidebar-nav">
        <ul className="navbar-nav">
          <NavItem icon={<HomeIcon />} linkText="Dashboard" />
          <NavItem icon={<StartIcon />} linkText="Intels" />
          <NavItem icon={<UserIcon />} linkText="Leads" />
          <NavItem
            icon={<BuildingIcon />}
            linkText="Accounts"
            subMenu={accountsSubMenu}
          />
          <NavItem
            icon={<CogIcon />}
            linkText="Preferences"
            subMenu={preferencesSubMenu}
          />
          <NavItem icon={<LinkIcon />} linkText="Integrations" />
          <NavItem icon={<TeamIcon />} linkText="Team" />
          <NavItem icon={<AltIcon />} linkText="Help / Support" />
        </ul>
      </nav>
    </div>
  );
}
