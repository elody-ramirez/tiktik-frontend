import { useState } from "react"
import Image from "next/legacy/image"
import { GoVerified } from "react-icons/go"
import axios from "axios"
import Link from "next/link"
import { useRouter } from "next/router"

import VideoCard from "../../components/VideoCard"
import NoResults from "../../components/NoResults"
import { IUser, Video } from "../../types"
import { BASE_URL } from "../../utils"
import useAuthStore from "../../store/authStore"

const Search = () => {
  return (
    <div>
      
    </div>
  )
}

export const getServerSideProps = async ({
  params: { searchTerm }
}: {
  params: { searchTerm: string }
}) => {
  const res = await axios.get(`${BASE_URL}/api/search/${searchTerm}`)

  return {
    props: { data: res.data }
  }
}

export default Search