import React from "react";
import {Card, CardBody, CardFooter, CardHeader} from "@nextui-org/react";
import Props from "@core/components/Card/interface";


export default function GenericCard(props: Props) {
    const { children, cardHeader, cardFooter, styleBody, styleCard} = props;

    return (
        <>
            <Card className={styleCard}>
                {cardHeader ?
                    <CardHeader >
                        {cardHeader}
                    </CardHeader>
                : null}
                <CardBody className={styleBody}>
                    {children}
                </CardBody>
                {cardFooter ?
                    <CardFooter>
                        {cardFooter}
                    </CardFooter>
                : null}
            </Card>
        </>
    );
}
