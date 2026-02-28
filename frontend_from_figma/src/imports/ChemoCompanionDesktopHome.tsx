import svgPaths from "./svg-este4298m0";
import imgPatientAndDoctorHoldingAHeartBoxTogether from "figma:asset/75aa734fa63417b819a631f489b3c5d9a672d970.png";

function Container1() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Container">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Container">
          <path d={svgPaths.p21106180} fill="var(--fill-0, #6B9080)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function OverlayBorderShadowOverlayBlur() {
  return (
    <div className="backdrop-blur-[2px] bg-[rgba(255,255,255,0.4)] content-stretch flex items-center justify-center p-px relative rounded-[9999px] shrink-0 size-[40px]" data-name="Overlay+Border+Shadow+OverlayBlur">
      <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.4)] border-solid inset-0 pointer-events-none rounded-[9999px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)]" />
      <Container1 />
    </div>
  );
}

function Heading() {
  return (
    <div className="content-stretch flex flex-col items-start relative shadow-[0px_1px_1px_0px_rgba(0,0,0,0.05)] shrink-0" data-name="Heading 1">
      <div className="flex flex-col font-['Merriweather:Bold',sans-serif] h-[28px] justify-center leading-[0] not-italic relative shrink-0 text-[#6b9080] text-[20px] w-[188.3px]">
        <p className="leading-[28px] whitespace-pre-wrap">Chemo Companion</p>
      </div>
    </div>
  );
}

function Container() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[12px] items-center relative">
        <OverlayBorderShadowOverlayBlur />
        <Heading />
      </div>
    </div>
  );
}

function Container2() {
  return (
    <div className="h-[20px] relative shrink-0 w-[16px]" data-name="Container">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 20">
        <g id="Container">
          <path d={svgPaths.p164b49c0} fill="var(--fill-0, #4B5563)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Button() {
  return (
    <div className="backdrop-blur-[2px] relative rounded-[9999px] shrink-0" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center justify-center p-[8px] relative">
        <Container2 />
        <div className="absolute bg-[#ffd6e0] right-[7.98px] rounded-[9999px] size-[8px] top-[8px]" data-name="Background+Border+Shadow">
          <div aria-hidden="true" className="absolute border border-solid border-white inset-0 pointer-events-none rounded-[9999px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)]" />
        </div>
      </div>
    </div>
  );
}

function Header() {
  return (
    <div className="backdrop-blur-[8px] bg-[rgba(255,255,255,0.7)] relative shrink-0 w-full z-[3]" data-name="Header">
      <div aria-hidden="true" className="absolute border-[rgba(255,255,255,0.5)] border-solid border-t inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between pb-[16px] pt-[49px] px-[24px] relative w-full">
          <Container />
          <Button />
        </div>
      </div>
    </div>
  );
}

function Button1() {
  return (
    <div className="-translate-y-1/2 absolute content-stretch flex flex-col gap-[4px] items-center left-0 top-1/2" data-name="Button">
      <div className="h-[18px] relative shrink-0 w-[16px]" data-name="Icon">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 18">
          <path d={svgPaths.p12a32500} fill="var(--fill-0, #6B9080)" id="Icon" />
        </svg>
      </div>
      <div className="flex flex-col font-['Nunito_Sans:Bold',sans-serif] font-bold h-[15px] justify-center leading-[0] relative shrink-0 text-[#6b9080] text-[10px] text-center w-[27.69px]" style={{ fontVariationSettings: "\'YTLC\' 500, \'wdth\' 100" }}>
        <p className="leading-[15px] whitespace-pre-wrap">Home</p>
      </div>
    </div>
  );
}

function Button2() {
  return (
    <div className="-translate-y-1/2 absolute content-stretch flex flex-col gap-[4px] items-center left-[61.78px] top-1/2" data-name="Button">
      <div className="h-[20px] relative shrink-0 w-[18px]" data-name="Icon">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 20">
          <path d={svgPaths.p2a946800} fill="var(--fill-0, #9CA3AF)" id="Icon" />
        </svg>
      </div>
      <div className="flex flex-col font-['Nunito_Sans:Regular',sans-serif] font-normal h-[15px] justify-center leading-[0] relative shrink-0 text-[#9ca3af] text-[10px] text-center w-[41.45px]" style={{ fontVariationSettings: "\'YTLC\' 500, \'wdth\' 100" }}>
        <p className="leading-[15px] whitespace-pre-wrap">Schedule</p>
      </div>
    </div>
  );
}

function Button3() {
  return (
    <div className="-translate-y-1/2 absolute content-stretch flex flex-col gap-[4px] items-center left-[227.42px] top-1/2" data-name="Button">
      <div className="relative shrink-0 size-[20px]" data-name="Icon">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
          <path d={svgPaths.p1c483e80} fill="var(--fill-0, #9CA3AF)" id="Icon" />
        </svg>
      </div>
      <div className="flex flex-col font-['Nunito_Sans:Regular',sans-serif] font-normal h-[15px] justify-center leading-[0] relative shrink-0 text-[#9ca3af] text-[10px] text-center w-[51.38px]" style={{ fontVariationSettings: "\'YTLC\' 500, \'wdth\' 100" }}>
        <p className="leading-[15px] whitespace-pre-wrap">Community</p>
      </div>
    </div>
  );
}

function Button4() {
  return (
    <div className="-translate-y-1/2 absolute content-stretch flex flex-col gap-[4px] items-center left-[312.89px] top-1/2" data-name="Button">
      <div className="relative shrink-0 size-[16px]" data-name="Icon">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
          <path d={svgPaths.p85bff00} fill="var(--fill-0, #9CA3AF)" id="Icon" />
        </svg>
      </div>
      <div className="flex flex-col font-['Nunito_Sans:Regular',sans-serif] font-normal h-[15px] justify-center leading-[0] relative shrink-0 text-[#9ca3af] text-[10px] text-center w-[29.08px]" style={{ fontVariationSettings: "\'YTLC\' 500, \'wdth\' 100" }}>
        <p className="leading-[15px] whitespace-pre-wrap">Profile</p>
      </div>
    </div>
  );
}

function Container5() {
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
    <div className="bg-[#6b9080] content-stretch flex items-center justify-center p-[4px] relative rounded-[9999px] shrink-0 size-[56px]" data-name="Button">
      <div aria-hidden="true" className="absolute border-4 border-[#f8fafc] border-solid inset-0 pointer-events-none rounded-[9999px]" />
      <div className="absolute bg-[rgba(255,255,255,0)] left-0 rounded-[9999px] shadow-[0px_10px_15px_-3px_rgba(107,144,128,0.4),0px_4px_6px_-4px_rgba(107,144,128,0.4)] size-[56px] top-0" data-name="Button:shadow" />
      <Container5 />
    </div>
  );
}

