import svgPaths from "./svg-po1nzsux78";
import imgPatientInWaitingAreaIllustration from "figma:asset/5618f913b12613c7cf157779e93eb8989e7bd118.png";
import imgCaregiverAvatar from "figma:asset/5fc7ca00211ff7c5429e3b2d7315cb072b280a6b.png";
import imgCaregiverAvatar1 from "figma:asset/5952d18353640c72c64e06d0eb1c71834a6b77c4.png";

function Container2() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Container">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Container">
          <path d={svgPaths.p300a1100} fill="var(--fill-0, #334155)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Button() {
  return (
    <div className="backdrop-blur-[5px] bg-[rgba(255,255,255,0.45)] content-stretch flex flex-col items-center justify-center p-[9px] relative rounded-[9999px] shrink-0" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.3)] border-solid inset-0 pointer-events-none rounded-[9999px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)]" />
      <Container2 />
    </div>
  );
}

function Heading() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Heading 1">
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold h-[28px] justify-center leading-[0] not-italic relative shrink-0 text-[18px] text-[rgba(30,41,59,0.9)] tracking-[-0.45px] w-[121.16px]">
        <p className="leading-[28px] whitespace-pre-wrap">Care Schedule</p>
      </div>
    </div>
  );
}

function Container3() {
  return (
    <div className="h-[20px] relative shrink-0 w-[16px]" data-name="Container">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 20">
        <g id="Container">
          <path d={svgPaths.p164b49c0} fill="var(--fill-0, #334155)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Button1() {
  return (
    <div className="backdrop-blur-[5px] bg-[rgba(255,255,255,0.45)] content-stretch flex flex-col items-center justify-center p-[9px] relative rounded-[9999px] shrink-0" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.3)] border-solid inset-0 pointer-events-none rounded-[9999px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)]" />
      <Container3 />
    </div>
  );
}

function Container1() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="Container">
      <Button />
      <Heading />
      <Button1 />
    </div>
  );
}

function PatientInWaitingAreaIllustration() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px mix-blend-overlay opacity-90 relative w-[298px]" data-name="Patient in waiting area illustration">
      <div className="absolute bg-clip-padding border-0 border-[transparent] border-solid inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute h-[236.51%] left-0 max-w-none top-[-68.25%] w-full" src={imgPatientInWaitingAreaIllustration} />
      </div>
    </div>
  );
}

function BackgroundBorderShadow() {
  return (
    <div className="bg-gradient-to-b from-[rgba(255,255,255,0.2)] h-[128px] relative rounded-[32px] shrink-0 to-[rgba(255,255,255,0.05)] w-full" data-name="Background+Border+Shadow">
      <div className="content-stretch flex flex-col items-start justify-center overflow-clip p-px relative rounded-[inherit] size-full">
        <PatientInWaitingAreaIllustration />
      </div>
      <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_2px_4px_1px_rgba(0,0,0,0.05)]" />
      <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.4)] border-solid inset-0 pointer-events-none rounded-[32px]" />
    </div>
  );
}

function Margin() {
  return (
    <div className="content-stretch flex flex-col h-[132px] items-start pb-[4px] relative shrink-0 w-full" data-name="Margin">
      <BackgroundBorderShadow />
    </div>
  );
}

function OverlayBorderOverlayBlur() {
  return (
    <div className="absolute backdrop-blur-[2px] bg-[rgba(224,231,255,0.5)] content-stretch flex items-start justify-center left-[21.65px] px-[13px] py-[5px] rounded-[9999px] top-0" data-name="Overlay+Border+OverlayBlur">
      <div aria-hidden="true" className="absolute border border-[rgba(224,231,255,0.2)] border-solid inset-0 pointer-events-none rounded-[9999px]" />
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold h-[16px] justify-center leading-[0] not-italic relative shrink-0 text-[#4338ca] text-[12px] text-center w-[162.38px]">
        <p className="leading-[16px] whitespace-pre-wrap">Upcoming: Chemo Cycle #4</p>
      </div>
    </div>
  );
}

function Heading1() {
  return (
    <div className="absolute content-stretch flex flex-col items-center left-0 right-0 top-[34px]" data-name="Heading 2">
      <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold h-[30px] justify-center leading-[0] not-italic relative shrink-0 text-[#1e293b] text-[24px] text-center w-[212.44px]">
        <p className="leading-[30px] whitespace-pre-wrap">3 Days Until Cycle</p>
      </div>
    </div>
  );
}

function Container6() {
  return (
    <div className="absolute content-stretch flex flex-col items-center left-0 right-0 top-[68px]" data-name="Container">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal h-[20px] justify-center leading-[0] not-italic relative shrink-0 text-[#64748b] text-[14px] text-center w-[231.69px]">
        <p className="leading-[20px] whitespace-pre-wrap">Remember to rest well beforehand.</p>
      </div>
    </div>
  );
}

function Container5() {
  return (
    <div className="h-[88px] relative shrink-0 w-[231.69px]" data-name="Container">
      <OverlayBorderOverlayBlur />
      <Heading1 />
      <Container6 />
    </div>
  );
}

function Margin1() {
  return (
    <div className="content-stretch flex flex-col items-start pt-[12px] relative shrink-0" data-name="Margin">
      <Container5 />
    </div>
  );
}

function Container4() {
  return (
    <div className="relative shrink-0 w-[300px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center relative w-full">
        <Margin />
        <Margin1 />
      </div>
    </div>
  );
}

function OverlayBorderShadowOverlayBlur() {
  return (
    <div className="backdrop-blur-[8px] bg-[rgba(255,255,255,0.65)] relative rounded-[24px] shrink-0 w-full" data-name="Overlay+Border+Shadow+OverlayBlur">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-start p-[21px] relative w-full">
          <div className="absolute bg-[#bfdbfe] blur-[20px] mix-blend-multiply opacity-30 right-[-39px] rounded-[9999px] size-[128px] top-[-39px]" data-name="Background+Blur" />
          <div className="absolute bg-[#fbcfe8] blur-[20px] bottom-[-39px] left-[-39px] mix-blend-multiply opacity-30 rounded-[9999px] size-[128px]" data-name="Background+Blur" />
          <Container4 />
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.4)] border-solid inset-0 pointer-events-none rounded-[24px] shadow-[0px_4px_30px_0px_rgba(0,0,0,0.05)]" />
    </div>
  );
}

function Container8() {
  return (
    <div className="relative shrink-0 w-[236px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start overflow-clip relative rounded-[inherit] w-full">
        <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal h-[20px] justify-center leading-[0] not-italic relative shrink-0 text-[16px] text-[rgba(100,116,139,0.7)] w-[225.72px]">
          <p className="leading-[normal] whitespace-pre-wrap">{`e.g., 'Blood test next Monday'`}</p>
        </div>
      </div>
    </div>
  );
}

function Input() {
  return (
    <div className="backdrop-blur-[6px] bg-white relative rounded-[32px] shrink-0 w-full" data-name="Input">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-start pl-[49px] pr-[57px] py-[19px] relative w-full">
          <Container8 />
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.4)] border-solid inset-0 pointer-events-none rounded-[32px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)]" />
    </div>
  );
}

