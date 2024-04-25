import React, { useState } from 'react';
import { FormControl, FormGroup, FormLabel, Switch, Button } from '@material-ui/core';

const ParentalControl = ({ parentalControlEnabled, onToggleParentalControl }) => {
    const [isEnabled, setIsEnabled] = useState(parentalControlEnabled);

    const handleToggle = () => {
        setIsEnabled(!isEnabled);
        onToggleParentalControl(!isEnabled);
    };

    return (
        <FormControl component="fieldset">
            <FormGroup>
                <FormLabel component="legend">Contrôle parental</FormLabel>
                <Switch
                    checked={isEnabled}
                    onChange={handleToggle}
                    name="parentalControlSwitch"
                    color="primary"
                />
                <Button onClick={handleToggle} variant="outlined">
                    {isEnabled ? 'Désactiver' : 'Activer'} le contrôle parental
                </Button>
            </FormGroup>
        </FormControl>
    );
};

export default ParentalControl;
