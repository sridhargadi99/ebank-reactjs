import {
  NotFoundContainer,
  NotFoundSubContainer,
  NotFoundImage,
  NotFoundHeading,
  NotFoundDescription,
} from './styledComponents'

const NotFound = () => (
  <NotFoundContainer>
    <NotFoundSubContainer>
      <NotFoundImage
        src="https://assets.ccbp.in/frontend/react-js/ebank-not-found-img.png "
        alt="not found"
      />
      <NotFoundHeading className="not-found-name-style">
        Page Not Found
      </NotFoundHeading>
      <NotFoundDescription className="not-found-description-style">
        We are sorry, the page you requested could not be found
      </NotFoundDescription>
    </NotFoundSubContainer>
  </NotFoundContainer>
)

export default NotFound
