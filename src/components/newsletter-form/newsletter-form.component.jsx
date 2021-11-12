import React, { useState } from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import api from '../../utils/api.utils';
import { TEXT, SUBMIT, NAME, EMAIL } from '../../utils/constants.utils';
import CustomButton from '../custom-button/custom-button.component';
import FormInput from '../form-input/form-input.component';

const FORM_INITIAL_STATE = {
  name: {
    name: NAME,
    value: '',
  },
  email: {
    name: EMAIL,
    value: '',
  },
};

const INPUTS = [
  { name: NAME, placeholder: 'Your name' },
  { name: EMAIL, placeholder: 'Your email' },
];

const toasterOptions = {
  position: 'top-center',
};

const NewsletterForm = () => {
  const [formState, setFormState] = useState(FORM_INITIAL_STATE);
  const [loading, setLoading] = useState(false);

  const handleFormSubmit = (event) => {
    event.preventDefault();

    setLoading(true);
    const {
      name: { value: name },
      email: { value: email },
    } = formState;

    api
      .subscribeToNewsletter({ name, email })
      .then((response) => {
        if (response?.detail === 'Ok.') {
          toast.success(
            'Successfully subscribed to newsletter!',
            toasterOptions
          );
        } else {
          const errorMessage = `Error: ${Object.keys(response)[0]} - ${
            Object.values(response)[0]
          }`;
          throw new Error(errorMessage);
        }
      })
      .catch((error) => {
        toast.error(error.message, toasterOptions);
      })
      .finally(() => setLoading(false));
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormState({
      ...formState,
      [name]: {
        ...formState[name],
        value: value,
      },
    });
  };

  return (
    <form onSubmit={handleFormSubmit}>
      {INPUTS.map(({ name, placeholder }, index) => (
        <FormInput
          key={name}
          id={index}
          name={name}
          type={TEXT}
          placeholder={placeholder}
          onChange={handleInputChange}
        />
      ))}
      <CustomButton type={SUBMIT} loading={loading}>
        Send
      </CustomButton>
    </form>
  );
};

export default NewsletterForm;
