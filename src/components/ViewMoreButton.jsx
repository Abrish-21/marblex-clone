const ViewMoreButton = ({text})=>{
    return(
        <button className=" hover:bg-zinc-600 font-roboto hover:text-white   animate-pulse bg-[rgba(247,168,103,0.92)] px-6 py-2 mt-10 rounded-none">
        <div className="flex">
          <p>{text}</p>
          <img src="src\assets\icons\arrow.svg" alt="skype-logo" className='w-7' />
        </div>
        </button>
        
    )

}
export default ViewMoreButton;
          