import React, { lazy, useState, useEffect } from 'react'

import {
  CButton,
  CCard,
  CCardBody,
  CCol,
  CProgress,
  CRow,

} from '@coreui/react'
import CIcon from '@coreui/icons-react'


const WidgetsDropdown = lazy(() => import('../widgets/WidgetsDropdown.js'))

const Dashboard = () => {

  const [usersData, setusersData] = useState([]);
  console.log(usersData)

  useEffect(() => {
    fetch('https://onlinehelpbd.herokuapp.com/users')
      .then(res => res.json())
      .then(data => {
        setusersData(data.reverse());

      })
  }, [])
  return (
    <>
      <WidgetsDropdown />

      <CRow>
        <CCol>
          <CCard>

            <CCardBody>

              <br />

              <table className="table table-hover table-outline mb-0 d-none d-sm-table">
                <thead className="thead-light">
                  <tr>
                    <th className="text-center"><CIcon name="cil-people" /></th>
                    <th>Name</th>
                    <th>Email</th>
                    <th >Balance</th>
                    <th>Add Balance</th>
                  </tr>
                </thead>
                <tbody>
                  {
                    usersData.map(user =>
                      <tr>
                        <td className="text-center">
                          <div className="c-avatar">
                            <img src={user.imgUrl} className="c-avatar-img" alt={user.name} />
                            <span className="c-avatar-status bg-success"></span>
                          </div>
                        </td>
                        <td>
                          <div>{user.name}</div>
                          <div className="small text-muted">
                            Registered: {new Date(user.registeredData).toDateString()}
                          </div>
                        </td>

                        <td>
                          <b>{user.email}</b>
                        </td>
                        <td >
                          <b >{user.balance}</b>
                        </td>

                        <td>
                          <CButton block color="success">Add Balance</CButton>
                        </td>
                      </tr>
                    )
                  }

                </tbody>
              </table>

            </CCardBody>
          </CCard>
        </CCol>
      </CRow>
    </>
  )
}

export default Dashboard
