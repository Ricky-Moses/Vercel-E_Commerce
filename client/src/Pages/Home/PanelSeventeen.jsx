

const advertiseMent = [
    { img: '', link: '', name: 'Image - 1' },
    { img: '', link: '', name: 'Image - 2' },
    { img: '', link: '', name: 'Image - 3' },
    { img: '', link: '', name: 'Image - 4' },
    { img: '', link: '', name: 'Image - 5' },
    { img: '', link: '', name: 'Image - 6' },
    { img: '', link: '', name: 'Image - 7' },
    { img: '', link: '', name: 'Image - 8' },
    { img: '', link: '', name: 'Image - 9' }
]

const PanelSeventeen = () => {
  return (
    <div className="row21 flex flex-col items-center justify-center gap-3">
        <div className="w-full flex items-center justify-center">
            <h1 className="font-extrabold">🍿 Pop-Up Stories 🍿</h1>
        </div>
        <div className="w-full h-full grid grid-cols-4 lg:grid-cols-5 gap-3 !px-5">
            {advertiseMent.map(() => (
                <div className="skeleton w-full h-full"></div>
            ))}
        </div>
    </div>
  )
}

export default PanelSeventeen