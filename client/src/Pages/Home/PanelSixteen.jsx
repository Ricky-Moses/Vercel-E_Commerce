
const advertiseMent = [
    { img: '', link: '', name: 'Image - 1' },
    { img: '', link: '', name: 'Image - 2' },
    { img: '', link: '', name: 'Image - 3' },
    { img: '', link: '', name: 'Image - 4' },
    { img: '', link: '', name: 'Image - 5' },
    { img: '', link: '', name: 'Image - 6' },
    { img: '', link: '', name: 'Image - 7' },
    { img: '', link: '', name: 'Image - 8' },
    { img: '', link: '', name: 'Image - 9' },
    { img: '', link: '', name: 'Image - 10' },
    { img: '', link: '', name: 'Image - 11' },
    { img: '', link: '', name: 'Image - 12' },
    { img: '', link: '', name: 'Image - 13' },
    { img: '', link: '', name: 'Image - 14' },
]

const PanelSixteen = () => {
  return (
    <div className="row20 flex flex-col items-center justify-center gap-2 !px-4 !pb-3">
        <div className="w-full flex items-center justify-center">
            <h1 className="font-extrabold">🌼 Global Brands To Love 🌼</h1>
        </div>
        <div className="w-full h-full grid grid-cols-5 items-center justify-center gap-3">
            {advertiseMent.map(() => (
                <div className="skeleton w-full h-full"></div>
            ))}
        </div>
    </div>
  )
}

export default PanelSixteen