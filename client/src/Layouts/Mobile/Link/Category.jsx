import { useContext, useMemo } from "react"
import { MenuContext } from "../../../Hooks/useContext"

const Category = () => {

  const { data, isLoading, error } = useContext(MenuContext)
  const subMenu = useMemo(() => data[1]?.SubMenu || [], [data])

  // console.log(subMenu);

  return (
    <div className='categories overflow-scroll !p-2'>
      <div className="col2">
        {isLoading ? (
          <div className="skeleton w-full h-full"></div>
        ) : error ? (
          <div className="text-red-500">⚠️ {error}</div>
        ) : (
          <div className="h-full flex flex-col gap-1 !p-1">
            {subMenu?.map((items, i) => (
              <div key={i} className="collapse collapse-plus border-1 !px-2">
                <input type="checkbox" name={`accordion-${i}`} />
                <div className="collapse-title font-semibold flex items-center justify-between">
                  <span className="">{items.label}</span>
                </div>
                <div className="collapse-content flex flex-col gap-0 h-fit text-sm overflow-y-scroll">
                  {items?.subMenu[0]?.items?.map((list, j) => (
                    <div key={j} className="collapse collapse-plus border !px-2 !mb-1">
                    <input type="checkbox" name={`accordion-${i}`} />
                    <div className="collapse-title font-semibold flex items-center justify-between">
                      <span className="">{list?.subTitle}</span>
                    </div>
                    <div className="collapse-content flex flex-col gap-0 h-fit text-sm overflow-y-scroll">
                      {list?.subItems?.map((subList, k) => (
                        <div key={k} className="flex flex-col gap-1 border rounded !p-2 !mb-1">
                          {subList?.itemsName}
                        </div>
                      ))}
                    </div>
                  </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        )
        }
      </div>
    </div>
  )
}

export default Category