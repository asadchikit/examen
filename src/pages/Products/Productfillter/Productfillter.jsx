import React from 'react';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';
import "./productfillter.css";

function valuetext(value) {
    return `${value}°C`;
}

function Productfillter() {

    const [value, setValue] = React.useState([20, 37]);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <div className="productfillter">
            <div className="productfillter-block">

            <div className="productfillter-clear">
                <h1 className='productfillter-h1'>Filters</h1>
                <button className='productfillter-clear-all'>Clear all</button>
            </div>

            <div className="productfillter-brands-menu">
                <button className="productfillter-brands-menu-btn" >
                    Brands
                </button>
                <div className="productfillter-brands-menu-list">
                    <ul>
                        <li className="productfillter-li">
                            <label className="productfillter-li-label">
                                <input className="productfillter-checked" type="checkbox" /> Asus<li>(128)</li></label>
                        </li>
                        <li className="productfillter-li">
                            <label className="productfillter-li-label">
                                <input type="checkbox" /> Acer<li>(128)</li></label>
                        </li>
                        <li className="productfillter-li">
                            <label className="productfillter-li-label">
                                <input type="checkbox" />Apple<li>(128)</li></label>
                        </li>
                        <li className="productfillter-li">
                            <label className="productfillter-li-label">
                                <input type="checkbox" />Dell<li>(128)</li> </label>
                        </li>
                    </ul>
                </div>
            </div>

            <div className="productfillter-brands-menu-e">
                <button className="productfillter-brands-menu-btn" >
                    Brands
                </button>
            </div>

            <div className="productfillter-switch">
                <h1>Discount</h1>
                <FormGroup>
                    <FormControlLabel control={<Switch defaultChecked />} />
                </FormGroup>
            </div>

            <div className="productfillter-boxslider">
                <h1>Price</h1>
                <div className="productfillter-price-minmax">
                    <input className="productfillter-min" placeholder="min." />
                    <input className="productfillter-max" placeholder="max." />
                </div>
                <div className="productfillter-slider-price">
                    <Box sx={{ width: 240 }}>
                        <Slider
                            getAriaLabel={() => 'Temperature range'}
                            value={value}
                            onChange={handleChange}
                            valueLabelDisplay="auto"
                            getAriaValueText={valuetext}
                        />
                    </Box>
                </div>
            </div>

            <div className="productfillter-brands-menu">
                <button className="productfillter-brands-menu-btn" >
                    Brands
                </button>
                <div className="productfillter-brands-menu-list">
                    <ul>
                        <li className="productfillter-li">
                            <label className="productfillter-li-label">
                                <input className="productfillter-checked" type="checkbox" /> Asus<li>(128)</li></label>
                        </li>
                        <li className="productfillter-li">
                            <label className="productfillter-li-label">
                                <input type="checkbox" /> Acer<li>(128)</li></label>
                        </li>
                        <li className="productfillter-li">
                            <label className="productfillter-li-label">
                                <input type="checkbox" />Apple<li>(128)</li></label>
                        </li>
                        <li className="productfillter-li">
                            <label className="productfillter-li-label">
                                <input type="checkbox" />Dell<li>(128)</li> </label>
                        </li>
                    </ul>
                </div>
            </div>

            <div className="productfillter-brands-menu">
                <button className="productfillter-brands-menu-btn" >
                    Brands
                </button>
                <div className="productfillter-brands-menu-list">
                    <ul>
                        <li className="productfillter-li">
                            <label className="productfillter-li-label">
                                <input className="productfillter-checked" type="checkbox" /> Asus<li>(128)</li></label>
                        </li>
                        <li className="productfillter-li">
                            <label className="productfillter-li-label">
                                <input type="checkbox" /> Acer<li>(128)</li></label>
                        </li>
                        <li className="productfillter-li">
                            <label className="productfillter-li-label">
                                <input type="checkbox" />Apple<li>(128)</li></label>
                        </li>
                        <li className="productfillter-li">
                            <label className="productfillter-li-label">
                                <input type="checkbox" />Dell<li>(128)</li> </label>
                        </li>
                    </ul>
                </div>
            </div>

            <div className="productfillter-brands-menu">
                <button className="productfillter-brands-menu-btn" >
                    Brands
                </button>
                <div className="productfillter-brands-menu-list">
                    <ul>
                        <li className="productfillter-li">
                            <label className="productfillter-li-label">
                                <input className="productfillter-checked" type="checkbox" /> Asus<li>(128)</li></label>
                        </li>
                        <li className="productfillter-li">
                            <label className="productfillter-li-label">
                                <input type="checkbox" /> Acer<li>(128)</li></label>
                        </li>
                        <li className="productfillter-li">
                            <label className="productfillter-li-label">
                                <input type="checkbox" />Apple<li>(128)</li></label>
                        </li>
                        <li className="productfillter-li">
                            <label className="productfillter-li-label">
                                <input type="checkbox" />Dell<li>(128)</li> </label>
                        </li>
                    </ul>
                </div>
            </div>

        </div>
        </div>
    )
}

export default Productfillter;