function Container10() {
  return (
    <div className="h-[19px] relative shrink-0 w-[14px]" data-name="Container">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 19">
        <g id="Container">
          <path d={svgPaths.p39e29d00} fill="var(--fill-0, #64748B)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Container9() {
  return (
    <div className="absolute bottom-0 content-stretch flex items-center left-0 pl-[16px] top-0" data-name="Container">
      <Container10 />
    </div>
  );
}

function OverlayOverlayBlur() {
  return (
    <div className="relative shrink-0 size-[26.5px]" data-name="Overlay+OverlayBlur">
      <div className="absolute inset-[-7.55%_-47.17%_-84.91%_-45.28%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 51 51">
          <g data-figma-bg-blur-radius="4" id="Overlay+OverlayBlur">
            <rect fill="var(--fill-0, #6366F1)" fillOpacity="0.9" height="26.5" rx="13.25" width="26.5" x="12" y="2" />
            <g filter="url(#filter1_dd_1_2112)" id="Overlay+Shadow">
              <rect fill="var(--fill-0, white)" fillOpacity="0.01" height="27" rx="13.5" shapeRendering="crispEdges" width="27" x="12" y="2" />
            </g>
            <path d={svgPaths.p3b058580} fill="var(--fill-0, white)" id="Icon" />
          </g>
          <defs>
            <clipPath id="bgblur_0_1_2112_clip_path" transform="translate(-8 2)">
              <rect height="26.5" rx="13.25" width="26.5" x="12" y="2" />
            </clipPath>
            <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="51" id="filter1_dd_1_2112" width="51" x="0" y="0">
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
              <feMorphology in="SourceAlpha" operator="erode" radius="4" result="effect1_dropShadow_1_2112" />
              <feOffset dy="4" />
              <feGaussianBlur stdDeviation="3" />
              <feComposite in2="hardAlpha" operator="out" />
              <feColorMatrix type="matrix" values="0 0 0 0 0.388235 0 0 0 0 0.4 0 0 0 0 0.945098 0 0 0 0.3 0" />
              <feBlend in2="BackgroundImageFix" mode="normal" result="effect1_dropShadow_1_2112" />
              <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
              <feMorphology in="SourceAlpha" operator="erode" radius="3" result="effect2_dropShadow_1_2112" />
              <feOffset dy="10" />
              <feGaussianBlur stdDeviation="7.5" />
              <feComposite in2="hardAlpha" operator="out" />
              <feColorMatrix type="matrix" values="0 0 0 0 0.388235 0 0 0 0 0.4 0 0 0 0 0.945098 0 0 0 0.3 0" />
              <feBlend in2="effect1_dropShadow_1_2112" mode="normal" result="effect2_dropShadow_1_2112" />
              <feBlend in="SourceGraphic" in2="effect2_dropShadow_1_2112" mode="normal" result="shape" />
            </filter>
          </defs>
        </svg>
      </div>
    </div>
  );
}

function Button2() {
  return (
    <div className="absolute bottom-[8.75px] content-stretch flex items-center pr-[12px] py-[7px] right-0 top-[8.75px]" data-name="Button">
      <OverlayOverlayBlur />
    </div>
  );
}

function Container7() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <Input />
      <Container9 />
      <Button2 />
    </div>
  );
}

function Header() {
  return (
    <div className="relative shrink-0 w-full" data-name="Header">
      <div className="content-stretch flex flex-col gap-[24px] items-start pb-[8px] pt-[24px] px-[24px] relative w-full">
        <Container1 />
        <OverlayBorderShadowOverlayBlur />
        <Container7 />
      </div>
    </div>
  );
}

