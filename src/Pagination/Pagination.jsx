import React from 'react'

const Pagination = ({page,onChange,total}) => {

    const prev=<button onClick={()=>onChange(-1)} disabled={page===1}>prev</button>
    const next=<button onClick={()=>onChange(1)} disabled={page===total}>next</button>
    const pages=<button>{page}</button>
  return (
    <div>
        {prev}
        {pages}
        {next}
    </div>
  )
}

export default Pagination