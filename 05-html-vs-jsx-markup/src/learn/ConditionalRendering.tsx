import reactImagePath from "@/assets/react.svg?url";
import viteImagePath from "@/assets/vite.svg?url";
import nextJsImagePath from "@/assets/next-js.svg?url";
import kakaoTalkImagePath from "@/assets/kakao-talk.svg?url";
import isTrueOrFalse from "@/utils/isTrueOrFalse";

interface Props {
  imageType: string;
}

function ConditionalRendering({ imageType }: Props) {
  let iconPath = "";
  let printText = "";

  switch (imageType.toLowerCase().trim()) {
    case "react":
      iconPath = reactImagePath;
      printText = "React App";
      break;
    case "vite":
      iconPath = viteImagePath;
      printText = "vite App";
      break;
    case "next.js":
      iconPath = nextJsImagePath;
      printText = "Next.js App";
      break;
    case "kakao talk":
      iconPath = kakaoTalkImagePath;
      printText = "kakao Talk App";
      break;

    default:
      printText = "허용된 이미지 타입이 존재하지 않습니다.";
  }
  const tf = isTrueOrFalse();
  const spinnerOrVite = tf ?
  (<img src="/icons/spinner.svg" alt="로딩 중..." />):
  (<img src="vite.svg" alt="vite logo" />)

  return (
    <>
      <dt>조건부 렌더링(conditional rendering) ({tf && '스피너 표시'})</dt>
      <dd>
        <p>이미지 타입(image type)에 따라 렌더링 여부를 결정합니다.</p>
        <div className="conditionalRendering">
          <img src={iconPath} alt="" />
          <p>{printText}</p>
        </div>
      </dd>
      <dd>
        <p>spinner 또는 vite 이미지가 랜덤으로 화면에 렌더링 되도록 합니다.</p>

        <div className="conditionalRendering"> {spinnerOrVite} </div>
      </dd>
    </>
  );
}
export default ConditionalRendering;