function Heading2() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Heading 3">
      <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold h-[28px] justify-center leading-[0] not-italic relative shrink-0 text-[20px] text-[rgba(30,41,59,0.9)] w-[135.58px]">
        <p className="leading-[28px] whitespace-pre-wrap">October 2023</p>
      </div>
    </div>
  );
}

function Button3() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center relative shrink-0" data-name="Button">
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold h-[20px] justify-center leading-[0] not-italic relative shrink-0 text-[#4f46e5] text-[14px] text-center w-[54.72px]">
        <p className="leading-[20px] whitespace-pre-wrap">View All</p>
      </div>
    </div>
  );
}

function Container11() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-end size-full">
        <div className="content-stretch flex items-end justify-between px-[4px] relative w-full">
          <Heading2 />
          <Button3 />
        </div>
      </div>
    </div>
  );
}

function Container13() {
  return (
    <div className="content-stretch flex flex-col items-start opacity-80 relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium h-[16px] justify-center leading-[0] not-italic relative shrink-0 text-[12px] text-white w-[25.42px]">
        <p className="leading-[16px] whitespace-pre-wrap">Mon</p>
      </div>
    </div>
  );
}

function Margin2() {
  return (
    <div className="content-stretch flex flex-col items-start pt-[4px] relative shrink-0" data-name="Margin">
      <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold h-[28px] justify-center leading-[0] not-italic relative shrink-0 text-[20px] text-white w-[21.63px]">
        <p className="leading-[28px] whitespace-pre-wrap">16</p>
      </div>
    </div>
  );
}

function Margin3() {
  return (
    <div className="content-stretch flex flex-col h-[14px] items-start pt-[8px] relative shrink-0 w-[6px]" data-name="Margin">
      <div className="bg-white rounded-[9999px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)] shrink-0 size-[6px]" data-name="Background+Shadow" />
    </div>
  );
}

function Background() {
  return (
    <div className="absolute bg-[#6366f1] bottom-[4px] content-stretch flex flex-col items-center left-[4px] min-w-[60.79999923706055px] px-[17.69px] py-[12px] rounded-[32px] top-[4px]" data-name="Background">
      <div className="absolute bg-[rgba(255,255,255,0)] inset-0 rounded-[32px] shadow-[0px_0px_0px_2px_rgba(255,255,255,0.5),0px_10px_15px_-3px_rgba(99,102,241,0.3),0px_4px_6px_-4px_rgba(99,102,241,0.3)]" data-name="Overlay+Shadow" />
      <Container13 />
      <Margin2 />
      <Margin3 />
    </div>
  );
}

function Container15() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium h-[16px] justify-center leading-[0] not-italic relative shrink-0 text-[#64748b] text-[12px] w-[21.22px]">
        <p className="leading-[16px] whitespace-pre-wrap">Tue</p>
      </div>
    </div>
  );
}

function Margin5() {
  return (
    <div className="content-stretch flex flex-col items-start pt-[4px] relative shrink-0" data-name="Margin">
      <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold h-[28px] justify-center leading-[0] not-italic relative shrink-0 text-[#334155] text-[20px] w-[20.27px]">
        <p className="leading-[28px] whitespace-pre-wrap">17</p>
      </div>
    </div>
  );
}

function Margin6() {
  return (
    <div className="content-stretch flex flex-col h-[14px] items-start pt-[8px] relative shrink-0 w-[6px]" data-name="Margin">
      <div className="bg-[#fb7185] rounded-[9999px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)] shrink-0 size-[6px]" data-name="Background+Shadow" />
    </div>
  );
}

function Container14() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-center min-h-px min-w-[60.79999923706055px] pl-[19.78px] pr-[19.8px] py-[12px] relative rounded-[32px]" data-name="Container">
      <Container15 />
      <Margin5 />
      <Margin6 />
    </div>
  );
}

function Margin4() {
  return (
    <div className="absolute bottom-[4px] content-stretch flex flex-col items-start justify-center left-[64.8px] min-w-[68.80000305175781px] pl-[8px] top-[4px]" data-name="Margin">
      <Container14 />
    </div>
  );
}

function Container17() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium h-[16px] justify-center leading-[0] not-italic relative shrink-0 text-[#64748b] text-[12px] w-[25.91px]">
        <p className="leading-[16px] whitespace-pre-wrap">Wed</p>
      </div>
    </div>
  );
}

function Margin8() {
  return (
    <div className="content-stretch flex flex-col items-start pt-[4px] relative shrink-0" data-name="Margin">
      <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold h-[28px] justify-center leading-[0] not-italic relative shrink-0 text-[#334155] text-[20px] w-[21.64px]">
        <p className="leading-[28px] whitespace-pre-wrap">18</p>
      </div>
    </div>
  );
}

function Margin9() {
  return <div className="h-[14px] shrink-0 w-[6px]" data-name="Margin" />;
}

function Container16() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-center min-h-px min-w-[60.79999923706055px] pl-[17.44px] pr-[17.45px] py-[12px] relative rounded-[32px]" data-name="Container">
      <Container17 />
      <Margin8 />
      <Margin9 />
    </div>
  );
}

function Margin7() {
  return (
    <div className="absolute bottom-[4px] content-stretch flex flex-col items-start justify-center left-[133.59px] min-w-[68.80000305175781px] pl-[8px] top-[4px]" data-name="Margin">
      <Container16 />
    </div>
  );
}

