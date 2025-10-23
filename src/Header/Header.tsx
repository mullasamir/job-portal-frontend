import { Avatar, Indicator } from '@mantine/core';

import { IconAsset, IconBell, IconSettings, IconAnchor } from '@tabler/icons-react';
import NavLinks from './Navlinks';

const Header = () => {
    return (
        <div className="w-full bg-mine-shaft-950 px-6 h-20 flex justify-between items-center text-white">

            <div className="flex gap-1 items-center text-bright-sun-400">
                <IconAnchor className="h-8  w-8 " stroke={2.5} />
                <div className="text-3xl font-semibold">JobsHook</div>
            </div>

           
            {NavLinks()}

            <div className="flex gap-3 items-center">


                <div className='flex items-center gap-2'>
                    <div>Marshal</div>
                    <div><Avatar src="avatar.png" alt="it's me" /></div>
                </div>
                <div className="bg-mine-shaft-900 p-1.5 rounded-full">
                    <IconSettings stroke={1.5} />

                </div >

                <div className='bg-mine-shaft-900 p-1.5 rounded-full'>
                    <Indicator color="bright-sun.4" radius="md" offset={7} size={9} processing>
                        <IconBell stroke={1.5} />
                    </Indicator>
                </div>


            </div>

        </div>
    )

}

export default Header;