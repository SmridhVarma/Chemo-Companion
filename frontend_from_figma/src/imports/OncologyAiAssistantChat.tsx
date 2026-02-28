import svgPaths from "./svg-40ss00by7s";
import imgUserProfile from "figma:asset/20295dcd50c3e01b008134bb777210e421b00b22.png";
import imgFriendlyRobotAssistant from "figma:asset/5bac8e36004c4757138daffd09b7bc38d81e7ee7.png";

function Container1() {
  return (
    <div className="h-[12px] relative shrink-0 w-[18px]" data-name="Container">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 12">
        <g id="Container">
          <path d={svgPaths.p2bce57c0} fill="var(--fill-0, #64748B)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Button() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center p-[8px] relative rounded-[9999px] shrink-0" data-name="Button">
      <Container1 />
    </div>
  );
}

function Heading() {
  return (
    <div className="content-stretch flex flex-col items-start mb-[-0.5px] relative shrink-0 w-full" data-name="Heading 1">
      <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold h-[23px] justify-center leading-[0] not-italic relative shrink-0 text-[#1e293b] text-[18px] w-[110.84px]">
        <p className="leading-[22.5px] whitespace-pre-wrap">OncoCare AI</p>
      </div>
    </div>
  );
}

function Container3() {
  return (
    <div className="content-stretch flex gap-[4px] items-center mb-[-0.5px] relative shrink-0 w-full" data-name="Container">
      <div className="bg-[#10b981] rounded-[9999px] shrink-0 size-[8px]" data-name="Background" />
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium h-[16px] justify-center leading-[0] not-italic relative shrink-0 text-[#10b981] text-[12px] w-[36.73px]">
        <p className="leading-[16px] whitespace-pre-wrap">Online</p>
      </div>
    </div>
  );
}

function Container2() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[12px] pb-[0.5px] top-[-1px]" data-name="Container">
      <Heading />
      <Container3 />
    </div>
  );
}

function Margin() {
  return (
    <div className="h-[38.5px] relative shrink-0 w-[122.84px]" data-name="Margin">
      <Container2 />
    </div>
  );
}

function Container() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center relative">
        <Button />
        <Margin />
      </div>
    </div>
  );
}

function Container5() {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="Container">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
        <g id="Container">
          <path d={svgPaths.p7281a80} fill="var(--fill-0, #64748B)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Button1() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center p-[8px] relative rounded-[9999px] shrink-0" data-name="Button">
      <Container5 />
    </div>
  );
}

function UserProfile() {
  return (
    <div className="pointer-events-none relative rounded-[9999px] shrink-0 size-[36px]" data-name="User Profile">
      <div className="absolute inset-0 overflow-hidden rounded-[9999px]">
        <img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgUserProfile} />
      </div>
      <div aria-hidden="true" className="absolute border-2 border-[rgba(255,255,255,0.7)] border-solid inset-0 rounded-[9999px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)]" />
    </div>
  );
}

function Margin1() {
  return (
    <div className="content-stretch flex flex-col items-start pl-[8px] relative shrink-0" data-name="Margin">
      <UserProfile />
    </div>
  );
}

function Container4() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center relative">
        <Button1 />
        <Margin1 />
      </div>
    </div>
  );
}

function Header() {
  return (
    <div className="backdrop-blur-[6px] bg-[rgba(255,255,255,0.65)] relative rounded-[32px] shrink-0 w-full" data-name="Header">
      <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.5)] border-solid inset-0 pointer-events-none rounded-[32px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between px-[17px] py-[13px] relative w-full">
          <Container />
          <Container4 />
        </div>
      </div>
    </div>
  );
}

function HeaderMargin() {
  return (
    <div className="relative shrink-0 w-full z-[2]" data-name="Header:margin">
      <div className="content-stretch flex flex-col items-start p-[8px] relative w-full">
        <Header />
      </div>
    </div>
  );
}