function Container4() {
  return (
    <div className="-translate-y-1/2 absolute content-stretch flex flex-col items-start left-[137.33px] top-[calc(50%-24px)]" data-name="Container">
      <Button5 />
    </div>
  );
}

function Container3() {
  return (
    <div className="h-[64px] max-w-[448px] relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Button1 />
        <Button2 />
        <Button3 />
        <Button4 />
        <Container4 />
      </div>
    </div>
  );
}

function Nav() {
  return (
    <div className="absolute backdrop-blur-[8px] bg-[rgba(255,255,255,0.7)] bottom-0 content-stretch flex flex-col items-start left-0 pb-[24px] pt-[9px] px-[24px] w-[390px] z-[2]" data-name="Nav">
      <div aria-hidden="true" className="absolute border-[rgba(255,255,255,0.5)] border-solid border-t inset-0 pointer-events-none shadow-[0px_-8px_30px_0px_rgba(0,0,0,0.04)]" />
      <Container3 />
    </div>
  );
}

function Heading2() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0" data-name="Heading 3">
      <div className="flex flex-col font-['Merriweather:Bold',sans-serif] h-[32px] justify-center leading-[0] not-italic relative shrink-0 text-[#1f2937] text-[24px] text-center w-[173.09px]">
        <p className="leading-[32px] whitespace-pre-wrap">Daily Check-in</p>
      </div>
    </div>
  );
}

function Heading3Margin() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[59.45px] pb-[8px] top-[240px]" data-name="Heading 3:margin">
      <Heading2 />
    </div>
  );
}

function Container7() {
  return (
    <div className="absolute content-stretch flex flex-col items-center left-0 max-w-[260px] pb-[0.625px] px-[4.77px] top-[-1.13px]" data-name="Container">
      <div className="flex flex-col font-['Nunito_Sans:Regular',sans-serif] font-normal h-[46px] justify-center leading-[22.75px] relative shrink-0 text-[#4b5563] text-[14px] text-center w-[250.46px] whitespace-pre-wrap" style={{ fontVariationSettings: "\'YTLC\' 500, \'wdth\' 100" }}>
        <p className="mb-0">Logging your symptoms helps your care</p>
        <p>team tailor your treatment.</p>
      </div>
    </div>
  );
}

