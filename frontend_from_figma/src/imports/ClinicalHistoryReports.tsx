import svgPaths from "./svg-gmpzcsb5m3";
import imgDoctorGivingHeartToPatientIllustration from "figma:asset/48c5952007b9f42ae4b02bbca6b223513872abfe.png";
import imgImage from "figma:asset/8e6ed3c05be1ecf8834c968880ae7f8427a783c7.png";
import imgImage1 from "figma:asset/2c331f11f05dd340ede2c20e5960b03121f35025.png";

function DoctorGivingHeartToPatientIllustration() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative shadow-[0px_4px_3px_0px_rgba(0,0,0,0.1),0px_10px_8px_0px_rgba(0,0,0,0.04)] w-full" data-name="Doctor giving heart to patient illustration">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgDoctorGivingHeartToPatientIllustration} />
      </div>
    </div>
  );
}

function Container() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center relative shrink-0 size-[160px]" data-name="Container">
      <DoctorGivingHeartToPatientIllustration />
    </div>
  );
}

function Margin() {
  return (
    <div className="h-[176px] relative shrink-0 w-[308px]" data-name="Margin">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center pt-[16px] px-[74px] relative size-full">
        <Container />
      </div>
    </div>
  );
}

function Heading1() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-full" data-name="Heading 2">
      <div className="flex flex-col font-['Nunito:Extra_Bold',sans-serif] h-[32px] justify-center leading-[0] not-italic relative shrink-0 text-[#111827] text-[24px] text-center tracking-[-0.6px] w-[269.86px]">
        <p className="leading-[32px] whitespace-pre-wrap">Weekly Wellness Report</p>
      </div>
    </div>
  );
}

function Shadow() {
  return (
    <div className="h-[68.25px] max-w-[320px] relative shadow-[0px_1px_1px_0px_rgba(0,0,0,0.05)] shrink-0 w-full" data-name="Shadow">
      <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['Inter:Medium',sans-serif] font-medium h-[69px] justify-center leading-[22.75px] left-[calc(50%+0.06px)] not-italic text-[#374151] text-[14px] text-center top-[33.25px] w-[285.2px] whitespace-pre-wrap">
        <p className="mb-0">Here is a summary of your health journey</p>
        <p className="mb-0">over the last 7 days. Your vitals are looking</p>
        <p>stable.</p>
      </div>
    </div>
  );
}

function Container1() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0" data-name="Container">
      <Heading1 />
      <Shadow />
    </div>
  );
}

function Margin1() {
  return (
    <div className="relative shrink-0" data-name="Margin">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[16px] relative">
        <Container1 />
      </div>
    </div>
  );
}

function OverlayBorderShadowOverlayBlur() {
  return (
    <div className="backdrop-blur-[6px] bg-[rgba(255,255,255,0.7)] relative rounded-[24px] shrink-0 w-full" data-name="Overlay+Border+Shadow+OverlayBlur">
      <div className="flex flex-col items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-center p-[25px] relative w-full">
          <div className="absolute bg-[rgba(99,102,241,0.1)] right-[-31px] rounded-bl-[64px] size-[128px] top-[-31px]" data-name="Overlay" />
          <div className="absolute bg-[rgba(244,114,182,0.1)] bottom-px left-[-31px] rounded-tr-[48px] size-[96px]" data-name="Overlay" />
          <Margin />
          <Margin1 />
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.4)] border-solid inset-0 pointer-events-none rounded-[24px] shadow-[0px_8px_32px_0px_rgba(31,38,135,0.1)]" />
    </div>
  );
}

function Container2() {
  return (
    <div className="h-[11.156px] relative shrink-0 w-[6.598px]" data-name="Container">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6.59766 11.1562">
        <g id="Container">
          <path d={svgPaths.pd91e400} fill="var(--fill-0, #6B7280)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Button() {
  return (
    <div className="relative rounded-[9999px] shrink-0" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center justify-center p-[4px] relative">
        <Container2 />
      </div>
    </div>
  );
}

function Container4() {
  return (
    <div className="h-[14.688px] relative shrink-0 w-[13.313px]" data-name="Container">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.3125 14.6875">
        <g id="Container">
          <path d={svgPaths.p3ddb6960} fill="var(--fill-0, #4F46E5)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Margin2() {
  return (
    <div className="content-stretch flex flex-col items-start pl-[8px] relative shrink-0" data-name="Margin">
      <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold h-[20px] justify-center leading-[0] not-italic relative shrink-0 text-[#374151] text-[14px] w-[101.55px]">
        <p className="leading-[20px] whitespace-pre-wrap">Oct 14 - Oct 20</p>
      </div>
    </div>
  );
}

function Container3() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center relative">
        <Container4 />
        <Margin2 />
      </div>
    </div>
  );
}

function Container5() {
  return (
    <div className="h-[11.156px] relative shrink-0 w-[6.598px]" data-name="Container">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6.59766 11.1562">
        <g id="Container">
          <path d={svgPaths.p1fe2da80} fill="var(--fill-0, #6B7280)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Button1() {
  return (
    <div className="relative rounded-[9999px] shrink-0" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center justify-center p-[4px] relative">
        <Container5 />
      </div>
    </div>
  );
}

function OverlayBorderShadowOverlayBlur1() {
  return (
    <div className="backdrop-blur-[2px] bg-[rgba(255,255,255,0.6)] relative rounded-[8px] shrink-0 w-full" data-name="Overlay+Border+Shadow+OverlayBlur">
      <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.4)] border-solid inset-0 pointer-events-none rounded-[8px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between pl-[13px] pr-[13.02px] py-[13px] relative w-full">
          <Button />
          <Container3 />
          <Button1 />
        </div>
      </div>
    </div>
  );
}

function Heading2() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Heading 3">
      <div className="flex flex-col font-['Nunito:Bold',sans-serif] font-bold h-[28px] justify-center leading-[0] relative shrink-0 text-[#1f2937] text-[18px] w-[102.27px]">
        <p className="leading-[28px] whitespace-pre-wrap">Vital Trends</p>
      </div>
    </div>
  );
}

