import { Avatar } from '@mantine/core';
import { IconAsset , IconBell, IconSettings,IconAnchor } from '@tabler/icons-react';

const Header = () => {
    return(
        <div className="w-full bg-mine-shaft-950 px-6 h-28 flex justify-between items-center text-white">
            
            <div className="flex gap-1 items-center text-bright-sun-400">
                <IconAnchor className="h-8  w-8 " stroke={2.5}/>
            <div className="text-3xl font-semibold">JobsHook</div>
            </div>
            
            <div className="flex gap-5">

            <a href="">Find Job</a>
            <a href="">Find Talent</a>
            <a href="">Upload Jobs</a>
            <a href="">About Us</a>
            </div>

            <div className="flex gap-5 items-center">

            <IconBell/>
            <div className='flex items-center gap-2'>
                <div><Avatar src="avatar.png" alt="it's me" /></div>
            </div>
            <IconSettings/>
            </div>

        </div>
    )

}

export default Header;