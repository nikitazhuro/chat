export interface IMessage { 
    id: number,
    event: string,
    messageId?: string
    from?: string,
    userName?: string,
    value: string,
    avatar?: string,
    date?: string,  
  }