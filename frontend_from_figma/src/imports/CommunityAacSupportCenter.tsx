import svgPaths from "./svg-2c4gv9kwv4";
import imgIllustrationOfCommunityGardeningAndSupport from "figma:asset/4031712cd4fc188d44d82de402b38cad0313ee0d.png";

function Heading() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 1">
      <div className="flex flex-col font-['Lora:Semi_Bold',sans-serif] h-[32px] justify-center leading-[0] not-italic relative shrink-0 text-[#1e293b] text-[24px] w-[187.42px]">
        <p className="leading-[32px] whitespace-pre-wrap">Community Hub</p>
      </div>
    </div>
  );
}

function Container1() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['DM_Sans:Regular',sans-serif] font-normal h-[20px] justify-center leading-[0] relative shrink-0 text-[#64748b] text-[14px] w-[160.64px]" style={{ fontVariationSettings: "\'opsz\' 14" }}>
        <p className="whitespace-pre-wrap">
          <span className="leading-[20px]">{`Bedok Area • `}</span>
          <span className="font-['DM_Sans:Medium',sans-serif] font-medium leading-[20px] text-[#4ade80]" style={{ fontVariationSettings: "\'opsz\' 14" }}>
            Active Now
          </span>
        </p>
      </div>
    </div>
  );
}

function Container() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0" data-name="Container">
      <Heading />
      <Container1 />
    </div>
  );
}

function Container2() {
  return (
    <div className="h-[19.5px] relative shrink-0 w-[15.187px]" data-name="Container">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15.1871 19.5">
        <g id="Container">
          <path d={svgPaths.p33529880} fill="var(--fill-0, #475569)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Button() {
  return (
    <div className="backdrop-blur-[2px] bg-[rgba(255,255,255,0.5)] content-stretch flex flex-col items-center justify-center p-[9px] relative rounded-[9999px] shrink-0" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.6)] border-solid inset-0 pointer-events-none rounded-[9999px]" />
      <Container2 />
      <div className="absolute bg-[#ef4444] right-[9.19px] rounded-[9999px] size-[8px] top-[9px]" data-name="Background+Border">
        <div aria-hidden="true" className="absolute border-2 border-solid border-white inset-0 pointer-events-none rounded-[9999px]" />
      </div>
    </div>
  );
}

function Header() {
  return (
    <div className="relative shrink-0 w-full" data-name="Header">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between pb-[24px] pt-[48px] px-[24px] relative w-full">
          <div className="absolute backdrop-blur-[12px] bg-[rgba(255,255,255,0.7)] inset-0" data-name="Overlay+HorizontalBorder+Shadow+OverlayBlur">
            <div aria-hidden="true" className="absolute border-[rgba(255,255,255,0.5)] border-b border-solid inset-0 pointer-events-none shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)]" />
          </div>
          <Container />
          <Button />
        </div>
      </div>
    </div>
  );
}

function IllustrationOfCommunityGardeningAndSupport() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative w-full" data-name="Illustration of community gardening and support">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgIllustrationOfCommunityGardeningAndSupport} />
      </div>
    </div>
  );
}

function Shadow() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center relative shadow-[0px_8px_5px_0px_rgba(0,0,0,0.08),0px_20px_13px_0px_rgba(0,0,0,0.03)] shrink-0 size-[192px]" data-name="Shadow">
      <IllustrationOfCommunityGardeningAndSupport />
    </div>
  );
}

function Margin() {
  return (
    <div className="content-stretch flex flex-col h-[208px] items-start pb-[16px] relative shrink-0 w-[192px]" data-name="Margin">
      <Shadow />
    </div>
  );
}

function Heading1() {
  return (
    <div className="content-stretch flex flex-col items-center relative shadow-[0px_1px_1px_0px_rgba(0,0,0,0.05)] shrink-0" data-name="Heading 2">
      <div className="flex flex-col font-['Lora:Semi_Bold',sans-serif] h-[32px] justify-center leading-[0] not-italic relative shrink-0 text-[#1e293b] text-[24px] text-center w-[189.44px]">
        <p className="leading-[32px] whitespace-pre-wrap">{`You're Not Alone`}</p>
      </div>
    </div>
  );
}

function Heading2Margin() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[8px] relative shrink-0" data-name="Heading 2:margin">
      <Heading1 />
    </div>
  );
}

function Container4() {
  return (
    <div className="absolute content-stretch flex flex-col items-center left-0 max-w-[320px] pl-[6.73px] pr-[6.75px] top-[-0.63px]" data-name="Container">
      <div className="flex flex-col font-['DM_Sans:Medium',sans-serif] font-medium h-[46px] justify-center leading-[22.75px] relative shrink-0 text-[#475569] text-[14px] text-center w-[294.52px] whitespace-pre-wrap" style={{ fontVariationSettings: "\'opsz\' 14" }}>
        <p className="mb-0">Connect with local peers and join AAC</p>
        <p>activities designed for your wellness journey.</p>
      </div>
    </div>
  );
}

function Margin1() {
  return (
    <div className="h-[69.5px] max-w-[320px] relative shrink-0 w-[308px]" data-name="Margin">
      <Container4 />
    </div>
  );
}

