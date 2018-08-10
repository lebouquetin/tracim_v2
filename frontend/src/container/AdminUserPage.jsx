import React from 'react'
import Sidebar from './Sidebar.jsx'
import {
  Delimiter,
  BtnSwitch,
  PageWrapper,
  PageTitle,
  PageContent
} from 'tracim_frontend_lib'
import { translate } from 'react-i18next'

class AdminUserPage extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      displayAddMember: false
    }
  }

  handleToggleAddMember = () => this.setState(prevState => ({
    displayAddMember: !prevState.displayAddMember
  }))

  render () {
    return (
      <div className='sidebarpagecontainer'>
        <Sidebar />

        <PageWrapper customClass='adminUserPage'>
          <PageTitle
            parentClass={'adminUserPage'}
            title={"Member's management"}
          />

          <PageContent parentClass='adminUserPage'>

            <div className='adminUserPage__description'>
              On this page you can manage the members of your instance Tracim.
            </div>

            <div className='adminUserPage__adduser'>

              <div
                className='adminUserPage__adduser__button'
                onClick={this.handleToggleAddMember}
              >
                <div className='btn btn-outline-primary'>
                  Add a member
                </div>
              </div>

              {this.state.displayAddMember === true &&
                <form className='adminUserPage__adduser__form'>
                  <div className='adminUserPage__adduser__form__username'>
                    <label className='username__text' htmlFor='adduser'>
                      Ajouter un membre
                    </label>
                    <input
                      type='text'
                      className='username__input form-control'
                      id='adduser'
                      placeholder='Nom ou Email'
                    />

                    <div className='username__createaccount'>
                      <input type='radio' id='createuseraccount' />
                      <label className='ml-2' htmlFor='createuseraccount'>Create an account for this member</label>
                    </div>
                  </div>
                  <div className='adminUserPage__adduser__form__userrole'>
                    <div className='userrole__text'>
                      Choose the role of the member
                    </div>
                    <div className='userrole__role'>
                      <div className='userrole__role__workspacemanager mt-3 d-flex align-items-center'>
                        <input type='radio' />
                        <div className='d-flex align-items-center'>
                          <div className='userrole__role__icon mx-2'>
                            <i className='fa fa-fw fa-gavel' />
                          </div>
                          Workspace manager
                        </div>
                      </div>
                      <div className='userrole__role__contentmanager mt-3 d-flex align-items-center'>
                        <input type='radio' />
                        <div className='d-flex align-items-center'>
                          <div className='userrole__role__icon mx-2'>
                            <i className='fa fa-fw fa-graduation-cap' />
                          </div>
                          Content manager
                        </div>
                      </div>
                      <div className='userrole__role__contributor mt-3 d-flex align-items-center'>
                        <input type='radio' />
                        <div className='d-flex align-items-center'>
                          <div className='userrole__role__icon mx-2'>
                            <i className='fa fa-fw fa-pencil' />
                          </div>
                          Contributor
                        </div>
                      </div>
                      <div className='userrole__role__reader mt-3 d-flex align-items-center'>
                        <input type='radio' />
                        <div className='d-flex align-items-center'>
                          <div className='userrole__role__icon mx-2'>
                            <i className='fa fa-fw fa-eye' />
                          </div>
                          Reader
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className='adminUserPage__adduser__form__submit'>
                    <button type='submit' className='btn btn-outline-primary'>
                      Add the member
                    </button>
                  </div>
                </form>
              }
            </div>

            <Delimiter customClass={'adminUserPage__delimiter'} />

            <div className='adminUserPage__table'>
              <table className='table'>
                <thead>
                  <tr>
                    <th scope='col'>Member</th>
                    <th scope='col'>Email</th>
                    <th scope='col'>Member can create workspace</th>
                    <th scope='col'>Administrator</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th scope='row'>Joe Delavaiga</th>
                    <td>joedelavaiga@mail.com</td>
                    <td>
                      <BtnSwitch />
                    </td>
                    <td>
                      <BtnSwitch />
                    </td>
                  </tr>
                  <tr>
                    <th scope='row'>Susie Washington</th>
                    <td>susiewash@mail.com</td>
                    <td>
                      <BtnSwitch />
                    </td>
                    <td>
                      <BtnSwitch />
                    </td>
                  </tr>
                  <tr>
                    <th scope='row'>Marty MacJoe</th>
                    <td>martymac@mail.com</td>
                    <td>
                      <BtnSwitch />
                    </td>
                    <td>
                      <BtnSwitch />
                    </td>
                  </tr>
                  <tr>
                    <th scope='row'>Joe Delavaiga</th>
                    <td>joedelavaiga@mail.com</td>
                    <td>
                      <BtnSwitch />
                    </td>
                    <td>
                      <BtnSwitch />
                    </td>
                  </tr>
                  <tr>
                    <th scope='row'>Susie Washington</th>
                    <td>susiewash@mail.com</td>
                    <td>
                      <BtnSwitch />
                    </td>
                    <td>
                      <BtnSwitch />
                    </td>
                  </tr>
                  <tr>
                    <th scope='row'>Marty MacJoe</th>
                    <td>martymac@mail.com</td>
                    <td>
                      <BtnSwitch />
                    </td>
                    <td>
                      <BtnSwitch />
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

          </PageContent>

        </PageWrapper>
      </div>
    )
  }
}

export default translate()(AdminUserPage)
