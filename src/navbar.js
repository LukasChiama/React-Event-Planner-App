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
import FormModal from './openForm'

export default class NaviGate extends React.Component {
  state = {
    isOpen: false,
    isFormModalOpen: false
  }

  toggle = () => {
    this.setState = ({
      isOpen: !this.state.isOpen
    })
  };

  openFormModal = () => this.setState(({ isFormModalOpen }) => ({ isFormModalOpen: !isFormModalOpen }))


  render() {
    return (
      <div className='container-fluid bg-dark'>
        <Navbar color='dark' dark expand className='container-fluid'>
          <NavbarBrand href='/'>I-Events</NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className='ml-auto'>
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
              <UncontrolledDropdown nav>
                <DropdownToggle nav caret>
                  Events Handle
                </DropdownToggle>
                <DropdownMenu right className='bg-primary'>
                  <DropdownItem>
                    Upcoming Events
                  </DropdownItem>
                  <DropdownItem onClick={this.openFormModal}>
                    Add New
                  </DropdownItem>
                  <DropdownItem divider />
                  <DropdownItem className='bg-danger'>
                    Delete All
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
              <FormModal
                isOpen={this.state.isFormModalOpen}
                onClose={this.openFormModal}
                values={this.props.values}
                handleOnChange={this.props.handleOnChange}
                handleOnSubmit={this.props.handleOnSubmit}
              />
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}