import './index.css'

const DenominationItem = props => {
  const {destinationDetails} = props
  const {value, id} = destinationDetails

  const onSum = () => {
    deleteTodo(value)
    console.log('trigger')
  }

  return (
    <li>
    <button className="button" onClick={onSum}>
      {value}
    </button></li>
  )
}

export default DenominationItem
