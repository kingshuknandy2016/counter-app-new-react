import React, { Component } from "react";

// Stateless Functional Component
// We pass the Props to Sateless Functional Component
// Or we can pass the Destructured Values from Props
const Navbar = ({ totalCounter }) => {
  console.log("NavBar - Rendered");
  return (
    <nav className="navbar bg-light">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          Navbar{" "}
          <span className="badge badge-pill badge-secondary">
            {totalCounter}
          </span>
        </a>
      </div>
    </nav>
  );
};

// Class Component
// class Navbar extends Component {
//   render() {
//     return (
//       <nav className="navbar bg-light">
//         <div className="container-fluid">
//           <a className="navbar-brand" href="#">
//             Navbar{" "}
//             <span className="badge badge-pill badge-secondary">
//               {this.props.totalCounter}
//             </span>
//           </a>
//         </div>
//       </nav>
//     );
//   }
// }

export default Navbar;