function OverlayBorderOverlayBlur() {
  return (
    <div className="backdrop-blur-[2px] bg-[rgba(224,231,255,0.5)] content-stretch flex flex-col items-start px-[13px] py-[5px] relative rounded-[9999px] shrink-0" data-name="Overlay+Border+OverlayBlur">
      <div aria-hidden="true" className="absolute border border-[rgba(199,210,254,0.3)] border-solid inset-0 pointer-events-none rounded-[9999px]" />
      <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold h-[16px] justify-center leading-[0] not-italic relative shrink-0 text-[#4338ca] text-[12px] w-[53.61px]">
        <p className="leading-[16px] whitespace-pre-wrap">Live Data</p>
      </div>
    </div>
  );
}

function Container6() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="Container">
      <Heading2 />
      <OverlayBorderOverlayBlur />
    </div>
  );
}

function Container10() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold h-[16px] justify-center leading-[0] not-italic relative shrink-0 text-[#4b5563] text-[12px] tracking-[0.6px] uppercase w-[80.42px]">
        <p className="leading-[16px] whitespace-pre-wrap">Heart Rate</p>
      </div>
    </div>
  );
}

function Margin3() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[43.17px] pl-[4px] top-[18px]" data-name="Margin">
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold h-[20px] justify-center leading-[0] not-italic relative shrink-0 text-[#4b5563] text-[14px] w-[30.08px]">
        <p className="leading-[20px] whitespace-pre-wrap">bpm</p>
      </div>
    </div>
  );
}

function Container11() {
  return (
    <div className="h-[40px] relative shrink-0 w-full" data-name="Container">
      <div className="-translate-y-1/2 absolute flex flex-col font-['Inter:Bold',sans-serif] font-bold h-[40px] justify-center leading-[0] left-0 not-italic text-[#111827] text-[36px] top-[20px] w-[43.17px]">
        <p className="leading-[40px] whitespace-pre-wrap">72</p>
      </div>
      <Margin3 />
    </div>
  );
}

function Container9() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0" data-name="Container">
      <Container10 />
      <Container11 />
    </div>
  );
}

function OverlayOverlayBlur() {
  return (
    <div className="h-[33.623px] relative shrink-0 w-[35.977px]" data-name="Overlay+OverlayBlur">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 35.9771 33.623">
        <g data-figma-bg-blur-radius="4" id="Overlay+OverlayBlur">
          <rect fill="var(--fill-0, #DBEAFE)" fillOpacity="0.5" height="33.623" rx="8" width="35.9771" />
          <path d={svgPaths.p3b4b0440} fill="var(--fill-0, #3B82F6)" id="Icon" />
        </g>
        <defs>
          <clipPath id="bgblur_0_1_2070_clip_path" transform="translate(4 4)">
            <rect height="33.623" rx="8" width="35.9771" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Container8() {
  return (
    <div className="relative shrink-0 w-[313px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start justify-between relative w-full">
        <Container9 />
        <OverlayOverlayBlur />
      </div>
    </div>
  );
}

function Image() {
  return (
    <div className="h-[96px] relative shrink-0 w-[313px]" data-name="image">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgImage} />
      </div>
    </div>
  );
}

function Container12() {
  return (
    <div className="h-[96px] relative shrink-0 w-[313px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <Image />
      </div>
    </div>
  );
}

function OverlayBorderShadowOverlayBlur2() {
  return (
    <div className="backdrop-blur-[6px] bg-[rgba(255,255,255,0.7)] relative rounded-[24px] shrink-0 w-full" data-name="Overlay+Border+Shadow+OverlayBlur">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col gap-[8px] items-start pl-[24px] pr-[21px] py-[21px] relative w-full">
          <div className="absolute bg-[rgba(96,165,250,0.2)] blur-[12px] right-[-23px] rounded-[9999px] size-[96px] top-[-23px]" data-name="Overlay+Blur" />
          <Container8 />
          <Container12 />
        </div>
      </div>
      <div aria-hidden="true" className="absolute border-[#3b82f6] border-b border-l-4 border-r border-solid border-t inset-0 pointer-events-none rounded-[24px] shadow-[0px_8px_32px_0px_rgba(31,38,135,0.1)]" />
    </div>
  );
}

function Container15() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold h-[16px] justify-center leading-[0] not-italic relative shrink-0 text-[#4b5563] text-[12px] tracking-[0.6px] uppercase w-[82.22px]">
        <p className="leading-[16px] whitespace-pre-wrap">Pain Levels</p>
      </div>
    </div>
  );
}

