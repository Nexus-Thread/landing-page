import React from "react";
import Logo from "../../atoms/Logo";
import NavLink from "../../atoms/NavLink";

interface NavItem {
  label: string;
  href: string;
  badgeCount?: number;
}

const navItems: NavItem[] = [
  { label: "Our Services", href: "/services" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
];

const Header: React.FC = () => {
  return (
    <header
      className="header-container"
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        width: "100%",
        maxWidth: "1200px",
        margin: "0 auto",
        padding: "0 1rem",
      }}
    >
      <div className="header-left">
        <Logo />
      </div>
      <nav className="header-nav" style={{ display: "flex", gap: "1rem" }}>
        {navItems.map((item) => (
          <NavLink key={item.href} href={item.href}>
            {item.label}
          </NavLink>
        ))}
      </nav>
    </header>
  );
};

export default Header;
