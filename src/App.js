
function App() {

  // const [result,SetResult] = ('');

  const HandleClick = (e)=>
  {
    const display = document.getElementById('display');
    console.log(e.innerHTML);
    document.form1.textView.value =  document.form1.textView.value + e.innerHTML;
  }

  const Calculate = () =>
  {
    let value = document.form1.textView.value;
    let result;
    if (value)
    {
      result = eval(value);
      document.form1.textView.value = result;
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


  return (
    <div className="App">
        <h1>Basic Calculator</h1>
          
          <div className="CalculatorHolder">

            <form name='form1' action="submit">
            <input className='display' id="display" type="text" name="textView"/>
                <table>
                  <tbody>
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
                      <td colSpan={2}><button type="button" onClick={(e) => HandleClick(e.target)}>+</button></td>
                      <td><button type="button" onClick={(e) => HandleClick(e.target)}>-</button></td>                      
                    </tr>

                    <tr>
                      <td colSpan={3}> <button type="button" onClick={Calculate}>=</button></td>
                    </tr>

                  </tbody>
                </table>
            </form>
          </div>
        
    </div>
  );
}

export default App;
