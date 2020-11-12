import React  , {Component}from 'react';
import {
    Button, Modal, ModalHeader, ModalBody, ModalFooter ,
    Form, FormGroup, Label, Input, FormText
} from 'reactstrap';
import {connect} from 'react-redux';
import {addItem } from '../actions/itemActions';

import PropType from 'prop-types';
 
class ItemModal extends Component{
    state={
        modal:false,
        name:''
    };

    static propTypes ={
        isAuthenticated : PropType.bool
    }

    toggle = () =>{
        this.setState({
            modal:!this.state.modal
        });
    }
    onChange = (e) =>{
        this.setState({
            [e.target.name] : e.target.value
        })
    }


    onSubmit = (e) =>{
        e.preventDefault();
        const newItem = {
            name:this.state.name
        }

        this.props.addItem(newItem);

        this.toggle();
    }

    render(){
        return(
            <div>
                {this.props.isAuthenticated ? (
                <Button
                    color="dark"
                    style={{ marginBottom: '2rem' }}
                    onClick={this.toggle}
                >add item
                </Button>
                ) : (
                     <h4 className="mb-3 ml-4">please log in to manage item</h4>
                )}
                
                <Modal isOpen={this.state.modal} toggle={this.toggle}> 
                    <ModalHeader toggle={this.toggle}>
                        add to shopping list 
                    </ModalHeader>
                    <ModalBody>
                        <Form onSubmit={this.onSubmit}>
                            <FormGroup>
                                <Label for="item">Item</Label>
                                <Input type="text" name="name" id="item" placeholder="addshopping item"
                                    onChange={this.onChange}
                                />
                                <Button
                                color="dark"
                                style={{marginTop:'2rem'}}
                                block
                                >add item</Button>
                            </FormGroup>
                        </Form>
                    </ModalBody>
                </Modal>
            </div>
        );
    }
}


const mapStateToprops = state=>({
    item:state.item,
    isAuthenticated : state.auth.isAuthenticated
})
export default connect(
   mapStateToprops ,
    {
        addItem
    }
)(ItemModal);
