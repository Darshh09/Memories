import { motion, useMotionValue } from "framer-motion"
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Box, Image, Badge } from "@chakra-ui/react"


const Post = ({post}) => {


  return (
    <motion.div initial={false}
    animate={{ x : 10}}
    style={{ width: "100%", height: "100%", marginTop : "30px" }}>
       <Box backgroundColor={'white'} maxW='sm' borderWidth='1px' alignItems={'center'} borderRadius='lg' overflow='hidden'>   
             <Image height={"80%"} width = {'80%'} alignSelf = "center" src={post.selectedFile} />
             <Box p='6'>
            <Box display='flex' alignItems='baseline'>
          <Badge borderRadius='full' px='2' colorScheme='teal'>
            New
          </Badge>
          <Box
            color='gray.500'
            fontWeight='semibold'
            letterSpacing='wide'
            fontSize='xs'
            textTransform='uppercase'
            ml='2'
          >
            #{post.tags}
          </Box>
        </Box>
        </Box>
        <Box
          fontWeight='semibold'
          as='h4'
          ml='6'
          lineHeight='tight'
          isTruncated
        >
          {post.title}
        </Box>
        <Box
        mt='1'
            color='gray.500'
            fontWeight='semibold'
            letterSpacing='wide'
            fontSize='xs'
            textTransform='uppercase'
            ml='6'
          >
            {post.message}
          </Box>

          <Box flex={'1'} flexDirection = 'row' justifyContent={'space-between'}>

          </Box>
       </Box>
    </motion.div>
  )
}

export default Post