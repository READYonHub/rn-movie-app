import { Tabs } from 'expo-router'
import { Image, ImageBackground, Text } from 'react-native'
import { images } from '@/constants/images';
import { icons } from '@/constants/icons'

const TabIcon = () => {
    return (
        <ImageBackground source={images.highlight}
            className='flex flex-row w-full flex-1 min-w-[122px] min-h-14 mt-4 justify-center items-center rounded-full overflow-hidden'
        >

            <Image source={icons.home} tintColor="#151312" className='size-5' />

            <Text
                className='text-secondly text-base font-semibold ml-2'
            >
                Home
            </Text>
        </ImageBackground>
    )
}


const Layout = () => {
    return (
        <Tabs>
            <Tabs.Screen
                name='index'
                options={{
                    title: 'Home',
                    headerShown: false,
                    tabBarIcon: ({ focused }) => (
                        <TabIcon
                            focused={focused}
                            icon={icons.home}
                            title="Home"
                        />
                    )
                }}
            />

            <Tabs.Screen
                name='search'
                options={{
                    title: 'Search',
                    headerShown: false,
                    tabBarIcon: ({ focused }) => (
                        <TabIcon
                            focused={focused}
                            icon={icons.search}
                            title="Search"
                        />)
                }}
            />

            <Tabs.Screen
                name='saved'
                options={{
                    title: 'Saved',
                    headerShown: false,
                    tabBarIcon: ({ focused }) => (
                        <TabIcon
                            focused={focused}
                            icon={icons.save}
                            title="Saved"
                        />)
                }}
            />

            <Tabs.Screen
                name='profile'
                options={{
                    title: 'Profile',
                    headerShown: false,
                    tabBarIcon: ({ focused }) => (
                        <TabIcon
                            focused={focused}
                            icon={icons.person}
                            title="Profile"
                        />)
                }}
            />
        </Tabs>


    )
}

export default Layout