function Container6() {
  return (
    <div className="h-[16.523px] relative shrink-0 w-[14.977px]" data-name="Container">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14.9766 16.5234">
        <g id="Container">
          <path d={svgPaths.p1a8c9380} fill="var(--fill-0, white)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Button1() {
  return (
    <div className="backdrop-blur-[2px] bg-[rgba(74,222,128,0.9)] flex-[1_0_0] min-h-px min-w-px relative rounded-[24px]" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.2)] border-solid inset-0 pointer-events-none rounded-[24px]" />
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex gap-[8px] items-center justify-center px-[17px] py-[13px] relative w-full">
          <div className="absolute bg-[rgba(255,255,255,0)] inset-0 rounded-[24px] shadow-[0px_10px_15px_-3px_rgba(187,247,208,0.5),0px_4px_6px_-4px_rgba(187,247,208,0.5)]" data-name="Button:shadow" />
          <Container6 />
          <div className="flex flex-col font-['DM_Sans:Bold',sans-serif] font-bold h-[24px] justify-center leading-[0] relative shrink-0 text-[16px] text-center text-white w-[52.95px]" style={{ fontVariationSettings: "\'opsz\' 14" }}>
            <p className="leading-[24px] whitespace-pre-wrap">Events</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Container7() {
  return (
    <div className="h-[10.477px] relative shrink-0 w-[16.523px]" data-name="Container">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16.5234 10.4766">
        <g id="Container">
          <path d={svgPaths.p18d281a0} fill="var(--fill-0, #1E293B)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Button2() {
  return (
    <div className="backdrop-blur-[6px] bg-[rgba(255,255,255,0.4)] flex-[1_0_0] min-h-px min-w-px relative rounded-[24px]" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.6)] border-solid inset-0 pointer-events-none rounded-[24px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)]" />
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex gap-[8px] items-center justify-center px-[17px] py-[13px] relative w-full">
          <Container7 />
          <div className="flex flex-col font-['DM_Sans:Bold',sans-serif] font-bold h-[24px] justify-center leading-[0] relative shrink-0 text-[#1e293b] text-[16px] text-center w-[57.44px]" style={{ fontVariationSettings: "\'opsz\' 14" }}>
            <p className="leading-[24px] whitespace-pre-wrap">Groups</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Container5() {
  return (
    <div className="content-stretch flex gap-[12px] items-start justify-center max-w-[320px] relative shrink-0 w-full" data-name="Container">
      <Button1 />
      <Button2 />
    </div>
  );
}

function Container3() {
  return (
    <div className="relative shrink-0 w-[356px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center p-[24px] relative w-full">
        <Margin />
        <Heading2Margin />
        <Margin1 />
        <Container5 />
      </div>
    </div>
  );
}

function Section() {
  return (
    <div className="backdrop-blur-[10px] relative rounded-[24px] shrink-0 w-[358px]" data-name="Section" style={{ backgroundImage: "linear-gradient(135.297deg, rgba(255, 255, 255, 0.4) 0%, rgba(255, 255, 255, 0.1) 100%)" }}>
      <div className="content-stretch flex flex-col items-start overflow-clip p-px relative rounded-[inherit] w-full">
        <div className="absolute inset-px" data-name="Gradient" style={{ backgroundImage: "linear-gradient(130.59deg, rgba(204, 251, 241, 0.3) 0%, rgba(204, 251, 241, 0) 50%, rgba(219, 234, 254, 0.3) 100%)" }} />
        <Container3 />
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.5)] border-solid inset-0 pointer-events-none rounded-[24px] shadow-[0px_8px_32px_0px_rgba(31,38,135,0.1)]" />
    </div>
  );
}

function Heading2() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Heading 3">
      <div className="flex flex-col font-['Lora:Semi_Bold',sans-serif] h-[28px] justify-center leading-[0] not-italic relative shrink-0 text-[#1e293b] text-[18px] w-[156.39px]">
        <p className="leading-[28px] whitespace-pre-wrap">Near You in Bedok</p>
      </div>
    </div>
  );
}

function Link() {
  return (
    <div className="backdrop-blur-[2px] bg-[rgba(240,249,255,0.5)] content-stretch flex flex-col items-start px-[8px] py-[4px] relative rounded-[8px] shrink-0" data-name="Link">
      <div className="flex flex-col font-['DM_Sans:Medium',sans-serif] font-medium h-[20px] justify-center leading-[0] relative shrink-0 text-[#38bdf8] text-[14px] w-[64.06px]" style={{ fontVariationSettings: "\'opsz\' 14" }}>
        <p className="leading-[20px] whitespace-pre-wrap">View Map</p>
      </div>
    </div>
  );
}

function Container8() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between pr-[24px] relative w-full">
          <Heading2 />
          <Link />
        </div>
      </div>
    </div>
  );
}

function Container10() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 size-[12px]" data-name="Container">
      <div className="absolute bg-[#4ade80] inset-0 opacity-75 rounded-[9999px]" data-name="Background" />
      <div className="bg-[#22c55e] rounded-[9999px] shrink-0 size-[12px]" data-name="Background" />
    </div>
  );
}

function Container11() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['DM_Sans:Bold',sans-serif] font-bold h-[16px] justify-center leading-[0] relative shrink-0 text-[#334155] text-[12px] w-[146.31px]" style={{ fontVariationSettings: "\'opsz\' 14" }}>
        <p className="leading-[16px] whitespace-pre-wrap">2 Activities starting soon</p>
      </div>
    </div>
  );
}

function Container9() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[8px] items-center relative">
        <Container10 />
        <Container11 />
      </div>
    </div>
  );
}

