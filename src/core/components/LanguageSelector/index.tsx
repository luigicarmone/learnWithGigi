import React from "react";
import { useTranslate } from "@tolgee/react";
import {
    getLanguages,
    setLanguage,
    useLanguage,
} from "@infrastructure/utils/global";
import ReactCountryFlag from "react-country-flag";
import SelectDropdown from "@core/components/SelectDropdown";
import {
    Button,
    DropdownItem,
    DropdownMenu,
    DropdownSection,
    DropdownTrigger,
} from "@nextui-org/react";

export default function LanguageSelector() {
    const { t } = useTranslate();
    const languages = getLanguages();
    const currentLanguageValue = useLanguage();

    const currentLanguage =
        (languages.length > 0
            ? languages.find((lang) => lang.value === currentLanguageValue)
            : { label: "it", icon: "it" }) || {};

    if (!languages || languages.length <= 1) {
        return null;
    }

    return (
        <SelectDropdown>
            <DropdownTrigger>
                <Button variant="bordered">
                    <div>
                        <ReactCountryFlag
                            countryCode={currentLanguage.icon}
                            svg
                            style={{
                                fontSize: "1em",
                                width: 20,
                                height: 20,
                            }}
                            aria-label={t(`${currentLanguage.label}`)}
                        />
                        <span style={{ marginLeft: 15 }}>{t(`${currentLanguage.label}`)}</span>
                    </div>
                </Button>
            </DropdownTrigger>
            <DropdownMenu variant="faded" aria-label={t("tr_language")}>
                <DropdownSection title={t("tr_language")}>
                    {languages.map((lang) => {
                        const { label, value, icon: langIcon } = lang;

                        return (
                            <DropdownItem
                                key={t(`${label}`)}
                                onClick={() => {
                                    setLanguage(value);
                                    window.location.reload();
                                }}
                                startContent={
                                <ReactCountryFlag
                                    countryCode={langIcon}
                                    svg
                                    style={{
                                        fontSize: "1.5em",
                                        paddingRight: 10,
                                    }}
                                    aria-label={t(`${label}`)}
                                />
                            }
                            >
                                {t(`${label}`)}
                            </DropdownItem>
                        );
                    })}
                </DropdownSection>
            </DropdownMenu>
        </SelectDropdown>
    );
}