function FriendlyRobotAssistant() {
  return (
    <div className="max-w-[128px] relative shadow-[0px_8px_5px_0px_rgba(0,0,0,0.08),0px_20px_13px_0px_rgba(0,0,0,0.03)] shrink-0 size-[112px]" data-name="Friendly Robot Assistant">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgFriendlyRobotAssistant} />
      </div>
    </div>
  );
}

function Container8() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 size-[128px]" data-name="Container">
      <div className="absolute bg-[rgba(96,165,250,0.2)] blur-[20px] inset-0 rounded-[9999px]" data-name="Overlay+Blur" />
      <FriendlyRobotAssistant />
    </div>
  );
}

function Container9() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium h-[20px] justify-center leading-[0] not-italic relative shrink-0 text-[#475569] text-[14px] text-center w-[234.55px]">
        <p className="leading-[20px] whitespace-pre-wrap">{`Hello, I'm your Oncology Assistant.`}</p>
      </div>
    </div>
  );
}

function Container10() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal h-[32px] justify-center leading-[16px] not-italic relative shrink-0 text-[#64748b] text-[12px] text-center w-[287.25px] whitespace-pre-wrap">
        <p className="mb-0">{`I'm here to help with symptom tracking, resources,`}</p>
        <p>and support.</p>
      </div>
    </div>
  );
}

function OverlayOverlayBlur() {
  return (
    <div className="backdrop-blur-[6px] bg-[rgba(255,255,255,0.4)] content-stretch flex flex-col gap-[4px] items-start max-w-[320px] px-[16px] py-[8px] relative rounded-[24px] shrink-0" data-name="Overlay+OverlayBlur">
      <div className="absolute bg-[rgba(255,255,255,0)] inset-[0_0.25px_0_0] rounded-[24px] shadow-[0px_4px_6px_-1px_rgba(0,0,0,0.05),0px_2px_4px_-1px_rgba(0,0,0,0.03)]" data-name="Overlay+Shadow" />
      <Container9 />
      <Container10 />
    </div>
  );
}

function Margin2() {
  return (
    <div className="content-stretch flex flex-col items-start max-w-[320px] pt-[16px] relative shrink-0" data-name="Margin">
      <OverlayOverlayBlur />
    </div>
  );
}

function Container7() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center py-[24px] relative shrink-0 w-full" data-name="Container">
      <Container8 />
      <Margin2 />
    </div>
  );
}

function OverlayBorderOverlayBlur() {
  return (
    <div className="backdrop-blur-[2px] bg-[rgba(255,255,255,0.4)] content-stretch flex flex-col items-start px-[13px] py-[5px] relative rounded-[9999px] self-stretch shrink-0" data-name="Overlay+Border+OverlayBlur">
      <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.2)] border-solid inset-0 pointer-events-none rounded-[9999px]" />
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal h-[16px] justify-center leading-[0] not-italic relative shrink-0 text-[#64748b] text-[12px] w-[94.11px]">
        <p className="leading-[16px] whitespace-pre-wrap">Today, 10:23 AM</p>
      </div>
    </div>
  );
}

function Container11() {
  return (
    <div className="content-stretch flex items-start justify-center relative shrink-0 w-full" data-name="Container">
      <OverlayBorderOverlayBlur />
    </div>
  );
}

