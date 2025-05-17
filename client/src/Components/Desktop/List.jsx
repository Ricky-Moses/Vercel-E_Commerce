import { useContext, useEffect, useMemo, useState } from "react";
import { MenuContext } from "../../Hooks/useContext";

const List = ({ index }) => {
  const { data } = useContext(MenuContext);
  const menuData = useMemo(() => data[0]?.MainMenu || [], [data]);

  const [selectedData, setSelectedData] = useState(null);
  const [selectedItem, setSelectedItem] = useState(null);

  useEffect(() => {
    if (menuData.length > 0 && index !== null && index !== undefined) {
      const findData = menuData.find((_, i) => i === index);
      setSelectedData(findData);
    }
  }, [index, menuData]);

  
  useEffect(() => {
    if (selectedData?.subMenu?.length > 0) {
      setSelectedItem(selectedData.subMenu[0]); // default to first item
    } else {
      setSelectedItem(null);
    }
  }, [selectedData]);

  const handleSubItem = (index) => {
    const findItem = selectedData?.subMenu?.find((_, i) => i === index)
    setSelectedItem(findItem)
  }

  // console.log("Selected Data: ", selectedData);
  // console.log("Selected Item: ", selectedItem);
  // console.log(index);
  return (
    <div className="component-list absolute flex flex-col gap-2 shadow-2xl !p-2 overflow-y-scroll">
      <div className="w-full flex items-center justify-between text-black">
        {selectedData?.title?.map((title, i) => (
          <div
            key={i}
            className="title"
            tabIndex="0"
            onClick={() => handleSubItem(i)}
          >{title}</div>
        ))}
      </div>
      <div className="w-full pl-4 grid grid-cols-6 gap-4 text-black">
        {selectedItem?.items?.map((item, i) => (
          <div key={i} className="items h-fit">
            <h1 className="sub-title">{item.subTitle}</h1>
            <ul className="flex flex-col text-gray-500">
              {item?.subItems?.map((subItem, i) => (
                <li key={i} className="sub-items">{subItem?.itemsName}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  )
}

export default List