import svgPaths from "./svg-hy78s24c3o";
import imgImage from "figma:asset/821141358d83c8c12e754f38f71f61122adede0c.png";
import imgUserAvatar from "figma:asset/31bb1aca1a880f95f6b40d2e231afc77b640de40.png";
import imgIllustrationOfSupportAndCare from "figma:asset/62892679c5189468aede8bcb5b6989496f467b5a.png";
import imgFlowers from "figma:asset/615f60259eedc3714d1d0b01c37034f4cf37d89a.png";
import imgBookReading from "figma:asset/d12680a49a92874ee0cd6febe244adbce5b7c8a2.png";

function Container2() {
  return (
    <div className="h-[12px] relative shrink-0 w-[18px]" data-name="Container">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 12">
        <g id="Container">
          <path d={svgPaths.p490ad00} fill="var(--fill-0, #E492A7)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Button() {
  return (
    <div className="backdrop-blur-[6px] bg-[rgba(255,255,255,0.25)] content-stretch flex flex-col items-center justify-center p-[9px] relative rounded-[9999px] shrink-0" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.4)] border-solid inset-0 pointer-events-none rounded-[9999px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)]" />
      <Container2 />
    </div>
  );
}

function Heading() {
  return (
    <div className="content-stretch flex flex-col items-start relative shadow-[0px_1px_1px_0px_rgba(0,0,0,0.05)] shrink-0" data-name="Heading 1">
      <div className="flex flex-col font-['Dancing_Script:Bold',sans-serif] font-bold h-[36px] justify-center leading-[0] relative shrink-0 text-[#e492a7] text-[30px] w-[217.3px]">
        <p className="leading-[36px] whitespace-pre-wrap">My Healing Journal</p>
      </div>
    </div>
  );
}

function UserAvatar() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative w-[36px]" data-name="User Avatar">
      <div className="absolute bg-clip-padding border-0 border-[transparent] border-solid inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgUserAvatar} />
      </div>
    </div>
  );
}

function BackgroundBorderShadow() {
  return (
    <div className="bg-[#e492a7] relative rounded-[9999px] shrink-0 size-[40px]" data-name="Background+Border+Shadow">
      <div className="content-stretch flex flex-col items-start justify-center overflow-clip p-[2px] relative rounded-[inherit] size-full">
        <UserAvatar />
      </div>
      <div aria-hidden="true" className="absolute border-2 border-[rgba(255,255,255,0.5)] border-solid inset-0 pointer-events-none rounded-[9999px] shadow-[0px_4px_6px_-1px_rgba(0,0,0,0.1),0px_2px_4px_-2px_rgba(0,0,0,0.1)]" />
    </div>
  );
}

function Container1() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-center size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-between pb-[16px] pl-[24px] pr-[24.02px] pt-[48px] relative w-full">
          <Button />
          <Heading />
          <BackgroundBorderShadow />
        </div>
      </div>
    </div>
  );
}

function OverlayBorderOverlayBlur() {
  return (
    <div className="backdrop-blur-[2px] bg-[rgba(254,249,195,0.9)] relative rounded-[8px]" data-name="Overlay+Border+OverlayBlur">
      <div aria-hidden="true" className="absolute border border-[#fef08a] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start px-[17px] py-[9px] relative">
        <div className="absolute bg-[rgba(255,255,255,0)] inset-0 rounded-[8px] shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1),0px_4px_6px_-4px_rgba(0,0,0,0.1)]" data-name="Overlay+Shadow" />
        <div className="flex flex-col font-['Dancing_Script:Bold',sans-serif] font-bold h-[16px] justify-center leading-[0] relative shrink-0 text-[#854d0e] text-[12px] w-[86.112px]">
          <p className="leading-[16px] whitespace-pre-wrap">Stronger every day!</p>
        </div>
      </div>
    </div>
  );
}

function IllustrationOfSupportAndCare() {
  return (
    <div className="h-[190.499px] relative shadow-[0px_8px_5px_0px_rgba(0,0,0,0.08),0px_20px_13px_0px_rgba(0,0,0,0.03)] shrink-0 w-[276.002px]" data-name="Illustration of support and care">
      <div className="absolute bg-clip-padding border-0 border-[transparent] border-solid inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute h-full left-[15.49%] max-w-none top-0 w-[69.02%]" src={imgIllustrationOfSupportAndCare} />
      </div>
    </div>
  );
}

function OverlayBorderShadowOverlayBlur() {
  return (
    <div className="aspect-[4/3] backdrop-blur-[8px] bg-[rgba(255,255,255,0.3)] relative rounded-[32px] w-full" data-name="Overlay+Border+Shadow+OverlayBlur">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start justify-center overflow-clip pb-[33px] pt-[33.001px] px-[32.999px] relative rounded-[inherit] w-full">
        <div className="absolute inset-[1.01px_1.01px_0.99px_1px]" data-name="Gradient" style={{ backgroundImage: "linear-gradient(143.184deg, rgba(255, 255, 255, 0.4) 0%, rgba(255, 255, 255, 0.1) 100%)" }} />
        <div className="absolute bottom-[-23.12px] flex h-[58.23px] items-center justify-center right-[-13.22px] w-[124.556px]" style={{ "--transform-inner-width": "1185.265625", "--transform-inner-height": "21.109375" } as React.CSSProperties}>
          <div className="flex-none rotate-12">
            <OverlayBorderOverlayBlur />
          </div>
        </div>
        <IllustrationOfSupportAndCare />
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.4)] border-solid inset-0 pointer-events-none rounded-[32px] shadow-[0px_20px_25px_-5px_rgba(0,0,0,0.1),0px_8px_10px_-6px_rgba(0,0,0,0.1)]" />
    </div>
  );
}

