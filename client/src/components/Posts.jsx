import React, { useEffect, useState } from 'react'
import Post from './Post'
import { Box, Grid, GridItem, Center } from '@chakra-ui/react'
import { motion } from 'framer-motion'
import { useGetPostsQuery } from '../features/api'

const Posts = () => {

  const { data, isLoading} = useGetPostsQuery()
  
  useEffect(() => {} , [data])

  const [loader,setLoader] = useState(true);

  setTimeout(() => {
    if(!isLoading){
      setLoader(false);
    }
  } , 4000);

  return (
    <Box flexDirection = {'row'}>

      <Grid templateColumns='repeat(2, 1fr)' gap= {2} >
      {loader ? <Center height={'50vh'} width = {'80vh'}>
        <motion.div
           style={{backgroundColor: 'white', width : '50px', height : '50px', marginTop : '80px'}}
          animate={{
            scale: [1, 2, 2, 1, 1],
            rotate: [0, 0, 270, 270, 0],
            borderRadius: ["20%", "20%", "50%", "50%", "20%"]
          }}
          transition={{
            duration: 2,
            ease: "easeInOut",
            times: [0, 0.2, 0.5, 0.8, 1],
            repeat: Infinity,
            repeatDelay: 1
          }}
        />
      </Center>    : data.map(post => 
      <GridItem w='100%' marginInlineEnd={5} >
      <Post post={post} />
      </GridItem>
      ) }
      </Grid>
     
    
    </Box>
  )
}

export default Posts