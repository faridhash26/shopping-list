import react  , {Component}from 'react';
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

class AppNavbar extends Component{
    constructor(props){
        super(props);
        this.state={
            isOpen:false
        }
    }
    toggle =()=>{
        this.setState({
            isOpen:!this.state.isOpen
        })
    }

    render(){
        return(
            <Navbar color="dark" dark expand="sm" className='mb-5'>
                <Container>
                    <NavbarBrand href="/">
                        shoppinglist
                    </NavbarBrand>
                    <NavbarToggler onClick={this.toggle}/>
                    <Collapse isOpen={this.state.isOpen} navbar>
                        <Nav className="ml-auto" navbar>
                            <NavItem>
                                <NavLink hred="#">farid</NavLink>
                            </NavItem>
                        </Nav>
                    </Collapse>
                </Container>
            </Navbar>
        )
    }
}
export default AppNavbar;