function Container4() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Nunito:Semi_Bold',sans-serif] h-[20px] justify-center leading-[0] not-italic relative shrink-0 text-[#6b7280] text-[14px] text-center tracking-[0.7px] uppercase w-[122.25px]">
        <p className="leading-[20px] whitespace-pre-wrap">Current Mood</p>
      </div>
    </div>
  );
}

function OverlayBorderShadowOverlayBlur1() {
  return (
    <div className="backdrop-blur-[6px] bg-[rgba(240,253,244,0.5)] content-stretch flex items-center justify-center p-px relative rounded-[9999px] shrink-0 size-[48px]" data-name="Overlay+Border+Shadow+OverlayBlur">
      <div aria-hidden="true" className="absolute border border-[#dcfce7] border-solid inset-0 pointer-events-none rounded-[9999px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)]" />
      <div className="flex flex-col font-['Liberation_Sans:Regular',sans-serif] h-[32px] justify-center leading-[0] not-italic relative shrink-0 text-[#4a4a4a] text-[24px] text-center w-[8.77px]">
        <p className="leading-[32px] whitespace-pre-wrap">🌿</p>
      </div>
    </div>
  );
}

function Button1() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-center pb-[4px] relative shrink-0" data-name="Button">
      <OverlayBorderShadowOverlayBlur1 />
      <div className="flex flex-col font-['Nunito:Regular',sans-serif] font-normal h-[16px] justify-center leading-[0] relative shrink-0 text-[#6b7280] text-[12px] text-center w-[28.08px]">
        <p className="leading-[16px] whitespace-pre-wrap">Calm</p>
      </div>
    </div>
  );
}

function OverlayBorderOverlayBlur1() {
  return (
    <div className="backdrop-blur-[6px] bg-[rgba(228,146,167,0.9)] content-stretch flex items-center justify-center p-px relative rounded-[9999px] size-[56px]" data-name="Overlay+Border+OverlayBlur">
      <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.3)] border-solid inset-0 pointer-events-none rounded-[9999px]" />
      <div className="-translate-x-1/2 absolute bg-[rgba(255,255,255,0)] left-[calc(50%+1.4px)] rounded-[9999px] shadow-[0px_0px_0px_4px_rgba(228,146,167,0.2),0px_10px_15px_-3px_rgba(0,0,0,0.1),0px_4px_6px_-4px_rgba(0,0,0,0.1)] size-[58.8px] top-0" data-name="Overlay+Shadow" />
      <div className="flex flex-col font-['Liberation_Sans:Regular',sans-serif] h-[32px] justify-center leading-[0] not-italic relative shrink-0 text-[24px] text-center text-white w-[8.762px]">
        <p className="leading-[32px] whitespace-pre-wrap">💪</p>
      </div>
    </div>
  );
}

function OverlayBorderOverlayBlurCssTransform() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-[56px]" data-name="Overlay+Border+OverlayBlur:css-transform">
      <div className="flex items-center justify-center relative shrink-0 size-[58.8px]" style={{ "--transform-inner-width": "1185.265625", "--transform-inner-height": "21.109375" } as React.CSSProperties}>
        <div className="flex-none scale-x-105 scale-y-105">
          <OverlayBorderOverlayBlur1 />
        </div>
      </div>
    </div>
  );
}

function Button2() {
  return (
    <div className="content-stretch flex flex-col gap-[6.6px] items-center relative shrink-0" data-name="Button">
      <OverlayBorderOverlayBlurCssTransform />
      <div className="flex flex-col font-['Nunito:Bold',sans-serif] font-bold h-[16px] justify-center leading-[0] relative shrink-0 text-[#e492a7] text-[12px] text-center w-[45.02px]">
        <p className="leading-[16px] whitespace-pre-wrap">Hopeful</p>
      </div>
    </div>
  );
}

function OverlayBorderShadowOverlayBlur2() {
  return (
    <div className="backdrop-blur-[6px] bg-[rgba(239,246,255,0.5)] content-stretch flex items-center justify-center p-px relative rounded-[9999px] shrink-0 size-[48px]" data-name="Overlay+Border+Shadow+OverlayBlur">
      <div aria-hidden="true" className="absolute border border-[#dbeafe] border-solid inset-0 pointer-events-none rounded-[9999px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)]" />
      <div className="flex flex-col font-['Liberation_Sans:Regular',sans-serif] h-[32px] justify-center leading-[0] not-italic relative shrink-0 text-[#4a4a4a] text-[24px] text-center w-[8.77px]">
        <p className="leading-[32px] whitespace-pre-wrap">🌧️</p>
      </div>
    </div>
  );
}

function Button3() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-center pb-[4px] relative shrink-0" data-name="Button">
      <OverlayBorderShadowOverlayBlur2 />
      <div className="flex flex-col font-['Nunito:Regular',sans-serif] font-normal h-[16px] justify-center leading-[0] relative shrink-0 text-[#6b7280] text-[12px] text-center w-[27.92px]">
        <p className="leading-[16px] whitespace-pre-wrap">Tired</p>
      </div>
    </div>
  );
}

function Container5() {
  return (
    <div className="content-stretch flex gap-[16px] items-end justify-center relative shrink-0 w-full" data-name="Container">
      <Button1 />
      <Button2 />
      <Button3 />
    </div>
  );
}

function Container3() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[10.6px] items-start pt-[8.039px] px-[32px] relative w-full">
        <Container4 />
        <Container5 />
      </div>
    </div>
  );
}

