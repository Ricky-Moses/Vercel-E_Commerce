
const AdList = ({
    slides,
    bgColor = "#ffffff",
    DPlay = 'grid',
    Col = '',
    pad = '20px'
}) => {
  return (
    <div style={{ backgroundColor: bgColor, display: DPlay, gridTemplateColumns: Col, padding: pad }}>
        {slides?.images?.mpa((pic) => (
            <div className="">
                <img src={pic?.img} alt=""/>
            </div>
        ))}
    </div>
  )
}

export default AdList