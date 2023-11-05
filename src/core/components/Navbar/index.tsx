import React from "react";
import {Navbar, NavbarBrand, NavbarMenuToggle, NavbarMenuItem, NavbarMenu, NavbarContent, NavbarItem, Link, Button} from "@nextui-org/react";
import ViewInArIcon from '@mui/icons-material/ViewInAr';
import { Link as LinkReact } from "react-router-dom";
import icons from "@infrastructure/constants/icon";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

export default function Appbar() {
    const [isMenuOpen, setIsMenuOpen] = React.useState(false);

    const menuItems = [
        {
            component: 'Home',
            to: '/home'
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
            component: <FontAwesomeIcon icon={icons.Github} style={{color: "#000000",}} size="xl" />,
            to: 'https://github.com/luigicarmone',
        },
        {
            component: <FontAwesomeIcon icon={icons.Discord} style={{color: "#000000",}} size="xl" />,
            to: 'https://discord.com/users/luigicarmone',
        },
        {
            component: <FontAwesomeIcon icon={icons.Linkedin} style={{color: "#000000",}} size="xl" />,
            to: 'https://www.linkedin.com/in/luigi-carmone',
        },
    ]

    return (
        <Navbar
            isBordered
            isMenuOpen={isMenuOpen}
            onMenuOpenChange={setIsMenuOpen}
        >
            <NavbarContent className="sm:hidden" justify="start">
                <NavbarMenuToggle aria-component={isMenuOpen ? "Close menu" : "Open menu"} />
            </NavbarContent>

            <NavbarContent className="sm:hidden pr-3" justify="center">
                <NavbarBrand>
                    <ViewInArIcon />
                    <p className="font-bold text-inherit">learn with gigi</p>
                </NavbarBrand>
            </NavbarContent>

            <NavbarContent className="hidden sm:flex gap-4">
                <NavbarBrand>
                    <ViewInArIcon />
                    <p className="font-bold text-inherit">learn with gigi</p>
                </NavbarBrand>
            </NavbarContent>


            {menuItems.map((item, index) => (
                    item.component === 'Contact me' ?
                                <NavbarContent justify="end">
                                    <NavbarItem>
                                        <LinkReact to={item.to} target="_blank">
                                            <Button as={Link} color="warning" variant="flat" >
                                                {item.component}
                                            </Button>
                                        </LinkReact>
                                    </NavbarItem>
                                </NavbarContent>
                    :
                <NavbarContent className="hidden sm:flex gap-4" justify="center">
                    <NavbarItem key={`${item.component}-${index}`}>
                            <Link color="foreground">
                                    <LinkReact to={item.to} target="_blank">{item.component}</LinkReact>
                            </Link>
                        </NavbarItem>
                </NavbarContent>
                ))}

            <NavbarMenu>
                {menuItems.map((item, index) => (
                    <NavbarMenuItem key={`${item.component}-${index}`}>
                        <Link
                            className="w-full"
                            color={
                                item.component === 'Contact me' ? "warning" : index === menuItems.length - 1 ? "danger" : "foreground"
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
