import styled from 'styled-components';
import React from 'react'
import {Links,Link,Container,Wrapper,Title,Subtitle,Button,Input,More} from '../components/Signin.Styles.jsx'



export default function SignIn() {
  return (
<Container>
<Wrapper>
<Title>Sign in</Title>
<Subtitle>to continue to MckenyTube</Subtitle>
<Input placeholder='Username'/>
<Input type='password' placeholder='password'/>
<Button>Sign in</Button>
<Title>More</Title>
<Input placeholder='username'/>
<Input placeholder='email' />
<Input placeholder='password' type='password' />
<Button>Signup</Button>
<More>
<Links>
<Link> English (USA)</Link>
<Link>Help </Link>
<Link>PrivacyTerms </Link>
</Links>
     
</More>

</Wrapper>

</Container>  )
}