function Header() {
  return (
    <div className="backdrop-blur-[12px] bg-[rgba(255,255,255,0.4)] relative rounded-bl-[40px] rounded-br-[40px] shrink-0 w-full" data-name="Header">
      <div className="content-stretch flex flex-col gap-[13px] items-center overflow-clip pb-[33px] relative rounded-[inherit] w-full">
        <div className="absolute bg-[#f8e1e7] blur-[32px] opacity-50 right-[-40px] rounded-[9999px] size-[160px] top-[-40px]" data-name="Background+Blur" />
        <Container1 />
        <div className="absolute bg-[#dbeafe] blur-[32px] left-[-40px] opacity-40 rounded-[9999px] size-[128px] top-[80px]" data-name="Background+Blur" />
        <div className="flex h-[262.43px] items-center justify-center relative shrink-0 w-[346.424px]" style={{ "--transform-inner-width": "1185.265625", "--transform-inner-height": "405.953125" } as React.CSSProperties}>
          <div className="-rotate-1 flex-none">
            <OverlayBorderShadowOverlayBlur />
          </div>
        </div>
        <Container3 />
      </div>
      <div aria-hidden="true" className="absolute border-[rgba(255,255,255,0.2)] border-b border-solid inset-0 pointer-events-none rounded-bl-[40px] rounded-br-[40px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)]" />
    </div>
  );
}

function Heading1() {
  return (
    <div className="relative shadow-[0px_1px_1px_0px_rgba(0,0,0,0.05)] shrink-0 w-full" data-name="Heading 2">
      <div className="content-stretch flex flex-col items-start pl-[8px] relative w-full">
        <div className="flex flex-col font-['Dancing_Script:Regular',sans-serif] font-normal h-[32px] justify-center leading-[0] relative shrink-0 text-[#6c5b7b] text-[24px] w-[191.63px]">
          <p className="leading-[32px] whitespace-pre-wrap">My Recovery Roadmap</p>
        </div>
      </div>
    </div>
  );
}

function BackgroundBorder() {
  return (
    <div className="bg-[#e492a7] relative rounded-[9999px] shrink-0 size-[24px]" data-name="Background+Border">
      <div aria-hidden="true" className="absolute border-4 border-[#fff5f7] border-solid inset-0 pointer-events-none rounded-[9999px]" />
      <div className="absolute bg-[rgba(255,255,255,0)] left-0 rounded-[9999px] shadow-[0px_0px_0px_2px_rgba(228,146,167,0.2),0px_4px_6px_-1px_rgba(0,0,0,0.1),0px_2px_4px_-2px_rgba(0,0,0,0.1)] size-[24px] top-0" data-name="Overlay+Shadow" />
    </div>
  );
}

function Margin() {
  return (
    <div className="content-stretch flex flex-col h-[28px] items-start pt-[4px] relative shrink-0 w-[24px]" data-name="Margin">
      <BackgroundBorder />
    </div>
  );
}

function Heading2() {
  return (
    <div className="relative shrink-0 w-[241px]" data-name="Heading 3">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative w-full">
        <div className="flex flex-col font-['Nunito:Bold',sans-serif] font-bold h-[28px] justify-center leading-[0] relative shrink-0 text-[#1f2937] text-[18px] w-[124.22px]">
          <p className="leading-[28px] whitespace-pre-wrap">Chemo Cycle 3</p>
        </div>
      </div>
    </div>
  );
}

function Container9() {
  return (
    <div className="relative shrink-0 w-[241px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-[0.625px] pt-[2.875px] relative w-full">
        <div className="flex flex-col font-['Nunito:Regular',sans-serif] font-normal h-[46px] justify-center leading-[22.75px] relative shrink-0 text-[#4b5563] text-[14px] w-[238.58px] whitespace-pre-wrap">
          <p className="mb-0">Hydration is key today. Remember the</p>
          <p>lemon water.</p>
        </div>
      </div>
    </div>
  );
}

function OverlayBorderShadowOverlayBlur3() {
  return (
    <div className="backdrop-blur-[6px] bg-[rgba(255,255,255,0.25)] flex-[1_0_0] min-h-px min-w-px relative rounded-[32px]" data-name="Overlay+Border+Shadow+OverlayBlur">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col gap-[4px] items-start pl-[24px] pr-[21px] py-[21px] relative w-full">
          <div className="flex flex-col font-['Nunito:Bold',sans-serif] font-bold h-[16px] justify-center leading-[0] relative shrink-0 text-[#e492a7] text-[12px] tracking-[0.3px] uppercase w-[92.77px]">
            <p className="leading-[16px] whitespace-pre-wrap">Today, Oct 24</p>
          </div>
          <Heading2 />
          <Container9 />
          <div className="absolute right-px rounded-bl-[24px] size-[64px] top-px" data-name="Gradient" style={{ backgroundImage: "linear-gradient(225deg, rgba(228, 146, 167, 0.1) 0%, rgba(228, 146, 167, 0) 100%)" }} />
        </div>
      </div>
      <div aria-hidden="true" className="absolute border-[rgba(255,255,255,0.4)] border-b border-l-4 border-r border-solid border-t inset-0 pointer-events-none rounded-[32px] shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1),0px_4px_6px_-4px_rgba(0,0,0,0.1)]" />
    </div>
  );
}

function Container8() {
  return (
    <div className="content-stretch flex gap-[16px] items-start relative shrink-0 w-full" data-name="Container">
      <div className="absolute bg-gradient-to-r blur-[8px] from-[rgba(228,146,167,0.2)] inset-[-8px] opacity-0 rounded-[24px] to-[rgba(228,146,167,0)]" data-name="Gradient+Blur" />
      <Margin />
      <OverlayBorderShadowOverlayBlur3 />
    </div>
  );
}

function Margin1() {
  return (
    <div className="content-stretch flex flex-col h-[28px] items-start pt-[4px] relative shrink-0 w-[24px]" data-name="Margin">
      <div className="bg-[#d1d5db] relative rounded-[9999px] shrink-0 size-[24px]" data-name="Background+Border">
        <div aria-hidden="true" className="absolute border-4 border-[#fff5f7] border-solid inset-0 pointer-events-none rounded-[9999px]" />
      </div>
    </div>
  );
}

