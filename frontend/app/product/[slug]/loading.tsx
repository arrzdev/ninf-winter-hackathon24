import React from 'react'

const LoadingPage = () => {
  return (
    <div className="relative">
      <div className="flex flex-col justify-between space-y-6 p-5 md:space-y-8 xl:sticky xl:top-24 xl:min-h-[calc(100vh_-_var(--topbarHeight))] xl:px-10 xl:py-12">
        <div className="flex flex-col gap-2 mx-auto bg-gray-200 animate-pulse w-full h-[675px] rounded-md">
        </div>
        <div className="pb-24 space-y-4">
          <div className="flex flex-col gap-2 mx-auto bg-gray-200 animate-pulse w-full h-[275px] rounded-md">
          </div>
          <div className="flex flex-col gap-2 mx-auto bg-gray-200 animate-pulse w-full h-[175px] rounded-md">
          </div>
        </div>
      </div>
    </div>
  )
}

export default LoadingPage
