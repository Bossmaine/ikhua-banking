import React from 'react'

const HeaderMsg = ({type = 'title', title, subtext, user}: HeaderMsgProps) => {
  return (
    <div className='header-msg'>
      <h1 className='header-msg-title'>{title} {type === 'greeting' && (
        <span className='text-bankGradient'>{' '}{user}!</span>
      )}</h1>
      <p className='header-msg-subtext'>{subtext}</p>
    </div>
  )
}

export default HeaderMsg

