import * as React from 'react';
import { FormGroup } from '@mui/material';
import { Checkbox } from '@mui/material';
import { FormControlLabel } from '@mui/material';
import { FormControl } from '@mui/material';
import { FormLabel } from '@mui/material';
import { RadioGroup } from '@mui/material';
import { Radio } from '@mui/material';




function Filters(){
    return(
        <div>
            <div> Filter By:
            <FormGroup>
                <FormControlLabel control={<Checkbox />} label="Gold" />
                <FormControlLabel control={<Checkbox defaultChecked />} label="Silver" />
            </FormGroup>
            </div>

            <div> Sort By:
                <FormControl>
                    <FormLabel id="demo-radio-buttons-group-label">Gender</FormLabel>
                    <RadioGroup
                        aria-labelledby="demo-radio-buttons-group-label"
                        defaultValue="female"
                        name="radio-buttons-group"
                    >
                        <FormControlLabel value="female" control={<Radio />} label="Female" />
                        <FormControlLabel value="male" control={<Radio />} label="Male" />
                        <FormControlLabel value="other" control={<Radio />} label="Other" />
                    </RadioGroup>
                </FormControl>
            </div>
        

        </div>
      

        
    );

}

export default Filters;