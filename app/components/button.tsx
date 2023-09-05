"use client"
import React from "react";

export default function Button({ children, type = 'button' }: { children: React.ReactNode, type?: 'submit' | 'reset' | 'button' }) {
  return (
    <button type={type} className='outline-none bg-purple-100 hover:bg-purple-200 active:bg-purple-300 transition ease-in-out duration-100 rounded w-20 h-10 box-border'>{children}</button>
  );
}