function Container13() {
  return (
    <div className="h-[11.083px] relative shrink-0 w-[12.833px]" data-name="Container">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12.8333 11.0833">
        <g id="Container">
          <path d={svgPaths.p2bfc5c00} fill="var(--fill-0, white)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Background() {
  return (
    <div className="content-stretch flex items-center justify-center relative rounded-[9999px] shrink-0 size-[32px]" data-name="Background" style={{ backgroundImage: "linear-gradient(45deg, rgb(96, 165, 250) 0%, rgb(103, 232, 249) 100%)" }}>
      <div className="absolute bg-[rgba(255,255,255,0)] bottom-0 left-0 rounded-[9999px] shadow-[0px_4px_6px_-1px_rgba(0,0,0,0.1),0px_2px_4px_-2px_rgba(0,0,0,0.1)] size-[32px]" data-name="Overlay+Shadow" />
      <Container13 />
    </div>
  );
}

function OverlayBorderShadowOverlayBlur() {
  return (
    <div className="backdrop-blur-[4px] bg-[rgba(219,234,254,0.5)] content-stretch flex flex-col items-start max-w-[289px] pl-[17px] pr-[35.27px] py-[17px] relative rounded-br-[32px] rounded-tl-[32px] rounded-tr-[32px] shrink-0" data-name="Overlay+Border+Shadow+OverlayBlur">
      <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.4)] border-solid inset-0 pointer-events-none rounded-br-[32px] rounded-tl-[32px] rounded-tr-[32px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)]" />
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal h-[91px] justify-center leading-[22.75px] not-italic relative shrink-0 text-[#334155] text-[14px] w-[236.73px] whitespace-pre-wrap">
        <p className="mb-0">Good morning, Sarah. How are you</p>
        <p className="mb-0">{`feeling after yesterday's treatment?`}</p>
        <p className="mb-0">{`Please let me know if you're`}</p>
        <p>experiencing any nausea or fatigue.</p>
      </div>
    </div>
  );
}

function Container12() {
  return (
    <div className="content-stretch flex gap-[12px] items-end relative shrink-0 w-full" data-name="Container">
      <Background />
      <OverlayBorderShadowOverlayBlur />
    </div>
  );
}

function Container15() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-end pb-[0.625px] pl-[16.02px] relative">
        <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal h-[46px] justify-center leading-[22.75px] not-italic relative shrink-0 text-[#831843] text-[14px] text-right w-[238.98px] whitespace-pre-wrap">
          <p className="mb-0">{`I'm feeling a bit tired today, mostly.`}</p>
          <p>And my appetite is lower than usual.</p>
        </div>
      </div>
    </div>
  );
}

function OverlayBorderShadowOverlayBlur1() {
  return (
    <div className="backdrop-blur-[4px] bg-[rgba(252,231,243,0.6)] content-stretch flex flex-col items-start max-w-[289px] pb-[17px] pt-[15.875px] px-[17px] relative rounded-bl-[32px] rounded-tl-[32px] rounded-tr-[32px] shrink-0" data-name="Overlay+Border+Shadow+OverlayBlur">
      <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.4)] border-solid inset-0 pointer-events-none rounded-bl-[32px] rounded-tl-[32px] rounded-tr-[32px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)]" />
      <Container15 />
    </div>
  );
}

function UserAvatar() {
  return (
    <div className="max-w-[340px] pointer-events-none relative rounded-[9999px] shrink-0 size-[32px]" data-name="User Avatar">
      <div className="absolute inset-0 overflow-hidden rounded-[9999px]">
        <img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgUserProfile} />
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.5)] border-solid inset-0 rounded-[9999px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)]" />
    </div>
  );
}

function Container14() {
  return (
    <div className="content-stretch flex gap-[12px] items-end justify-end relative shrink-0 w-full" data-name="Container">
      <OverlayBorderShadowOverlayBlur1 />
      <UserAvatar />
    </div>
  );
}

function Container17() {
  return (
    <div className="h-[11.083px] relative shrink-0 w-[12.833px]" data-name="Container">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12.8333 11.0833">
        <g id="Container">
          <path d={svgPaths.p2bfc5c00} fill="var(--fill-0, white)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Background1() {
  return (
    <div className="content-stretch flex items-center justify-center relative rounded-[9999px] shrink-0 size-[32px]" data-name="Background" style={{ backgroundImage: "linear-gradient(45deg, rgb(96, 165, 250) 0%, rgb(103, 232, 249) 100%)" }}>
      <div className="absolute bg-[rgba(255,255,255,0)] bottom-0 left-0 rounded-[9999px] shadow-[0px_4px_6px_-1px_rgba(0,0,0,0.1),0px_2px_4px_-2px_rgba(0,0,0,0.1)] size-[32px]" data-name="Overlay+Shadow" />
      <Container17 />
    </div>
  );
}

function Container18() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative w-full">
        <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold h-[15px] justify-center leading-[0] not-italic relative shrink-0 text-[#94a3b8] text-[10px] tracking-[0.5px] uppercase w-[121.91px]">
          <p className="leading-[15px] whitespace-pre-wrap">Medical References</p>
        </div>
      </div>
    </div>
  );
}

