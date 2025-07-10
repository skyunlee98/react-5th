

interface Props {
  onClick: (e:React.MouseEvent<HTMLDivElement>) => void;
  // style: React.CSSProperties & {'--color'? : string}
  style: React.CSSProperties & {[key:string]:string | number};
  children?: React.ReactNode;
  title?: string;
}

function LayoutBox({onClick,children,...restProps}:Props) {

  return (
    <div className="box" onClick={onClick} {...restProps}> {children}</div>
  )
}
export default LayoutBox