function Container12() {
  return (
    <div className="h-[6.508px] relative shrink-0 w-[3.849px]" data-name="Container">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3.84863 6.50781">
        <g id="Container">
          <path d={svgPaths.p1e788380} fill="var(--fill-0, #64748B)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function OverlayOverlayBlur() {
  return (
    <div className="backdrop-blur-[2px] bg-[rgba(255,255,255,0.5)] relative rounded-[9999px] shrink-0 size-[32px]" data-name="Overlay+OverlayBlur">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <Container12 />
      </div>
    </div>
  );
}

function OverlayHorizontalBorderOverlayBlur() {
  return (
    <div className="absolute backdrop-blur-[6px] bg-[rgba(255,255,255,0.7)] bottom-px content-stretch flex items-center justify-between left-px pb-[12px] pt-[13px] px-[12px] right-px" data-name="Overlay+HorizontalBorder+OverlayBlur">
      <div aria-hidden="true" className="absolute border-[rgba(255,255,255,0.5)] border-solid border-t inset-0 pointer-events-none" />
      <Container9 />
      <OverlayOverlayBlur />
    </div>
  );
}

function Container14() {
  return (
    <div className="h-[14.643px] relative shrink-0 w-[14.916px]" data-name="Container">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14.9162 14.6426">
        <g id="Container">
          <path d={svgPaths.p3546f780} fill="var(--fill-0, white)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function OverlayBorderOverlayBlur() {
  return (
    <div className="backdrop-blur-[2px] bg-[rgba(74,222,128,0.9)] content-stretch flex items-center justify-center p-[2px] relative rounded-[9999px] shrink-0 size-[40px]" data-name="Overlay+Border+OverlayBlur">
      <div aria-hidden="true" className="absolute border-2 border-solid border-white inset-0 pointer-events-none rounded-[9999px]" />
      <div className="absolute bg-[rgba(255,255,255,0)] left-0 rounded-[9999px] shadow-[0px_10px_15px_-3px_rgba(187,247,208,0.5),0px_4px_6px_-4px_rgba(187,247,208,0.5)] size-[40px] top-0" data-name="Overlay+Shadow" />
      <Container14 />
    </div>
  );
}

function Container13() {
  return (
    <div className="absolute content-stretch flex flex-col inset-[13.92%_60.72%_63.35%_27.58%] items-start" data-name="Container">
      <OverlayBorderOverlayBlur />
    </div>
  );
}

function Container16() {
  return (
    <div className="h-[12.023px] relative shrink-0 w-[13.5px]" data-name="Container">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.5 12.0234">
        <g id="Container">
          <path d={svgPaths.p54d0400} fill="var(--fill-0, white)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function OverlayBorderOverlayBlur1() {
  return (
    <div className="backdrop-blur-[2px] bg-[rgba(56,189,248,0.9)] content-stretch flex items-center justify-center p-[2px] relative rounded-[9999px] shrink-0 size-[40px]" data-name="Overlay+Border+OverlayBlur">
      <div aria-hidden="true" className="absolute border-2 border-solid border-white inset-0 pointer-events-none rounded-[9999px]" />
      <div className="absolute bg-[rgba(255,255,255,0)] left-0 rounded-[9999px] shadow-[0px_10px_15px_-3px_rgba(186,230,253,0.5),0px_4px_6px_-4px_rgba(186,230,253,0.5)] size-[40px] top-0" data-name="Overlay+Shadow" />
      <Container16 />
    </div>
  );
}

function Container15() {
  return (
    <div className="absolute content-stretch flex flex-col inset-[43.75%_25.15%_33.52%_63.16%] items-start" data-name="Container">
      <OverlayBorderOverlayBlur1 />
    </div>
  );
}

function OverlayBorderShadow() {
  return (
    <div className="bg-[rgba(255,255,255,0)] h-[176px] relative rounded-[32px] shrink-0 w-[342px]" data-name="Overlay+Border+Shadow">
      <div className="overflow-clip relative rounded-[inherit] size-full">
        <div className="absolute bg-[#eff6ff] inset-px opacity-80" data-name="Background" />
        <div className="absolute inset-px opacity-30" data-name="Gradient" style={{ backgroundImage: "url(\'data:image/svg+xml;utf8,<svg viewBox=\\'0 0 340 174\\' xmlns=\\'http://www.w3.org/2000/svg\\' preserveAspectRatio=\\'none\\'><rect x=\\'0\\' y=\\'0\\' height=\\'100%\\' width=\\'100%\\' fill=\\'url(%23grad)\\' opacity=\\'1\\'/><defs><radialGradient id=\\'grad\\' gradientUnits=\\'userSpaceOnUse\\' cx=\\'0\\' cy=\\'0\\' r=\\'10\\' gradientTransform=\\'matrix(24.042 0 0 12.304 170 87)\\'><stop stop-color=\\'rgba(148,163,184,1)\\' offset=\\'0.058926\\'/><stop stop-color=\\'rgba(148,163,184,0)\\' offset=\\'0.058926\\'/></radialGradient></defs></svg>\')" }} />
        <OverlayHorizontalBorderOverlayBlur />
        <Container13 />
        <Container15 />
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.4)] border-solid inset-0 pointer-events-none rounded-[32px] shadow-[0px_8px_32px_0px_rgba(31,38,135,0.07)]" />
    </div>
  );
}

function Section1() {
  return (
    <div className="relative shrink-0 w-full" data-name="Section">
      <div className="content-stretch flex flex-col gap-[16px] items-start pl-[24px] pt-[8px] relative w-full">
        <Container8 />
        <OverlayBorderShadow />
      </div>
    </div>
  );
}

function Heading3() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 3">
      <div className="flex flex-col font-['Lora:Semi_Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#1e293b] text-[18px] w-full">
        <p className="leading-[28px] whitespace-pre-wrap">Recommended AAC Activities</p>
      </div>
    </div>
  );
}

function Container18() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['DM_Sans:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#64748b] text-[12px] w-full" style={{ fontVariationSettings: "\'opsz\' 14" }}>
        <p className="leading-[16px] whitespace-pre-wrap">Based on your symptom log today</p>
      </div>
    </div>
  );
}

function Container17() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="content-stretch flex flex-col items-start px-[24px] relative w-full">
        <Heading3 />
        <Container18 />
      </div>
    </div>
  );
}

function BackgroundBorderShadow() {
  return (
    <div className="bg-[#e2e8f0] content-stretch flex items-center justify-center mr-[-12px] p-[2px] relative rounded-[9999px] shrink-0 size-[36px]" data-name="Background+Border+Shadow">
      <div aria-hidden="true" className="absolute border-2 border-solid border-white inset-0 pointer-events-none rounded-[9999px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)]" />
      <div className="flex flex-col font-['DM_Sans:Bold',sans-serif] font-bold h-[15px] justify-center leading-[0] relative shrink-0 text-[#475569] text-[10px] text-center w-[14.28px]" style={{ fontVariationSettings: "\'opsz\' 14" }}>
        <p className="leading-[15px] whitespace-pre-wrap">JM</p>
      </div>
    </div>
  );
}

function BackgroundBorderShadow1() {
  return (
    <div className="bg-[#cbd5e1] content-stretch flex items-center justify-center p-[2px] relative rounded-[9999px] shrink-0 size-[36px]" data-name="Background+Border+Shadow">
      <div aria-hidden="true" className="absolute border-2 border-solid border-white inset-0 pointer-events-none rounded-[9999px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)]" />
      <div className="flex flex-col font-['DM_Sans:Bold',sans-serif] font-bold h-[15px] justify-center leading-[0] relative shrink-0 text-[#334155] text-[10px] text-center w-[12.69px]" style={{ fontVariationSettings: "\'opsz\' 14" }}>
        <p className="leading-[15px] whitespace-pre-wrap">AL</p>
      </div>
    </div>
  );
}

