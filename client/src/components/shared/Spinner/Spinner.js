import './Spinner.css'

const Spinner = ({ size, shape }) => {

  const style = {
    width: size === 'lg' ? 60 : 30,
    height: size === 'lg' ? 60 : 30
  }

  return <div className={`spinner ${shape}`} style={style}></div >
}

export default Spinner