import LayoutBox from "./LayoutBox";


function EventPropagation() {

  const handleClick = (color:string) => {
    return (e:React.MouseEvent<HTMLDivElement>) => {
      e.stopPropagation();
      console.log(color, e.target);
    }
  }

  return (
    <details>
      <summary>
        <b>이벤트 전파 & 기본 동작 방지</b>
      </summary>
      <LayoutBox onClick={handleClick('cyan')} style={styles.cyan} title="레이아웃 박스">
        <LayoutBox onClick={handleClick('magenta')} style={styles.magenta}>
          <LayoutBox onClick={handleClick('yellow')} style={styles.yellow}></LayoutBox>
        </LayoutBox>
      </LayoutBox>
    </details>
  );
}

export default EventPropagation

const styles = {
  cyan: { "--color": "var(--cyan)" },
  magenta: { "--color": "var(--magenta)" },
  yellow: { "--color": "var(--yellow)" },
};
