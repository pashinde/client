import React from "react";
import { Field, formValues, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import { createStream } from '../../actions';

class StreamCreate extends React.Component {
    renderError({error, touched}) {
        
        if (error && touched) {
            return (
                <div className="ui error message">
                    <div className="header">{error}</div>
                </div>
            );
        }
    }

    renderInput = ({input, label, meta}) => {
        const className = `field ${meta.error && meta.touched ? 'error' : ''}`;

        return (
            <div className={className}>
                <label>{label}</label>
                <input {...input} autoComplete="off" />
                {this.renderError(meta)}
            </div>
        );
    }

<<<<<<< HEAD
    onSubmit = (formValues) => {
       this.props.createStream(formValues);
=======
    onSubmit (formValues) {
        console.log(formValues)
>>>>>>> 74100247a2ce6e6cb4120942fc360f6f3f6b1d13
    }

    render () {
        return (
            <form onSubmit={this.props.handleSubmit(this.onSubmit)} className="ui form error">
                <Field name="title" component={this.renderInput} label="Enter Name" />
                <Field name="description" component={this.renderInput} label="Enter Description" />
                <button className="ui button primary">Submit</button>
            </form>
        );
    };
}

const validate = (formValues) => {
    const errors = {};

    if (!formValues.title) {
        errors.title = 'You must enter title';
    }

    if (!formValues.description) {
        errors.description = 'You must enter description';
    }

    return errors;
};

<<<<<<< HEAD
const formWrapped =  reduxForm({
    form: 'streamCreate',
    validate
})(StreamCreate);

export default connect(null, { createStream })(formWrapped);
=======
export default reduxForm({
    form: 'streamCreate',
    validate
})(StreamCreate);
>>>>>>> 74100247a2ce6e6cb4120942fc360f6f3f6b1d13
