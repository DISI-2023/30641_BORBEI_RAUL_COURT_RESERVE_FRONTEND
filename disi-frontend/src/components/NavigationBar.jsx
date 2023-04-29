import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import LogoutIcon from '@mui/icons-material/Logout';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

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
                  <Nav.Link href="/user">
                    <AccountCircleIcon />
                  </Nav.Link>
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