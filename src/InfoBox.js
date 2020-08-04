import React from 'react';
import "./InfoBox.css";
import { Card, CardContent, Typography } from '@material-ui/core';


function InfoBox({ title, cases, isRed, isBlack, active, total, ...props }) {
    return (
        <Card onClick={props.onClick} className={`infoBox ${active && "infoBox--selected"}
             ${isRed && "infoBox--red"} ${isBlack && "infoBox--black"}`}>
            <CardContent>
                <Typography className="infoBox__title" color="textSecondary">{title}</Typography>
                <h2 className={`infoBox__cases ${!isRed && "infoBox__cases--green"}
                 ${isBlack && "infoBox__cases--blacky"}`}>{cases}</h2>
                <Typography className="infoBox__total" color="textSecondary">{total} Total</Typography>
            </CardContent>
        </Card>
    )
}

export default InfoBox
