

interface Props {
  onClick: () => void;
  // style: React.CSSProperties & {'--color'? : string}
  style: React.CSSProperties & {[key:string]:string | number};
  children?: React.ReactNode
}

function LayoutBox({onClick,style,children}:Props) {


  return (
    <div className="box" onClick={onClick} style={style}> {children} </div>
  )
}
export default LayoutBox