function Margin4() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[59.97px] pl-[4px] top-[14px]" data-name="Margin">
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold h-[20px] justify-center leading-[0] not-italic relative shrink-0 text-[#16a34a] text-[14px] w-[63.13px]">
        <p className="leading-[20px] whitespace-pre-wrap">Avg: 2/10</p>
      </div>
    </div>
  );
}

function Container16() {
  return (
    <div className="h-[36px] relative shrink-0 w-full" data-name="Container">
      <div className="-translate-y-1/2 absolute flex flex-col font-['Inter:Bold',sans-serif] font-bold h-[36px] justify-center leading-[0] left-0 not-italic text-[#111827] text-[30px] top-[18px] w-[59.97px]">
        <p className="leading-[36px] whitespace-pre-wrap">Low</p>
      </div>
      <Margin4 />
    </div>
  );
}

function Container14() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0" data-name="Container">
      <Container15 />
      <Container16 />
    </div>
  );
}

function OverlayOverlayBlur1() {
  return (
    <div className="h-[36.016px] relative shrink-0 w-[36.051px]" data-name="Overlay+OverlayBlur">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 36.0508 36.0156">
        <g data-figma-bg-blur-radius="4" id="Overlay+OverlayBlur">
          <rect fill="var(--fill-0, #DCFCE7)" fillOpacity="0.5" height="36.0156" rx="8" width="36.0508" />
          <path d={svgPaths.p15b00540} fill="var(--fill-0, #34D399)" id="Icon" />
        </g>
        <defs>
          <clipPath id="bgblur_0_1_2043_clip_path" transform="translate(4 4)">
            <rect height="36.0156" rx="8" width="36.0508" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Container13() {
  return (
    <div className="relative shrink-0 w-[313px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start justify-between relative w-full">
        <Container14 />
        <OverlayOverlayBlur1 />
      </div>
    </div>
  );
}

function Image1() {
  return (
    <div className="h-[96px] relative shrink-0 w-[313px]" data-name="image">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgImage1} />
      </div>
    </div>
  );
}

function Container17() {
  return (
    <div className="h-[96px] relative shrink-0 w-[313px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <Image1 />
      </div>
    </div>
  );
}

function OverlayBorderShadowOverlayBlur3() {
  return (
    <div className="backdrop-blur-[6px] bg-[rgba(255,255,255,0.7)] relative rounded-[24px] shrink-0 w-full" data-name="Overlay+Border+Shadow+OverlayBlur">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col gap-[8px] items-start pl-[24px] pr-[21px] py-[21px] relative w-full">
          <div className="absolute bg-[rgba(74,222,128,0.2)] blur-[12px] right-[-23px] rounded-[9999px] size-[96px] top-[-23px]" data-name="Overlay+Blur" />
          <Container13 />
          <Container17 />
        </div>
      </div>
      <div aria-hidden="true" className="absolute border-[#34d399] border-b border-l-4 border-r border-solid border-t inset-0 pointer-events-none rounded-[24px] shadow-[0px_8px_32px_0px_rgba(31,38,135,0.1)]" />
    </div>
  );
}

function Container7() {
  return (
    <div className="content-stretch flex flex-col gap-[20px] items-start relative shrink-0 w-full" data-name="Container">
      <OverlayBorderShadowOverlayBlur2 />
      <OverlayBorderShadowOverlayBlur3 />
    </div>
  );
}

function Section() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-name="Section">
      <Container6 />
      <Container7 />
    </div>
  );
}

function Heading3() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 3">
      <div className="flex flex-col font-['Nunito:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#1f2937] text-[18px] w-full">
        <p className="leading-[28px] whitespace-pre-wrap">Symptom Log</p>
      </div>
    </div>
  );
}

function Container21() {
  return (
    <div className="h-[16.641px] relative shrink-0 w-[17.5px]" data-name="Container">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17.5 16.6406">
        <g id="Container">
          <path d={svgPaths.p30ad4400} fill="var(--fill-0, #F97316)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Background() {
  return (
    <div className="bg-[#ffedd5] content-stretch flex items-center justify-center relative rounded-[9999px] shrink-0 size-[40px]" data-name="Background">
      <Container21 />
    </div>
  );
}

function Container23() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold h-[24px] justify-center leading-[0] not-italic relative shrink-0 text-[#111827] text-[16px] w-[58.73px]">
        <p className="leading-[24px] whitespace-pre-wrap">Nausea</p>
      </div>
    </div>
  );
}

