import React, { useState } from "react";
import Card from "@material-ui/core/Card";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import ArrowRightAltRoundedIcon from "@material-ui/icons/ArrowRightAltRounded";
import { PersonWrapper } from "./ProfileStyles";

const Person = props => {
    const person = props.person;
    const state = useSelector(state => state);
    const user = state.onboardingReducer.user
    return (

        <div className="person">
            <p className="pEmail">{ person.email }</p>
            <p className="pOwner">owner={ JSON.stringify(person.owner) }</p>
            <p className="pAdmin">admin={ JSON.stringify(person.admin) }</p>
            <p className="pModerator">moderator={ JSON.stringify(person.moderator) }</p>
            <Link className="pEdit" to={ `/users/${person.id}/edit` }>Edit</Link>
        </div>

    );
};

export default Person;