function Margin2() {
  return (
    <div className="content-stretch flex flex-col items-start mr-[-12px] relative shrink-0 size-[36px]" data-name="Margin">
      <BackgroundBorderShadow1 />
    </div>
  );
}

function BackgroundBorderShadowOverlayBlur() {
  return (
    <div className="backdrop-blur-[2px] bg-[#f1f5f9] content-stretch flex items-center justify-center p-[2px] relative rounded-[9999px] shrink-0 size-[36px]" data-name="Background+Border+Shadow+OverlayBlur">
      <div aria-hidden="true" className="absolute border-2 border-solid border-white inset-0 pointer-events-none rounded-[9999px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)]" />
      <div className="flex flex-col font-['DM_Sans:Medium',sans-serif] font-medium h-[15px] justify-center leading-[0] relative shrink-0 text-[#64748b] text-[10px] text-center w-[11.73px]" style={{ fontVariationSettings: "\'opsz\' 14" }}>
        <p className="leading-[15px] whitespace-pre-wrap">+5</p>
      </div>
    </div>
  );
}

function Margin3() {
  return (
    <div className="content-stretch flex flex-col items-start mr-[-12px] relative shrink-0 size-[36px]" data-name="Margin">
      <BackgroundBorderShadowOverlayBlur />
    </div>
  );
}

function Container20() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start pr-[12px] relative">
        <BackgroundBorderShadow />
        <Margin2 />
        <Margin3 />
      </div>
    </div>
  );
}

function Button3() {
  return (
    <div className="backdrop-blur-[2px] bg-[rgba(74,222,128,0.2)] relative rounded-[8px] shrink-0" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[rgba(187,247,208,0.3)] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center justify-center px-[17px] py-[9px] relative">
        <div className="flex flex-col font-['DM_Sans:Bold',sans-serif] font-bold h-[20px] justify-center leading-[0] relative shrink-0 text-[#166534] text-[14px] text-center w-[28.59px]" style={{ fontVariationSettings: "\'opsz\' 14" }}>
          <p className="leading-[20px] whitespace-pre-wrap">Join</p>
        </div>
      </div>
    </div>
  );
}

function HorizontalBorder() {
  return (
    <div className="absolute bottom-[16px] content-stretch flex items-center justify-between left-[16px] pt-[17px] right-[16px]" data-name="HorizontalBorder">
      <div aria-hidden="true" className="absolute border-[rgba(226,232,240,0.5)] border-solid border-t inset-0 pointer-events-none" />
      <Container20 />
      <Button3 />
    </div>
  );
}

function OverlayBorderShadowOverlayBlur1() {
  return (
    <div className="absolute backdrop-blur-[6px] bg-[rgba(255,255,255,0.6)] right-[13px] rounded-[8px] top-[13px]" data-name="Overlay+Border+Shadow+OverlayBlur">
      <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.2)] border-solid inset-0 pointer-events-none rounded-[8px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start px-[13px] py-[7px] relative">
        <div className="flex flex-col font-['DM_Sans:Bold',sans-serif] font-bold h-[16px] justify-center leading-[0] relative shrink-0 text-[#c2410c] text-[12px] w-[68.95px]" style={{ fontVariationSettings: "\'opsz\' 14" }}>
          <p className="leading-[16px] whitespace-pre-wrap">Today, 4 PM</p>
        </div>
      </div>
    </div>
  );
}

function Container22() {
  return (
    <div className="h-[48.094px] relative shrink-0 w-[54px]" data-name="Container">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 54 48.0938">
        <g id="Container" opacity="0.6">
          <path d={svgPaths.p3c070be0} fill="var(--fill-0, #FDBA74)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Container21() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative w-[244px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <Container22 />
      </div>
    </div>
  );
}

function BackgroundBorder() {
  return (
    <div className="h-[144px] relative rounded-[24px] shrink-0 w-full" data-name="Background+Border" style={{ backgroundImage: "linear-gradient(149.657deg, rgba(255, 237, 213, 0.5) 0%, rgba(255, 251, 235, 0.5) 100%)" }}>
      <div className="content-stretch flex flex-col items-start justify-center overflow-clip p-px relative rounded-[inherit] size-full">
        <OverlayBorderShadowOverlayBlur1 />
        <Container21 />
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.3)] border-solid inset-0 pointer-events-none rounded-[24px]" />
    </div>
  );
}

function Margin4() {
  return (
    <div className="absolute content-stretch flex flex-col h-[160px] items-start left-[16px] pb-[16px] right-[16px] top-[16px]" data-name="Margin">
      <BackgroundBorder />
    </div>
  );
}

function Heading4() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 4">
      <div className="flex flex-col font-['DM_Sans:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#1e293b] text-[18px] w-full" style={{ fontVariationSettings: "\'opsz\' 14" }}>
        <p className="leading-[28px] whitespace-pre-wrap">Gentle Taichi</p>
      </div>
    </div>
  );
}

function Container24() {
  return (
    <div className="content-stretch flex flex-col items-start overflow-clip relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['DM_Sans:Regular',sans-serif] font-normal justify-center leading-[20px] relative shrink-0 text-[#475569] text-[14px] w-full whitespace-pre-wrap" style={{ fontVariationSettings: "\'opsz\' 14" }}>
        <p className="mb-0">Low impact movement suitable for</p>
        <p>post-treatment recovery.</p>
      </div>
    </div>
  );
}

function Container23() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full" data-name="Container">
      <Heading4 />
      <Container24 />
    </div>
  );
}

function Margin5() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[16px] pb-[12px] right-[16px] top-[176px]" data-name="Margin">
      <Container23 />
    </div>
  );
}

function OverlayBorderShadowOverlayBlur() {
  return (
    <div className="absolute backdrop-blur-[6px] bg-[rgba(255,255,255,0.65)] border border-[rgba(255,255,255,0.6)] border-solid bottom-[24px] left-[24px] overflow-clip rounded-[32px] shadow-[0px_8px_32px_0px_rgba(31,38,135,0.07)] top-0 w-[280px]" data-name="Overlay+Border+Shadow+OverlayBlur">
      <HorizontalBorder />
      <div className="absolute bg-[rgba(254,215,170,0.2)] blur-[20px] right-[-40px] rounded-[9999px] size-[128px] top-[-40px]" data-name="Overlay+Blur" />
      <Margin4 />
      <Margin5 />
    </div>
  );
}

