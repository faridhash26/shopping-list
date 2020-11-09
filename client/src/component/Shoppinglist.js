import React ,{Component}  from 'react';

import {
    Container,
    ListGroup,
    ListGroupItem,
    Button
} from 'reactstrap';
import {
    CSSTransition,
    TransitionGroup
} from "react-transition-group"; 
import {v4 as uuidv4   }from 'uuid';

class ShoppingList extends Component{
    state={
        items:[
            {id:uuidv4() , name:'eggs'},
            {id:uuidv4() , name:'milk'},
            {id:uuidv4() , name:'steak'},
            {id:uuidv4() , name:'water'}
        ]
    }



    render(){
        const {items}=this.state;
        return(
            <Container>
                <Button
                color="dark"
                style={{marginBottom:'2rem'}}
                onClick={()=>{
                    const name=prompt('enter item');
                    if(name){
                        this.setState(state=>({
                            items:[...state.items , {id:uuidv4() , name}]
                        }))
                    }
                }}
                >add item</Button>
                <ListGroup>
                    <TransitionGroup className='shopping-List'>
                        {items.map(({ id, name }) => (
                            <CSSTransition key={id} timeout={300} classNames="fade">
                                
                                <ListGroupItem>
                                    <Button
                                        className="remove-btn"
                                        color='danger'
                                        size="sm"
                                        onClick={() => {
                                            this.setState(state => ({
                                                items: state.items.filter(item => item.id !== id)
                                            }));
                                        }}
                                    >
                                        &times;
                                    </Button>
                                    {name}
                                </ListGroupItem>
                            </CSSTransition>
                        ))}
                    </TransitionGroup>
                </ListGroup>
            </Container>
        );
    }
}
export default ShoppingList;