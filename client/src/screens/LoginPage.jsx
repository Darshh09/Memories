import React, {useState} from "react";
import { Box, Button, Container, FormControl, FormLabel, Input, Text, VStack } from "@chakra-ui/react";
import {Formik , Form , Field}from "formik";

const LoginPage = ({ isSignIn }) => {

 
  const [isSubmitting, setisSubmitting] = useState(false);

  const [initialValues, setInitialValues] = useState({
    username: "",
    password: "",
  })

  const handleSubmit = (values) => {
    let v = `{${values['username']}}`
    console.log("submitting",v);
    setTimeout(() => {
      setisSubmitting(false);
    }, 2000);
  }

  return (
    <Container maxW="9xl"  centerContent height={'100%'}>
      <Box marginTop={10} padding="5" color="black" bg = {'white'} width="xl"  borderRadius = {'xl'}>
        {isSignIn ? (  <VStack gap={2}  >
      <Text fontSize='4xl'>Login</Text>
      <Formik initialValues={initialValues} onSubmit = {handleSubmit}>
       {({getFieldProps,values,errors, handleChange}) => (
          <Form>
          <FormControl isRequired>
          <FormLabel>Username</FormLabel>
          <Field as = {Input}
            name="username"
           
          />
        </FormControl>
        <FormControl isRequired>
          <FormLabel>Password</FormLabel>
          <Field as = {Input}
            name="password"
           
          />
        </FormControl>
      
        
        <Button
          mt={4}
          colorScheme="teal"
          isLoading={isSubmitting}
          type="submit"
          onClick={() => setisSubmitting(true)}
        >
          Submit
        </Button>
        </Form>
       )}
      </Formik>
    </VStack>) : (  <VStack gap={2}  >
      <Text fontSize='4xl'>Sign Up</Text>
      <Formik initialValues={initialValues} onSubmit = {handleSubmit}>
       {({getFieldProps,values,errors, handleChange}) => (
          <Form>
          <FormControl isRequired>
          <FormLabel>Username</FormLabel>
          <Field as = {Input}
            name="username"
           
          />
        </FormControl>
        <FormControl isRequired>
          <FormLabel>Password</FormLabel>
          <Field as = {Input}
            name="password"
           
          />
        </FormControl>
      
        
        <Button
          mt={4}
          colorScheme="teal"
          isLoading={isSubmitting}
          type="submit"
          onClick={() => setisSubmitting(true)}
        >
          Submit
        </Button>
        </Form>
       )}
      </Formik>
    </VStack>)}
    
      </Box>
    </Container>
  );
};

export default LoginPage;