function BackgroundBorderShadow2() {
  return (
    <div className="bg-[#e2e8f0] content-stretch flex items-center justify-center p-[2px] relative rounded-[9999px] shrink-0 size-[36px]" data-name="Background+Border+Shadow">
      <div aria-hidden="true" className="absolute border-2 border-solid border-white inset-0 pointer-events-none rounded-[9999px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)]" />
      <div className="flex flex-col font-['DM_Sans:Bold',sans-serif] font-bold h-[15px] justify-center leading-[0] relative shrink-0 text-[#475569] text-[10px] text-center w-[12.13px]" style={{ fontVariationSettings: "\'opsz\' 14" }}>
        <p className="leading-[15px] whitespace-pre-wrap">KL</p>
      </div>
    </div>
  );
}

function BackgroundBorderShadowOverlayBlur1() {
  return (
    <div className="absolute backdrop-blur-[2px] bg-[#f1f5f9] content-stretch flex items-center justify-center left-[-12px] p-[2px] rounded-[9999px] size-[36px] top-0" data-name="Background+Border+Shadow+OverlayBlur">
      <div aria-hidden="true" className="absolute border-2 border-solid border-white inset-0 pointer-events-none rounded-[9999px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)]" />
      <div className="flex flex-col font-['DM_Sans:Medium',sans-serif] font-medium h-[15px] justify-center leading-[0] relative shrink-0 text-[#64748b] text-[10px] text-center w-[14.64px]" style={{ fontVariationSettings: "\'opsz\' 14" }}>
        <p className="leading-[15px] whitespace-pre-wrap">+12</p>
      </div>
    </div>
  );
}

function Margin6() {
  return (
    <div className="h-[36px] relative shrink-0 w-[24px]" data-name="Margin">
      <BackgroundBorderShadowOverlayBlur1 />
    </div>
  );
}

function Container25() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative">
        <BackgroundBorderShadow2 />
        <Margin6 />
      </div>
    </div>
  );
}

function Button4() {
  return (
    <div className="backdrop-blur-[2px] bg-[rgba(74,222,128,0.2)] relative rounded-[8px] shrink-0" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[rgba(187,247,208,0.3)] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center justify-center px-[17px] py-[9px] relative">
        <div className="flex flex-col font-['DM_Sans:Bold',sans-serif] font-bold h-[20px] justify-center leading-[0] relative shrink-0 text-[#166534] text-[14px] text-center w-[28.59px]" style={{ fontVariationSettings: "\'opsz\' 14" }}>
          <p className="leading-[20px] whitespace-pre-wrap">Join</p>
        </div>
      </div>
    </div>
  );
}

function HorizontalBorder1() {
  return (
    <div className="absolute bottom-[16px] content-stretch flex items-center justify-between left-[16px] pt-[17px] right-[16px]" data-name="HorizontalBorder">
      <div aria-hidden="true" className="absolute border-[rgba(226,232,240,0.5)] border-solid border-t inset-0 pointer-events-none" />
      <Container25 />
      <Button4 />
    </div>
  );
}

function OverlayBorderShadowOverlayBlur3() {
  return (
    <div className="absolute backdrop-blur-[6px] bg-[rgba(255,255,255,0.6)] right-[13px] rounded-[8px] top-[13px]" data-name="Overlay+Border+Shadow+OverlayBlur">
      <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.2)] border-solid inset-0 pointer-events-none rounded-[8px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start px-[13px] py-[7px] relative">
        <div className="flex flex-col font-['DM_Sans:Bold',sans-serif] font-bold h-[16px] justify-center leading-[0] relative shrink-0 text-[#15803d] text-[12px] w-[93.7px]" style={{ fontVariationSettings: "\'opsz\' 14" }}>
          <p className="leading-[16px] whitespace-pre-wrap">Tomorrow, 9 AM</p>
        </div>
      </div>
    </div>
  );
}

function Container27() {
  return (
    <div className="relative shrink-0 size-[59.906px]" data-name="Container">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 59.9062 59.9062">
        <g id="Container" opacity="0.6">
          <path d={svgPaths.p32e48300} fill="var(--fill-0, #86EFAC)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Container26() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative w-[244px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <Container27 />
      </div>
    </div>
  );
}

function BackgroundBorder1() {
  return (
    <div className="h-[144px] relative rounded-[24px] shrink-0 w-full" data-name="Background+Border" style={{ backgroundImage: "linear-gradient(149.657deg, rgba(220, 252, 231, 0.5) 0%, rgba(236, 253, 245, 0.5) 100%)" }}>
      <div className="content-stretch flex flex-col items-start justify-center overflow-clip p-px relative rounded-[inherit] size-full">
        <OverlayBorderShadowOverlayBlur3 />
        <Container26 />
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.3)] border-solid inset-0 pointer-events-none rounded-[24px]" />
    </div>
  );
}

function Margin7() {
  return (
    <div className="absolute content-stretch flex flex-col h-[160px] items-start left-[16px] pb-[16px] right-[16px] top-[16px]" data-name="Margin">
      <BackgroundBorder1 />
    </div>
  );
}

function Heading5() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 4">
      <div className="flex flex-col font-['DM_Sans:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#1e293b] text-[18px] w-full" style={{ fontVariationSettings: "\'opsz\' 14" }}>
        <p className="leading-[28px] whitespace-pre-wrap">Community Garden</p>
      </div>
    </div>
  );
}

function Container29() {
  return (
    <div className="content-stretch flex flex-col items-start overflow-clip relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['DM_Sans:Regular',sans-serif] font-normal justify-center leading-[20px] relative shrink-0 text-[#475569] text-[14px] w-full whitespace-pre-wrap" style={{ fontVariationSettings: "\'opsz\' 14" }}>
        <p className="mb-0">Relaxing outdoor time. Wheelchair</p>
        <p>accessible paths.</p>
      </div>
    </div>
  );
}

function Container28() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full" data-name="Container">
      <Heading5 />
      <Container29 />
    </div>
  );
}