function Margin() {
  return (
    <div className="absolute h-[69.5px] left-[16px] top-[280px] w-[260px]" data-name="Margin">
      <Container7 />
    </div>
  );
}

function PatientAndDoctorHoldingAHeartBoxTogether() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative w-full" data-name="Patient and doctor holding a heart box together">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgPatientAndDoctorHoldingAHeartBoxTogether} />
      </div>
    </div>
  );
}

function Shadow() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center relative shadow-[0px_8px_5px_0px_rgba(0,0,0,0.08),0px_20px_13px_0px_rgba(0,0,0,0.03)] shrink-0 size-[224px]" data-name="Shadow">
      <PatientAndDoctorHoldingAHeartBoxTogether />
    </div>
  );
}

function Margin1() {
  return (
    <div className="absolute content-stretch flex flex-col h-[240px] items-start left-[34px] pb-[16px] top-0 w-[224px]" data-name="Margin">
      <Shadow />
    </div>
  );
}

function Container8() {
  return (
    <div className="h-[18.35px] relative shrink-0 w-[20px]" data-name="Container">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 18.35">
        <g id="Container">
          <path d={svgPaths.p279a9400} fill="var(--fill-0, white)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Button6() {
  return (
    <div className="absolute backdrop-blur-[2px] bg-[rgba(107,144,128,0.9)] content-stretch flex gap-[7.99px] items-center justify-center left-0 px-[25px] py-[17px] right-0 rounded-[32px] top-[349.5px]" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.2)] border-solid inset-0 pointer-events-none rounded-[32px]" />
      <div className="absolute bg-[rgba(255,255,255,0)] inset-0 rounded-[32px] shadow-[0px_10px_15px_-3px_rgba(107,144,128,0.2),0px_4px_6px_-4px_rgba(107,144,128,0.2)]" data-name="Button:shadow" />
      <Container8 />
      <div className="flex flex-col font-['Nunito_Sans:Semi_Bold',sans-serif] h-[28px] justify-center leading-[0] not-italic relative shrink-0 text-[18px] text-center text-white w-[117.73px]">
        <p className="leading-[28px] whitespace-pre-wrap">Start Check-in</p>
      </div>
    </div>
  );
}

function Container6() {
  return (
    <div className="h-[411.5px] relative shrink-0 w-[292px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Heading3Margin />
        <Margin />
        <Margin1 />
        <Button6 />
      </div>
    </div>
  );
}

function OverlayBorderShadowOverlayBlur1() {
  return (
    <div className="absolute backdrop-blur-[6px] bg-[rgba(255,255,255,0.45)] left-[24px] right-[24px] rounded-[40px] top-[163px]" data-name="Overlay+Border+Shadow+OverlayBlur">
      <div className="content-stretch flex flex-col items-start overflow-clip p-[25px] relative rounded-[inherit] w-full">
        <div className="absolute bg-[rgba(107,144,128,0.2)] blur-[20px] right-[-47px] rounded-[9999px] size-[192px] top-[-47px]" data-name="Overlay+Blur" />
        <div className="absolute bg-[rgba(255,214,224,0.3)] blur-[20px] bottom-[-47px] left-[-47px] rounded-[9999px] size-[192px]" data-name="Overlay+Blur" />
        <Container6 />
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.6)] border-solid inset-0 pointer-events-none rounded-[40px] shadow-[0px_4px_30px_0px_rgba(0,0,0,0.05)]" />
    </div>
  );
}

function Heading3() {
  return (
    <div className="content-stretch flex flex-col items-start relative shadow-[0px_1px_1px_0px_rgba(0,0,0,0.05)] shrink-0" data-name="Heading 3">
      <div className="flex flex-col font-['Merriweather:Bold',sans-serif] h-[28px] justify-center leading-[0] not-italic relative shrink-0 text-[#1f2937] text-[20px] w-[167.19px]">
        <p className="leading-[28px] whitespace-pre-wrap">Recovery Garden</p>
      </div>
    </div>
  );
}

