import React from "react";
import '../styles/styles.css';

const DataInput = (props) => {
    const handleChange = (e) => {
        props.onDataInputChange(e.target);
    }

    const handleClick1 = () => {
        props.onBtnClick1();
    }

    const handleClick2 = () => {
        props.onBtnClick2();
    }
    
    return(
        <div>
            <div className="section">
                <form className="container1">
                    <div></div>
                    <div className="titleText unit">Inch</div>
                    <div className="titleText unit">Metric</div>

                    <div className="titleText">Diameter: </div>
                    <div>
                        <input className="item1" name="diaInch" type='number' value={props.diaInch} onChange={handleChange}/>
                        <span className="span1">in</span>
                    </div>
                    <div>
                        <input className="item1" name="diaMetric" type='number' value={props.diaMetric} onChange={handleChange}/>
                        <span className="span1">mm</span>
                    </div>
                    

                    <div className="titleText">Chipload: </div>
                    <div>
                        <input className="item1" name="CLInch" type='number' value={props.CLInch} onChange={handleChange}/>
                        <span className="span1">mil/rev</span>
                    </div>
                    <div>
                        <input className="item1" name="CLMetric" type='number' value={props.CLMetric} onChange={handleChange}/>
                        <span className="span1">um/rev</span>
                    </div>
                    

                    <div className="titleText">Cutting Speed: </div>
                    <div>
                        <input className="item1" name="CSInch" type='number' value={props.CSInch} onChange={handleChange}/>
                        <span className="span1">ft/min</span>
                    </div>
                    <div>
                        <input className="item1" name="CSMetric" type='number' value={props.CSMetric} onChange={handleChange}/>
                        <span className="span1">m/min</span>
                    </div>
                </form>
                <button className="calcBtn1" onClick={handleClick1}>Calc</button>
            </div>

            <hr/>

            <div className="section">
                <form className="container2">
                    <div className="titleText">Feed Rate: </div>
                    <div>
                        <input className="item1" name="FRInch" type='number' value={props.FRInch} onChange={handleChange}/>
                        <span className="span1">IPM</span>
                    </div>
                    <div>
                        <input className="item1" name="FRMetric" type='number' value={props.FRMetric} onChange={handleChange}/>
                        <span className="span1">m/min</span>
                    </div>
                    

                    <div className="titleText">Spindle Speed: </div>
                    <div className="sub-container">
                        <input className="item2" name="SS" type='number' value={props.SS} onChange={handleChange}/>
                        <span className="span2">K-RPM</span>
                    </div>
                </form>
                <button className="calcBtn2" onClick={handleClick2}>Calc</button>
            </div>
        </div>
    );
}

export default DataInput;