function Margin8() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[16px] pb-[12px] right-[16px] top-[176px]" data-name="Margin">
      <Container28 />
    </div>
  );
}

function OverlayBorderShadowOverlayBlur2() {
  return (
    <div className="absolute backdrop-blur-[6px] bg-[rgba(255,255,255,0.65)] border border-[rgba(255,255,255,0.6)] border-solid bottom-[24px] left-[320px] overflow-clip rounded-[32px] shadow-[0px_8px_32px_0px_rgba(31,38,135,0.07)] top-0 w-[280px]" data-name="Overlay+Border+Shadow+OverlayBlur">
      <HorizontalBorder1 />
      <div className="absolute bg-[rgba(187,247,208,0.2)] blur-[20px] right-[-40px] rounded-[9999px] size-[128px] top-[-40px]" data-name="Overlay+Blur" />
      <Margin7 />
      <Margin8 />
    </div>
  );
}

function Container19() {
  return (
    <div className="h-[357px] overflow-clip relative shrink-0 w-full" data-name="Container">
      <OverlayBorderShadowOverlayBlur />
      <OverlayBorderShadowOverlayBlur2 />
    </div>
  );
}

function Section2() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start pt-[8px] relative shrink-0 w-full" data-name="Section">
      <Container17 />
      <Container19 />
    </div>
  );
}

function Heading6() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 3">
      <div className="flex flex-col font-['Lora:Semi_Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#1e293b] text-[18px] w-full">
        <p className="leading-[28px] whitespace-pre-wrap">Peer Support Matches</p>
      </div>
    </div>
  );
}

function BackgroundShadow() {
  return (
    <div className="content-stretch flex items-center justify-center relative rounded-[9999px] shrink-0 size-[56px]" data-name="Background+Shadow" style={{ backgroundImage: "linear-gradient(45deg, rgb(191, 219, 254) 0%, rgb(233, 213, 255) 100%)" }}>
      <div className="flex flex-col font-['DM_Sans:Bold',sans-serif] font-bold h-[28px] justify-center leading-[0] relative shrink-0 text-[#334155] text-[20px] text-center w-[12.09px]" style={{ fontVariationSettings: "\'opsz\' 14" }}>
        <p className="leading-[28px] whitespace-pre-wrap">S</p>
      </div>
      <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_2px_4px_0px_rgba(0,0,0,0.05)]" />
    </div>
  );
}

function Container31() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative">
        <BackgroundShadow />
        <div className="absolute bg-[#22c55e] bottom-0 right-0 rounded-[9999px] size-[16px]" data-name="Background+Border+Shadow">
          <div aria-hidden="true" className="absolute border-2 border-solid border-white inset-0 pointer-events-none rounded-[9999px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)]" />
        </div>
      </div>
    </div>
  );
}

function Heading7() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 4">
      <div className="flex flex-col font-['DM_Sans:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#1e293b] text-[16px] w-full" style={{ fontVariationSettings: "\'opsz\' 14" }}>
        <p className="leading-[24px] whitespace-pre-wrap">Sarah Lim</p>
      </div>
    </div>
  );
}

function Container33() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['DM_Sans:Medium',sans-serif] font-medium justify-center leading-[16px] relative shrink-0 text-[#64748b] text-[12px] w-full whitespace-pre-wrap" style={{ fontVariationSettings: "\'opsz\' 14" }}>
        <p className="mb-0">Breast Cancer Survivor • 2</p>
        <p>years</p>
      </div>
    </div>
  );
}

function OverlayBorder() {
  return (
    <div className="bg-[rgba(241,245,249,0.5)] content-stretch flex flex-col items-start px-[11px] py-[5px] relative rounded-[9999px] self-stretch shrink-0" data-name="Overlay+Border">
      <div aria-hidden="true" className="absolute border border-[rgba(226,232,240,0.5)] border-solid inset-0 pointer-events-none rounded-[9999px]" />
      <div className="flex flex-col font-['DM_Sans:Bold',sans-serif] font-bold h-[15px] justify-center leading-[0] relative shrink-0 text-[#475569] text-[10px] w-[58.13px]" style={{ fontVariationSettings: "\'opsz\' 14" }}>
        <p className="leading-[15px] whitespace-pre-wrap">Art Therapy</p>
      </div>
    </div>
  );
}

function OverlayBorder1() {
  return (
    <div className="bg-[rgba(241,245,249,0.5)] content-stretch flex flex-col items-start px-[11px] py-[5px] relative rounded-[9999px] self-stretch shrink-0" data-name="Overlay+Border">
      <div aria-hidden="true" className="absolute border border-[rgba(226,232,240,0.5)] border-solid inset-0 pointer-events-none rounded-[9999px]" />
      <div className="flex flex-col font-['DM_Sans:Bold',sans-serif] font-bold h-[15px] justify-center leading-[0] relative shrink-0 text-[#475569] text-[10px] w-[23.06px]" style={{ fontVariationSettings: "\'opsz\' 14" }}>
        <p className="leading-[15px] whitespace-pre-wrap">Yoga</p>
      </div>
    </div>
  );
}

function Container34() {
  return (
    <div className="content-stretch flex gap-[6px] items-start pt-[6px] relative shrink-0 w-full" data-name="Container">
      <OverlayBorder />
      <OverlayBorder1 />
    </div>
  );
}

function Container32() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative w-full">
        <Heading7 />
        <Container33 />
        <Container34 />
      </div>
    </div>
  );
}

function Container35() {
  return (
    <div className="relative shrink-0 size-[19.969px]" data-name="Container">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 19.9688 19.9688">
        <g id="Container">
          <path d={svgPaths.p21d7d1c0} fill="var(--fill-0, #38BDF8)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Button5() {
  return (
    <div className="backdrop-blur-[2px] bg-[rgba(56,189,248,0.1)] relative rounded-[9999px] shrink-0 size-[40px]" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[rgba(56,189,248,0.2)] border-solid inset-0 pointer-events-none rounded-[9999px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center p-px relative size-full">
        <Container35 />
      </div>
    </div>
  );
}

function OverlayBorderShadowOverlayBlur4() {
  return (
    <div className="backdrop-blur-[6px] bg-[rgba(255,255,255,0.65)] relative rounded-[24px] shrink-0 w-full" data-name="Overlay+Border+Shadow+OverlayBlur">
      <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.4)] border-solid inset-0 pointer-events-none rounded-[24px] shadow-[0px_8px_32px_0px_rgba(31,38,135,0.07)]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[16px] items-center p-[17px] relative w-full">
          <Container31 />
          <Container32 />
          <Button5 />
        </div>
      </div>
    </div>
  );
}

