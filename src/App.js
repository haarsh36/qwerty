import background2 from './background2.jpg';
import background3 from './background3.jpeg';
import background4 from './background4.jpg';
import background5 from './background5.jpg';
import parse from "html-react-parser";
import './App.css';

function App() {

  function blockgenrator(data, requiredBlocks) {
    let dataElement = '';
    let newString = data;

    if (typeof data === 'number') {
      // console.log('Its Number converted to string');
      newString = data.toString();
    }
    for (let index = 0; index < requiredBlocks; index++) {
      if (index < newString.length) {
        dataElement =
          dataElement +
          "<span className='blockSpan'>" +
          newString[index].toString() +
          '</span>';
        console.log(newString[index].toString());
      } else {
        dataElement = dataElement + "<span className='blockSpan'> </span>";
      }
    }
    return parse(dataElement);
  }


  return (
    <div className="App">
      <header className="">
        <div>
          <meta httpEquiv="Content-Type" content="text/html; charset=UTF-8" />
          <style type="text/css" dangerouslySetInnerHTML={{ __html: "\n        <!--\n           \n        span.cls_002 {\n            font-family: Arial, serif;\n            font-size: 8.1px;\n            color: rgb(29, 29, 29);\n            font-weight: bold;\n            font-style: normal;\n            text-decoration: none\n        }\n\n        div.cls_002 {\n            font-family: Arial, serif;\n            font-size: 8.1px;\n            color: rgb(29, 29, 29);\n            font-weight: bold;\n            font-style: normal;\n            text-decoration: none\n        }\n\n        span.cls_003 {\n            font-family: Arial, serif;\n            font-size: 6.9px;\n            color: rgb(29, 29, 29);\n            font-weight: bold;\n            font-style: normal;\n            text-decoration: none\n        }\n\n        div.cls_003 {\n            font-family: Arial, serif;\n            font-size: 6.9px;\n            color: rgb(29, 29, 29);\n            font-weight: bold;\n            font-style: normal;\n            text-decoration: none\n        }\n\n        span.cls_004 {\n            font-family: Arial, serif;\n            font-size: 5.9px;\n            color: rgb(29, 29, 29);\n            font-weight: bold;\n            font-style: normal;\n            text-decoration: none\n        }\n\n        div.cls_004 {\n            font-family: Arial, serif;\n            font-size: 5.9px;\n            color: rgb(29, 29, 29);\n            font-weight: bold;\n            font-style: normal;\n            text-decoration: none\n        }\n\n        span.cls_005 {\n            font-family: Arial, serif;\n            font-size: 5.9px;\n            color: rgb(29, 29, 29);\n            font-weight: normal;\n            font-style: normal;\n            text-decoration: none\n        }\n\n        div.cls_005 {\n            font-family: Arial, serif;\n            font-size: 5.9px;\n            color: rgb(29, 29, 29);\n            font-weight: normal;\n            font-style: normal;\n            text-decoration: none\n        }\n\n        span.cls_006 {\n            font-family: Arial, serif;\n            font-size: 5.9px;\n            color: rgb(145, 145, 145);\n            font-weight: bold;\n            font-style: normal;\n            text-decoration: none\n        }\n\n        div.cls_006 {\n            font-family: Arial, serif;\n            font-size: 5.9px;\n            color: rgb(145, 145, 145);\n            font-weight: bold;\n            font-style: normal;\n            text-decoration: none\n        }\n\n        span.cls_007 {\n            font-family: Arial, serif;\n            font-size: 5.9px;\n            color: rgb(166, 166, 166);\n            font-weight: bold;\n            font-style: normal;\n            text-decoration: none\n        }\n\n        div.cls_007 {\n            font-family: Arial, serif;\n            font-size: 5.9px;\n            color: rgb(166, 166, 166);\n            font-weight: bold;\n            font-style: normal;\n            text-decoration: none\n        }\n\n        span.cls_008 {\n            font-family: Arial, serif;\n            font-size: 5.9px;\n            color: rgb(29, 29, 29);\n            font-weight: bold;\n            font-style: normal;\n            text-decoration: none\n        }\n\n        div.cls_008 {\n            font-family: Arial, serif;\n            font-size: 5.9px;\n            color: rgb(29, 29, 29);\n            font-weight: bold;\n            font-style: normal;\n            text-decoration: none\n        }\n\n        span.cls_009 {\n            font-family: Arial, serif;\n            font-size: 5.9px;\n            color: rgb(29, 29, 29);\n            font-weight: normal;\n            font-style: normal;\n            text-decoration: none\n        }\n\n        div.cls_009 {\n            font-family: Arial, serif;\n            font-size: 5.9px;\n            color: rgb(29, 29, 29);\n            font-weight: normal;\n            font-style: normal;\n            text-decoration: none\n        }\n\n        span.cls_010 {\n            font-family: Arial, serif;\n            font-size: 5.9px;\n            color: rgb(145, 145, 145);\n            font-weight: bold;\n            font-style: normal;\n            text-decoration: none\n        }\n\n        div.cls_010 {\n            font-family: Arial, serif;\n            font-size: 5.9px;\n            color: rgb(145, 145, 145);\n            font-weight: bold;\n            font-style: normal;\n            text-decoration: none\n        }\n\n        span.cls_011 {\n            font-family: Arial, serif;\n            font-size: 8.9px;\n            color: rgb(29, 29, 29);\n            font-weight: bold;\n            font-style: normal;\n            text-decoration: none\n        }\n\n        div.cls_011 {\n            font-family: Arial, serif;\n            font-size: 8.9px;\n            color: rgb(29, 29, 29);\n            font-weight: bold;\n            font-style: normal;\n            text-decoration: none\n        }\n\n        span.cls_012 {\n            font-family: Arial, serif;\n            font-size: 7.0px;\n            color: rgb(29, 29, 29);\n            font-weight: bold;\n            font-style: normal;\n            text-decoration: none\n        }\n\n        div.cls_012 {\n            font-family: Arial, serif;\n            font-size: 7.0px;\n            color: rgb(29, 29, 29);\n            font-weight: bold;\n            font-style: normal;\n            text-decoration: none\n        }\n\n        span.cls_013 {\n            font-family: Arial, serif;\n            font-size: 6.0px;\n            color: rgb(29, 29, 29);\n            font-weight: bold;\n            font-style: normal;\n            text-decoration: none\n        }\n\n        div.cls_013 {\n            font-family: Arial, serif;\n            font-size: 6.0px;\n            color: rgb(29, 29, 29);\n            font-weight: bold;\n            font-style: normal;\n            text-decoration: none\n        }\n\n        span.cls_014 {\n            font-family: Arial, serif;\n            font-size: 6.0px;\n            color: rgb(29, 29, 29);\n            font-weight: normal;\n            font-style: normal;\n            text-decoration: none\n        }\n\n        div.cls_014 {\n            font-family: Arial, serif;\n            font-size: 6.0px;\n            color: rgb(29, 29, 29);\n            font-weight: normal;\n            font-style: normal;\n            text-decoration: none\n        }\n\n        span.cls_017 {\n            font-family: Arial, serif;\n            font-size: 6.0px;\n            color: rgb(166, 166, 166);\n            font-weight: bold;\n            font-style: normal;\n            text-decoration: none\n        }\n\n        div.cls_017 {\n            font-family: Arial, serif;\n            font-size: 6.0px;\n            color: rgb(166, 166, 166);\n            font-weight: bold;\n            font-style: normal;\n            text-decoration: none\n        }\n\n        span.cls_018 {\n            font-family: Arial, serif;\n            font-size: 6.0px;\n            color: rgb(145, 145, 145);\n            font-weight: bold;\n            font-style: normal;\n            text-decoration: none\n        }\n\n        div.cls_018 {\n            font-family: Arial, serif;\n            font-size: 6.0px;\n            color: rgb(145, 145, 145);\n            font-weight: bold;\n            font-style: normal;\n            text-decoration: none\n        }\n\n        span.cls_015 {\n            font-family: Arial, serif;\n            font-size: 6.0px;\n            color: rgb(29, 29, 29);\n            font-weight: normal;\n            font-style: normal;\n            text-decoration: none\n        }\n\n        div.cls_015 {\n            font-family: Arial, serif;\n            font-size: 6.0px;\n            color: rgb(29, 29, 29);\n            font-weight: normal;\n            font-style: normal;\n            text-decoration: none\n        }\n\n        span.cls_016 {\n            font-family: Arial, serif;\n            font-size: 5.8px;\n            color: rgb(29, 29, 29);\n            font-weight: normal;\n            font-style: normal;\n            text-decoration: none\n        }\n\n        div.cls_016 {\n            font-family: Arial, serif;\n            font-size: 5.8px;\n            color: rgb(29, 29, 29);\n            font-weight: normal;\n            font-style: normal;\n            text-decoration: none\n        }\n\n        span.cls_019 {\n            font-family: Arial, serif;\n            font-size: 7.0px;\n            color: rgb(29, 29, 29);\n            font-weight: bold;\n            font-style: normal;\n            text-decoration: none\n        }\n\n        div.cls_019 {\n            font-family: Arial, serif;\n            font-size: 7.0px;\n            color: rgb(29, 29, 29);\n            font-weight: bold;\n            font-style: normal;\n            text-decoration: none\n        }\n\n        span.cls_020 {\n            font-family: Arial, serif;\n            font-size: 7.0px;\n            color: rgb(29, 29, 29);\n            font-weight: normal;\n            font-style: normal;\n            text-decoration: none\n        }\n\n        div.cls_020 {\n            font-family: Arial, serif;\n            font-size: 7.0px;\n            color: rgb(29, 29, 29);\n            font-weight: normal;\n            font-style: normal;\n            text-decoration: none\n        }\n\n        span.cls_021 {\n            font-family: Arial, serif;\n            font-size: 6.7px;\n            color: rgb(29, 29, 29);\n            font-weight: normal;\n            font-style: normal;\n            text-decoration: none\n        }\n\n        div.cls_021 {\n            font-family: Arial, serif;\n            font-size: 6.7px;\n            color: rgb(29, 29, 29);\n            font-weight: normal;\n            font-style: normal;\n            text-decoration: none\n        }\n\n        span.cls_036 {\n            font-family: Arial, serif;\n            font-size: 10.0px;\n            color: rgb(43, 42, 41);\n            font-weight: normal;\n            font-style: normal;\n            text-decoration: underline\n        }\n\n        div.cls_036 {\n            font-family: Arial, serif;\n            font-size: 10.0px;\n            color: rgb(43, 42, 41);\n            font-weight: normal;\n            font-style: normal;\n            text-decoration: none\n        }\n\n        span.cls_024 {\n            font-family: \"Calibri\", serif;\n            font-size: 11.1px;\n            color: rgb(43, 42, 41);\n            font-weight: normal;\n            font-style: normal;\n            text-decoration: none\n        }\n\n        div.cls_024 {\n            font-family: \"Calibri\", serif;\n            font-size: 11.1px;\n            color: rgb(43, 42, 41);\n            font-weight: normal;\n            font-style: normal;\n            text-decoration: none\n        }\n\n        span.cls_025 {\n            font-family: \"Calibri Bold\", serif;\n            font-size: 9.0px;\n            color: rgb(43, 42, 41);\n            font-weight: bold;\n            font-style: normal;\n            text-decoration: none\n        }\n\n        div.cls_025 {\n            font-family: \"Calibri Bold\", serif;\n            font-size: 9.0px;\n            color: rgb(43, 42, 41);\n            font-weight: bold;\n            font-style: normal;\n            text-decoration: none\n        }\n\n        span.cls_037 {\n            font-family: \"Calibri Bold\", serif;\n            font-size: 10.0px;\n            color: rgb(43, 42, 41);\n            font-weight: bold;\n            font-style: normal;\n            text-decoration: underline\n        }\n\n        div.cls_037 {\n            font-family: \"Calibri Bold\", serif;\n            font-size: 10.0px;\n            color: rgb(43, 42, 41);\n            font-weight: bold;\n            font-style: normal;\n            text-decoration: none\n        }\n\n        span.cls_027 {\n            font-family: \"Calibri Bold\", serif;\n            font-size: 11.1px;\n            color: rgb(43, 42, 41);\n            font-weight: bold;\n            font-style: normal;\n            text-decoration: none\n        }\n\n        div.cls_027 {\n            font-family: \"Calibri Bold\", serif;\n            font-size: 11.1px;\n            color: rgb(43, 42, 41);\n            font-weight: bold;\n            font-style: normal;\n            text-decoration: none\n        }\n\n        span.cls_029 {\n            font-family: \"Calibri Bold Italic\", serif;\n            font-size: 11.1px;\n            color: rgb(43, 42, 41);\n            font-weight: bold;\n            font-style: italic;\n            text-decoration: none\n        }\n\n        div.cls_029 {\n            font-family: \"Calibri Bold Italic\", serif;\n            font-size: 11.1px;\n            color: rgb(43, 42, 41);\n            font-weight: bold;\n            font-style: italic;\n            text-decoration: none\n        }\n\n        span.cls_030 {\n            font-family: Arial, serif;\n            font-size: 11.1px;\n            color: rgb(43, 42, 41);\n            font-weight: normal;\n            font-style: normal;\n            text-decoration: none\n        }\n\n        div.cls_030 {\n            font-family: Arial, serif;\n            font-size: 11.1px;\n            color: rgb(43, 42, 41);\n            font-weight: normal;\n            font-style: normal;\n            text-decoration: none\n        }\n\n        span.cls_031 {\n            font-family: \"Calibri\", serif;\n            font-size: 10.6px;\n            color: rgb(43, 42, 41);\n            font-weight: normal;\n            font-style: normal;\n            text-decoration: none\n        }\n\n        div.cls_031 {\n            font-family: \"Calibri\", serif;\n            font-size: 10.6px;\n            color: rgb(43, 42, 41);\n            font-weight: normal;\n            font-style: normal;\n            text-decoration: none\n        }\n\n        span.cls_032 {\n            font-family: \"Calibri Bold\", serif;\n            font-size: 10.6px;\n            color: rgb(43, 42, 41);\n            font-weight: bold;\n            font-style: normal;\n            text-decoration: none\n        }\n\n        div.cls_032 {\n            font-family: \"Calibri Bold\", serif;\n            font-size: 10.6px;\n            color: rgb(43, 42, 41);\n            font-weight: bold;\n            font-style: normal;\n            text-decoration: none\n        }\n        -->\n         .spanBox {\n\t\t\tfont-size: 1em;\n\t\t\ttext-align: center;\n\t\t\tdisplay: inline-block;\n\t\t\tborder: 1px solid rgb(157, 147, 147);\n\t\t\tvertical-align: middle;\n\t\t\tline-height: 13px;\n\t\t\twidth: 7px;\n\t\t\theight: 7px;\n\t\t\tmargin-top: -19px;\n\t\t\tmargin-left: -1px;\n\t\t\tmargin-top: 2px;\n\n\t\t}\n         .spanLine {\n\t\t\tfont-size: 10.5px;\n\t\t\tdisplay: inline-block;\n\t\t\tborder-bottom: 1px solid #444;\n\t\t\tvertical-align: middle;\n\t\t\tline-height: 2px;\n\t\t\twidth: 10px;\n\t\t\theight: 9px;\n\t\t\tmargin-top: 0px;\n\t\t\tmargin-left: -4.35px;\n\t\t\tfont-size: 1em;\n\t\t\tpadding: 0px !important;\n\t\t\tmargin-top: 5px;\n\t\t}\n    " }} />
          <div style={{ position: 'absolute', left: '50%', marginLeft: '-306px', top: '15px', width: '612px', height: '792px', borderStyle: 'outset', overflow: 'hidden' }}>
            <div style={{ position: 'absolute', left: '0px', top: '0px' }}>
              <div style={{ position: 'absolute', left: '0px', top: '0px' }}>
              <div style={{ position: 'absolute', left: '58.25px', top: '599.55px' }} className="cls_003">
              <div className='Part2TopLine'>
              
              <hr className='horizontalRule' />
            </div>
            <div className='TabelMain'>
              <div className='Tabeltab1'>
                <span className='TabelData1'>SL. No.</span>
                <span className='TabelData1'>1</span>
                <span className='TabelData1'>2</span>
                <span className='TabelData1'>3</span>
                <span className='TabelData1'>4</span>
                <span className='TabelData1'>5</span>
                <span className='TabelData1'>6</span>
                <span className='TabelData1'>7</span>
                <span className='TabelData1'>8</span>
                <span className='TabelData1'>9</span>
                <span className='TabelData1'>10</span>
              </div>
              <div className='Tabeltab2'>
                <span className='TabelData1'>Bill No.</span>
                <span className='TabelData1'>2</span>
                <span className='TabelData1'> </span>
                <span className='TabelData1'> </span>
                <span className='TabelData1'> </span>
                <span className='TabelData1'> </span>
                <span className='TabelData1'> </span>
                <span className='TabelData1'> </span>
                <span className='TabelData1'> </span>
                <span className='TabelData1'> </span>
                <span className='TabelData1'> </span>
              </div>
              <div className='Tabeltab3' >
                <span className='TabelData1'>Date</span>
                <div>

                <div style={{marginBottom: '-3px'}}>
                  <span className='AmtblockSpan'></span>
                  <span className='AmtblockSpan'></span>
                  <span className='AmtblockSpan'></span>
                  <span className='AmtblockSpan'></span>
                  <span className='AmtblockSpan'></span>
                  <span className='AmtblockSpan'></span>   
                </div>

                <div style={{marginBottom: '-3px'}}>
                  <span className='AmtblockSpan'></span>
                  <span className='AmtblockSpan'></span>
                  <span className='AmtblockSpan'></span>
                  <span className='AmtblockSpan'></span>
                  <span className='AmtblockSpan'></span>
                  <span className='AmtblockSpan'></span>
                  
                </div>
                <div style={{marginBottom: '-3px'}}>
                  <span className='AmtblockSpan'></span>
                  <span className='AmtblockSpan'></span>
                  <span className='AmtblockSpan'></span>
                  <span className='AmtblockSpan'></span>
                  <span className='AmtblockSpan'></span>
                  <span className='AmtblockSpan'></span>
                  
                </div>

                <div style={{marginBottom: '-3px'}}>
                  <span className='AmtblockSpan'></span>
                  <span className='AmtblockSpan'></span>
                  <span className='AmtblockSpan'></span>
                  <span className='AmtblockSpan'></span>
                  <span className='AmtblockSpan'></span>
                  <span className='AmtblockSpan'></span>
                  
                </div>

                <div style={{marginBottom: '-3px'}}>
                  <span className='AmtblockSpan'></span>
                  <span className='AmtblockSpan'></span>
                  <span className='AmtblockSpan'></span>
                  <span className='AmtblockSpan'></span>
                  <span className='AmtblockSpan'></span>
                  <span className='AmtblockSpan'></span>
                  
                </div>

                <div style={{marginBottom: '-3px'}}>
                  <span className='AmtblockSpan'></span>
                  <span className='AmtblockSpan'></span>
                  <span className='AmtblockSpan'></span>
                  <span className='AmtblockSpan'></span>
                  <span className='AmtblockSpan'></span>
                  <span className='AmtblockSpan'></span>
                  
                </div>

                <div style={{marginBottom: '-3px'}}>
                  <span className='AmtblockSpan'></span>
                  <span className='AmtblockSpan'></span>
                  <span className='AmtblockSpan'></span>
                  <span className='AmtblockSpan'></span>
                  <span className='AmtblockSpan'></span>
                  <span className='AmtblockSpan'></span>  
                </div>

                <div style={{marginBottom: '-3px'}}>
                  <span className='AmtblockSpan'></span>
                  <span className='AmtblockSpan'></span>
                  <span className='AmtblockSpan'></span>
                  <span className='AmtblockSpan'></span>
                  <span className='AmtblockSpan'></span>
                  <span className='AmtblockSpan'></span>
                  
                </div>
                <div style={{marginBottom: '-3px'}}>
                  <span className='AmtblockSpan'></span>
                  <span className='AmtblockSpan'></span>
                  <span className='AmtblockSpan'></span>
                  <span className='AmtblockSpan'></span>
                  <span className='AmtblockSpan'></span>
                  <span className='AmtblockSpan'></span>
                  
                </div>
                

                <div style={{marginBottom: '-3px'}}>
                  <span className='AmtblockSpan'></span>
                  <span className='AmtblockSpan'></span>
                  <span className='AmtblockSpan'></span>
                  <span className='AmtblockSpan'></span>
                  <span className='AmtblockSpan'></span>
                  <span className='AmtblockSpan'></span>
                  
                </div>
                
                </div>
              </div>
              <div className='Tabeltab4'>
                <span className='TabelData1'>Issued by</span>
                <span className='TabelData1'> </span>
                <span className='TabelData1'> </span>
                <span className='TabelData1'> </span>
                <span className='TabelData1'> </span>
                <span className='TabelData1'> </span>
                <span className='TabelData1'> </span>
                <span className='TabelData1'> </span>
                <span className='TabelData1'> </span>
                <span className='TabelData1'> </span>
                <span className='TabelData1'> </span>
              </div>
              <div className='Tabeltab5'>
                <span
                  className='TabelData1'
                  style={{ paddingLeft: '4px', textAlign: 'left' }}
                >
                  Towards
                </span>
                <span
                  className='TabelData1'
                  style={{ paddingLeft: '4px', textAlign: 'left' }}
                >
                  Hospital main Bill
                </span>
                <span
                  className='TabelData1'
                  style={{ paddingLeft: '4px', textAlign: 'left' }}
                >
                  Pre-hospitalization Bills: Nos
                </span>
                <span
                  className='TabelData1'
                  style={{ paddingLeft: '4px', textAlign: 'left' }}
                >
                  Post-hospitalization Bills: Nos
                </span>
                <span
                  className='TabelData1'
                  style={{ paddingLeft: '4px', textAlign: 'left' }}
                >
                  Pharmacy Bills
                </span>
                <span
                  className='TabelData1'
                  style={{ paddingLeft: '4px', textAlign: 'left' }}
                >
                  {' '}
                </span>
                <span
                  className='TabelData1'
                  style={{ paddingLeft: '4px', textAlign: 'left' }}
                >
                  {' '}
                </span>
                <span
                  className='TabelData1'
                  style={{ paddingLeft: '4px', textAlign: 'left' }}
                >
                  {' '}
                </span>
                <span
                  className='TabelData1'
                  style={{ paddingLeft: '4px', textAlign: 'left' }}
                >
                  {' '}
                </span>
                <span
                  className='TabelData1'
                  style={{ paddingLeft: '4px', textAlign: 'left' }}
                >
                  {' '}
                </span>
                <span
                  className='TabelData1'
                  style={{ paddingLeft: '4px', textAlign: 'left' }}
                >
                  {' '}
                </span>
              </div>
              <div className='Tabeltab6'>
                <span className='TabelData1'>Amount (Rs)</span>
                
                <div>

                  <div >
                  <span className='AmtblockSpan'></span>
                  <span className='AmtblockSpan'></span>
                  <span className='AmtblockSpan'></span>
                  <span className='AmtblockSpan'></span>
                  <span className='AmtblockSpan'></span>
                  <span className='AmtblockSpan'></span>
                  <span className='AmtblockSpan'></span>
                  </div>
                  <div style={{marginTop: '-3px'}}>
                  <span className='AmtblockSpan'></span>
                  <span className='AmtblockSpan'></span>
                  <span className='AmtblockSpan'></span>
                  <span className='AmtblockSpan'></span>
                  <span className='AmtblockSpan'></span>
                  <span className='AmtblockSpan'></span>
                  <span className='AmtblockSpan'></span>
                  </div>
                  <div style={{marginTop: '-3px'}}>
                  <span className='AmtblockSpan'></span>
                  <span className='AmtblockSpan'></span>
                  <span className='AmtblockSpan'></span>
                  <span className='AmtblockSpan'></span>
                  <span className='AmtblockSpan'></span>
                  <span className='AmtblockSpan'></span>
                  <span className='AmtblockSpan'></span>
                  </div>
                  <div style={{marginTop: '-3px'}}>
                  <span className='AmtblockSpan'></span>
                  <span className='AmtblockSpan'></span>
                  <span className='AmtblockSpan'></span>
                  <span className='AmtblockSpan'></span>
                  <span className='AmtblockSpan'></span>
                  <span className='AmtblockSpan'></span>
                  <span className='AmtblockSpan'></span>
                  </div>
                  <div style={{marginTop: '-3px'}}>
                  <span className='AmtblockSpan'></span>
                  <span className='AmtblockSpan'></span>
                  <span className='AmtblockSpan'></span>
                  <span className='AmtblockSpan'></span>
                  <span className='AmtblockSpan'></span>
                  <span className='AmtblockSpan'></span>
                  <span className='AmtblockSpan'></span>
                  </div>
                  <div style={{marginTop: '-3px'}}>
                  <span className='AmtblockSpan'></span>
                  <span className='AmtblockSpan'></span>
                  <span className='AmtblockSpan'></span>
                  <span className='AmtblockSpan'></span>
                  <span className='AmtblockSpan'></span>
                  <span className='AmtblockSpan'></span>
                  <span className='AmtblockSpan'></span>
                  </div>
                  <div style={{marginTop: '-3px'}}>
                  <span className='AmtblockSpan'></span>
                  <span className='AmtblockSpan'></span>
                  <span className='AmtblockSpan'></span>
                  <span className='AmtblockSpan'></span>
                  <span className='AmtblockSpan'></span>
                  <span className='AmtblockSpan'></span>
                  <span className='AmtblockSpan'></span>
                  </div><div style={{marginTop: '-3px'}}>
                  <span className='AmtblockSpan'></span>
                  <span className='AmtblockSpan'></span>
                  <span className='AmtblockSpan'></span>
                  <span className='AmtblockSpan'></span>
                  <span className='AmtblockSpan'></span>
                  <span className='AmtblockSpan'></span>
                  <span className='AmtblockSpan'></span>
                  </div><div style={{marginTop: '-3px'}}>
                  <span className='AmtblockSpan'></span>
                  <span className='AmtblockSpan'></span>
                  <span className='AmtblockSpan'></span>
                  <span className='AmtblockSpan'></span>
                  <span className='AmtblockSpan'></span>
                  <span className='AmtblockSpan'></span>
                  <span className='AmtblockSpan'></span>
                  </div>
                  <div style={{marginTop: '-3px'}}>
                  <span className='AmtblockSpan'></span>
                  <span className='AmtblockSpan'></span>
                  <span className='AmtblockSpan'></span>
                  <span className='AmtblockSpan'></span>
                  <span className='AmtblockSpan'></span>
                  <span className='AmtblockSpan'></span>
                  <span className='AmtblockSpan'></span>
                  </div>
                  
                  <span className='tab6Blocks'> </span>
      
                </div>
                

              </div>
            </div>
            {/* new Line */}
            {/* DETAILS OF BILLS ENCLOSED: */}
                
                </div>
              </div>
            </div>
            <div style={{ position: 'absolute', left: '50.14px', top: '19.98px' }} className="cls_002"><span className="cls_002"> CLAIM FORM - PART
              A' to 'CLAIM FORM FOR HEALTH INSURANCE POLICIES OTHER THAN TRAVEL AND PERSONAL ACCIDENT - PART A</span>
            </div>
            <div style={{ position: 'absolute', left: '246.22px', top: '29.93px' }} className="cls_003"><span className="cls_003">TO BE FILLED BY
              THE INSURED</span></div>
            <div style={{ position: 'absolute', left: '465.60px', top: '32.30px' }} className="cls_004"><span className="cls_004">(To be Filled in
              block letters)</span></div>
            <div style={{ position: 'absolute', left: '204.34px', top: '37.41px' }} className="cls_004"><span className="cls_004">The issue of this
              Form is not to be taken as an admission of liablity</span></div>
            <div style={{ position: 'absolute', left: '52.70px', top: '50.14px' }} className="cls_004"><span className="cls_004">DETAILS OF PRIMARY
              INSURED:</span></div>
            <div style={{ position: 'absolute', left: '53.63px', top: '62.69px' }} className="cls_005"><span className="cls_005">a) Policy
              No :</span>
              {blockgenrator('446464461', 20)}
              {/* <span className="spanBox" />
              <span className="spanBox" />
              <span className="spanBox" />
              <span className="spanBox" />
              <span className="spanBox" />
              <span className="spanBox" />
              <span className="spanBox" />
              <span className="spanBox" />
              <span className="spanBox" />
              <span className="spanBox" />
              <span className="spanBox" />
              <span className="spanBox" />
              <span className="spanBox" />
              <span className="spanBox" />
              <span className="spanBox" />
              <span className="spanBox" />
              <span className="spanBox" />
              <span className="spanBox" />
              <span className="spanBox" />
              <span className="spanBox" /> */}</div>
            <div style={{ position: 'absolute', left: '318.59px', top: '62.26px' }} className="cls_005"><span className="cls_005">b) Sl. No/
              Certificate no.</span>
              {blockgenrator('1234567891', 10)}
              {/*<span className="spanBox" />
              <span className="spanBox" />
              <span className="spanBox" />
              <span className="spanBox" />
              <span className="spanBox" />
              <span className="spanBox" />
              <span className="spanBox" />
              <span className="spanBox" />
              <span className="spanBox" />
              <span className="spanBox" /> */}
              </div>
            <div style={{ position: 'absolute', left: '52.67px', top: '75.32px' }} className="cls_005"><span className="cls_005">c) Company/ TPA ID
              No:</span>
              {blockgenrator('237592375937934', 17)}
              {/*<span className="spanBox" />
              <span className="spanBox" />
              <span className="spanBox" />
              <span className="spanBox" />
              <span className="spanBox" />
              <span className="spanBox" />
              <span className="spanBox" />
              <span className="spanBox" />
              <span className="spanBox" />
              <span className="spanBox" />
              <span className="spanBox" />
              <span className="spanBox" />
              <span className="spanBox" />
              <span className="spanBox" />
              <span className="spanBox" />
              <span className="spanBox" />
            <span className="spanBox" />*/}
              </div>
            <div style={{ position: 'absolute', left: '52.67px', top: '87.74px' }} className="cls_005"><span className="cls_005">d) Name:</span>
            {blockgenrator('Harsh Diwan Sagar', 40)}
            {/*<span className="spanBox" />
              <span className="spanBox" />
              <span className="spanBox" />
              <span className="spanBox" />
              <span className="spanBox" />
              <span className="spanBox" />
              <span className="spanBox" />
              <span className="spanBox" />
              <span className="spanBox" />
              <span className="spanBox" />
              <span className="spanBox" />
              <span className="spanBox" />
              <span className="spanBox" />
              <span className="spanBox" />
              <span className="spanBox" />
              <span className="spanBox" />
              <span className="spanBox" />
              <span className="spanBox" />
              <span className="spanBox" />
              <span className="spanBox" />
              <span className="spanBox" />
              <span className="spanBox" />
              <span className="spanBox" />
              <span className="spanBox" />
              <span className="spanBox" />
              <span className="spanBox" />
              <span className="spanBox" />
              <span className="spanBox" />
              <span className="spanBox" />
              <span className="spanBox" />
              <span className="spanBox" />
              <span className="spanBox" />
              <span className="spanBox" />
              <span className="spanBox" />
              <span className="spanBox" />
              <span className="spanBox" />
              <span className="spanBox" />
              <span className="spanBox" />
              <span className="spanBox" />
              <span className="spanBox" />*/}
            </div>
            <div style={{ position: 'absolute', left: '111.35px', top: '88.85px' }} className="cls_006"><span className="cls_006" /></div>
            <div style={{ position: 'absolute', left: '122.49px', top: '88.85px' }} className="cls_006"><span className="cls_006" /></div>
            <div style={{ position: 'absolute', left: '133.91px', top: '88.85px' }} className="cls_006"><span className="cls_006" /></div>
            <div style={{ position: 'absolute', left: '145.33px', top: '88.85px' }} className="cls_006"><span className="cls_006" /></div>
            <div style={{ position: 'absolute', left: '156.74px', top: '88.85px' }} className="cls_006"><span className="cls_006" /></div>
            <div style={{ position: 'absolute', left: '168.16px', top: '88.85px' }} className="cls_006"><span className="cls_006" /></div>
            <div style={{ position: 'absolute', left: '180.13px', top: '88.85px' }} className="cls_006"><span className="cls_006" /></div>
            <div style={{ position: 'absolute', left: '249.39px', top: '88.85px' }} className="cls_006"><span className="cls_006" /></div>
            <div style={{ position: 'absolute', left: '261.26px', top: '88.85px' }} className="cls_006"><span className="cls_006" /></div>
            <div style={{ position: 'absolute', left: '271.48px', top: '88.85px' }} className="cls_006"><span className="cls_006" /></div>
            <div style={{ position: 'absolute', left: '283.90px', top: '88.85px' }} className="cls_006"><span className="cls_006" /></div>
            <div style={{ position: 'absolute', left: '296.05px', top: '88.85px' }} className="cls_006"><span className="cls_006" /></div>
            <div style={{ position: 'absolute', left: '318.19px', top: '88.85px' }} className="cls_006"><span className="cls_006" /></div>
            <div style={{ position: 'absolute', left: '329.67px', top: '88.85px' }} className="cls_006"><span className="cls_006" /></div>
            <div style={{ position: 'absolute', left: '341.14px', top: '88.85px' }} className="cls_006"><span className="cls_006" /></div>
            <div style={{ position: 'absolute', left: '353.18px', top: '88.85px' }} className="cls_006"><span className="cls_006" /></div>
            <div style={{ position: 'absolute', left: '387.14px', top: '88.85px' }} className="cls_007"><span className="cls_007" /></div>
            <div style={{ position: 'absolute', left: '399.41px', top: '88.85px' }} className="cls_007"><span className="cls_007" /></div>
            <div style={{ position: 'absolute', left: '410.31px', top: '88.85px' }} className="cls_007"><span className="cls_007" /></div>
            <div style={{ position: 'absolute', left: '422.03px', top: '88.85px' }} className="cls_007"><span className="cls_007" /></div>
            <div style={{ position: 'absolute', left: '433.75px', top: '88.85px' }} className="cls_007"><span className="cls_007" /></div>
            <div style={{ position: 'absolute', left: '444.91px', top: '88.85px' }} className="cls_007"><span className="cls_007" /></div>
            <div style={{ position: 'absolute', left: '468.64px', top: '88.85px' }} className="cls_006"><span className="cls_006" /></div>
            <div style={{ position: 'absolute', left: '479.57px', top: '88.85px' }} className="cls_006"><span className="cls_006" /></div>
            <div style={{ position: 'absolute', left: '490.49px', top: '88.85px' }} className="cls_006"><span className="cls_006" /></div>
            <div style={{ position: 'absolute', left: '501.96px', top: '88.85px' }} className="cls_006"><span className="cls_006" /></div>
            <div style={{ position: 'absolute', left: '52.67px', top: '100.72px' }} className="cls_005"><span className="cls_005">e)
              Address:</span>
              {blockgenrator('E-8 H.no 32 Akanksha Enclave Areara Colony', 80)}
              {/*<span className="spanBox" />
              <span className="spanBox" />
              <span className="spanBox" />
              <span className="spanBox" />
              <span className="spanBox" />
              <span className="spanBox" />
              <span className="spanBox" />
              <span className="spanBox" />
              <span className="spanBox" />
              <span className="spanBox" />
              <span className="spanBox" />
              <span className="spanBox" />
              <span className="spanBox" />
              <span className="spanBox" />
              <span className="spanBox" />
              <span className="spanBox" />
              <span className="spanBox" />
              <span className="spanBox" />
              <span className="spanBox" />
              <span className="spanBox" />
              <span className="spanBox" />
              <span className="spanBox" />
              <span className="spanBox" />
              <span className="spanBox" />
              <span className="spanBox" />
              <span className="spanBox" />
              <span className="spanBox" />
              <span className="spanBox" />
              <span className="spanBox" />
              <span className="spanBox" />
              <span className="spanBox" />
              <span className="spanBox" />
              <span className="spanBox" />
              <span className="spanBox" />
              <span className="spanBox" />
              <span className="spanBox" />
              <span className="spanBox" />
              <span className="spanBox" />
              <span className="spanBox" />
              <span className="spanBox" />
              <span className="spanBox" />
              <span className="spanBox" />
              <span className="spanBox" />
              <span className="spanBox" />
              <span className="spanBox" />
              <span className="spanBox" />
              <span className="spanBox" />
              <span className="spanBox" />
              <span className="spanBox" />
              <span className="spanBox" />
              <span className="spanBox" />
              <span className="spanBox" />
              <span className="spanBox" />
              <span className="spanBox" />
              <span className="spanBox" />
              <span className="spanBox" />
              <span className="spanBox" />
              <span className="spanBox" />
              <span className="spanBox" />
              <span className="spanBox" />
              <span className="spanBox" />
              <span className="spanBox" />
              <span className="spanBox" />
              <span className="spanBox" />
              <span className="spanBox" />
              <span className="spanBox" />
              <span className="spanBox" />
              <span className="spanBox" />
              <span className="spanBox" />
              <span className="spanBox" />
              <span className="spanBox" />
              <span className="spanBox" />
              <span className="spanBox" />
              <span className="spanBox" />
              <span className="spanBox" />
              <span className="spanBox" />
              <span className="spanBox" />
            <span className="spanBox" />*/}
               </div>
            <div style={{ position: 'absolute', left: '85.48px', top: '124.39px' }} className="cls_005"><span className="cls_005">City:</span>
            {blockgenrator('Bhopal', 19)}
             
            </div>
            <div style={{ position: 'absolute', left: '319.35px', top: '124.39px' }} className="cls_005"><span className="cls_005">State:</span>
            {blockgenrator('Madhya Pradesh', 20)}
            
            </div>
            <div style={{ position: 'absolute', left: '85.48px', top: '137.72px' }} className="cls_005"><span className="cls_005">Pin Code</span>
            {blockgenrator('462039', 6)}
            </div>
            <div style={{ position: 'absolute', left: '195.24px', top: '137.72px' }} className="cls_005"><span className="cls_005">Phone No:</span>
            {blockgenrator('9039758636', 10)}
            </div>
            <div style={{ position: 'absolute', left: '357.62px', top: '137.72px' }} className="cls_005"><span className="cls_005">Email ID:</span>
              <span className="spanBox" style={{ width: '135px' }} />
            </div>
            <div style={{ position: 'absolute', left: '53.09px', top: '150.30px' }} className="cls_004"><span className="cls_004">DETAILS OF
              INSURANCE HISTORY:</span></div>
            <div style={{ position: 'absolute', left: '53.39px', top: '163.06px' }} className="cls_005"><span className="cls_005">a) Currently
              covered by any other Mediclaim / Health Insurance:</span>
              <span className="spanBox" />Yes
              <span className="spanBox" />No</div>
            <div style={{ position: 'absolute', left: '209.91px', top: '163.06px' }} className="cls_005"><span className="cls_005" /></div>
            <div style={{ position: 'absolute', left: '232.88px', top: '163.06px' }} className="cls_005"><span className="cls_005" /></div>
            <div style={{ position: 'absolute', left: '267.46px', top: '163.13px' }} className="cls_005"><span className="cls_005">b) Date of
              commencement of first Insurance without break:</span>
              <span className="spanBox" />
              <span className="spanBox" />
              <span className="spanBox" style={{ marginLeft: '7px' }} />
              <span className="spanBox" />
              <span className="spanBox" style={{ marginLeft: '7px' }} />
              <span className="spanBox" />
              <span className="spanBox" />
              <span className="spanBox" />
            </div>
            <div style={{ position: 'absolute', left: '52.87px', top: '175.49px' }} className="cls_005"><span className="cls_005">c) If yes,
              company name:</span>
              {blockgenrator('Bima Xpress', 13)}
              
            </div>
            <div style={{ position: 'absolute', left: '275.16px', top: '175.49px' }} className="cls_005"><span className="cls_005">Policy
              No.</span>
              {blockgenrator('832748236289249', 19)}
             
            </div>
            <div style={{ position: 'absolute', left: '52.87px', top: '187.62px' }} className="cls_005"><span className="cls_005">Sum insured
              (Rs.)</span>
              {blockgenrator('20000', 7)}
            </div>
            <div style={{ position: 'absolute', left: '168.84px', top: '188.02px' }} className="cls_005"><span className="cls_005">d) Have you been
              hospitalized in the last four years since inception of the contract?</span>
              <span className="spanBox" />Yes
              <span className="spanBox" />No</div>
            <div style={{ position: 'absolute', left: '441.19px', top: '187.34px' }} className="cls_005"><span className="cls_005">Date:</span>
            {blockgenrator('0101', 4)}
            </div>
            <div style={{ position: 'absolute', left: '53.42px', top: '201.00px' }} className="cls_005"><span className="cls_005">Diagnosis:</span><span className="spanBox" style={{ width: '165px' }} />
            </div>
            <div style={{ position: 'absolute', left: '352.23px', top: '200.30px' }} className="cls_005"><span className="cls_005">e) Previously
              covered by any other Mediclaim /Health insurance : :</span>
              <span className="spanBox" />Yes
              <span className="spanBox" />No
            </div>
            <div style={{ position: 'absolute', left: '52.87px', top: '212.91px' }} className="cls_005"><span className="cls_005">f) If yes,
              company name:</span> 
              {blockgenrator('Bima xpress', 14)}
            </div>
            <div style={{ position: 'absolute', left: '53.02px', top: '225.85px' }} className="cls_004"><span className="cls_004">DETAILS OF
              INSURED PERSON HOSPITALIZED: :</span></div>
            <div style={{ position: 'absolute', left: '52.67px', top: '238.31px' }} className="cls_005"><span className="cls_005">a) Name:</span>
            {blockgenrator('Harsh Diwan ABCDEF', 50)}
            </div>
            <div style={{ position: 'absolute', left: '111.35px', top: '239.43px' }} className="cls_006"><span className="cls_006" /></div>
            <div style={{ position: 'absolute', left: '122.49px', top: '239.43px' }} className="cls_006"><span className="cls_006" /></div>
            <div style={{ position: 'absolute', left: '133.91px', top: '239.43px' }} className="cls_006"><span className="cls_006" /></div>
            <div style={{ position: 'absolute', left: '145.33px', top: '239.43px' }} className="cls_006"><span className="cls_006" /></div>
            <div style={{ position: 'absolute', left: '156.74px', top: '239.43px' }} className="cls_006"><span className="cls_006" /></div>
            <div style={{ position: 'absolute', left: '168.16px', top: '239.43px' }} className="cls_006"><span className="cls_006" /></div>
            <div style={{ position: 'absolute', left: '180.13px', top: '239.43px' }} className="cls_006"><span className="cls_006" /></div>
            <div style={{ position: 'absolute', left: '249.39px', top: '239.43px' }} className="cls_006"><span className="cls_006" /></div>
            <div style={{ position: 'absolute', left: '261.26px', top: '239.43px' }} className="cls_006"><span className="cls_006" /></div>
            <div style={{ position: 'absolute', left: '271.48px', top: '239.43px' }} className="cls_006"><span className="cls_006" /></div>
            <div style={{ position: 'absolute', left: '283.90px', top: '239.43px' }} className="cls_006"><span className="cls_006" /></div>
            <div style={{ position: 'absolute', left: '296.05px', top: '239.43px' }} className="cls_006"><span className="cls_006" /></div>
            <div style={{ position: 'absolute', left: '318.19px', top: '239.43px' }} className="cls_006"><span className="cls_006" /></div>
            <div style={{ position: 'absolute', left: '329.11px', top: '239.43px' }} className="cls_006"><span className="cls_006" /></div>
            <div style={{ position: 'absolute', left: '340.03px', top: '239.43px' }} className="cls_006"><span className="cls_006" /></div>
            <div style={{ position: 'absolute', left: '351.51px', top: '239.43px' }} className="cls_006"><span className="cls_006" /></div>
            <div style={{ position: 'absolute', left: '389.27px', top: '239.43px' }} className="cls_007"><span className="cls_007" /></div>
            <div style={{ position: 'absolute', left: '401.55px', top: '239.43px' }} className="cls_007"><span className="cls_007" /></div>
            <div style={{ position: 'absolute', left: '411.06px', top: '239.43px' }} className="cls_007"><span className="cls_007" /></div>
            <div style={{ position: 'absolute', left: '422.77px', top: '239.43px' }} className="cls_007"><span className="cls_007" /></div>
            <div style={{ position: 'absolute', left: '434.49px', top: '239.43px' }} className="cls_007"><span className="cls_007" /></div>
            <div style={{ position: 'absolute', left: '445.66px', top: '239.43px' }} className="cls_007"><span className="cls_007" /></div>
            <div style={{ position: 'absolute', left: '468.64px', top: '239.43px' }} className="cls_006"><span className="cls_006" /></div>
            <div style={{ position: 'absolute', left: '479.57px', top: '239.43px' }} className="cls_006"><span className="cls_006" /></div>
            <div style={{ position: 'absolute', left: '490.49px', top: '239.43px' }} className="cls_006"><span className="cls_006" /></div>
            <div style={{ position: 'absolute', left: '501.96px', top: '239.43px' }} className="cls_006"><span className="cls_006" /></div>
            <div style={{ position: 'absolute', left: '52.67px', top: '250.79px' }} className="cls_005"><span className="cls_005">b) Gender</span>
            </div>
            <div style={{ position: 'absolute', left: '103.23px', top: '250.79px' }} className="cls_005"><span className="cls_005"><span className="spanBox" />Male</span>
            </div>
            <div style={{ position: 'absolute', left: '134.76px', top: '250.79px' }} className="cls_005"><span className="cls_005"><span className="spanBox" />Female</span>
            </div>
            <div style={{ position: 'absolute', left: '188.37px', top: '250.79px' }} className="cls_005"><span className="cls_005">c) Age
              years</span></div>
            <div style={{ position: 'absolute', left: '224.61px', top: '251.20px' }} className="cls_006"><span className="cls_006"><span className="spanBox" /></span></div>
            <div style={{ position: 'absolute', left: '236.64px', top: '251.20px' }} className="cls_006"><span className="cls_006"><span className="spanBox" /></span></div>
            <div style={{ position: 'absolute', left: '247.68px', top: '250.49px' }} className="cls_005"><span className="cls_005">Months</span>
            </div>
            <div style={{ position: 'absolute', left: '269.51px', top: '250.90px' }} className="cls_006"><span className="cls_006"><span className="spanBox" /></span></div>
            <div style={{ position: 'absolute', left: '280.57px', top: '250.90px' }} className="cls_006"><span className="cls_006"><span className="spanBox" /></span></div>
            <div style={{ position: 'absolute', left: '293.46px', top: '250.56px' }} className="cls_005"><span className="cls_005">d) Date of
              Birth</span></div>
            <div style={{ position: 'absolute', left: '337.38px', top: '250.30px' }} className="cls_006"><span className="cls_006"><span className="spanBox" /></span></div>
            <div style={{ position: 'absolute', left: '347.92px', top: '250.30px' }} className="cls_006"><span className="cls_006"><span className="spanBox" /></span></div>
            <div style={{ position: 'absolute', left: '370.44px', top: '250.90px' }} className="cls_006"><span className="cls_006"><span className="spanBox" /></span></div>
            <div style={{ position: 'absolute', left: '381.50px', top: '250.90px' }} className="cls_006"><span className="cls_006"><span className="spanBox" /></span></div>
            <div style={{ position: 'absolute', left: '405.25px', top: '251.20px' }} className="cls_006"><span className="cls_006"><span className="spanBox" /></span></div>
            <div style={{ position: 'absolute', left: '417.28px', top: '251.20px' }} className="cls_006"><span className="cls_006"><span className="spanBox" /></span></div>
            <div style={{ position: 'absolute', left: '427.71px', top: '251.20px' }} className="cls_006"><span className="cls_006"><span className="spanBox" /></span></div>
            <div style={{ position: 'absolute', left: '439.74px', top: '251.20px' }} className="cls_006"><span className="cls_006"><span className="spanBox" /></span></div>
            <div style={{ position: 'absolute', left: '52.67px', top: '263.75px' }} className="cls_005"><span className="cls_005">e) Relationship
              to Primary insured:</span></div>
            <div style={{ position: 'absolute', left: '151.35px', top: '263.14px' }} className="cls_005"><span className="cls_005">Self</span>
              <span className="spanBox" />
            </div>
            <div style={{ position: 'absolute', left: '181.54px', top: '263.14px' }} className="cls_005"><span className="cls_005">Spouse</span>
              <span className="spanBox" />
            </div>
            <div style={{ position: 'absolute', left: '219.41px', top: '263.14px' }} className="cls_005"><span className="cls_005">Child</span>
              <span className="spanBox" />
            </div>
            <div style={{ position: 'absolute', left: '249.39px', top: '263.14px' }} className="cls_005"><span className="cls_005">Father</span>
              <span className="spanBox" />
            </div>
            <div style={{ position: 'absolute', left: '292.95px', top: '263.14px' }} className="cls_005"><span className="cls_005">Mother</span>
              <span className="spanBox" />
            </div>
            <div style={{ position: 'absolute', left: '328.49px', top: '263.14px' }} className="cls_005"><span className="cls_005">Other</span>
              <span className="spanBox" />
            </div>
            <div style={{ position: 'absolute', left: '358.14px', top: '263.14px' }} className="cls_005"><span className="cls_005">(Please
              Specify)</span>
              <span className="spanBox" style={{ width: '165px' }} /></div>
            <div style={{ position: 'absolute', left: '52.67px', top: '275.83px' }} className="cls_005"><span className="cls_005">f)
              Occupation</span></div>
            <div style={{ position: 'absolute', left: '100.85px', top: '275.83px' }} className="cls_005"><span className="cls_005">Service</span>
              <span className="spanBox" />
            </div>
            <div style={{ position: 'absolute', left: '141.52px', top: '275.83px' }} className="cls_005"><span className="cls_005">Self
              Employed</span>
              <span className="spanBox" /></div>
            <div style={{ position: 'absolute', left: '193.79px', top: '275.83px' }} className="cls_005"><span className="cls_005">Home
              Maker</span>
              <span className="spanBox" /></div>
            <div style={{ position: 'absolute', left: '246.78px', top: '275.83px' }} className="cls_005"><span className="cls_005">Student</span>
              <span className="spanBox" />
            </div>
            <div style={{ position: 'absolute', left: '292.58px', top: '275.83px' }} className="cls_005"><span className="cls_005">Retired</span>
              <span className="spanBox" />
            </div>
            <div style={{ position: 'absolute', left: '328.49px', top: '276.10px' }} className="cls_005"><span className="cls_005">Other</span>
              <span className="spanBox" />
            </div>
            <div style={{ position: 'absolute', left: '358.14px', top: '275.77px' }} className="cls_005"><span className="cls_005">(Please
              Specify)</span>
              <span className="spanBox" style={{ width: '165px' }} /></div>
            <div style={{ position: 'absolute', left: '52.67px', top: '288.83px' }} className="cls_005"><span className="cls_005">g) Address (if
              diffrent from above) :</span>
              {blockgenrator('E-8 H.no 32 Akanksha Enclave Areara Colony', 104)}
            
              
          </div>
            <div style={{ position: 'absolute', left: '84.78px', top: '312.56px' }} className="cls_005"><span className="cls_005">City:</span>
            {blockgenrator('Bhopal', 20)}
            </div>
            <div style={{ position: 'absolute', left: '318.65px', top: '312.56px' }} className="cls_005"><span className="cls_005">State:</span>
            {blockgenrator('Madhya Pradesh', 18)}
            </div>
            <div style={{ position: 'absolute', left: '84.78px', top: '325.90px' }} className="cls_005"><span className="cls_005">Pin Code</span>
            {blockgenrator('462039', 6)}
            </div>
            <div style={{ position: 'absolute', left: '194.54px', top: '325.90px' }} className="cls_005"><span className="cls_005">Phone No:</span>
            {blockgenrator('9038382848', 10)}
            </div>
            <div style={{ position: 'absolute', left: '357.25px', top: '325.90px' }} className="cls_005"><span className="cls_005">Email ID:</span><span className="spanBox" style={{ width: '165px' }} />
            </div>
            <div style={{ position: 'absolute', left: '53.27px', top: '339.07px' }} className="cls_004"><span className="cls_004">DETAILS OF
              HOSPITALIZATION: :</span></div>
            <div style={{ position: 'absolute', left: '53.38px', top: '351.25px' }} className="cls_005"><span className="cls_005">a) Name of
              Hospital where Admited:</span>
              {blockgenrator('Bansal Hospital', 35)}
             </div>
            <div style={{ position: 'absolute', left: '53.38px', top: '364.10px' }} className="cls_005"><span className="cls_005">b) Room Category
              occupied:</span></div>
            <div style={{ position: 'absolute', left: '153.89px', top: '363.73px' }} className="cls_005"><span className="cls_005">Day care</span>
              <span className="spanBox" />
            </div>
            <div style={{ position: 'absolute', left: '199.69px', top: '363.82px' }} className="cls_005"><span className="cls_005">Single
              occupancy</span>
              <span className="spanBox" /></div>
            <div style={{ position: 'absolute', left: '278.25px', top: '364.07px' }} className="cls_005"><span className="cls_005">Twin
              sharing</span>
              <span className="spanBox" /></div>
            <div style={{ position: 'absolute', left: '356.81px', top: '363.83px' }} className="cls_005"><span className="cls_005">3 or more beds
              per room</span>
              <span className="spanBox" /></div>
            <div style={{ position: 'absolute', left: '52.75px', top: '376.96px' }} className="cls_005"><span className="cls_005">c)
              Hospitalization due to:</span></div>
            <div style={{ position: 'absolute', left: '127.25px', top: '376.92px' }} className="cls_005"><span className="cls_005">Injury</span>
              <span className="spanBox" />
            </div>
            <div style={{ position: 'absolute', left: '159.42px', top: '376.36px' }} className="cls_005"><span className="cls_005">Illness</span>
              <span className="spanBox" />
            </div>
            <div style={{ position: 'absolute', left: '199.67px', top: '375.99px' }} className="cls_005"><span className="cls_005">Maternity</span>
              <span className="spanBox" />
            </div>
            <div style={{ position: 'absolute', left: '245.65px', top: '379.26px' }} className="cls_005"><span className="cls_005">d) Date of
              injury / Date Disease first detected /Date of
              Delivery:</span></div>
            <div style={{ position: 'absolute', left: '416.46px', top: '376.85px' }} className="cls_006"><span className="cls_006"><span className="spanBox" /></span></div>
            <div style={{ position: 'absolute', left: '427.01px', top: '376.85px' }} className="cls_006"><span className="cls_006"><span className="spanBox" /></span></div>
            <div style={{ position: 'absolute', left: '450.75px', top: '376.30px' }} className="cls_006"><span className="cls_006"><span className="spanBox" />
              <span className="spanBox" /></span></div>
            <div style={{ position: 'absolute', left: '484.39px', top: '375.81px' }} className="cls_006"><span className="cls_006"><span className="spanBox" />
              <span className="spanBox" />
              <span className="spanBox" />
              <span className="spanBox" /></span>
            </div>
            <div style={{ position: 'absolute', left: '518.88px', top: '375.81px' }} className="cls_006"><span className="cls_006" /></div>
            <div style={{ position: 'absolute', left: '53.57px', top: '389.58px' }} className="cls_005"><span className="cls_005">e) Date of
              Admission:</span></div>
            <div style={{ position: 'absolute', left: '111.91px', top: '390.55px' }} className="cls_006"><span className="cls_006"><span className="spanBox" />
              <span className="spanBox" /></span></div>
            <div style={{ position: 'absolute', left: '145.86px', top: '389.79px' }} className="cls_006"><span className="cls_006"><span className="spanBox" />
              <span className="spanBox" /></span></div>
            <div style={{ position: 'absolute', left: '180.66px', top: '390.09px' }} className="cls_006"><span className="cls_006"><span className="spanBox" />
              <span className="spanBox" /></span></div>
            <div style={{ position: 'absolute', left: '212.44px', top: '390.13px' }} className="cls_005"><span className="cls_005">f) Time</span>
            </div>
            <div style={{ position: 'absolute', left: '235.73px', top: '390.09px' }} className="cls_006"><span className="cls_006"><span className="spanBox" />
              <span className="spanBox" /></span></div>
            <div style={{ position: 'absolute', left: '265.59px', top: '390.09px' }} className="cls_006"><span className="cls_006"><span className="spanBox" />
              <span className="spanBox" /></span></div>
            <div style={{ position: 'absolute', left: '290.84px', top: '392.32px' }} className="cls_005"><span className="cls_005">g) Date of
              Discharge:</span>
              {blockgenrator('040621',6)}
            </div>
            <div style={{ position: 'absolute', left: '459.73px', top: '389.56px' }} className="cls_005"><span className="cls_005">h) Time:</span>
            </div>
            <div style={{ position: 'absolute', left: '483.98px', top: '389.89px' }} className="cls_006"><span className="cls_006"><span className="spanBox" />
              <span className="spanBox" /></span></div>
            <div style={{ position: 'absolute', left: '508.41px', top: '389.56px' }} className="cls_005"><span className="cls_005">:</span></div>
            <div style={{ position: 'absolute', left: '517.83px', top: '389.89px' }} className="cls_006"><span className="cls_006"><span className="spanBox" /></span></div>
            <div style={{ position: 'absolute', left: '529.86px', top: '389.89px' }} className="cls_006"><span className="cls_006"><span className="spanBox" /></span></div>
            <div style={{ position: 'absolute', left: '53.51px', top: '401.85px' }} className="cls_005"><span className="cls_005">I) If injury give
              cause:</span></div>
            <div style={{ position: 'absolute', left: '112.13px', top: '401.64px' }} className="cls_005"><span className="cls_005">Self
              inflicted</span>
              <span className="spanBox" /></div>
            <div style={{ position: 'absolute', left: '172.48px', top: '401.59px' }} className="cls_005"><span className="cls_005">Road
              Traffic Accident</span>
              <span className="spanBox" />
            </div>
            <div style={{ position: 'absolute', left: '265.96px', top: '401.51px' }} className="cls_005"><span className="cls_005">Substance Abuse
              / Alcohol Consumption</span>
              <span className="spanBox" /></div>
            <div style={{ position: 'absolute', left: '386.74px', top: '405.41px' }} className="cls_005"><span className="cls_005">I) If Medico
              legal</span>
            </div>
            <div style={{ position: 'absolute', left: '439.83px', top: '401.18px' }} className="cls_005"><span className="cls_005">Yes</span>
              <span className="spanBox" /></div>
            <div style={{ position: 'absolute', left: '459.58px', top: '401.18px' }} className="cls_005"><span className="cls_005">No</span>
              <span className="spanBox" /></div>
            <div style={{ position: 'absolute', left: '54.03px', top: '414.41px' }} className="cls_005"><span className="cls_005">ii) Reported to
              Police</span>
              <span className="spanBox" />
              <span className="spanBox" /></div>
            <div style={{ position: 'absolute', left: '162.33px', top: '414.23px' }} className="cls_005"><span className="cls_005">iii. MLC Report
              &amp; Police FIR attached</span></div>
            <div style={{ position: 'absolute', left: '268.80px', top: '414.61px' }} className="cls_005"><span className="cls_005"><span className="spanBox" />Yes</span></div>
            <div style={{ position: 'absolute', left: '288.56px', top: '414.61px' }} className="cls_005"><span className="cls_005"><span className="spanBox" />No</span></div>
            <div style={{ position: 'absolute', left: '314.24px', top: '414.50px' }} className="cls_005"><span className="cls_005">j) System of
              Medicine:</span><span className="spanBox" style={{ width: '165px' }} /></div>
            <div style={{ position: 'absolute', left: '53.36px', top: '427.11px' }} className="cls_004"><span className="cls_004">DETAILS OF
              CLAIM:</span></div>
            <div style={{ position: 'absolute', left: '53.41px', top: '439.61px' }} className="cls_005"><span className="cls_005">a) Details of the
              Treatment expenses claimed</span></div>
            <div style={{ position: 'absolute', left: '431.92px', top: '442.36px' }} className="cls_004"><span className="cls_004">Claim Documents
              Submitted - Check List:</span></div>
            <div style={{ position: 'absolute', left: '53.28px', top: '452.33px' }} className="cls_005"><span className="cls_005">I. Pre
              -hospitalization expenses</span></div>
            <div style={{ position: 'absolute', left: '155.44px', top: '452.33px' }} className="cls_005"><span className="cls_005">Rs. 
            {blockgenrator('5654645', 7)}
            </span></div>
            <div style={{ position: 'absolute', left: '254.05px', top: '451.97px' }} className="cls_005"><span className="cls_005">ii.
              Hospitalization expenses</span></div>
            <div style={{ position: 'absolute', left: '330.93px', top: '452.33px' }} className="cls_005"><span className="cls_005">Rs.</span>
            {blockgenrator('4353453', 8)}
            </div>
            <div style={{ position: 'absolute', left: '446.86px', top: '451.19px' }} className="cls_005"><span className="cls_005"><span className="spanBox" />Claim form duly
              signed</span></div>
            <div style={{ position: 'absolute', left: '446.86px', top: '461.97px' }} className="cls_005"><span className="cls_005"><span className="spanBox" />Copy of the
              claim intimation, if any</span></div>
            <div style={{ position: 'absolute', left: '53.15px', top: '464.93px' }} className="cls_005"><span className="cls_005">iii.
              Post-hospitalization expenses</span></div>
            <div style={{ position: 'absolute', left: '155.44px', top: '464.69px' }} className="cls_005"><span className="cls_005">Rs.</span>
            {blockgenrator('', 7)}
              </div>
            <div style={{ position: 'absolute', left: '254.51px', top: '464.83px' }} className="cls_005"><span className="cls_005">iv. Health-Check
              up cost:</span></div>
            <div style={{ position: 'absolute', left: '330.93px', top: '464.25px' }} className="cls_005"><span className="cls_005">Rs.</span>
            {blockgenrator('', 7)}
            </div>
            <div style={{ position: 'absolute', left: '446.86px', top: '472.77px' }} className="cls_005"><span className="cls_005"><span className="spanBox" />Hospital Main
              Bill</span></div>
            <div style={{ position: 'absolute', left: '52.90px', top: '477.17px' }} className="cls_005"><span className="cls_005">v. Ambulance
              Charges:</span></div>
            <div style={{ position: 'absolute', left: '155.44px', top: '477.05px' }} className="cls_005"><span className="cls_005">Rs.</span>
            {blockgenrator('', 7)}</div>
            <div style={{ position: 'absolute', left: '253.87px', top: '477.06px' }} className="cls_005"><span className="cls_005">vi. Others
              (code):</span></div>
            <div style={{ position: 'absolute', left: '330.93px', top: '476.95px' }} className="cls_005"><span className="cls_005">Rs.</span>
            {blockgenrator('', 8)}
              </div>
            <div style={{ position: 'absolute', left: '446.86px', top: '484.08px' }} className="cls_005"><span className="cls_005"><span className="spanBox" />Hospital
              Break-up Bill</span></div>
            <div style={{ position: 'absolute', left: '260.18px', top: '490.94px' }} className="cls_005"><span className="cls_005">Total</span>
            </div>
            <div style={{ position: 'absolute', left: '330.93px', top: '489.89px' }} className="cls_005"><span className="cls_005">Rs.</span>
            {blockgenrator('', 8)}
              </div>
            <div style={{ position: 'absolute', left: '446.86px', top: '494.98px' }} className="cls_005"><span className="cls_005"><span className="spanBox" />Hospital Bill
              Payment Receipt</span></div>
            <div style={{ position: 'absolute', left: '53.30px', top: '502.70px' }} className="cls_005"><span className="cls_005">vii. Pre
              -hospitalization period:days </span>
              {blockgenrator('', 3)}
            </div>
            <div style={{ position: 'absolute', left: '254.49px', top: '502.66px' }} className="cls_005"><span className="cls_005">viii. Post
              -hospitalization period: days</span>
              {blockgenrator('', 3)}
              </div>
            <div style={{ position: 'absolute', left: '446.86px', top: '506.42px' }} className="cls_005"><span className="cls_005">Hospital
              Discharge Summary</span></div>
            <div style={{ position: 'absolute', left: '53.70px', top: '515.02px' }} className="cls_005"><span className="cls_005">b) Claim for
              Domiciliary Hospitalization:</span></div>
            <div style={{ position: 'absolute', left: '179.55px', top: '514.08px' }} className="cls_005"><span className="cls_005"><span className="spanBox" />Yes</span></div>
            <div style={{ position: 'absolute', left: '199.30px', top: '514.08px' }} className="cls_005"><span className="cls_005"><span className="spanBox" />No</span></div>
            <div style={{ position: 'absolute', left: '213.80px', top: '515.09px' }} className="cls_005"><span className="cls_005">(If yes, provide
              details in annexure)</span></div>
            <div style={{ position: 'absolute', left: '446.86px', top: '516.33px' }} className="cls_005"><span className="cls_005"><span className="spanBox" />Pharmacy
              Bill</span></div>
            <div style={{ position: 'absolute', left: '53.61px', top: '528.04px' }} className="cls_005"><span className="cls_005">c) Details of
              Lump sum / cash benefit claimed:</span></div>
            <div style={{ position: 'absolute', left: '446.86px', top: '527.24px' }} className="cls_005"><span className="cls_005"><span className="spanBox" />Operation
              Theater Notes</span></div>
            <div style={{ position: 'absolute', left: '53.49px', top: '540.25px' }} className="cls_005"><span className="cls_005">i. Hospital Daily
              cash:</span></div>
            <div style={{ position: 'absolute', left: '155.44px', top: '539.66px' }} className="cls_005"><span className="cls_005">Rs.</span>
            {blockgenrator('', 7)}
              </div>
            <div style={{ position: 'absolute', left: '258.47px', top: '540.01px' }} className="cls_005"><span className="cls_005">ii. Surgical
              Cash:</span></div>
            <div style={{ position: 'absolute', left: '330.70px', top: '539.46px' }} className="cls_005"><span className="cls_005">Rs.</span>
            {blockgenrator('', 7)}
              </div>
            <div style={{ position: 'absolute', left: '446.86px', top: '537.94px' }} className="cls_005"><span className="cls_005"><span className="spanBox" />ECG</span></div>
            <div style={{ position: 'absolute', left: '446.86px', top: '548.63px' }} className="cls_005"><span className="cls_005"><span className="spanBox" />Doctor’s request
              for investigation</span></div>
            <div style={{ position: 'absolute', left: '53.75px', top: '552.13px' }} className="cls_005"><span className="cls_005">iii. Critical
              Illness benefit:</span></div>
            <div style={{ position: 'absolute', left: '155.44px', top: '552.47px' }} className="cls_005"><span className="cls_005">Rs.</span>
            {blockgenrator('', 7)}
              </div>
            <div style={{ position: 'absolute', left: '258.47px', top: '552.03px' }} className="cls_005"><span className="cls_005">iv.
              Convalescence:</span></div>
            <div style={{ position: 'absolute', left: '330.70px', top: '552.16px' }} className="cls_005"><span className="cls_005">Rs.</span>
            {blockgenrator('', 7)}
              </div>
            <div style={{ position: 'absolute', left: '446.86px', top: '556.39px' }} className="cls_005"><span className="cls_005"><span className="spanBox" />Investigation
              Reports (Including CT/ MRI / USG /
              HPE)</span></div>&gt;
            <div style={{ position: 'absolute', left: '53.75px', top: '565.33px' }} className="cls_005"><span className="cls_005">v. Pre/Post
              hospitalization Lump sum benefit:</span></div>
            <div style={{ position: 'absolute', left: '175.44px', top: '564.81px' }} className="cls_005"><span className="cls_005">Rs.</span>
            {blockgenrator('', 7)}
              </div>
            <div style={{ position: 'absolute', left: '258.47px', top: '565.14px' }} className="cls_005"><span className="cls_005">vi.
              Others:</span></div>
            <div style={{ position: 'absolute', left: '330.70px', top: '564.56px' }} className="cls_005"><span className="cls_005">Rs.</span>
            {blockgenrator('', 7)}
              </div>
            <div style={{ position: 'absolute', left: '446.86px', top: '569.70px' }} className="cls_005"><span className="cls_005"><span className="spanBox" />Doctor’s
              Prescriptions</span></div>
            <div style={{ position: 'absolute', left: '265.14px', top: '576.77px' }} className="cls_005"><span className="cls_005">Total</span>
            </div>
            <div style={{ position: 'absolute', left: '330.70px', top: '576.53px' }} className="cls_005"><span className="cls_005">Rs.</span>
            {blockgenrator('', 7)}
              </div>
            <div style={{ position: 'absolute', left: '446.86px', top: '579.79px' }} className="cls_005"><span className="cls_005"><span className="spanBox" />Others</span>
            </div>
            <div style={{ position: 'absolute', left: '53.83px', top: '586.95px' }} className="cls_004"><span className="cls_004">DETAILS OF BILLS
              ENCLOSED:</span></div>
            
            <div style={{ position: 'absolute', left: '53.37px', top: '702.96px' }} className="cls_004"><span className="cls_004">DETAILS OF
              PRIMARY INSURED’S BANK ACCOUNT::</span></div>
            <div style={{ position: 'absolute', left: '54.23px', top: '716.37px' }} className="cls_005"><span className="cls_005">a) PAN:</span>
            {blockgenrator('', 10)}
            </div>
            <div style={{ position: 'absolute', left: '228.48px', top: '716.37px' }} className="cls_005"><span className="cls_005">b) Account
              Number:</span>
              {blockgenrator('', 17)}
              </div>
            <div style={{ position: 'absolute', left: '54.23px', top: '729.05px' }} className="cls_005"><span className="cls_005">c) Bank Name and
              Branch:</span>
              {blockgenrator('', 37)}
              </div>
            <div style={{ position: 'absolute', left: '54.23px', top: '742.02px' }} className="cls_005"><span className="cls_005">d) Cheque / DD
              Payable details:</span><span className="spanBox" style={{ width: '165px' }} /></div>
            <div style={{ position: 'absolute', left: '332.26px', top: '742.33px' }} className="cls_005"><span className="cls_005">e) IFSC
              Code:</span>
              {blockgenrator('', 16)}
              </div>
            <div style={{ position: 'absolute', left: '473.69px', top: '763.08px' }} className="cls_004"><span className="cls_004">(IMPORTANT:
              PLEASE TURN OVER)</span></div>
          </div>
          <div style={{ position: 'absolute', left: '50%', marginLeft: '-306px', top: '850px', width: '612px', height: '792px', borderStyle: 'outset', overflow: 'hidden' }}>
            <div style={{ position: 'absolute', left: '0px', top: '0px' }}>
              <img src={background2} width={612} height={792} />
            </div>
            <div style={{ position: 'absolute', left: '65.94px', top: '21.01px' }} className="cls_008"><span className="cls_008">DECLARATION BY THE
              INSURED:</span></div>
            <div style={{ position: 'absolute', left: '64.80px', top: '37.77px' }} className="cls_009"><span className="cls_009">I hereby declare
              that the information furnished in the claim form is true &amp; correct to the best of my knowledge and
              belief. If I have made any false or untrue statement, suppression</span></div>
            <div style={{ position: 'absolute', left: '64.80px', top: '44.21px' }} className="cls_009"><span className="cls_009">or concealent of
              any material fact with respect to questions asked in relation to this claim, my right to claim
              reimbrusement shall be forfeited, I also consent &amp; authorize TPA /</span></div>
            <div style={{ position: 'absolute', left: '64.79px', top: '50.64px' }} className="cls_009"><span className="cls_009">Insurance Company,
              to seek necessary medical information / documents from any hospital / Medical Practitioner who has
              attended on the person against whom this claim is made.</span></div>
            <div style={{ position: 'absolute', left: '64.79px', top: '57.07px' }} className="cls_009"><span className="cls_009">I hereby declare
              that I have included all the bills / receipts for the purpose of this claim &amp; that I will not be making
              any supplementary claim except the pre/post-hospitalization</span></div>
            <div style={{ position: 'absolute', left: '64.79px', top: '63.51px' }} className="cls_009"><span className="cls_009">claim, if
              any.</span></div>
            <div style={{ position: 'absolute', left: '65.36px', top: '121.75px' }} className="cls_009"><span className="cls_009">Date</span></div>
            <div style={{ position: 'absolute', left: '84.30px', top: '118.54px' }} className="cls_010"><span className="cls_010" /><span className="spanBox" /></div>
            <div style={{ position: 'absolute', left: '94.63px', top: '118.54px' }} className="cls_010"><span className="cls_010" /><span className="spanBox" /></div>
            <div style={{ position: 'absolute', left: '116.92px', top: '118.54px' }} className="cls_010"><span className="cls_010" /><span className="spanBox" /></div>
            <div style={{ position: 'absolute', left: '127.74px', top: '118.54px' }} className="cls_010"><span className="cls_010" /><span className="spanBox" /></div>
            <div style={{ position: 'absolute', left: '150.07px', top: '118.54px' }} className="cls_010"><span className="cls_010" /><span className="spanBox" /></div>
            <div style={{ position: 'absolute', left: '161.84px', top: '118.54px' }} className="cls_010"><span className="cls_010" /><span className="spanBox" /></div>
            <div style={{ position: 'absolute', left: '171.98px', top: '118.54px' }} className="cls_010"><span className="cls_010" /><span className="spanBox" /></div>
            <div style={{ position: 'absolute', left: '183.02px', top: '118.54px' }} className="cls_010"><span className="cls_010" /><span className="spanBox" /></div>
            <div style={{ position: 'absolute', left: '197.25px', top: '121.04px' }} className="cls_009"><span className="cls_009">Place:</span>
              <span className="spanBox" style={{ width: '115px' }} />
            </div>
            <div style={{ position: 'absolute', left: '351.90px', top: '121.04px' }} className="cls_009"><span className="cls_009">Signature of the
              Insured</span>
              <span className="spanBox" style={{ width: '150px', height: '40px', position: 'absolute', marginTop: '-35px', borderColor: 'black', marginLeft: '8px' }} /></div>
            <div style={{ position: 'absolute', left: '196.33px', top: '153.23px' }} className="cls_008"><span className="cls_008">GUIDANCE FOR
              FILLING CLAIM FORM - PART A (To be filled in by the insured)</span></div>
            <div style={{ position: 'absolute', left: '119.00px', top: '163.66px' }} className="cls_008"><span className="cls_008">DATA
              ELEMENT</span></div>
            <div style={{ position: 'absolute', left: '300.86px', top: '163.66px' }} className="cls_008"><span className="cls_008">DESCRIPTION</span></div>
            <div style={{ position: 'absolute', left: '467.11px', top: '163.66px' }} className="cls_008"><span className="cls_008">FORMAT</span>
            </div>
            <div style={{ position: 'absolute', left: '240.92px', top: '173.69px' }} className="cls_008"><span className="cls_008">SECTION A -
              DETAILS OF PRIMARY INSURED</span></div>
            <div style={{ position: 'absolute', left: '58.37px', top: '184.74px' }} className="cls_009"><span className="cls_009">a)</span></div>
            <div style={{ position: 'absolute', left: '73.57px', top: '184.74px' }} className="cls_009"><span className="cls_009">Policy No.</span>
            </div>
            <div style={{ position: 'absolute', left: '244.34px', top: '184.67px' }} className="cls_009"><span className="cls_009">Enter the policy
              number</span></div>
            <div style={{ position: 'absolute', left: '422.84px', top: '184.67px' }} className="cls_009"><span className="cls_009">As allotted by
              the Insurance Company</span></div>
            <div style={{ position: 'absolute', left: '244.34px', top: '192.48px' }} className="cls_009"><span className="cls_009">Enter the social
              Insurance number or the certificate number of</span></div>
            <div style={{ position: 'absolute', left: '58.37px', top: '196.26px' }} className="cls_009"><span className="cls_009">b)</span></div>
            <div style={{ position: 'absolute', left: '73.57px', top: '196.26px' }} className="cls_009"><span className="cls_009">Sl. No/
              Certificate No.</span></div>
            <div style={{ position: 'absolute', left: '422.84px', top: '195.92px' }} className="cls_009"><span className="cls_009">As allotted by
              the oraganization</span></div>
            <div style={{ position: 'absolute', left: '244.34px', top: '199.32px' }} className="cls_009"><span className="cls_009">social health
              insurance scheme</span></div>
            <div style={{ position: 'absolute', left: '422.83px', top: '206.73px' }} className="cls_009"><span className="cls_009">Licence number
              as allotted by IRDA and printed</span></div>
            <div style={{ position: 'absolute', left: '58.37px', top: '210.70px' }} className="cls_009"><span className="cls_009">c)</span></div>
            <div style={{ position: 'absolute', left: '73.24px', top: '210.70px' }} className="cls_009"><span className="cls_009">Company TPA ID
              No.</span></div>
            <div style={{ position: 'absolute', left: '244.34px', top: '210.35px' }} className="cls_009"><span className="cls_009">Enter the TPA ID
              No.</span></div>
            <div style={{ position: 'absolute', left: '422.83px', top: '213.17px' }} className="cls_009"><span className="cls_009">in TPA
              documents.</span></div>
            <div style={{ position: 'absolute', left: '58.37px', top: '223.25px' }} className="cls_009"><span className="cls_009">d)</span></div>
            <div style={{ position: 'absolute', left: '75.22px', top: '223.25px' }} className="cls_009"><span className="cls_009">Name</span></div>
            <div style={{ position: 'absolute', left: '244.34px', top: '222.20px' }} className="cls_009"><span className="cls_009">Enter the full
              name of the policyholder</span></div>
            <div style={{ position: 'absolute', left: '422.83px', top: '222.92px' }} className="cls_009"><span className="cls_009">Surname, First
              name, Middle name</span></div>
            <div style={{ position: 'absolute', left: '58.37px', top: '232.14px' }} className="cls_009"><span className="cls_009">e)</span></div>
            <div style={{ position: 'absolute', left: '73.23px', top: '232.14px' }} className="cls_009"><span className="cls_009">Address</span>
            </div>
            <div style={{ position: 'absolute', left: '244.34px', top: '232.69px' }} className="cls_009"><span className="cls_009">Enter the full
              postal address</span></div>
            <div style={{ position: 'absolute', left: '422.83px', top: '232.14px' }} className="cls_009"><span className="cls_009">Include Street,
              City and Pin code</span></div>
            <div style={{ position: 'absolute', left: '237.57px', top: '242.01px' }} className="cls_008"><span className="cls_008">SECTION B
              -DETAILS OF INSURANCE HISTORY</span></div>
            <div style={{ position: 'absolute', left: '58.37px', top: '251.26px' }} className="cls_009"><span className="cls_009">a)</span></div>
            <div style={{ position: 'absolute', left: '73.57px', top: '251.26px' }} className="cls_009"><span className="cls_009">Currently covered
              by any other Mediclaim / Health</span></div>
            <div style={{ position: 'absolute', left: '244.34px', top: '251.62px' }} className="cls_009"><span className="cls_009">Indicate whether
              currently covered by another Mediclaim /</span></div>
            <div style={{ position: 'absolute', left: '422.83px', top: '254.41px' }} className="cls_009"><span className="cls_009">Tick Yes or
              No</span></div>
            <div style={{ position: 'absolute', left: '73.24px', top: '257.69px' }} className="cls_009"><span className="cls_009">Insurance?</span>
            </div>
            <div style={{ position: 'absolute', left: '244.34px', top: '258.06px' }} className="cls_009"><span className="cls_009">Health
              Insurance</span></div>
            <div style={{ position: 'absolute', left: '58.37px', top: '267.41px' }} className="cls_009"><span className="cls_009">b)</span></div>
            <div style={{ position: 'absolute', left: '73.57px', top: '267.41px' }} className="cls_009"><span className="cls_009">Date of
              commencement of first Insurance without break</span></div>
            <div style={{ position: 'absolute', left: '244.33px', top: '267.41px' }} className="cls_009"><span className="cls_009">Enter the date
              of commencement of first Insurance</span></div>
            <div style={{ position: 'absolute', left: '422.82px', top: '267.41px' }} className="cls_009"><span className="cls_009">Use
              dd-mm-yy-forrmat</span></div>
            <div style={{ position: 'absolute', left: '58.37px', top: '276.89px' }} className="cls_009"><span className="cls_009">c)</span></div>
            <div style={{ position: 'absolute', left: '73.24px', top: '276.89px' }} className="cls_009"><span className="cls_009">Company
              Name</span></div>
            <div style={{ position: 'absolute', left: '244.34px', top: '276.89px' }} className="cls_009"><span className="cls_009">Enter the full
              name of the Insurance Company</span></div>
            <div style={{ position: 'absolute', left: '422.83px', top: '276.89px' }} className="cls_009"><span className="cls_009">Name of the
              organization in full</span></div>
            <div style={{ position: 'absolute', left: '73.25px', top: '287.54px' }} className="cls_009"><span className="cls_009">Policy No.</span>
            </div>
            <div style={{ position: 'absolute', left: '244.34px', top: '287.54px' }} className="cls_009"><span className="cls_009">Enter the policy
              number</span></div>
            <div style={{ position: 'absolute', left: '422.84px', top: '287.54px' }} className="cls_009"><span className="cls_009">As allotted by
              the Insurance Company</span></div>
            <div style={{ position: 'absolute', left: '73.25px', top: '297.62px' }} className="cls_009"><span className="cls_009">Sum
              insured</span></div>
            <div style={{ position: 'absolute', left: '244.34px', top: '297.62px' }} className="cls_009"><span className="cls_009">Enter the total
              sum insured as per the policy</span></div>
            <div style={{ position: 'absolute', left: '422.83px', top: '297.43px' }} className="cls_009"><span className="cls_009">In rupees</span>
            </div>
            <div style={{ position: 'absolute', left: '58.37px', top: '306.84px' }} className="cls_009"><span className="cls_009">d)</span></div>
            <div style={{ position: 'absolute', left: '73.57px', top: '306.84px' }} className="cls_009"><span className="cls_009">Have you been
              Hospitalized in the last four years since</span></div>
            <div style={{ position: 'absolute', left: '244.34px', top: '309.66px' }} className="cls_009"><span className="cls_009">Indicate whether
              hospitalized in the last four years</span></div>
            <div style={{ position: 'absolute', left: '422.83px', top: '309.11px' }} className="cls_009"><span className="cls_009">Tick Yes or
              No</span></div>
            <div style={{ position: 'absolute', left: '73.24px', top: '313.27px' }} className="cls_009"><span className="cls_009">Inception of the
              contract?</span></div>
            <div style={{ position: 'absolute', left: '73.25px', top: '322.33px' }} className="cls_009"><span className="cls_009">Date</span></div>
            <div style={{ position: 'absolute', left: '244.34px', top: '321.37px' }} className="cls_009"><span className="cls_009">Enter the date
              of Hospitalization</span></div>
            <div style={{ position: 'absolute', left: '422.83px', top: '321.85px' }} className="cls_009"><span className="cls_009">Use mm-yy
              format</span></div>
            <div style={{ position: 'absolute', left: '73.25px', top: '332.82px' }} className="cls_009"><span className="cls_009">Diagnosis</span>
            </div>
            <div style={{ position: 'absolute', left: '244.34px', top: '332.82px' }} className="cls_009"><span className="cls_009">Enter the
              diagnosis details</span></div>
            <div style={{ position: 'absolute', left: '422.83px', top: '331.46px' }} className="cls_009"><span className="cls_009">Open Text</span>
            </div>
            <div style={{ position: 'absolute', left: '58.37px', top: '341.42px' }} className="cls_009"><span className="cls_009">e)</span></div>
            <div style={{ position: 'absolute', left: '73.57px', top: '341.42px' }} className="cls_009"><span className="cls_009">Previously
              covered by any other Mediclaim / Health</span></div>
            <div style={{ position: 'absolute', left: '244.34px', top: '340.80px' }} className="cls_009"><span className="cls_009">Indicate whether
              previously covered by another mediclaim /</span></div>
            <div style={{ position: 'absolute', left: '422.83px', top: '343.79px' }} className="cls_009"><span className="cls_009">Tick Yes or
              No</span></div>
            <div style={{ position: 'absolute', left: '71.59px', top: '347.85px' }} className="cls_009"><span className="cls_009">Insurance?</span>
            </div>
            <div style={{ position: 'absolute', left: '244.34px', top: '347.24px' }} className="cls_009"><span className="cls_009">Health
              Insurance</span></div>
            <div style={{ position: 'absolute', left: '58.37px', top: '356.37px' }} className="cls_009"><span className="cls_009">f)</span></div>
            <div style={{ position: 'absolute', left: '71.92px', top: '356.37px' }} className="cls_009"><span className="cls_009">Company
              Name</span></div>
            <div style={{ position: 'absolute', left: '244.34px', top: '355.46px' }} className="cls_009"><span className="cls_009">Enter the full
              name of the Insurance Company</span></div>
            <div style={{ position: 'absolute', left: '422.83px', top: '356.11px' }} className="cls_009"><span className="cls_009">Name of the
              organization in full</span></div>
            <div style={{ position: 'absolute', left: '220.11px', top: '366.69px' }} className="cls_008"><span className="cls_008">SECTION C
              -DETAILS OF INSURED PERSON HOSPITALIZED</span></div>
            <div style={{ position: 'absolute', left: '58.37px', top: '377.04px' }} className="cls_009"><span className="cls_009">a)</span></div>
            <div style={{ position: 'absolute', left: '75.22px', top: '377.04px' }} className="cls_009"><span className="cls_009">Name</span></div>
            <div style={{ position: 'absolute', left: '244.34px', top: '377.04px' }} className="cls_009"><span className="cls_009">Enter the full
              name of the patient</span></div>
            <div style={{ position: 'absolute', left: '422.83px', top: '377.20px' }} className="cls_009"><span className="cls_009">Surname, First
              name, Middle name</span></div>
            <div style={{ position: 'absolute', left: '58.37px', top: '387.07px' }} className="cls_009"><span className="cls_009">b)</span></div>
            <div style={{ position: 'absolute', left: '75.22px', top: '387.07px' }} className="cls_009"><span className="cls_009">Gender</span>
            </div>
            <div style={{ position: 'absolute', left: '244.34px', top: '386.61px' }} className="cls_009"><span className="cls_009">Indicate Gender
              of the patient</span></div>
            <div style={{ position: 'absolute', left: '422.83px', top: '386.61px' }} className="cls_009"><span className="cls_009">Tick Male or
              Female</span></div>
            <div style={{ position: 'absolute', left: '58.37px', top: '397.99px' }} className="cls_009"><span className="cls_009">c)</span></div>
            <div style={{ position: 'absolute', left: '74.55px', top: '397.99px' }} className="cls_009"><span className="cls_009">Age</span></div>
            <div style={{ position: 'absolute', left: '244.34px', top: '397.22px' }} className="cls_009"><span className="cls_009">Enter age of the
              patient</span></div>
            <div style={{ position: 'absolute', left: '422.83px', top: '397.22px' }} className="cls_009"><span className="cls_009">Number of years
              and months</span></div>
            <div style={{ position: 'absolute', left: '58.37px', top: '406.79px' }} className="cls_009"><span className="cls_009">d)</span></div>
            <div style={{ position: 'absolute', left: '73.57px', top: '406.79px' }} className="cls_009"><span className="cls_009">Date of
              Birth</span></div>
            <div style={{ position: 'absolute', left: '244.34px', top: '407.84px' }} className="cls_009"><span className="cls_009">Enter Date of
              Birth of patient</span></div>
            <div style={{ position: 'absolute', left: '422.83px', top: '407.84px' }} className="cls_009"><span className="cls_009">Use dd-mm-yy
              format</span></div>
            <div style={{ position: 'absolute', left: '58.37px', top: '417.49px' }} className="cls_009"><span className="cls_009">e)</span></div>
            <div style={{ position: 'absolute', left: '73.57px', top: '417.49px' }} className="cls_009"><span className="cls_009">Relationship to
              primary Insured</span></div>
            <div style={{ position: 'absolute', left: '244.34px', top: '416.86px' }} className="cls_009"><span className="cls_009">Indicate
              relationship of patient with policyholder</span></div>
            <div style={{ position: 'absolute', left: '422.83px', top: '416.86px' }} className="cls_009"><span className="cls_009">Tick the right
              option, if others, please specify</span></div>
            <div style={{ position: 'absolute', left: '58.37px', top: '427.85px' }} className="cls_009"><span className="cls_009">f)</span></div>
            <div style={{ position: 'absolute', left: '73.57px', top: '427.85px' }} className="cls_009"><span className="cls_009">Occupation</span>
            </div>
            <div style={{ position: 'absolute', left: '244.34px', top: '427.85px' }} className="cls_009"><span className="cls_009">indicate
              occupation of patient</span></div>
            <div style={{ position: 'absolute', left: '422.83px', top: '427.85px' }} className="cls_009"><span className="cls_009">Tick the right
              option. If others, please specify.</span></div>
            <div style={{ position: 'absolute', left: '58.37px', top: '437.93px' }} className="cls_009"><span className="cls_009">g)</span></div>
            <div style={{ position: 'absolute', left: '73.23px', top: '437.93px' }} className="cls_009"><span className="cls_009">Address</span>
            </div>
            <div style={{ position: 'absolute', left: '244.34px', top: '437.79px' }} className="cls_009"><span className="cls_009">Enter the full
              postal address</span></div>
            <div style={{ position: 'absolute', left: '422.83px', top: '437.94px' }} className="cls_009"><span className="cls_009">Include Street,
              City and Pin code</span></div>
            <div style={{ position: 'absolute', left: '58.37px', top: '447.77px' }} className="cls_009"><span className="cls_009">h)</span></div>
            <div style={{ position: 'absolute', left: '73.57px', top: '447.77px' }} className="cls_009"><span className="cls_009">Phone No</span>
            </div>
            <div style={{ position: 'absolute', left: '244.34px', top: '447.92px' }} className="cls_009"><span className="cls_009">Enter the phone
              number of patient</span></div>
            <div style={{ position: 'absolute', left: '422.83px', top: '447.82px' }} className="cls_009"><span className="cls_009">Include STD code
              with telephone number</span></div>
            <div style={{ position: 'absolute', left: '58.37px', top: '458.61px' }} className="cls_009"><span className="cls_009">1)</span></div>
            <div style={{ position: 'absolute', left: '73.57px', top: '458.61px' }} className="cls_009"><span className="cls_009">E-mail ID</span>
            </div>
            <div style={{ position: 'absolute', left: '244.34px', top: '458.64px' }} className="cls_009"><span className="cls_009">Enter e-mail
              address of patient</span></div>
            <div style={{ position: 'absolute', left: '422.83px', top: '458.31px' }} className="cls_009"><span className="cls_009">Complete e-mail
              address</span></div>
            <div style={{ position: 'absolute', left: '242.06px', top: '468.40px' }} className="cls_008"><span className="cls_008">SECTION D -
              DETAILS OF HOSPITALIZATION</span></div>
            <div style={{ position: 'absolute', left: '58.37px', top: '478.76px' }} className="cls_009"><span className="cls_009">a)</span></div>
            <div style={{ position: 'absolute', left: '75.22px', top: '478.76px' }} className="cls_009"><span className="cls_009">Name of Hospital
              where admited</span></div>
            <div style={{ position: 'absolute', left: '244.34px', top: '479.16px' }} className="cls_009"><span className="cls_009">Enter the name
              of hospital</span></div>
            <div style={{ position: 'absolute', left: '422.83px', top: '479.16px' }} className="cls_009"><span className="cls_009">Name of hospital
              in full</span></div>
            <div style={{ position: 'absolute', left: '58.37px', top: '488.82px' }} className="cls_009"><span className="cls_009">b)</span></div>
            <div style={{ position: 'absolute', left: '75.22px', top: '488.82px' }} className="cls_009"><span className="cls_009">Room category
              occupied</span></div>
            <div style={{ position: 'absolute', left: '244.34px', top: '488.63px' }} className="cls_009"><span className="cls_009">indicate the
              room category occupied</span></div>
            <div style={{ position: 'absolute', left: '422.83px', top: '488.29px' }} className="cls_009"><span className="cls_009">Tick the right
              option</span></div>
            <div style={{ position: 'absolute', left: '58.37px', top: '499.03px' }} className="cls_009"><span className="cls_009">c)</span></div>
            <div style={{ position: 'absolute', left: '74.89px', top: '499.03px' }} className="cls_009"><span className="cls_009">Hospitalization
              due to</span></div>
            <div style={{ position: 'absolute', left: '244.34px', top: '499.15px' }} className="cls_009"><span className="cls_009">indicate reason
              of hospitalization</span></div>
            <div style={{ position: 'absolute', left: '422.83px', top: '498.20px' }} className="cls_009"><span className="cls_009">Tick the right
              option</span></div>
            <div style={{ position: 'absolute', left: '58.37px', top: '507.71px' }} className="cls_009"><span className="cls_009">d)</span></div>
            <div style={{ position: 'absolute', left: '75.22px', top: '507.71px' }} className="cls_009"><span className="cls_009">Date of
              injury/Date Disease first detected</span></div>
            <div style={{ position: 'absolute', left: '244.34px', top: '510.91px' }} className="cls_009"><span className="cls_009">Enter the
              relevant date</span></div>
            <div style={{ position: 'absolute', left: '422.83px', top: '510.54px' }} className="cls_009"><span className="cls_009">Use dd-mm-yy
              format</span></div>
            <div style={{ position: 'absolute', left: '74.89px', top: '514.14px' }} className="cls_009"><span className="cls_009">Delivery</span>
            </div>
            <div style={{ position: 'absolute', left: '58.37px', top: '523.02px' }} className="cls_009"><span className="cls_009">e)</span></div>
            <div style={{ position: 'absolute', left: '75.22px', top: '523.02px' }} className="cls_009"><span className="cls_009">Date of
              admission</span></div>
            <div style={{ position: 'absolute', left: '244.34px', top: '523.56px' }} className="cls_009"><span className="cls_009">Enter date of
              admission</span></div>
            <div style={{ position: 'absolute', left: '422.83px', top: '522.63px' }} className="cls_009"><span className="cls_009">Use dd-mm-yy
              format</span></div>
            <div style={{ position: 'absolute', left: '58.37px', top: '533.33px' }} className="cls_009"><span className="cls_009">f)</span></div>
            <div style={{ position: 'absolute', left: '73.45px', top: '533.33px' }} className="cls_009"><span className="cls_009">Time</span></div>
            <div style={{ position: 'absolute', left: '244.34px', top: '532.96px' }} className="cls_009"><span className="cls_009">Enter time of
              admission</span></div>
            <div style={{ position: 'absolute', left: '422.83px', top: '532.99px' }} className="cls_009"><span className="cls_009">Use hh-mm-
              format</span></div>
            <div style={{ position: 'absolute', left: '58.37px', top: '543.24px' }} className="cls_009"><span className="cls_009">g)</span></div>
            <div style={{ position: 'absolute', left: '75.22px', top: '543.24px' }} className="cls_009"><span className="cls_009">Date of
              discharge</span></div>
            <div style={{ position: 'absolute', left: '244.34px', top: '543.24px' }} className="cls_009"><span className="cls_009">Enter date of
              discharge</span></div>
            <div style={{ position: 'absolute', left: '422.83px', top: '543.35px' }} className="cls_009"><span className="cls_009">Use dd-mm-yy
              format</span></div>
            <div style={{ position: 'absolute', left: '58.37px', top: '553.66px' }} className="cls_009"><span className="cls_009">h)</span></div>
            <div style={{ position: 'absolute', left: '75.11px', top: '553.66px' }} className="cls_009"><span className="cls_009">Time</span></div>
            <div style={{ position: 'absolute', left: '244.34px', top: '553.18px' }} className="cls_009"><span className="cls_009">Enter time of
              discharge</span></div>
            <div style={{ position: 'absolute', left: '422.83px', top: '552.90px' }} className="cls_009"><span className="cls_009">Use hh-mm-
              format</span></div>
            <div style={{ position: 'absolute', left: '58.37px', top: '563.49px' }} className="cls_009"><span className="cls_009">I)</span></div>
            <div style={{ position: 'absolute', left: '73.57px', top: '563.49px' }} className="cls_009"><span className="cls_009">If injury give
              cause</span></div>
            <div style={{ position: 'absolute', left: '244.34px', top: '563.13px' }} className="cls_009"><span className="cls_009">indicate cause
              of injury</span></div>
            <div style={{ position: 'absolute', left: '422.83px', top: '562.78px' }} className="cls_009"><span className="cls_009">Tick the right
              option</span></div>
            <div style={{ position: 'absolute', left: '73.41px', top: '573.98px' }} className="cls_009"><span className="cls_009">If Medico
              legal</span></div>
            <div style={{ position: 'absolute', left: '244.34px', top: '573.29px' }} className="cls_009"><span className="cls_009">indicate whether
              injury is medico legal</span></div>
            <div style={{ position: 'absolute', left: '422.83px', top: '573.46px' }} className="cls_009"><span className="cls_009">Tick Yes or
              No</span></div>
            <div style={{ position: 'absolute', left: '73.41px', top: '582.89px' }} className="cls_009"><span className="cls_009">Reported to
              Police</span></div>
            <div style={{ position: 'absolute', left: '244.34px', top: '582.62px' }} className="cls_009"><span className="cls_009">indicate whether
              police report was filed</span></div>
            <div style={{ position: 'absolute', left: '422.83px', top: '583.78px' }} className="cls_009"><span className="cls_009">Tick Yes or
              No</span></div>
            <div style={{ position: 'absolute', left: '73.41px', top: '592.94px' }} className="cls_009"><span className="cls_009">MLC Report &amp;
              Police FIR attached</span></div>
            <div style={{ position: 'absolute', left: '244.34px', top: '593.43px' }} className="cls_009"><span className="cls_009">indicate whether
              MLC report and Police FIR attached</span></div>
            <div style={{ position: 'absolute', left: '422.83px', top: '593.71px' }} className="cls_009"><span className="cls_009">Tick Yes or
              No</span></div>
            <div style={{ position: 'absolute', left: '58.64px', top: '603.93px' }} className="cls_009"><span className="cls_009">j)</span></div>
            <div style={{ position: 'absolute', left: '73.51px', top: '603.93px' }} className="cls_009"><span className="cls_009">System of
              Medicene</span></div>
            <div style={{ position: 'absolute', left: '244.34px', top: '603.11px' }} className="cls_009"><span className="cls_009">Enter the system
              of medicine followed in treating the patient</span></div>
            <div style={{ position: 'absolute', left: '422.83px', top: '603.42px' }} className="cls_009"><span className="cls_009">Open Text</span>
            </div>
            <div style={{ position: 'absolute', left: '259.25px', top: '613.84px' }} className="cls_008"><span className="cls_008">SECTION E -
              DETAILS OF CLAIM</span></div>
            <div style={{ position: 'absolute', left: '58.37px', top: '623.58px' }} className="cls_009"><span className="cls_009">a)</span></div>
            <div style={{ position: 'absolute', left: '75.22px', top: '623.58px' }} className="cls_009"><span className="cls_009">Details of
              Treatment Expences</span></div>
            <div style={{ position: 'absolute', left: '244.34px', top: '624.25px' }} className="cls_009"><span className="cls_009">Enter the amount
              claimed as treatment expences</span></div>
            <div style={{ position: 'absolute', left: '422.83px', top: '623.71px' }} className="cls_009"><span className="cls_009">In rupees (Do
              not enter paise values)</span></div>
            <div style={{ position: 'absolute', left: '58.37px', top: '633.78px' }} className="cls_009"><span className="cls_009">b)</span></div>
            <div style={{ position: 'absolute', left: '75.22px', top: '633.78px' }} className="cls_009"><span className="cls_009">Claim for
              Domiciliary Hospitalization</span></div>
            <div style={{ position: 'absolute', left: '244.34px', top: '634.18px' }} className="cls_009"><span className="cls_009">indicate whether
              claim is for domiciliary hospitalization</span></div>
            <div style={{ position: 'absolute', left: '422.83px', top: '633.89px' }} className="cls_009"><span className="cls_009">Tick Yes or
              No</span></div>
            <div style={{ position: 'absolute', left: '58.37px', top: '643.79px' }} className="cls_009"><span className="cls_009">c)</span></div>
            <div style={{ position: 'absolute', left: '74.89px', top: '643.79px' }} className="cls_009"><span className="cls_009">Details of Lump
              sum/ Cash benifit claimed</span></div>
            <div style={{ position: 'absolute', left: '244.34px', top: '643.64px' }} className="cls_009"><span className="cls_009">Enter the amount
              claimed as lump sum / cash benefit</span></div>
            <div style={{ position: 'absolute', left: '422.83px', top: '644.07px' }} className="cls_009"><span className="cls_009">In rupees (Do
              not enter paise values)</span></div>
            <div style={{ position: 'absolute', left: '58.37px', top: '653.71px' }} className="cls_009"><span className="cls_009">d)</span></div>
            <div style={{ position: 'absolute', left: '75.22px', top: '653.71px' }} className="cls_009"><span className="cls_009">Claim documents
              Submitted-Check List</span></div>
            <div style={{ position: 'absolute', left: '244.34px', top: '654.34px' }} className="cls_009"><span className="cls_009">indicate which
              supporting documents are submitted</span></div>
            <div style={{ position: 'absolute', left: '422.83px', top: '654.24px' }} className="cls_009"><span className="cls_009">Tick the right
              option</span></div>
            <div style={{ position: 'absolute', left: '242.84px', top: '664.48px' }} className="cls_008"><span className="cls_008">SECTION F -
              DETAILS OF BILLS ENCLOSED</span></div>
            <div style={{ position: 'absolute', left: '58.37px', top: '675.02px' }} className="cls_009"><span className="cls_009">Indicate which
              bills are enclosed with the amount in rupees</span></div>
            <div style={{ position: 'absolute', left: '213.09px', top: '684.64px' }} className="cls_008"><span className="cls_008">SECTION G -
              DETAILS OF PRIMARY INSURED’s BANK ACCOUNT</span></div>
            <div style={{ position: 'absolute', left: '58.37px', top: '694.46px' }} className="cls_009"><span className="cls_009">a)</span></div>
            <div style={{ position: 'absolute', left: '75.22px', top: '694.46px' }} className="cls_009"><span className="cls_009">PAN</span></div>
            <div style={{ position: 'absolute', left: '244.34px', top: '694.22px' }} className="cls_009"><span className="cls_009">Enter the
              permanent account number</span></div>
            <div style={{ position: 'absolute', left: '422.84px', top: '694.22px' }} className="cls_009"><span className="cls_009">As allotted by
              the Income Tax Department</span></div>
            <div style={{ position: 'absolute', left: '58.37px', top: '704.53px' }} className="cls_009"><span className="cls_009">b)</span></div>
            <div style={{ position: 'absolute', left: '74.89px', top: '704.53px' }} className="cls_009"><span className="cls_009">Account
              Number</span></div>
            <div style={{ position: 'absolute', left: '244.34px', top: '705.17px' }} className="cls_009"><span className="cls_009">Enter the Bank
              account number</span></div>
            <div style={{ position: 'absolute', left: '422.84px', top: '704.78px' }} className="cls_009"><span className="cls_009">As allotted by
              the Bank</span></div>
            <div style={{ position: 'absolute', left: '58.37px', top: '715.11px' }} className="cls_009"><span className="cls_009">c)</span></div>
            <div style={{ position: 'absolute', left: '74.89px', top: '715.11px' }} className="cls_009"><span className="cls_009">Bank Name and
              Branch</span></div>
            <div style={{ position: 'absolute', left: '244.34px', top: '714.75px' }} className="cls_009"><span className="cls_009">Enter the Bank
              name along with the branch</span></div>
            <div style={{ position: 'absolute', left: '422.83px', top: '714.80px' }} className="cls_009"><span className="cls_009">Name of the Bank
              in full</span></div>
            <div style={{ position: 'absolute', left: '244.34px', top: '723.97px' }} className="cls_009"><span className="cls_009">Enter the name
              of the beneficiary the cheque / DD should be</span></div>
            <div style={{ position: 'absolute', left: '58.37px', top: '727.57px' }} className="cls_009"><span className="cls_009">c)</span></div>
            <div style={{ position: 'absolute', left: '74.89px', top: '727.57px' }} className="cls_009"><span className="cls_009">Cheque/ DD
              payable details</span></div>
            <div style={{ position: 'absolute', left: '422.83px', top: '727.07px' }} className="cls_009"><span className="cls_009">Name of the
              individual / organization in full</span></div>
            <div style={{ position: 'absolute', left: '244.34px', top: '730.41px' }} className="cls_009"><span className="cls_009">made out
              to</span></div>
            <div style={{ position: 'absolute', left: '58.37px', top: '739.24px' }} className="cls_009"><span className="cls_009">c)</span></div>
            <div style={{ position: 'absolute', left: '74.89px', top: '739.24px' }} className="cls_009"><span className="cls_009">IFSC Code</span>
            </div>
            <div style={{ position: 'absolute', left: '244.34px', top: '738.58px' }} className="cls_009"><span className="cls_009">Enter the IFSC
              code of the Bank branch</span></div>
            <div style={{ position: 'absolute', left: '422.83px', top: '738.98px' }} className="cls_009"><span className="cls_009">IFSC code of the
              Bank branch in full</span></div>
             
            <div style={{ position: 'absolute', left: '244.34px', top: '749.69px' }} className="cls_008"><span className="cls_008">SECTION H -
              DECLARATION BY THE INSURED</span></div>
            <div style={{ position: 'absolute', left: '58.74px', top: '759.41px' }} className="cls_009"><span className="cls_009">Read declaration
              carefully and mention date (in dd:mm:yy format), place (open text) and sign.</span></div>
          </div>
          <div style={{ position: 'absolute', left: '50%', marginLeft: '-306px', top: '1700px', width: '612px', height: '792px', borderStyle: 'outset', overflow: 'hidden' }}>
            <div style={{ position: 'absolute', left: '0px', top: '0px' }}>
              <img src={background3} width={612} height={792} />
            </div>
            <div style={{ position: 'absolute', left: '258.70px', top: '18.20px' }} className="cls_011"><span className="cls_011">CLAIM FORM - PART
              B</span></div>
            <div style={{ position: 'absolute', left: '251.11px', top: '29.09px' }} className="cls_012"><span className="cls_012">TO BE FILLED IN
              BY THE HOSPITAL</span></div>
            <div style={{ position: 'absolute', left: '198.34px', top: '36.62px' }} className="cls_012"><span className="cls_012">The issue of this
              Form is not to be taken as an admission of liability</span></div>
            <div style={{ position: 'absolute', left: '463.53px', top: '40.07px' }} className="cls_013"><span className="cls_013">(To be Filled in
              block letters)</span></div>
            <div style={{ position: 'absolute', left: '186.93px', top: '44.15px' }} className="cls_012"><span className="cls_012">Please include
              the original preauthorization request form in lieu of PART A</span></div>
            <div style={{ position: 'absolute', left: '61.30px', top: '51.10px' }} className="cls_013"><span className="cls_013">DETAILS OF
              HOSPITAL</span></div>
            <div style={{ position: 'absolute', left: '61.72px', top: '68.38px' }} className="cls_014"><span className="cls_014">a) Name of the
              hospital:</span>
              {blockgenrator('', 41)}
            </div>
            <div style={{ position: 'absolute', left: '61.72px', top: '83.65px' }} className="cls_014"><span className="cls_014">a) Hospital
              ID:</span>
              {blockgenrator('', 12)}
              
            </div>
            <div style={{ position: 'absolute', left: '265.02px', top: '83.53px' }} className="cls_014"><span className="cls_014">c) Type of
              Hospital:</span></div>
            <div style={{ position: 'absolute', left: '324.61px', top: '83.52px' }} className="cls_014"><span className="cls_014">Network :</span><span className="spanBox" />
            </div>
            <div style={{ position: 'absolute', left: '378.96px', top: '83.52px' }} className="cls_014"><span className="cls_014">Non Network
              :</span><span className="spanBox" /></div>
            <div style={{ position: 'absolute', left: '450.63px', top: '83.52px' }} className="cls_014"><span className="cls_014">(if non network
              fill section E)</span></div>
            <div style={{ position: 'absolute', left: '61.23px', top: '97.45px' }} className="cls_014"><span className="cls_014">c) Name of the
              treating doctor:</span>
              {blockgenrator('', 46)}
            </div>
            <div style={{ position: 'absolute', left: '150.40px', top: '98.86px' }} className="cls_017"><span className="cls_017" /></div>
            <div style={{ position: 'absolute', left: '161.54px', top: '98.86px' }} className="cls_017"><span className="cls_017" /></div>
            <div style={{ position: 'absolute', left: '172.96px', top: '98.86px' }} className="cls_017"><span className="cls_017" /></div>
            <div style={{ position: 'absolute', left: '184.38px', top: '98.86px' }} className="cls_017"><span className="cls_017" /></div>
            <div style={{ position: 'absolute', left: '195.80px', top: '98.86px' }} className="cls_017"><span className="cls_017" /></div>
            <div style={{ position: 'absolute', left: '207.21px', top: '98.86px' }} className="cls_017"><span className="cls_017" /></div>
            <div style={{ position: 'absolute', left: '219.19px', top: '98.86px' }} className="cls_017"><span className="cls_017" /></div>
            <div style={{ position: 'absolute', left: '288.43px', top: '98.86px' }} className="cls_017"><span className="cls_017" /></div>
            <div style={{ position: 'absolute', left: '300.31px', top: '98.86px' }} className="cls_017"><span className="cls_017" /></div>
            <div style={{ position: 'absolute', left: '310.53px', top: '98.86px' }} className="cls_017"><span className="cls_017" /></div>
            <div style={{ position: 'absolute', left: '322.95px', top: '98.86px' }} className="cls_017"><span className="cls_017" /></div>
            <div style={{ position: 'absolute', left: '335.11px', top: '98.86px' }} className="cls_017"><span className="cls_017" /></div>
            <div style={{ position: 'absolute', left: '357.24px', top: '98.86px' }} className="cls_017"><span className="cls_017" /></div>
            <div style={{ position: 'absolute', left: '368.72px', top: '98.86px' }} className="cls_017"><span className="cls_017" /></div>
            <div style={{ position: 'absolute', left: '380.20px', top: '98.86px' }} className="cls_017"><span className="cls_017" /></div>
            <div style={{ position: 'absolute', left: '392.23px', top: '98.86px' }} className="cls_017"><span className="cls_017" /></div>
            <div style={{ position: 'absolute', left: '426.19px', top: '98.86px' }} className="cls_017"><span className="cls_017" /></div>
            <div style={{ position: 'absolute', left: '438.46px', top: '98.86px' }} className="cls_017"><span className="cls_017" /></div>
            <div style={{ position: 'absolute', left: '449.36px', top: '98.86px' }} className="cls_017"><span className="cls_017" /></div>
            <div style={{ position: 'absolute', left: '461.08px', top: '98.86px' }} className="cls_017"><span className="cls_017" /></div>
            <div style={{ position: 'absolute', left: '472.80px', top: '98.86px' }} className="cls_017"><span className="cls_017" /></div>
            <div style={{ position: 'absolute', left: '483.97px', top: '98.86px' }} className="cls_017"><span className="cls_017" /></div>
            <div style={{ position: 'absolute', left: '507.69px', top: '98.86px' }} className="cls_017"><span className="cls_017" /></div>
            <div style={{ position: 'absolute', left: '518.62px', top: '98.86px' }} className="cls_017"><span className="cls_017" /></div>
            <div style={{ position: 'absolute', left: '529.54px', top: '98.86px' }} className="cls_017"><span className="cls_017" /></div>
            <div style={{ position: 'absolute', left: '541.02px', top: '98.86px' }} className="cls_017"><span className="cls_017" /></div>
            <div style={{ position: 'absolute', left: '61.08px', top: '111.99px' }} className="cls_014"><span className="cls_014">)
              Qualification:</span></div>
            <div style={{ position: 'absolute', left: '216.58px', top: '112.26px' }} className="cls_014"><span className="cls_014">f) Registration
              No. with State Code:</span>
              {blockgenrator('', 8)}
            </div>
            <div style={{ position: 'absolute', left: '402.72px', top: '112.03px' }} className="cls_014"><span className="cls_014">g) Phone
              No.</span>
              {blockgenrator('', 10)}
              </div>
            <div style={{ position: 'absolute', left: '61.30px', top: '128.99px' }} className="cls_013"><span className="cls_013">DETAILS OF THE
              PATIENT ADMITTED</span></div>
            <div style={{ position: 'absolute', left: '61.31px', top: '146.53px' }} className="cls_014"><span className="cls_014">a) Name of the
              Patient:</span>
              {blockgenrator('', 45)}
            </div>
            <div style={{ position: 'absolute', left: '150.83px', top: '145.89px' }} className="cls_017"><span className="cls_017" /></div>
            <div style={{ position: 'absolute', left: '161.98px', top: '145.89px' }} className="cls_017"><span className="cls_017" /></div>
            <div style={{ position: 'absolute', left: '173.40px', top: '145.89px' }} className="cls_017"><span className="cls_017" /></div>
            <div style={{ position: 'absolute', left: '184.81px', top: '145.89px' }} className="cls_017"><span className="cls_017" /></div>
            <div style={{ position: 'absolute', left: '196.23px', top: '145.89px' }} className="cls_017"><span className="cls_017" /></div>
            <div style={{ position: 'absolute', left: '207.65px', top: '145.89px' }} className="cls_017"><span className="cls_017" /></div>
            <div style={{ position: 'absolute', left: '219.62px', top: '145.89px' }} className="cls_017"><span className="cls_017" /></div>
            <div style={{ position: 'absolute', left: '288.87px', top: '145.89px' }} className="cls_017"><span className="cls_017" /></div>
            <div style={{ position: 'absolute', left: '300.74px', top: '145.89px' }} className="cls_017"><span className="cls_017" /></div>
            <div style={{ position: 'absolute', left: '310.96px', top: '145.89px' }} className="cls_017"><span className="cls_017" /></div>
            <div style={{ position: 'absolute', left: '323.39px', top: '145.89px' }} className="cls_017"><span className="cls_017" /></div>
            <div style={{ position: 'absolute', left: '335.54px', top: '145.89px' }} className="cls_017"><span className="cls_017" /></div>
            <div style={{ position: 'absolute', left: '357.67px', top: '145.89px' }} className="cls_017"><span className="cls_017" /></div>
            <div style={{ position: 'absolute', left: '369.15px', top: '145.89px' }} className="cls_017"><span className="cls_017" /></div>
            <div style={{ position: 'absolute', left: '380.63px', top: '145.89px' }} className="cls_017"><span className="cls_017" /></div>
            <div style={{ position: 'absolute', left: '392.66px', top: '145.89px' }} className="cls_017"><span className="cls_017" /></div>
            <div style={{ position: 'absolute', left: '426.62px', top: '145.89px' }} className="cls_017"><span className="cls_017" /></div>
            <div style={{ position: 'absolute', left: '438.90px', top: '145.89px' }} className="cls_017"><span className="cls_017" /></div>
            <div style={{ position: 'absolute', left: '449.79px', top: '145.89px' }} className="cls_017"><span className="cls_017" /></div>
            <div style={{ position: 'absolute', left: '461.51px', top: '145.89px' }} className="cls_017"><span className="cls_017" /></div>
            <div style={{ position: 'absolute', left: '473.23px', top: '145.89px' }} className="cls_017"><span className="cls_017" /></div>
            <div style={{ position: 'absolute', left: '484.40px', top: '145.89px' }} className="cls_017"><span className="cls_017" /></div>
            <div style={{ position: 'absolute', left: '508.13px', top: '145.89px' }} className="cls_017"><span className="cls_017" /></div>
            <div style={{ position: 'absolute', left: '519.05px', top: '145.89px' }} className="cls_017"><span className="cls_017" /></div>
            <div style={{ position: 'absolute', left: '529.97px', top: '145.89px' }} className="cls_017"><span className="cls_017" /></div>
            <div style={{ position: 'absolute', left: '541.45px', top: '145.89px' }} className="cls_017"><span className="cls_017" /></div>
            <div style={{ position: 'absolute', left: '61.41px', top: '160.92px' }} className="cls_014"><span className="cls_014">b) IP
              Registration Number:</span>
              {blockgenrator('', 7)}
            </div>
            <div style={{ position: 'absolute', left: '225.27px', top: '161.28px' }} className="cls_014"><span className="cls_014">c) Gender:
              Male </span>
              <span className="spanBox" /></div>
            <div style={{ position: 'absolute', left: '283.80px', top: '161.28px' }} className="cls_014"><span className="cls_014">Female </span><span className="spanBox" />
            </div>
            <div style={{ position: 'absolute', left: '324.12px', top: '161.16px' }} className="cls_014"><span className="cls_014">d) Age:
              Years</span></div>
            <div style={{ position: 'absolute', left: '360.25px', top: '160.62px' }} className="cls_018"><span className="cls_018"><span className="spanBox" /></span></div>
            <div style={{ position: 'absolute', left: '371.68px', top: '160.62px' }} className="cls_018"><span className="cls_018"><span className="spanBox" /></span></div>
            <div style={{ position: 'absolute', left: '384.34px', top: '161.28px' }} className="cls_014"><span className="cls_014">Months</span>
            </div>
            <div style={{ position: 'absolute', left: '405.49px', top: '160.62px' }} className="cls_018"><span className="cls_018"><span className="spanBox" /></span></div>
            <div style={{ position: 'absolute', left: '416.05px', top: '160.62px' }} className="cls_018"><span className="cls_018"><span className="spanBox" /></span></div>
            <div style={{ position: 'absolute', left: '433.39px', top: '162.35px' }} className="cls_014"><span className="cls_014">e) Date of
              birth: </span>
              <span className="spanBox" />
              <span className="spanBox" />

              <span className="spanBox" />
              <span className="spanBox" />

              <span className="spanBox" />
              <span className="spanBox" />



              </div>
            
            <div style={{ position: 'absolute', left: '62.76px', top: '175.86px' }} className="cls_014"><span className="cls_014">f) Date of
              Admission:</span></div>
            <div style={{ position: 'absolute', left: '127.52px', top: '174.98px' }} className="cls_018"><span className="cls_018"><span className="spanBox" /></span></div>
            <div style={{ position: 'absolute', left: '138.99px', top: '174.98px' }} className="cls_018"><span className="cls_018"><span className="spanBox" /></span></div>
            <div style={{ position: 'absolute', left: '160.79px', top: '174.98px' }} className="cls_018"><span className="cls_018"><span className="spanBox" /></span></div>
            <div style={{ position: 'absolute', left: '172.03px', top: '174.98px' }} className="cls_018"><span className="cls_018"><span className="spanBox" /></span></div>
            <div style={{ position: 'absolute', left: '193.43px', top: '174.98px' }} className="cls_018"><span className="cls_018"><span className="spanBox" /></span></div>
            <div style={{ position: 'absolute', left: '205.09px', top: '174.98px' }} className="cls_018"><span className="cls_018"><span className="spanBox" /></span></div>
            <div style={{ position: 'absolute', left: '225.47px', top: '176.41px' }} className="cls_014"><span className="cls_014">g) Time:</span>
            </div>
            <div style={{ position: 'absolute', left: '250.39px', top: '174.98px' }} className="cls_018"><span className="cls_018"><span className="spanBox" /></span></div>
            <div style={{ position: 'absolute', left: '260.02px', top: '174.98px' }} className="cls_018"><span className="cls_018"><span className="spanBox" /></span></div>
            <div style={{ position: 'absolute', left: '283.59px', top: '174.98px' }} className="cls_018"><span className="cls_018"><span className="spanBox" /></span></div>
            <div style={{ position: 'absolute', left: '293.60px', top: '174.98px' }} className="cls_018"><span className="cls_018"><span className="spanBox" /></span></div>
            <div style={{ position: 'absolute', left: '324.91px', top: '176.10px' }} className="cls_014"><span className="cls_014">h) Date of
              Discharge:</span></div>
            <div style={{ position: 'absolute', left: '383.29px', top: '175.05px' }} className="cls_018"><span className="cls_018"><span className="spanBox" /></span></div>
            <div style={{ position: 'absolute', left: '394.99px', top: '175.05px' }} className="cls_018"><span className="cls_018"><span className="spanBox" /></span></div>
            <div style={{ position: 'absolute', left: '414.97px', top: '175.05px' }} className="cls_018"><span className="cls_018"><span className="spanBox" /></span></div>
            <div style={{ position: 'absolute', left: '425.53px', top: '175.05px' }} className="cls_018"><span className="cls_018"><span className="spanBox" /></span></div>
            <div style={{ position: 'absolute', left: '449.58px', top: '175.99px' }} className="cls_018"><span className="cls_018"><span className="spanBox" /></span></div>
            <div style={{ position: 'absolute', left: '461.47px', top: '175.99px' }} className="cls_018"><span className="cls_018"><span className="spanBox" /></span></div>
            <div style={{ position: 'absolute', left: '506.45px', top: '174.92px' }} className="cls_018"><span className="cls_018"><span className="spanBox" /></span></div>
            <div style={{ position: 'absolute', left: '517.05px', top: '174.92px' }} className="cls_018"><span className="cls_018"><span className="spanBox" /></span></div>
            <div style={{ position: 'absolute', left: '539.07px', top: '175.63px' }} className="cls_018"><span className="cls_018"><span className="spanBox" /></span></div>
            <div style={{ position: 'absolute', left: '549.67px', top: '175.63px' }} className="cls_018"><span className="cls_018"><span className="spanBox" /></span></div>
            <div style={{ position: 'absolute', left: '61.98px', top: '191.26px' }} className="cls_014"><span className="cls_014">j) Type of
              Admission:</span></div>
            <div style={{ position: 'absolute', left: '119.52px', top: '191.70px' }} className="cls_014"><span className="cls_014">Emergency </span>
              <span className="spanBox" />
            </div>
            <div style={{ position: 'absolute', left: '160.74px', top: '191.76px' }} className="cls_014"><span className="cls_014">Planned </span>
              <span className="spanBox" />
            </div>
            <div style={{ position: 'absolute', left: '197.41px', top: '191.74px' }} className="cls_014"><span className="cls_014">Day Care </span>
              <span className="spanBox" />
            </div>
            <div style={{ position: 'absolute', left: '235.47px', top: '191.94px' }} className="cls_014"><span className="cls_014">Maternity </span>
              <span className="spanBox" />
            </div>
            <div style={{ position: 'absolute', left: '292.71px', top: '191.26px' }} className="cls_014"><span className="cls_014">k) If
              Maternity</span></div>
            <div style={{ position: 'absolute', left: '336.04px', top: '190.72px' }} className="cls_014"><span className="cls_014">i) Date of
              Delivery: </span></div>
            <div style={{ position: 'absolute', left: '383.73px', top: '190.62px' }} className="cls_018"><span className="cls_018" />
              <span className="spanBox" /></div>
            <div style={{ position: 'absolute', left: '395.43px', top: '190.62px' }} className="cls_018"><span className="cls_018" />
              <span className="spanBox" /></div>
            <div style={{ position: 'absolute', left: '414.99px', top: '190.49px' }} className="cls_018"><span className="cls_018" />
              <span className="spanBox" /></div>
            <div style={{ position: 'absolute', left: '425.55px', top: '190.49px' }} className="cls_018"><span className="cls_018" />
              <span className="spanBox" /></div>
            <div style={{ position: 'absolute', left: '450.22px', top: '191.25px' }} className="cls_018"><span className="cls_018" />
              <span className="spanBox" /></div>
            <div style={{ position: 'absolute', left: '462.12px', top: '191.25px' }} className="cls_018"><span className="cls_018" />
              <span className="spanBox" /></div>
            <div style={{ position: 'absolute', left: '477.07px', top: '190.66px' }} className="cls_014"><span className="cls_014">ii) Gravida
              Status: :</span>
              {blockgenrator('', 3)}
              </div>
            <div style={{ position: 'absolute', left: '61.80px', top: '206.17px' }} className="cls_015"><span className="cls_015">I) Status at time
              of discharge:</span></div>
            <div style={{ position: 'absolute', left: '145.74px', top: '206.14px' }} className="cls_015"><span className="cls_015">Discharge to
              home </span>
              <span className="spanBox" />
              </div>
            <div style={{ position: 'absolute', left: '208.30px', top: '206.36px' }} className="cls_015"><span className="cls_015">Discharge to
              another hospital </span>
              <span className="spanBox" /></div>
            <div style={{ position: 'absolute', left: '300.80px', top: '206.47px' }} className="cls_015"><span className="cls_015">Deceased </span>
              <span className="spanBox" />
            </div>
            <div style={{ position: 'absolute', left: '409.59px', top: '206.66px' }} className="cls_014"><span className="cls_014">m) Total claimed
              amount</span>
              {blockgenrator('', 7)}
            </div>
            <div style={{ position: 'absolute', left: '60.57px', top: '224.17px' }} className="cls_013"><span className="cls_013">DETAILS OF
              AILMENT DIAGNOSED (PRIMARY)</span></div>
            <div style={{ position: 'absolute', left: '69.31px', top: '243.26px' }} className="cls_014"><span className="cls_014">a)</span></div>
            <div style={{ position: 'absolute', left: '144.69px', top: '243.30px' }} className="cls_016"><span className="cls_016">ICD 10
              Codes</span></div>
            <div style={{ position: 'absolute', left: '241.45px', top: '244.05px' }} className="cls_016"><span className="cls_016">Description</span></div>
            <div style={{ position: 'absolute', left: '345.90px', top: '243.26px' }} className="cls_014"><span className="cls_014">b)</span></div>
            <div style={{ position: 'absolute', left: '402.49px', top: '243.31px' }} className="cls_016"><span className="cls_016">ICD 10
              PCS</span></div>
            <div style={{ position: 'absolute', left: '495.07px', top: '244.05px' }} className="cls_016"><span className="cls_016">Description</span></div>
            <div style={{ position: 'absolute', left: '13.32px', top: '258.80px' }} className="cls_016"><span className="cls_016">I. Primary
              Diagnosis </span>
              {blockgenrator('', 7)}
              <span className="spanBox" style={{ width: '127px', marginLeft: '1.25%' }} />
              <span className="spanBox" style={{ width: '127px', marginLeft: '31%' }} />
            </div>
            <div style={{ position: 'absolute', left: '323.77px', top: '258.79px' }} className="cls_016"><span className="cls_016">i. Procedure
              1:</span>
              {blockgenrator('', 7)}
              <span className="spanBox" style={{ width: '127px', marginLeft: '6%' }} />
              <span className="spanBox" style={{ width: '127px', marginLeft: '38.5%' }} />
            </div>
            <div style={{ position: 'absolute', left: '22.68px', top: '284.60px' }} className="cls_016"><span className="cls_016">ii. Additional
              Diagnosis: </span>
              {blockgenrator('', 7)}
              <span className="spanBox" style={{ width: '107px', marginLeft: '1.25%' }} />
              <span className="spanBox" style={{ width: '107px', marginLeft: '38%' }} />
            </div>
            <div style={{ position: 'absolute', left: '322.97px', top: '284.73px' }} className="cls_016"><span className="cls_016">ii. Procedure
              2:</span>
              {blockgenrator('', 7)}
              <span className="spanBox" style={{ width: '127px', marginLeft: '6%' }} />
              <span className="spanBox" style={{ width: '127px', marginLeft: '38.5%' }} />
            </div>
            <div style={{ position: 'absolute', left: '13.68px', top: '310.25px' }} className="cls_016"><span className="cls_016">iii.
              Co-morbidities: </span>
              {blockgenrator('', 7)}
              <span className="spanBox" style={{ width: '127px', marginLeft: '1.25%' }} />
              <span className="spanBox" style={{ width: '127px', marginLeft: '32%' }} />
            </div>
            <div style={{ position: 'absolute', left: '323.62px', top: '310.22px' }} className="cls_016"><span className="cls_016">iii. Procedure
              3:</span>
              {blockgenrator('', 7)}
              <span className="spanBox" style={{ width: '127px', marginLeft: '6%' }} />
              <span className="spanBox" style={{ width: '127px', marginLeft: '39%' }} />
            </div>
            <div style={{ position: 'absolute', left: '13.98px', top: '335.57px' }} className="cls_016"><span className="cls_016">iv.
              Co-morbidities: </span>
              {blockgenrator('', 7)}
              <span className="spanBox" style={{ width: '127px', marginLeft: '1.25%' }} />
              <span className="spanBox" style={{ width: '127px', marginLeft: '32%' }} />
            </div>
            <div style={{ position: 'absolute', left: '333.62px', top: '335.22px' }} className="cls_016"><span className="cls_016">iv. Details of procedure:</span>
              {blockgenrator('', 7)}
              <span className="spanBox" style={{ width: '127px', marginLeft: '1%' }} />
              <span className="spanBox" style={{ width: '127px', marginLeft: '41%' }} />
            </div>
            <div style={{ position: 'absolute', left: '61.31px', top: '368.70px' }} className="cls_014"><span className="cls_014">c)
              Pre-authorization obtained:</span></div>
            <div style={{ position: 'absolute', left: '223.31px', top: '368.55px' }} className="cls_014"><span className="cls_014"> <span className="spanBox" />Yes</span></div>
            <div style={{ position: 'absolute', left: '248.85px', top: '368.55px' }} className="cls_014"><span className="cls_014"> <span className="spanBox" />No</span></div>
            <div style={{ position: 'absolute', left: '266.90px', top: '368.70px' }} className="cls_014"><span className="cls_014">d)
              Pre-authorization Number:</span>
              {blockgenrator('', 12)}
            </div>
            <div style={{ position: 'absolute', left: '60.04px', top: '383.68px' }} className="cls_014"><span className="cls_014">e) If
              authorization by network hospital not obtained, give reason:</span></div>
            <div style={{ position: 'absolute', left: '60.21px', top: '402.13px' }} className="cls_014"><span className="cls_014">f)
              Hospitalization due to injury:</span></div>
            <div style={{ position: 'absolute', left: '142.92px', top: '401.50px' }} className="cls_014"><span className="cls_014"> <span className="spanBox" />Yes</span></div>
            <div style={{ position: 'absolute', left: '168.46px', top: '401.50px' }} className="cls_014"><span className="cls_014"> <span className="spanBox" />No</span></div>
            <div style={{ position: 'absolute', left: '198.80px', top: '401.50px' }} className="cls_014"><span className="cls_014">I. If Yes, give
              cause</span></div>
            <div style={{ position: 'absolute', left: '262.33px', top: '401.89px' }} className="cls_014"><span className="cls_014">Self-inflicted</span>
              <span className="spanBox" /></div>
            <div style={{ position: 'absolute', left: '318.09px', top: '401.35px' }} className="cls_014"><span className="cls_014">Road Traffic
              Accident</span>
              <span className="spanBox" /></div>
            <div style={{ position: 'absolute', left: '406.16px', top: '401.09px' }} className="cls_014"><span className="cls_014">Substance abuse
              / alcohol consumption</span>
              <span className="spanBox" /></div>
            <div style={{ position: 'absolute', left: '60.45px', top: '418.68px' }} className="cls_014"><span className="cls_014">ii) If injury due
              to alcohol consumption, Test conducted to establish this:   .</span></div>
            <div style={{ position: 'absolute', left: '250.29px', top: '418.06px' }} className="cls_014"><span className="spanBox" />
              <span className="cls_014">Yes
              </span></div>
            <div style={{ position: 'absolute', left: '280.02px', top: '418.06px' }} className="cls_014"><span className="spanBox" />
              <span className="cls_014">No
              </span></div>
            <div style={{ position: 'absolute', left: '312.07px', top: '418.10px' }} className="cls_014"><span className="cls_014">(If Yes, attach
              reports)</span></div>
            <div style={{ position: 'absolute', left: '371.19px', top: '418.64px' }} className="cls_014"><span className="cls_014">iii. If Medico
              legal:</span></div>
            <div style={{ position: 'absolute', left: '422.96px', top: '418.06px' }} className="cls_014"><span className="cls_014"> <span className="spanBox" />Yes</span></div>
            <div style={{ position: 'absolute', left: '448.50px', top: '418.06px' }} className="cls_014"><span className="cls_014"> <span className="spanBox" />No</span></div>
            <div style={{ position: 'absolute', left: '461.18px', top: '418.23px' }} className="cls_014"><span className="cls_014">iv. Reported to
              Police</span></div>
            <div style={{ position: 'absolute', left: '523.89px', top: '418.17px' }} className="cls_014"><span className="cls_014"> <span className="spanBox" />Yes</span></div>
            <div style={{ position: 'absolute', left: '549.43px', top: '418.17px' }} className="cls_014"><span className="cls_014"> <span className="spanBox" />No</span></div>
            <div style={{ position: 'absolute', left: '60.98px', top: '434.60px' }} className="cls_016"><span className="cls_016">v. FIR No.</span>
            {blockgenrator('', 10)}
            </div>
            <div style={{ position: 'absolute', left: '218.83px', top: '435.48px' }} className="cls_016"><span className="cls_016">vi. If not
              reported to police give reason:</span>
              <span className="spanBox" style={{ width: '255px' }} /></div>
            <div style={{ position: 'absolute', left: '60.57px', top: '458.75px' }} className="cls_013"><span className="cls_013">
              CLAIM DOCUMENTS SUBMITTED - CHECK LIST</span></div>
            <div style={{ position: 'absolute', left: '85.27px', top: '474.04px' }} className="cls_016"><span className="cls_016">
              <span className="spanBox" />Claim Form duly signed
            </span></div>
            <div style={{ position: 'absolute', left: '346.15px', top: '474.60px' }} className="cls_016"><span className="cls_016">
              <span className="spanBox" />Investigation reports</span></div>
            <div style={{ position: 'absolute', left: '85.27px', top: '485.65px' }} className="cls_016"><span className="cls_016">
              <span className="spanBox" />Original
              Pre-authorization request</span></div>
            <div style={{ position: 'absolute', left: '346.15px', top: '486.11px' }} className="cls_016"><span className="cls_016">
              <span className="spanBox" />CT/MR/USG/HPE
              investigation reports</span></div>
            <div style={{ position: 'absolute', left: '85.27px', top: '496.84px' }} className="cls_016"><span className="cls_016">
              <span className="spanBox" />Copy of the Pre-authorization approval letter</span></div>
            <div style={{ position: 'absolute', left: '346.15px', top: '496.81px' }} className="cls_016"><span className="cls_016">
              <span className="spanBox" />Doctor’s reference slip for investigation</span>
            </div>
            <div style={{ position: 'absolute', left: '85.27px', top: '507.90px' }} className="cls_016"><span className="cls_016">
              <span className="spanBox" />Copy of Photo ID
              Card of patient Verified by hospital</span></div>
            <div style={{ position: 'absolute', left: '346.15px', top: '507.82px' }} className="cls_016"><span className="cls_016">
              <span className="spanBox" />ECG</span></div>
            <div style={{ position: 'absolute', left: '85.36px', top: '519.44px' }} className="cls_016"><span className="cls_016">
              <span className="spanBox" />Hospital Discharge summary</span>
            </div>
            <div style={{ position: 'absolute', left: '346.15px', top: '519.10px' }} className="cls_016"><span className="cls_016">
              <span className="spanBox" />Pharmacy bills</span>
            </div>
            <div style={{ position: 'absolute', left: '85.48px', top: '530.16px' }} className="cls_016"><span className="cls_016">
              <span className="spanBox" />Operation Theatre
              Notes</span></div>
            <div style={{ position: 'absolute', left: '346.15px', top: '530.07px' }} className="cls_016"><span className="cls_016">
              <span className="spanBox" />MLC reports &amp;
              Police FIR</span></div>
            <div style={{ position: 'absolute', left: '85.27px', top: '540.91px' }} className="cls_016"><span className="cls_016"><span className="spanBox" />
              Hospital main bill</span></div>
            <div style={{ position: 'absolute', left: '346.15px', top: '540.48px' }} className="cls_016"><span className="cls_016">
              <span className="spanBox" />Original death
              summary from hospital where applicable</span>
            </div>
            <div style={{ position: 'absolute', left: '85.27px', top: '551.63px' }} className="cls_016"><span className="cls_016">
              <span className="spanBox" />Hospital break-up
              bill</span></div>
            <div style={{ position: 'absolute', left: '346.16px', top: '551.84px' }} className="cls_016"><span className="cls_016">
              <span className="spanBox" />Any other,
              please specify</span>
            </div>
            <div style={{ position: 'absolute', left: '61.30px', top: '575.89px' }} className="cls_013"><span className="cls_013">ADDITIONAL
              DETAILS IN CASE OF NON NETWORK HOSPITAL</span></div>
            <div style={{ position: 'absolute', left: '249.15px', top: '575.89px' }} className="cls_013"><span className="cls_013">(ONLY FILL IN
              CASE OF NON-NETWORK HOSPITAL)</span></div>
            <div style={{ position: 'absolute', left: '59.97px', top: '593.32px' }} className="cls_016"><span className="cls_016">a) Address of the
              Hospital</span>
              {blockgenrator('', 112)}
            </div>
            <div style={{ position: 'absolute', left: '65.09px', top: '621.55px' }} className="cls_016"><span className="cls_016">City:</span>
            {blockgenrator('', 17)}
            </div>
            <div style={{ position: 'absolute', left: '229.44px', top: '621.35px' }} className="cls_016"><span className="cls_016">State:</span>
            {blockgenrator('', 16)}
            </div>
            <div style={{ position: 'absolute', left: '65.06px', top: '635.48px' }} className="cls_016"><span className="cls_016">Pin Code:</span>
            {blockgenrator('', 6)}
            </div>
            <div style={{ position: 'absolute', left: '224.19px', top: '635.99px' }} className="cls_016"><span className="cls_016">b) Phone
              No.</span>
              {blockgenrator('', 11)}
            </div>
            <div style={{ position: 'absolute', left: '382.60px', top: '635.68px' }} className="cls_016"><span className="cls_016">c) Registration
              No. with State Code:</span>
              {blockgenrator('', 8)}
            </div>
            <div style={{ position: 'absolute', left: '60.49px', top: '649.76px' }} className="cls_016"><span className="cls_016">d) Hospital
              PAN:</span>
              {blockgenrator('', 8)}
            </div>
            <div style={{ position: 'absolute', left: '205.65px', top: '649.73px' }} className="cls_016"><span className="cls_016">e) Number of
              inpatient beds</span>
              {blockgenrator('', 3)}
            </div>
            <div style={{ position: 'absolute', left: '313.50px', top: '655.28px' }} className="cls_016"><span className="cls_016">f) Facilities
              available in the hospital</span></div>
            <div style={{ position: 'absolute', left: '412.32px', top: '655.30px' }} className="cls_016"><span className="cls_016">i. OT</span> </div>
            <div style={{ position: 'absolute', left: '437.60px', top: '653.02px' }} className="cls_014"><span className="cls_014">Yes .</span>           
              <span className="spanBox" />
            </div>
            <div style={{ position: 'absolute', left: '463.14px', top: '653.02px' }} className="cls_014"><span className="cls_014">No .</span>
              <span className="spanBox" /></div>
            <div style={{ position: 'absolute', left: '496.16px', top: '655.97px' }} className="cls_016"><span className="cls_016">ii. ICU</span>
            </div>
            <div style={{ position: 'absolute', left: '525.26px', top: '653.02px' }} className="cls_014"><span className="cls_014">Yes .</span>
              <span className="spanBox" /></div>
            <div style={{ position: 'absolute', left: '547.43px', top: '653.02px' }} className="cls_014"><span className="cls_014">No .</span>
              <span className="spanBox" /></div>
            <div style={{ position: 'absolute', left: '61.07px', top: '668.72px' }} className="cls_016"><span className="cls_016">iii.
              Others:</span>
              <span className="spanBox" style={{ width: '513px' }} /></div>
            <div style={{ position: 'absolute', left: '60.54px', top: '689.52px' }} className="cls_013"><span className="cls_013">DECLARATION BY
              THE HOSPITAL</span></div>
            <div style={{ position: 'absolute', left: '453.54px', top: '690.29px' }} className="cls_013"><span className="cls_013">(PLEASE READ
              VERY CAREFULLY)</span></div>
            <div style={{ position: 'absolute', left: '61.07px', top: '705.83px' }} className="cls_016"><span className="cls_016">We hereby declare
              that the information furnished in this Claim Form is true &amp; correct to the best of our knowledge and
              belief. If we have made any false or untrue statement, suppression or concealment of any material
              fact our right to claim under this claim shall be forfeited.</span></div>
            <div style={{ position: 'absolute', left: '60.23px', top: '738.99px' }} className="cls_016"><span className="cls_016">Date:</span>
            </div>
            <div style={{ position: 'absolute', left: '86.76px', top: '739.57px' }} className="cls_018"><span className="cls_018"><span className="spanBox" />
            </span></div>
            <div style={{ position: 'absolute', left: '98.46px', top: '739.57px' }} className="cls_018"><span className="cls_018"><span className="spanBox" />
            </span></div>
            <div style={{ position: 'absolute', left: '121.66px', top: '739.57px' }} className="cls_018"><span className="cls_018"><span className="spanBox" />
            </span></div>
            <div style={{ position: 'absolute', left: '132.26px', top: '739.57px' }} className="cls_018"><span className="cls_018"><span className="spanBox" />
            </span></div>
            <div style={{ position: 'absolute', left: '157.37px', top: '739.57px' }} className="cls_018"><span className="cls_018"><span className="spanBox" />
            </span></div>
            <div style={{ position: 'absolute', left: '169.27px', top: '739.57px' }} className="cls_018"><span className="cls_018"><span className="spanBox" />
            </span></div>
            <div style={{ position: 'absolute', left: '60.23px', top: '757.58px' }} className="cls_016"><span className="cls_016">Place:</span>
              <span className="spanBox" style={{ width: '95px' }} />
            </div>
            <div style={{ position: 'absolute', left: '254.72px', top: '758.31px' }} className="cls_016"><span className="cls_016">Signature and
              Seal of the Hospital Authority:</span>
              <span className="spanBox" style={{ width: '220px', height: '40px', position: 'absolute', marginTop: '-25px', borderColor: 'black' }} /></div>
          </div>
          <div style={{ position: 'absolute', left: '50%', marginLeft: '-306px', top: '2406px', width: '612px', height: '792px', borderStyle: 'outset', overflow: 'hidden' }}>
            <div style={{ position: 'absolute', left: '0px', top: '0px' }}>
              <img src={background4} width={612} height={792} />
            </div>
            <div style={{ position: 'absolute', left: '170.93px', top: '26.91px' }} className="cls_019"><span className="cls_019">GUIDANCE FOR
              FILLING CLAIM FORM - PART B (To be filled in by the hospital)</span></div>
            <div style={{ position: 'absolute', left: '116.45px', top: '41.75px' }} className="cls_019"><span className="cls_019">DATA
              ELEMENT</span></div>
            <div style={{ position: 'absolute', left: '303.29px', top: '41.06px' }} className="cls_019"><span className="cls_019">DESCRIPTION</span></div>
            <div style={{ position: 'absolute', left: '475.52px', top: '40.71px' }} className="cls_019"><span className="cls_019">FORMAT</span>
            </div>
            <div style={{ position: 'absolute', left: '244.49px', top: '53.75px' }} className="cls_019"><span className="cls_019">SECTION A -
              DETAILS OF HOSPITAL</span></div>
            <div style={{ position: 'absolute', left: '60.72px', top: '65.63px' }} className="cls_020"><span className="cls_020">a)</span></div>
            <div style={{ position: 'absolute', left: '77.19px', top: '65.63px' }} className="cls_020"><span className="cls_020">Name of the
              hospital:</span></div>
            <div style={{ position: 'absolute', left: '240.81px', top: '65.63px' }} className="cls_020"><span className="cls_020">Enter the name of
              hospital</span></div>
            <div style={{ position: 'absolute', left: '426.55px', top: '65.64px' }} className="cls_020"><span className="cls_020">Name of the
              hospital in full</span></div>
            <div style={{ position: 'absolute', left: '60.72px', top: '79.44px' }} className="cls_020"><span className="cls_020">b)</span></div>
            <div style={{ position: 'absolute', left: '77.19px', top: '79.44px' }} className="cls_020"><span className="cls_020">Hospital ID</span>
            </div>
            <div style={{ position: 'absolute', left: '240.81px', top: '79.44px' }} className="cls_020"><span className="cls_020">Enter ID number
              of hospital</span></div>
            <div style={{ position: 'absolute', left: '426.56px', top: '79.44px' }} className="cls_020"><span className="cls_020">As allocated by
              the TPA</span></div>
            <div style={{ position: 'absolute', left: '60.72px', top: '91.69px' }} className="cls_020"><span className="cls_020">c)</span></div>
            <div style={{ position: 'absolute', left: '76.76px', top: '91.69px' }} className="cls_020"><span className="cls_020">Type of
              Hospital</span></div>
            <div style={{ position: 'absolute', left: '240.81px', top: '90.82px' }} className="cls_020"><span className="cls_020">Indicate whether
              in network or non network hospital</span></div>
            <div style={{ position: 'absolute', left: '426.55px', top: '90.83px' }} className="cls_020"><span className="cls_020">Tick the right
              option</span></div>
            <div style={{ position: 'absolute', left: '60.72px', top: '104.86px' }} className="cls_020"><span className="cls_020">c)</span></div>
            <div style={{ position: 'absolute', left: '76.86px', top: '104.86px' }} className="cls_020"><span className="cls_020">Name of treating
              doctor</span></div>
            <div style={{ position: 'absolute', left: '240.81px', top: '104.21px' }} className="cls_020"><span className="cls_020">Enter the name
              of the treating doctor</span></div>
            <div style={{ position: 'absolute', left: '426.55px', top: '104.21px' }} className="cls_020"><span className="cls_020">Name of doctor
              in full</span></div>
            <div style={{ position: 'absolute', left: '60.72px', top: '117.01px' }} className="cls_020"><span className="cls_020">e)</span></div>
            <div style={{ position: 'absolute', left: '77.19px', top: '117.01px' }} className="cls_020"><span className="cls_020">Qualification</span></div>
            <div style={{ position: 'absolute', left: '240.81px', top: '117.01px' }} className="cls_020"><span className="cls_020">Enter the
              qualification of the treating doctor</span></div>
            <div style={{ position: 'absolute', left: '426.56px', top: '117.01px' }} className="cls_020"><span className="cls_020">Abbreviations of
              educational qualifications</span></div>
            <div style={{ position: 'absolute', left: '60.72px', top: '129.34px' }} className="cls_020"><span className="cls_020">f)</span></div>
            <div style={{ position: 'absolute', left: '75.57px', top: '129.34px' }} className="cls_020"><span className="cls_020">Registration No.
              with State Code</span></div>
            <div style={{ position: 'absolute', left: '240.81px', top: '129.34px' }} className="cls_020"><span className="cls_020">Enter
              registration number of doctor along with state code.
            </span></div>
            <div style={{ position: 'absolute', left: '422.56px', top: '129.34px' }} className="cls_020"><span className="cls_020">As allocated by
              the Medical Council of India</span></div>
            <div style={{ position: 'absolute', left: '60.72px', top: '143.46px' }} className="cls_020"><span className="cls_020">g)</span></div>
            <div style={{ position: 'absolute', left: '77.19px', top: '143.46px' }} className="cls_020"><span className="cls_020">Phone No.</span>
            </div>
            <div style={{ position: 'absolute', left: '240.81px', top: '143.46px' }} className="cls_020"><span className="cls_020">Enter the phone
              number of doctor</span></div>
            <div style={{ position: 'absolute', left: '426.55px', top: '143.46px' }} className="cls_020"><span className="cls_020">Include STD code
              with telephone number</span></div>
            <div style={{ position: 'absolute', left: '220.08px', top: '154.54px' }} className="cls_019"><span className="cls_019">SECTION B -
              DETAILS OF THE PATIENT ADMITTED</span></div>
            <div style={{ position: 'absolute', left: '60.72px', top: '167.24px' }} className="cls_020"><span className="cls_020">a)</span></div>
            <div style={{ position: 'absolute', left: '77.19px', top: '167.24px' }} className="cls_020"><span className="cls_020">Name of
              Patient</span></div>
            <div style={{ position: 'absolute', left: '240.81px', top: '167.24px' }} className="cls_020"><span className="cls_020">Enter the name
              of patient</span></div>
            <div style={{ position: 'absolute', left: '426.55px', top: '167.24px' }} className="cls_020"><span className="cls_020">Name of patient
              in full</span></div>
            <div style={{ position: 'absolute', left: '60.72px', top: '180.61px' }} className="cls_020"><span className="cls_020">b)</span></div>
            <div style={{ position: 'absolute', left: '77.19px', top: '180.61px' }} className="cls_020"><span className="cls_020">IP registration
              Number</span></div>
            <div style={{ position: 'absolute', left: '240.81px', top: '180.61px' }} className="cls_020"><span className="cls_020">Enter insurance
              provider registration number</span></div>
            <div style={{ position: 'absolute', left: '426.56px', top: '180.61px' }} className="cls_020"><span className="cls_020">As allotted by
              the insurance provider</span></div>
            <div style={{ position: 'absolute', left: '60.72px', top: '193.09px' }} className="cls_020"><span className="cls_020">c)</span></div>
            <div style={{ position: 'absolute', left: '76.86px', top: '193.09px' }} className="cls_020"><span className="cls_020">Gender</span>
            </div>
            <div style={{ position: 'absolute', left: '240.81px', top: '193.09px' }} className="cls_020"><span className="cls_020">Indicate Gender
              of the patient</span></div>
            <div style={{ position: 'absolute', left: '426.55px', top: '193.09px' }} className="cls_020"><span className="cls_020">Tick Male or
              Female</span></div>
            <div style={{ position: 'absolute', left: '60.72px', top: '206.46px' }} className="cls_020"><span className="cls_020">d)</span></div>
            <div style={{ position: 'absolute', left: '76.87px', top: '206.46px' }} className="cls_020"><span className="cls_020">Age</span></div>
            <div style={{ position: 'absolute', left: '240.81px', top: '206.46px' }} className="cls_020"><span className="cls_020">Enter age of the
              patient</span></div>
            <div style={{ position: 'absolute', left: '426.55px', top: '206.46px' }} className="cls_020"><span className="cls_020">Number of years
              and months</span></div>
            <div style={{ position: 'absolute', left: '60.72px', top: '218.14px' }} className="cls_020"><span className="cls_020">e)</span></div>
            <div style={{ position: 'absolute', left: '77.19px', top: '218.14px' }} className="cls_020"><span className="cls_020">Date of
              Birth</span></div>
            <div style={{ position: 'absolute', left: '240.81px', top: '218.14px' }} className="cls_020"><span className="cls_020">Enter date of
              birth</span></div>
            <div style={{ position: 'absolute', left: '426.55px', top: '218.14px' }} className="cls_020"><span className="cls_020">Use dd-mm-yy
              format</span></div>
            <div style={{ position: 'absolute', left: '60.72px', top: '231.22px' }} className="cls_020"><span className="cls_020">f)</span></div>
            <div style={{ position: 'absolute', left: '75.57px', top: '231.22px' }} className="cls_020"><span className="cls_020">Date of
              Admission</span></div>
            <div style={{ position: 'absolute', left: '240.81px', top: '231.22px' }} className="cls_020"><span className="cls_020">Enter date of
              admission</span></div>
            <div style={{ position: 'absolute', left: '426.55px', top: '231.22px' }} className="cls_020"><span className="cls_020">Use dd-mm-yy
              format</span></div>
            <div style={{ position: 'absolute', left: '60.72px', top: '243.99px' }} className="cls_020"><span className="cls_020">g)</span></div>
            <div style={{ position: 'absolute', left: '77.09px', top: '243.99px' }} className="cls_020"><span className="cls_020">Time</span></div>
            <div style={{ position: 'absolute', left: '240.81px', top: '243.99px' }} className="cls_020"><span className="cls_020">Enter Time of
              admission</span></div>
            <div style={{ position: 'absolute', left: '426.55px', top: '243.99px' }} className="cls_020"><span className="cls_020">Use hh:mm
              format</span></div>
            <div style={{ position: 'absolute', left: '60.72px', top: '256.62px' }} className="cls_020"><span className="cls_020">h)</span></div>
            <div style={{ position: 'absolute', left: '77.19px', top: '256.62px' }} className="cls_020"><span className="cls_020">Date of
              Discharge</span></div>
            <div style={{ position: 'absolute', left: '240.81px', top: '256.62px' }} className="cls_020"><span className="cls_020">Enter date of
              Discharge</span></div>
            <div style={{ position: 'absolute', left: '426.55px', top: '256.62px' }} className="cls_020"><span className="cls_020">Use dd-mm-yy
              format</span></div>
            <div style={{ position: 'absolute', left: '60.72px', top: '270.03px' }} className="cls_020"><span className="cls_020">i)</span></div>
            <div style={{ position: 'absolute', left: '75.15px', top: '270.03px' }} className="cls_020"><span className="cls_020">Time</span></div>
            <div style={{ position: 'absolute', left: '240.81px', top: '270.03px' }} className="cls_020"><span className="cls_020">Enter time of
              Discharge</span></div>
            <div style={{ position: 'absolute', left: '426.55px', top: '270.03px' }} className="cls_020"><span className="cls_020">Use hh:mm
              format</span></div>
            <div style={{ position: 'absolute', left: '60.95px', top: '282.47px' }} className="cls_020"><span className="cls_020">j)</span></div>
            <div style={{ position: 'absolute', left: '75.39px', top: '282.47px' }} className="cls_020"><span className="cls_020">Type of
              Admission</span></div>
            <div style={{ position: 'absolute', left: '240.81px', top: '282.47px' }} className="cls_020"><span className="cls_020">Indicate type of
              admission of patient</span></div>
            <div style={{ position: 'absolute', left: '426.55px', top: '282.47px' }} className="cls_020"><span className="cls_020">Tick the right
              option</span></div>
            <div style={{ position: 'absolute', left: '60.72px', top: '295.54px' }} className="cls_020"><span className="cls_020">k)</span></div>
            <div style={{ position: 'absolute', left: '76.86px', top: '295.54px' }} className="cls_020"><span className="cls_020">If
              Maternity</span></div>
            <div style={{ position: 'absolute', left: '76.20px', top: '308.47px' }} className="cls_020"><span className="cls_020">Date of
              Delivery</span></div>
            <div style={{ position: 'absolute', left: '240.81px', top: '307.47px' }} className="cls_020"><span className="cls_020">Enter Date of
              Delivery if maternity</span></div>
            <div style={{ position: 'absolute', left: '426.55px', top: '307.47px' }} className="cls_020"><span className="cls_020">Use dd-mm-yy
              format</span></div>
            <div style={{ position: 'absolute', left: '76.20px', top: '320.20px' }} className="cls_020"><span className="cls_020">Gravida
              Status</span></div>
            <div style={{ position: 'absolute', left: '240.81px', top: '320.20px' }} className="cls_020"><span className="cls_020">Enter Gravida
              status if maternity</span></div>
            <div style={{ position: 'absolute', left: '426.55px', top: '320.51px' }} className="cls_020"><span className="cls_020">Use standard
              format</span></div>
            <div style={{ position: 'absolute', left: '60.72px', top: '333.43px' }} className="cls_020"><span className="cls_020">l)</span></div>
            <div style={{ position: 'absolute', left: '75.25px', top: '333.43px' }} className="cls_020"><span className="cls_020">Status at time of
              discharge</span></div>
            <div style={{ position: 'absolute', left: '240.81px', top: '333.42px' }} className="cls_020"><span className="cls_020">Indicate status
              of patient at time of discharge</span></div>
            <div style={{ position: 'absolute', left: '426.55px', top: '333.43px' }} className="cls_020"><span className="cls_020">Tick the right
              option</span></div>
            <div style={{ position: 'absolute', left: '60.72px', top: '347.09px' }} className="cls_020"><span className="cls_020">M) Total claimed
              amount</span></div>
            <div style={{ position: 'absolute', left: '240.81px', top: '347.09px' }} className="cls_020"><span className="cls_020">Indicate the
              total claimed amount</span></div>
            <div style={{ position: 'absolute', left: '426.55px', top: '347.09px' }} className="cls_020"><span className="cls_020">In rupees (Do
              not enter paise values)</span></div>
            <div style={{ position: 'absolute', left: '204.34px', top: '359.34px' }} className="cls_019"><span className="cls_019">SECTION C -
              DETAILS OF AILMENT DIAGNOSED (PRIMARY)</span></div>
            <div style={{ position: 'absolute', left: '60.19px', top: '372.76px' }} className="cls_020"><span className="cls_020">a)</span></div>
            <div style={{ position: 'absolute', left: '78.28px', top: '372.76px' }} className="cls_020"><span className="cls_020">ICD 10
              Code</span></div>
            <div style={{ position: 'absolute', left: '76.20px', top: '387.01px' }} className="cls_020"><span className="cls_020">Primary
              Diagnosis</span></div>
            <div style={{ position: 'absolute', left: '240.81px', top: '384.29px' }} className="cls_020"><span className="cls_020">Enter ICD 10
              Code and description of primary diagnosis</span></div>
            <div style={{ position: 'absolute', left: '426.55px', top: '387.48px' }} className="cls_020"><span className="cls_020">Standard Format
              and Open text</span></div>
            <div style={{ position: 'absolute', left: '76.21px', top: '400.11px' }} className="cls_020"><span className="cls_020">Additional
              Diagnosis</span></div>
            <div style={{ position: 'absolute', left: '240.81px', top: '400.19px' }} className="cls_020"><span className="cls_020">Enter ICD 10
              Code and description of additional diagnosis</span></div>
            <div style={{ position: 'absolute', left: '426.55px', top: '401.65px' }} className="cls_020"><span className="cls_020">Standard Format
              and Open text</span></div>
            <div style={{ position: 'absolute', left: '76.20px', top: '412.61px' }} className="cls_020"><span className="cls_020">Co-morbidities</span></div>
            <div style={{ position: 'absolute', left: '240.81px', top: '413.74px' }} className="cls_020"><span className="cls_020">Enter ICD 10
              Code and description of Co-morbidities</span></div>
            <div style={{ position: 'absolute', left: '426.55px', top: '412.98px' }} className="cls_020"><span className="cls_020">Standard Format
              and Open text</span></div>
            <div style={{ position: 'absolute', left: '60.72px', top: '426.77px' }} className="cls_020"><span className="cls_020">b)</span></div>
            <div style={{ position: 'absolute', left: '77.19px', top: '426.77px' }} className="cls_020"><span className="cls_020">ICD 10 PCS</span>
            </div>
            <div style={{ position: 'absolute', left: '76.20px', top: '441.14px' }} className="cls_021"><span className="cls_021">Procedure
              1</span></div>
            <div style={{ position: 'absolute', left: '240.81px', top: '440.41px' }} className="cls_020"><span className="cls_020">Enter ICD 10
              Code and description of first procedure</span></div>
            <div style={{ position: 'absolute', left: '426.55px', top: '440.74px' }} className="cls_020"><span className="cls_020">Standard Format
              and Open text</span></div>
            <div style={{ position: 'absolute', left: '76.20px', top: '452.98px' }} className="cls_021"><span className="cls_021">Procedure
              2</span></div>
            <div style={{ position: 'absolute', left: '240.81px', top: '452.74px' }} className="cls_020"><span className="cls_020">Enter ICD 10
              Code and description of second procedure</span></div>
            <div style={{ position: 'absolute', left: '426.55px', top: '453.23px' }} className="cls_020"><span className="cls_020">Standard Format
              and Open text</span></div>
            <div style={{ position: 'absolute', left: '76.20px', top: '465.96px' }} className="cls_021"><span className="cls_021">Procedure
              3</span></div>
            <div style={{ position: 'absolute', left: '240.81px', top: '465.50px' }} className="cls_020"><span className="cls_020">Enter ICD 10
              Code and description of third procedure</span></div>
            <div style={{ position: 'absolute', left: '426.55px', top: '466.04px' }} className="cls_020"><span className="cls_020">Standard Format
              and Open text</span></div>
            <div style={{ position: 'absolute', left: '76.20px', top: '479.32px' }} className="cls_021"><span className="cls_021">Details of
              Procedure</span></div>
            <div style={{ position: 'absolute', left: '240.81px', top: '479.07px' }} className="cls_020"><span className="cls_020">Enter the
              details of the procedure</span></div>
            <div style={{ position: 'absolute', left: '426.55px', top: '479.07px' }} className="cls_020"><span className="cls_020">Open text</span>
            </div>
            <div style={{ position: 'absolute', left: '60.72px', top: '492.31px' }} className="cls_020"><span className="cls_020">c)</span></div>
            <div style={{ position: 'absolute', left: '76.86px', top: '492.31px' }} className="cls_020"><span className="cls_020">Pre-authorization
              obtained</span></div>
            <div style={{ position: 'absolute', left: '240.81px', top: '492.24px' }} className="cls_020"><span className="cls_020">Indicate whether
              pre-authorization obtained</span></div>
            <div style={{ position: 'absolute', left: '426.55px', top: '492.24px' }} className="cls_020"><span className="cls_020">Tick Yes or
              No</span></div>
            <div style={{ position: 'absolute', left: '60.72px', top: '504.53px' }} className="cls_020"><span className="cls_020">d)</span></div>
            <div style={{ position: 'absolute', left: '77.19px', top: '504.53px' }} className="cls_020"><span className="cls_020">Pre-authorization
              Number</span></div>
            <div style={{ position: 'absolute', left: '240.81px', top: '504.46px' }} className="cls_020"><span className="cls_020">Enter
              pre-authorization number</span></div>
            <div style={{ position: 'absolute', left: '426.56px', top: '504.46px' }} className="cls_020"><span className="cls_020">As allotted by
              TPA</span></div>
            <div style={{ position: 'absolute', left: '60.72px', top: '518.24px' }} className="cls_020"><span className="cls_020">e)</span></div>
            <div style={{ position: 'absolute', left: '77.19px', top: '518.24px' }} className="cls_020"><span className="cls_020">If authorization not obtained, give reason</span></div>
            <div style={{ position: 'absolute', left: '240.81px', top: '518.24px' }} className="cls_020"><span className="cls_020">Enter reason for
              not obtaining pre-authorization number</span></div>
            <div style={{ position: 'absolute', left: '426.55px', top: '518.24px' }} className="cls_020"><span className="cls_020">Open text</span>
            </div>
            <div style={{ position: 'absolute', left: '60.72px', top: '532.56px' }} className="cls_020"><span className="cls_020">f)</span></div>
            <div style={{ position: 'absolute', left: '77.19px', top: '532.56px' }} className="cls_020"><span className="cls_020">Hospitalization
              due to injury</span></div>
            <div style={{ position: 'absolute', left: '240.81px', top: '532.56px' }} className="cls_020"><span className="cls_020">Indicate if
              hospitalization is due to injury</span></div>
            <div style={{ position: 'absolute', left: '426.55px', top: '532.49px' }} className="cls_020"><span className="cls_020">Tick Yes or
              No</span></div>
            <div style={{ position: 'absolute', left: '76.20px', top: '545.53px' }} className="cls_021"><span className="cls_021">Cause</span>
            </div>
            <div style={{ position: 'absolute', left: '240.81px', top: '545.29px' }} className="cls_020"><span className="cls_020">Indicate cause
              of injury</span></div>
            <div style={{ position: 'absolute', left: '426.55px', top: '545.22px' }} className="cls_020"><span className="cls_020">Tick the right
              option</span></div>
            <div style={{ position: 'absolute', left: '76.20px', top: '557.67px' }} className="cls_021"><span className="cls_021">If injury due to
              substance abuse/alcohol consumption test</span></div>
            <div style={{ position: 'absolute', left: '240.81px', top: '561.77px' }} className="cls_020"><span className="cls_020">Indicate whether
              test conducted</span></div>
            <div style={{ position: 'absolute', left: '426.55px', top: '561.68px' }} className="cls_020"><span className="cls_020">Tick Yes or
              No</span></div>
            <div style={{ position: 'absolute', left: '76.20px', top: '565.28px' }} className="cls_021"><span className="cls_021">conducted to
              establish this</span></div>
            <div style={{ position: 'absolute', left: '240.81px', top: '575.30px' }} className="cls_020"><span className="cls_020">Indicate whether
              injury is medico legal</span></div>
            <div style={{ position: 'absolute', left: '426.55px', top: '574.95px' }} className="cls_020"><span className="cls_020">Tick Yes or
              No</span></div>
            <div style={{ position: 'absolute', left: '76.20px', top: '578.34px' }} className="cls_021"><span className="cls_021">Medico
              Legal</span></div>
            <div style={{ position: 'absolute', left: '76.20px', top: '588.13px' }} className="cls_021"><span className="cls_021">Reported to
              Police</span></div>
            <div style={{ position: 'absolute', left: '240.81px', top: '587.97px' }} className="cls_020"><span className="cls_020">Indicate whether
              police report was filed</span></div>
            <div style={{ position: 'absolute', left: '426.55px', top: '587.88px' }} className="cls_020"><span className="cls_020">Tick Yes or
              No</span></div>
            <div style={{ position: 'absolute', left: '76.20px', top: '600.52px' }} className="cls_021"><span className="cls_021">FIR No.</span>
            </div>
            <div style={{ position: 'absolute', left: '240.81px', top: '600.35px' }} className="cls_020"><span className="cls_020">Enter first
              information report number</span></div>
            <div style={{ position: 'absolute', left: '426.56px', top: '600.27px' }} className="cls_020"><span className="cls_020">As issued by
              police authrities</span></div>
            <div style={{ position: 'absolute', left: '76.34px', top: '613.53px' }} className="cls_021"><span className="cls_021">If not reported
              to police, give reason</span></div>
            <div style={{ position: 'absolute', left: '240.81px', top: '613.28px' }} className="cls_020"><span className="cls_020">Enter reason for
              not reporting to police</span></div>
            <div style={{ position: 'absolute', left: '426.55px', top: '613.28px' }} className="cls_020"><span className="cls_020">Open text</span>
            </div>
            <div style={{ position: 'absolute', left: '219.01px', top: '626.25px' }} className="cls_019"><span className="cls_019">SECTION D -
              CLAIM DOCUMENTS SUBMITTED-CHECK LIST</span></div>
            <div style={{ position: 'absolute', left: '60.13px', top: '638.68px' }} className="cls_021"><span className="cls_021">Indicate which
              supporting documents are submitted</span></div>
            <div style={{ position: 'absolute', left: '215.94px', top: '650.99px' }} className="cls_019"><span className="cls_019">SECTION E -
              DETAILS IN CASE OF NON NETWORK HOSPITAL</span></div>
            <div style={{ position: 'absolute', left: '60.72px', top: '664.47px' }} className="cls_020"><span className="cls_020">a)</span></div>
            <div style={{ position: 'absolute', left: '78.49px', top: '664.47px' }} className="cls_020"><span className="cls_020">Address</span>
            </div>
            <div style={{ position: 'absolute', left: '240.81px', top: '664.03px' }} className="cls_020"><span className="cls_020">Enter the full
              postal address</span></div>
            <div style={{ position: 'absolute', left: '426.55px', top: '664.03px' }} className="cls_020"><span className="cls_020">Include Street,
              City and Pin Code</span></div>
            <div style={{ position: 'absolute', left: '60.72px', top: '676.35px' }} className="cls_020"><span className="cls_020">b)</span></div>
            <div style={{ position: 'absolute', left: '78.81px', top: '676.35px' }} className="cls_020"><span className="cls_020">Phone No.</span>
            </div>
            <div style={{ position: 'absolute', left: '240.81px', top: '676.61px' }} className="cls_020"><span className="cls_020">Enter the phone
              number of hospital</span></div>
            <div style={{ position: 'absolute', left: '426.55px', top: '676.36px' }} className="cls_020"><span className="cls_020">Include STD code
              with telephone number</span></div>
            <div style={{ position: 'absolute', left: '240.81px', top: '688.20px' }} className="cls_020"><span className="cls_020">Enter the
              registration number of the Hospital obtained from local body</span></div>
            <div style={{ position: 'absolute', left: '60.72px', top: '691.76px' }} className="cls_020"><span className="cls_020">c)</span></div>
            <div style={{ position: 'absolute', left: '78.48px', top: '691.76px' }} className="cls_020"><span className="cls_020">Registration No.
              with State Code</span></div>
            <div style={{ position: 'absolute', left: '426.56px', top: '692.40px' }} className="cls_020"><span className="cls_020">As allocated by
              the City Corporation / Municipality</span></div>
            <div style={{ position: 'absolute', left: '240.81px', top: '695.81px' }} className="cls_020"><span className="cls_020">like City
              Corporation / Municipality</span></div>
            <div style={{ position: 'absolute', left: '60.72px', top: '707.24px' }} className="cls_020"><span className="cls_020">d)</span></div>
            <div style={{ position: 'absolute', left: '78.81px', top: '707.24px' }} className="cls_020"><span className="cls_020">Hospital
              PAN</span></div>
            <div style={{ position: 'absolute', left: '240.81px', top: '706.90px' }} className="cls_020"><span className="cls_020">Enter the
              permanent account number</span></div>
            <div style={{ position: 'absolute', left: '426.56px', top: '706.86px' }} className="cls_020"><span className="cls_020">As allocated by
              the Income Tax Department</span></div>
            <div style={{ position: 'absolute', left: '60.72px', top: '719.80px' }} className="cls_020"><span className="cls_020">e)</span></div>
            <div style={{ position: 'absolute', left: '78.81px', top: '719.80px' }} className="cls_020"><span className="cls_020">Number of
              Inpatient beds</span></div>
            <div style={{ position: 'absolute', left: '240.81px', top: '720.27px' }} className="cls_020"><span className="cls_020">Enter the number
              of inpatient beds</span></div>
            <div style={{ position: 'absolute', left: '426.55px', top: '719.59px' }} className="cls_020"><span className="cls_020">Digits</span>
            </div>
            <div style={{ position: 'absolute', left: '60.72px', top: '732.13px' }} className="cls_020"><span className="cls_020">f)</span></div>
            <div style={{ position: 'absolute', left: '77.19px', top: '732.13px' }} className="cls_020"><span className="cls_020">Facilities
              available in the hospital</span></div>
            <div style={{ position: 'absolute', left: '240.81px', top: '733.07px' }} className="cls_020"><span className="cls_020">Indicate
              facilities available in the hospital</span></div>
            <div style={{ position: 'absolute', left: '426.55px', top: '731.92px' }} className="cls_020"><span className="cls_020">Tick the right
              option. If others, please specify</span></div>
            <div style={{ position: 'absolute', left: '237.42px', top: '745.50px' }} className="cls_019"><span className="cls_019">SECTION F -
              DECLARATION BY THE HOSPITAL</span></div>
            <div style={{ position: 'absolute', left: '62.87px', top: '757.59px' }} className="cls_020"><span className="cls_020">Read declaration
              carefully and mention date (in dd:mm:yy format), place (open text) and sign. and stamp</span></div>
          </div>
          <div style={{ position: 'absolute', left: '50%', marginLeft: '-306px', top: '3208px', width: '612px', height: '792px', borderStyle: 'outset', overflow: 'hidden' }}>
            <div style={{ position: 'absolute', left: '0px', top: '0px' }}>
              <img src={background5} width={612} height={792} />
            </div>
            <div style={{ position: 'absolute', left: '119.30px', top: '70.10px' }} className="cls_036"><span className="cls_036">PPN
              NETWORK-DECLARATION BY PATIENT/PATIENT’S ATTENDANT</span>

              <div><span className="spanLine" style={{ marginLeft: '5px', marginTop: '12px', width: '266px' }} />
              </div>

              
              <div><span className="spanLine" style={{ marginLeft: '38px', marginTop: '9px', width: '266px' }} />
              </div>

              <div><span className="spanLine" style={{ marginLeft: '94px', marginTop: '8px', width: '206px' }} />
              </div>

              <div><span className="spanLine" style={{ marginLeft: '50px', marginTop: '7px', width: '106px' }} />
              </div>

              <div><span className="spanLine" style={{ marginLeft: '250px', marginTop: '7px', width: '106px' }} />
              </div>

              <div><span className="spanLine" style={{ marginLeft: '250px', marginTop: '7px', width: '106px' }} />
              </div>

              <div><span className="spanLine" style={{ marginLeft: '-11px', marginTop: '7px', width: '266px' }} />
              </div>

              <div><span className="spanLine" style={{ marginLeft: '-100px', marginTop: '7px', width: '106px' }} />
              </div>
              
              <div><span className="spanLine" style={{ marginLeft: '140px', marginTop: '7px', width: '106px' }} />
              </div>

              <div><span className="spanLine" style={{ marginLeft: '31px', marginTop: '-2px', width: '196px' }} />
              </div>

              <div><span className="spanLine" style={{ marginLeft: '31px', marginTop: '102px', width: '196px' }} />
              </div>

              <div><span className="spanLine" style={{ marginLeft: '31px', marginTop: '17px', width: '196px' }} />
              </div>

              <div><span className="spanLine" style={{ marginLeft: '10px', marginTop: '95px', width: '346px' }} />
              </div>

              <div><span className="spanLine" style={{ marginLeft: '-250px', marginTop: '4px', width: '146px' }} />
              </div>

              <div><span className="spanLine" style={{ marginLeft: '-75px', marginTop: '6px', width: '346px' }} />
              </div>

              <div><span className="spanLine" style={{ marginLeft: '-75px', marginTop: '6px', width: '346px' }} />
              </div>

              <div><span className="spanLine" style={{ marginLeft: '-195px', marginTop: '6px', width: '236px' }} />
              </div>

              <div><span className="spanLine" style={{ marginLeft: '-228px', marginTop: '165px', width: '136px' }} />
              </div>

              <div><span className="spanLine" style={{ marginLeft: '208px', marginTop: '-25px', width: '136px' }} />
              </div>

              <div><span className="spanLine" style={{ marginLeft: '350px', marginTop: '-1310px', width: '36px' }} />
              </div>



            </div>
            <div style={{ position: 'absolute', left: '66.98px', top: '93.26px' }} className="cls_024"><span className="cls_024">Name of the
              Hospital:……………………………………………………………………………………………….Date :………………………….</span></div>
            <div style={{ position: 'absolute', left: '66.98px', top: '112.70px' }} className="cls_024"><span className="cls_024">Address:…………………………………………………………………………………………………………………………………………………….</span></div>
            <div style={{ position: 'absolute', left: '66.98px', top: '132.38px' }} className="cls_025"><span className="cls_025">PATIENT NAME
              (BLOCK LETTERS):………………………………………………………………… AGE/SEX :………………….</span></div>
            <div style={{ position: 'absolute', left: '66.98px', top: '149.42px' }} className="cls_025"><span className="cls_025">IP No
              :………………………………. UHID No :…………………………………… Mobile No of Patient :……………………………</span></div>
            <div style={{ position: 'absolute', left: '66.98px', top: '166.34px' }} className="cls_025"><span className="cls_025">Date of Admission
              :………………………………………….. Time of Admission :…………………………………………………</span></div>
            <div style={{ position: 'absolute', left: '66.98px', top: '183.38px' }} className="cls_025"><span className="cls_025">Date of
              Discharge:…………………………………………… Time of Discharge:……………………………………………………..</span></div>
            <div style={{ position: 'absolute', left: '66.98px', top: '200.42px' }} className="cls_025"><span className="cls_025">Address of the
              Patient :…………………………………………………………………………………………………………….</span></div>
            <div style={{ position: 'absolute', left: '66.98px', top: '217.34px' }} className="cls_025"><span className="cls_025">NAME OF THE
              ATTENDANT :………………………………………………Relationship with the Patient:…………………………………</span></div>
            <div style={{ position: 'absolute', left: '66.98px', top: '234.38px' }} className="cls_025"><span className="cls_025">Mobile No. of
              Attendant :……………………………………….. Address:…………………………………………………………………………………</span></div>
            <div style={{ position: 'absolute', left: '66.98px', top: '261.41px' }} className="cls_037"><span className="cls_037">Declaration
              regarding Insurance Policy (Strike off the option which is not applicable)</span></div>
            <div style={{ position: 'absolute', left: '84.98px', top: '273.41px' }} className="cls_027"><span className="cls_027">(i)</span></div>
            <div style={{ position: 'absolute', left: '120.98px', top: '273.41px' }} className="cls_029"><span className="cls_029">Declaration when
              patient has no insurance policy:</span></div>
            <div style={{ position: 'absolute', left: '123.62px', top: '288.29px' }} className="cls_030"><span className="cls_030">· </span><span className="cls_024"> I declare that I do not have any insurance policy.</span></div>
            <div style={{ position: 'absolute', left: '84.98px', top: '316.97px' }} className="cls_027"><span className="cls_027">(ii)</span></div>
            <div style={{ position: 'absolute', left: '120.98px', top: '316.97px' }} className="cls_029"><span className="cls_029">Declaration when
              patient has insurance policy:</span></div>
            <div style={{ position: 'absolute', left: '123.62px', top: '331.85px' }} className="cls_030"><span className="cls_030">· </span><span className="cls_024"> I declare that I have following Insurance Policies</span></div>
            <div style={{ position: 'absolute', left: '84.98px', top: '354.17px' }} className="cls_029"><span className="cls_029">Policy No/TPA
              card No:_________________________________________</span></div>
            <div style={{ position: 'absolute', left: '84.98px', top: '381.05px' }} className="cls_029"><span className="cls_029">Insurance
              Company:____________________________________________</span></div>
            <div style={{ position: 'absolute', left: '72.14px', top: '407.47px' }} className="cls_031"><span className="cls_031">2) Whether
              patient opted for Eligible Room Category under</span></div>
            <div style={{ position: 'absolute', left: '72.14px', top: '420.31px' }} className="cls_031"><span className="cls_031">Policy:</span><span className="cls_032">Yes / No</span></div>
            <div style={{ position: 'absolute', left: '72.02px', top: '446.23px' }} className="cls_024"><span className="cls_024">3) In case,
              policyholder wishes to avail better facility:</span></div>
            <div style={{ position: 'absolute', left: '72.02px', top: '471.55px' }} className="cls_024"><span className="cls_024">Name of the
              Additional Facility/ Provision/ Procedure/ Treatment</span></div>
            <div style={{ position: 'absolute', left: '72.02px', top: '487.27px' }} className="cls_024"><span className="cls_024">…………………………………………………………………………………………………………………………………………... which costs</span></div>
            <div style={{ position: 'absolute', left: '72.02px', top: '502.87px' }} className="cls_024"><span className="cls_024">Rs
              :……………………………………………………. (In words:</span></div>
            <div style={{ position: 'absolute', left: '72.02px', top: '518.59px' }} className="cls_024"><span className="cls_024">………………………………………………………………………………………………………………………………………………….</span></div>
            <div style={{ position: 'absolute', left: '72.02px', top: '534.19px' }} className="cls_024"><span className="cls_024">…………………………………………………………………………………………………………………………………………………………………</span></div>
            <div style={{ position: 'absolute', left: '72.02px', top: '549.91px' }} className="cls_024"><span className="cls_024">…………………………………………………………………………………….) only.</span></div>
            <div style={{ position: 'absolute', left: '66.98px', top: '578.98px' }} className="cls_024"><span className="cls_024">On my own option,
              I wish to avail above better facility and I hereby agree to pay on my free will, after</span></div>
            <div style={{ position: 'absolute', left: '66.98px', top: '592.42px' }} className="cls_024"><span className="cls_024">being explained
              in detail by the Hospital authority in my own and understandable language about the</span></div>
            <div style={{ position: 'absolute', left: '66.98px', top: '605.86px' }} className="cls_024"><span className="cls_024">above mentioned
              Additional Facility/Procedure/Treatment and associated cost of it, which is over and</span></div>
            <div style={{ position: 'absolute', left: '66.98px', top: '619.30px' }} className="cls_024"><span className="cls_024">above the agreed
              PPN tariff.Further, if I opt to go for final bill reimbursement with insurance company,</span></div>
            <div style={{ position: 'absolute', left: '66.98px', top: '632.74px' }} className="cls_024"><span className="cls_024">respective
              insurance company will reimburse only as peragreed PPN tariffrates and balance amount will</span></div>
            <div style={{ position: 'absolute', left: '66.98px', top: '646.18px' }} className="cls_024"><span className="cls_024">be borne by
              myself or patient only.</span></div>
            <div style={{ position: 'absolute', left: '66.98px', top: '670.78px' }} className="cls_024"><span className="cls_024">I have also been
              explained that when room service of a category better than eligible room rent is availed</span></div>
            <div style={{ position: 'absolute', left: '66.98px', top: '684.22px' }} className="cls_024"><span className="cls_024">by the patient,
              not only the difference in room rent but also an equal proportion of all other charges</span></div>
            <div style={{ position: 'absolute', left: '66.98px', top: '697.70px' }} className="cls_024"><span className="cls_024">associated with
              the treatment shall be borne by me.</span></div>
            <div style={{ position: 'absolute', left: '66.98px', top: '724.42px' }} className="cls_024"><span className="cls_024">Signature
              :…………………………………………</span></div>
            <div style={{ position: 'absolute', left: '283.01px', top: '724.42px' }} className="cls_024"><span className="cls_024">Signature
              :…………………………………………</span></div>
            <div style={{ position: 'absolute', left: '66.98px', top: '738.36px' }} className="cls_031"><span className="cls_031">Name of the
              Patient/Patient’s attendant:</span></div>
            <div style={{ position: 'absolute', left: '283.01px', top: '737.88px' }} className="cls_024"><span className="cls_024">Name of the
              Hospital Representative &amp;Hospital Seal :</span></div>
          </div>
        </div>

      </header>
    </div>
  );
}

export default App;
