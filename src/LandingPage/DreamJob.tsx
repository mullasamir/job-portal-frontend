import { Avatar, TextInput } from "@mantine/core";
import Header from "../Header/Header"
import { IconSearch } from "@tabler/icons-react";
const DreamJob = () => {

    return (
        <div className="flex items-center px-16">
            <div className="flex flex-col w-[45%] gap-3">
                <div className="text-6xl font-bold leading-tight text-mine-shaft-100 [&>span]:text-bright-sun-400" > Find Your <span> Dream </span> <span>Job </span>with Us </div>
                <div className="text-lg text-mine-shaft-200">Good Life Begins with A Good Company..Start expore thousands of jobs one place. </div>
                <div className="flex gap-3 mt-5">
                    <TextInput className="bg-mine-shaft-600 rounded-lg p-1 px-2 text-mine-shaft-100 [&_input]:text-mine-shaft-100"
                        variant="unstyled"
                        label="Finding Job title"
                        // description="software engineer"
                        placeholder="software engineer "
                    />
                    <TextInput className="bg-mine-shaft-600 rounded-lg p-1 px-2 text-mine-shaft-100 [&_input]:text-mine-shaft-100"
                        variant="unstyled"
                        label="Job type"
                        // description="Input description"
                        placeholder="Full time"
                    />
                    <div className="flex items-center justify-center h-full w-20 bg-bright-sun-400 text-mine-shaft-100 rounded-lg p-2 hover:bg-bright-sun-500 cursor-pointer">
                        <IconSearch className="h-[85%] w-[85%]" />

                    </div>
                </div>
            </div>
            <div className="w-[55%] flex items-center justify-center">
                <div className="w-[30rem]">
                    <img src="/img1.png" alt="Boy" />
                    <div className="absolute right-40 w-fit border-bright-sun-400 border rounded-lg p-2 backdrop-blur-md top-[50%]">
                        <div className="text-center mb-1 text-mine-shaft">10k+ got jobs</div>
                        <Avatar.Group>
                            <Avatar src="avatar.png" />
                            <Avatar src="avatar-9.png" />
                            <Avatar src="avatar1.png" />
                            <Avatar>+9k</Avatar>
                        </Avatar.Group>
                    </div>

                    <div className="absolute right-90 w-fit top-[28%] gap-3 border-bright-sun-400 border rounded-lg p-2 backdrop-blur-md flex flex-col">
                        <div className="flex gap-2 items-center">
                            <div className="w-12 h-10 p-1 bg-mine-shaft-700 rounded-lg">
                                <img src="/Google.png" alt="" />
                            </div>
                            <div className="text-sm text-mine-shaft-100">
                                <div>Software Engineer</div>
                                <div className="text-mine-shaft-200 text-xs">New York</div>
                            </div>

                        </div>

                        <div className="flex gap-2 justify-around text-mine-shaft-100">
                            <span>1 Day Ago</span>
                            <span>120 Applications</span>

                        </div>

                    </div>


                </div>
            </div>
        </div>
    )
}

export default DreamJob;