function Background2() {
  return (
    <div className="h-[21.333px] relative shrink-0 w-[24.833px]" data-name="Background">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24.8333 21.3333">
        <g id="Background">
          <rect fill="var(--fill-0, #DBEAFE)" height="21.3333" rx="8" width="24.8333" />
          <path d={svgPaths.p2165f400} fill="var(--fill-0, #2563EB)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Container20() {
  return (
    <div className="content-stretch flex flex-col items-start overflow-clip relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#334155] text-[12px] w-full">
        <p className="leading-[16px] whitespace-pre-wrap">Managing Chemotherapy S…</p>
      </div>
    </div>
  );
}

function Container21() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#64748b] text-[10px] w-full">
        <p className="leading-[15px] whitespace-pre-wrap">National Cancer Institute</p>
      </div>
    </div>
  );
}

function Container19() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative w-full">
        <Container20 />
        <Container21 />
      </div>
    </div>
  );
}

function Container22() {
  return (
    <div className="h-[7px] relative shrink-0 w-[4.317px]" data-name="Container">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4.31667 7">
        <g id="Container">
          <path d={svgPaths.p35022f90} fill="var(--fill-0, #94A3B8)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Link() {
  return (
    <div className="bg-[rgba(255,255,255,0.4)] relative rounded-[24px] shrink-0 w-full" data-name="Link">
      <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.3)] border-solid inset-0 pointer-events-none rounded-[24px]" />
      <div className="flex flex-row items-center size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[12px] items-center p-[11px] relative w-full">
          <Background2 />
          <Container19 />
          <Container22 />
        </div>
      </div>
    </div>
  );
}

function HorizontalBorder() {
  return (
    <div className="relative shrink-0" data-name="HorizontalBorder">
      <div aria-hidden="true" className="absolute border-[rgba(191,219,254,0.5)] border-solid border-t inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[8px] items-start pt-[13px] relative">
        <Container18 />
        <Link />
      </div>
    </div>
  );
}

function OverlayBorderShadowOverlayBlur2() {
  return (
    <div className="backdrop-blur-[4px] bg-[rgba(219,234,254,0.5)] content-stretch flex flex-col gap-[12.875px] items-start max-w-[289px] pb-[17px] pt-[16.125px] px-[17px] relative rounded-br-[32px] rounded-tl-[32px] rounded-tr-[32px] shrink-0" data-name="Overlay+Border+Shadow+OverlayBlur">
      <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.4)] border-solid inset-0 pointer-events-none rounded-br-[32px] rounded-tl-[32px] rounded-tr-[32px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)]" />
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal h-[91px] justify-center leading-[22.75px] not-italic relative shrink-0 text-[#334155] text-[14px] w-[241.69px] whitespace-pre-wrap">
        <p className="mb-0">{`It's completely normal to feel fatigue`}</p>
        <p className="mb-0">post-treatment. For the low appetite,</p>
        <p className="mb-0">try eating smaller, more frequent</p>
        <p>meals.</p>
      </div>
      <HorizontalBorder />
    </div>
  );
}

function Container16() {
  return (
    <div className="content-stretch flex gap-[12px] items-end relative shrink-0 w-full" data-name="Container">
      <Background1 />
      <OverlayBorderShadowOverlayBlur2 />
    </div>
  );
}

function Container24() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-end pb-[0.75px] relative">
        <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal h-[23px] justify-center leading-[0] not-italic relative shrink-0 text-[#831843] text-[14px] text-right w-[254.16px]">
          <p className="leading-[22.75px] whitespace-pre-wrap">Is there anything specific I should eat?</p>
        </div>
      </div>
    </div>
  );
}

