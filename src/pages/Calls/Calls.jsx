import React from 'react'
import Back from '../../components/common/Back/Back'
import CallsCard from './CallsCard'
import TableCalls from '../../components/TableCalls/TableCalls'

const Calls = () => {
  return (
    <>
      <Back title="Розклад дзвоників"/>
      <CallsCard/>
      <TableCalls/>
    </>
  )
}

export default Calls
