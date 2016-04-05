const ErrorsBoxComponent = ({ errors, hasErrors }) => (
  <div id="errorsBox" className={(hasErrors ? '' : 'hidden')}>
    <ul>
      {errors.map((error, index) => <li key={index}>{error}</li>)}
    </ul>
  </div>
)

export default ErrorsBoxComponent
