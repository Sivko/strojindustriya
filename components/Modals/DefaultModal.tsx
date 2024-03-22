export default function DefaultModal({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="desktop:relative w-full">
      <div data-close="true" className="s2-icons cursor-pointer max-desktop:p-[12px] text-[#8E8E93] w-fit s2-close !text-[28px] absolute top-[28px] right-[28px] max-desktop:left-0 max-desktop:right-0 max-desktop:top-[48px] z-10 max-desktop:mx-auto rounded-full max-desktop:bg-[#F2F2F7]" />
      <div className={`bg-white rounded-base max-desktop:overflow-scroll max-desktop:h-[calc(100dvh-74px)] max-desktop:rounded-b-[0] relative p-6`}>
        {children}
      </div>
    </div>
  )
}