import _ from 'lodash';
import React from "react";
import { connect } from "react-redux";
import { formValues } from "redux-form";
import { fetchStream, editStream } from "../../actions";
import StreamForm from "./StreamForm";

class StreamEdit extends React.Component {

    componentDidMount() {
        this.props.fetchStream(this.props.match.params.id);
    };

    onSubmit = formValues => {
        //console.log(formValues)
        this.props.editStream(this.props.match.params.id, formValues);
    };

    render() {
        // console.log(this.props);

        if (!(this.props.stream)) {
            return <div>Loading...</div>;
        }
        return (
            <div>
                <h3>Edit a Stream</h3>
                {/* initial values will map to Field comp
                <StreamForm initialValues={{title: this.props.stream.title, description: this.props.stream.description}} onSubmit={this.onSubmit} /> */}
                <StreamForm initialValues={_.pick(this.props.stream,'title','description')} onSubmit={this.onSubmit} />
            </div>);
    }
}

//ownProps belongs to the state of this component
const mapStateToProps = (state, ownProps) => {
    //console.log(ownProps)
    return { stream: state.streams[ownProps.match.params.id] };
}

export default connect(mapStateToProps, { fetchStream, editStream })(StreamEdit);