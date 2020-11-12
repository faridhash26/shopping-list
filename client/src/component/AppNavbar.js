import react  , {Component ,Fragment}from 'react';
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
    DropdownItem,
    NavbarText,
    Container
}from 'reactstrap';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';

import RegisterModal from './auth/RegisterModal';
import LoginModal from './auth/LoginModal';
import LogOut from './auth/Logout';




class AppNavbar extends Component{
    constructor(props){
        super(props);
        this.state={
            isOpen:false
        }
    }

    static propType = {
        auth :PropTypes.object.isRequired
    }

    toggle =()=>{
        this.setState({
            isOpen:!this.state.isOpen
        })
    }

    render(){
        const { isAuthenticated , user} = this.props.auth;

        const authLinks = (
            <Fragment>
                <NavItem>
                    <span className="navbar-text mr-3">
                        <strong>{user ? `welcome ${user.name}` : ''}</strong>
                    </span>
                </NavItem>
                <NavItem>
                    <LogOut />
                </NavItem>
            </Fragment>
        )
        const guestLinks = (
            <Fragment>
                <NavItem>
                    <RegisterModal />
                </NavItem>
                <NavItem>
                    <LoginModal />
                </NavItem>
            </Fragment>
        )
        return(
            <Navbar color="dark" dark expand="sm" className='mb-5'>
                <Container>
                    <NavbarBrand href="/">
                        shoppinglist
                    </NavbarBrand>
                    <NavbarToggler onClick={this.toggle}/>
                    <Collapse isOpen={this.state.isOpen} navbar>
                        <Nav className="ml-auto" navbar>
                            {isAuthenticated ? authLinks : guestLinks}
                        </Nav>
                    </Collapse>
                </Container>
            </Navbar>
        )
    }
}

const mapstatetoprops = state =>({
    auth : state.auth
});

export default connect(
    mapstatetoprops,
)(AppNavbar);