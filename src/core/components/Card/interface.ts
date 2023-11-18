import React from 'react'

export default interface Props {
    children: React.ReactNode;
    cardHeader?: string;
    cardFooter?: React.ReactNode;
    styleBody?: string;
}