function BackgroundShadow1() {
  return (
    <div className="content-stretch flex items-center justify-center relative rounded-[9999px] shrink-0 size-[56px]" data-name="Background+Shadow" style={{ backgroundImage: "linear-gradient(45deg, rgb(254, 240, 138) 0%, rgb(254, 215, 170) 100%)" }}>
      <div className="flex flex-col font-['DM_Sans:Bold',sans-serif] font-bold h-[28px] justify-center leading-[0] relative shrink-0 text-[#334155] text-[20px] text-center w-[14.14px]" style={{ fontVariationSettings: "\'opsz\' 14" }}>
        <p className="leading-[28px] whitespace-pre-wrap">D</p>
      </div>
      <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_2px_4px_0px_rgba(0,0,0,0.05)]" />
    </div>
  );
}

function Container36() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative">
        <BackgroundShadow1 />
      </div>
    </div>
  );
}

function Heading8() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 4">
      <div className="flex flex-col font-['DM_Sans:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#1e293b] text-[16px] w-full" style={{ fontVariationSettings: "\'opsz\' 14" }}>
        <p className="leading-[24px] whitespace-pre-wrap">David Tan</p>
      </div>
    </div>
  );
}

function Container38() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['DM_Sans:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#64748b] text-[12px] w-full" style={{ fontVariationSettings: "\'opsz\' 14" }}>
        <p className="leading-[16px] whitespace-pre-wrap">Caregiver • Looking for advice</p>
      </div>
    </div>
  );
}

function OverlayBorder2() {
  return (
    <div className="bg-[rgba(241,245,249,0.5)] content-stretch flex flex-col items-start px-[11px] py-[5px] relative rounded-[9999px] self-stretch shrink-0" data-name="Overlay+Border">
      <div aria-hidden="true" className="absolute border border-[rgba(226,232,240,0.5)] border-solid inset-0 pointer-events-none rounded-[9999px]" />
      <div className="flex flex-col font-['DM_Sans:Bold',sans-serif] font-bold h-[15px] justify-center leading-[0] relative shrink-0 text-[#475569] text-[10px] w-[43.97px]" style={{ fontVariationSettings: "\'opsz\' 14" }}>
        <p className="leading-[15px] whitespace-pre-wrap">Nutrition</p>
      </div>
    </div>
  );
}

function OverlayBorder3() {
  return (
    <div className="bg-[rgba(241,245,249,0.5)] content-stretch flex flex-col items-start px-[11px] py-[5px] relative rounded-[9999px] self-stretch shrink-0" data-name="Overlay+Border">
      <div aria-hidden="true" className="absolute border border-[rgba(226,232,240,0.5)] border-solid inset-0 pointer-events-none rounded-[9999px]" />
      <div className="flex flex-col font-['DM_Sans:Bold',sans-serif] font-bold h-[15px] justify-center leading-[0] relative shrink-0 text-[#475569] text-[10px] w-[38.78px]" style={{ fontVariationSettings: "\'opsz\' 14" }}>
        <p className="leading-[15px] whitespace-pre-wrap">Walking</p>
      </div>
    </div>
  );
}

function Container39() {
  return (
    <div className="content-stretch flex gap-[6px] items-start pt-[6px] relative shrink-0 w-full" data-name="Container">
      <OverlayBorder2 />
      <OverlayBorder3 />
    </div>
  );
}

function Container37() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative w-full">
        <Heading8 />
        <Container38 />
        <Container39 />
      </div>
    </div>
  );
}

function Container40() {
  return (
    <div className="relative shrink-0 size-[19.969px]" data-name="Container">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 19.9688 19.9688">
        <g id="Container">
          <path d={svgPaths.p21d7d1c0} fill="var(--fill-0, #38BDF8)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Button6() {
  return (
    <div className="backdrop-blur-[2px] bg-[rgba(56,189,248,0.1)] relative rounded-[9999px] shrink-0 size-[40px]" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[rgba(56,189,248,0.2)] border-solid inset-0 pointer-events-none rounded-[9999px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center p-px relative size-full">
        <Container40 />
      </div>
    </div>
  );
}

function OverlayBorderShadowOverlayBlur5() {
  return (
    <div className="backdrop-blur-[6px] bg-[rgba(255,255,255,0.65)] relative rounded-[24px] shrink-0 w-full" data-name="Overlay+Border+Shadow+OverlayBlur">
      <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.4)] border-solid inset-0 pointer-events-none rounded-[24px] shadow-[0px_8px_32px_0px_rgba(31,38,135,0.07)]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[16px] items-center p-[17px] relative w-full">
          <Container36 />
          <Container37 />
          <Button6 />
        </div>
      </div>
    </div>
  );
}

function Container30() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-name="Container">
      <OverlayBorderShadowOverlayBlur4 />
      <OverlayBorderShadowOverlayBlur5 />
    </div>
  );
}

function Section3() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start pt-[8px] relative shrink-0 w-[342px]" data-name="Section">
      <Heading6 />
      <Container30 />
    </div>
  );
}

function Container41() {
  return (
    <div className="h-[16.652px] relative shrink-0 w-[18.403px]" data-name="Container">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18.4029 16.6523">
        <g id="Container">
          <path d={svgPaths.p3afef100} fill="var(--fill-0, #94A3B8)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Container42() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['DM_Sans:Medium',sans-serif] font-medium h-[15px] justify-center leading-[0] relative shrink-0 text-[#94a3b8] text-[10px] w-[27.75px]" style={{ fontVariationSettings: "\'opsz\' 14" }}>
        <p className="leading-[15px] whitespace-pre-wrap">Home</p>
      </div>
    </div>
  );
}

function Link1() {
  return (
    <div className="absolute bottom-[12px] content-stretch flex flex-col gap-[4px] items-center left-[24px]" data-name="Link">
      <Container41 />
      <Container42 />
    </div>
  );
}

