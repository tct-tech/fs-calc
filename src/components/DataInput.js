/**
 * @Author: Your name
 * @Date:   2023-04-28 11:51:34
 * @Last Modified by:   Your name
 * @Last Modified time: 2024-02-28 15:13:41
 */
import React, { useEffect, useRef } from "react";
import '../styles/styles.css';

const DataInput = (props) => {
    const inputRef1 = useRef(null);
    const inputRef2 = useRef(null);
    const inputRef3 = useRef(null);
    const inputRef4 = useRef(null);
    const inputRef5 = useRef(null);
    const inputRef6 = useRef(null);
    const inputRef7 = useRef(null);
    const inputRef8 = useRef(null);
    const inputRef9 = useRef(null);
    const inputRef10 = useRef(null);
    const inputRef11 = useRef(null);

    const handleChange = (e) => {
        props.onDataInputChange(e.target);
    }

    const handleClick1 = () => {
        props.onBtnClick1();
    }

    const handleClick2 = () => {
        props.onBtnClick2();
    }

    const handleKeyPress = (e) => {
        if(e.code === 'Tab'){
            e.preventDefault();
            // Determine the current active element
            const activeElement = document.activeElement;

            if (activeElement === inputRef1.current && !props.diaInch){
                inputRef4.current.focus();
            }

            if (activeElement === inputRef4.current && !props.diaMetric){
                inputRef1.current.focus();
            }
            
            // Inch Route
            if (activeElement === inputRef1.current && props.diaInch) {
                inputRef2.current.focus();
            } else if(activeElement === inputRef2.current && props.CLInch && props.diaInch) {
                inputRef3.current.focus();
            } else if (activeElement === inputRef2.current && !props.CLInch && props.diaInch){
                inputRef8.current.focus();
            } else if (activeElement === inputRef3.current && props.CLInch && props.CSInch && props.diaInch){
                inputRef7.current.focus();
            } else if (activeElement === inputRef3.current && !props.CLInch && !props.CSInch && props.diaInch){
                inputRef8.current.focus();
            } else if (activeElement === inputRef8.current){
                inputRef9.current.focus();
            } else if (activeElement === inputRef9.current){
                inputRef11.current.focus();
            }

            // Metric Route
            if (activeElement === inputRef4.current && props.diaMetric) {
                inputRef5.current.focus();
            } else if(activeElement === inputRef5.current && props.CLMetric && props.diaMetric) {
                inputRef6.current.focus();
            } else if (activeElement === inputRef5.current && !props.CLMetric && props.diaMetric){
                inputRef10.current.focus();
            } else if (activeElement === inputRef6.current && props.CLMetric && props.CSMetric && props.diaMetric){
                inputRef7.current.focus();
            } else if (activeElement === inputRef6.current && !props.CLMetric && !props.CSMetric && props.diaMetric){
                inputRef10.current.focus();
            } else if (activeElement === inputRef10.current){
                inputRef9.current.focus();
            } else if (activeElement === inputRef9.current){
                inputRef11.current.focus();
            }
        }
    }
    
    useEffect(() => {
        window.addEventListener('keydown', handleKeyPress);
        return () => window.removeEventListener('keydown', handleKeyPress);
    });

    return(
        <div>
            <div className="section">
                <form className="container1">
                    <div></div>
                    <div className="titleText unit">Inch</div>
                    <div className="titleText unit">Metric</div>

                    <div className="small-screen-label titleText">Dia.</div>
                    <div className="large-screen-label titleText">Diameter: </div>
                    
                    <div>
                        <input inputmode="decimal" autoFocus ref={inputRef1} className="item1" name="diaInch" type='number' value={props.diaInch} onChange={handleChange}/>
                        <span className="span1">in</span>
                    </div>
                    <div>
                        <input inputmode="decimal" ref={inputRef4} className="item1" name="diaMetric" type='number' value={props.diaMetric} onChange={handleChange}/>
                        <span className="span1">mm</span>
                    </div>
                    

                    <div className="small-screen-label titleText">CL.</div>
                    <div className="large-screen-label titleText">Chipload: </div>
                    <div>
                        <input inputmode="decimal" ref={inputRef2} className="item1" name="CLInch" type='number' value={props.CLInch} onChange={handleChange}/>
                        <span className="span1">mil/rev</span>
                    </div>
                    <div>
                        <input inputmode="decimal" ref={inputRef5} className="item1" name="CLMetric" type='number' value={props.CLMetric} onChange={handleChange}/>
                        <span className="span1">um/rev</span>
                    </div>
                    

                    <div className="small-screen-label titleText">CS.</div>
                    <div className="large-screen-label titleText">Cutting Speed: </div>
                    <div>
                        <input inputmode="decimal" ref={inputRef3} className="item1" name="CSInch" type='number' value={props.CSInch} onChange={handleChange}/>
                        <span className="span1">ft/min</span>
                    </div>
                    <div>
                        <input inputmode="decimal" ref={inputRef6} className="item1" name="CSMetric" type='number' value={props.CSMetric} onChange={handleChange}/>
                        <span className="span1">m/min</span>
                    </div>
                </form>
                <button ref={inputRef7} className="calcBtn1" onClick={handleClick1}>Calc</button>
            </div>

            <hr/>

            <div className="section">
                <form className="container2">
                    <div className="small-screen-label titleText">FR.</div>
                    <div className="large-screen-label titleText">Feed Rate: </div>
                    <div>
                        <input inputmode="decimal" ref={inputRef8} className="item1" name="FRInch" type='number' value={props.FRInch} onChange={handleChange}/>
                        <span className="span1">IPM</span>
                    </div>
                    <div>
                        <input inputmode="decimal" ref={inputRef10} className="item1" name="FRMetric" type='number' value={props.FRMetric} onChange={handleChange}/>
                        <span className="span1">m/min</span>
                    </div>
                    

                    <div className="small-screen-label titleText">SS.</div>
                    <div className="large-screen-label titleText">Spindle Speed: </div>
                    <div className="sub-container">
                        <input inputmode="decimal" ref={inputRef9} className="item2" name="SS" type='number' value={props.SS} onChange={handleChange}/>
                        <span className="span2">K-RPM</span>
                    </div>
                </form>
                <button ref={inputRef11} className="calcBtn2" onClick={handleClick2}>Calc</button>
            </div>
        </div>
    );
}

export default DataInput;