function OverlayBorderShadowOverlayBlur2() {
  return (
    <div className="backdrop-blur-[2px] bg-[rgba(255,255,255,0.4)] content-stretch flex flex-col items-start px-[13px] py-[5px] relative rounded-[9999px] shrink-0" data-name="Overlay+Border+Shadow+OverlayBlur">
      <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.4)] border-solid inset-0 pointer-events-none rounded-[9999px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)]" />
      <div className="flex flex-col font-['Nunito_Sans:Bold',sans-serif] font-bold h-[20px] justify-center leading-[0] relative shrink-0 text-[#6b9080] text-[14px] w-[78.63px]" style={{ fontVariationSettings: "\'YTLC\' 500, \'wdth\' 100" }}>
        <p className="leading-[20px] whitespace-pre-wrap">Week 4 of 8</p>
      </div>
    </div>
  );
}

function Container9() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between pl-[4px] pr-[3.99px] relative w-full">
          <Heading3 />
          <OverlayBorderShadowOverlayBlur2 />
        </div>
      </div>
    </div>
  );
}

function Svg1() {
  return (
    <div className="h-[80px] overflow-clip relative shrink-0 w-full" data-name="SVG">
      <div className="absolute inset-[6.67%]" data-name="Vector">
        <div className="absolute inset-[-3.85%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 74.6667 74.6667">
            <path d={svgPaths.p215c9c00} id="Vector" stroke="var(--stroke-0, white)" strokeOpacity="0.3" strokeWidth="5.33333" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[6.67%]" data-name="Vector">
        <div className="absolute inset-[-3.85%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 74.6667 74.6667">
            <path d={svgPaths.p215c9c00} id="Vector" stroke="var(--stroke-0, #6B9080)" strokeLinecap="round" strokeWidth="5.33333" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Svg() {
  return (
    <div className="content-stretch flex flex-col h-[80px] items-start justify-center overflow-clip relative shadow-[0px_2px_2px_0px_rgba(0,0,0,0.06),0px_4px_3px_0px_rgba(0,0,0,0.07)] w-full" data-name="SVG">
      <Svg1 />
    </div>
  );
}

function Container12() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Nunito_Sans:Bold',sans-serif] font-bold h-[28px] justify-center leading-[0] relative shrink-0 text-[#1f2937] text-[20px] w-[42.91px]" style={{ fontVariationSettings: "\'YTLC\' 500, \'wdth\' 100" }}>
        <p className="leading-[28px] whitespace-pre-wrap">50%</p>
      </div>
    </div>
  );
}

function Container11() {
  return (
    <div className="absolute content-stretch flex flex-col inset-0 items-center justify-center" data-name="Container">
      <Container12 />
    </div>
  );
}

function Container10() {
  return (
    <div className="relative shrink-0 size-[80px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start justify-center relative size-full">
        <div className="flex h-[80px] items-center justify-center relative shrink-0 w-full" style={{ "--transform-inner-width": "1185.265625", "--transform-inner-height": "307.671875" } as React.CSSProperties}>
          <div className="-rotate-90 flex-none w-full">
            <Svg />
          </div>
        </div>
        <Container11 />
      </div>
    </div>
  );
}

function Heading4() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 4">
      <div className="flex flex-col font-['Nunito_Sans:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#1f2937] text-[18px] w-full" style={{ fontVariationSettings: "\'YTLC\' 500, \'wdth\' 100" }}>
        <p className="leading-[28px] whitespace-pre-wrap">Halfway there!</p>
      </div>
    </div>
  );
}

function Container14() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Nunito_Sans:Regular',sans-serif] font-normal justify-center leading-[20px] relative shrink-0 text-[#4b5563] text-[14px] w-full whitespace-pre-wrap" style={{ fontVariationSettings: "\'YTLC\' 500, \'wdth\' 100" }}>
        <p className="mb-0">{`You've completed 4 cycles.`}</p>
        <p className="mb-0">Your garden is blooming</p>
        <p>beautifully.</p>
      </div>
    </div>
  );
}

function Container13() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[4px] items-start relative w-full">
        <Heading4 />
        <Container14 />
      </div>
    </div>
  );
}

