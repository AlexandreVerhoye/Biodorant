import Head from 'next/head'
import Image from 'next/image'
import {GlobalLayout} from "../components/Layout";
import {Header} from "../components/Header";
import {Science} from "../components/Science";

export default function Home() {
  return (
   <GlobalLayout>
     <Header/>
       <Science/>
   </GlobalLayout>
  )
}
