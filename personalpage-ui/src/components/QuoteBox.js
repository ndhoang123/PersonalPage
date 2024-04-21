import '../styles/QuoteBox.css'

function QuoteBox(props) {
    console.log("Data from compononent:" + props.content)
    return (
        <div class="blockquote-wrapper">
        <div class="blockquote">
            <h1>
            Intuitive design happens when <span style={{color:"#ffffff"}}>current knowledge</span> is the same as the <span style={{color:"#ffffff"}}>target knowledge.</span>
            </h1>
            <h4>&mdash;Jared Spool</h4>
        </div>
        </div>
    )
}

export default QuoteBox;