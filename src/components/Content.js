import React, { useState, useEffect } from "react";
import DataInput from "./DataInput";
import '../styles/styles.css';


const Content = () => {
    const [diaInch, setDiaInch] = useState('');
    const [diaMetric, setDiaMetric] = useState('');
    const [CLInch, setCLInch] = useState('');
    const [CLMetric, setCLMetric] = useState('');
    const [CSInch, setCSInch] = useState('');
    const [CSMetric, setCSMetric] = useState('');
    const [FRInch, setFRInch] = useState('');
    const [FRMetric, setFRMetric] = useState('');
    const [SS, setSS] = useState('');

    const handleChange = (input) => {
        switch(input.name){
            case 'diaInch':
                setDiaInch(input.value);
                setDiaMetric((input.value * 25.4).toFixed(2));
                return;
            case 'diaMetric':
                setDiaMetric(input.value);
                setDiaInch((input.value / 25.4).toFixed(4));
                return;
            case 'CLInch':
                setCLInch(input.value);
                setCLMetric((input.value * 25.4).toFixed(0));
                return;
            case 'CLMetric':
                setCLMetric(input.value);
                setCLInch((input.value / 25.4).toFixed(2));
                return;
            case 'CSInch':
                setCSInch(input.value);
                setCSMetric((input.value * 0.3048).toFixed(0));
                return;
            case 'CSMetric':
                setCSMetric(input.value);
                setCSInch((input.value / 0.3048).toFixed(1));
                return;
            case 'FRInch':
                setFRInch(input.value);
                setFRMetric((input.value * 0.0254).toFixed(1));
                return;
            case 'FRMetric':
                setFRMetric(input.value);
                setFRInch((input.value / 0.0254).toFixed(0));
                return;
            case 'SS':
                setSS((Number(input.value)).toFixed(0));
                return;
            default:
                console.log('input err');
        }
    }

    const handleCalcBtnClick1 = () => {
        const tempSS = (12 * CSInch / 1000 / Math.PI / diaInch).toFixed(0);
        setSS(tempSS);
        setFRInch((CLInch * tempSS).toFixed(0));
        setFRMetric((CLMetric * tempSS / 1000).toFixed(1));
    }

    const handleCalcBtnClick2 = () => {
        setCLInch((FRInch / SS).toFixed(2));
        setCLMetric((FRInch / SS * 25.4).toFixed(0));
        setCSInch((diaInch * Math.PI * SS * 1000 / 12).toFixed(1));
        setCSMetric((diaInch * Math.PI * SS * 1000 / 12 * 0.3048).toFixed(0));
    }

    const handleResetBtnClick = () => {
        window.location.reload();
    }

    const handleKeyPress = (e) => {
        if(e.code === 'Space'){
            window.location.reload();
        }
        if(e.code === 'KeyB'){
            handleCalcBtnClick1();
        }
        if(e.code === 'KeyN'){
            handleCalcBtnClick2();
        }
    }

    useEffect(() => {
        window.addEventListener('keydown', handleKeyPress);
        return () => window.removeEventListener('keydown', handleKeyPress);
    });

    return(
        <div className="content">
            <DataInput
                onDataInputChange={handleChange}
                onBtnClick1={handleCalcBtnClick1}
                onBtnClick2={handleCalcBtnClick2}
                diaInch={diaInch}
                diaMetric={diaMetric}
                CLInch={CLInch}
                CLMetric={CLMetric}
                CSInch={CSInch}
                CSMetric={CSMetric}
                FRInch={FRInch}
                FRMetric={FRMetric}
                SS={SS}
            />
            <button className="resetBtn" onClick={handleResetBtnClick}>Reset</button>
        </div>
    );
}

export default Content;