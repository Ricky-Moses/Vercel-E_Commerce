

const advertiseMent = [
    { img: '', link: '', name: 'Image - 1' },
    { img: '', link: '', name: 'Image - 2' },
    { img: '', link: '', name: 'Image - 3' },
    { img: '', link: '', name: 'Image - 4' },
    { img: '', link: '', name: 'Image - 5' }
]

const PanelEighteen = () => {
  return (
    <div className="row22 flex flex-col items-center justify-center">
        <div className="w-full flex items-center justify-center">
            <h1 className="font-extrabold">💘 House Of Rykaa 💘</h1>
        </div>
        <div className="w-10/12 h-full grid grid-cols-5 gap-3 !pb-3">
            {advertiseMent.map(() => (
                <div className="w-full h-full skeleton"></div>
            ))}
        </div>
    </div>
  )
}

export default PanelEighteen