function Container19() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium h-[16px] justify-center leading-[0] not-italic relative shrink-0 text-[#64748b] text-[12px] w-[22.28px]">
        <p className="leading-[16px] whitespace-pre-wrap">Thu</p>
      </div>
    </div>
  );
}

function Margin11() {
  return (
    <div className="content-stretch flex flex-col items-start pt-[4px] relative shrink-0" data-name="Margin">
      <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold h-[28px] justify-center leading-[0] not-italic relative shrink-0 text-[#334155] text-[20px] w-[21.63px]">
        <p className="leading-[28px] whitespace-pre-wrap">19</p>
      </div>
    </div>
  );
}

function Margin12() {
  return (
    <div className="content-stretch flex flex-col h-[14px] items-start pt-[8px] relative shrink-0 w-[6px]" data-name="Margin">
      <div className="bg-[#34d399] rounded-[9999px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)] shrink-0 size-[6px]" data-name="Background+Shadow" />
    </div>
  );
}

function Container18() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-center min-h-px min-w-[60.79999923706055px] pl-[19.25px] pr-[19.27px] py-[12px] relative rounded-[32px]" data-name="Container">
      <Container19 />
      <Margin11 />
      <Margin12 />
    </div>
  );
}

function Margin10() {
  return (
    <div className="absolute bottom-[4px] content-stretch flex flex-col items-start justify-center left-[202.39px] min-w-[68.80000305175781px] pl-[8px] top-[4px]" data-name="Margin">
      <Container18 />
    </div>
  );
}

function Container21() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium h-[16px] justify-center leading-[0] not-italic relative shrink-0 text-[#64748b] text-[12px] w-[14.53px]">
        <p className="leading-[16px] whitespace-pre-wrap">Fri</p>
      </div>
    </div>
  );
}

function Margin14() {
  return (
    <div className="content-stretch flex flex-col items-start pt-[4px] relative shrink-0" data-name="Margin">
      <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold h-[28px] justify-center leading-[0] not-italic relative shrink-0 text-[#334155] text-[20px] w-[26.09px]">
        <p className="leading-[28px] whitespace-pre-wrap">20</p>
      </div>
    </div>
  );
}

function Container20() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-center min-h-px min-w-[60.79999923706055px] pl-[17.34px] pr-[17.37px] py-[12px] relative rounded-[32px]" data-name="Container">
      <Container21 />
      <Margin14 />
    </div>
  );
}

function Margin13() {
  return (
    <div className="absolute bottom-[4px] content-stretch flex flex-col items-start justify-center left-[271.19px] min-w-[68.80000305175781px] pl-[8px] top-[4px]" data-name="Margin">
      <Container20 />
    </div>
  );
}

function Container12() {
  return (
    <div className="h-[94px] relative shrink-0 w-[324px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid overflow-clip relative rounded-[inherit] size-full">
        <Background />
        <Margin4 />
        <Margin7 />
        <Margin10 />
        <Margin13 />
      </div>
    </div>
  );
}

function OverlayBorderShadowOverlayBlur1() {
  return (
    <div className="backdrop-blur-[8px] bg-[rgba(255,255,255,0.65)] relative rounded-[24px] shrink-0 w-full" data-name="Overlay+Border+Shadow+OverlayBlur">
      <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.4)] border-solid inset-0 pointer-events-none rounded-[24px] shadow-[0px_4px_30px_0px_rgba(0,0,0,0.05)]" />
      <div className="content-stretch flex flex-col items-start p-[9px] relative w-full">
        <Container12 />
      </div>
    </div>
  );
}

function Section() {
  return (
    <div className="relative shrink-0 w-full" data-name="Section">
      <div className="content-stretch flex flex-col gap-[16px] items-start px-[24px] relative w-full">
        <Container11 />
        <OverlayBorderShadowOverlayBlur1 />
      </div>
    </div>
  );
}

function Heading3() {
  return (
    <div className="relative shrink-0 w-full" data-name="Heading 3">
      <div className="content-stretch flex flex-col items-start px-[4px] relative w-full">
        <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[20px] text-[rgba(30,41,59,0.9)] w-full">
          <p className="leading-[28px] whitespace-pre-wrap">{`Today's Schedule`}</p>
        </div>
      </div>
    </div>
  );
}

function OverlayOverlayBlur1() {
  return (
    <div className="h-[46px] relative shrink-0 w-[42px]" data-name="Overlay+OverlayBlur">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 42 46">
        <g data-figma-bg-blur-radius="12" id="Overlay+OverlayBlur">
          <rect fill="var(--fill-0, #E0E7FF)" fillOpacity="0.5" height="46" rx="21" width="42" />
          <path d={svgPaths.p13ea680} fill="var(--fill-0, #4F46E5)" id="Icon" />
        </g>
        <defs>
          <clipPath id="bgblur_0_1_2100_clip_path" transform="translate(12 12)">
            <rect height="46" rx="21" width="42" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Heading4() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 4">
      <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold h-[48px] justify-center leading-[24px] not-italic relative shrink-0 text-[#1e293b] text-[16px] w-[116.15px] whitespace-pre-wrap">
        <p className="mb-0">Chemotherapy</p>
        <p>Session</p>
      </div>
    </div>
  );
}

function Container26() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium h-[20px] justify-center leading-[0] not-italic relative shrink-0 text-[#64748b] text-[14px] w-[132.38px]">
        <p className="leading-[20px] whitespace-pre-wrap">Ward 3B • Dr. Smith</p>
      </div>
    </div>
  );
}

