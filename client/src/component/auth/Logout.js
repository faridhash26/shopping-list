import React ,{Component , Fragment} from 'react';
import {connect} from 'react-redux';
import { logout} from '../../actions/authActions';
import PropTypes from 'prop-types';
import {
    NavLink
} from 'reactstrap';



class Logout extends Component {
    static propTypes={
        logout : PropTypes.func.isRequired
    }

    render (){
        return(
            <Fragment>
                <NavLink onClick={this.props.logout} href="#">
                    logout
                </NavLink>
            </Fragment>
        )
    }
}
export default connect(
    null,
    {logout}
)  (Logout) ;