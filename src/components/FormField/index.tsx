import React from 'react'
import {
  Container
} from './styles'

export default function FormField({ children }: { children: React.ReactNode }) {

  return (
    <Container>
      {children}
    </Container>
  )
}