function Container25() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0" data-name="Container">
      <Heading4 />
      <Container26 />
    </div>
  );
}

function OverlayBorderOverlayBlur1() {
  return (
    <div className="backdrop-blur-[2px] bg-[rgba(224,231,255,0.6)] content-stretch flex flex-col items-start pl-[11px] pr-[27.23px] py-[7px] relative rounded-[8px] shrink-0" data-name="Overlay+Border+OverlayBlur">
      <div aria-hidden="true" className="absolute border border-[rgba(224,231,255,0.5)] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold h-[32px] justify-center leading-[16px] not-italic relative shrink-0 text-[#4338ca] text-[12px] w-[33.47px] whitespace-pre-wrap">
        <p className="mb-0">10:00</p>
        <p>AM</p>
      </div>
    </div>
  );
}

function Container24() {
  return (
    <div className="content-stretch flex items-start justify-between relative shrink-0 w-full" data-name="Container">
      <Container25 />
      <OverlayBorderOverlayBlur1 />
    </div>
  );
}

function CaregiverAvatar() {
  return (
    <div className="pointer-events-none relative rounded-[9999px] shrink-0 size-[28px]" data-name="Caregiver avatar">
      <div className="absolute inset-0 overflow-hidden rounded-[9999px]">
        <img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgCaregiverAvatar} />
      </div>
      <div aria-hidden="true" className="absolute border-2 border-solid border-white inset-0 rounded-[9999px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)]" />
    </div>
  );
}

function CaregiverAvatar1() {
  return (
    <div className="absolute left-[-10px] pointer-events-none rounded-[9999px] size-[28px] top-0" data-name="Caregiver avatar">
      <div className="absolute inset-0 overflow-hidden rounded-[9999px]">
        <img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgCaregiverAvatar1} />
      </div>
      <div aria-hidden="true" className="absolute border-2 border-solid border-white inset-0 rounded-[9999px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)]" />
    </div>
  );
}

function ImgCaregiverAvatarMargin() {
  return (
    <div className="h-[28px] relative shrink-0 w-[18px]" data-name="Img - Caregiver avatar:margin">
      <CaregiverAvatar1 />
    </div>
  );
}

function Container27() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative">
        <CaregiverAvatar />
        <ImgCaregiverAvatarMargin />
      </div>
    </div>
  );
}

function Margin16() {
  return (
    <div className="relative shrink-0" data-name="Margin">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pl-[12px] relative">
        <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium h-[16px] justify-center leading-[0] not-italic relative shrink-0 text-[#475569] text-[12px] w-[76.28px]">
          <p className="leading-[16px] whitespace-pre-wrap">{`Sarah & Mom`}</p>
        </div>
      </div>
    </div>
  );
}

function OverlayBorder() {
  return (
    <div className="bg-[rgba(255,255,255,0.3)] content-stretch flex items-center p-[9px] relative rounded-[24px] shrink-0" data-name="Overlay+Border">
      <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.4)] border-solid inset-0 pointer-events-none rounded-[24px]" />
      <Container27 />
      <Margin16 />
    </div>
  );
}

function Container23() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-name="Container">
      <Container24 />
      <OverlayBorder />
    </div>
  );
}

function Margin15() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative" data-name="Margin">
      <div className="content-stretch flex flex-col items-start pl-[16px] relative w-full">
        <Container23 />
      </div>
    </div>
  );
}

function Container22() {
  return (
    <div className="relative shrink-0 w-[300px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative w-full">
        <OverlayOverlayBlur1 />
        <Margin15 />
      </div>
    </div>
  );
}

function OverlayBorderShadowOverlayBlur2() {
  return (
    <div className="backdrop-blur-[8px] bg-[rgba(255,255,255,0.65)] relative rounded-[24px] shrink-0 w-full" data-name="Overlay+Border+Shadow+OverlayBlur">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-start p-[21px] relative w-full">
          <Container22 />
          <div className="absolute bg-[rgba(99,102,241,0.8)] bottom-px left-px top-px w-[8px]" data-name="Overlay" />
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.4)] border-solid inset-0 pointer-events-none rounded-[24px] shadow-[0px_4px_30px_0px_rgba(0,0,0,0.05)]" />
    </div>
  );
}

function OverlayOverlayBlur2() {
  return (
    <div className="h-[48px] relative shrink-0 w-[44px]" data-name="Overlay+OverlayBlur">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 44 48">
        <g data-figma-bg-blur-radius="12" id="Overlay+OverlayBlur">
          <rect fill="var(--fill-0, #D1FAE5)" fillOpacity="0.5" height="48" rx="22" width="44" />
          <path d={svgPaths.p1ed6afc0} fill="var(--fill-0, #059669)" id="Icon" />
        </g>
        <defs>
          <clipPath id="bgblur_0_1_2106_clip_path" transform="translate(12 12)">
            <rect height="48" rx="22" width="44" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Heading5() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 4">
      <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold h-[24px] justify-center leading-[0] not-italic relative shrink-0 text-[#334155] text-[16px] w-[133.48px]">
        <p className="[text-decoration-skip-ink:none] decoration-solid leading-[24px] line-through whitespace-pre-wrap">Blood Work: CBC</p>
      </div>
    </div>
  );
}

function Container32() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal h-[20px] justify-center leading-[0] not-italic relative shrink-0 text-[#64748b] text-[14px] w-[109.45px]">
        <p className="leading-[20px] whitespace-pre-wrap">Lab Corp Center</p>
      </div>
    </div>
  );
}

