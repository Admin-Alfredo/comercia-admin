import React from 'react'
import { Container } from './styles'



export default function Button(props: any) {
  return (
    <Container {...props} >
      { props.label}
    </Container>
  )
}