function Shadow1() {
  return (
    <div className="h-[13.969px] relative shrink-0 w-[22.031px]" data-name="Shadow">
      <div className="absolute inset-[0_-4.54%_-14.32%_-4.54%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24.0312 15.9688">
          <g filter="url(#filter0_d_1_1998)" id="Shadow">
            <path d={svgPaths.p14633d00} fill="var(--fill-0, #4ADE80)" id="Icon" />
          </g>
          <defs>
            <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="15.9688" id="filter0_d_1_1998" width="24.0312" x="0" y="0">
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
              <feOffset dy="1" />
              <feGaussianBlur stdDeviation="0.5" />
              <feComposite in2="hardAlpha" operator="out" />
              <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.05 0" />
              <feBlend in2="BackgroundImageFix" mode="normal" result="effect1_dropShadow_1_1998" />
              <feBlend in="SourceGraphic" in2="effect1_dropShadow_1_1998" mode="normal" result="shape" />
            </filter>
          </defs>
        </svg>
      </div>
    </div>
  );
}

function Container43() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['DM_Sans:Medium',sans-serif] font-medium h-[15px] justify-center leading-[0] relative shrink-0 text-[#4ade80] text-[10px] w-[55.38px]" style={{ fontVariationSettings: "\'opsz\' 14" }}>
        <p className="leading-[15px] whitespace-pre-wrap">Community</p>
      </div>
    </div>
  );
}

function Link2() {
  return (
    <div className="absolute bottom-[12px] content-stretch flex flex-col gap-[4px] items-center left-[89.09px]" data-name="Link">
      <Shadow1 />
      <Container43 />
    </div>
  );
}

function Container44() {
  return (
    <div className="h-[20.016px] relative shrink-0 w-[18px]" data-name="Container">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 20.0156">
        <g id="Container">
          <path d={svgPaths.p31fef600} fill="var(--fill-0, #94A3B8)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Container45() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['DM_Sans:Medium',sans-serif] font-medium h-[15px] justify-center leading-[0] relative shrink-0 text-[#94a3b8] text-[10px] w-[16.59px]" style={{ fontVariationSettings: "\'opsz\' 14" }}>
        <p className="leading-[15px] whitespace-pre-wrap">Log</p>
      </div>
    </div>
  );
}

function Link3() {
  return (
    <div className="absolute bottom-[12px] content-stretch flex flex-col gap-[4px] items-center left-[275.16px]" data-name="Link">
      <Container44 />
      <Container45 />
    </div>
  );
}

function Container46() {
  return (
    <div className="relative shrink-0 size-[16.031px]" data-name="Container">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16.0312 16.0312">
        <g id="Container">
          <path d={svgPaths.p236d9400} fill="var(--fill-0, #94A3B8)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Container47() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['DM_Sans:Medium',sans-serif] font-medium h-[15px] justify-center leading-[0] relative shrink-0 text-[#94a3b8] text-[10px] w-[29.5px]" style={{ fontVariationSettings: "\'opsz\' 14" }}>
        <p className="leading-[15px] whitespace-pre-wrap">Profile</p>
      </div>
    </div>
  );
}

function Link4() {
  return (
    <div className="absolute bottom-[12px] content-stretch flex flex-col gap-[4px] items-center left-[336.5px]" data-name="Link">
      <Container46 />
      <Container47 />
    </div>
  );
}

function Container48() {
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

function BackgroundBorderOverlayBlur() {
  return (
    <div className="backdrop-blur-[2px] bg-gradient-to-r content-stretch flex from-[#4ade80] items-center justify-center p-[4px] relative rounded-[9999px] shrink-0 size-[56px] to-[#34d399]" data-name="Background+Border+OverlayBlur">
      <div aria-hidden="true" className="absolute border-4 border-[rgba(255,255,255,0.8)] border-solid inset-0 pointer-events-none rounded-[9999px]" />
      <div className="-translate-x-1/2 absolute bg-[rgba(255,255,255,0)] left-1/2 rounded-[9999px] shadow-[0px_10px_15px_-3px_rgba(134,239,172,0.5),0px_4px_6px_-4px_rgba(134,239,172,0.5)] size-[56px] top-0" data-name="Overlay+Shadow" />
      <Container48 />
    </div>
  );
}

function Link5() {
  return (
    <div className="absolute bottom-[32px] content-stretch flex flex-col items-center left-[181.81px]" data-name="Link">
      <BackgroundBorderOverlayBlur />
    </div>
  );
}

function Nav() {
  return (
    <div className="absolute backdrop-blur-[12px] bg-[rgba(255,255,255,0.8)] bottom-0 h-[81px] left-0 right-0" data-name="Nav">
      <div aria-hidden="true" className="absolute border-[rgba(255,255,255,0.5)] border-solid border-t inset-0 pointer-events-none shadow-[0px_-5px_20px_0px_rgba(0,0,0,0.05)]" />
      <Link1 />
      <Link2 />
      <Link3 />
      <Link4 />
      <Link5 />
    </div>
  );
}

export default function CommunityAacSupportCenter() {
  return (
    <div className="bg-[#f8fafc] content-stretch flex flex-col gap-[24px] items-center pb-[192.5px] relative size-full" data-name="Community & AAC Support Center">
      <div className="absolute bg-[rgba(187,247,208,0.4)] blur-[40px] left-[-100px] rounded-[192px] size-[384px] top-[-100px]" data-name="Overlay+Blur" />
      <Header />
      <Section />
      <div className="absolute bg-[rgba(251,207,232,0.3)] blur-[40px] inset-[30%_14.36%_55.66%_20%] rounded-[128px]" data-name="Overlay+Blur" />
      <Section1 />
      <Section2 />
      <div className="absolute bg-[rgba(191,219,254,0.4)] blur-[40px] bottom-[20%] right-[-50px] rounded-[160px] top-[62.07%] w-[320px]" data-name="Overlay+Blur" />
      <Section3 />
      <Nav />
      <div className="absolute backdrop-blur-[12px] bg-[rgba(255,255,255,0.8)] bottom-0 h-[24px] left-0 right-0" data-name="Overlay+OverlayBlur" />
    </div>
  );
}