function OverlayBorderShadowOverlayBlur3() {
  return (
    <div className="backdrop-blur-[6px] bg-[rgba(255,255,255,0.45)] relative rounded-[32px] shrink-0 w-full" data-name="Overlay+Border+Shadow+OverlayBlur">
      <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.6)] border-solid inset-0 pointer-events-none rounded-[32px] shadow-[0px_4px_30px_0px_rgba(0,0,0,0.05)]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[24px] items-center p-[21px] relative w-full">
          <Container10 />
          <Container13 />
        </div>
      </div>
    </div>
  );
}

function Section() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[16px] items-start left-[24px] right-[24px] top-[656.5px]" data-name="Section">
      <Container9 />
      <OverlayBorderShadowOverlayBlur3 />
    </div>
  );
}

function Heading5() {
  return (
    <div className="relative shadow-[0px_1px_1px_0px_rgba(0,0,0,0.05)] shrink-0 w-full" data-name="Heading 3">
      <div className="content-stretch flex flex-col items-start px-[4px] relative w-full">
        <div className="flex flex-col font-['Merriweather:Bold',sans-serif] h-[28px] justify-center leading-[0] not-italic relative shrink-0 text-[#1f2937] text-[20px] w-[170.14px]">
          <p className="leading-[28px] whitespace-pre-wrap">{`Today's Schedule`}</p>
        </div>
      </div>
    </div>
  );
}

function Container16() {
  return (
    <div className="h-[18px] relative shrink-0 w-[14px]" data-name="Container">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 18">
        <g id="Container">
          <path d={svgPaths.p3be98a0} fill="var(--fill-0, #2563EB)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function OverlayShadowOverlayBlur() {
  return (
    <div className="backdrop-blur-[2px] bg-[rgba(219,234,254,0.6)] relative rounded-[24px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)] shrink-0 size-[48px]" data-name="Overlay+Shadow+OverlayBlur">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <Container16 />
      </div>
    </div>
  );
}

function Container18() {
  return (
    <div className="content-stretch flex flex-col items-start opacity-80 relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Nunito_Sans:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#2563eb] text-[12px] tracking-[0.3px] uppercase w-full" style={{ fontVariationSettings: "\'YTLC\' 500, \'wdth\' 100" }}>
        <p className="leading-[16px] whitespace-pre-wrap">10:00 AM</p>
      </div>
    </div>
  );
}

function Heading6() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 4">
      <div className="flex flex-col font-['Nunito_Sans:Semi_Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#1f2937] text-[16px] w-full">
        <p className="leading-[24px] whitespace-pre-wrap">Morning Medication</p>
      </div>
    </div>
  );
}

function Container17() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[4px] items-start relative w-full">
        <Container18 />
        <Heading6 />
      </div>
    </div>
  );
}

function OverlayBorderShadowOverlayBlur4() {
  return (
    <div className="backdrop-blur-[6px] bg-[rgba(239,246,255,0.4)] relative rounded-[32px] shrink-0 w-full" data-name="Overlay+Border+Shadow+OverlayBlur">
      <div aria-hidden="true" className="absolute border border-[rgba(219,234,254,0.5)] border-solid inset-0 pointer-events-none rounded-[32px] shadow-[0px_4px_30px_0px_rgba(0,0,0,0.05)]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[16px] items-center p-[17px] relative w-full">
          <OverlayShadowOverlayBlur />
          <Container17 />
          <div className="bg-[rgba(255,255,255,0.2)] relative rounded-[9999px] shrink-0 size-[24px]" data-name="Overlay+Border">
            <div aria-hidden="true" className="absolute border-2 border-[#93c5fd] border-solid inset-0 pointer-events-none rounded-[9999px]" />
          </div>
        </div>
      </div>
    </div>
  );
}

function Container19() {
  return (
    <div className="h-[20px] relative shrink-0 w-[16px]" data-name="Container">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 20">
        <g id="Container">
          <path d={svgPaths.p113ae80} fill="var(--fill-0, #EC4899)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function OverlayShadowOverlayBlur1() {
  return (
    <div className="backdrop-blur-[2px] bg-[rgba(255,255,255,0.6)] relative rounded-[24px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)] shrink-0 size-[48px]" data-name="Overlay+Shadow+OverlayBlur">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <Container19 />
      </div>
    </div>
  );
}

function Container21() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-0 opacity-80 right-0 top-0" data-name="Container">
      <div className="flex flex-col font-['Nunito_Sans:Bold',sans-serif] font-bold h-[16px] justify-center leading-[0] relative shrink-0 text-[#ec4899] text-[12px] tracking-[0.3px] uppercase w-[52.3px]" style={{ fontVariationSettings: "\'YTLC\' 500, \'wdth\' 100" }}>
        <p className="leading-[16px] whitespace-pre-wrap">ALL DAY</p>
      </div>
    </div>
  );
}

