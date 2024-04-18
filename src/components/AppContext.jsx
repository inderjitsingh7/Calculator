import { createContext, useState, useEffect } from "react";
export const AppContext = createContext();

function AppContextProvider({ children }) {

    // ========================================
    const [Data, SetData] = useState(GET()) // ---------------

    if(Data == null){
        SetData([])
    }

    // Display value in Input tag
    const [DisplayValue, SetDisplayValue] = useState('');

    function BTNClick(e) {
        SetDisplayValue(DisplayValue + e.target.innerHTML);
    }


    let MyDATA

    // EQUAL Click
    function EqualClick() {
        if (DisplayValue == 0) {
            return
        }
        else {
            MyDATA = DisplayValue
            let sumAnswer = eval(DisplayValue);
            SetDisplayValue(sumAnswer)
            MyDATA += ' = ' + sumAnswer

            

            SetData([...Data, MyDATA]) // ---------------
        }
    }


    // SET & Get Value

    useEffect(() => {
        localStorage.setItem('HistoryData', JSON.stringify(Data))
    }, [Data])



    function GET() {
        let NewData = localStorage.getItem('HistoryData');
        if (NewData == []) {
            ['Empty History']
        }
        else {
            if(NewData == 'undefined'){
                return ['empty History']
            }
            else{
                return JSON.parse(NewData)
            }
        }
    }

    // Remove Data In Storage
    function removeData(){
        let RD = localStorage.removeItem('HistoryData');
        SetData(RD)
    }



    // Click Back & Remove last element for Display Value
    let afterDel
    let convertString

    function ClickBack() {

        if (typeof (DisplayValue) === 'number') {
            convertString = DisplayValue.toString()
            afterDel = convertString.slice(0, -1)
            SetDisplayValue(afterDel)
        }
        else {
            afterDel = DisplayValue.slice(0, -1)
            SetDisplayValue(afterDel)
        }
    }


    // Clear DisplayValue
    function ClearDisplayValue() {
        SetDisplayValue('')
    }

    // History Click && Active
    const [HistoryActive, SetHistoryActive] = useState(false);

    // Click Info
    const [ClickInfo , SetClickInfo] = useState(false)



    const value = {
        DisplayValue,
        SetDisplayValue,
        BTNClick,
        EqualClick,
        ClickBack,
        ClearDisplayValue,
        HistoryActive,
        SetHistoryActive,
        Data,
        removeData,
        ClickInfo ,
        SetClickInfo
    }

    return <AppContext.Provider value={value}>
        {children}
    </AppContext.Provider>


}
export default AppContextProvider;