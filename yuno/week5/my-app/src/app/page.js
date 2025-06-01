// "/" 에 해당하는 페이지
'use client'
import { useState } from "react"
import { redirect } from "next/navigation"

import FooterNav from "./Components/Footer/FooterNav"

export default function Home() {
  redirect('/chat-list')
}