function Heading7() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-0 right-0 top-[20px]" data-name="Heading 4">
      <div className="flex flex-col font-['Nunito_Sans:Semi_Bold',sans-serif] h-[24px] justify-center leading-[0] not-italic relative shrink-0 text-[#1f2937] text-[16px] w-[110.81px]">
        <p className="leading-[24px] whitespace-pre-wrap">Hydration Goal</p>
      </div>
    </div>
  );
}

function Container22() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-0 right-0 top-[46px]" data-name="Container">
      <div className="flex flex-col font-['Nunito_Sans:Regular',sans-serif] font-normal h-[16px] justify-center leading-[0] relative shrink-0 text-[#4b5563] text-[12px] w-[74.91px]" style={{ fontVariationSettings: "\'YTLC\' 500, \'wdth\' 100" }}>
        <p className="leading-[16px] whitespace-pre-wrap">4 of 8 glasses</p>
      </div>
    </div>
  );
}

function Container20() {
  return (
    <div className="flex-[1_0_0] h-[62px] min-h-px min-w-px relative" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Container21 />
        <Heading7 />
        <Container22 />
      </div>
    </div>
  );
}

function Container24() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Container">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Container">
          <path d={svgPaths.p2d8e4cc0} fill="var(--fill-0, #EC4899)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Container23() {
  return (
    <div className="relative rounded-[9999px] shrink-0 size-[32px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <Container24 />
      </div>
    </div>
  );
}

function OverlayBorderShadowOverlayBlur5() {
  return (
    <div className="backdrop-blur-[6px] bg-[rgba(255,214,224,0.2)] relative rounded-[32px] shrink-0 w-full" data-name="Overlay+Border+Shadow+OverlayBlur">
      <div aria-hidden="true" className="absolute border border-[rgba(255,214,224,0.3)] border-solid inset-0 pointer-events-none rounded-[32px] shadow-[0px_4px_30px_0px_rgba(0,0,0,0.05)]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[16px] items-center p-[17px] relative w-full">
          <OverlayShadowOverlayBlur1 />
          <Container20 />
          <Container23 />
        </div>
      </div>
    </div>
  );
}

function Container15() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-name="Container">
      <OverlayBorderShadowOverlayBlur4 />
      <OverlayBorderShadowOverlayBlur5 />
    </div>
  );
}

function Section1() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[16px] items-start left-[24px] right-[24px] top-[868.5px]" data-name="Section">
      <Heading5 />
      <Container15 />
    </div>
  );
}

function Heading8() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 3">
      <div className="flex flex-col font-['Merriweather:Bold',sans-serif] h-[28px] justify-center leading-[0] not-italic relative shrink-0 text-[#065f46] text-[18px] w-[171.98px]">
        <p className="leading-[28px] whitespace-pre-wrap">Community Stories</p>
      </div>
    </div>
  );
}

function Container26() {
  return (
    <div className="content-stretch flex flex-col items-start opacity-90 relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Nunito_Sans:Regular',sans-serif] font-normal h-[20px] justify-center leading-[0] relative shrink-0 text-[#047857] text-[14px] w-[241.75px]" style={{ fontVariationSettings: "\'YTLC\' 500, \'wdth\' 100" }}>
        <p className="leading-[20px] whitespace-pre-wrap">Read how Sarah managed her week 5.</p>
      </div>
    </div>
  );
}

function Container25() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[4px] items-start relative">
        <Heading8 />
        <Container26 />
      </div>
    </div>
  );
}

function Container27() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Container">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Container">
          <path d={svgPaths.p1a406200} fill="var(--fill-0, #047857)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Button7() {
  return (
    <div className="backdrop-blur-[2px] bg-[rgba(255,255,255,0.6)] relative rounded-[9999px] shrink-0 size-[40px]" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[rgba(209,250,229,0.5)] border-solid inset-0 pointer-events-none rounded-[9999px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center p-px relative size-full">
        <Container27 />
      </div>
    </div>
  );
}

