import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import LogoutIcon from '@mui/icons-material/Logout';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { Dropdown } from 'react-bootstrap';

function NavigationBar() {
  const handleLogout = () => {
    localStorage.removeItem("id")
    localStorage.removeItem("username")
    localStorage.removeItem("email")
    localStorage.removeItem("isAdmin")
  }
  return (
    <Navbar collapseOnSelect expand="lg" style={{ background: "linear-gradient(90deg, rgba(174,238,177,1) 0%, rgba(148,187,233,1) 100%)", position: "sticky" }} >
      <Navbar.Brand href="/">
        <img src='logo.png' style={{ width: "40px", marginLeft: "70%" }}></img>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="me-auto" style={{ marginLeft: "2%" }}>
          <Nav.Link href="/fields" style={{ fontWeight: "bold" }}>Fields</Nav.Link>
          <Nav.Link href="/locations" style={{ fontWeight: "bold" }}>Locations</Nav.Link>
        </Nav>
        {
          localStorage.getItem("id") !== null ? (
            <Nav style={{ marginRight: "1%" }}>
              {
                localStorage.getItem("isAdmin") === "false" ? (
                  <Dropdown align="end" variant="light" >
                    <div style={{ display: "inline-flex" }}>
                      <Nav.Link>
                        <AccountCircleIcon />
                      </Nav.Link>
                      <Dropdown.Toggle id="dropdown-user" style={{ border: "none", background: "transparent", color: "gray", marginLeft: "-1em" }}>
                      </Dropdown.Toggle>
                      
                    </div>
                    <Dropdown.Menu>
                      <Dropdown.Item href="/user">Change password</Dropdown.Item>
                      <Dropdown.Item href="/reservations">My reservations</Dropdown.Item>
                      <Dropdown.Item href="/subscriptions">My subscriptions</Dropdown.Item>
                      <Dropdown.Item href="/requests">My requests</Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>

                ) : (
                  <div></div>
                )
              }
              <Nav.Link href="/" style={{ fontWeight: "bold" }} onClick={handleLogout}>
                <LogoutIcon />
              </Nav.Link>
            </Nav>
          ) : (
            <Nav style={{ marginRight: "1%" }}>
              <Nav.Link href="/login" style={{ fontWeight: "bold" }}>Login</Nav.Link>
              <Nav.Link href="/register" style={{ fontWeight: "bold" }}>Register</Nav.Link>
            </Nav>
          )
        }

      </Navbar.Collapse>
    </Navbar>
  );
}

export default NavigationBar;