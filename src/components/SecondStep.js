import React from 'react';
import { useForm } from 'react-hook-form';
import { Form, Button, FormControl } from 'react-bootstrap';
import { motion } from 'framer-motion';
// import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';
import Dropper from './Dropper';
import Radio_box from './Radio_box';
import Uploading from './Uploading';

const SecondStep = (props) => {
  const { user } = props;
  const { register, handleSubmit, errors } = useForm({
    defaultValues: {
      user_email: user.user_email,
      user_password: user.user_password
    }
  });

  const onSubmit = (data) => {
    props.updateUser(data);
    props.history.push('/third');
  };
  
 

  return (
    <Form className="input-form" onSubmit={handleSubmit(onSubmit)}>
      <motion.div
        className="col-md-6 offset-md-3"
        initial={{ x: '-100vw' }}
        animate={{ x: 0 }}
        transition={{ stiffness: 150 }}
      >
        <Form.Group controlId="first_name">
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="email"
            name="user_email"
            placeholder="Enter your email address"
            autoComplete="off"
            ref={register({
              required: 'Email is required.',
              pattern: {
                value: /^[^@ ]+@[^@ ]+\.[^@ .]{2,}$/,
                message: 'Email is not valid.'
              }
            })}
            className={`${errors.user_email ? 'input-error' : ''}`}
          />
          {errors.user_email && (
            <p className="errorMsg">{errors.user_email.message}</p>
          )}
        </Form.Group>

      


        <Radio_box/>
        {/* <Dropdown options={options} onChange={this._onSelect} value={defaultOption} placeholder="Select an option" />; */}
      
        <div>
      <Dropper/>
</div>
      <div>
      <Uploading/>
</div>

        <Button variant="primary" type="submit">
          Next
        </Button>
      </motion.div>
    </Form>
  );
};


export default SecondStep;