function Heading3() {
  return (
    <div className="relative shrink-0 w-[244px]" data-name="Heading 3">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative w-full">
        <div className="flex flex-col font-['Nunito:Bold',sans-serif] font-bold h-[24px] justify-center leading-[0] relative shrink-0 text-[#374151] text-[16px] w-[121.61px]">
          <p className="leading-[24px] whitespace-pre-wrap">{`Rest & Recovery`}</p>
        </div>
      </div>
    </div>
  );
}

function Container11() {
  return (
    <div className="relative shrink-0 w-[244px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[4px] relative w-full">
        <div className="flex flex-col font-['Nunito:Regular',sans-serif] font-normal h-[20px] justify-center leading-[0] relative shrink-0 text-[#6b7280] text-[14px] w-[205.92px]">
          <p className="leading-[20px] whitespace-pre-wrap">Scheduled nap time and reading.</p>
        </div>
      </div>
    </div>
  );
}

function OverlayBorderShadowOverlayBlur4() {
  return (
    <div className="backdrop-blur-[6px] bg-[rgba(255,255,255,0.4)] flex-[1_0_0] min-h-px min-w-px relative rounded-[32px]" data-name="Overlay+Border+Shadow+OverlayBlur">
      <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.5)] border-solid inset-0 pointer-events-none rounded-[32px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)]" />
      <div className="content-stretch flex flex-col gap-[4px] items-start p-[21px] relative w-full">
        <div className="flex flex-col font-['Nunito:Bold',sans-serif] font-bold h-[16px] justify-center leading-[0] relative shrink-0 text-[#9ca3af] text-[12px] tracking-[0.3px] uppercase w-[77.56px]">
          <p className="leading-[16px] whitespace-pre-wrap">Tomorrow</p>
        </div>
        <Heading3 />
        <Container11 />
      </div>
    </div>
  );
}

function Container10() {
  return (
    <div className="content-stretch flex gap-[16px] items-start relative shrink-0 w-full" data-name="Container">
      <Margin1 />
      <OverlayBorderShadowOverlayBlur4 />
    </div>
  );
}

function Container7() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="content-stretch flex flex-col gap-[32px] items-start pl-[16px] relative w-full">
        <div className="absolute bottom-0 left-[23px] opacity-70 top-[40px] w-[2px]" data-name="Vertical Divider">
          <div aria-hidden="true" className="absolute border-[#e492a7] border-dashed border-l-2 inset-0 pointer-events-none" />
        </div>
        <Container8 />
        <Container10 />
      </div>
    </div>
  );
}

function Container6() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="content-stretch flex flex-col gap-[32px] items-start px-[24px] relative w-full">
        <Heading1 />
        <Container7 />
      </div>
    </div>
  );
}

function Heading4() {
  return (
    <div className="content-stretch flex flex-col items-start pl-[8px] relative shrink-0" data-name="Heading 2">
      <div className="flex flex-col font-['Dancing_Script:Regular',sans-serif] font-normal h-[32px] justify-center leading-[0] relative shrink-0 text-[#6c5b7b] text-[24px] w-[157.55px]">
        <p className="leading-[32px] whitespace-pre-wrap">{`Today's Reflections`}</p>
      </div>
    </div>
  );
}

function OverlayOverlayBlur() {
  return (
    <div className="backdrop-blur-[2px] bg-[rgba(255,255,255,0.5)] content-stretch flex flex-col items-start px-[8px] py-[4px] relative rounded-[6px] shrink-0" data-name="Overlay+OverlayBlur">
      <div className="flex flex-col font-['Liberation_Mono:Regular',sans-serif] h-[16px] justify-center leading-[0] not-italic relative shrink-0 text-[#9ca3af] text-[12px] w-[57.61px]">
        <p className="leading-[16px] whitespace-pre-wrap">14:30 PM</p>
      </div>
    </div>
  );
}

function Container13() {
  return (
    <div className="content-stretch flex items-end justify-between relative shrink-0 w-full" data-name="Container">
      <Heading4 />
      <OverlayOverlayBlur />
    </div>
  );
}

function Container15() {
  return (
    <div className="relative shrink-0 size-[15px]" data-name="Container">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15 15">
        <g id="Container">
          <path d={svgPaths.p2697f780} fill="var(--fill-0, #E492A7)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Container16() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative">
        <div className="flex flex-col font-['Nunito:Semi_Bold',sans-serif] h-[20px] justify-center leading-[0] not-italic relative shrink-0 text-[#6b7280] text-[14px] w-[78.11px]">
          <p className="leading-[20px] whitespace-pre-wrap">Dear Diary...</p>
        </div>
      </div>
    </div>
  );
}

function HorizontalBorder() {
  return (
    <div className="relative shrink-0 w-[292px]" data-name="HorizontalBorder">
      <div aria-hidden="true" className="absolute border-[rgba(209,213,219,0.5)] border-b border-dashed inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[8px] items-center pb-[13px] relative w-full">
        <Container15 />
        <Container16 />
      </div>
    </div>
  );
}

function Container17() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-0 pb-[0.75px] right-0 top-[-0.75px]" data-name="Container">
      <div className="flex flex-col font-['Nunito:Regular',sans-serif] font-normal h-[65px] justify-center leading-[32.5px] relative shrink-0 text-[20px] text-[rgba(156,163,175,0.7)] w-[285.55px] whitespace-pre-wrap">
        <p className="mb-0">{`How are you feeling right now? `}</p>
        <p>{`What's on your mind?`}</p>
      </div>
    </div>
  );
}

function Textarea() {
  return (
    <div className="h-[128px] relative shrink-0 w-[292px]" data-name="Textarea">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid overflow-clip relative rounded-[inherit] size-full">
        <Container17 />
      </div>
    </div>
  );
}

