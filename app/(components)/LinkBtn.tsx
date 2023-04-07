import { ReactComponentElement } from 'react'

interface ILinkProps {
  name: string,
  url: string
}

const LinkBtn = (props: ILinkProps) => {
  const { name, url } = props
  return (
    <a
      id='linkBtn'
      className='flex justify-center w-3/4 m-auto max-w-[300px] rounded-3xl p-3 bg-white text-black font-semibold'
      href={url}
      target='_blank'
    >
      {name}
    </a>
  )
}

export default LinkBtn