import React from "react";
import { View, Text, Button, StyleSheet, TextInput } from "react-native";
import { globalStyles } from "../Styles/Global";
import { Formik, yupToFormErrors } from "formik";
import * as yup from "yup";
import FlatButton from "../Shared/Button";

const reviewSchema = yup.object({
  title: yup.string().required().min(4),
  body: yup.string().required().min(8),
  rating: yup
    .string()
    .required()
    .test("isNum1-5", "Rating must be a number (1-5)", (val) => {
      return parseInt(val) < 6 && parseInt(val) > 0;
    }),
});

export default function ReviewForm(props) {
  return (
    <View style={globalStyles.container}>
      <Formik
        initialValues={{ title: "", body: "", rating: "" }}
        onSubmit={(values, actions) => {
          actions.resetForm;
          props.addReview(values);
        }}
        validationSchema={reviewSchema}
      >
        {(props) => (
          <View>
            <TextInput
              style={globalStyles.input}
              placeholder="Review title"
              onChangeText={props.handleChange("title")}
              value={props.values.title}
              onBlur={props.handleBlur("title")}
            ></TextInput>
            <Text style={globalStyles.errorText}>
              {props.touched.title && props.errors.title}
            </Text>
            <TextInput
              multiline
              style={globalStyles.input}
              placeholder="Review body"
              onChangeText={props.handleChange("body")}
              value={props.values.body}
              onBlur={props.handleBlur("body")}
            ></TextInput>
            <Text style={globalStyles.errorText}>
              {props.touched.body && props.errors.body}
            </Text>
            <TextInput
              style={globalStyles.input}
              placeholder="Rating (1-5)"
              onChangeText={props.handleChange("rating")}
              value={props.values.rating}
              keyboardType="numeric"
              onBlur={props.handleBlur("rating")}
            ></TextInput>
            <Text style={globalStyles.errorText}>
              {props.touched.rating && props.errors.rating}
            </Text>

            <FlatButton text="Submit" onPress={props.handleSubmit} />
            {/* <Button
              title="Submit"
              color="maroon"
              onPress={props.handleSubmit}
            ></Button> */}
          </View>
        )}
      </Formik>
    </View>
  );
}