function Container20() {
  return (
    <div className="relative shrink-0 size-[15px]" data-name="Container">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15 15">
        <g id="Container">
          <path d={svgPaths.p2c84aa00} fill="var(--fill-0, #9CA3AF)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Button4() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center p-[8px] relative rounded-[9999px] shrink-0" data-name="Button">
      <Container20 />
    </div>
  );
}

function Container21() {
  return (
    <div className="h-[15.82px] relative shrink-0 w-[11.514px]" data-name="Container">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11.5138 15.8203">
        <g id="Container">
          <path d={svgPaths.p23224b80} fill="var(--fill-0, #9CA3AF)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Button5() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center p-[8px] relative rounded-[9999px] shrink-0" data-name="Button">
      <Container21 />
    </div>
  );
}

function Container19() {
  return (
    <div className="content-stretch flex gap-[8px] items-start relative shrink-0" data-name="Container">
      <Button4 />
      <Button5 />
    </div>
  );
}

function Container22() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Nunito:Bold',sans-serif] font-bold h-[20px] justify-center leading-[0] relative shrink-0 text-[14px] text-center text-white w-[31.25px]">
        <p className="leading-[20px] whitespace-pre-wrap">Save</p>
      </div>
    </div>
  );
}

function Container23() {
  return (
    <div className="relative shrink-0 size-[10.5px]" data-name="Container">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10.5 10.5">
        <g id="Container">
          <path d={svgPaths.p1bf0f680} fill="var(--fill-0, white)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Button6() {
  return (
    <div className="backdrop-blur-[2px] bg-[rgba(228,146,167,0.9)] content-stretch flex gap-[8px] items-center px-[24px] py-[8px] relative rounded-[9999px] shrink-0" data-name="Button">
      <div className="absolute bg-[rgba(255,255,255,0)] inset-[0_-0.5px_0_0] rounded-[9999px] shadow-[0px_10px_15px_-3px_rgba(228,146,167,0.3),0px_4px_6px_-4px_rgba(228,146,167,0.3)]" data-name="Button:shadow" />
      <Container22 />
      <Container23 />
    </div>
  );
}

function Container18() {
  return (
    <div className="relative shrink-0 w-[292px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-between pt-[8px] relative w-full">
        <Container19 />
        <Button6 />
      </div>
    </div>
  );
}

function OverlayBorderOverlayBlur2() {
  return (
    <div className="backdrop-blur-[6px] bg-[rgba(255,255,255,0.25)] relative rounded-[32px] shrink-0 w-full" data-name="Overlay+Border+OverlayBlur">
      <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.4)] border-solid inset-0 pointer-events-none rounded-[32px]" />
      <div className="content-stretch flex flex-col gap-[16px] items-start p-[25px] relative w-full">
        <div className="absolute bg-[rgba(255,255,255,0)] inset-0 rounded-[32px] shadow-[0px_20px_25px_-5px_rgba(0,0,0,0.1),0px_8px_10px_-6px_rgba(0,0,0,0.1)]" data-name="Overlay+Shadow" />
        <HorizontalBorder />
        <Textarea />
        <Container18 />
      </div>
    </div>
  );
}

function Container14() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="absolute flex inset-[1.04px_-2.62px_-6.96px_-2.62px] items-center justify-center">
        <div className="flex-none h-[287.312px] rotate-[0.95deg] skew-x-[-0.11deg] w-[341.995px]">
          <div className="bg-[rgba(254,249,195,0.5)] blur-[2px] rounded-[32px] size-full" data-name="Overlay+Blur" />
        </div>
      </div>
      <div className="absolute flex inset-[-2.96px_-2.62px] items-center justify-center">
        <div className="flex-none h-[287.312px] rotate-[-0.95deg] skew-x-[0.11deg] w-[341.995px]">
          <div className="backdrop-blur-[2px] bg-[rgba(255,255,255,0.4)] rounded-[32px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)] size-full" data-name="Overlay+Shadow+OverlayBlur" />
        </div>
      </div>
      <OverlayBorderOverlayBlur2 />
    </div>
  );
}

function Container12() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="content-stretch flex flex-col gap-[16px] items-start pt-[8px] px-[24px] relative w-full">
        <Container13 />
        <Container14 />
      </div>
    </div>
  );
}

function Heading5() {
  return (
    <div className="content-stretch flex flex-col items-start pl-[8px] relative shrink-0" data-name="Heading 2">
      <div className="flex flex-col font-['Dancing_Script:Regular',sans-serif] font-normal h-[32px] justify-center leading-[0] relative shrink-0 text-[#6c5b7b] text-[24px] w-[115.42px]">
        <p className="leading-[32px] whitespace-pre-wrap">Weekly Wins</p>
      </div>
    </div>
  );
}

function Link() {
  return (
    <div className="backdrop-blur-[2px] bg-[rgba(255,255,255,0.5)] content-stretch flex flex-col items-start px-[12px] py-[4px] relative rounded-[9999px] shrink-0" data-name="Link">
      <div className="flex flex-col font-['Nunito:Bold',sans-serif] font-bold h-[16px] justify-center leading-[0] relative shrink-0 text-[#e492a7] text-[12px] tracking-[0.3px] uppercase w-[60.5px]">
        <p className="leading-[16px] whitespace-pre-wrap">View All</p>
      </div>
    </div>
  );
}

function Container25() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between px-[24px] relative w-full">
          <Heading5 />
          <Link />
        </div>
      </div>
    </div>
  );
}

function Flowers() {
  return (
    <div className="h-[158px] relative shrink-0 w-full" data-name="Flowers">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgFlowers} />
      </div>
    </div>
  );
}

function Shadow() {
  return (
    <div className="absolute bottom-[12px] content-stretch flex flex-col items-start left-[12px] shadow-[0px_2px_2px_0px_rgba(0,0,0,0.06),0px_4px_3px_0px_rgba(0,0,0,0.07)]" data-name="Shadow">
      <div className="flex flex-col font-['Nunito:Bold',sans-serif] font-bold h-[20px] justify-center leading-[0] relative shrink-0 text-[14px] text-white w-[82.78px]">
        <p className="leading-[20px] whitespace-pre-wrap">Walk in park</p>
      </div>
    </div>
  );
}

