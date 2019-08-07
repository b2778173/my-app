import React from "react";

export default class Test extends React.Component {
  
    componentDidMount() {
        console.log(this.props);
    }
    componentWillReceiveProps(props) {
        console.log(props);

    }
    render() {
        return (
            <div>
                test
                {/* {this.props} */}
            </div>
        )
    }

}