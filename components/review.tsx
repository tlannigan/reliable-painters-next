export default function Review(props: any) {
    return (
        // basis-3/5 md:basis-3/5 lg:basis-2/5 xl:basis-1/3 shrink-0 lg:shrink
        <div className='flex flex-col gap-y-2 section w-64 sm:w-96 h-52 sm:h-56 shrink-0'>
          <div className='flex justify-between items-center'>
              <div><p className='text-sm sm:text-lg truncate font-bold'>{ props.name }</p></div>
              <div><p className='text-base sm:text-xl'>&#9733;&#9733;&#9733;&#9733;&#9733;</p></div>
          </div>
          <div>
              <p className='text-xs sm:text-base'>{ props.review }</p>
          </div>
        </div>
    )
}