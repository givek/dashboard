import "./styles.css";

import React from "react";
import { ReactComponent as ChevronDown } from "../../icons/chevron-down.svg";

// export function NavItem(props) {
//   const [subMenuOpen, setSubMenuOpen] = React.useState(false);

//   const subMenuClass = subMenuOpen ? "sub-menu sub-menu-open" : "sub-menu";

//   return (
//     <li className="nav-item">
//       <a
//         className="nav-link"
//         href={`#${props.linkText}`}
//         onClick={() => setSubMenuOpen(~subMenuOpen)}
//       >
//         <div className="icon-container">{props.icon}</div>
//         <span className="link-text">{props.linkText}</span>
//         <div className="icon-container chevron">
//           <ChevronDown />
//         </div>
//       </a>
//       <ul className={subMenuClass}>
//         <li className="sub-item">
//           <a className="sub-link" href="#manage-all">
//             Manage all
//           </a>
//         </li>
//         <li className="sub-item">
//           <a className="sub-link" href="#track-new-accounts">
//             Track new accounts
//           </a>
//         </li>
//         <li className="sub-item">
//           <a className="sub-link" href="#bluk-import">
//             Bluk import
//           </a>
//         </li>
//       </ul>
//     </li>
//   );
// }

export function NavItem(props) {
  const [subMenuOpen, setSubMenuOpen] = React.useState(false);

  const subMenuClass = subMenuOpen ? "sub-menu sub-menu-open" : "sub-menu";

  return (
    <li className="nav-item">
      <a
        className="nav-link"
        href={`#${props.linkText}`}
        onClick={() => setSubMenuOpen(~subMenuOpen)}
      >
        <div className="icon-container">{props.icon}</div>
        <span className="link-text">{props.linkText}</span>

        {props.subMenu ? (
          <div className=" chevron">
            <ChevronDown />
          </div>
        ) : null}
      </a>

      {props.subMenu ? (
        <ul className={subMenuClass}>
          {props.subMenu.map((subMenuItem) => (
            <li key={subMenuItem} className="sub-item">
              <a className="sub-link" href="#manage-all">
                {subMenuItem}
              </a>
            </li>
          ))}
        </ul>
      ) : null}
    </li>
  );
}