function OverlayBorderShadowOverlayBlur3() {
  return (
    <div className="backdrop-blur-[4px] bg-[rgba(252,231,243,0.6)] content-stretch flex flex-col items-start max-w-[289px] pb-[17px] pt-[16px] px-[17px] relative rounded-bl-[32px] rounded-tl-[32px] rounded-tr-[32px] shrink-0" data-name="Overlay+Border+Shadow+OverlayBlur">
      <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.4)] border-solid inset-0 pointer-events-none rounded-bl-[32px] rounded-tl-[32px] rounded-tr-[32px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)]" />
      <Container24 />
    </div>
  );
}

function UserAvatar1() {
  return (
    <div className="max-w-[340px] pointer-events-none relative rounded-[9999px] shrink-0 size-[32px]" data-name="User Avatar">
      <div className="absolute inset-0 overflow-hidden rounded-[9999px]">
        <img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgUserProfile} />
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.5)] border-solid inset-0 rounded-[9999px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)]" />
    </div>
  );
}

function Container23() {
  return (
    <div className="content-stretch flex gap-[12px] items-end justify-end relative shrink-0 w-full" data-name="Container">
      <OverlayBorderShadowOverlayBlur3 />
      <UserAvatar1 />
    </div>
  );
}

function Container26() {
  return (
    <div className="h-[11.083px] relative shrink-0 w-[12.833px]" data-name="Container">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12.8333 11.0833">
        <g id="Container">
          <path d={svgPaths.p2bfc5c00} fill="var(--fill-0, white)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Background3() {
  return (
    <div className="content-stretch flex items-center justify-center relative rounded-[9999px] shrink-0 size-[32px]" data-name="Background" style={{ backgroundImage: "linear-gradient(45deg, rgb(96, 165, 250) 0%, rgb(103, 232, 249) 100%)" }}>
      <div className="absolute bg-[rgba(255,255,255,0)] bottom-0 left-0 rounded-[9999px] shadow-[0px_4px_6px_-1px_rgba(0,0,0,0.1),0px_2px_4px_-2px_rgba(0,0,0,0.1)] size-[32px]" data-name="Overlay+Shadow" />
      <Container26 />
    </div>
  );
}

function OverlayBorderShadowOverlayBlur4() {
  return (
    <div className="backdrop-blur-[4px] bg-[rgba(219,234,254,0.5)] content-stretch flex gap-[6px] items-center px-[17px] py-[13px] relative rounded-br-[32px] rounded-tl-[32px] rounded-tr-[32px] shrink-0" data-name="Overlay+Border+Shadow+OverlayBlur">
      <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.4)] border-solid inset-0 pointer-events-none rounded-br-[32px] rounded-tl-[32px] rounded-tr-[32px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)]" />
      <div className="bg-[rgba(96,165,250,0.7)] rounded-[9999px] shrink-0 size-[6px]" data-name="Overlay" />
      <div className="bg-[rgba(96,165,250,0.7)] rounded-[9999px] shrink-0 size-[6px]" data-name="Overlay" />
      <div className="bg-[rgba(96,165,250,0.7)] rounded-[9999px] shrink-0 size-[6px]" data-name="Overlay" />
    </div>
  );
}

function Container25() {
  return (
    <div className="content-stretch flex gap-[12px] items-end relative shrink-0 w-full" data-name="Container">
      <Background3 />
      <OverlayBorderShadowOverlayBlur4 />
    </div>
  );
}

function Container6() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[24px] inset-[1px_1px_-177.75px_1px] items-start pb-[96px] pt-[16px] px-[16px]" data-name="Container">
      <Container7 />
      <Container11 />
      <Container12 />
      <Container14 />
      <Container16 />
      <Container23 />
      <Container25 />
    </div>
  );
}