function OverlayShadow() {
  return (
    <div className="aspect-square bg-[rgba(255,255,255,0)] relative rounded-[24px] shrink-0" data-name="Overlay+Shadow">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start justify-center overflow-clip relative rounded-[inherit] w-full">
        <Flowers />
        <div className="absolute bg-gradient-to-t from-[rgba(0,0,0,0.6)] inset-0 to-[rgba(0,0,0,0)] via-1/2 via-[rgba(0,0,0,0)]" data-name="Gradient" />
        <Shadow />
      </div>
      <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_2px_4px_0px_rgba(0,0,0,0.05)]" />
    </div>
  );
}

function Container28() {
  return (
    <div className="h-[39px] relative shrink-0 w-[158px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid overflow-clip relative rounded-[inherit] size-full">
        <div className="-translate-y-1/2 absolute flex flex-col font-['Nunito:Regular',sans-serif] font-normal h-[39px] justify-center leading-[19.5px] left-0 text-[#4b5563] text-[12px] top-[18.75px] w-[150px] whitespace-pre-wrap">
          <p className="mb-0">Finally managed to walk for</p>
          <p>20 mins without stopping!</p>
        </div>
      </div>
    </div>
  );
}

function OverlayBorderOverlayBlur3() {
  return (
    <div className="backdrop-blur-[6px] bg-[rgba(255,255,255,0.25)] flex-[1_0_0] min-h-px min-w-px relative rounded-[32px] w-full" data-name="Overlay+Border+OverlayBlur">
      <div aria-hidden="true" className="absolute border-[#e492a7] border-b-4 border-l border-r border-solid border-t inset-0 pointer-events-none rounded-[32px]" />
      <div className="content-stretch flex flex-col gap-[12px] items-start pb-[20px] pt-[17px] px-[17px] relative size-full">
        <div className="absolute bg-[rgba(255,255,255,0)] inset-0 rounded-[32px] shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1),0px_4px_6px_-4px_rgba(0,0,0,0.1)]" data-name="Overlay+Shadow" />
        <OverlayShadow />
        <Container28 />
      </div>
    </div>
  );
}

function Shadow1() {
  return (
    <div className="h-[26.25px] relative shrink-0 w-[22.291px]" data-name="Shadow">
      <div className="absolute inset-[0_-13.46%_-26.67%_-13.46%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 28.2913 33.25">
          <g filter="url(#filter0_dd_1_1968)" id="Shadow">
            <path d={svgPaths.p16ee9500} fill="var(--fill-0, #FACC15)" id="Icon" />
          </g>
          <defs>
            <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="33.25" id="filter0_dd_1_1968" width="28.2913" x="-9.06934e-10" y="0">
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
              <feOffset dy="4" />
              <feGaussianBlur stdDeviation="1.5" />
              <feComposite in2="hardAlpha" operator="out" />
              <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.07 0" />
              <feBlend in2="BackgroundImageFix" mode="normal" result="effect1_dropShadow_1_1968" />
              <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
              <feOffset dy="2" />
              <feGaussianBlur stdDeviation="1" />
              <feComposite in2="hardAlpha" operator="out" />
              <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.06 0" />
              <feBlend in2="effect1_dropShadow_1_1968" mode="normal" result="effect2_dropShadow_1_1968" />
              <feBlend in="SourceGraphic" in2="effect2_dropShadow_1_1968" mode="normal" result="shape" />
            </filter>
          </defs>
        </svg>
      </div>
    </div>
  );
}

function Container29() {
  return (
    <div className="absolute content-stretch flex flex-col items-start right-[-12px] top-[-12px]" data-name="Container">
      <Shadow1 />
    </div>
  );
}

function Container27() {
  return (
    <div className="absolute bottom-[32px] content-stretch flex flex-col items-start justify-center left-[24px] top-0 w-[192px]" data-name="Container">
      <OverlayBorderOverlayBlur3 />
      <Container29 />
    </div>
  );
}

function Shadow2() {
  return (
    <div className="h-[39.305px] relative shrink-0 w-[32.063px]" data-name="Shadow">
      <div className="absolute inset-[0_-3.12%_-5.09%_-3.12%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 34.0625 41.3047">
          <g filter="url(#filter0_d_1_1965)" id="Shadow">
            <path d={svgPaths.p3948d180} fill="var(--fill-0, #93C5FD)" id="Icon" />
          </g>
          <defs>
            <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="41.3047" id="filter0_d_1_1965" width="34.0625" x="0" y="0">
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
              <feOffset dy="1" />
              <feGaussianBlur stdDeviation="0.5" />
              <feComposite in2="hardAlpha" operator="out" />
              <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.05 0" />
              <feBlend in2="BackgroundImageFix" mode="normal" result="effect1_dropShadow_1_1965" />
              <feBlend in="SourceGraphic" in2="effect1_dropShadow_1_1965" mode="normal" result="shape" />
            </filter>
          </defs>
        </svg>
      </div>
    </div>
  );
}

function Container31() {
  return (
    <div className="absolute bottom-[13.3px] left-[13px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative">
        <div className="flex flex-col font-['Nunito:Bold',sans-serif] font-bold h-[20px] justify-center leading-[0] relative shrink-0 text-[#374151] text-[14px] w-[99.2px]">
          <p className="leading-[20px] whitespace-pre-wrap">Hydration Goal</p>
        </div>
      </div>
    </div>
  );
}

function OverlayBorder() {
  return (
    <div className="aspect-square bg-[rgba(239,246,255,0.5)] relative rounded-[24px] shrink-0" data-name="Overlay+Border">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center overflow-clip px-px py-[55px] relative rounded-[inherit] w-full">
        <Shadow2 />
        <Container31 />
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(219,234,254,0.5)] border-solid inset-0 pointer-events-none rounded-[24px]" />
    </div>
  );
}

