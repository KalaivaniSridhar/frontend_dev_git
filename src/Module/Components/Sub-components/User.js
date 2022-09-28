import React,{useState} from 'react'
import UserData from './Overview/UserData'
import {
  Overview,
  Table,
  ListView,
  Custom,
  Segment
} from '../../Components'
import TabSection from '../../Containers/TabSection'

const User = () => {
  const [tabIndex, setTabIndex] = useState(0)
  const handleTabChange = (index: number) => {
    setTabIndex(index)
    { console.log("index", index); }
  }
  return (
    <div>
      <TabSection
        tabs={["Overview", "Table", "List View", "Segment", "Custom"]}
        handleChange={handleTabChange}
        tabIndex={tabIndex}
      />
      {tabIndex === 0 ? <Overview /> : tabIndex === 1 ? <Table /> : tabIndex === 2 ? <ListView /> : tabIndex === 3 ? <Segment /> : <Custom />}
    </div>
  )
}

export default User