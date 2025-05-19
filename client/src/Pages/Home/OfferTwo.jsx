

const advertiseMent = [
    { img: '', link: '', name: 'Image - 1' },
    { img: '', link: '', name: 'Image - 2' },
    { img: '', link: '', name: 'Image - 3' },
    { img: '', link: '', name: 'Image - 4' }
]

const OfferTwo = () => {
  return (
    <div className="row17 w-full flex flex-col items-center gap-3">
        <div className="flex items-center justify-center">
            <h1 className="font-extrabold">🌹 Dive Into Our Curation 🌹</h1>
        </div>
        <div className="w-5/6 h-full grid grid-cols-4 items-center justify-center gap-3">
            {advertiseMent.map(() => (
                <div className=" skeleton h-full"></div>
            ))}
        </div>
    </div>
  )
}

export default OfferTwo