function Container32() {
  return (
    <div className="h-[39px] relative shrink-0 w-[158px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid overflow-clip relative rounded-[inherit] size-full">
        <div className="-translate-y-1/2 absolute flex flex-col font-['Nunito:Regular',sans-serif] font-normal h-[39px] justify-center leading-[19.5px] left-0 text-[#4b5563] text-[12px] top-[18.75px] w-[154.72px] whitespace-pre-wrap">
          <p className="mb-0">Drank 2L of water yesterday.</p>
          <p>Feeling less dizzy.</p>
        </div>
      </div>
    </div>
  );
}

function OverlayBorderOverlayBlur4() {
  return (
    <div className="backdrop-blur-[6px] bg-[rgba(255,255,255,0.25)] flex-[1_0_0] min-h-px min-w-px relative rounded-[32px] w-full" data-name="Overlay+Border+OverlayBlur">
      <div aria-hidden="true" className="absolute border-[#93c5fd] border-b-4 border-l border-r border-solid border-t inset-0 pointer-events-none rounded-[32px]" />
      <div className="content-stretch flex flex-col gap-[12px] items-start pb-[20px] pt-[17px] px-[17px] relative size-full">
        <div className="absolute bg-[rgba(255,255,255,0)] inset-0 rounded-[32px] shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1),0px_4px_6px_-4px_rgba(0,0,0,0.1)]" data-name="Overlay+Shadow" />
        <OverlayBorder />
        <Container32 />
      </div>
    </div>
  );
}

function Container30() {
  return (
    <div className="absolute bottom-[32px] content-stretch flex flex-col items-start justify-center left-[236px] top-0 w-[192px]" data-name="Container">
      <OverlayBorderOverlayBlur4 />
    </div>
  );
}

function BookReading() {
  return (
    <div className="h-[158px] relative shrink-0 w-full" data-name="Book reading">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgBookReading} />
      </div>
    </div>
  );
}

function Shadow3() {
  return (
    <div className="absolute bottom-[12px] content-stretch flex flex-col items-start left-[12px] shadow-[0px_2px_2px_0px_rgba(0,0,0,0.06),0px_4px_3px_0px_rgba(0,0,0,0.07)]" data-name="Shadow">
      <div className="flex flex-col font-['Nunito:Bold',sans-serif] font-bold h-[20px] justify-center leading-[0] relative shrink-0 text-[14px] text-white w-[91.83px]">
        <p className="leading-[20px] whitespace-pre-wrap">Finished Book</p>
      </div>
    </div>
  );
}

function OverlayShadow1() {
  return (
    <div className="aspect-square bg-[rgba(255,255,255,0)] relative rounded-[24px] shrink-0" data-name="Overlay+Shadow">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start justify-center overflow-clip relative rounded-[inherit] w-full">
        <BookReading />
        <div className="absolute bg-gradient-to-t from-[rgba(0,0,0,0.6)] inset-0 to-[rgba(0,0,0,0)] via-1/2 via-[rgba(0,0,0,0)]" data-name="Gradient" />
        <Shadow3 />
      </div>
      <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_2px_4px_0px_rgba(0,0,0,0.05)]" />
    </div>
  );
}

function Container34() {
  return (
    <div className="h-[39px] relative shrink-0 w-[158px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid overflow-clip relative rounded-[inherit] size-full">
        <div className="-translate-y-1/2 absolute flex flex-col font-['Nunito:Regular',sans-serif] font-normal h-[39px] justify-center leading-[19.5px] left-0 text-[#4b5563] text-[12px] top-[18.75px] w-[147.92px] whitespace-pre-wrap">
          <p className="mb-0">{`Completed 'The Alchemist'.`}</p>
          <p>Such a good read.</p>
        </div>
      </div>
    </div>
  );
}

function OverlayBorderOverlayBlur5() {
  return (
    <div className="backdrop-blur-[6px] bg-[rgba(255,255,255,0.25)] flex-[1_0_0] min-h-px min-w-px relative rounded-[32px] w-full" data-name="Overlay+Border+OverlayBlur">
      <div aria-hidden="true" className="absolute border-[#d8b4fe] border-b-4 border-l border-r border-solid border-t inset-0 pointer-events-none rounded-[32px]" />
      <div className="content-stretch flex flex-col gap-[12px] items-start pb-[20px] pt-[17px] px-[17px] relative size-full">
        <div className="absolute bg-[rgba(255,255,255,0)] inset-0 rounded-[32px] shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1),0px_4px_6px_-4px_rgba(0,0,0,0.1)]" data-name="Overlay+Shadow" />
        <OverlayShadow1 />
        <Container34 />
      </div>
    </div>
  );
}

function Container33() {
  return (
    <div className="absolute bottom-[32px] content-stretch flex flex-col items-start justify-center left-[448px] top-0 w-[192px]" data-name="Container">
      <OverlayBorderOverlayBlur5 />
    </div>
  );
}

function Container26() {
  return (
    <div className="h-[278px] overflow-clip relative shrink-0 w-full" data-name="Container">
      <Container27 />
      <Container30 />
      <Container33 />
    </div>
  );
}

function Container24() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start pt-[8px] relative shrink-0 w-full" data-name="Container">
      <Container25 />
      <Container26 />
    </div>
  );
}

function Container() {
  return (
    <div className="content-stretch flex flex-col gap-[32px] items-start max-w-[448px] pb-[192px] relative shrink-0 w-full" data-name="Container">
      <Header />
      <Container6 />
      <Container12 />
      <Container24 />
    </div>
  );
}

