import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import { FaCloudUploadAlt } from "react-icons/fa"
import { MdDelete } from 'react-icons/md'
import axios from 'axios'

import useAuthStore from '../store/authStore'
import { client } from '../utils/client'

const Upload = () => {
  return (
    <div>Upload</div>
  )
}

export default Upload