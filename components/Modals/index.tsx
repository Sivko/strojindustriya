"use client";

import { Context } from "@/app/page-provider";
import { useContext, useState } from "react";


export default function Modals() {
  const { modals, setModals } = useContext(Context);
  return (<>
    {!!modals.length && modals.map((content, index) => (<div key={index}>
      {content}
    </div>))}
  </>)
}