function Button2() {
  return (
    <div className="absolute backdrop-blur-[2px] bg-[rgba(252,231,243,0.5)] content-stretch flex flex-col items-center justify-center left-0 px-[17px] py-[9px] rounded-[9999px] top-0" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[rgba(251,207,232,0.5)] border-solid inset-0 pointer-events-none rounded-[9999px]" />
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium h-[16px] justify-center leading-[0] not-italic relative shrink-0 text-[#be185d] text-[12px] text-center w-[84.44px]">
        <p className="leading-[16px] whitespace-pre-wrap">Dietary Advice</p>
      </div>
    </div>
  );
}

function Button3() {
  return (
    <div className="backdrop-blur-[2px] bg-[rgba(219,234,254,0.5)] content-stretch flex flex-col items-center justify-center px-[17px] py-[9px] relative rounded-[9999px] shrink-0" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[rgba(191,219,254,0.5)] border-solid inset-0 pointer-events-none rounded-[9999px]" />
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium h-[16px] justify-center leading-[0] not-italic relative shrink-0 text-[#1d4ed8] text-[12px] text-center w-[79.28px]">
        <p className="leading-[16px] whitespace-pre-wrap">Symptom Log</p>
      </div>
    </div>
  );
}

function ButtonMargin() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[118.44px] pl-[8px] top-0" data-name="Button:margin">
      <Button3 />
    </div>
  );
}

function Button4() {
  return (
    <div className="backdrop-blur-[2px] bg-[rgba(243,232,255,0.5)] content-stretch flex flex-col items-center justify-center px-[17px] py-[9px] relative rounded-[9999px] shrink-0" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[rgba(233,213,255,0.5)] border-solid inset-0 pointer-events-none rounded-[9999px]" />
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium h-[16px] justify-center leading-[0] not-italic relative shrink-0 text-[#7e22ce] text-[12px] text-center w-[122.06px]">
        <p className="leading-[16px] whitespace-pre-wrap">Connect to Caregiver</p>
      </div>
    </div>
  );
}

function ButtonMargin1() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[239.72px] pl-[8px] top-0" data-name="Button:margin">
      <Button4 />
    </div>
  );
}

function Container27() {
  return (
    <div className="h-[46px] relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid overflow-clip relative rounded-[inherit] size-full">
        <Button2 />
        <ButtonMargin />
        <ButtonMargin1 />
      </div>
    </div>
  );
}

function Container29() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Container">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Container">
          <path d={svgPaths.p2d8e4cc0} fill="var(--fill-0, #64748B)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Button5() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center p-[12px] relative shrink-0" data-name="Button">
      <Container29 />
    </div>
  );
}

function Container30() {
  return (
    <div className="content-stretch flex flex-col items-start overflow-clip relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#64748b] text-[14px] w-full">
        <p className="leading-[normal] whitespace-pre-wrap">Type a message...</p>
      </div>
    </div>
  );
}

function Input() {
  return (
    <div className="flex-[1_0_0] h-[40px] min-h-px min-w-px relative" data-name="Input">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start px-[12px] py-[11.5px] relative size-full">
          <Container30 />
        </div>
      </div>
    </div>
  );
}

function Container31() {
  return (
    <div className="h-[19px] relative shrink-0 w-[14px]" data-name="Container">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 19">
        <g id="Container">
          <path d={svgPaths.p39e29d00} fill="var(--fill-0, #94A3B8)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Button6() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center relative shrink-0" data-name="Button">
      <Container31 />
    </div>
  );
}

function ButtonMargin2() {
  return (
    <div className="relative shrink-0" data-name="Button:margin">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pl-[8px] relative">
        <Button6 />
      </div>
    </div>
  );
}

function OverlayBorderShadow() {
  return (
    <div className="bg-[rgba(255,255,255,0.5)] flex-[1_0_0] min-h-px min-w-px relative rounded-[32px]" data-name="Overlay+Border+Shadow">
      <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.6)] border-solid inset-0 pointer-events-none rounded-[32px]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center px-[17px] py-[9px] relative w-full">
          <Input />
          <ButtonMargin2 />
        </div>
      </div>
      <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_2px_4px_0px_rgba(0,0,0,0.05)]" />
    </div>
  );
}

