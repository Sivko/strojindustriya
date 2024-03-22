import { Context } from "@/app/page-provider";
import { useContext } from "react";

export default function Overlay({ children }: { children: JSX.Element }) {

  const { setModals } = useContext(Context)

  const closeLastModal = (e: React.MouseEvent<HTMLDivElement>) => {
    const el = e.target as HTMLDivElement
    if (el.getAttribute("data-close")) {
      setModals((prev: any[]) => prev.length > 1 ? prev.slice(0, prev.length - 1) : []);
    }
  }

  return (<>
    <div id="overlay" data-close="true" onClick={closeLastModal} className="fixed z-50 overflow-y-auto overscroll-contain backdrop-blur-[10px] top-0 bottom-0 left-0 right-0 bg-[#000000d0]" >
      <div className="min-h-[calc(100dvh+1px)] max-desktop:pb-0 py-[80px] max-desktop:py-[74px] mx-auto max-w-[672px] flex items-center justify-center relative" data-close="true">
        {children}
      </div>
    </div>
  </>)
}