function Container24() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal h-[16px] justify-center leading-[0] not-italic relative shrink-0 text-[#6b7280] text-[12px] w-[96.69px]">
        <p className="leading-[16px] whitespace-pre-wrap">Reported 2 times</p>
      </div>
    </div>
  );
}

function Container22() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <Container23 />
      <Container24 />
    </div>
  );
}

function Margin5() {
  return (
    <div className="content-stretch flex flex-col items-start pl-[12px] relative shrink-0" data-name="Margin">
      <Container22 />
    </div>
  );
}

function Container20() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="Container">
      <Background />
      <Margin5 />
    </div>
  );
}

function OverlayBorder() {
  return (
    <div className="bg-[rgba(255,237,213,0.5)] content-stretch flex flex-col items-start px-[13px] py-[5px] relative rounded-[9999px] shrink-0" data-name="Overlay+Border">
      <div aria-hidden="true" className="absolute border border-[rgba(254,215,170,0.5)] border-solid inset-0 pointer-events-none rounded-[9999px]" />
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium h-[20px] justify-center leading-[0] not-italic relative shrink-0 text-[#ea580c] text-[14px] w-[64.27px]">
        <p className="leading-[20px] whitespace-pre-wrap">Moderate</p>
      </div>
    </div>
  );
}

function Container19() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between p-[16px] relative w-full">
          <Container20 />
          <OverlayBorder />
        </div>
      </div>
    </div>
  );
}

function Container26() {
  return (
    <div className="h-[16.604px] relative shrink-0 w-[14.883px]" data-name="Container">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14.8827 16.6038">
        <g id="Container">
          <path d={svgPaths.p4f80e80} fill="var(--fill-0, #A855F7)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Background1() {
  return (
    <div className="bg-[#f3e8ff] content-stretch flex items-center justify-center relative rounded-[9999px] shrink-0 size-[40px]" data-name="Background">
      <Container26 />
    </div>
  );
}

function Container28() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold h-[24px] justify-center leading-[0] not-italic relative shrink-0 text-[#111827] text-[16px] w-[57.39px]">
        <p className="leading-[24px] whitespace-pre-wrap">Fatigue</p>
      </div>
    </div>
  );
}

function Container29() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal h-[16px] justify-center leading-[0] not-italic relative shrink-0 text-[#6b7280] text-[12px] w-[96.78px]">
        <p className="leading-[16px] whitespace-pre-wrap">Reported 3 times</p>
      </div>
    </div>
  );
}

function Container27() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <Container28 />
      <Container29 />
    </div>
  );
}

function Margin6() {
  return (
    <div className="content-stretch flex flex-col items-start pl-[12px] relative shrink-0" data-name="Margin">
      <Container27 />
    </div>
  );
}

function Container25() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center relative">
        <Background1 />
        <Margin6 />
      </div>
    </div>
  );
}

function OverlayBorder1() {
  return (
    <div className="bg-[rgba(243,232,255,0.5)] relative rounded-[9999px] shrink-0" data-name="Overlay+Border">
      <div aria-hidden="true" className="absolute border border-[rgba(233,213,255,0.5)] border-solid inset-0 pointer-events-none rounded-[9999px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start px-[13px] py-[5px] relative">
        <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium h-[20px] justify-center leading-[0] not-italic relative shrink-0 text-[#9333ea] text-[14px] w-[28.5px]">
          <p className="leading-[20px] whitespace-pre-wrap">Mild</p>
        </div>
      </div>
    </div>
  );
}

function HorizontalBorder() {
  return (
    <div className="relative shrink-0 w-full" data-name="HorizontalBorder">
      <div aria-hidden="true" className="absolute border-[#f3f4f6] border-solid border-t inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between pb-[16px] pt-[17px] px-[16px] relative w-full">
          <Container25 />
          <OverlayBorder1 />
        </div>
      </div>
    </div>
  );
}

function Container18() {
  return (
    <div className="relative shrink-0 w-[356px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative w-full">
        <Container19 />
        <HorizontalBorder />
      </div>
    </div>
  );
}

function Button2() {
  return (
    <div className="relative shrink-0 w-[356px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center py-[12px] relative w-full">
        <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold h-[20px] justify-center leading-[0] not-italic relative shrink-0 text-[#4f46e5] text-[14px] text-center w-[89.59px]">
          <p className="leading-[20px] whitespace-pre-wrap">View Full Log</p>
        </div>
      </div>
    </div>
  );
}

function OverlayBorderShadowOverlayBlur4() {
  return (
    <div className="backdrop-blur-[6px] bg-[rgba(255,255,255,0.8)] relative rounded-[24px] shrink-0 w-full" data-name="Overlay+Border+Shadow+OverlayBlur">
      <div className="content-stretch flex flex-col items-start overflow-clip p-px relative rounded-[inherit] w-full">
        <Container18 />
        <Button2 />
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.5)] border-solid inset-0 pointer-events-none rounded-[24px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)]" />
    </div>
  );
}

function Section1() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-name="Section">
      <Heading3 />
      <OverlayBorderShadowOverlayBlur4 />
    </div>
  );
}

