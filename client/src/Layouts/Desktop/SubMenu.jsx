
const menus = [
  { label: 'Makeup', link: '' },
  { label: 'Skin', link: '' },
  { label: 'Hair', link: '' },
  { label: 'Appliance', link: '' },
  { label: 'Bath & Body', link: '' },
  { label: 'Health & Wellness', link: '' },
  { label: 'Men', link: '' },
  { label: 'Fragrance', link: '' },
  { label: 'Lingerie & Accessory', link: '' },
]
const SubMenu = () => {
  return (
    <div className='sub-menu navbar justify-center gap-5 xl:gap-10 !px-1'>
      {menus.map(({ label, link }) => (
        <a key={label} className='menu-link' href={link}>
          <div className="text-[14px] xl:text-[16px] text-neutral-500">{label}</div>
        </a>
      ))}
      <a className='logo-link' href="">
        <h1 className="text-[18px] xl:text-2xl italic">Offer</h1>
      </a>
    </div>
  )
}

export default SubMenu