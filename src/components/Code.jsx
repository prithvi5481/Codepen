import React from 'react'
import Editor from './Editor'

const Code = () => {
  return (
    <div>
        <Editor heading="HTML" icon='/' color='#FF3C41' />
        <Editor heading="CSS" icon='*' color='#0EBEFF'/>
        <Editor heading="JavaScript" icon='()' color='#FCD000'/>
    </div>
  )
}

export default Code