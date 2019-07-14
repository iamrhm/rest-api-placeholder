import React from 'react'
import { MessageWrapper } from './styled'

interface IProps {
  message: string
}

export const MessageTemplate: React.FC<IProps> = ({ message }) => {
  return (
    <MessageWrapper>
      {message}
    </MessageWrapper>
  )
}
