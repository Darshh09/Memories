import React, { useState } from "react";
import {
  FormControl,
  FormLabel,
  Input,
  VStack,
  FormHelperText,
  Textarea,
  Button,
} from "@chakra-ui/react";
import FileBase64 from "react-file-base64";
import {Formik , Form , Field}from "formik";
import { useCreatePostMutation } from "../features/api";
// import {useDispatch} from 'react-redux'
// import { getPosts } from "../features/posts/postSlice";

const Forms = () => {
  const [postData, setPostData] = useState({
    creator: "",
    title: "",
    message: "",
    tags: "",
    selectedFile: "",
  });
  const [isSubmitting, setisSubmitting] = useState(false);

  const [initialValues, setInitialValues] = useState({
    creator: "",
    title: "",
    message: "",
    tags: "",
    selectedFile: "",
  })

  const [createPost, { data, error }] = useCreatePostMutation();

  // const dispatch = useDispatch()

  const handleSubmit = (values) => {
    values['selectedFile'] = postData.selectedFile;
    console.log("submitting",values);
    // dispatch(getPosts(values))
    createPost(values).unwrap();
  }

  return (
    <VStack marginTop={10} gap={2} bg = {'white'} padding = {5}>
      <Formik initialValues={initialValues} onSubmit = {handleSubmit}>
       {({getFieldProps,values,errors, handleChange}) => (
          <Form>
          <FormControl isRequired>
          <FormLabel>Creator</FormLabel>
          <Field as = {Input}
            name="creator"
           
          />
        </FormControl>
        <FormControl isRequired>
          <FormLabel>Title</FormLabel>
          <Field as = {Input}
            name="title"
           
          />
        </FormControl>
        <FormControl isRequired>
          <FormLabel>Message</FormLabel>
          <Field as = {Textarea}
            placeholder="Here is a sample placeholder"
            size="sm"
            resize={"vertical"}
            name = "message"
           
          />
        </FormControl>
        <FormControl isRequired>
          <FormLabel>Tags</FormLabel>
          <Input
            
            placeholder="Comma Seperated"
            onChange = {handleChange('tags')}
          />
        </FormControl>
        
          <FileBase64
            type="file"
            
            multiple={false}
            onDone={({ base64 }) =>
              setPostData({ ...postData, selectedFile: base64 })
            }
          />
        
        <Button
          mt={4}
          colorScheme="teal"
          isLoading={isSubmitting}
          type="submit"
        >
          Submit
        </Button>
        </Form>
       )}
      </Formik>
    </VStack>
  );
};

export default Forms;
