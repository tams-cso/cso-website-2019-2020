import React, { Component } from 'react'
import { Box, Flex, Heading, Text } from 'rebass'
import CircleLogo from './circle-logo'
import Navigation from './navigation'

class Header extends Component {
   render = () => {
      return (
         <Flex alignItems='center' bg='black' py={200} px={40}>
            <Box width={2/3}>
               <CircleLogo />
            </Box>
            <Box width={1/3}>
               <Navigation links={[
                     {
                        href: '/',
                        text: 'home'
                     },
                     {
                        href: '#',
                        text: 'team'
                     },
                     {
                        href: '#',
                        text: 'competitions'
                     },
                     {
                        href: '#',
                        text: 'projects'
                     }
                  ]}
               />
            </Box>
         </Flex>
      )
   }
}

export default Header
