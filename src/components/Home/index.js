import Cookies from 'js-cookie'
import {Component} from 'react'
import {Redirect} from 'react-router-dom'

import {
  HomeMainContainer,
  HeaderContainer,
  Logo,
  LogoutButton,
  CardContainer,
  SubContainer,
  Heading,
  DigitalCard,
} from './styledComponents'

class Home extends Component {
  onClickLogout = () => {
    Cookies.remove('jwt_token')
    const {history} = this.props
    history.replace('/ebank/login')
  }

  render() {
    const jwtToken = Cookies.get('jwt_token')
    if (jwtToken === undefined) {
      return <Redirect to="/ebank/login" />
    }
    return (
      <HomeMainContainer>
        <HeaderContainer>
          <Logo
            src="https://assets.ccbp.in/frontend/react-js/ebank-logo-img.png"
            alt=" website logo"
          />
          <LogoutButton type="button" onClick={this.onClickLogout}>
            Logout
          </LogoutButton>
        </HeaderContainer>
        <CardContainer>
          <SubContainer>
            <Heading>Your Flexibility, Our Excellence</Heading>
            <DigitalCard
              src="https://assets.ccbp.in/frontend/react-js/ebank-digital-card-img.png "
              alt="digital card"
            />
          </SubContainer>
        </CardContainer>
      </HomeMainContainer>
    )
  }
}

export default Home