function Container31() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0" data-name="Container">
      <Heading5 />
      <Container32 />
    </div>
  );
}

function Container33() {
  return (
    <div className="mr-[-0.01px] relative shrink-0 size-[11.667px]" data-name="Container">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11.6667 11.6667">
        <g id="Container">
          <path d={svgPaths.p1d9bcc00} fill="var(--fill-0, #059669)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Margin18() {
  return (
    <div className="content-stretch flex flex-col items-start mr-[-0.01px] pl-[4px] relative shrink-0" data-name="Margin">
      <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold h-[16px] justify-center leading-[0] not-italic relative shrink-0 text-[#047857] text-[12px] w-[30.66px]">
        <p className="leading-[16px] whitespace-pre-wrap">Done</p>
      </div>
    </div>
  );
}

function Overlay() {
  return (
    <div className="bg-[rgba(209,250,229,0.4)] content-stretch flex items-center pl-[8px] pr-[8.01px] py-[4px] relative rounded-[8px] shrink-0" data-name="Overlay">
      <Container33 />
      <Margin18 />
    </div>
  );
}

function Container30() {
  return (
    <div className="content-stretch flex items-start justify-between relative shrink-0 w-full" data-name="Container">
      <Container31 />
      <Overlay />
    </div>
  );
}

function Container34() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#94a3b8] text-[12px] w-full">
        <p className="leading-[16px] whitespace-pre-wrap">Completed at 8:15 AM</p>
      </div>
    </div>
  );
}

function Container29() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="Container">
      <Container30 />
      <Container34 />
    </div>
  );
}

function Margin17() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative" data-name="Margin">
      <div className="content-stretch flex flex-col items-start pl-[16px] relative w-full">
        <Container29 />
      </div>
    </div>
  );
}

function Container28() {
  return (
    <div className="relative shrink-0 w-[300px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative w-full">
        <OverlayOverlayBlur2 />
        <Margin17 />
      </div>
    </div>
  );
}

function OverlayBorderOverlayBlur2() {
  return (
    <div className="backdrop-blur-[5px] bg-[rgba(255,255,255,0.45)] opacity-80 relative rounded-[24px] shrink-0 w-full" data-name="Overlay+Border+OverlayBlur">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-start p-[21px] relative w-full">
          <Container28 />
          <div className="absolute bg-[rgba(16,185,129,0.6)] bottom-px left-px top-px w-[8px]" data-name="Overlay" />
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.3)] border-solid inset-0 pointer-events-none rounded-[24px]" />
    </div>
  );
}

function OverlayOverlayBlur3() {
  return (
    <div className="h-[40px] relative shrink-0 w-[52px]" data-name="Overlay+OverlayBlur">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 52 40">
        <g data-figma-bg-blur-radius="12" id="Overlay+OverlayBlur">
          <rect fill="var(--fill-0, #FFE4E6)" fillOpacity="0.5" height="40" rx="20" width="52" />
          <path d={svgPaths.pe102100} fill="var(--fill-0, #F43F5E)" id="Icon" />
        </g>
        <defs>
          <clipPath id="bgblur_0_1_2119_clip_path" transform="translate(12 12)">
            <rect height="40" rx="20" width="52" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Heading6() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 4">
      <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold h-[24px] justify-center leading-[0] not-italic relative shrink-0 text-[#1e293b] text-[16px] w-[120.8px]">
        <p className="leading-[24px] whitespace-pre-wrap">Wellness Circle</p>
      </div>
    </div>
  );
}

function Container39() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium h-[40px] justify-center leading-[20px] not-italic relative shrink-0 text-[#64748b] text-[14px] w-[117.43px] whitespace-pre-wrap">
        <p className="mb-0">Community Hall •</p>
        <p>Online</p>
      </div>
    </div>
  );
}

function Container38() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0" data-name="Container">
      <Heading6 />
      <Container39 />
    </div>
  );
}

function OverlayBorderOverlayBlur3() {
  return (
    <div className="backdrop-blur-[2px] bg-[rgba(255,228,230,0.6)] content-stretch flex flex-col items-start pl-[11px] pr-[31.83px] py-[7px] relative rounded-[8px] shrink-0" data-name="Overlay+Border+OverlayBlur">
      <div aria-hidden="true" className="absolute border border-[rgba(255,228,230,0.5)] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold h-[32px] justify-center leading-[16px] not-italic relative shrink-0 text-[#e11d48] text-[12px] w-[28.31px] whitespace-pre-wrap">
        <p className="mb-0">4:00</p>
        <p>PM</p>
      </div>
    </div>
  );
}

function Container37() {
  return (
    <div className="content-stretch flex items-start justify-between relative shrink-0 w-full" data-name="Container">
      <Container38 />
      <OverlayBorderOverlayBlur3 />
    </div>
  );
}

