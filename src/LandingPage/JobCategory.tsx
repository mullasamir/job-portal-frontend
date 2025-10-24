const JobCategory = () => {

    return (
        <div className="mt-20 pb-5">
            <div className="text-4xl font-semibold mb-3 text-mine-shaft-100 text-center">Browse <span className="text-bright-sun-400"> Job </span>Category.</div>
        <div className="text-lg mx-auto text-mine-shaft-300 text-center w-1/2">
            Explore diverse job opportunities tailred to your skills. start your carrier journey today..!
        </div>

        <div className="flex flex-col items-center w-64">
            <div className="p-2 bg-bright-sun-300 rounded-full">
                <img className="h-8 w-8" src="/Category/Digital Marketing.png" alt="" />

            </div>
            <div className="text-mine-shaft-100 text-xl font-semibold"> Digital Marketing</div>
            <div className="text-sm text-center text-mine-shaft-300">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Numquam quaerat iste ea.</div>
            <div className="text-bright-sun-300 text-lg">1k+ new job posted </div>
        </div>
        </div>
    )
}

export default JobCategory