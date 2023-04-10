
import { useRef, useState } from 'react';
import  ReactSwitch from 'react-switch';

function App() {

const [checked,SetChecked] = useState(true);

const gradient_color1 = useRef('');
const gradient_color2 = useRef('');
const color_deg = useRef('');


  const HandleClick = (e)=>
  {
    //const display = document.getElementById('display');
    console.log(e.innerHTML);
    document.form1.textView.value =  document.form1.textView.value + e.innerHTML;
  }

  const Calculate = () =>
  {
    let value = document.form1.textView.value;
    let result;
    if (value && value[value.length-1]!== '-' && value[value.length-1] !== '+' && value[value.length-1]!=='/' && value[value.length-1]!== '*')
    {
      result = Function("return " + value)()
      
      document.form1.textView.value = result;
    }else
    {
      alert ("Please Enter Valid Numbers And Make Sure theirs No Symbol Included At End Or Start Of Your Entered Amount");
    }
  }

    const BackSpace = () =>
    {
      let curValue = document.form1.textView.value;
      let  afterResult;
      if (curValue)
      {
        afterResult = curValue.substring(0, curValue.length-1);
        document.form1.textView.value = afterResult;
      }
    }

    const ChangeBodyColor = (value) =>
    {
      document.body.style.background = '';
      document.body.style.backgroundColor = value;
    }

    const HandleToggle = ()=>
    {
      if (checked)
      {
        SetChecked(false);
      }
      else
      {
        SetChecked(true);
      }
    }

    const ChangeFontColor = (value) =>
    {
      document.body.style.color = value;
      document.body.style.textShadow = '4px 4px 7px black';
      document.body.style.fontWeight = '900';
    }

    const MakeGradientAndAppyItIntoBody = () =>
    {
      document.body.style.background = `linear-gradient(${color_deg.current.value}deg,${gradient_color1.current.value}, ${gradient_color2.current.value})`;
      //console.log('Gradient Color1 '+ gradient_color1.current.value + "Color2 " + gradient_color2.current.value);
    }

  return (
    <div className="App">

        <h1>Change Your Color Scheme In Real Time</h1> <br />
      <div className='backgroundColorChanger'>Background Color <input type="color" onChange={(e) =>ChangeBodyColor(e.target.value)}/>
        <div>FontColorChanger <input type='color' onChange={(e)=> ChangeFontColor(e.target.value)} /> </div>
      </div>

      <div>Gradient Maker for Background
        <input type="color" onChange={MakeGradientAndAppyItIntoBody} ref={gradient_color1} />
        <input type="color" onChange={MakeGradientAndAppyItIntoBody} ref={gradient_color2} />
        <input type="text" onChange={MakeGradientAndAppyItIntoBody} placeholder='Enter Angle' ref={color_deg} />
      </div>
      <div>
         Toggle <ReactSwitch offHandleColor='#ffff' offColor='#7e0000' checked={checked} onChange={HandleToggle}/>
      </div>
      

      {
      checked? 
        <>
        <h1> Calculator</h1>
          
          <div className="CalculatorHolder">

            <form name='form1' action="submit">
                <table>
                  <tbody>
                    <tr>
                      <td colSpan={3}>
                        {/* <span className='display' id='display' name ='textView'></span> */}
                         <input disabled className='display' id="display" type="text" name="textView"/> 
                      </td>

                    </tr>
                    <tr>
                      <td colSpan={3}>
                        <button type="button" onClick={BackSpace}>backspace</button>
                      </td>
                    </tr>
                    <tr>
                      <td><button type="button" onClick={(e) => HandleClick(e.target)}>7</button></td>
                      <td><button type="button" onClick={(e) => HandleClick(e.target)}>8</button></td>
                      <td><button type="button" onClick={(e) => HandleClick(e.target)}>9</button></td>
                    </tr>

                    <tr>
                      <td><button type="button" onClick={(e) => HandleClick(e.target)}>4</button></td>
                      <td><button type="button" onClick={(e) => HandleClick(e.target)}>5</button></td>
                      <td><button type="button" onClick={(e) => HandleClick(e.target)}>6</button></td>
                    </tr>

                    <tr>
                      <td><button type="button" onClick={(e) => HandleClick(e.target)}>1</button></td>
                      <td><button type="button" onClick={(e) => HandleClick(e.target)}>2</button></td>
                      <td><button type="button" onClick={(e) => HandleClick(e.target)}>3</button></td>
                    </tr>

                    <tr>
                      <td ><button type="button" onClick={(e) => HandleClick(e.target)}>+</button></td>
                      <td><button type="button" onClick={(e) => HandleClick(e.target)}>-</button></td>                      
                      <td><button type="button" onClick={(e) => HandleClick(e.target)}>/</button></td>                      
                    </tr>
                    <tr>
                    <td><button type="button" onClick={(e) => HandleClick(e.target)}>*</button></td>                      
                    <td colSpan={2}> <button type="button" onClick={Calculate}>=</button></td>

                    </tr>
 
                  </tbody>
                </table>
            </form>
          </div>
        </>
      : <h1>Toggle To Enable Calculator</h1>
      }
        
        
    </div>
  );
}

export default App;
