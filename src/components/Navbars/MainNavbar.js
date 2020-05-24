import React from 'react'
import { Link, withRouter } from 'react-router-dom'
//import { HashLink } from 'react-router-hash-link';

import Headroom from 'headroom.js'
// reactstrap components
import {
  UncontrolledCollapse,
  DropdownMenu,
  DropdownItem,
  DropdownToggle,
  UncontrolledDropdown,
  NavbarText,
  NavbarBrand,
  Navbar,
  NavItem,
  NavLink,
  Nav,
  Container,
  Collapse,
  Row,
  Col,
  // UncontrolledTooltip,
  Button,
} from 'reactstrap'

const DONATE_URL = 'https://ecrt.ethiopiatrustfund.org/'
//const SINGUP_FORM_URL =
//'https://docs.google.com/forms/d/e/1FAIpQLSdYEaHBgkJpolgbrD3Y8ESbiDsx-WPY-S1j6hcNaq2KCthIBA/viewform';

const BLOG_POST_URL = ' https://medium.com/@ethiocovid19RT'
const PRESS_RELEASE = [
  {
    name: 'May 8th 2020',
    link:
      'https://drive.google.com/file/d/1fFUO3d1D9iUx79HON2-ZSGmFh7zc_RCu/view?usp=sharing',
  },
]

const PressReleases = PRESS_RELEASE.map((item) => {
  return <DropdownItem href={item.link}>{item.name}</DropdownItem>
})

class MainNavbar extends React.Component {
  componentDidMount() {
    let headroom = new Headroom(document.getElementById('navbar-main'))

    headroom.init()
  }
  state = {
    collapseClasses: '',
    collapseOpen: false,
  }

  onExiting = () => {
    this.setState({
      collapseClasses: 'collapsing-out',
    })
  }

  onExited = () => {
    this.setState({
      collapseClasses: '',
    })
  }

  render() {
    const { language } = this.props

    return (
      <>
        <header className="header-global">
          <Navbar
            className="navbar-main navbar-transparent navbar-light headroom"
            expand="sm"
            id="navbar-main"
          >
            <Nav className="mr-auto" navbar></Nav>
            <NavbarText>
              {language === 'english' ? (
                <a href="/am">ቋንቋ: 🇪🇹በአማርኛ</a>
              ) : (
                <a href="/">Language: 🇺🇸English</a>
              )}
            </NavbarText>
          </Navbar>
        </header>
      </>
    )
  }
}

export default withRouter(MainNavbar)