function Container36() {
  return (
    <div className="h-[22.031px] relative shrink-0 w-[19.969px]" data-name="Container">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 19.9688 22.0312">
        <g id="Container">
          <path d={svgPaths.p1fa35b10} fill="var(--fill-0, #9CA3AF)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Container37() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Nunito:Regular',sans-serif] font-normal h-[15px] justify-center leading-[0] relative shrink-0 text-[#9ca3af] text-[10px] w-[41.45px]">
        <p className="leading-[15px] whitespace-pre-wrap">Schedule</p>
      </div>
    </div>
  );
}

function Link1() {
  return (
    <div className="-translate-y-1/2 absolute content-stretch flex flex-col gap-[4px] items-center left-[86.7px] top-1/2" data-name="Link">
      <Container36 />
      <Container37 />
    </div>
  );
}

function Container38() {
  return (
    <div className="h-[13.969px] relative shrink-0 w-[22.031px]" data-name="Container">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 22.0312 13.9688">
        <g id="Container">
          <path d={svgPaths.p96d1020} fill="var(--fill-0, #9CA3AF)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Container39() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Nunito:Regular',sans-serif] font-normal h-[15px] justify-center leading-[0] relative shrink-0 text-[#9ca3af] text-[10px] w-[51.38px]">
        <p className="leading-[15px] whitespace-pre-wrap">Community</p>
      </div>
    </div>
  );
}

function Link2() {
  return (
    <div className="-translate-y-1/2 absolute content-stretch flex flex-col gap-[4px] items-center left-[255.06px] top-1/2" data-name="Link">
      <Container38 />
      <Container39 />
    </div>
  );
}

function Container40() {
  return (
    <div className="h-[17.016px] relative shrink-0 w-[22.031px]" data-name="Container">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 22.0312 17.0156">
        <g id="Container">
          <path d={svgPaths.p23712300} fill="var(--fill-0, #9CA3AF)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Container41() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Nunito:Regular',sans-serif] font-normal h-[15px] justify-center leading-[0] relative shrink-0 text-[#9ca3af] text-[10px] w-[30.34px]">
        <p className="leading-[15px] whitespace-pre-wrap">Health</p>
      </div>
    </div>
  );
}

function Link3() {
  return (
    <div className="-translate-y-1/2 absolute content-stretch flex flex-col gap-[4px] items-center left-[341.89px] top-1/2" data-name="Link">
      <Container40 />
      <Container41 />
    </div>
  );
}

function Container42() {
  return (
    <div className="h-[19.969px] relative shrink-0 w-[16.031px]" data-name="Container">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16.0312 19.9688">
        <g id="Container">
          <path d={svgPaths.p1dd26480} fill="var(--fill-0, #E492A7)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Container43() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Nunito:Bold',sans-serif] font-bold h-[15px] justify-center leading-[0] relative shrink-0 text-[#e492a7] text-[10px] w-[33.53px]">
        <p className="leading-[15px] whitespace-pre-wrap">Journal</p>
      </div>
    </div>
  );
}

function Link4() {
  return (
    <div className="-translate-y-1/2 absolute content-stretch flex flex-col gap-[4px] items-center left-[17.72px] top-1/2" data-name="Link">
      <div className="absolute bg-[rgba(228,146,167,0.2)] blur-[8px] left-[0.76px] rounded-[9999px] size-[32px] top-[-4px]" data-name="Overlay+Blur" />
      <Container42 />
      <Container43 />
    </div>
  );
}

function Container45() {
  return (
    <div className="relative shrink-0 size-[17.461px]" data-name="Container">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17.4609 17.4609">
        <g id="Container">
          <path d={svgPaths.p24045980} fill="var(--fill-0, white)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Button7() {
  return (
    <div className="backdrop-blur-[2px] content-stretch flex items-center justify-center p-[4px] relative rounded-[9999px] shrink-0 size-[56px]" data-name="Button" style={{ backgroundImage: "linear-gradient(135deg, rgb(228, 146, 167) 0%, rgb(192, 108, 132) 100%)" }}>
      <div aria-hidden="true" className="absolute border-4 border-[rgba(255,255,255,0.8)] border-solid inset-0 pointer-events-none rounded-[9999px]" />
      <div className="absolute bg-[rgba(255,255,255,0)] left-0 rounded-[9999px] shadow-[0px_10px_15px_-3px_rgba(228,146,167,0.4),0px_4px_6px_-4px_rgba(228,146,167,0.4)] size-[56px] top-0" data-name="Button:shadow" />
      <Container45 />
    </div>
  );
}

function Container44() {
  return (
    <div className="-translate-y-1/2 absolute content-stretch flex flex-col items-start left-[163.61px] top-[calc(50%-24px)]" data-name="Container">
      <Button7 />
    </div>
  );
}

function Container35() {
  return (
    <div className="h-[64px] max-w-[448px] relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Link1 />
        <Link2 />
        <Link3 />
        <Link4 />
        <Container44 />
      </div>
    </div>
  );
}

function Nav() {
  return (
    <div className="absolute backdrop-blur-[12px] bg-[rgba(255,255,255,0.7)] bottom-0 content-stretch flex flex-col items-start left-0 pb-[24px] pt-[9px] right-0" data-name="Nav">
      <div aria-hidden="true" className="absolute border-[rgba(255,255,255,0.5)] border-solid border-t inset-0 pointer-events-none shadow-[0px_-10px_40px_0px_rgba(0,0,0,0.05)]" />
      <Container35 />
    </div>
  );
}

export default function MyHealingJournalDesktop() {
  return (
    <div className="bg-[#fff5f7] content-stretch flex flex-col items-start pb-[33px] relative size-full" data-name="My Healing Journal Desktop">
      <div className="absolute bg-size-[512px_512px] bg-top-left inset-0 mix-blend-multiply opacity-40" data-name="Image" style={{ backgroundImage: `url('${imgImage}')` }} />
      <Container />
      <Nav />
    </div>
  );
}