function Section2() {
  return (
    <div className="absolute backdrop-blur-[6px] content-stretch flex items-center justify-between left-[24px] p-[21px] right-[24px] rounded-[32px] top-[1138.5px]" data-name="Section" style={{ backgroundImage: "linear-gradient(90deg, rgba(236, 253, 245, 0.5) 0%, rgba(240, 253, 250, 0.5) 100%), linear-gradient(90deg, rgba(255, 255, 255, 0.45) 0%, rgba(255, 255, 255, 0.45) 100%)" }}>
      <div aria-hidden="true" className="absolute border border-[rgba(209,250,229,0.5)] border-solid inset-0 pointer-events-none rounded-[32px]" />
      <div className="absolute bg-[rgba(255,255,255,0)] inset-0 rounded-[32px] shadow-[0px_10px_15px_-3px_rgba(209,250,229,0.2),0px_4px_6px_-4px_rgba(209,250,229,0.2)]" data-name="Overlay+Shadow" />
      <Container25 />
      <Button7 />
    </div>
  );
}

function Heading1() {
  return (
    <div className="h-[75px] relative shadow-[0px_1px_1px_0px_rgba(0,0,0,0.05)] shrink-0 w-full" data-name="Heading 2">
      <div className="-translate-y-1/2 absolute flex flex-col font-['Merriweather:Bold',sans-serif] h-[75px] justify-center leading-[37.5px] left-0 not-italic text-[#1f2937] text-[30px] top-[36.75px] w-[302.5px] whitespace-pre-wrap">
        <p className="mb-0">Welcome back,</p>
        <p>how are you feeling?</p>
      </div>
    </div>
  );
}

function Container28() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Nunito_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#4b5563] text-[16px] w-full" style={{ fontVariationSettings: "\'YTLC\' 500, \'wdth\' 100" }}>
        <p className="leading-[24px] whitespace-pre-wrap">{`Let's check in on your journey today.`}</p>
      </div>
    </div>
  );
}

function Section3() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[8px] items-start left-[24px] right-[24px] top-[24px]" data-name="Section">
      <Heading1 />
      <Container28 />
    </div>
  );
}

function Main() {
  return (
    <div className="h-[1376px] overflow-clip relative shrink-0 w-full z-[1]" data-name="Main">
      <OverlayBorderShadowOverlayBlur1 />
      <Section />
      <Section1 />
      <Section2 />
      <Section3 />
    </div>
  );
}

