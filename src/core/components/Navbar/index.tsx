import React from "react";
import {Navbar, NavbarBrand, NavbarMenuToggle, NavbarMenuItem, NavbarMenu, NavbarContent, NavbarItem, Link, Button} from "@nextui-org/react";
import { Link as LinkReact } from "react-router-dom";
import icons from "@infrastructure/constants/icon";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {useTheme} from "next-themes";

export default function Appbar() {
    const [isMenuOpen, setIsMenuOpen] = React.useState(false);
    const { theme, setTheme } = useTheme();
    const iconToggleMode = theme ==='dark' ? icons.Sun : icons.Moon

    const menuItems = [
        {
            component: 'Home',
            to: ''
        },
        {
            component: 'Other Projects',
            to: '/otherprojects'
        },

        {
            component: 'Contact me',
            to: '/contact'
        },
        {
            component: <FontAwesomeIcon
                            icon={icons.Github}
                            className={'myTheme dark:text-white hover:text-github'}
                            style={{
                                transition: 'color 0.3s',
                            }}
                            size="xl" />,
            to: 'https://github.com/luigicarmone',
        },
        {
            component: <FontAwesomeIcon
                            icon={icons.Discord}
                            className={'myTheme dark:text-white hover:text-discord'}
                            style={{
                                transition: 'color 0.3s',
                            }}
                            size="xl" />,
            to: 'https://discord.com/users/luigicarmone',
        },
        {
            component: <FontAwesomeIcon
                            icon={icons.Linkedin}
                            className={'myTheme dark:text-white hover:text-linkedin'}
                            style={{
                                transition: 'color 0.3s',
                            }}
                            size="xl" />,
            to: 'https://www.linkedin.com/in/luigi-carmone',
        },
    ]

    return (
        <Navbar
            isBordered
            isMenuOpen={isMenuOpen}
            onMenuOpenChange={setIsMenuOpen}
        >
            <NavbarContent className="myTheme sm:hidden" justify="start">
                <NavbarMenuToggle className="myTheme sm:hidden dark:text-white light:text-black" aria-component={isMenuOpen ? "Close menu" : "Open menu"} />
            </NavbarContent>

            <NavbarContent className="sm:hidden pr-3" justify="center">
                <NavbarBrand>
                    <LinkReact to={'/'}>
                        <img src={theme ==='dark' ? icons.LogoInvert : icons.Logo} className='w-52 hover:cursor-pointer' alt='logo'/>
                    </LinkReact>
                </NavbarBrand>
            </NavbarContent>

            <NavbarContent className="hidden sm:flex gap-4">
                <NavbarBrand>
                    <LinkReact to={'/'}>
                        <img src={theme ==='dark' ? icons.LogoInvert : icons.Logo} className='w-52 hover:cursor-pointer' alt='logo'/>
                    </LinkReact>
                </NavbarBrand>
            </NavbarContent>


            {menuItems.map((item, index) => (

                    item.component === 'Contact me' ?
                        <>
                            <NavbarContent justify="end">
                                <NavbarItem key={`${item.component}-${index}`}>
                                    <LinkReact to={item.to}>
                                        <Button as={Link} color="warning" variant="flat" >
                                            {item.component}
                                        </Button>
                                    </LinkReact>
                                </NavbarItem>
                            </NavbarContent>
                        </>

                    : typeof item.component !== 'string' ?
                            <NavbarContent className="hidden sm:flex gap-4" justify="center">
                                <NavbarItem key={`${item.component}-${index}`}>
                                    <Link color="foreground">
                                        <LinkReact to={item.to} target="_blank">{item.component}</LinkReact>
                                    </Link>
                                </NavbarItem>
                            </NavbarContent>
                :
                <NavbarContent className="hidden sm:flex gap-4" justify="center">
                    <NavbarItem key={`${item.component}-${index}`}>
                            <Link color="foreground">
                                    <LinkReact to={item.to}>{item.component}</LinkReact>
                            </Link>
                        </NavbarItem>
                </NavbarContent>
                ))}

            <button onClick={() => theme ==='dark' ? setTheme('light') : setTheme('dark')}>
                <FontAwesomeIcon
                    icon={iconToggleMode}
                    style={{
                        color: theme === 'dark' ? '#fff' : '#000',
                        transition: 'color 0.3s',
                    }}
                    size="xl" />
            </button>

            <NavbarMenu>
                {menuItems.map((item, index) => (
                    <NavbarMenuItem key={`${item.component}-${index}`}>
                        <Link
                            className="w-full"
                            color={
                                item.component === 'Contact me' ? "warning" : "foreground"
                            }
                            size="lg"
                        >
                            <LinkReact to={item.to}>{item.component}</LinkReact>
                        </Link>
                    </NavbarMenuItem>
                ))}
            </NavbarMenu>
        </Navbar>
    );
}