function Container32() {
  return (
    <div className="h-[16px] relative shrink-0 w-[19px]" data-name="Container">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 19 16">
        <g id="Container">
          <path d={svgPaths.pb36e280} fill="var(--fill-0, white)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Button7() {
  return (
    <div className="backdrop-blur-[2px] bg-[#ec4899] content-stretch flex items-center justify-center p-[12px] relative rounded-[9999px] shrink-0" data-name="Button">
      <div className="absolute bg-[rgba(255,255,255,0)] inset-[0_-0.02px_0_0] rounded-[9999px] shadow-[0px_10px_15px_-3px_rgba(236,72,153,0.3),0px_4px_6px_-4px_rgba(236,72,153,0.3)]" data-name="Button:shadow" />
      <Container32 />
    </div>
  );
}

function Container28() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[8px] items-end relative w-full">
        <Button5 />
        <OverlayBorderShadow />
        <Button7 />
      </div>
    </div>
  );
}

function OverlayHorizontalBorderOverlayBlur() {
  return (
    <div className="absolute backdrop-blur-[12px] bg-[rgba(255,255,255,0.3)] content-stretch flex flex-col gap-[4px] items-start left-px pb-[16px] pt-[17px] px-[16px] right-px top-[652px]" data-name="Overlay+HorizontalBorder+OverlayBlur">
      <div aria-hidden="true" className="absolute border-[rgba(255,255,255,0.4)] border-solid border-t inset-0 pointer-events-none" />
      <Container27 />
      <Container28 />
    </div>
  );
}

function Container33() {
  return (
    <div className="h-[14.25px] relative shrink-0 w-[16.5px]" data-name="Container">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16.5 14.25">
        <g id="Container">
          <path d={svgPaths.p10d9fd00} fill="var(--fill-0, white)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Container34() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center relative">
        <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold h-[20px] justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-center text-white w-[80.75px]">
          <p className="leading-[20px] whitespace-pre-wrap">Urgent Help</p>
        </div>
      </div>
    </div>
  );
}

function Button8() {
  return (
    <div className="absolute backdrop-blur-[6px] bg-[rgba(244,63,94,0.9)] content-stretch flex gap-[8px] items-center px-[17px] py-[9px] right-[17px] rounded-[9999px] top-[17px]" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[rgba(251,113,133,0.5)] border-solid inset-0 pointer-events-none rounded-[9999px]" />
      <div className="absolute bg-[rgba(255,255,255,0)] inset-[0_0.5px_0_0] rounded-[9999px] shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1),0px_4px_6px_-4px_rgba(0,0,0,0.1)]" data-name="Button:shadow" />
      <Container33 />
      <Container34 />
    </div>
  );
}

function Main() {
  return (
    <div className="backdrop-blur-[6px] bg-[rgba(255,255,255,0.65)] flex-[1_0_0] min-h-px min-w-px relative rounded-[40px] w-full" data-name="Main">
      <div className="overflow-clip relative rounded-[inherit] size-full">
        <Container6 />
        <OverlayHorizontalBorderOverlayBlur />
        <Button8 />
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.4)] border-solid inset-0 pointer-events-none rounded-[40px] shadow-[0px_20px_25px_-5px_rgba(0,0,0,0.1),0px_8px_10px_-6px_rgba(0,0,0,0.1)]" />
    </div>
  );
}

function MainMargin() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative w-full z-[1]" data-name="Main:margin">
      <div className="flex flex-col justify-center size-full">
        <div className="content-stretch flex flex-col items-start justify-center pb-[8px] px-[8px] relative size-full">
          <Main />
        </div>
      </div>
    </div>
  );
}

export default function OncologyAiAssistantChat() {
  return (
    <div className="content-stretch flex flex-col isolate items-start relative size-full" data-name="Oncology AI Assistant Chat" style={{ backgroundImage: "linear-gradient(135deg, rgb(240, 249, 255) 0%, rgb(224, 242, 254) 50%, rgb(252, 231, 243) 100%)" }}>
      <HeaderMargin />
      <MainMargin />
    </div>
  );
}