function Container40() {
  return (
    <div className="relative shrink-0 size-[10.5px]" data-name="Container">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10.5 10.5">
        <g id="Container">
          <path d={svgPaths.p32ab500} fill="var(--fill-0, #4F46E5)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Margin20() {
  return (
    <div className="relative shrink-0" data-name="Margin">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pl-[6px] relative">
        <Container40 />
      </div>
    </div>
  );
}

function Button4() {
  return (
    <div className="bg-[#eef2ff] content-stretch flex items-center px-[13px] py-[7px] relative rounded-[8px] shrink-0" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[#e0e7ff] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold h-[16px] justify-center leading-[0] not-italic relative shrink-0 text-[#4f46e5] text-[12px] text-center w-[88.14px]">
        <p className="leading-[16px] whitespace-pre-wrap">Join Zoom Link</p>
      </div>
      <Margin20 />
    </div>
  );
}

function Container36() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-name="Container">
      <Container37 />
      <Button4 />
    </div>
  );
}

function Margin19() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative" data-name="Margin">
      <div className="content-stretch flex flex-col items-start pl-[16px] relative w-full">
        <Container36 />
      </div>
    </div>
  );
}

function Container35() {
  return (
    <div className="relative shrink-0 w-[300px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative w-full">
        <OverlayOverlayBlur3 />
        <Margin19 />
      </div>
    </div>
  );
}

function OverlayBorderShadowOverlayBlur3() {
  return (
    <div className="backdrop-blur-[8px] bg-[rgba(255,255,255,0.65)] relative rounded-[24px] shrink-0 w-full" data-name="Overlay+Border+Shadow+OverlayBlur">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-start p-[21px] relative w-full">
          <Container35 />
          <div className="absolute bg-[rgba(251,113,133,0.8)] bottom-px left-px top-px w-[8px]" data-name="Overlay" />
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.4)] border-solid inset-0 pointer-events-none rounded-[24px] shadow-[0px_4px_30px_0px_rgba(0,0,0,0.05)]" />
    </div>
  );
}

function Section1() {
  return (
    <div className="relative shrink-0 w-full" data-name="Section">
      <div className="content-stretch flex flex-col gap-[20px] items-start pt-[24px] px-[24px] relative w-full">
        <Heading3 />
        <OverlayBorderShadowOverlayBlur2 />
        <OverlayBorderOverlayBlur2 />
        <OverlayBorderShadowOverlayBlur3 />
      </div>
    </div>
  );
}

function Container() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start max-w-[448px] min-h-[1307px] pb-[119px] relative shrink-0 w-full" data-name="Container">
      <Header />
      <Section />
      <Section1 />
    </div>
  );
}

