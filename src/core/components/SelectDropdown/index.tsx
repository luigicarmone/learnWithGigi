import React from "react";
import {Dropdown, DropdownItem} from "@nextui-org/react";
import Props from "@core/components/SelectDropdown/interface";

export default function SelectDropdown(props: Props) {
    const { children, id } = props;

    return (
        <Dropdown
            id={id}
            showArrow
            classNames={{
                base: "before:bg-default-200",
                content: "py-1 px-1 border border-default-200 bg-gradient-to-br from-white to-default-200 dark:from-default-50 dark:to-black",
            }}
        >
            {[children ? children : null]}
        </Dropdown>
    );
}
