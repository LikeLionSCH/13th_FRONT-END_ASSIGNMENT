'use client'
// 루트에 해당하는 페이지 라고함
import { useState } from "react"
import { redirect } from "next/navigation"

import FooterNav from "./Components/Footer/FooterNav"

export default function Home() {
  redirect('/chat-list')
}