function Heading4() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 3">
      <div className="flex flex-col font-['Nunito:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#1f2937] text-[18px] w-full">
        <p className="leading-[28px] whitespace-pre-wrap">Medication Adherence</p>
      </div>
    </div>
  );
}

function Container32() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold h-[32px] justify-center leading-[0] not-italic relative shrink-0 text-[#111827] text-[24px] w-[55.45px]">
        <p className="leading-[32px] whitespace-pre-wrap">94%</p>
      </div>
    </div>
  );
}

function Margin8() {
  return (
    <div className="h-[6.754px] relative shrink-0 w-[13.423px]" data-name="Margin">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.4229 6.75391">
        <g id="Margin">
          <path d={svgPaths.p1b76fe00} fill="var(--fill-0, #16A34A)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function OverlayBorder2() {
  return (
    <div className="bg-[rgba(220,252,231,0.5)] content-stretch flex items-center px-[7px] py-[3px] relative rounded-[16px] shrink-0" data-name="Overlay+Border">
      <div aria-hidden="true" className="absolute border border-[rgba(187,247,208,0.5)] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <Margin8 />
      <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold h-[16px] justify-center leading-[0] not-italic relative shrink-0 text-[#16a34a] text-[12px] w-[27.3px]">
        <p className="leading-[16px] whitespace-pre-wrap">+2%</p>
      </div>
    </div>
  );
}

function Margin7() {
  return (
    <div className="content-stretch flex flex-col items-start pl-[8px] relative shrink-0" data-name="Margin">
      <OverlayBorder2 />
    </div>
  );
}

function Container31() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="Container">
      <Container32 />
      <Margin7 />
    </div>
  );
}

function Container33() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[20px] not-italic relative shrink-0 text-[#4b5563] text-[14px] w-full whitespace-pre-wrap">
        <p className="mb-0">{`Great job! You've been very`}</p>
        <p>consistent this week.</p>
      </div>
    </div>
  );
}

function Container30() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[8px] items-start relative w-full">
        <Container31 />
        <Container33 />
      </div>
    </div>
  );
}

function Container36() {
  return (
    <div className="relative shrink-0 size-[19.969px]" data-name="Container">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 19.9688 19.9688">
        <g id="Container">
          <path d={svgPaths.p158b1980} fill="var(--fill-0, #4F46E5)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function BackgroundShadow() {
  return (
    <div className="bg-white content-stretch flex items-center justify-center relative rounded-[9999px] shrink-0 size-[48px]" data-name="Background+Shadow">
      <Container36 />
      <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_2px_4px_0px_rgba(0,0,0,0.05)]" />
    </div>
  );
}

function Container35() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-center justify-center min-h-px min-w-px relative rounded-[9999px] w-full" data-name="Container">
      <BackgroundShadow />
    </div>
  );
}

function Container34() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center relative shrink-0 size-[64px]" data-name="Container">
      <Container35 />
    </div>
  );
}

function Margin9() {
  return (
    <div className="h-[64px] relative shrink-0 w-[80px]" data-name="Margin">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pl-[16px] relative size-full">
        <Container34 />
      </div>
    </div>
  );
}

function OverlayBorderShadowOverlayBlur5() {
  return (
    <div className="backdrop-blur-[6px] bg-[rgba(255,255,255,0.8)] relative rounded-[24px] shrink-0 w-full" data-name="Overlay+Border+Shadow+OverlayBlur">
      <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.5)] border-solid inset-0 pointer-events-none rounded-[24px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between p-[21px] relative w-full">
          <Container30 />
          <Margin9 />
        </div>
      </div>
    </div>
  );
}

function Section2() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-name="Section">
      <Heading4 />
      <OverlayBorderShadowOverlayBlur5 />
    </div>
  );
}

function Container38() {
  return (
    <div className="relative shrink-0 size-[19.969px]" data-name="Container">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 19.9688 19.9688">
        <g id="Container">
          <path d={svgPaths.p169c8200} fill="var(--fill-0, white)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Container39() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold h-[24px] justify-center leading-[0] not-italic relative shrink-0 text-[16px] text-center text-white w-[188.56px]">
        <p className="leading-[24px] whitespace-pre-wrap">Generate PDF for Doctor</p>
      </div>
    </div>
  );
}

function Margin10() {
  return (
    <div className="relative shrink-0" data-name="Margin">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pl-[8px] relative">
        <Container39 />
      </div>
    </div>
  );
}

function Button3() {
  return (
    <div className="bg-[#4f46e5] content-stretch flex items-center justify-center px-px py-[17px] relative rounded-[24px] shrink-0 w-full" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.2)] border-solid inset-0 pointer-events-none rounded-[24px]" />
      <div className="absolute bg-[rgba(255,255,255,0)] inset-0 rounded-[24px] shadow-[0px_10px_15px_-3px_rgba(99,102,241,0.3),0px_4px_6px_-4px_rgba(99,102,241,0.3)]" data-name="Button:shadow" />
      <Container38 />
      <Margin10 />
    </div>
  );
}

