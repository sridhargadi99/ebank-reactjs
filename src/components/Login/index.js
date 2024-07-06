import {Redirect} from 'react-router-dom'
import {Component} from 'react'
import Cookies from 'js-cookie'

import {
  LoginMainContainer,
  LoginCardContainer,
  LoginCardContainer1,
  WebsiteImage,
  LoginCardContainer2,
  FormContainer,
  Heading,
  Label,
  Input,
  LoginButton,
  ErrorMessage,
} from './styledComponents'

class Login extends Component {
  state = {
    userId: '',
    pin: '',
    errorMessage: '',
  }

  onLoginSuccess = jwtToken => {
    Cookies.set('jwt_token', jwtToken, {expires: 30})
    const {history} = this.props
    history.replace('/')
  }

  onLoginFailure = errorMessage => {
    this.setState({errorMessage})
  }

  onSubmitForm = async event => {
    event.preventDefault()
    const {userId, pin} = this.state
    const userDetails = {
      user_id: userId,
      pin,
    }
    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }
    const response = await fetch('https://apis.ccbp.in/ebank/login', options)
    const data = await response.json()
    if (response.ok) {
      this.onLoginSuccess(data.jwt_token)
    } else {
      this.onLoginFailure(data.error_msg)
    }
  }

  enterUserId = event => this.setState({userId: event.target.value})

  enterPin = event => this.setState({pin: event.target.value})

  render() {
    const jwtToken = Cookies.get('jwt_token')
    if (jwtToken !== undefined) {
      return <Redirect to="/" />
    }
    const {userId, pin, errorMessage} = this.state
    return (
      <LoginMainContainer>
        <LoginCardContainer>
          <LoginCardContainer1>
            <WebsiteImage
              src="https://assets.ccbp.in/frontend/react-js/ebank-login-img.png"
              alt="website login"
            />
          </LoginCardContainer1>
          <LoginCardContainer2>
            <FormContainer onSubmit={this.onSubmitForm}>
              <Heading>Welcome Back!</Heading>
              <Label htmlFor="userId">User ID</Label>
              <Input
                type="text"
                placeholder="Enter User ID"
                onChange={this.enterUserId}
                value={userId}
                id="userId"
              />
              <Label htmlFor="pinId">PIN</Label>
              <Input
                type="password"
                placeholder="Enter PIN"
                onChange={this.enterPin}
                value={pin}
                id="pinId"
              />
              <LoginButton type="submit">Login</LoginButton>
              <ErrorMessage>{errorMessage}</ErrorMessage>
            </FormContainer>
          </LoginCardContainer2>
        </LoginCardContainer>
      </LoginMainContainer>
    )
  }
}

export default Login