export default function ChemoCompanionDesktopHome() {
  return (
    <div className="content-stretch flex flex-col isolate items-start relative size-full" data-name="Chemo Companion Desktop Home" style={{ backgroundImage: "url(\'data:image/svg+xml;utf8,<svg viewBox=\\'0 0 390 1481\\' xmlns=\\'http://www.w3.org/2000/svg\\' preserveAspectRatio=\\'none\\'><rect x=\\'0\\' y=\\'0\\' height=\\'100%\\' width=\\'100%\\' fill=\\'url(%23grad)\\' opacity=\\'1\\'/><defs><radialGradient id=\\'grad\\' gradientUnits=\\'userSpaceOnUse\\' cx=\\'0\\' cy=\\'0\\' r=\\'10\\' gradientTransform=\\'matrix(55.154 0 0 209.45 0 0)\\'><stop stop-color=\\'rgba(181,227,206,1)\\' offset=\\'0\\'/><stop stop-color=\\'rgba(181,227,206,0)\\' offset=\\'0.5\\'/></radialGradient></defs></svg>\'), url(\'data:image/svg+xml;utf8,<svg viewBox=\\'0 0 390 1481\\' xmlns=\\'http://www.w3.org/2000/svg\\' preserveAspectRatio=\\'none\\'><rect x=\\'0\\' y=\\'0\\' height=\\'100%\\' width=\\'100%\\' fill=\\'url(%23grad)\\' opacity=\\'1\\'/><defs><radialGradient id=\\'grad\\' gradientUnits=\\'userSpaceOnUse\\' cx=\\'0\\' cy=\\'0\\' r=\\'10\\' gradientTransform=\\'matrix(27.577 0 0 209.45 195 0)\\'><stop stop-color=\\'rgba(245,214,225,1)\\' offset=\\'0\\'/><stop stop-color=\\'rgba(245,214,225,0)\\' offset=\\'0.5\\'/></radialGradient></defs></svg>\'), url(\'data:image/svg+xml;utf8,<svg viewBox=\\'0 0 390 1481\\' xmlns=\\'http://www.w3.org/2000/svg\\' preserveAspectRatio=\\'none\\'><rect x=\\'0\\' y=\\'0\\' height=\\'100%\\' width=\\'100%\\' fill=\\'url(%23grad)\\' opacity=\\'1\\'/><defs><radialGradient id=\\'grad\\' gradientUnits=\\'userSpaceOnUse\\' cx=\\'0\\' cy=\\'0\\' r=\\'10\\' gradientTransform=\\'matrix(55.154 0 0 209.45 390 0)\\'><stop stop-color=\\'rgba(198,230,236,1)\\' offset=\\'0\\'/><stop stop-color=\\'rgba(198,230,236,0)\\' offset=\\'0.5\\'/></radialGradient></defs></svg>\'), url(\'data:image/svg+xml;utf8,<svg viewBox=\\'0 0 390 1481\\' xmlns=\\'http://www.w3.org/2000/svg\\' preserveAspectRatio=\\'none\\'><rect x=\\'0\\' y=\\'0\\' height=\\'100%\\' width=\\'100%\\' fill=\\'url(%23grad)\\' opacity=\\'1\\'/><defs><radialGradient id=\\'grad\\' gradientUnits=\\'userSpaceOnUse\\' cx=\\'0\\' cy=\\'0\\' r=\\'10\\' gradientTransform=\\'matrix(55.154 0 0 104.72 0 740.5)\\'><stop stop-color=\\'rgba(199,234,219,1)\\' offset=\\'0\\'/><stop stop-color=\\'rgba(199,234,219,0)\\' offset=\\'0.5\\'/></radialGradient></defs></svg>\'), url(\'data:image/svg+xml;utf8,<svg viewBox=\\'0 0 390 1481\\' xmlns=\\'http://www.w3.org/2000/svg\\' preserveAspectRatio=\\'none\\'><rect x=\\'0\\' y=\\'0\\' height=\\'100%\\' width=\\'100%\\' fill=\\'url(%23grad)\\' opacity=\\'1\\'/><defs><radialGradient id=\\'grad\\' gradientUnits=\\'userSpaceOnUse\\' cx=\\'0\\' cy=\\'0\\' r=\\'10\\' gradientTransform=\\'matrix(55.154 0 0 104.72 390 740.5)\\'><stop stop-color=\\'rgba(247,222,231,1)\\' offset=\\'0\\'/><stop stop-color=\\'rgba(247,222,231,0)\\' offset=\\'0.5\\'/></radialGradient></defs></svg>\'), url(\'data:image/svg+xml;utf8,<svg viewBox=\\'0 0 390 1481\\' xmlns=\\'http://www.w3.org/2000/svg\\' preserveAspectRatio=\\'none\\'><rect x=\\'0\\' y=\\'0\\' height=\\'100%\\' width=\\'100%\\' fill=\\'url(%23grad)\\' opacity=\\'1\\'/><defs><radialGradient id=\\'grad\\' gradientUnits=\\'userSpaceOnUse\\' cx=\\'0\\' cy=\\'0\\' r=\\'10\\' gradientTransform=\\'matrix(55.154 0 0 209.45 0 1481)\\'><stop stop-color=\\'rgba(217,238,242,1)\\' offset=\\'0\\'/><stop stop-color=\\'rgba(217,238,242,0)\\' offset=\\'0.5\\'/></radialGradient></defs></svg>\'), url(\'data:image/svg+xml;utf8,<svg viewBox=\\'0 0 390 1481\\' xmlns=\\'http://www.w3.org/2000/svg\\' preserveAspectRatio=\\'none\\'><rect x=\\'0\\' y=\\'0\\' height=\\'100%\\' width=\\'100%\\' fill=\\'url(%23grad)\\' opacity=\\'1\\'/><defs><radialGradient id=\\'grad\\' gradientUnits=\\'userSpaceOnUse\\' cx=\\'0\\' cy=\\'0\\' r=\\'10\\' gradientTransform=\\'matrix(55.154 0 0 209.45 390 1481)\\'><stop stop-color=\\'rgba(181,227,206,1)\\' offset=\\'0\\'/><stop stop-color=\\'rgba(181,227,206,0)\\' offset=\\'0.5\\'/></radialGradient></defs></svg>\'), linear-gradient(90deg, rgb(248, 250, 252) 0%, rgb(248, 250, 252) 100%)" }}>
      <Header />
      <Nav />
      <Main />
    </div>
  );
}