import React  , {Component}from 'react';
import {
    Button, 
    Modal,
     ModalHeader, 
     ModalBody, 
     ModalFooter ,
    Form, 
    FormGroup, 
    Label, 
    Input, 
    FormText,
    NavLink,
    Alert
} from 'reactstrap';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import { register} from '../../actions/authActions';
import {clearErros} from '../../actions/errorActions';

 
class RegisterModal extends Component{
    state = {
        modal: false,
        name: '',
        email: '',
        password: '',
        msg: null
    }
    static propTypes = {
        isAuthenticated: PropTypes.bool,
        error: PropTypes.object.isRequired,
        register: PropTypes.func.isRequired,
        clearErros : PropTypes.func.isRequired
    }
    componentDidUpdate (prevprop){
        const {error , isAuthenticated} =this.props;
        if(error !=prevprop.error){
            // checl for register error
            if(error.id === 'REGISTER_FAIL'){
                this.setState({msg : error.msg.msg});
            }else{
                this.setState({
                    msg : null
                })
            }
        }
        // if auth close modal
        if(this.state.modal){
            if(isAuthenticated){
                this.toggle();
            }
        }
    }

    toggle = () => {
        // clear errors
        this.props.clearErros();
        this.setState({
            modal: !this.state.modal
        });
    }
    onChange = (e) => {
        this.setState({
            [e.target.name] : e.target.value
        })
    }


    onSubmit = (e) =>{
        e.preventDefault();

        const { name , email , password } = this .state;

        // create user object 
        const newUser = {
            name,
            email,
            password
        };
        // attempt to register
        this.props.register(newUser);
    }

    render(){
        return(
            <div>
                <NavLink onClick={this.toggle} href="#">
                    Register
                </NavLink>
                <Modal isOpen={this.state.modal} toggle={this.toggle}> 
                    <ModalHeader toggle={this.toggle}>
                        Register 
                    </ModalHeader>
                    <ModalBody>
                        {this.state.msg ? (<Alert color="danger">{ this.state.msg} </Alert>) : null}
                        <Form onSubmit={this.onSubmit}>
                            <FormGroup>
                                <Label for="name">name</Label>
                                <Input type="text" name="name" id="name" placeholder="name " className="mb-3"
                                    onChange={this.onChange}
                                />

                                <Label for="email">email</Label>
                                <Input type="email" name="email" id="email" placeholder="email " className="mb-3"
                                    onChange={this.onChange}
                                />

                                <Label for="password">name</Label>
                                <Input type="password" name="password" id="password" placeholder="password " className="mb-3"
                                    onChange={this.onChange}
                                />
                                <Button
                                color="dark"
                                style={{marginTop:'2rem'}}
                                block
                                >register</Button>
                            </FormGroup>
                        </Form>
                    </ModalBody>
                </Modal>
            </div>
        );
    }
}


const mapStateToprops = state=>({
    isAuthenticated : state.auth.isAuthenticated,
    error : state.error
});
export default connect(
   mapStateToprops ,
    {
        register,
        clearErros
    }
)(RegisterModal);
