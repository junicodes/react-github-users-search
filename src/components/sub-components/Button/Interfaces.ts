
import React, { useState } from 'react'

export interface ButtonProps {
    btnText: string,
    onTriggerFunction: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>, ...other: any) => void,
    disabled: boolean,
    className: string
}