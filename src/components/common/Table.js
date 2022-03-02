import React from 'react'

const Table = ({data, columns, tableDescriptor, deleteItem}) => {

 
  return (
    <>
    <table className="table table-dark">
    <thead>
    <tr>
      <th scope="col">{tableDescriptor}</th>
      {columns.map((columnTitle) => (
        <th key={columnTitle} scope="col">{columnTitle}</th>
        ))}
    </tr>
    </thead>
    <tbody>
    {data.map((item,index)=> (
      <tr key={item.id}>
        <th scope="row">{++index}</th>
        {columns.map(columnTitle => (
          <td key={item[columnTitle] + columnTitle}>{item[columnTitle]}</td>
        ))}
        <td><button type='button' className='btn btn-warning px-2' onClick={() => deleteItem(item.id)}>Delete</button></td>
      </tr>
    ))}
    </tbody>
  </table>
    </>
    
  )
}

export default Table