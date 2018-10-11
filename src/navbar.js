import React from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from 'reactstrap';

export default class NaviGate extends React.Component {
  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState = ({
      isOpen: !this.state.isOpen
    })
  };

  render() {
    return (
      <div>
        <Navbar color='light' light expand='md'>
          <NavbarBrand href='/'>I-Events</NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className='ml-auto' navbar>
              <NavItem>
                <NavLink href='/home'>Home</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href='https:www.github.com/lukaschiama'>GitHub</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href='/clients'>Clients</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href='/gallery'>Gallery</NavLink>
              </NavItem>
              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>
                  Events Handle
                </DropdownToggle>
                <DropdownMenu left>
                  <DropdownItem>
                    Upcoming Events
                  </DropdownItem>
                  <DropdownItem>
                    Add New
                  </DropdownItem>
                  <DropdownItem divider />
                  <DropdownItem>
                    Delete All
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}