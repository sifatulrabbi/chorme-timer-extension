import React from "react";

interface Props {
  tab: number;
  setTab: (value: number) => void;
}

function Header({ tab, setTab }: Props) {
  function setDashboard() {
    setTab(0);
  }

  function setProjects() {
    setTab(1);
  }

  return (
    <header className="header">
      <ul className="header-nav">
        <li>
          <button
            className={`header-nav-btn ${tab === 0 ? "active" : ""}`}
            onClick={setDashboard}
          >
            Dashboard
          </button>
        </li>
        <li>
          <button
            className={`header-nav-btn ${tab === 1 ? "active" : ""}`}
            onClick={setProjects}
          >
            Projects
          </button>
        </li>
      </ul>
    </header>
  );
}

export default Header;