function Container41() {
  return (
    <div className="h-[12.25px] relative shrink-0 w-[9.352px]" data-name="Container">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9.35156 12.25">
        <g id="Container">
          <path d={svgPaths.p4d4c800} fill="var(--fill-0, #6B7280)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Container40() {
  return (
    <div className="content-stretch flex gap-[4px] items-center justify-center relative shrink-0 w-full" data-name="Container">
      <Container41 />
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium h-[16px] justify-center leading-[0] not-italic relative shrink-0 text-[#6b7280] text-[12px] text-center w-[222.42px]">
        <p className="leading-[16px] whitespace-pre-wrap">{`Securely encrypted & HIPAA compliant`}</p>
      </div>
    </div>
  );
}

function Container37() {
  return (
    <div className="content-stretch flex flex-col gap-[11.5px] items-start pb-[32px] pt-[16px] relative shrink-0 w-full" data-name="Container">
      <Button3 />
      <Container40 />
    </div>
  );
}

function Main() {
  return (
    <div className="relative shrink-0 w-full" data-name="Main">
      <div className="content-stretch flex flex-col gap-[24px] items-start pt-[96px] px-[16px] relative w-full">
        <OverlayBorderShadowOverlayBlur />
        <OverlayBorderShadowOverlayBlur1 />
        <Section />
        <Section1 />
        <Section2 />
        <Container37 />
      </div>
    </div>
  );
}

function Container43() {
  return (
    <div className="h-[15.188px] relative shrink-0 w-[15.609px]" data-name="Container">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15.6094 15.1875">
        <g id="Container">
          <path d={svgPaths.p2fd7b00} fill="var(--fill-0, #4B5563)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Button4() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center p-[8px] relative rounded-[9999px] shrink-0" data-name="Button">
      <Container43 />
    </div>
  );
}

function Heading() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Heading 1">
      <div className="flex flex-col font-['Nunito:Bold',sans-serif] font-bold h-[28px] justify-center leading-[0] relative shrink-0 text-[#1f2937] text-[18px] w-[126.44px]">
        <p className="leading-[28px] whitespace-pre-wrap">Patient History</p>
      </div>
    </div>
  );
}

function Container44() {
  return (
    <div className="h-[19.5px] relative shrink-0 w-[15.187px]" data-name="Container">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15.1871 19.5">
        <g id="Container">
          <path d={svgPaths.p33529880} fill="var(--fill-0, #4B5563)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Button5() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center p-[8px] relative rounded-[9999px] shrink-0" data-name="Button">
      <Container44 />
      <div className="absolute bg-[#ef4444] right-[8.19px] rounded-[9999px] size-[8px] top-[8px]" data-name="Background+Border">
        <div aria-hidden="true" className="absolute border border-solid border-white inset-0 pointer-events-none rounded-[9999px]" />
      </div>
    </div>
  );
}

function Container42() {
  return (
    <div className="h-[64px] relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-center size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-between px-[16px] relative size-full">
          <Button4 />
          <Heading />
          <Button5 />
        </div>
      </div>
    </div>
  );
}

function Header() {
  return (
    <div className="absolute backdrop-blur-[6px] bg-[rgba(255,255,255,0.7)] content-stretch flex flex-col items-start left-0 pb-px top-0 w-[390px]" data-name="Header">
      <div aria-hidden="true" className="absolute border-[rgba(255,255,255,0.2)] border-b border-solid inset-0 pointer-events-none" />
      <Container42 />
    </div>
  );
}

