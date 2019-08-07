import { connect } from 'react-redux'
import Link from '../components/Link'
import { setVisibilityFilter } from '../action'


function mapStateToProps(state, ownProps) {
    return {
        activce: ownProps.filter === state.visibilityFilter
    }
}

function mapDispatchToProps(dispatch, ownProps) {
    return {
        onClick: () => {
            dispatch(setVisibilityFilter(ownProps.filter))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Link);