function Container41() {
  return (
    <div className="h-[19.5px] relative shrink-0 w-[17.333px]" data-name="Container">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17.3333 19.5">
        <g id="Container">
          <path d={svgPaths.p39defd40} fill="var(--fill-0, #94A3B8)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Link() {
  return (
    <div className="content-stretch flex flex-col items-center p-[8px] relative shrink-0" data-name="Link">
      <Container41 />
    </div>
  );
}

function Item() {
  return (
    <div className="-translate-y-1/2 absolute content-stretch flex flex-col items-start left-0 top-1/2" data-name="Item">
      <Link />
    </div>
  );
}

function Container42() {
  return (
    <div className="h-[21.667px] relative shrink-0 w-[19.5px]" data-name="Container">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 19.5 21.6667">
        <g id="Container">
          <path d={svgPaths.p151ac980} fill="var(--fill-0, #4F46E5)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Link1() {
  return (
    <div className="content-stretch flex flex-col items-center p-[8px] relative shrink-0" data-name="Link">
      <Container42 />
      <div className="absolute bg-[#4f46e5] left-[19px] rounded-[9999px] size-[4px] top-[-4px]" data-name="Background" />
    </div>
  );
}

function Item1() {
  return (
    <div className="-translate-y-1/2 absolute content-stretch flex flex-col items-start left-[69px] top-1/2" data-name="Item">
      <Link1 />
    </div>
  );
}

function Container43() {
  return (
    <div className="relative shrink-0 size-[17.5px]" data-name="Container">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17.5 17.5">
        <g id="Container">
          <path d={svgPaths.p2f5d9c00} fill="var(--fill-0, white)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Button5() {
  return (
    <div className="content-stretch flex items-center justify-center p-[6px] relative rounded-[9999px] shrink-0 size-[64px]" data-name="Button" style={{ backgroundImage: "linear-gradient(135deg, rgb(99, 102, 241) 0%, rgb(79, 70, 229) 100%)" }}>
      <div aria-hidden="true" className="absolute border-6 border-[#fdfcfe] border-solid inset-0 pointer-events-none rounded-[9999px]" />
      <div className="absolute bg-[rgba(255,255,255,0)] left-0 rounded-[9999px] shadow-[0px_10px_15px_-3px_rgba(99,102,241,0.4),0px_4px_6px_-4px_rgba(99,102,241,0.4)] size-[64px] top-0" data-name="Button:shadow" />
      <Container43 />
    </div>
  );
}

function Item2() {
  return (
    <div className="-translate-y-1/2 absolute content-stretch flex flex-col items-start left-[138px] pb-[32px] top-[calc(50%-16px)]" data-name="Item">
      <Button5 />
    </div>
  );
}

function Container44() {
  return (
    <div className="h-[19.879px] relative shrink-0 w-[21.667px]" data-name="Container">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 21.6667 19.8792">
        <g id="Container">
          <path d={svgPaths.p22390a00} fill="var(--fill-0, #94A3B8)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Link2() {
  return (
    <div className="content-stretch flex flex-col items-center p-[8px] relative shrink-0" data-name="Link">
      <Container44 />
    </div>
  );
}

function Item3() {
  return (
    <div className="-translate-y-1/2 absolute content-stretch flex flex-col items-start left-[228.98px] top-1/2" data-name="Item">
      <Link2 />
    </div>
  );
}

function Container45() {
  return (
    <div className="relative shrink-0 size-[17.333px]" data-name="Container">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17.3333 17.3333">
        <g id="Container">
          <path d={svgPaths.p1c6e17c0} fill="var(--fill-0, #94A3B8)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Link3() {
  return (
    <div className="content-stretch flex flex-col items-center p-[8px] relative shrink-0" data-name="Link">
      <Container45 />
    </div>
  );
}

function Item4() {
  return (
    <div className="-translate-y-1/2 absolute content-stretch flex flex-col items-start left-[297.98px] top-1/2" data-name="Item">
      <Link3 />
    </div>
  );
}

function List() {
  return (
    <div className="h-[64px] relative shrink-0 w-[340px]" data-name="List">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Item />
        <Item1 />
        <Item2 />
        <Item3 />
        <Item4 />
      </div>
    </div>
  );
}

function Nav() {
  return (
    <div className="absolute backdrop-blur-[8px] bg-[rgba(255,255,255,0.65)] bottom-0 content-stretch flex flex-col items-start left-0 max-w-[448px] pb-[25px] pt-[9px] px-[25px] right-0 rounded-tl-[40px] rounded-tr-[40px]" data-name="Nav">
      <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.5)] border-solid inset-0 pointer-events-none rounded-tl-[40px] rounded-tr-[40px] shadow-[0px_-8px_32px_0px_rgba(0,0,0,0.04)]" />
      <List />
    </div>
  );
}

export default function AppointmentsCareSchedule() {
  return (
    <div className="content-stretch flex flex-col items-start relative size-full" data-name="Appointments & Care Schedule" style={{ backgroundImage: "url(\'data:image/svg+xml;utf8,<svg viewBox=\\'0 0 390 1307\\' xmlns=\\'http://www.w3.org/2000/svg\\' preserveAspectRatio=\\'none\\'><rect x=\\'0\\' y=\\'0\\' height=\\'100%\\' width=\\'100%\\' fill=\\'url(%23grad)\\' opacity=\\'1\\'/><defs><radialGradient id=\\'grad\\' gradientUnits=\\'userSpaceOnUse\\' cx=\\'0\\' cy=\\'0\\' r=\\'10\\' gradientTransform=\\'matrix(44.123 0 0 184.84 312 0)\\'><stop stop-color=\\'rgba(204,247,255,1)\\' offset=\\'0\\'/><stop stop-color=\\'rgba(204,247,255,0)\\' offset=\\'0.5\\'/></radialGradient></defs></svg>\'), url(\'data:image/svg+xml;utf8,<svg viewBox=\\'0 0 390 1307\\' xmlns=\\'http://www.w3.org/2000/svg\\' preserveAspectRatio=\\'none\\'><rect x=\\'0\\' y=\\'0\\' height=\\'100%\\' width=\\'100%\\' fill=\\'url(%23grad)\\' opacity=\\'1\\'/><defs><radialGradient id=\\'grad\\' gradientUnits=\\'userSpaceOnUse\\' cx=\\'0\\' cy=\\'0\\' r=\\'10\\' gradientTransform=\\'matrix(55.154 0 0 92.419 0 653.5)\\'><stop stop-color=\\'rgba(255,219,243,1)\\' offset=\\'0\\'/><stop stop-color=\\'rgba(255,219,243,0)\\' offset=\\'0.5\\'/></radialGradient></defs></svg>\'), url(\'data:image/svg+xml;utf8,<svg viewBox=\\'0 0 390 1307\\' xmlns=\\'http://www.w3.org/2000/svg\\' preserveAspectRatio=\\'none\\'><rect x=\\'0\\' y=\\'0\\' height=\\'100%\\' width=\\'100%\\' fill=\\'url(%23grad)\\' opacity=\\'1\\'/><defs><radialGradient id=\\'grad\\' gradientUnits=\\'userSpaceOnUse\\' cx=\\'0\\' cy=\\'0\\' r=\\'10\\' gradientTransform=\\'matrix(44.123 0 0 92.419 312 653.5)\\'><stop stop-color=\\'rgba(240,224,255,1)\\' offset=\\'0\\'/><stop stop-color=\\'rgba(240,224,255,0)\\' offset=\\'0.5\\'/></radialGradient></defs></svg>\'), url(\'data:image/svg+xml;utf8,<svg viewBox=\\'0 0 390 1307\\' xmlns=\\'http://www.w3.org/2000/svg\\' preserveAspectRatio=\\'none\\'><rect x=\\'0\\' y=\\'0\\' height=\\'100%\\' width=\\'100%\\' fill=\\'url(%23grad)\\' opacity=\\'1\\'/><defs><radialGradient id=\\'grad\\' gradientUnits=\\'userSpaceOnUse\\' cx=\\'0\\' cy=\\'0\\' r=\\'10\\' gradientTransform=\\'matrix(55.154 0 0 184.84 0 1307)\\'><stop stop-color=\\'rgba(214,255,241,1)\\' offset=\\'0\\'/><stop stop-color=\\'rgba(214,255,241,0)\\' offset=\\'0.5\\'/></radialGradient></defs></svg>\'), linear-gradient(90deg, rgb(243, 244, 246) 0%, rgb(243, 244, 246) 100%)" }}>
      <Container />
      <Nav />
    </div>
  );
}