function Container45() {
  return (
    <div className="h-[16.652px] relative shrink-0 w-[18.403px]" data-name="Container">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18.4029 16.6523">
        <g id="Container">
          <path d={svgPaths.p3afef100} fill="var(--fill-0, #9CA3AF)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Margin11() {
  return (
    <div className="content-stretch flex flex-col items-start pt-[4px] relative shrink-0" data-name="Margin">
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium h-[15px] justify-center leading-[0] not-italic relative shrink-0 text-[#9ca3af] text-[10px] w-[28.25px]">
        <p className="leading-[15px] whitespace-pre-wrap">Home</p>
      </div>
    </div>
  );
}

function Link() {
  return (
    <div className="-translate-y-1/2 absolute content-stretch flex flex-col items-center left-[24px] p-[8px] top-[calc(50%+4.5px)]" data-name="Link">
      <Container45 />
      <Margin11 />
    </div>
  );
}

function Container46() {
  return (
    <div className="h-[20.016px] relative shrink-0 w-[18px]" data-name="Container">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 20.0156">
        <g id="Container">
          <path d={svgPaths.pa751080} fill="var(--fill-0, #4F46E5)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Margin12() {
  return (
    <div className="content-stretch flex flex-col items-start pt-[4px] relative shrink-0" data-name="Margin">
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium h-[15px] justify-center leading-[0] not-italic relative shrink-0 text-[#4f46e5] text-[10px] w-[37.19px]">
        <p className="leading-[15px] whitespace-pre-wrap">Reports</p>
      </div>
    </div>
  );
}

function Link1() {
  return (
    <div className="-translate-y-1/2 absolute content-stretch flex flex-col items-center left-[93.67px] p-[8px] top-[calc(50%+4.5px)]" data-name="Link">
      <Container46 />
      <Margin12 />
    </div>
  );
}

function Container47() {
  return (
    <div className="relative shrink-0 size-[19.969px]" data-name="Container">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 19.9688 19.9688">
        <g id="Container">
          <path d={svgPaths.p11037360} fill="var(--fill-0, #9CA3AF)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Margin13() {
  return (
    <div className="content-stretch flex flex-col items-start pt-[4px] relative shrink-0" data-name="Margin">
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium h-[15px] justify-center leading-[0] not-italic relative shrink-0 text-[#9ca3af] text-[10px] w-[22.44px]">
        <p className="leading-[15px] whitespace-pre-wrap">Chat</p>
      </div>
    </div>
  );
}

function Link2() {
  return (
    <div className="-translate-y-1/2 absolute content-stretch flex flex-col items-center left-[253.7px] p-[8px] top-[calc(50%+4.5px)]" data-name="Link">
      <Container47 />
      <Margin13 />
    </div>
  );
}

function Container48() {
  return (
    <div className="relative shrink-0 size-[16.031px]" data-name="Container">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16.0312 16.0312">
        <g id="Container">
          <path d={svgPaths.p236d9400} fill="var(--fill-0, #9CA3AF)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Margin14() {
  return (
    <div className="content-stretch flex flex-col items-start pt-[4px] relative shrink-0" data-name="Margin">
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium h-[15px] justify-center leading-[0] not-italic relative shrink-0 text-[#9ca3af] text-[10px] w-[30.88px]">
        <p className="leading-[15px] whitespace-pre-wrap">Profile</p>
      </div>
    </div>
  );
}

function Link3() {
  return (
    <div className="-translate-y-1/2 absolute content-stretch flex flex-col items-center left-[319.13px] p-[8px] top-[calc(50%+4.5px)]" data-name="Link">
      <Container48 />
      <Margin14 />
    </div>
  );
}

function Container50() {
  return (
    <div className="relative shrink-0 size-[13.969px]" data-name="Container">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.9688 13.9688">
        <g id="Container">
          <path d={svgPaths.p3946b710} fill="var(--fill-0, white)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Button6() {
  return (
    <div className="bg-[#4f46e5] content-stretch flex items-center justify-center p-[4px] relative rounded-[9999px] shrink-0 size-[56px]" data-name="Button">
      <div aria-hidden="true" className="absolute border-4 border-solid border-white inset-0 pointer-events-none rounded-[9999px]" />
      <div className="absolute bg-[rgba(255,255,255,0)] left-0 rounded-[9999px] shadow-[0px_10px_15px_-3px_rgba(79,70,229,0.4),0px_4px_6px_-4px_rgba(79,70,229,0.4)] size-[56px] top-0" data-name="Button:shadow" />
      <Container50 />
    </div>
  );
}

function Container49() {
  return (
    <div className="-translate-y-1/2 absolute content-stretch flex flex-col items-start left-[172.28px] top-[calc(50%-19.5px)]" data-name="Container">
      <Button6 />
    </div>
  );
}

function Nav() {
  return (
    <div className="absolute backdrop-blur-[8px] bg-[rgba(255,255,255,0.8)] bottom-[15.75px] h-[76px] left-0 w-[390px]" data-name="Nav">
      <div aria-hidden="true" className="absolute border-[rgba(255,255,255,0.2)] border-solid border-t inset-0 pointer-events-none shadow-[0px_-5px_20px_0px_rgba(0,0,0,0.05)]" />
      <Link />
      <Link1 />
      <Link2 />
      <Link3 />
      <Container49 />
    </div>
  );
}

export default function ClinicalHistoryReports() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[176px] relative size-full" data-name="Clinical History & Reports" style={{ backgroundImage: "url(\'data:image/svg+xml;utf8,<svg viewBox=\\'0 0 390 1794.8\\' xmlns=\\'http://www.w3.org/2000/svg\\' preserveAspectRatio=\\'none\\'><rect x=\\'0\\' y=\\'0\\' height=\\'100%\\' width=\\'100%\\' fill=\\'url(%23grad)\\' opacity=\\'1\\'/><defs><radialGradient id=\\'grad\\' gradientUnits=\\'userSpaceOnUse\\' cx=\\'0\\' cy=\\'0\\' r=\\'10\\' gradientTransform=\\'matrix(33.093 0 0 203.05 156 358.95)\\'><stop stop-color=\\'rgba(217,242,234,1)\\' offset=\\'0\\'/><stop stop-color=\\'rgba(217,242,234,0)\\' offset=\\'0.5\\'/></radialGradient></defs></svg>\'), url(\'data:image/svg+xml;utf8,<svg viewBox=\\'0 0 390 1794.8\\' xmlns=\\'http://www.w3.org/2000/svg\\' preserveAspectRatio=\\'none\\'><rect x=\\'0\\' y=\\'0\\' height=\\'100%\\' width=\\'100%\\' fill=\\'url(%23grad)\\' opacity=\\'1\\'/><defs><radialGradient id=\\'grad\\' gradientUnits=\\'userSpaceOnUse\\' cx=\\'0\\' cy=\\'0\\' r=\\'10\\' gradientTransform=\\'matrix(44.123 0 0 253.82 312 0)\\'><stop stop-color=\\'rgba(214,249,255,1)\\' offset=\\'0\\'/><stop stop-color=\\'rgba(214,249,255,0)\\' offset=\\'0.5\\'/></radialGradient></defs></svg>\'), url(\'data:image/svg+xml;utf8,<svg viewBox=\\'0 0 390 1794.8\\' xmlns=\\'http://www.w3.org/2000/svg\\' preserveAspectRatio=\\'none\\'><rect x=\\'0\\' y=\\'0\\' height=\\'100%\\' width=\\'100%\\' fill=\\'url(%23grad)\\' opacity=\\'1\\'/><defs><radialGradient id=\\'grad\\' gradientUnits=\\'userSpaceOnUse\\' cx=\\'0\\' cy=\\'0\\' r=\\'10\\' gradientTransform=\\'matrix(55.154 0 0 126.91 0 897.38)\\'><stop stop-color=\\'rgba(255,224,234,1)\\' offset=\\'0\\'/><stop stop-color=\\'rgba(255,224,234,0)\\' offset=\\'0.5\\'/></radialGradient></defs></svg>\'), url(\'data:image/svg+xml;utf8,<svg viewBox=\\'0 0 390 1794.8\\' xmlns=\\'http://www.w3.org/2000/svg\\' preserveAspectRatio=\\'none\\'><rect x=\\'0\\' y=\\'0\\' height=\\'100%\\' width=\\'100%\\' fill=\\'url(%23grad)\\' opacity=\\'1\\'/><defs><radialGradient id=\\'grad\\' gradientUnits=\\'userSpaceOnUse\\' cx=\\'0\\' cy=\\'0\\' r=\\'10\\' gradientTransform=\\'matrix(44.123 0 0 126.91 312 897.38)\\'><stop stop-color=\\'rgba(238,236,249,1)\\' offset=\\'0\\'/><stop stop-color=\\'rgba(238,236,249,0)\\' offset=\\'0.5\\'/></radialGradient></defs></svg>\'), url(\'data:image/svg+xml;utf8,<svg viewBox=\\'0 0 390 1794.8\\' xmlns=\\'http://www.w3.org/2000/svg\\' preserveAspectRatio=\\'none\\'><rect x=\\'0\\' y=\\'0\\' height=\\'100%\\' width=\\'100%\\' fill=\\'url(%23grad)\\' opacity=\\'1\\'/><defs><radialGradient id=\\'grad\\' gradientUnits=\\'userSpaceOnUse\\' cx=\\'0\\' cy=\\'0\\' r=\\'10\\' gradientTransform=\\'matrix(55.154 0 0 253.82 0 1794.8)\\'><stop stop-color=\\'rgba(217,242,234,1)\\' offset=\\'0\\'/><stop stop-color=\\'rgba(217,242,234,0)\\' offset=\\'0.5\\'/></radialGradient></defs></svg>\'), url(\'data:image/svg+xml;utf8,<svg viewBox=\\'0 0 390 1794.8\\' xmlns=\\'http://www.w3.org/2000/svg\\' preserveAspectRatio=\\'none\\'><rect x=\\'0\\' y=\\'0\\' height=\\'100%\\' width=\\'100%\\' fill=\\'url(%23grad)\\' opacity=\\'1\\'/><defs><radialGradient id=\\'grad\\' gradientUnits=\\'userSpaceOnUse\\' cx=\\'0\\' cy=\\'0\\' r=\\'10\\' gradientTransform=\\'matrix(44.123 0 0 253.82 312 1794.8)\\'><stop stop-color=\\'rgba(214,249,255,1)\\' offset=\\'0\\'/><stop stop-color=\\'rgba(214,249,255,0)\\' offset=\\'0.5\\'/></radialGradient></defs></svg>\'), url(\'data:image/svg+xml;utf8,<svg viewBox=\\'0 0 390 1794.8\\' xmlns=\\'http://www.w3.org/2000/svg\\' preserveAspectRatio=\\'none\\'><rect x=\\'0\\' y=\\'0\\' height=\\'100%\\' width=\\'100%\\' fill=\\'url(%23grad)\\' opacity=\\'1\\'/><defs><radialGradient id=\\'grad\\' gradientUnits=\\'userSpaceOnUse\\' cx=\\'0\\' cy=\\'0\\' r=\\'10\\' gradientTransform=\\'matrix(55.154 0 0 253.82 0 0)\\'><stop stop-color=\\'rgba(255,235,241,1)\\' offset=\\'0\\'/><stop stop-color=\\'rgba(255,235,241,0)\\' offset=\\'0.5\\'/></radialGradient></defs></svg>\'), linear-gradient(90deg, rgb(240, 253, 244) 0%, rgb(240, 253, 244) 100%)" }}>
      <Main />
      <Header />
      <Nav />
    </div>
  );
}