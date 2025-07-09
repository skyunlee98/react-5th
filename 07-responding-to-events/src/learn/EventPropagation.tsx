import LayoutBox from "./LayoutBox";


function EventPropagation() {

  const handleClick = () => {
    console.log('click');

  }

  return (
    <details>
      <summary>
        <b>이벤트 전파 & 기본 동작 방지</b>
      </summary>

      <LayoutBox onClick={handleClick} style={styles.cyan}>
        <LayoutBox onClick={handleClick} style={styles.magenta}>
          <LayoutBox onClick={handleClick} style={styles.yellow}></LayoutBox>
        </LayoutBox>
      </LayoutBox>
    </details>
  )
}

export default EventPropagation

const styles = {
  cyan: { "--color": "var(--cyan)" },
  magenta: { "--color": "var(--magenta)" },
  yellow: { "--color": "var(--yellow)" },
};
