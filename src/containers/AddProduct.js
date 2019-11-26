import React, { useState } from 'react'
import { connect } from 'react-redux'
import { add } from '../actions/actionCreator'
import {bindActionCreators} from 'redux'
import swal from 'sweetalert';
import { Field, reduxForm } from 'redux-form'

const AddProduct = props => {

    const [ image, setImage ] = useState('');

    const submitForm = (values) => {
        if(image!=""){
            values.image = image
        }
        props.add(values)
        props.reset()
        setImage('')
        swal("Great", "Product added successfully!", "success");
    }

    const renderFileInput = ({ input, type }) => {
        const { mimeType } = props;
        return (
            <div>
            <input
              name={input.name}
              type={type}
              accept={mimeType}
              onChange={event => handleChange(event, input)}
            />
            </div>
        );
    };

    const handleChange = (event, input) => {
        event.preventDefault();
        let imageFile = event.target.files[0];
        if (imageFile) {
            var FR= new FileReader();
            FR.addEventListener("load", function(e) {
                setImage(e.target.result);
            });
            FR.readAsDataURL( imageFile );
        }
    };

    const { handleSubmit, pristine, reset, submitting } = props
    return (
        <div>
            <form onSubmit={handleSubmit(submitForm)} className="col-sm-10">
            <div className="form-group">
                <label>Product Name</label>
                <div>
                <Field
                    name="productName"
                    component="input"
                    type="text"
                    placeholder="Product Name"
                    className="form-control" 
                />
                </div>
            </div>
            <div className="form-group">
                <label>Product Category</label>
                <div>
                <Field
                    name="productCategory"
                    component="input"
                    type="text"
                    placeholder="Product Category"
                    className="form-control"
                />
                </div>
            </div>
            <div className="form-group">
                <label>Price</label>
                <div>
                <Field
                    name="price"
                    component="input"
                    type="number"
                    placeholder="Price"
                    className="form-control"
                />
                </div>
            </div>
            <div className="form-group">
                <label>Product Image</label>
                <div>
                <Field
                      name="image"
                      type="file"
                      component={renderFileInput}
                      className="form-control-file"
                    />
                </div>
            </div>
            <div className="form-group">
                <button type="submit" className="btn btn-primary mr-3" disabled={pristine || submitting}>
                Submit
                </button>
                <button type="button" className="btn btn-danger" disabled={pristine || submitting} onClick={reset}>
                Clear Values
                </button>
            </div>
            </form>
        </div>
    )
}

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({
        add
    }, dispatch)
}

export default connect(null, mapDispatchToProps)(reduxForm({form: 'addPrduct'})(AddProduct))