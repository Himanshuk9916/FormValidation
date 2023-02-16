import React, { useState, useRef } from 'react';
import {
  View,
  StyleSheet,
  Dimensions,
  Button,
} from 'react-native';
import { Formik } from 'formik';
import * as Yup from 'yup';
import InputText from '../components/InputText';

const screenWidth = Dimensions.get('window').width;

function FormValidation() {
  const userInfo = {
    name: '',
    email: '',
    birthday:'',
    password: '',
    confirmPassword:''
  };

  const validate = Yup.object({
    name: Yup.string()
      .trim()
      .min(3, 'Name should contain atleast 3 digits')
      .max(50,"Name cant exceed 50 digits")
      .required('This Field is required'),
    email: Yup.string().email('Invalid Email').required('Email is required'),
    birthday:Yup.string().trim()
    .matches(/^(0?[1-9]|[12][0-9]|3[01])[\/\-](0?[1-9]|1[012])[\/\-]\d{4}$/,'Enter valid Date')
    .required('This Filed is Required'),
    password: Yup.string()
      .trim()
      .min(8, 'Password in too short')
      .matches(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/,
        "Must Contain atleast 8 Characters, One Uppercase, One Lowercase, One Number and one Character"
      )
      .required('This field is required'),
    confirmPassword: Yup.string().oneOf(
      [Yup.ref('password'), null],
      'Password does not match',
    ).required('This field is required'),
  });
  return (
    <Formik initialValues={userInfo}
    validationSchema={validate}
      onSubmit={values => console.log(values)}>
      {({ handleChange, handleBlur, handleSubmit, values,errors,touched }) =>{
        return( 
        <View>
          <InputText
            onChangeText={handleChange('name')}
            error={touched.name && errors.name}
            value={values.name}
            placeholder="Name"
            label="Name"
            onBlur={handleBlur('name')}
          />
          <InputText
            onChangeText={handleChange('email')}
            error={touched.email && errors.email}
            onBlur={handleBlur('email')}
            value={values.email}
            placeholder="Email"
            label="Email"
          />
          <InputText
            onChangeText={handleChange('birthday')}
            error={touched.birthday && errors.birthday}
            onBlur={handleBlur('birthday')}
            value={values.birthday}
            placeholder="Birthday"
            label="Birthday"
          />
          <InputText
            onChangeText={handleChange('password')}
            error={touched.password && errors.password}
            onBlur={handleBlur('password')}
            value={values.password}
            placeholder="Password"
            label="Password"
          />
          <InputText
            onChangeText={handleChange('confirmPassword')}
            error={touched.confirmPassword && errors.confirmPassword}
            onBlur={handleBlur('confirmPassword')}
            value={values.confirmPassword}
            placeholder="Confirm Password"
            label="Confirm Password"
          />
          <Button title='Press' onPress={handleSubmit} />
        </View>
        )
      }}
    </Formik>
  );
}

const styles = StyleSheet.create({
  textIp: {
    borderColor: 'black',
    borderWidth: 1,
    width: screenWidth - 50,
    borderRadius: 30,
    marginVertical: 20,
  },
  container: {
    alignItems: 'center',
    flex: 1,
  },
  submitButton: {
    borderWidth: 1,
    backgroundColor: 'black',
    borderRadius: 30,
  },
  submitText: {
    fontSize: 20,
    paddingVertical: 15,
    paddingHorizontal: 140,
    color: 'white',
  },
});

export default FormValidation;
